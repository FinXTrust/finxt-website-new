import ScrollReveal from './ScrollReveal';
import ServicesCompactCard from './ServicesCompactCard';
import { getPillarServices } from '../data/services';

export default function ServicesPillarBlock({ pillar, pillarIndex }) {
  const pillarServices = getPillarServices(pillar);

  return (
    <section
      id={pillar.id}
      className="finxt-svc-pillar scroll-mt-28"
      style={{ '--pillar-accent': pillar.accent }}
      aria-labelledby={`${pillar.id}-heading`}
    >
      <ScrollReveal className="finxt-svc-pillar-head">
        <p
          className="finxt-scroll-reveal finxt-svc-pillar-index"
          style={{ '--reveal-delay': '0ms' }}
        >
          Pillar {pillar.number}
        </p>
        <h3
          id={`${pillar.id}-heading`}
          className="finxt-scroll-reveal finxt-svc-pillar-title"
          style={{ '--reveal-delay': '80ms' }}
        >
          {pillar.title}
        </h3>
        <p
          className="finxt-scroll-reveal finxt-svc-pillar-summary finxt-body"
          style={{ '--reveal-delay': '160ms' }}
        >
          {pillar.summary}
        </p>
      </ScrollReveal>

      <div className="finxt-svc-pillar-grid">
        {pillarServices.map((service, serviceIndex) => (
          <ServicesCompactCard
            key={service.id}
            service={service}
            index={pillarIndex * 3 + serviceIndex}
          />
        ))}
      </div>
    </section>
  );
}
