import Layout from '../components/Layout';
import Link from 'next/link';

export default function LiveStudies() {
  const studies = [
    {
      country: 'Leeds',
      image: '/images/gb.png',
      payment: '£100 per person',
      lang: 'en',
    },
    {
      country: 'Poland',
      image: '/images/poland.png',
      payment: '285 Polish Zloty per person',
      lang: 'pl',
    },
    {
      country: 'Spain',
      image: '/images/es.png',
      payment: '€100 per person',
      lang: 'es',
    },
    {
      country: 'USA',
      image: '/images/us.png',
      payment: '$100 per person',
      lang: 'en',
    },
    {
      country: 'Mexico',
      image: '/images/mx.png',
      payment: '1200 Pesos per person',
      lang: 'es',
    },
    {
      country: 'India',
      image: '/images/in.png',
      payment: '₹5000 per person',
      lang: 'en',
    },
  ];

  return (

    <Layout>
    <section className="relative overflow-hidden bg-[#050912] px-4 py-20 text-white md:px-6 md:py-28">
      {/* Background Image */}
      <img
            src="/images/livestudies_banner.webp"
            alt="livestudies_banner"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
      />

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050912]/80 via-[#050912]/35 to-transparent" />

      {/* Dark overlay for text 
      <div className="absolute inset-0 bg-gradient-to-r from-[#050912] via-[#050912]/80 to-[#050912]/20" />*/}
      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block bg-no-repeat"
        style={{
          backgroundImage: "url('/images/livestudies_banner.webp')",
          backgroundSize: '72% auto',
          backgroundPosition: 'right center',
        }}
      />

      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden bg-no-repeat"
        style={{
          backgroundImage: "url('/images/livestudies_banner.webp')",
          backgroundSize: '185% auto',
          backgroundPosition: '68% center',
        }}
      />
              
      {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="finxt-label mb-5 text-[#C9A84C]">
            Research Opportunities
          </p>

          <h2 className="finxt-heading max-w-4xl text-3xl leading-tight md:text-5xl">
            Live Studies
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Participate in global user studies and research programmes. Explore
            opportunities currently available in your country.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#C9A84C]/20 bg-[#050912] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.08),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(56,111,255,0.13),transparent_30%),linear-gradient(180deg,#071126_0%,#050912_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="finxt-label mb-5 text-[#C9A84C]">
              Available Locations
            </p>

            <h2 className="text-2xl font-black leading-tight tracking-tight md:text-4xl">
              Apply for live technology research studies.
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

            <p className="mt-8 text-sm leading-7 text-white/70 md:text-base">
              Select your location and complete the application form.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
          <article
            key={study.country}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.40)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/60 hover:shadow-[0_28px_90px_rgba(201,168,76,0.16)]"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-80" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C9A84C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-[#C9A84C]/10 blur-2xl transition duration-500 group-hover:scale-150" />
            <div className="absolute bottom-20 right-8 h-16 w-16 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:scale-150" />

            <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#081126]">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />

              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A84C]/25 blur-3xl" />

              <img
                src={study.image}
                alt={`${study.country} flag`}
                className="relative z-10 h-48 w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050912]/85 via-[#050912]/15 to-transparent" />



              <span className="absolute bottom-4 left-4 z-30 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                90 minutes
              </span>
            </div>

            <h2 className="relative z-10 text-2xl font-black text-white">
              {study.country}
            </h2>

            <p className="relative z-10 mt-4 text-sm leading-7 text-white/70">
              Take part in a paid technology research study and be rewarded for your time.
            </p>

            <div className="relative z-10 mt-6 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">
                Session Reward
              </p>

              <p className="mt-2 text-lg font-black text-white">
                {study.payment}
              </p>
            </div>

            <Link
              href={`/live-studies-application?country=${study.country.toLowerCase()}&lang=${study.lang}`}
              className="relative z-10 mt-7 inline-flex w-full justify-center rounded-2xl bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#050912] transition hover:-translate-y-1 hover:bg-[#E8C96A]"
            >
              Apply Now →
            </Link>
          </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}