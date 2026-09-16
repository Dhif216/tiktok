import { useState } from 'react'

const tiers = [
  {
    level: 'STARTER',
    coins: '100K',
    label: 'Coins / Month',
    desc: 'Your first milestone. Hit 100K coins and unlock your first monthly bonus.',
    bonus: 'Bonus Eligible',
    color: '#8892b8',
    glow: 'rgba(136,146,184,0.2)',
    border: 'rgba(136,146,184,0.25)',
  },
  {
    level: 'RISING',
    coins: '250K',
    label: 'Coins / Month',
    desc: "You're building momentum. A bigger milestone means a bigger reward waiting for you.",
    bonus: 'Bigger Bonus',
    color: '#7c5cfc',
    glow: 'rgba(124,92,252,0.25)',
    border: 'rgba(124,92,252,0.4)',
  },
  {
    level: 'PRO',
    coins: '500K',
    label: 'Coins / Month',
    desc: "You're in the top tier. The pro milestone rewards creators who show up consistently.",
    bonus: 'Premium Bonus',
    color: '#00e5cc',
    glow: 'rgba(0,229,204,0.25)',
    border: 'rgba(0,229,204,0.4)',
    featured: true,
  },
  {
    level: 'ELITE',
    coins: '1M+',
    label: 'Coins / Month',
    desc: 'Elite status. Reserved for the creators who go all in. Exclusive rewards, exclusive recognition.',
    bonus: 'Exclusive Reward',
    color: '#e040fb',
    glow: 'rgba(224,64,251,0.25)',
    border: 'rgba(224,64,251,0.4)',
  },
]

export default function Rewards() {
  const [active, setActive] = useState(2)

  return (
    <section id="rewards" className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,92,252,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Monthly Rewards</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Consistency pays.
            <br />
            <span className="aurora-text">Literally.</span>
          </h2>
          <p className="mt-5 text-[#8892b8] max-w-xl mx-auto text-base leading-relaxed">
            Hit your monthly coin milestones and unlock bonus rewards on top of your regular TikTok earnings.
            Exact reward values are determined by the agency and communicated to each creator directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t, i) => (
            <button
              key={t.level}
              onClick={() => setActive(i)}
              className="text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
              style={{
                background: active === i ? `${t.glow}` : '#0d1120',
                borderColor: active === i ? t.border : 'rgba(120,140,220,0.1)',
                boxShadow: active === i ? `0 0 40px ${t.glow}` : 'none',
                transform: active === i ? 'translateY(-4px)' : 'none',
              }}
            >
              {t.featured && (
                <div
                  className="section-label text-[9px] mb-3 inline-block px-2 py-1 rounded"
                  style={{ background: 'rgba(0,229,204,0.15)', color: '#00e5cc' }}
                >
                  MOST POPULAR
                </div>
              )}
              <div
                className="font-mono-label text-xs font-bold mb-4"
                style={{ color: t.color }}
              >
                {t.level}
              </div>
              <div className="font-display font-bold text-4xl text-white mb-0.5">{t.coins}</div>
              <div className="text-xs text-[#8892b8] mb-4">{t.label}</div>
              <p className="text-sm text-[#8892b8] leading-relaxed mb-5">{t.desc}</p>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: t.color }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.bonus}
              </div>
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#8892b8] opacity-70 max-w-lg mx-auto">
          * Coin milestones and bonus amounts are managed by the agency. Eligibility and reward values are communicated individually to each creator. Not guaranteed — exact details subject to agency terms.
        </p>
      </div>
    </section>
  )
}
