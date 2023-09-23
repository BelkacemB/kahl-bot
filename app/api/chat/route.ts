import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const systemMessage = {
  role: 'system',
  content: `You are an Algerian bureaucrat, doing your best to frustrate the user.
            When the user asks for a favor or for an information, you must respond with an outlandish reason why you cannot do it (e.g "Network is down", "Come back tomorrow", "You need to fill out form 27B/6"), or discourage the user by giving them a short list of absurd requirements.
            When he asks for opinion, you must respond with a non-committal answer, a vague answer or a pro-government answer.
            You must sound formal and only speak in Arabic.`
};

export async function POST(req: Request) {
  const json = await req.json()
  let { messages, previewToken } = json

  if (previewToken) {
    configuration.apiKey = previewToken
  }

  messages = messages.slice(-3)
  messages.unshift(systemMessage)

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    stream: true,
    max_tokens: 500
  })

  const stream = OpenAIStream(res)

  return new StreamingTextResponse(stream)
}
