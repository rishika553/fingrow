export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-ink)]">
      <div className="border-t border-[#2a2a2a] px-6 py-12 text-center">
        <div className="text-lg font-bold text-[var(--color-gold)]">Fingrow</div>
        <p className="mt-2 text-sm text-white/50">Your Trading Partner for Success</p>
        <p className="mt-1 text-sm text-white/40">
          Powered by EVPL ·{" "}
          <a
            href="https://instagram.com/fingrow.trading"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-[var(--color-gold)]"
          >
            @Fingrow.trading
          </a>{" "}
          on Instagram
        </p>
      </div>
      <div className="border-t border-[#1e1e1e] bg-[#060606] px-6 py-6">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-white/30">
          Fingrow is a trading education and learning community. All content is for educational
          purposes only and does not constitute financial advice. Trading in forex and crypto
          involves significant risk. Past performance is not indicative of future results. Conduct
          your own research before making financial decisions.
        </p>
      </div>
    </footer>
  )
}
