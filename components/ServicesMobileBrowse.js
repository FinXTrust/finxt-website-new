'use client';

import { useEffect, useState } from 'react';
import ServicesCompactCard from './ServicesCompactCard';
import {
  getPillarServices,
  servicesCatalogHeadingMobile,
  servicesCatalogLabel,
  servicesGroupsLabel,
  servicesIntroMobile,
  solutionPillars,
} from '../data/services';

function getOpenIdFromHash() {
  if (typeof window === 'undefined') return solutionPillars[0].id;

  const hash = window.location.hash.replace('#', '');
  return solutionPillars.some((pillar) => pillar.id === hash)
    ? hash
    : solutionPillars[0].id;
}

export default function ServicesMobileBrowse() {
  const [openPillarId, setOpenPillarId] = useState(solutionPillars[0].id);

  useEffect(() => {
    setOpenPillarId(getOpenIdFromHash());

    const onHashChange = () => setOpenPillarId(getOpenIdFromHash());

    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const openGroup = (pillarId) => {
    setOpenPillarId(pillarId);

    if (typeof window !== 'undefined') {
      const url = `${window.location.pathname}${window.location.search}#${pillarId}`;
      window.history.replaceState(null, '', url);
    }
  };

  return (
    <div className="finxt-svc-mobile-browse lg:hidden">
      <div className="finxt-svc-mobile-intro">
        <p className="finxt-label mb-4">{servicesCatalogLabel}</p>
        <h2 className="finxt-svc-mobile-heading">{servicesCatalogHeadingMobile}</h2>
        <div className="finxt-divider" />
        <p className="finxt-svc-mobile-deck finxt-body">{servicesIntroMobile}</p>
      </div>

      <p className="finxt-label finxt-svc-mobile-groups-label">{servicesGroupsLabel}</p>

      <div className="finxt-svc-mobile-accordion">
        {solutionPillars.map((pillar, pillarIndex) => {
          const isOpen = pillar.id === openPillarId;
          const pillarServices = getPillarServices(pillar);
          const panelId = `${pillar.id}-services`;

          return (
            <section
              key={pillar.id}
              className={[
                'finxt-svc-mobile-group scroll-mt-28',
                isOpen ? 'finxt-svc-mobile-group--open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ '--pillar-accent': pillar.accent }}
            >
              <button
                type="button"
                className="finxt-svc-mobile-group-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => openGroup(pillar.id)}
              >
                <span className="finxt-svc-mobile-group-mark" aria-hidden="true" />
                <span className="finxt-svc-mobile-group-title">{pillar.title}</span>
                <span className="finxt-svc-mobile-group-chevron" aria-hidden="true" />
              </button>

              <div
                id={panelId}
                className="finxt-svc-mobile-group-panel"
                hidden={!isOpen}
              >
                <ul className="finxt-svc-mobile-service-list">
                  {pillarServices.map((service, serviceIndex) => (
                    <li key={service.id}>
                      <ServicesCompactCard
                        service={service}
                        index={pillarIndex * 3 + serviceIndex}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
