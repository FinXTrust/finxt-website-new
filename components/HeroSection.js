import Link from 'next/link';

export default function HeroSection() {
  return (
   <section className="relative overflow-hidden bg-[#050912] px-4 md:px-6 py-20 text-white md:py-28">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/hero-banner.png')",
    }}
  />

  {/* Softer Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#050912]/80 via-[#050912]/35 to-transparent" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="max-w-xl md:ml-2 lg:ml-0">

      <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
        Trusted by Global Enterprises
      </p>

      <h1 className="finxt-heading max-w-4xl text-3xl md:text-5xl leading-tight">
        Powering Global Programs with{' '}
        <span className="text-[#C9A84C]">Precision, Speed</span> and{' '}
        <span className="text-[#C9A84C]">Scale</span>
      </h1>

      <p className="mt-6 text-sm leading-7 text-white/80 md:text-base">
        FinXT empowers financial institutions and enterprises with AI,
        automation, and expert consulting for measurable impact.
      </p>

      {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">

          <Link
            href="/services"
            className="w-fit rounded-lg bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#050912] transition hover:bg-[#E6C768] sm:px-8"
          >
            Explore Our Services →
          </Link>

          <Link
            href="mailto:we@finxt.uk"
            className="w-fit rounded-lg border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#C9A84C] hover:text-[#C9A84C] sm:px-8"
          >
            Schedule a Call
          </Link>

        </div>
      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {[
          ['8', 'Service Verticals'],
          ['20+', 'Countries Reached'],
          ['98%', 'Client Retention'],
          ['5+', 'Years of Expertise'],
        ].map(([number, label]) => (
          <div key={label}>
            <p className="text-3xl font-black text-[#C9A84C]">
              {number}
            </p>

            <p className="mt-2 text-xs uppercase tracking-wide text-white/70">
              {label}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  );
}