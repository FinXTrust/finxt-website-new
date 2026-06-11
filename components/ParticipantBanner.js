import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const locations = ['United Kingdom', 'Poland', 'Spain', 'USA', 'Mexico', 'India'];

export default function ParticipantBanner() {
  return (
    <section
      className="finxt-live-studies-section finxt-home-accent relative overflow-hidden px-4 md:px-6"
      aria-labelledby="participant-promo-heading"
    >
      <div
        className="finxt-live-studies-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl py-10 md:py-12 lg:py-14">
        <ScrollReveal className="finxt-live-studies-panel finxt-surface-panel-accent grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[1fr_340px] lg:gap-12 lg:p-10 xl:grid-cols-[1fr_380px]">
          <div className="finxt-scroll-reveal" style={{ '--reveal-delay': '0ms' }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-finxt-gold/35 bg-finxt-gold/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-finxt-gold" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-finxt-gold-light">
                Live Studies, Now recruiting
              </span>
            </div>

            <h2 id="participant-promo-heading" className="finxt-section-heading">
              Interested in Participating in a Research Study?
            </h2>

            <div className="finxt-home-intro max-w-2xl">
              <p className="finxt-body">
                Apply for live technology research studies and get rewarded for your
                time. Choose your location, complete a short application, and we&apos;ll
                be in touch if you&apos;re eligible.
              </p>

              <div className="finxt-live-studies-locations flex flex-wrap gap-1.5">
                {locations.map((location) => (
                  <span key={location} className="finxt-live-studies-chip">
                    {location}
                  </span>
                ))}
              </div>

              <p className="finxt-live-studies-proof finxt-body-muted">
                Paid sessions · Flexible scheduling · No commitment to apply
              </p>
            </div>
          </div>

          <div
            className="finxt-scroll-reveal finxt-scroll-reveal--right relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
            style={{ '--reveal-delay': '180ms' }}
          >
            <div className="finxt-live-studies-reward finxt-home-card rounded-xl p-5 md:p-6">
              <p className="finxt-label">Typical reward</p>
              <p className="mt-2 finxt-card-title">From £100 per session</p>
              <p className="finxt-card-body-sm mt-1">
                Amount varies by location and study
              </p>

              <div className="finxt-live-studies-cta mt-6">
                <Link href="/live-studies" className="finxt-btn-primary w-full text-center">
                  View live studies &amp; apply →
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
