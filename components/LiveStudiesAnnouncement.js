import Link from 'next/link';

export default function LiveStudiesAnnouncement() {
  return (
    <div
      className="border-b border-finxt-gold/20 bg-[#050912]"
      role="region"
      aria-label="Live Studies recruitment"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-2 px-4 py-2.5 md:flex md:justify-center md:gap-4 md:px-8">
        <p className="min-w-0 text-center text-[0.8125rem] leading-snug text-white/75 md:text-sm">
          <span
            className="relative mr-2 inline-flex h-2 w-2 shrink-0 align-middle"
            aria-hidden="true"
          >
            <span className="finxt-status-pulse absolute inline-flex h-full w-full rounded-full bg-finxt-gold/30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-finxt-gold" />
          </span>
          <span className="font-semibold text-white/90">Live Studies now recruiting</span>
          <span className="mx-1.5 text-white/25" aria-hidden="true">
            —
          </span>
          <span className="text-white/70">
            Apply for paid technology research sessions
          </span>
        </p>

        <Link
          href="/live-studies"
          className="finxt-btn-primary finxt-live-announcement-apply shrink-0 justify-self-end"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}
