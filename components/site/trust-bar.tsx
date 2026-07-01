const ITEMS = [
  "10,000+ community members",
  "Live sessions 5× a week",
  "Forex & Crypto markets",
  "Beginner-friendly",
]

export function TrustBar() {
  return (
    <div className="overflow-hidden border-b border-[#2a2a2a] bg-[#111] py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center whitespace-nowrap px-8 text-sm font-medium tracking-wide text-white/60"
              >
                <span className="mr-8 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
