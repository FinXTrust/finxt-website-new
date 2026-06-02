import Link from 'next/link';

export default function AboutSection() {
  const cards = [
    ['01', 'Integrated Model', 'Eight services under one roof. No vendor juggling, no communication gaps — just seamless end-to-end delivery.'],
    ['02', 'UK & European Stronghold', 'On-ground teams and established networks across Germany, France, Netherlands, Spain, Poland and the Nordics.'],
    ['03', 'Globally Scalable', 'Same quality standards whether you are running a UK pilot or a 30-country rollout. We scale without compromise.'],
    ['04', 'Compliant & Secure', 'Every engagement is defined by clear KPIs and transparent reporting. We measure ourselves by your results.'],
    ['05', 'Measurable Outcomes', 'The same delivery standard whether you are running a UK pilot or a 30-country rollout.'],
    ['06', 'Trusted & Discreet', 'Rigorous confidentiality standards and an NDA-first approach for all client engagements, always.'],
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#C9A84C]/20 bg-[#050912] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.08),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(56,111,255,0.13),transparent_30%),linear-gradient(180deg,#050912_0%,#071126_50%,#050912_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="finxt-label mb-5 text-[#C9A84C]">Why FinXT UK</p>

          <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
            The partner built for operational complexity.
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

          <p className="mt-8 text-sm leading-7 text-white/70 md:text-base">
            FinXT UK combines programme management, research operations,
            logistics, staffing, and reward payments into one accountable
            delivery partner.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(([num, title, desc]) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-8 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/45 hover:shadow-[0_25px_80px_rgba(201,168,76,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70" />
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C9A84C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="mb-4 text-5xl font-black text-[#C9A84C]/35">
                {num}
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

              <p className="text-sm leading-7 text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[36px] border border-[#C9A84C]/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.025))] p-10 text-center shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(201,168,76,0.20),transparent_25%),radial-gradient(circle_at_85%_50%,rgba(56,111,255,0.18),transparent_28%)]" />
          <div className="absolute -right-20 -top-20 h-56 w-56 animate-pulse rounded-full bg-[#C9A84C]/20 blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl font-black tracking-tight text-white md:text-4xl">
              Interested in participating in a research study?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Apply for live technology research studies and get rewarded for your
              time.
            </p>

            <Link
              href="/live-studies-application"
              className="mt-8 inline-flex rounded-2xl bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] shadow-[0_0_35px_rgba(201,168,76,0.30)] transition hover:-translate-y-1 hover:bg-[#E8C96A]"
            >
              Apply as a Participant →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}