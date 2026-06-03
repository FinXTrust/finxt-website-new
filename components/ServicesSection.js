import Link from 'next/link';

export default function ServicesSection() {
 const aiServices = [
    'AI Strategy and Readiness Consulting',
    'Custom AI Chatbot Development',
    'AI-Enhanced Data Insights',
    'AI Cybersecurity & Threat Detection',
    'Compliance-Focused AI Advisory',
    'Smart Payment Integration Solutions',
    'Reward & Loyalty Solutions and Platform Development',
    'AI in Marketing, Content & Branding',
  ];

  const projectManagementServices = [
    'Crowdsourcing Solutions',
    'Programme Management',
    'Logistics & Secure Shipment',
    'ATA Carnet Handling',
    'Site Setup & Deployment',
    'Staffing Solutions, Payroll & EOR',
    'User Study & Research Support',
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
            Integrated services. One trusted partner.
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

            <p className="mt-8 text-sm leading-7 text-white/70 md:text-base">
              Every service is available standalone or as part of a fully managed
              end-to-end solution.
            </p>
          </div>

          {/* RIGHT GRID */}
        <div className="grid gap-6 md:grid-cols-2">
            <ServiceCard
              title="AI Services"
              items={aiServices}
              href="/services#ai-services"
            />

            <ServiceCard
              title="Project Management Services"
              items={projectManagementServices}
              href="/services#project-management-services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, label, items ,href}) {
  const visibleItems = items.slice(0, 3);
  const remainingCount = items.length - visibleItems.length;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-8 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/45 hover:shadow-[0_25px_80px_rgba(201,168,76,0.12)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70" />
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C9A84C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
        {label}
      </p>

      <h3 className="mb-6 min-h-[72px] text-2xl font-black text-white">
        {title}
      </h3>
      <div className="space-y-3">
        {visibleItems.map((item) => (
          <div
            key={item}
            className="border-b border-white/10 pb-3 text-sm font-medium text-white/80"
          >
            {item}
          </div>
        ))}
      </div>

      {remainingCount > 0 && (
        <p className="mt-5 text-sm text-white/60">
          + {remainingCount} more services
        </p>
      )}

        {/* BUTTON */}
        <div className="mt-auto pt-10 text-center">
          <Link
            href={href}
            className="inline-flex rounded-2xl bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#050912] shadow-[0_0_35px_rgba(201,168,76,0.25)] transition hover:-translate-y-1 hover:bg-[#E6C768]"
          >
            View All Services →
          </Link>
        </div>
    </div>
  );
}