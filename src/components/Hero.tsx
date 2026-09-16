import heroBackground from '../../b4f6e832-e1d9-4232-8433-b6c5233bff1d.png'

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* TikTok LIVE-inspired hero artwork */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={heroBackground} alt="" className="hero-background" />
        <div className="hero-background-overlay" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,242,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,80,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="section-label mb-6 inline-flex items-center gap-2">
          <span className="w-4 h-[1px] bg-[#00e5cc] inline-block" />
          TikTok Creator Agency
          <span className="w-4 h-[1px] bg-[#00e5cc] inline-block" />
        </div>

        <h1 className="tiktok-title font-display font-black leading-[1.05] mb-6">
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white"
          >
            Your Content.
          </span>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl aurora-text"
          >
            Your Community.
          </span>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white"
          >
            Our Support.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#8892b8] mb-10 font-light leading-relaxed">
          Join a professional creator agency built around protecting your account,
          supporting your growth, and rewarding your consistency — with a welcome gift
          from day one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c5cfc] to-[#5b3de8] text-white font-semibold text-base px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(124,92,252,0.5)] transition-all hover:-translate-y-0.5"
          >
            Join Our Agency
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#benefits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[rgba(120,140,220,0.25)] text-[#c8d0f0] font-medium text-base px-8 py-4 rounded-full hover:border-[rgba(124,92,252,0.6)] hover:text-white transition-all"
          >
            See Creator Benefits
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            'Account Protection',
            'Welcome Gift',
            'Monthly Rewards',
            '1-on-1 Support',
          ].map(label => (
            <div key={label} className="text-sm text-[#8892b8]">
              {label}
            </div>
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-3 opacity-55 pointer-events-none">
          <span className="section-label text-[9px] animate-scroll-label">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#7c5cfc] via-[#00e5cc] to-transparent animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
