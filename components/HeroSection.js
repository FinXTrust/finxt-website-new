import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="finxt-page-hero finxt-section-rule-bottom relative min-h-[32rem] overflow-hidden bg-[#050912] px-4 text-white md:min-h-[36rem] md:px-6 lg:min-h-0">
      <div className="finxt-page-hero-media absolute inset-0 lg:left-[42%]">
        <img
          src="/images/hero-banner.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="finxt-page-hero-bg finxt-home-hero-bg h-full w-full object-cover"
        />
      </div>

      <div className="finxt-page-hero-scrim-mobile" aria-hidden="true" />
      <div className="finxt-page-hero-scrim-desktop" aria-hidden="true" />
      <div className="finxt-page-hero-glow-mobile" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0 hidden opacity-70 lg:block"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(201, 168, 76, 0.09), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(30, 45, 80, 0.45), transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          <p className="finxt-label mb-5">Who We Are</p>

          <h1 className="finxt-page-heading">
            Powering Global Programmes with Precision, Speed and Scale
          </h1>

          <p className="mt-6 text-lg font-medium leading-snug text-finxt-gold-light md:text-xl">
            Global reach. One point of contact. End-to-end programme delivery with
            zero compromise.
          </p>

          <div className="finxt-divider mt-8" />

          <div className="finxt-home-intro finxt-body">
            <p>
              FinXT UK is a global programme delivery and operational excellence
              partner, headquartered in London and operating across 7+ countries.
              We exist to solve the problems that arise when ambition meets
              complexity, giving organisations one accountable partner for every
              dimension of their international programmes, from logistics and
              staffing to user research, payments, and AI-enabled operations.
            </p>
            <p>
              We are not a generalist consultancy. We are specialists in delivery:
              the people who show up when the programme is live, the geography is
              difficult, and the stakes are high.
            </p>
            <p>
              FinXT empowers financial institutions and enterprises with AI,
              automation, and expert consulting for measurable impact.
            </p>
          </div>

          <p className="mt-8 border-l-2 border-finxt-gold/40 pl-4 finxt-body-muted md:max-w-xl">
            London-headquartered. Globally delivered. One partner. Nine service
            verticals. Seven-plus countries. Built for organisations that cannot
            afford operational failure.
          </p>

          <div className="mt-10">
            <Link href="/contact" className="finxt-btn-primary">
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
