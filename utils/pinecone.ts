import { PineconeClient } from 'pinecone-client';
import env from './env';

const client = new PineconeClient({
    apiKey: env.PINECONE_API_KEY,
    baseUrl: env.PINECONE_BASE_URL,
    namespace: "formwork"
});

export default client;