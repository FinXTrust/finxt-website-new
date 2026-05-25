import Layout from '../components/Layout';

export default function About() {
  const values = [
    {
      icon: '🤝',
      title: 'Integrity First',
      text: 'We operate with transparency, honesty and discretion in every engagement.',
    },
    {
      icon: '⭐',
      title: 'Operational Excellence',
      text: 'We set high standards and hold ourselves to them across every project.',
    },
    {
      icon: '🎯',
      title: 'Client Partnership',
      text: 'Your success is our success. We measure every engagement by outcomes.',
    },
    {
      icon: '🌐',
      title: 'Global Mindset',
      text: 'Every process and partnership is built to support global delivery.',
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#050912] px-4 md:px-6 py-20 text-white md:py-28">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/about_banner.png')",
            }}
          />

          {/* Softer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050912]/80 via-[#050912]/35 to-transparent" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl">
            
            <div className="max-w-xl  md:ml-2 lg:ml-0">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
                About Us
              </p>

             

              <h2 className="finxt-heading max-w-4xl text-3xl md:text-5xl leading-tight">
                Built for Complexity.{' '}
                Trusted for <span className="text-[#C9A84C]">Excellence.</span>{' '}
                  
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/80 md:text-base">
                FinXT is a global consulting and technology partner helping organisations
                in financial services and enterprises modernise, automate, and grow.
                We blend domain expertise with emerging technologies to deliver real
                business outcomes.
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  ['100+', 'Projects Delivered'],
                  ['50+', 'Global Clients'],
                  ['20+', 'Countries Served'],
                  ['98%', 'Client Retention'],
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
      <section className="bg-[#0D1B3E] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="finxt-label mb-5">Our Story</p>

            <h2 className="text-2xl font-black leading-tight tracking-tight md:text-4xl">
              One Vision. Total Execution.
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

            <div className="mt-8 space-y-5 text-sm leading-7 text-white/70 md:text-base">
              <p>
                FinXT UK was founded with a clear belief: organisations running
                complex international programmes deserve one expert delivery
                partner, not a fragmented network of suppliers.
              </p>

              <p>
                From our London base, we combine operational expertise,
                regulatory knowledge, and on-ground capability across the UK and
                Europe.
              </p>

              <p>
                Our integrated model gives clients one point of accountability
                and a consistent experience from first briefing to final
                delivery.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#162444] p-6 shadow-xl md:p-8">
            <p className="finxt-label mb-6">Our Reach</p>

            <div className="space-y-7">
              <div>
                <h3 className="mb-2 text-base font-semibold">
                  🇬🇧 United Kingdom — HQ
                </h3>
                <p className="text-sm leading-7 text-white/60">
                  London-headquartered with operational delivery capability
                  across the UK.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-base font-semibold">
                  🇪🇺 Europe — Core Market
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[ 'Leeds', 'Netherlands', 'Spain', 'Poland', ].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#C9A84C]/40 px-4 py-2 text-sm font-semibold text-[#C9A84C]"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-base font-semibold">
                  🌍 Global — Scalable Delivery
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['USA', 'India', 'Mexico'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#C9A84C]/40 px-4 py-2 text-sm font-semibold text-[#C9A84C]"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6FB] px-6 py-20 text-[#0A0F1E]">
        <div >
          <p className="finxt-label mb-5 text-[#A07D30]">
            What We Stand For
          </p>
          

          <h2 className="text-2xl font-black tracking-tight md:text-4xl">
            Our Values
          </h2>
          <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="mt-12 rounded-2xl border-l-4 border-[#C9A84C] bg-white p-8 text-center text-[#0A0F1E] shadow-sm md:p-12"
              >
                <div className="mb-6 text-2xl">{value.icon}</div>

                <h3 className="mb-3 text-xl font-bold text-[#0A0F1E]">
                  {value.title}
                </h3>

                <p className="text-sm leading-7 text-[#2D3748]">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6FB] px-6 py-20 text-center text-[#0A0F1E]">
        <h2 className="text-2xl font-black tracking-tight md:text-4xl">
          Want to Know More?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#2D3748]">
          Speak with our team to discuss how FinXT UK can support your next
          initiative.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]"
        >
          Get in Touch →
        </a>
      </section>
    </Layout>
  );
}