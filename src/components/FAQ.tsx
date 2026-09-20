import { useState } from 'react'
import { useLanguage } from '../i18n'

const faqs = [
  {
    q: 'What does the agency do?',
    a: 'Nordlys Creator Agency recruits, supports, and rewards TikTok creators. We provide account protection assistance, a direct support channel, monthly coin bonus opportunities, and a welcome gift when you join.',
  },
  {
    q: 'Who can join?',
    a: 'We accept TikTok creators at various stages. Our team reviews each application individually — what matters most is your consistency, content quality, and commitment to your craft. There is no strict minimum follower count.',
  },
  {
    q: 'How does account support work?',
    a: 'As a Nordlys creator you get access to our direct support channel. When you encounter an issue, you contact us and our team provides guidance on how to navigate the situation. We are an independent agency and cannot override TikTok platform decisions.',
  },
  {
    q: 'What happens if my account gets restricted?',
    a: "Contact us immediately through your creator support channel. We'll help you understand what happened, what options are available, and how to proceed. We cannot guarantee restorations — but we'll do everything we can to support you.",
  },
  {
    q: 'How do monthly coin bonuses work?',
    a: 'When you hit predefined monthly coin milestones, you become eligible for a bonus reward in addition to your regular TikTok income. Exact milestone thresholds and bonus values are communicated individually to each creator and are subject to agency terms.',
  },
  {
    q: 'What is the welcome gift?',
    a: "Every approved creator who joins Nordlys receives a welcome gift. We keep the details as a surprise — you'll find out when you get approved and onboarded.",
  },
  {
    q: 'Is there a cost to join?',
    a: 'Joining Nordlys is free. We operate as a creator partner, not a subscription service. Any specific terms are discussed during the onboarding process.',
  },
  {
    q: 'How long does the application process take?',
    a: 'Most applications are reviewed within 3–7 business days. Our team will reach out directly via the contact information you provide.',
  },
  {
    q: 'Do I need a certain number of followers?',
    a: "We don't set a strict follower requirement. We look at your content, consistency, engagement, and coin activity. Quality and commitment matter more than raw follower numbers.",
  },
  {
    q: 'How can I contact the agency?',
    a: 'Submit your application through this website and our team will reach out. Existing creators have access to a direct support channel after onboarding.',
  },
]

interface FAQProps {
  fullPage?: boolean
}

export default function FAQ({ fullPage = false }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)
  const { translate } = useLanguage()

  return (
    <section id="faq" className={fullPage ? 'py-24 md:py-32' : 'py-20 md:py-28'}>
      <div className={fullPage ? 'max-w-4xl mx-auto px-6 pt-12 md:pt-20' : 'max-w-3xl mx-auto px-6'}>
        <div className="text-center mb-16">
          <div className="section-label mb-4">FAQ</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Questions answered.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border transition-all duration-300"
              style={{
                borderColor: open === i ? 'rgba(245,185,66,0.4)' : 'rgba(245,185,66,0.12)',
                background: open === i ? 'rgba(245,185,66,0.07)' : '#0e0d0a',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-white text-sm leading-snug">{translate(faq.q)}</span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: open === i ? 'rgba(245,185,66,0.6)' : 'rgba(245,185,66,0.2)',
                    color: open === i ? '#f5b942' : '#a99367',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '220px' : '0' }}
              >
                <p className="px-6 pb-5 text-sm text-[#8892b8] leading-relaxed">{translate(faq.a)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
