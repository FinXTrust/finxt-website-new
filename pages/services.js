import { useState } from 'react';
import Layout from '../components/Layout';

export default function Services() {
  const [openCard, setOpenCard] = useState(null);

  const aiServices = [
    {
      icon: '💡',
      title: 'AI Strategy and Readiness Consulting',
      points: [
        'Our comprehensive AI Strategy & Readiness Consulting helps businesses identify, evaluate, and implement AI solutions that align with their strategic goals.',
        'We provide clear roadmaps, risk assessments, and readiness checks, ensuring a smooth and effective transition into AI-driven operations.',
      ],
    },
    {
      icon: '🤖',
      title: 'Custom AI Chatbot Development',
      points: [
        'FinXT develops intelligent and responsive AI chatbots and virtual assistants tailored to your business needs.',
        'Our solutions automate repetitive tasks, enhance customer engagement, and provide reliable 24/7 support to improve productivity and customer satisfaction.',
      ],
    },
    {
      icon: '📊',
      title: 'AI-Enhanced Data Insights',
      points: [
        'Our AI-enhanced data analytics services uncover deep, actionable insights from complex datasets, enabling smarter decisions, increased efficiency, and strategic growth.',
        'Harness predictive analytics, real-time insights, and automated reporting for impactful outcomes.',
      ],
    },
    {
      icon: '🔐',
      title: 'AI Cybersecurity & Threat Detection',
      points: [
        'Our AI cybersecurity solutions use advanced machine learning algorithms and predictive analytics to proactively detect, prevent, and mitigate cybersecurity threats.',
        'Trust FinXT to safeguard your business, data integrity, and customer trust with the latest cybersecurity technologies.',
      ],
    },
    {
      icon: '⚖️',
      title: 'Compliance-Focused AI Advisory',
      points: [
        'FinXT provides compliance-focused AI advisory services that ensure your AI solutions are transparent, ethical, and fully compliant with industry standards.',
        'We navigate regulatory complexities, ensuring your peace of mind.',
      ],
    },
    {
      icon: '💳',
      title: 'Smart Payment Integration Solutions',
      points: [
        'Our smart payment solutions seamlessly integrate advanced technologies, enhancing transaction security, efficiency, and user experience.',
        'Benefit from frictionless payment systems, secure transaction processing, and scalable integration tailored specifically to your needs.',
      ],
    },
    {
      icon: '🎁',
      title: 'Reward & Loyalty Solutions and Platform Development',
      points: [
        'Boost customer loyalty and retention through sophisticated, personalized reward systems and platforms developed by FinXT.',
        'Our AI-driven platforms enhance customer engagement, track user preferences, and deliver meaningful incentives tailored precisely to your customer base.',
      ],
    },
    {
      icon: '📣',
      title: 'AI in Marketing, Content & Branding',
      points: [
        'Transform your marketing and branding strategies with FinXT’s AI-driven solutions, designed to deliver personalized content, predictive market analysis, and targeted branding campaigns.',
        'Maximize your marketing ROI and brand impact through AI-optimized strategies.',
      ],
    },
  ];
  const serviceGroups = [
  {
    heading: 'AI Services',
    services: aiServices,
  },
  {
    heading: 'Project Management Services',
    services: [
      {
        icon: '👥',
        title: 'Crowdsourcing Solutions',
        points: [
          'Access to diverse, scalable participant pools across geographies for rapid data collection, usability testing, and engagement initiatives.',
          'Fully managed recruitment, screening, and coordination services with GDPR-compliant processes.',
        ],
      },
      {
        icon: '📋',
        title: 'Programme Management',
        points: [
          'Structured oversight of complex, multi-workstream programmes ensuring alignment with business goals, timelines, and budgets.',
          'Dedicated PMs, governance frameworks, risk management, and stakeholder reporting.',
        ],
      },
      {
        icon: '🚚',
        title: 'Logistics & Secure Shipment',
        points: [
          'Reliable, secure, and efficient transportation of equipment and materials, including high-value and sensitive assets.',
          'Full chain-of-custody, bonded warehousing, and comprehensive insurance coverage.',
        ],
      },
      {
        icon: '🌍',
        title: 'ATA Carnet Handling',
        points: [
          'Expert management of international temporary imports and exports across 87+ signatory countries.',
          'Customs liaison, documentation management, and reduction of delays and duty exposure.',
        ],
      },
      {
        icon: '🏗️',
        title: 'Site Setup & Deployment',
        points: [
          'End-to-end setup of testing environments, pop-up research labs, and operational sites.',
          'From site survey to teardown — rapid, multi-location parallel deployment with full IT and infrastructure provisioning.',
        ],
      },
      {
        icon: '👔',
        title: 'Staffing Solutions, Payroll & EOR',
        points: [
          'Provision of skilled technical, operational, and research personnel.',
          'Employer of Record and payroll management services enabling compliant hiring across UK and EU markets without local entity requirement.',
        ],
      },
      {
        icon: '🔬',
        title: 'User Study & Research Support',
        points: [
          'Comprehensive facilitation of user research including participant recruitment, moderated and unmoderated sessions, ethnographic studies, data collection, and transcription.',
          'Delivered in multiple languages and markets.',
        ],
      },
    ],
  },
];
const PMServiceVisual = ({ idx }) => {
  const visuals = [
    { color: '#35D0A3', title: 'CROWD' },
    { color: '#4EA1FF', title: 'PM' },
    { color: '#F59E0B', title: 'SHIP' },
    { color: '#A78BFA', title: 'ATA' },
    { color: '#22D3EE', title: 'SITE' },
    { color: '#EC4899', title: 'HR' },
    { color: '#C9A84C', title: 'UX' },
  ];

  const visual = visuals[idx];

  return (
    <div className="relative mb-6 h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#081126]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${visual.color}33, transparent 34%), linear-gradient(135deg, #0B1325 0%, #050912 100%)`,
        }}
      />

      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition duration-500 group-hover:scale-125"
        style={{ backgroundColor: `${visual.color}30` }}
      />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: `${visual.color}70` }}
      />

      {idx === 0 && (
        <>
          <div className="absolute left-8 top-10 h-12 w-36 rounded-2xl border border-emerald-300/40 bg-white/5" />
          <div className="absolute right-8 bottom-12 h-12 w-28 rounded-2xl border border-emerald-300/25 bg-white/5" />
        </>
      )}

      {idx === 1 && (
        <>
          <div className="absolute left-8 top-9 h-14 w-32 rounded-2xl border border-blue-300/40 bg-white/5" />
          <div className="absolute right-8 bottom-12 h-10 w-36 rounded-2xl border border-blue-300/25 bg-white/5" />
        </>
      )}

      {idx === 2 && (
        <>
          <div className="absolute left-8 top-16 h-2 w-32 rounded-full bg-orange-300/50" />
          <div className="absolute left-12 top-24 h-2 w-24 rounded-full bg-white/20" />
          <div className="absolute right-10 bottom-12 h-10 w-20 rounded-xl border border-orange-300/35" />
        </>
      )}

      {idx === 3 && (
        <>
          <div className="absolute left-10 top-10 h-24 w-px bg-purple-300/45" />
          <div className="absolute left-6 top-24 h-px w-36 bg-white/25" />
          <div className="absolute left-7 top-28 h-10 w-10 rounded-full border border-purple-300/35" />
          <div className="absolute right-10 top-28 h-10 w-10 rounded-full border border-purple-300/35" />
        </>
      )}

      {idx === 4 && (
        <>
          <div className="absolute left-8 top-14 h-24 w-40 rounded-2xl border border-cyan-300/35 bg-white/5" />
          <div className="absolute left-16 top-10 h-6 w-24 rounded-full bg-cyan-300/20" />
        </>
      )}

      {idx === 5 && (
        <>
          <div className="absolute left-8 top-12 h-20 w-20 rounded-full border border-pink-300/35" />
          <div className="absolute right-8 top-12 h-20 w-20 rounded-full border border-pink-300/25" />
          <div className="absolute left-1/2 bottom-10 h-10 w-28 -translate-x-1/2 rounded-2xl border border-pink-300/30" />
        </>
      )}

      {idx === 6 && (
        <>
          <div className="absolute left-8 top-12 h-24 w-36 rounded-full border border-[#C9A84C]/40" />
          <div className="absolute right-10 bottom-10 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#C9A84C]/70" />
            <span className="h-3 w-3 rounded-full bg-white/30" />
            <span className="h-3 w-3 rounded-full bg-[#C9A84C]/40" />
          </div>
        </>
      )}

      <div
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border bg-black/25 text-lg font-black backdrop-blur-md transition duration-500 group-hover:scale-110"
        style={{
          borderColor: `${visual.color}70`,
          color: visual.color,
          boxShadow: `0 0 40px ${visual.color}25`,
        }}
      >
        {visual.title}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050912] to-transparent" />

      <div className="absolute right-5 bottom-5 rounded-xl border border-[#C9A84C]/30 bg-black/40 px-3 py-1 text-xs font-bold text-[#E8C96A] backdrop-blur">
        {String(idx + 1).padStart(2, '0')}
      </div>
    </div>
  );
};

