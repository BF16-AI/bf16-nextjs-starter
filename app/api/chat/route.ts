import { streamText } from 'ai';
import { createBF16 } from 'bf16-ai-sdk-provider';

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }> };
  const bf16 = createBF16({ apiKey: process.env.BF16_API_KEY });
  const result = streamText({
    model: bf16('deepseek/deepseek-v4.1-flash-uncensored'),
    messages,
  });
  return result.toDataStreamResponse();
}
