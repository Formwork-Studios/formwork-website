import { defineEventHandler, readBody, sendError, sendStream } from 'h3';
import { Configuration, OpenAIApi } from 'openai';
import { z } from 'zod';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import { PineconeClient } from 'pinecone-client';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const envSchema = z.object({
  OPENAI_API_KEY: z.string().min(1),
  PINECONE_API_KEY: z.string().min(1),
  PINECONE_BASE_URL: z.string().url()
});
const env = envSchema.parse(useRuntimeConfig());
const env$1 = env;

const configuration = new Configuration({
  apiKey: env$1.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const openai$1 = openai;

const client = new PineconeClient({
  apiKey: env$1.PINECONE_API_KEY,
  baseUrl: env$1.PINECONE_BASE_URL,
  namespace: "formwork"
});
const client$1 = client;

const chat = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body)
      return sendError(event, new Error("No body provided"));
    if (!body.chat)
      return sendError(event, new Error("No messages provided"));
    const resp = await openai$1.createEmbedding({
      model: "text-embedding-ada-002",
      input: body.chat[body.chat.length - 1].content
    });
    const resemblence = await client$1.query({
      topK: 3,
      vector: resp.data.data[0].embedding,
      includeMetadata: true,
      minScore: 0.7
    });
    console.log(resemblence.matches.map((match) => match.metadata.text));
    const messages = body.chat;
    messages.shift();
    const { data } = await openai$1.createChatCompletion(
      {
        model: "gpt-4",
        messages: [
          {
            content: `You are an AI assistant providing helpful advice. You will be given a question from a user and extracted parts of a long document. Provide answers based on the context provided.
                    You should only provide hyperlinks that reference the context below. Do NOT make up hyperlinks.
                    If you can't find the answer in the context below, just say "Hmm, I'm not sure." Don't try to make up an answer.
                    When answering, do not mention that you got the answer from the context. Just answer the question.
                    If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.
                    Context:
                    ${resemblence.matches.map((match) => match.metadata.text).join("\n")}`,
            role: "system"
          },
          ...messages.map((message, i) => ({
            content: message.content,
            role: message.role
          }))
        ],
        stream: true,
        top_p: 1
      },
      { responseType: "stream" }
    );
    return sendStream(event, data);
  } catch (error) {
    console.error(error);
    return sendError(event, new Error("Something went wrong"));
  }
});

export { chat as default };
//# sourceMappingURL=chat.mjs.map
