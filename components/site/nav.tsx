import Image from "next/image"

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[var(--color-ink-border)] bg-[rgba(10,10,10,0.92)] px-4 backdrop-blur-md sm:px-6">
      <a href="#top" className="group flex items-center">
        <Image
          src="/logo.png"
          alt="Fingrow – Your Trading Partner for Success"
          width={120}
          height={50}
          className="h-9 w-auto object-contain sm:h-11"
          priority
        />
      </a>
      <a
        href="#join"
        className="rounded-md bg-[var(--color-gold)] px-3 py-1.5 text-xs font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] sm:px-4 sm:py-2 sm:text-[13px]"
      >
        Join free
      </a>
    </nav>
  )
}
