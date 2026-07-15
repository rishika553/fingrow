export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-ink)]">

      {/* Legitimacy section */}
      <div className="border-t border-[#2a2a2a] px-6 py-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-10 sm:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="text-lg font-bold text-[var(--color-gold)]">Fingrow</div>
            <p className="mt-2 text-sm text-white/50">Your Trading Partner for Success</p>
            <p className="mt-3 text-xs leading-relaxed text-white/35">
              Operated by <span className="text-white/60 font-medium">EVPL (Eduvantage Ventures Pvt. Ltd.)</span>
              <br />A registered Indian company.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">About Fingrow</h3>
            <ul className="flex flex-col gap-2 text-xs text-white/45 leading-relaxed">
              <li>📅 Community running since <span className="text-white/65">2022</span></li>
              <li>👥 <span className="text-white/65">10,000+</span> active members across India</li>
              <li>🎓 Education-first — no tips, no signals</li>
              <li>✅ SEBI disclaimer compliant content</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a href="#join" className="text-white/45 transition-colors hover:text-[var(--color-gold)]">
                  Join the Community
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fingrow.trading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/45 transition-colors hover:text-[var(--color-gold)]"
                >
                  Instagram — @fingrow.trading
                </a>
              </li>
              <li>
                <a href="mailto:support@fingrow.in" className="text-white/45 transition-colors hover:text-[var(--color-gold)]">
                  support@fingrow.in
                </a>
              </li>
              <li>
                <a href="#" className="text-white/45 transition-colors hover:text-[var(--color-gold)]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/45 transition-colors hover:text-[var(--color-gold)]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-[#1e1e1e] bg-[#060606] px-6 py-6">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/25">
          Fingrow is a trading education and learning community operated by EVPL. All content is
          for educational purposes only and does not constitute financial advice or SEBI-registered
          investment advice. Trading in equity, forex, and crypto involves significant risk of
          capital loss. Past performance is not indicative of future results. Please conduct your
          own research and consult a qualified financial advisor before making any investment
          decisions.
        </p>
        <p className="mt-3 text-center text-xs text-white/15">
          © {new Date().getFullYear()} Fingrow · EVPL · All rights reserved.
        </p>
      </div>

    </footer>
  )
}
