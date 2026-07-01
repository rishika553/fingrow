export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-ink)]">
      <div className="border-t border-[var(--color-ink-3)] px-6 py-10 text-center">
        <div className="text-base font-semibold text-[var(--color-gold)]">Fingrow</div>
        <p className="mt-2 text-xs leading-relaxed text-white/30">
          Your Trading Partner for Success
        </p>
      </div>
      <div className="border-t border-[var(--color-ink-3)] bg-[#060606] px-6 py-5">
        <p className="mx-auto max-w-2xl text-center text-[11px] leading-relaxed text-white/20">
          Fingrow is a trading education and learning community. All content is for educational
          purposes only and does not constitute financial advice. Trading in forex and crypto
          involves significant risk. Past performance is not indicative of future results. Conduct
          your own research before making financial decisions.
        </p>
      </div>
    </footer>
  )
}
