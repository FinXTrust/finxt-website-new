import { useCallback, useEffect, useRef, useState } from 'react';
import GalleryCardVisual from './GalleryCardVisual';
import { caseStudies, getCaseStudyCardTitle } from '../data/caseStudies';

const AUTOPLAY_MS = 6000;
const DESKTOP_QUERY = '(min-width: 768px)';

export default function CaseStudiesIndex({
  selectedId = null,
  onSelect,
  activeIndex: controlledIndex,
  onActiveIndexChange,
}) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPageHidden, setIsPageHidden] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  const activeIndex = controlledIndex ?? internalIndex;
  const total = caseStudies.length;

  const setActiveIndex = useCallback(
    (index, { syncSelection = false } = {}) => {
      const next = (index + total) % total;
      onActiveIndexChange?.(next);
      if (controlledIndex === undefined) {
        setInternalIndex(next);
      }

      if (syncSelection && selectedId) {
        onSelect?.(caseStudies[next].id, { scroll: false });
      }
    },
    [controlledIndex, onActiveIndexChange, onSelect, selectedId, total]
  );

  const goToIndex = useCallback(
    (index) => {
      setActiveIndex(index, { syncSelection: Boolean(selectedId) });
    },
    [selectedId, setActiveIndex]
  );

  const updateOffset = useCallback(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    const horizontal = window.matchMedia(DESKTOP_QUERY).matches;
    setIsHorizontal(horizontal);

    if (!horizontal) {
      setOffset(0);
      setIsAtEnd(false);
      return;
    }

    const items = track.children;
    const item = items[activeIndex];
    if (!item) return;

    const visibleWidth = wrap.getBoundingClientRect().width;
    const maxOffset = Math.max(0, track.scrollWidth - visibleWidth);

    const itemLeft = item.offsetLeft;
    const itemRight = itemLeft + item.offsetWidth;
    const offsetForFullCard = Math.max(0, itemRight - visibleWidth);

    let targetOffset = Math.max(itemLeft, offsetForFullCard);
    targetOffset = Math.min(targetOffset, maxOffset);

    setOffset(targetOffset);
    setIsAtEnd(maxOffset > 0 && targetOffset >= maxOffset - 2);
  }, [activeIndex]);

  useEffect(() => {
    updateOffset();

    const track = trackRef.current;
    const wrap = wrapRef.current;
    const media = window.matchMedia(DESKTOP_QUERY);

    const onResize = () => updateOffset();
    media.addEventListener('change', onResize);
    window.addEventListener('resize', onResize);

    const observer = new ResizeObserver(onResize);
    if (track) observer.observe(track);
    if (wrap) observer.observe(wrap);

    return () => {
      media.removeEventListener('change', onResize);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  }, [updateOffset]);

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
    if (!autoplayEnabled || isHovered || isPageHidden || selectedId) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, autoplayEnabled, isHovered, isPageHidden, selectedId, setActiveIndex]);

  const touchStartX = useRef(null);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX == null || endX == null) return;

    const delta = startX - endX;
    if (Math.abs(delta) < 48) return;

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
    <div className="finxt-cs-gallery">
      <div
        ref={wrapRef}
        className={[
          'finxt-cs-gallery-track-wrap',
          isAtEnd ? 'finxt-cs-gallery-track-wrap--at-end' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        {...pauseHandlers}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ol
          ref={trackRef}
          className="finxt-cs-gallery-track"
          style={
            isHorizontal
              ? { transform: `translate3d(-${offset}px, 0, 0)` }
              : undefined
          }
        >
          {caseStudies.map((study, index) => {
            const isSelected = selectedId === study.id;
            const isActive = index === activeIndex;
            const { title, sub } = getCaseStudyCardTitle(study);

            return (
              <li
                key={study.id}
                className={[
                  'finxt-cs-gallery-item',
                  isActive ? 'finxt-cs-gallery-item--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-hidden={!isActive && !isHorizontal}
              >
                <button
                  type="button"
                  className={[
                    'finxt-cs-gallery-card',
                    isSelected ? 'finxt-cs-gallery-card--active' : '',
                    isActive ? 'finxt-cs-gallery-card--focus' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ '--cs-accent': study.accent }}
                  aria-pressed={isSelected}
                    aria-label={`View programme ${study.number}: ${title}`}
                  onClick={() => onSelect?.(study.id, { toggle: true, scroll: true })}
                >
                  <GalleryCardVisual study={study} />

                  <div className="finxt-cs-gallery-card-foot">
                    <h3 className="finxt-cs-gallery-card-title">
                      <span>{title}</span>
                      {sub ? (
                        <span className="finxt-cs-gallery-card-title-sub">{sub}</span>
                      ) : null}
                    </h3>
                    <p className="finxt-cs-gallery-card-stat">
                      <span className="finxt-cs-gallery-card-stat-value">{study.highlight.value}</span>
                      <span className="finxt-cs-gallery-card-stat-label">{study.highlight.label}</span>
                    </p>
                    <p className="finxt-cs-gallery-card-tags">{study.tags.slice(0, 2).join(' · ')}</p>
                    <span className="finxt-cs-gallery-card-cta">
                      {isSelected ? 'Viewing programme' : 'View programme'}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="finxt-cs-gallery-controls-wrap" {...pauseHandlers}>
        <p className="finxt-cs-gallery-progress" aria-live="polite">
          <span className="finxt-cs-gallery-progress-label">Programme</span>
          <span className="finxt-cs-gallery-progress-value">
            {caseStudies[activeIndex].number}
          </span>
          <span className="finxt-cs-gallery-progress-sep" aria-hidden="true">
            /
          </span>
          <span className="finxt-cs-gallery-progress-total">{String(total).padStart(2, '0')}</span>
        </p>

        <div
          className="finxt-cs-carousel-dots finxt-cs-gallery-dots"
          role="tablist"
          aria-label="Programmes"
        >
          {caseStudies.map((study, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={study.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Programme ${study.number}`}
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
      </div>
    </div>
  );
}
