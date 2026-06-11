import ScrollReveal from './ScrollReveal';
import ServicesPillarBlock from './ServicesPillarBlock';
import { servicesIntro, solutionPillars } from '../data/services';

export default function ServicesListSection() {
  return (
    <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <ScrollReveal className="finxt-micro-intro max-w-3xl">
          <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
            Solution pillars
          </p>
          <h2
            className="finxt-scroll-reveal finxt-section-heading"
            style={{ '--reveal-delay': '100ms' }}
          >
            How we deliver as one integrated partner
          </h2>
          <div
            className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
            style={{ '--reveal-delay': '200ms' }}
          />
          <p
            className="finxt-scroll-reveal finxt-home-intro finxt-body"
            style={{ '--reveal-delay': '300ms' }}
          >
            {servicesIntro}
          </p>
        </ScrollReveal>

        <ScrollReveal className="finxt-svc-pillar-nav mt-10 md:mt-12">
          <nav aria-label="Solution pillars">
            <ul
              className="finxt-scroll-reveal finxt-svc-pillar-nav-list"
              style={{ '--reveal-delay': '380ms' }}
            >
              {solutionPillars.map((pillar) => (
                <li key={pillar.id}>
                  <a href={`#${pillar.id}`} className="finxt-svc-pillar-nav-link">
                    <span className="finxt-svc-pillar-nav-num">{pillar.number}</span>
                    <span>{pillar.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollReveal>

        <div className="finxt-svc-pillars mt-12 md:mt-14">
          {solutionPillars.map((pillar, pillarIndex) => (
            <ServicesPillarBlock key={pillar.id} pillar={pillar} pillarIndex={pillarIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
