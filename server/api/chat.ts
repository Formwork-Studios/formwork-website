import openai from "../../utils/openAI";
import client from "../../utils/pinecone";

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		if (!body) return sendError(event, new Error("No body provided"));
		if (!body.chat)
			return sendError(event, new Error("No messages provided"));

		const resp = await openai.createEmbedding({
			model: "text-embedding-ada-002",
			input: (body.chat as Chat[])[body.chat.length - 1].content,
		});

		const resemblence = await client.query({
			topK: 3,
			vector: resp.data.data[0].embedding,
			includeMetadata: true,
			minScore: 0.7,
		});
		console.log(resemblence.matches.map((match) => match.metadata.text));
		

		const messages = body.chat as Chat[];
		messages.shift();

		const { data } = await openai.createChatCompletion(
			{
				model: "gpt-4",
				messages: [
					{
						content: `You are an AI assistant providing helpful insights on Steve Jobs' biography. You will be given a question from a user and extracted parts of Steve Jobs' biography. Provide answers based on the context provided.
                    You should only provide hyperlinks that reference the context below. Do NOT make up hyperlinks.
                    If you can't find the answer in the context below, just say "Hmm, I'm not sure." Don't try to make up an answer.
                    When answering, do not mention that you got the answer from the context. Just answer the question.
                    If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.
                    Context:
                    ${resemblence.matches
						.map((match) => match.metadata.text as string)
						.join("\n")}`,
						role: "system",
					},
					...messages.map((message, i) => ({
						content: message.content,
						role: message.role,
					})),
				],
				stream: true,
				top_p: 1,
			},
			{ responseType: "stream" }
		);

		return sendStream(event, data);
	} catch (error) {
		console.error(error);
		return sendError(event, new Error("Something went wrong"));
	}
});
