import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    ['01', 'AI', 'AI Strategy and Readiness Consulting'],
    ['02', 'BOT', 'Custom AI Chatbot Development'],
    ['03', 'DATA', 'AI-Enhanced Data Insights'],
    ['04', 'SEC', 'AI Cybersecurity & Threat Detection'],
    ['05', 'LAW', 'Compliance-Focused AI Advisory'],
    ['06', 'PAY', 'Smart Payment Integration Solutions'],
    ['07', 'VIP', 'Reward & Loyalty Solutions and Platform Development'],
    ['08', 'MKT', 'AI in Marketing, Content & Branding'],
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#C9A84C]/20 bg-[#050912] px-4 py-24 text-white md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.08),transparent_30%),linear-gradient(180deg,#071126_0%,#050912_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* LEFT SIDE */}
          <div>
            <p className="finxt-label mb-5 text-[#C9A84C]">
              What We Deliver
            </p>

            <h2 className="text-2xl font-black leading-tight tracking-tight md:text-4xl">
              Eight integrated services. One trusted partner.
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

            <p className="mt-8 text-sm leading-7 text-white/70 md:text-base">
              Every service is available standalone or as part of a fully managed
              end-to-end solution.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([num, label, title]) => (
              <div key={title} className="text-center">

                {/* VISUAL BOX */}
                <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-[#C9A84C]/25 bg-white/[0.04] shadow-[0_0_35px_rgba(201,168,76,0.08)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(201,168,76,0.25),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015))]" />
                <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-[#C9A84C]/15 blur-2xl" />

                {num === '01' && (
                  <div className="relative h-9 w-9 rounded-full border border-[#C9A84C]/60">
                    <span className="absolute left-7 top-4 h-[2px] w-8 rounded-full bg-[#C9A84C]/70" />
                    <span className="absolute -bottom-2 left-2 h-[2px] w-6 rotate-[-25deg] rounded-full bg-white/35" />
                  </div>
                )}

                {num === '02' && (
                  <div className="relative h-9 w-11 rounded-2xl border border-blue-300/60">
                    <span className="absolute left-3 top-4 h-2 w-2 rounded-full bg-blue-300/80" />
                    <span className="absolute right-3 top-4 h-2 w-2 rounded-full bg-[#C9A84C]/80" />
                    <span className="absolute -bottom-2 left-4 h-3 w-3 rotate-45 border-b border-r border-blue-300/50" />
                  </div>
                )}

                {num === '03' && (
                  <div className="relative flex h-10 items-end gap-1.5">
                    <span className="h-4 w-2 rounded-t bg-emerald-300/60" />
                    <span className="h-7 w-2 rounded-t bg-[#C9A84C]/70" />
                    <span className="h-10 w-2 rounded-t bg-emerald-300/75" />
                    <span className="h-6 w-2 rounded-t bg-white/30" />
                  </div>
                )}

                {num === '04' && (
                  <div className="relative h-11 w-9 rounded-b-3xl rounded-t-xl border border-red-300/60">
                    <span className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full border border-[#C9A84C]/70" />
                    <span className="absolute left-1/2 top-8 h-4 w-[2px] -translate-x-1/2 bg-[#C9A84C]/60" />
                  </div>
                )}

                {num === '05' && (
                  <div className="relative h-11 w-12">
                    <span className="absolute left-1/2 top-0 h-11 w-px bg-[#C9A84C]/60" />
                    <span className="absolute left-0 top-4 h-px w-12 bg-white/35" />
                    <span className="absolute left-0 top-6 h-5 w-5 rounded-full border border-purple-300/55" />
                    <span className="absolute right-0 top-6 h-5 w-5 rounded-full border border-purple-300/55" />
                  </div>
                )}

                {num === '06' && (
                  <div className="relative h-9 w-12 rotate-[-8deg] rounded-xl border border-cyan-300/60">
                    <span className="absolute left-3 top-3 h-2 w-5 rounded bg-[#C9A84C]/70" />
                    <span className="absolute bottom-2 left-3 h-[2px] w-7 rounded bg-white/30" />
                  </div>
                )}

                {num === '07' && (
                  <div className="relative h-10 w-10 rounded-xl border border-[#C9A84C]/65">
                    <span className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-[#C9A84C]/45" />
                    <span className="absolute left-0 top-1/2 h-px w-10 -translate-y-1/2 bg-[#C9A84C]/45" />
                    <span className="absolute -top-2 left-1 h-4 w-4 rounded-full border border-[#C9A84C]/50" />
                    <span className="absolute -top-2 right-1 h-4 w-4 rounded-full border border-[#C9A84C]/50" />
                  </div>
                )}

                {num === '08' && (
                  <div className="relative h-10 w-12">
                    <span className="absolute left-0 top-4 h-5 w-8 rounded-l-xl border border-pink-300/60" />
                    <span className="absolute right-0 top-2 h-9 w-px rotate-[-20deg] bg-[#C9A84C]/70" />
                    <span className="absolute bottom-0 right-2 h-2 w-2 rounded-full bg-pink-300/80" />
                  </div>
                )}
              </div>
                {/* TITLE */}
                <h3 className="text-sm font-bold leading-6 text-white">
                  {title}
                </h3>

              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-2xl bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#050912] shadow-[0_0_35px_rgba(201,168,76,0.25)] transition hover:-translate-y-1 hover:bg-[#E6C768]"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}