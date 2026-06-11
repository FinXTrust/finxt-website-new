'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import ServicesCatalogIntro from './ServicesCatalogIntro';
import ServicesMobileBrowse from './ServicesMobileBrowse';
import ServicesPillarBlock from './ServicesPillarBlock';
import { solutionPillars } from '../data/services';

const DESKTOP_QUERY = '(min-width: 1024px)';
const SCROLL_ACTIVATION_RATIO = 0.3;

function getPillarIdFromHash() {
  if (typeof window === 'undefined') return solutionPillars[0].id;

  const hash = window.location.hash.replace('#', '');
  return solutionPillars.some((pillar) => pillar.id === hash)
    ? hash
    : solutionPillars[0].id;
}

function getPillarElement(pillarId) {
  if (typeof window === 'undefined') return null;

  const root = window.matchMedia(DESKTOP_QUERY).matches
    ? document.querySelector('.finxt-svc-pillars')
    : document.querySelector('.finxt-svc-mobile-browse');

  return (
    root?.querySelector(`#${CSS.escape(pillarId)}`) ??
    document.getElementById(pillarId)
  );
}

function getActivePillarFromScroll() {
  const activationY = window.innerHeight * SCROLL_ACTIVATION_RATIO;
  let currentId = solutionPillars[0].id;

  for (const pillar of solutionPillars) {
    const element = getPillarElement(pillar.id);
    if (!element) continue;

    if (element.getBoundingClientRect().top <= activationY) {
      currentId = pillar.id;
    }
  }

  return currentId;
}

export default function ServicesListSection() {
  const [activePillarId, setActivePillarId] = useState(solutionPillars[0].id);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollLockRef = useRef(false);
  const scrollUnlockTimerRef = useRef(null);

  const lockScrollSpy = useCallback((durationMs) => {
    scrollLockRef.current = true;

    if (scrollUnlockTimerRef.current) {
      window.clearTimeout(scrollUnlockTimerRef.current);
    }

    scrollUnlockTimerRef.current = window.setTimeout(() => {
      scrollLockRef.current = false;
      scrollUnlockTimerRef.current = null;
    }, durationMs);
  }, []);

  const scrollToPillar = useCallback(
    (pillarId, { updateHash = true, behavior = 'smooth' } = {}) => {
      const element = getPillarElement(pillarId);
      if (!element) return;

      setActivePillarId(pillarId);
      lockScrollSpy(behavior === 'smooth' ? 1000 : 220);

      if (updateHash && typeof window !== 'undefined') {
        const url = `${window.location.pathname}${window.location.search}#${pillarId}`;
        window.history.replaceState(null, '', url);
      }

      element.scrollIntoView({ behavior, block: 'start' });
    },
    [lockScrollSpy]
  );

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return undefined;

    const pillarId = getPillarIdFromHash();
    setActivePillarId(pillarId);

    const timer = window.setTimeout(() => {
      scrollToPillar(pillarId, { updateHash: false, behavior: 'auto' });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [scrollToPillar]);

  useEffect(() => {
    const onHashChange = () => {
      const pillarId = getPillarIdFromHash();
      scrollToPillar(pillarId, { updateHash: false });
    };

    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, [scrollToPillar]);

  useEffect(() => {
    if (!isDesktop) return undefined;

    let ticking = false;

    const updateActiveFromScroll = () => {
      if (scrollLockRef.current) return;
      setActivePillarId(getActivePillarFromScroll());
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveFromScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollUnlockTimerRef.current) {
        window.clearTimeout(scrollUnlockTimerRef.current);
      }
    };
  }, [isDesktop]);

  return (
    <section className="finxt-section finxt-home-chapter finxt-svc-catalog relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="finxt-svc-catalog-ambient" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-8 md:mb-12 lg:mb-14" />

        <ServicesMobileBrowse />

        <div className="hidden lg:block">
          <ServicesCatalogIntro
            activePillarId={activePillarId}
            onPillarSelect={scrollToPillar}
          />

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
