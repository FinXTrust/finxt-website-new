import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { caseStudies } from '../data/caseStudies';

const CASE_STUDIES_PAGE = '/case-studies';
const AUTOPLAY_MS = 6000;

function CarouselSlide({ study, isActive, mode, isSelected, onSelect }) {
  const cta =
    mode === 'teaser' ? (
      <Link
        href={`${CASE_STUDIES_PAGE}#${study.id}`}
        className="finxt-cs-teaser-link mt-5 inline-flex text-sm font-semibold text-finxt-gold-light transition hover:text-finxt-gold"
      >
        Read full snapshot →
      </Link>
    ) : (
      <button
        type="button"
        className="finxt-cs-teaser-link mt-5 inline-flex text-sm font-semibold text-finxt-gold-light transition hover:text-finxt-gold"
        onClick={() => onSelect?.(study.id, { toggle: true, scroll: true })}
      >
        {isSelected ? 'Close snapshot' : 'View full snapshot →'}
      </button>
    );

  return (
    <article
      className="finxt-cs-carousel-slide finxt-home-card relative overflow-hidden"
      aria-hidden={!isActive}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-finxt-gold/50 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-[3px] bg-finxt-gold/80" />

      <div className="finxt-cs-carousel-slide-inner">
        <div className="finxt-cs-carousel-slide-head">
          <p className="finxt-label">Project Snapshot {study.number}</p>
          <h3 className="finxt-card-title mt-3">{study.title}</h3>
          <p className="finxt-body-muted mt-2 italic">{study.tags.join(' · ')}</p>
        </div>

        <p className="finxt-cs-carousel-slide-challenge finxt-card-body">{study.challenge}</p>

        <div className="finxt-cs-carousel-slide-aside">
          <p className="finxt-card-body border-l-2 border-finxt-gold/35 pl-4 font-medium">
            {study.outcomes[0]}
          </p>
          {cta}
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesCarousel({
  mode = 'teaser',
  selectedId = null,
  onSelect,
  activeIndex: controlledIndex,
  onActiveIndexChange,
  carouselClassName = '',
}) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPageHidden, setIsPageHidden] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const activeIndex = controlledIndex ?? internalIndex;
  const total = caseStudies.length;

  const setActiveIndex = useCallback(
    (index) => {
      const next = (index + total) % total;
      onActiveIndexChange?.(next);
      if (controlledIndex === undefined) {
        setInternalIndex(next);
      }
    },
    [controlledIndex, onActiveIndexChange, total]
  );

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setAutoplayEnabled(!motionQuery.matches);

    updateMotion();
    motionQuery.addEventListener('change', updateMotion);

    return () => motionQuery.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setIsPageHidden(document.hidden);

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  useEffect(() => {
    if (!autoplayEnabled || isHovered || isPageHidden) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, autoplayEnabled, isHovered, isPageHidden, setActiveIndex]);

  return (
    <>
      <div
        className={['finxt-cs-carousel', carouselClassName].filter(Boolean).join(' ')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setIsHovered(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsHovered(false);
          }
        }}
      >
        <button
          type="button"
          className="finxt-cs-carousel-arrow finxt-cs-carousel-arrow--prev"
          aria-label="Previous snapshot"
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="finxt-cs-carousel-viewport">
          <div
            className="finxt-cs-carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {caseStudies.map((study, index) => (
              <CarouselSlide
                key={study.id}
                study={study}
                isActive={index === activeIndex}
                isSelected={selectedId === study.id}
                mode={mode}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="finxt-cs-carousel-arrow finxt-cs-carousel-arrow--next"
          aria-label="Next snapshot"
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="finxt-cs-carousel-dots" role="tablist" aria-label="Project snapshots">
        {caseStudies.map((study, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={study.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Project snapshot ${study.number}`}
              className={[
                'finxt-cs-carousel-dot',
                isActive ? 'finxt-cs-carousel-dot--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </>
  );
}
