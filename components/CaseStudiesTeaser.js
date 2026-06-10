import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { caseStudies } from '../data/caseStudies';

const CASE_STUDIES_PAGE = '/case-studies';
const AUTOPLAY_MS = 6000;

export default function CaseStudiesTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPageHidden, setIsPageHidden] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const total = caseStudies.length;

  const goTo = useCallback((index) => {
    setActiveIndex((index + total) % total);
  }, [total]);

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
      setActiveIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [autoplayEnabled, isHovered, isPageHidden, total]);

  return (
    <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <ScrollReveal className="max-w-3xl">
          <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
            Case Studies
          </p>

          <h2
            className="finxt-scroll-reveal finxt-section-heading"
            style={{ '--reveal-delay': '100ms' }}
          >
            How we deliver under pressure
          </h2>

          <div
            className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
            style={{ '--reveal-delay': '200ms' }}
          />

          <p
            className="finxt-scroll-reveal finxt-home-intro finxt-body"
            style={{ '--reveal-delay': '300ms' }}
          >
            Anonymised examples of how FinXT delivers complex programmes, from
            multi-market research and cross-border logistics to rapid staffing and
            high-volume participant recruitment.
          </p>
        </ScrollReveal>

        <ScrollReveal className="finxt-cs-carousel-wrap mt-12 w-full lg:mt-14">
          <div className="finxt-scroll-reveal" style={{ '--reveal-delay': '120ms' }}>
            <div
              className="finxt-cs-carousel"
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
                onClick={() => goTo(activeIndex - 1)}
              >
                <span aria-hidden="true">←</span>
              </button>

              <div className="finxt-cs-carousel-viewport">
                <div
                  className="finxt-cs-carousel-track"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {caseStudies.map((study) => (
                    <article
                      key={study.id}
                      className="finxt-cs-carousel-slide finxt-home-card relative overflow-hidden"
                      aria-hidden={study.id !== caseStudies[activeIndex].id}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-finxt-gold/50 to-transparent" />
                      <div className="absolute left-0 top-0 h-full w-[3px] bg-finxt-gold/80" />

                      <div className="finxt-cs-carousel-slide-inner">
                        <div className="finxt-cs-carousel-slide-head">
                          <p className="finxt-label">Project Snapshot {study.number}</p>
                          <h3 className="finxt-card-title mt-3">{study.title}</h3>
                          <p className="finxt-body-muted mt-2 italic">{study.tags.join(' · ')}</p>
                        </div>

                        <p className="finxt-cs-carousel-slide-challenge finxt-card-body">
                          {study.challenge}
                        </p>

                        <div className="finxt-cs-carousel-slide-aside">
                          <p className="finxt-card-body border-l-2 border-finxt-gold/35 pl-4 font-medium">
                            {study.outcomes[0]}
                          </p>

                          <Link
                            href={`${CASE_STUDIES_PAGE}#${study.id}`}
                            className="finxt-cs-teaser-link mt-5 inline-flex text-sm font-semibold text-finxt-gold-light transition hover:text-finxt-gold"
                          >
                            Read full snapshot →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="finxt-cs-carousel-arrow finxt-cs-carousel-arrow--next"
                aria-label="Next snapshot"
                onClick={() => goTo(activeIndex + 1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div
              className="finxt-cs-carousel-dots"
              role="tablist"
              aria-label="Project snapshots"
            >
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
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8 flex justify-center md:mt-10">
          <Link
            href={CASE_STUDIES_PAGE}
            className="finxt-scroll-reveal finxt-btn-primary"
            style={{ '--reveal-delay': '120ms' }}
          >
            View all case studies →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
