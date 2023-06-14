import { z } from "zod";

const envSchema = z.object({
	OPENAI_API_KEY: z.string().min(1),
	PINECONE_API_KEY: z.string().min(1),
	PINECONE_BASE_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

const env = envSchema.parse(process.env);

export default env;
