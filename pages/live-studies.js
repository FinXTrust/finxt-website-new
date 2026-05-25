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
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/finxt_service_banner.png')",
            }}
          />

          {/* Softer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050912]/80 via-[#050912]/35 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="finxt-heading max-w-4xl text-3xl leading-tight md:text-5xl">
            Live Studies
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/80 md:text-base">
            Participate in global user studies and research programmes. Explore
            opportunities currently available in your country.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-[#0A0F1E]">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
    {studies.map((study) => (
      <article key={study.country}>
        <div className="overflow-hidden rounded-2xl">
          <img
            src={study.image}
            alt={`${study.country} flag`}
            className="h-72 w-full rounded-2xl border border-gray-300 object-cover"
          />
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-black text-[#0A0F1E]">
           {study.country}
          </h2>

          <p className="mt-4 text-xl font-black leading-snug text-black">
            User study for technology applications.
          </p>

          <p className="mt-5 text-lg text-[#2D3748]">
            <span className="font-black text-black">Session:</span>{' '}
            {study.payment}
          </p>

          
          <Link
                href={`/live-studies-application?country=${study.country.toLowerCase()}&lang=${study.lang}`}
                className="mt-6 inline-flex w-fit items-center rounded-lg bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#050912] transition hover:bg-[#E6C768]"
                >
                Apply Now →
          </Link>
        </div>
      </article>
    ))}
  </div>
</section>
    </Layout>
  );
}