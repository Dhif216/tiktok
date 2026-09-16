const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Account Protection',
    desc: "We stand behind you when TikTok gets complicated. From restrictions to appeals, you're never navigating it alone.",
    accent: '#f5b942',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Dispute & Account Support',
    desc: 'Direct access to a support team that understands creator accounts. Get help with disputes, platform questions, and operational issues.',
    accent: '#ffd166',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Monthly Coin Bonuses',
    desc: 'Hit your monthly coin milestones and unlock bonus rewards. The more consistent you are, the more you earn alongside your TikTok income.',
    accent: '#b87916',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    title: 'Welcome Gift',
    desc: 'Every approved creator who joins the agency receives a welcome gift. Start your journey with something to celebrate.',
    accent: '#ffd166',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Creator Community',
    desc: "You're not just signing up — you're joining a network of serious creators. Share knowledge, grow together, get recognized.",
    accent: '#ffd166',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Growth Support',
    desc: 'Personal guidance to help you understand what works. Build sustainable creator habits backed by a team invested in your success.',
    accent: '#f5b942',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mb-4">What You Get</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Built for creators who
            <br />
            <span className="aurora-text">take this seriously.</span>
          </h2>
          <p className="mt-5 text-[#8892b8] max-w-xl mx-auto text-base leading-relaxed">
            Every benefit is designed around one goal: helping you create confidently, consistently, and sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(b => (
            <div
              key={b.title}
              className="group p-7 rounded-2xl bg-[#0e0d0a] border border-[rgba(245,185,66,0.12)] hover:border-[rgba(245,185,66,0.35)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${b.accent}18`, color: b.accent }}
              >
                {b.icon}
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">{b.title}</h3>
              <p className="text-sm text-[#8892b8] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
