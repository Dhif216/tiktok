import { useState, useEffect } from 'react'

interface NavProps {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}

const links = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Support', href: '#support' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav({ menuOpen, setMenuOpen }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,8,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(120,140,220,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7c5cfc] to-[#00e5cc] opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[2px] rounded-full bg-[#050810] flex items-center justify-center">
              <span className="text-[10px] font-mono-label font-bold text-[#00e5cc]">N</span>
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-wide leading-none text-white">NORDLYS</div>
            <div className="section-label text-[8px] leading-none mt-0.5 opacity-70">CREATOR AGENCY</div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#8892b8] hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#apply"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#7c5cfc] to-[#5b3de8] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(124,92,252,0.5)] transition-all"
        >
          Join Our Agency
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(5,8,16,0.98)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-5 border-t border-[rgba(120,140,220,0.12)]">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-[#c8d0f0] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-[#7c5cfc] to-[#5b3de8] text-white font-semibold px-6 py-3 rounded-full"
          >
            Join Our Agency
          </a>
        </div>
      </div>
    </header>
  )
}
