import ScrollReveal from './ScrollReveal';
import ServicesCompactCard from './ServicesCompactCard';
import { getPillarServices } from '../data/services';

export default function ServicesPillarBlock({ pillar, pillarIndex, isActive }) {
  const pillarServices = getPillarServices(pillar);

  return (
    <section
      id={pillar.id}
      className={[
        'finxt-svc-pillar scroll-mt-32',
        isActive ? 'finxt-svc-pillar--in-view' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--pillar-accent': pillar.accent }}
      aria-labelledby={`${pillar.id}-heading`}
    >
      <div className="finxt-svc-pillar-shell">
        <div className="finxt-svc-pillar-shell-glow" aria-hidden="true" />

        <div className="finxt-svc-pillar-stage">
          <ScrollReveal className="finxt-svc-pillar-head">
            <div
              className="finxt-scroll-reveal finxt-svc-pillar-head-copy"
              style={{ '--reveal-delay': '0ms' }}
            >
              <h3 id={`${pillar.id}-heading`} className="finxt-svc-pillar-title">
                {pillar.title}
              </h3>
            </div>
          </ScrollReveal>

          <div className="finxt-svc-pillar-body">
            <div className="finxt-svc-pillar-cards-head">
              <p className="finxt-svc-pillar-cards-label">Included services</p>
              <span className="finxt-svc-pillar-cards-rule" aria-hidden="true" />
            </div>

            <div className="finxt-svc-pillar-grid">
              {pillarServices.map((service, serviceIndex) => (
                <ServicesCompactCard
                  key={service.id}
                  service={service}
                  index={pillarIndex * 3 + serviceIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
