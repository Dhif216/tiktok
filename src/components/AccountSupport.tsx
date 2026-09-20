import { useLanguage } from '../i18n'

const issues = [
  'Account restrictions',
  'Dispute assistance',
  'Platform violations',
  'Account-related problems',
  'Creator operations questions',
  'Appeal guidance',
]

export default function AccountSupport() {
  const { translate } = useLanguage()

  return (
    <section id="support" className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(245,185,66,0.12) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="section-label mb-4">{translate('Account Support')}</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              {translate('Your account.')}
              <br />
              <span className="aurora-text">{translate('Our backup.')}</span>
            </h2>
            <p className="text-[#8892b8] text-base leading-relaxed mb-8">
              TikTok's creator environment can be unpredictable. When something goes wrong,
              you need more than a help page — you need a team that knows creator accounts
              and can actually help you navigate the situation.
            </p>
            <p className="text-[#8892b8] text-base leading-relaxed mb-8">
              As a Nordlys creator, you get direct access to our support channel. We won't make
              promises we can't keep — but we'll always be in your corner.
            </p>
            <a
              href="https://www.tiktok.com/t/ZSq7HuGAp/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b87916] to-[#f5b942] text-black font-semibold text-sm px-6 py-3 rounded-full hover:shadow-[0_0_30px_rgba(245,185,66,0.4)] transition-all"
            >
              {translate('Get Protected')}
            </a>
          </div>

          {/* Right — issue list */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(184,121,22,0.3), rgba(255,209,102,0.2))' }}
            />
            <div className="relative p-8 rounded-2xl border border-[rgba(120,140,220,0.15)] bg-[#0d1120]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                <span className="font-mono-label text-xs text-[#8892b8] ml-2">support.nordlys.agency</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="section-label text-[10px] text-[#8892b8] mb-4">{translate('We help with:')}</div>
                {issues.map(issue => (
                  <div
                    key={issue}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#111928] border border-[rgba(120,140,220,0.08)]"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#b87916] to-[#ffd166] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#c8d0f0]">{translate(issue)}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[rgba(184,121,22,0.1)] to-[rgba(255,209,102,0.08)] border border-[rgba(245,185,66,0.2)]">
                <p className="text-xs text-[#8892b8] leading-relaxed">
                  <span className="text-[#ffd166] font-semibold">Note:</span> We provide guidance and support — we cannot guarantee TikTok account restorations or override platform decisions. We are an independent creator agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
