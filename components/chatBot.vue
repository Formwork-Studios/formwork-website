<script lang="ts" setup>
import { Roles } from "~~/lib/Roles";
const keyword = ref("");
var generateText = ref("");
const chat: Ref<Chat[]> = ref([
	{
		id: 1,
		role: Roles.Assistant,
		content: "Hello there! How can I help you?",
		timestamp: Date.now(),
		loader: false,
	},
]);

const handleClick = async () => {
	if (keyword.value === "") return;
	const temp = keyword.value;
	keyword.value = "";
	chat.value.push({
		id: chat.value.length + 1,
		role: Roles.User,
		content: temp,
		timestamp: Date.now(),
		loader: false,
	});
	chat.value.push({
		id: chat.value.length + 1,
		role: Roles.Assistant,
		content: "",
		timestamp: Date.now(),
		loader: true,
	});
	const completion = await fetch("/api/chat", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chat: chat.value.slice(0, chat.value.length - 1),
		}),
	});
	if (!completion.body) return;

	const reader = completion.body.getReader();
	const decoder = new TextDecoder("utf-8");
	const read = async (): Promise<void> => {
		console.log(generateText.value);

		const { done, value } = await reader.read();
		if (done) {
			console.log("release locked");
			chat.value[chat.value.length - 1].loader = false;
			chat.value[chat.value.length - 1].content = generateText.value;
			generateText.value = "";
			return reader.releaseLock();
		}

		const chunk = decoder.decode(value);
		console.log(chunk);
		const jsonData = chunk
			.split("data: ")
			.map((val) => {
				console.log("val: ", val);

				return val.replaceAll("\n", "");
			})
			.filter((val) => val !== "");

		var textOutput = "";

		for (let i = 0; i < jsonData.length; i++) {
			try {
				console.log({
					content: JSON.parse(jsonData[i]).choices[0].delta.content,
				});

				if (
					JSON.parse(jsonData[i]).choices[0].delta.content === "\n\n"
				) {
					textOutput = "";
				} else {
					textOutput = JSON.parse(jsonData[i]).choices[0].delta
						.content;
				}
			} catch (e) {
				console.log(e);
			}

			if (textOutput !== "" && textOutput !== undefined) {
				generateText.value = generateText.value + textOutput;
			}
			textOutput = "";
		}
		return read();
	};
	await read();
};
</script>

<template>
	<div class="h-full w-full flex flex-col justify-end">
		<div class="flex flex-col">
			<div
				v-for="item in chat"
				:key="item.id"
				class="flex flex-row font-workSans"
			>
				<div
					v-if="item.role === 'assistant' && !item.loader"
					class="min-h-[32px] h-fit p-1 px-2 bg-neutral-900 w-full"
					v-text="item.content"
				/>
				<div
					v-else-if="item.loader"
					class="h-fit min-h-[32px] p-1 px-2 bg-neutral-900 w-full"
				>
					<div class="flex flex-row h-fit">
						<div
							class="output relative"
							:class="{ emptyState: generateText === '' }"
						>
							{{ generateText }}
						</div>
					</div>
				</div>
				<div
					v-else
					class="p-1 px-2 min-h-[32px] h-fit"
					v-text="item.content"
				/>
			</div>
		</div>

		<div class="flex flex-row">
			<input
				@keyup.enter="handleClick"
				v-model="keyword"
				class="font-workSans bg-gray1 w-full rounded-none mr-2 focus:outline-gray-500 p-1"
			/>
			<button
				class="font-workSans disabled:opacity-60 disabled:cursor-not-allowed"
				@click="handleClick"
				v-text="'Send'"
				:disabled="keyword === ''"
			/>
		</div>
	</div>
</template>

<style scoped>
.output::after {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	content: "";
	display: inline-block;
	width: 0.5rem;
	height: 1rem;
	background-color: #6b7280;
	margin-left: 4px;
}

.emptyState::after {
	transform: translateY(25%) !important;
	animation: blink 0.8s step-start infinite;
}
</style>
