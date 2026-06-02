import Layout from '../components/Layout';
import { FiBox, FiUsers,FiGlobe, FiTrendingUp, FiAward } from 'react-icons/fi';
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

              {/* Stats 
              <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  [FiBox, '100+', 'Projects Delivered'],
                  [FiUsers, '50+', 'Global Clients'],
                  [FiGlobe, '20+', 'Countries Served'],
                  [FiTrendingUp, '98%', 'Client Retention'],
                ].map(([Icon, number, label]) => (
                  <div key={label} className="flex items-start gap-3">
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/10">
                      <Icon className="text-xl text-[#C9A84C]" />
                    </div>

                    <div>
                      <p className="text-3xl font-black text-[#C9A84C]">
                        {number}
                      </p>

                      <p className="mt-2 text-xs uppercase tracking-wide text-white/70">
                        {label}
                      </p>
                    </div>

                  </div>
                ))}
              </div>*/}
            </div>

          </div>
        </section>
      <section className="relative overflow-hidden border-y border-[#C9A84C]/20 bg-[#050912] px-6 py-24 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(201,168,76,0.12),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(56,111,255,0.13),transparent_30%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30" />

  <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_1fr]">
    <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
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

    <div className="rounded-[32px] border border-[#C9A84C]/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
      <p className="finxt-label mb-6">Our Locations</p>

      <div className="space-y-7">
        <div>
          <h3 className="mb-2 text-base font-semibold">
            🇬🇧 United Kingdom — HQ
          </h3>
          <p className="text-sm leading-7 text-white/65">
            London-headquartered with operational delivery capability across the UK.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">
            🇪🇺 Europe — Core Market
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Leeds', 'London','Spain', 'Poland'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2 text-sm font-semibold text-[#E8C96A]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">
            🌍 Global — Scalable Delivery
          </h3>
          <div className="flex flex-wrap gap-3">
            {['USA', 'India', 'Mexico','Kenya', 'South Africa'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-2 text-sm font-semibold text-[#E8C96A]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative overflow-hidden border-b border-[#C9A84C]/20 bg-[#071126] px-6 py-24 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.12),transparent_28%),linear-gradient(180deg,#071126_0%,#050912_100%)]" />

  <div className="relative z-10 mx-auto max-w-7xl">
    <p className="finxt-label mb-5 text-[#C9A84C]">
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
          className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-8 text-center shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/45 hover:shadow-[0_25px_80px_rgba(201,168,76,0.12)] md:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70" />

          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C9A84C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/10 text-2xl shadow-[0_0_30px_rgba(201,168,76,0.08)]">
            {value.icon}
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">
            {value.title}
          </h3>

          <p className="text-sm leading-7 text-white/70">
            {value.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-[#050912] px-6 py-24 text-center text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.18),transparent_35%)]" />
  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

  <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#C9A84C]/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.025))] p-10 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-14">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(201,168,76,0.20),transparent_25%),radial-gradient(circle_at_85%_50%,rgba(56,111,255,0.18),transparent_28%)]" />
    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C9A84C]/20 blur-3xl animate-pulse" />
    <div className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

    <div className="relative z-10">
      <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
        Want to Know More?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
        Speak with our team to discuss how FinXT UK can support your next
        initiative.
      </p>

      <a
        href="/contact"
        className="mt-8 inline-flex rounded-2xl bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] shadow-[0_0_35px_rgba(201,168,76,0.30)] transition hover:-translate-y-1 hover:bg-[#E8C96A]"
      >
        Get in Touch →
      </a>
    </div>
  </div>
</section>
    </Layout>
  );
}