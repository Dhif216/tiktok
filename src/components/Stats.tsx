import { Lottie } from 'lottie-react'
import creatorAnimation from '../../ticktok.json'
import coinIcon from '../../tiktok-coin.png'
import tiktokIcon from '../../tiktok.png'
import supportIcon from '../../faq-people.png'

const stats = [
  { value: '2,400+', label: 'Creators Supported', icon: 'animation' },
  { value: '180M+', label: 'Coins Generated', icon: 'coin' },
  { value: '€340K+', label: 'Monthly Rewards', icon: 'tiktok' },
  { value: '24/7', label: 'Creator Support', icon: 'support' },
]

export default function Stats() {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(245,185,66,0.06) 50%, transparent 100%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(s => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl border border-[rgba(120,140,220,0.1)] bg-[rgba(13,17,32,0.6)] backdrop-blur-sm"
            >
              <div className="w-11 h-11 mx-auto mb-3 flex items-center justify-center overflow-hidden">
                {s.icon === 'animation' ? (
                  <Lottie
                    src={creatorAnimation}
                    loop
                    autoplay
                    aria-label="Creator animation"
                    className="w-11 h-11"
                    style={{ width: 44, height: 44, transform: 'scale(6)' }}
                  />
                ) : s.icon === 'coin' ? (
                  <img src={coinIcon} alt="TikTok coin" className="w-11 h-11 object-contain" />
                ) : s.icon === 'tiktok' ? (
                  <img src={tiktokIcon} alt="TikTok" className="w-11 h-11 object-contain" />
                ) : s.icon === 'support' ? (
                  <img src={supportIcon} alt="Creator support" className="w-11 h-11 object-contain" />
                ) : (
                  <span className="text-2xl">{s.icon}</span>
                )}
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl aurora-text mb-1">{s.value}</div>
              <div className="text-sm text-[#8892b8] font-medium">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
