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
    <section className="bg-[#F4F6FB] px-6 py-20 text-[#2D3748]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="finxt-label mb-5 text-[#A07D30]">Why FinXT UK</p>
          <h2 className="text-2xl font-black tracking-tight md:text-4xl">The partner built for operational complexity.</h2>
          <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />
          <p className="mt-8 space-y-5  md:text-base text-sm leading-7 text-[#2D3748]">
            FinXT UK combines programme management, research operations, logistics, staffing, and reward payments into one accountable delivery partner.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(([num, title, desc]) => (
            <div key={title} className="rounded-2xl border-l-4 border-[#C9A84C] bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl font-black text-[#C9A84C]/25">{num}</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A0F1E]">{title}</h3>
              <p className="text-sm leading-7 text-[#2D3748]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl  p-8 text-center text-[#0A0F1E] md:p-12">
          <h3 className="text-2xl font-black tracking-tight md:text-4xl">Interested in participating in a research study?</h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#2D3748]">Apply for live technology research studies and get rewarded for your time.</p>
          <Link href="/live-studies-application" className="mt-8 inline-flex rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]">
            Apply as a Participant →
          </Link>
        </div>
      </div>
    </section>
  );
}
