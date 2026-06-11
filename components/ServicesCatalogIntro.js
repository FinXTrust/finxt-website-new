import ScrollReveal from './ScrollReveal';
import {
  servicesCatalogHeading,
  servicesCatalogLabel,
  servicesGroupsLabel,
  servicesIntro,
  solutionPillars,
} from '../data/services';

export default function ServicesCatalogIntro({ activePillarId }) {
  return (
    <ScrollReveal className="finxt-svc-catalog-intro">
      <div className="finxt-svc-catalog-intro-stage">
        <div
          className="finxt-scroll-reveal finxt-svc-catalog-intro-copy"
          style={{ '--reveal-delay': '0ms' }}
        >
          <p className="finxt-label mb-5">{servicesCatalogLabel}</p>
          <h2 className="finxt-section-heading finxt-svc-catalog-heading">
            {servicesCatalogHeading}
          </h2>
          <div className="finxt-divider" />
          <div className="finxt-home-intro finxt-body">
            <p className="finxt-svc-catalog-deck">{servicesIntro}</p>
          </div>
        </div>

        <nav
          className="finxt-scroll-reveal finxt-svc-pillar-index"
          aria-label={servicesGroupsLabel}
          style={{ '--reveal-delay': '160ms' }}
        >
          <p className="finxt-svc-pillar-index-label">{servicesGroupsLabel}</p>
          <ol className="finxt-svc-pillar-index-list">
            {solutionPillars.map((pillar) => {
              const isActive = pillar.id === activePillarId;

              return (
                <li key={pillar.id} className="finxt-svc-pillar-index-item-wrap">
                  <a
                    href={`#${pillar.id}`}
                    className={[
                      'finxt-svc-pillar-index-item',
                      isActive ? 'finxt-svc-pillar-index-item--active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={{ '--pillar-accent': pillar.accent }}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    <span className="finxt-svc-pillar-index-mark" aria-hidden="true" />
                    <span className="finxt-svc-pillar-index-title">{pillar.title}</span>
                    <span className="finxt-svc-pillar-index-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </ScrollReveal>
  );
}
