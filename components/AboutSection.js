import ScrollReveal from './ScrollReveal';
import RevealItem from './RevealItem';
import WhatWeDeliverVisual from './WhatWeDeliverVisual';

const valuePropositions = [
  {
    title: 'One Partner. Total Accountability.',
    description:
      'Nine service verticals under one roof. No handoffs between agencies, no communication failures between suppliers, no ambiguity about who owns the problem. When you work with FinXT UK, you have one team, one contract, and one point of contact accountable for everything.',
  },
  {
    title: 'UK & European Stronghold',
    description:
      'Established on-ground presence and operational networks across the United Kingdom, Spain, and Poland. We know these markets, the regulatory environments, and the people on the ground because we operate in them every day.',
  },
  {
    title: 'Globally Scalable — Without Compromise',
    description:
      'The same quality standard applies whether you are running a UK pilot or a 10+ country rollout. Our processes, our reporting, and our team structure are designed for scale from the outset. We do not retrofit global capability; we build programmes with it from day one.',
  },
  {
    title: 'Compliant by Design',
    description:
      'Data protection, employment law, import/export regulations, payment compliance — our operations are built around the regulatory environments we work in. We hold NDA-first engagements, operate UK GDPR-compliant data processes, and bring specialist regulatory knowledge to every jurisdiction we work in.',
  },
  {
    title: 'Measurable Outcomes',
    description:
      'Every engagement is structured around clear KPIs, agreed at the outset and reported against throughout. We do not rely on good intentions; we build measurement into the programme architecture, so you always know where things stand and what is being done about it.',
  },
  {
    title: 'Trusted & Discreet',
    description:
      'We work with clients on sensitive technology programmes, pre-launch research studies, and commercially confidential deployments. An NDA-first approach is standard, not optional. Discretion is a service, not an afterthought.',
  },
];

export default function AboutSection() {
  return (
    <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <div className="finxt-deliver-grid">
          <ScrollReveal className="finxt-deliver-intro max-w-3xl">
            <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
              Why FinXT
            </p>

            <h2
              className="finxt-scroll-reveal finxt-section-heading"
              style={{ '--reveal-delay': '100ms' }}
            >
              The Partner Built for Operational Complexity
            </h2>

            <div
              className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
              style={{ '--reveal-delay': '200ms' }}
            />

            <div
              className="finxt-scroll-reveal finxt-home-intro finxt-body"
              style={{ '--reveal-delay': '300ms' }}
            >
              <p>
                Most organisations running international programmes manage a portfolio
                of vendors. A logistics firm. A staffing agency. A research operations
                partner. A payments platform. Each one is accountable for their own
                scope and no one is accountable for the gaps between them.
              </p>
              <p className="font-medium text-white/85">
                FinXT UK is built differently. We exist precisely in those gaps.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="finxt-scroll-reveal finxt-scroll-reveal--right" style={{ '--reveal-delay': '180ms' }}>
              <WhatWeDeliverVisual />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
          {valuePropositions.map((item, index) => (
            <RevealItem
              key={item.title}
              as="article"
              variant="scale"
              delay={120 + index * 90}
              className="finxt-home-card relative flex flex-col overflow-hidden p-5 pl-5 md:p-6 md:pl-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-finxt-gold/50 to-transparent" />
              <div className="absolute left-0 top-0 h-full w-[3px] bg-finxt-gold/80" />

              <h3 className="finxt-card-title pl-1">{item.title}</h3>
              <p className="finxt-card-body mt-3 pl-1">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
