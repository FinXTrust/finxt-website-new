import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import RevealItem from './RevealItem';
import { sectors } from '../data/sectors';
import SectorIcon from './SectorIcon';

function SectorPanelContent({ sector }) {
  return (
    <>
      <div className="finxt-sector-panel-media">
        <img
          src={sector.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="finxt-sector-panel-image"
        />
        <div className="finxt-sector-panel-media-scrim" />
      </div>

      <div className="finxt-sector-panel-body">
        <p className="finxt-card-body-sm text-white/75">{sector.summary}</p>
        <p className="finxt-card-body mt-4">{sector.description}</p>
      </div>
    </>
  );
}

export default function SectorsSection() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const desktopActiveId = activeId ?? sectors[0].id;
  const activeSector =
    sectors.find((sector) => sector.id === desktopActiveId) ?? sectors[0];

  const handleAccordionToggle = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <section className="finxt-section finxt-home-accent relative overflow-hidden px-4 pt-0 pb-14 md:px-6 md:pb-16">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <ScrollReveal className="max-w-3xl">
          <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
            Sectors we serve
          </p>

          <h2
            className="finxt-scroll-reveal finxt-section-heading"
            style={{ '--reveal-delay': '100ms' }}
          >
            We Understand Your Sector Because We Operate in It
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
              FinXT UK does not offer generic programme delivery. Our teams bring
              sector-specific knowledge, the regulatory context, the operational
              sensitivities, and the stakeholder expectations that make delivery in
              your market genuinely different from any other.
            </p>
          </div>
        </ScrollReveal>

        <div className="finxt-sectors-accordion mt-12 lg:hidden">
          {sectors.map((sector, index) => {
            const isExpanded = sector.id === activeId;

            return (
              <RevealItem
                key={sector.id}
                as="article"
                variant="scale"
                delay={index * 90}
                className={[
                  'finxt-sector-accordion-item finxt-home-card relative overflow-hidden',
                  isExpanded ? 'finxt-sector-accordion-item--open' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ '--sector-accent': sector.accent }}
              >
                <button
                  type="button"
                  className="finxt-sector-accordion-trigger"
                  aria-expanded={isExpanded}
                  onClick={() => handleAccordionToggle(sector.id)}
                >
                  <span className="finxt-sector-tab-icon" aria-hidden="true">
                    <SectorIcon type={sector.icon} className="h-5 w-5" />
                  </span>
                  <span className="finxt-sector-accordion-title">{sector.title}</span>
                  <span className="finxt-sector-accordion-chevron" aria-hidden="true" />
                </button>

                {isExpanded && (
                  <div className="finxt-sector-accordion-content">
                    <SectorPanelContent sector={sector} />
                  </div>
                )}
              </RevealItem>
            );
          })}
        </div>

        <ScrollReveal className="finxt-sectors-browser finxt-sectors-browser--desktop mt-12 lg:mt-14">
          <div
            className="finxt-scroll-reveal finxt-scroll-reveal--left finxt-sectors-nav"
            style={{ '--reveal-delay': '0ms' }}
            role="tablist"
            aria-label="Sectors we serve"
          >
            {sectors.map((sector) => {
              const isActive = sector.id === desktopActiveId;

              return (
                <button
                  key={sector.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    'finxt-sector-tab',
                    isActive ? 'finxt-sector-tab--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ '--sector-accent': sector.accent }}
                  onClick={() => setActiveId(sector.id)}
                >
                  <span className="finxt-sector-tab-icon" aria-hidden="true">
                    <SectorIcon type={sector.icon} className="h-5 w-5" />
                  </span>
                  <span className="finxt-sector-tab-copy">
                    <span className="finxt-sector-tab-title">{sector.title}</span>
                    <span className="finxt-sector-tab-summary">{sector.summary}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <article
            key={activeSector.id}
            className="finxt-scroll-reveal finxt-scroll-reveal--right finxt-sector-panel finxt-home-card relative overflow-hidden"
            role="tabpanel"
            style={{ '--sector-accent': activeSector.accent, '--reveal-delay': '140ms' }}
          >
            <SectorPanelContent sector={activeSector} />
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
