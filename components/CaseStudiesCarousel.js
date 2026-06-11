import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { caseStudies, getCaseStudyCardLabel, getCaseStudyCardTitle } from '../data/caseStudies';

const CASE_STUDIES_PAGE = '/case-studies';
const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD_PX = 48;

function CarouselSlide({ study, isActive, mode, isSelected, onSelect }) {
  const { title: titleMain, sub: titleSub } = getCaseStudyCardTitle(study);
  const ctaStyle = { '--cs-accent': study.accent };
  const ctaClassName = [
    'finxt-cs-carousel-cta',
    isSelected ? 'finxt-cs-carousel-cta--active' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const cta =
    mode === 'teaser' ? (
      <Link
        href={`${CASE_STUDIES_PAGE}#${study.id}`}
        className={ctaClassName}
        style={ctaStyle}
      >
        Read programme
      </Link>
    ) : (
      <button
        type="button"
        className={ctaClassName}
        style={ctaStyle}
        onClick={() => onSelect?.(study.id, { toggle: true, scroll: true })}
      >
        {isSelected ? 'Close programme' : 'View programme'}
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
          <p className="finxt-label">{getCaseStudyCardLabel(study)}</p>
          <h3 className="finxt-card-title mt-3">
            {titleMain}
            {titleSub ? (
              <>
                <br />
                <span className="text-white/90">{titleSub}</span>
              </>
            ) : null}
          </h3>
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
  const touchStartX = useRef(null);

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

  const goToIndex = useCallback(
    (index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
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

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX == null || endX == null) return;

    const delta = startX - endX;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;

    goToIndex(activeIndex + (delta > 0 ? 1 : -1));
  };

  const pauseHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocusCapture: () => setIsHovered(true),
    onBlurCapture: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setIsHovered(false);
      }
    },
  };

  return (
    <>
      <div
        className={['finxt-cs-carousel', carouselClassName].filter(Boolean).join(' ')}
        {...pauseHandlers}
      >
        <div
          className="finxt-cs-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
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
      </div>

      <div className="finxt-cs-carousel-dots" role="tablist" aria-label="Programmes">
        {caseStudies.map((study, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={study.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={getCaseStudyCardLabel(study)}
              className={[
                'finxt-cs-carousel-dot',
                isActive ? 'finxt-cs-carousel-dot--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => goToIndex(index)}
            />
          );
        })}
      </div>
    </>
  );
}
