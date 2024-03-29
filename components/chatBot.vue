<script lang="ts" setup>
import { Roles } from "~~/lib/Roles";
const keyword = ref("");
let generateText = ref(" ");
const message = "Hello there! How can I help you?";
let firstMessage = ref("");
let display = ref("inline-block");

var interval = setInterval(() => {
	if (firstMessage.value.length < message.length) {
		firstMessage.value = message.slice(0, firstMessage.value.length + 1);
	} else {
		clearInterval(interval);
	}
}, 25);

setTimeout(() => {
	display.value = "none";
}, 25*message.length + 2000);

const chat: Ref<Chat[]> = ref([
	{
		id: 1,
		role: Roles.Assistant,
		content: firstMessage.value,
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
		// console.log(generateText.value);

		const { done, value } = await reader.read();
		if (done) {
			// console.log("release locked");
			chat.value[chat.value.length - 1].loader = false;
			chat.value[chat.value.length - 1].content = generateText.value;
			generateText.value = "";
			return reader.releaseLock();
		}

		const chunk = decoder.decode(value);
		// console.log(chunk);
		const jsonData = chunk
			.split("data: ")
			.map((val) => {
				// console.log("val: ", val);

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
    <div class="flex flex-col h-screen p-2 md:p-10 md:pt-16">
        <div class="flex flex-col h-full bg-stone-900 shadow-md">
            <div class=" bg-white px-4 py-1 box-content sticky top-14 flex flex-col md:flex-row md:items-end r-0">
                <p class="font-workSans text-black font-black text-4xl">CHATBOT</p>
                <p class="font-workSans text-black text-sm ml-2 mb-1">
                    Powered by GPT-4 (using the recent <a class="text-secondary" href="https://stevejobsarchive.com/book">Steve Jobs Book</a> as knowledge base)
                </p>
            </div>
            <div id="chatarea" class="flex-grow w-full flex flex-col justify-end p-4 md:p-6">
         
		<div class="flex flex-col">
			<div
				v-for="item, i in chat"
				:key="item.id"
				class="flex flex-row font-workSans"
			>
				<div
					v-if="i === 0"
					class="min-h-[32px] h-fit p-1 px-1 md:px-2 bg-neutral-950 w-full first-message relative name"
					v-text="firstMessage"
					:style="{'--display': display}"
				/>
				<div
					v-else-if="item.role === 'assistant' && !item.loader"
					class="min-h-[32px] h-fit p-1 px-1 md:px-2 bg-neutral-950 w-full name"
					v-text="item.content"
				/>
				<div
					v-else-if="item.loader"
					class="h-fit min-h-[32px] p-1 px-1 md:px-2 bg-neutral-950 w-full chatbot shadow-md "
				>
					<div class="flex flex-row h-fit">
						<div
							class="output relative name"
						>
							{{ generateText }}
						</div>
					</div>
				</div>
				<div
					v-else
					class="p-1 px-2 min-h-[32px] h-fit user"
					v-text="item.content"
				/>
			</div>
		</div>

		<div class="relative flex flex-row mt-4 items-center">
    <input
        @keyup.enter="handleClick"
        v-model="keyword"
        class="font-workSans bg-gray1 w-full rounded-none focus:outline-gray-500 p-1 text-black pr-10 shadow-md"
    />
    <button
        class="text-primary font-workSans disabled:opacity-60 disabled:cursor-not-allowed absolute right-2 top-1/2 transform -translate-y-1/2"
        @click="handleClick"
        :disabled="keyword === ''"
    >
        <i-mdi-send class="text-xl" />
    </button>
</div>


		</div>
		</div>
	</div>
</template>

<style scoped>
.first-message::after {
	content: "";
	display: var(--display);
	width: 0.5rem;
	height: 1rem;
	background-color: #6b7280;
	margin-left: 4px;
	margin-top: auto;
	margin-bottom: auto;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	animation: blink 0.8s step-start infinite;

}
@keyframes blink {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
.output::after {
	position: absolute;
	bottom: 0;
	transform: translateY(-25%);
	content: "";
	display: inline-block;
	width: 0.5rem;
	height: 1rem;
	background-color: #6b7280;
	margin-left: 4px;
	animation: blink 0.8s step-start infinite;
}

.name::before {
	content: "Chatbot: ";
	color: #a0a0a0;
}

.emptyState::after {
	transform: translateY(25%) !important;
	animation: blink 0.8s step-start infinite;
}
.user::before {
    content: "You: ";
    color: #a0a0a0;
    /* Add other styles as needed */
}

/* .chatbot::before {
    content: "Chatbot: ";
    color: #a0a0a0;
    /* Add other styles as needed * /
} */
</style>
