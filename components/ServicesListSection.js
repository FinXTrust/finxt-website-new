'use client';

import { useEffect, useState } from 'react';
import ServicesCatalogIntro from './ServicesCatalogIntro';
import ServicesMobileBrowse from './ServicesMobileBrowse';
import ServicesPillarBlock from './ServicesPillarBlock';
import { solutionPillars } from '../data/services';

const DESKTOP_QUERY = '(min-width: 1024px)';

export default function ServicesListSection() {
  const [activePillarId, setActivePillarId] = useState(solutionPillars[0].id);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return undefined;

    const sections = solutionPillars
      .map((pillar) => document.getElementById(pillar.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActivePillarId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -52% 0px',
        threshold: [0.12, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <section className="finxt-section finxt-home-chapter finxt-svc-catalog relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="finxt-svc-catalog-ambient" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-8 md:mb-12 lg:mb-14" />

        <ServicesMobileBrowse />

        <div className="hidden lg:block">
          <ServicesCatalogIntro activePillarId={activePillarId} />

          <div
            className="finxt-svc-catalog-bridge finxt-svc-catalog-bridge--index"
            aria-hidden="true"
          >
            <span className="finxt-svc-catalog-bridge-line" />
          </div>

          <div className="finxt-svc-pillars">
            {solutionPillars.map((pillar, pillarIndex) => (
              <ServicesPillarBlock
                key={pillar.id}
                pillar={pillar}
                pillarIndex={pillarIndex}
                isActive={pillar.id === activePillarId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
