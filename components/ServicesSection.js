import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    ['👥', 'AI Strategy and Readiness Consulting', 'Scalable participant pools across 30+ countries.'],
    ['🤖', 'Custom AI Chatbot Development', 'Structured oversight of complex, multi-workstream programmes.'],
    ['📊', 'AI-Enhanced Data Insights', 'Reliable movement of equipment and assets across borders.'],
    ['🔐', 'AI Cybersecurity & Threat Detection', 'Temporary import/export documentation and support.'],
    ['⚖️', 'Compliance-Focused AI Advisory', 'Testing labs and operational sites deployed with precision.'],
    ['💳', 'Smart Payment Integration Solutions', 'Skilled personnel and compliant workforce solutions.'],
    ['🎁', 'Reward & Loyalty Solutions and Platform Development', 'Full-cycle research support from recruitment to insights.'],
    ['📣', 'AI in Marketing, Content & Branding', 'Secure multi-currency rewards and reimbursements.'],
  ];

  return (
  <section className="bg-[#0D1B3E] px-4 py-20 text-white md:px-6">
   <div className="mx-auto max-w-7xl rounded-2xl p-4 md:p-12">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        
        {/* LEFT SIDE */}
        <div>
          <p className="finxt-label mb-5">What We Deliver</p>

          <h2 className="text-2xl font-black leading-tight tracking-tight md:text-4xl">
            Eight integrated services. One trusted partner.
          </h2>

          <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

          <p className="mt-8 space-y-5 text-sm leading-7 text-white/70 md:text-base">
            Every service is available standalone or as part of a fully managed
            end-to-end solution.
          </p>
        </div>

        {/* RIGHT GRID */}
        {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([icon, title]) => (
              <div
                key={title}
                className="mb-2 text-base font-semibold text-center"
              >
                <div className="mb-5 text-4xl text-[#C9A84C]">
                  {icon}
                </div>

                <h3 className="text-sm font-bold leading-6 text-white">
                  {title}
                </h3>
              </div>
            ))}
          </div>
       
      </div>

      {/* BUTTON */}
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="w-fit rounded-lg bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#050912] transition hover:bg-[#E6C768] sm:px-8"
        >
          View All Services →
        </Link>
      </div>
    </div>
  </section>
);
}
