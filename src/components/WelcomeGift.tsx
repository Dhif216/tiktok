import giftFeature from '../../b13105782e8bf8fbefaa83b7af413cee~tplv-obj.webp'
import giftOne from '../assets/gifts/01793f9afe15f5037a9dc10435c37c85.png~tplv-obj.webp'
import giftTwo from '../assets/gifts/0e1bd6f089b9817a6d3f0cb18915038d.png~tplv-obj.webp'
import giftThree from '../assets/gifts/26b1c4e777cc486ae489ea7033ad8cbc.png~tplv-obj.webp'
import giftFour from '../assets/gifts/57619959bddbe35d8c684750a1d41d62.png~tplv-obj.webp'
import giftFive from '../assets/gifts/6026505eea9b9bce071dd699253abf6a~tplv-obj.webp'
import giftSix from '../assets/gifts/8173e9b07875cca37caa5219e4903a40~tplv-obj.webp'
import giftSeven from '../assets/gifts/8520d47b59c202a4534c1560a355ae06~tplv-obj.webp'
import giftEight from '../assets/gifts/a291aedacf27d22c3fd2d83575d2bee9~tplv-obj.webp'
import giftNine from '../assets/gifts/b7d2532e9e175722cac92a0685d5a5ca.png~tplv-obj.webp'
import giftTen from '../assets/gifts/c836c81cc6e899fe392a3d11f69fafa3.png~tplv-obj.webp'
import giftEleven from '../assets/gifts/ce72697aca20b8741b1d5bff2035db78.png~tplv-obj.webp'
import giftTwelve from '../assets/gifts/df63eee488dc0994f6f5cb2e65f2ae49~tplv-obj.webp'

const gifts = [
  giftOne, giftTwo, giftThree, giftFour, giftFive, giftSix,
  giftSeven, giftEight, giftNine, giftTen, giftEleven, giftTwelve,
]

export default function WelcomeGift() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(224,64,251,0.08) 0%, rgba(124,92,252,0.06) 40%, transparent 70%)',
        }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-flex flex-col items-center">
          {/* Gift icon */}
          <div className="relative mb-8">
            <div
              className="absolute inset-0 blur-3xl opacity-40 rounded-full"
              style={{ background: 'radial-gradient(circle, #e040fb, #7c5cfc)' }}
            />
            <div
              className="relative w-24 h-24 rounded-2xl flex items-center justify-center text-5xl"
              style={{
                background: 'linear-gradient(135deg, rgba(224,64,251,0.2), rgba(124,92,252,0.2))',
                border: '1px solid rgba(224,64,251,0.3)',
              }}
            >
              <img src={giftFeature} alt="Welcome gift" className="h-20 w-20 object-contain" />
            </div>
          </div>

          <div className="section-label mb-4">Welcome Gift</div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Join. Get Started.
            <br />
            <span className="aurora-text">Get Welcomed.</span>
          </h2>

          <p className="text-[#8892b8] text-lg leading-relaxed mb-6 max-w-2xl">
            Every approved creator who joins Nordlys receives a welcome gift. It's our way of saying —
            you're part of something now. Your journey as a Nordlys creator starts with more than just a contract.
          </p>

          <div className="gift-marquee" aria-label="Welcome gift gallery">
            <div className="gift-marquee-track">
              {[...gifts, ...gifts].map((gift, index) => (
                <div className="gift-marquee-item" key={`${gift}-${index}`}>
                  <img src={gift} alt="" />
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#8892b8] text-sm mb-10 opacity-80">
            Welcome gift details are revealed upon approval. We keep it a surprise.
          </p>

          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e040fb] to-[#7c5cfc] text-white font-semibold text-base px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(224,64,251,0.4)] transition-all hover:-translate-y-0.5"
          >
            Apply Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
