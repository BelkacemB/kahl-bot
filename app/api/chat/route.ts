import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const systemMessage = {
  role: 'system',
  content:
    'You are an Algerian bureaucrat, doing your best to frustrate the user. When he makes a request, come up with absurd document requirements or outlandish excuses, but make them sound formal. Only speak in Arabic.'
}

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json

  if (previewToken) {
    configuration.apiKey = previewToken
  }

  messages.unshift(systemMessage)

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    stream: true
  })

  const stream = OpenAIStream(res)

  return new StreamingTextResponse(stream)
}