const ServiceVisual = ({ idx }) => {
  const visuals = [
    { color: '#C9A84C', title: 'AI', shape: 'strategy' },
    { color: '#4EA1FF', title: 'BOT', shape: 'chat' },
    { color: '#35D0A3', title: 'DATA', shape: 'data' },
    { color: '#F25F5C', title: 'SEC', shape: 'security' },
    { color: '#A78BFA', title: 'LAW', shape: 'compliance' },
    { color: '#22D3EE', title: 'PAY', shape: 'payments' },
    { color: '#E4B947', title: 'VIP', shape: 'loyalty' },
    { color: '#EC4899', title: 'AI', shape: 'marketing' },
  ];
  const visual = visuals[idx];

  return (
    <div className="relative mb-6 h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#081126]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${visual.color}33, transparent 34%), linear-gradient(135deg, #0B1325 0%, #050912 100%)`,
        }}
      />

      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition duration-500 group-hover:scale-125"
        style={{ backgroundColor: `${visual.color}30` }}
      />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: `${visual.color}70` }}
      />

      <div
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border bg-black/25 text-lg font-black tracking-tight backdrop-blur-md transition duration-500 group-hover:scale-110"
        style={{
          borderColor: `${visual.color}70`,
          color: visual.color,
          boxShadow: `0 0 40px ${visual.color}25`,
        }}
      >
        {visual.title}
      </div>

      {visual.shape === 'strategy' && (
        <>
          <div className="absolute left-8 top-10 h-2 w-32 rounded-full bg-[#C9A84C]/70" />
          <div className="absolute left-8 top-20 h-2 w-24 rounded-full bg-white/25" />
          <div className="absolute left-8 top-30 h-2 w-16 rounded-full bg-white/15" />
        </>
      )}

      {visual.shape === 'chat' && (
        <>
          <div className="absolute left-7 top-9 h-12 w-36 rounded-2xl border border-blue-300/35 bg-white/5" />
          <div className="absolute right-7 bottom-10 h-12 w-36 rounded-2xl border border-[#C9A84C]/35 bg-white/5" />
        </>
      )}

      {visual.shape === 'data' && (
        <div className="absolute bottom-8 left-8 flex items-end gap-3">
          <span className="h-10 w-5 rounded-t bg-emerald-300/55" />
          <span className="h-16 w-5 rounded-t bg-[#C9A84C]/65" />
          <span className="h-24 w-5 rounded-t bg-emerald-300/65" />
          <span className="h-14 w-5 rounded-t bg-white/25" />
        </div>
      )}

      {visual.shape === 'security' && (
        <>
          <div className="absolute left-1/2 top-1/2 h-28 w-24 -translate-x-1/2 -translate-y-1/2 rounded-b-[36px] rounded-t-2xl border border-red-300/45 bg-white/5" />
          <div className="absolute left-8 top-10 h-16 w-16 rounded-2xl border border-red-300/25 bg-white/5" />
        </>
      )}

      {visual.shape === 'compliance' && (
        <>
          <div className="absolute left-10 top-10 h-28 w-px bg-[#C9A84C]/50" />
          <div className="absolute left-5 top-24 h-px w-32 bg-white/25" />
          <div className="absolute left-5 top-28 h-12 w-12 rounded-full border border-purple-300/35" />
          <div className="absolute left-28 top-28 h-12 w-12 rounded-full border border-purple-300/35" />
        </>
      )}

      {visual.shape === 'payments' && (
        <div className="absolute left-8 top-14 h-24 w-44 rotate-[-6deg] rounded-2xl border border-cyan-300/35 bg-white/5 shadow-[0_0_35px_rgba(34,211,238,0.12)]" />
      )}

      {visual.shape === 'loyalty' && (
        <>
          <div className="absolute left-8 top-12 h-24 w-40 rounded-2xl border border-[#C9A84C]/45 bg-white/5" />
          <div className="absolute left-20 top-8 h-24 w-1 rotate-45 bg-[#C9A84C]/50" />
        </>
      )}

      {visual.shape === 'marketing' && (
        <>
          <div className="absolute left-8 top-12 h-24 w-36 rounded-full border border-pink-300/40" />
          <div className="absolute right-10 bottom-10 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-pink-300/70" />
            <span className="h-3 w-3 rounded-full bg-[#C9A84C]/70" />
            <span className="h-3 w-3 rounded-full bg-white/30" />
          </div>
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050912] to-transparent" />

      <div className="absolute right-5 bottom-5 rounded-xl border border-[#C9A84C]/30 bg-black/40 px-3 py-1 text-xs font-bold text-[#E8C96A] backdrop-blur">
        {String(idx + 1).padStart(2, '0')}
      </div>
    </div>
  );
};
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#050912] px-4 py-20 text-white md:px-6 md:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/services_banner.png')",
          backgroundPosition: 'right center',
        }}
      />

      {/* Dark overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050912] via-[#050912]/80 to-[#050912]/20" />
      {/* Desktop Background */}
