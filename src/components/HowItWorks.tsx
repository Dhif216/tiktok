import { useLanguage } from '../i18n'

const steps = [
  {
    num: '01',
    title: 'Apply',
    desc: 'Submit your creator application in minutes. Tell us about your content, your audience, and what you\'re looking for.',
  },
  {
    num: '02',
    title: 'Get Approved',
    desc: 'Our team reviews your application and reaches out directly. We select creators who are serious about their craft.',
  },
  {
    num: '03',
    title: 'Welcome',
    desc: 'Join the agency and receive your welcome gift. Get onboarded, meet the team, and access your creator dashboard.',
  },
  {
    num: '04',
    title: 'Create & Earn',
    desc: 'Keep doing what you love. Access support, hit coin milestones, and collect your monthly bonuses.',
  },
]

export default function HowItWorks() {
  const { translate } = useLanguage()

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,185,66,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mb-4">{translate('The Process')}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            {translate('Four steps to becoming')}
            <br />
            <span className="aurora-text">{translate('a Nordlys creator.')}</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(245,185,66,0.35)] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="relative text-center">
                {/* Number bubble */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div
                    className="absolute inset-0 rounded-full opacity-20 blur-lg"
                    style={{ background: i % 2 === 0 ? '#b87916' : '#ffd166' }}
                  />
                  <div
                    className="relative w-20 h-20 rounded-full border flex items-center justify-center"
                    style={{
                      borderColor: i % 2 === 0 ? 'rgba(184,121,22,0.45)' : 'rgba(255,209,102,0.45)',
                      background: i % 2 === 0 ? 'rgba(184,121,22,0.12)' : 'rgba(255,209,102,0.1)',
                    }}
                  >
                    <span
                      className="font-mono-label text-xl font-bold"
                      style={{ color: i % 2 === 0 ? '#f5b942' : '#ffd166' }}
                    >
                      {s.num}
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{translate(s.title)}</h3>
                <p className="text-sm text-[#8892b8] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://www.tiktok.com/t/ZSq7HuGAp/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b87916] to-[#f5b942] text-black font-semibold text-base px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(245,185,66,0.45)] transition-all hover:-translate-y-0.5"
          >
            {translate('Start Your Application')}
          </a>
        </div>
      </div>
    </section>
  )
}
