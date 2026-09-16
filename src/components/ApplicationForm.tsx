import { useState } from 'react'
import { useLanguage } from '../i18n'

const categories = [
  'Dance & Entertainment',
  'Gaming',
  'Lifestyle',
  'Fashion & Beauty',
  'Food & Cooking',
  'Fitness & Health',
  'Comedy & Skits',
  'Education',
  'Music',
  'Travel',
  'Tech & Reviews',
  'Other',
]

const followerRanges = [
  'Under 10K',
  '10K – 50K',
  '50K – 100K',
  '100K – 500K',
  '500K – 1M',
  '1M+',
]

const coinRanges = [
  'Under 50K / month',
  '50K – 100K / month',
  '100K – 250K / month',
  '250K – 500K / month',
  '500K – 1M / month',
  '1M+ / month',
]

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)
  const { translate } = useLanguage()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="apply" className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#b87916] to-[#ffd166] flex items-center justify-center text-4xl mx-auto mb-6">
            ✓
          </div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">{translate('Application Received')}</h2>
          <p className="text-[#8892b8] text-lg leading-relaxed">
            Thank you for applying. Our team will review your application and reach out within 3–7 business days.
            Keep creating — we'll be in touch.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,185,66,0.1) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-label mb-4">{translate('Apply Now')}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            {translate('Become a')}
            <span className="aurora-text"> {translate('Nordlys creator.')}</span>
          </h2>
          <p className="text-[#8892b8] text-base">
            Fill out your application below. We review every submission personally.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-10 rounded-3xl border border-[rgba(120,140,220,0.15)] bg-[#0d1120] space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" type="text" placeholder="Your full name" required />
            <Field label="TikTok Username" name="tiktok" type="text" placeholder="@yourusername" required />
            <Field label="Email Address" name="email" type="email" placeholder="you@email.com" required />
            <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+1 234 567 8900" />
            <Field label="Country" name="country" type="text" placeholder="Your country" required />
            <Field label="TikTok Profile URL" name="url" type="url" placeholder="https://tiktok.com/@you" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SelectField label="TikTok Followers" name="followers" options={followerRanges} required />
            <SelectField label="Avg. Monthly Coins" name="coins" options={coinRanges} required />
          </div>

          <SelectField label="Content Category" name="category" options={categories} required />

          <div>
            <label className="block text-sm font-medium text-[#c8d0f0] mb-2">
              {translate('Why do you want to join Nordlys?')}
            </label>
            <textarea
              name="why"
              rows={4}
              required
              placeholder="Tell us about yourself and why you'd like to join the agency..."
              className="w-full rounded-xl bg-[#0e0d0a] border border-[rgba(245,185,66,0.16)] text-[#fff8e7] placeholder-[#a99367] text-sm px-4 py-3 focus:outline-none focus:border-[rgba(245,185,66,0.55)] focus:ring-1 focus:ring-[rgba(245,185,66,0.3)] transition-colors resize-none"
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                className="sr-only"
                required
              />
              <div
                className="w-5 h-5 rounded border flex items-center justify-center transition-all"
                style={{
                  borderColor: consent ? '#f5b942' : 'rgba(245,185,66,0.3)',
                  background: consent ? '#f5b942' : 'transparent',
                }}
              >
                {consent && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-[#8892b8] leading-snug">
              I agree that Nordlys Creator Agency may use my application details to review my candidacy and contact me. I understand this is an independent creator agency not affiliated with TikTok.
            </span>
          </label>

          <button
            type="submit"
            disabled={!consent}
            className="w-full py-4 rounded-full font-semibold text-base transition-all"
            style={{
              background: consent
                ? 'linear-gradient(135deg, #b87916, #f5b942)'
                : 'rgba(120,140,220,0.15)',
              color: consent ? 'white' : '#8892b8',
              cursor: consent ? 'pointer' : 'not-allowed',
              boxShadow: consent ? '0 0 30px rgba(245,185,66,0.3)' : 'none',
            }}
          >
            {translate('Submit Application')}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label, name, type, placeholder, required,
}: {
  label: string; name: string; type: string; placeholder: string; required?: boolean
}) {
  const { translate } = useLanguage()

  return (
    <div>
      <label className="block text-sm font-medium text-[#c8d0f0] mb-2">{translate(label)}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-[#0e0d0a] border border-[rgba(245,185,66,0.16)] text-[#fff8e7] placeholder-[#a99367] text-sm px-4 py-3 focus:outline-none focus:border-[rgba(245,185,66,0.55)] focus:ring-1 focus:ring-[rgba(245,185,66,0.3)] transition-colors"
      />
    </div>
  )
}

function SelectField({
  label, name, options, required,
}: {
  label: string; name: string; options: string[]; required?: boolean
}) {
  const { translate } = useLanguage()

  return (
    <div>
      <label className="block text-sm font-medium text-[#c8d0f0] mb-2">{translate(label)}</label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl bg-[#0e0d0a] border border-[rgba(245,185,66,0.16)] text-[#fff8e7] text-sm px-4 py-3 focus:outline-none focus:border-[rgba(245,185,66,0.55)] focus:ring-1 focus:ring-[rgba(245,185,66,0.3)] transition-colors appearance-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%238892b8' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
      >
        <option value="" disabled className="text-[#8892b8]">{translate('Select…')}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
