const ITEMS = [
  "10,000+ community members",
  "Live sessions 5× a week",
  "Forex & Crypto markets",
  "Beginner-friendly",
]

export function TrustBar() {
  return (
    <div className="overflow-hidden border-b border-[#1e1e1e] bg-[#0d0d0d] py-3.5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center whitespace-nowrap px-8 text-xs tracking-wide text-white/35"
              >
                <span className="mr-8 h-1 w-1 rounded-full bg-[var(--color-gold)]/60" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
