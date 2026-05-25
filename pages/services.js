import { useState } from 'react';
import Layout from '../components/Layout';

export default function Services() {
  const [openCard, setOpenCard] = useState(null);

  const services = [
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

  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#050912] px-4 md:px-6 py-20 text-white md:py-28">

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

      <section className="bg-[#F4F6FB] px-6 py-16 text-[#0A0F1E]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const isOpen = openCard === idx;

            return (
              <article
                key={service.title}
                className={`rounded-2xl border border-gray-200 border-l-4 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isOpen ? 'border-l-[#C9A84C] shadow-xl' : 'border-l-[#C9A84C]'
                }`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl  text-2xl shadow-md">
                  {service.icon}
                </div>

                <h3 className="text-lg font-black leading-snug text-[#0A0F1E]">
                  {service.title}
                </h3>

                {isOpen && (
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-[#2D3748]">
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
                  onClick={() => setOpenCard(isOpen ? null : idx)}
                  className="mt-6 rounded-lg bg-[#C9A84C] px-5 py-3 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]"
                >
                  {isOpen ? 'Show less' : 'More info'}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F4F6FB] px-6 pb-20 text-center text-[#0A0F1E]">
        
          <h2 className="text-2xl font-black tracking-tight md:text-4xl">
            Ready to Discuss Your Requirements?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#2D3748]">
            Our team will build a bespoke proposal tailored to your programme needs.
          </p>

          <a
            href="mailto:info@finxt.uk?subject=Proposal%20Request%20-%20FinXT%20UK"
            className="mt-8 inline-flex rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]"
          >
            Request a Proposal →
          </a>
        
      </section>
    </Layout>
  );
}