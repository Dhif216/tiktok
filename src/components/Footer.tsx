const navLinks = [
  { label: 'About', href: '#' },
  { label: 'Creator Benefits', href: '#benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#apply' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

const socialLinks = [
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(120,140,220,0.1)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7c5cfc] to-[#00e5cc] opacity-80" />
                <div className="absolute inset-[2px] rounded-full bg-[#050810] flex items-center justify-center">
                  <span className="text-[10px] font-mono-label font-bold text-[#00e5cc]">N</span>
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-sm tracking-wide text-white">NORDLYS</div>
                <div className="section-label text-[8px] opacity-60">CREATOR AGENCY</div>
              </div>
            </div>
            <p className="text-sm text-[#8892b8] leading-relaxed max-w-xs">
              An independent creator agency built for TikTok creators who take their craft seriously. Support. Rewards. Community.
            </p>
            <p className="text-xs text-[#8892b8] mt-4 opacity-50">
              Not affiliated with or endorsed by TikTok or ByteDance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="section-label mb-5">Navigation</div>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-[#8892b8] hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <div className="section-label mb-5">Follow Us</div>
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-[rgba(120,140,220,0.15)] flex items-center justify-center text-[#8892b8] hover:text-white hover:border-[rgba(124,92,252,0.4)] transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c5cfc] to-[#5b3de8] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(124,92,252,0.4)] transition-all"
            >
              Join Our Agency
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(120,140,220,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8892b8] opacity-60">
            © {new Date().getFullYear()} Nordlys Creator Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map(l => (
              <a key={l.label} href={l.href} className="text-xs text-[#8892b8] hover:text-white transition-colors opacity-60 hover:opacity-100">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
