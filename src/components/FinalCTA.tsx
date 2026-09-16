export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124,92,252,0.2) 0%, rgba(0,229,204,0.08) 50%, transparent 70%)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(120,140,220,1) 1px, transparent 1px), linear-gradient(90deg, rgba(120,140,220,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="section-label mb-6">Ready?</div>
        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
          Ready to Take Your
          <br />
          <span className="aurora-text">Creator Journey Further?</span>
        </h2>
        <p className="text-[#8892b8] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Join a creator agency built around support, rewards, and your growth.
          Your content deserves a team behind it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c5cfc] to-[#5b3de8] text-white font-semibold text-base px-10 py-4 rounded-full hover:shadow-[0_0_50px_rgba(124,92,252,0.5)] transition-all hover:-translate-y-1"
          >
            Become a Creator
          </a>
          <a
            href="#benefits"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-[rgba(120,140,220,0.25)] text-[#c8d0f0] font-medium text-base px-10 py-4 rounded-full hover:border-[rgba(124,92,252,0.5)] hover:text-white transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