<div
  className="absolute inset-0 hidden md:block bg-no-repeat"
  style={{
    backgroundImage: "url('/images/services_banner.png')",
    backgroundSize: '72% auto',
    backgroundPosition: 'right center',
  }}
/>

{/* Mobile Background */}
<div
  className="absolute inset-0 md:hidden bg-no-repeat"
  style={{
    backgroundImage: "url('/images/services_banner.png')",
    backgroundSize: '185% auto',
    backgroundPosition: '68% center',
  }}
/>
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#C9A84C] uppercase">
            Our Services
          </p>

          <h1 className="finxt-heading max-w-4xl text-3xl md:text-5xl leading-tight">
            Modern AI, Automation & Digital Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            End-to-end services designed to modernise operations, unlock insight,
            strengthen security, and accelerate business growth.
          </p>
        </div>
      </section>

<section className="relative overflow-hidden border-y border-[#C9A84C]/20 bg-[#050912] px-6 py-24 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.08),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(56,111,255,0.13),transparent_30%),linear-gradient(180deg,#071126_0%,#050912_100%)]" />

<div className="relative z-10 mx-auto max-w-7xl space-y-20">
  {serviceGroups.map((group, groupIdx) => (
    <div key={group.heading}>
      <h2 className="mb-10 text-3xl font-black text-white">
        {group.heading}
        <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />
      </h2>
      


      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {group.services.map((service, idx) => {
          const cardId = `${groupIdx}-${idx}`;
          const isOpen = openCard === cardId;

          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-8 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/45 hover:shadow-[0_25px_80px_rgba(201,168,76,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70" />

              {group.heading === 'AI Services' ? (
                <ServiceVisual idx={idx % 8} />
              ) : (
                <PMServiceVisual idx={idx % 7} />
              )}

              <h3 className="text-xl font-black leading-snug text-white">
                {service.title}
                
              </h3>
              

              {isOpen && (
                <ul className="mt-6 space-y-4 text-sm leading-7 text-white/70">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 font-bold text-[#C9A84C]">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button
                type="button"
                onClick={() => setOpenCard(isOpen ? null : cardId)}
                className="mt-7 inline-flex rounded-2xl border border-[#C9A84C]/35 bg-[#C9A84C]/10 px-5 py-3 text-sm font-bold text-[#E8C96A] transition hover:-translate-y-1 hover:bg-[#C9A84C] hover:text-[#0A0F1E]"
              >
                {isOpen ? 'Show less' : 'More info'} →
              </button>
            </article>
          );
        })}
      </div>
    </div>
  ))}
</div>
</section>

<section className="relative overflow-hidden bg-[#050912] px-6 py-24 text-center text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.18),transparent_35%)]" />
  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

  <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#C9A84C]/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.025))] p-10 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-14">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(201,168,76,0.20),transparent_25%),radial-gradient(circle_at_85%_50%,rgba(56,111,255,0.18),transparent_28%)]" />
    <div className="absolute -right-20 -top-20 h-56 w-56 animate-pulse rounded-full bg-[#C9A84C]/20 blur-3xl" />
    <div className="absolute -bottom-16 left-10 h-40 w-40 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />

    <div className="relative z-10">
      <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
        Ready to Discuss Your Requirements?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
        Our team will build a bespoke proposal tailored to your programme needs.
      </p>

      <a
        href="mailto:info@finxt.uk?subject=Proposal%20Request%20-%20FinXT%20UK"
        className="mt-8 inline-flex rounded-2xl bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] shadow-[0_0_35px_rgba(201,168,76,0.30)] transition hover:-translate-y-1 hover:bg-[#E8C96A]"
      >
        Request a Proposal →
      </a>
    </div>
  </div>
</section>
    </Layout>
  );
}