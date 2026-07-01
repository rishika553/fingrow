import Image from "next/image"

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[var(--color-ink-border)] bg-[rgba(10,10,10,0.92)] px-6 backdrop-blur-md">
      <a href="#top" className="group flex items-center">
        <Image
          src="/fingrow.jpeg"
          alt="Fingrow – Your Trading Partner for Success"
          width={120}
          height={50}
          className="h-11 w-auto object-contain"
          priority
        />
      </a>
      <a
        href="#join"
        className="rounded-md bg-[var(--color-gold)] px-4 py-2 text-[13px] font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-lg hover:shadow-[var(--color-gold)]/20"
      >
        Join free
      </a>
    </nav>
  )
}
