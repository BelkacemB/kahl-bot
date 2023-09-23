import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'كيف استخرج جواز سفر ؟',
    message: `كيف استخرج جواز سفر ؟`
  },
  {
    heading: 'ما هي أفضل أماكن سياحية في الجزائر ؟',
    message: `ما هي أفضل أماكن سياحية في الجزائر ؟`
  },
  {
    heading: 'كيف أطلب يد عشيقتي ؟',
    message: `كيف أطلب يد عشيقتي ؟`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4 text-right">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          GPT-مرحبا بك في بوابة الدردشة مع كهل
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          كهل جي-بي-تي مساعد إداري إلكتروني هدفه تفعيل الحافلة الرقمية و دفع
          عجلة التنمية و صيانة سيرورة كاش حاجة
        </p>
        <p className="leading-normal text-muted-foreground">سقسي واش حبيت</p>
        <div className="mt-4 flex flex-col items-end space-y-2 text-right">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <span className="mx-2">{message.heading}</span>•{' '}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
