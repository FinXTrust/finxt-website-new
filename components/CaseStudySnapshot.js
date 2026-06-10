import { useScrollReveal } from '../lib/useScrollReveal';
import CaseStudyVisual from './CaseStudyVisual';

export default function CaseStudySnapshot({ study, index = 0 }) {
  const isFlip = index % 2 === 1;

  const { ref: headRef, isVisible: isHeadVisible } = useScrollReveal({
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.12,
  });

  const { ref: stageRef, isVisible: isStageVisible } = useScrollReveal({
    rootMargin: '0px 0px -5% 0px',
    threshold: 0.06,
  });

  const { ref: figureRef, isVisible: isFigureVisible } = useScrollReveal({
    rootMargin: '0px 0px -6% 0px',
    threshold: 0.18,
  });

  return (
    <article
      id={study.id}
      className={[
        'finxt-cs-ed finxt-cs-ed--interactive scroll-mt-28',
        isFlip ? 'finxt-cs-ed--flip' : '',
        isStageVisible ? 'finxt-cs-ed--stage-visible' : '',
        isFigureVisible ? 'finxt-cs-ed--figure-active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--cs-accent': study.accent }}
    >
      <header
        ref={headRef}
        className={[
          'finxt-cs-ed-head finxt-scroll-reveal-group',
          isHeadVisible ? 'finxt-scroll-reveal-group--visible' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div
          className="finxt-cs-ed-head-copy finxt-scroll-reveal"
          style={{ '--reveal-delay': '60ms' }}
        >
          <p className="finxt-label">Project Snapshot {study.number}</p>
          <h2 className="finxt-cs-ed-title">{study.title}</h2>
          <p className="finxt-cs-ed-tags">{study.tags.join(' · ')}</p>
        </div>
      </header>

      <div
        ref={stageRef}
        className={[
          'finxt-cs-ed-stage',
          isStageVisible ? 'finxt-cs-story--visible' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <figure
          ref={figureRef}
          className="finxt-cs-ed-figure finxt-scroll-reveal"
          style={{ '--reveal-delay': '180ms' }}
          aria-hidden="true"
        >
          <CaseStudyVisual study={study} isActive={isFigureVisible} variant="editorial" />
        </figure>

        <div className="finxt-cs-ed-narrative">
          <section
            className="finxt-cs-ed-block finxt-cs-ed-block--challenge finxt-scroll-reveal"
            style={{ '--reveal-delay': '240ms' }}
          >
            <span className="finxt-cs-ed-kicker">The challenge</span>
            <p className="finxt-cs-ed-lead">{study.challenge}</p>
          </section>

          <section
            className="finxt-cs-ed-block finxt-cs-ed-block--solution finxt-scroll-reveal"
            style={{ '--reveal-delay': '320ms' }}
          >
            <span className="finxt-cs-ed-kicker">What we did</span>
            <p className="finxt-cs-ed-prose">{study.solution}</p>
          </section>

          <section
            className="finxt-cs-ed-outcomes finxt-scroll-reveal"
            style={{ '--reveal-delay': '400ms' }}
          >
            <span className="finxt-cs-ed-kicker">Outcomes</span>
            <ul className="finxt-cs-ed-outcomes-list">
              {study.outcomes.map((outcome, outcomeIndex) => (
                <li
                  key={outcome}
                  className="finxt-cs-ed-outcome finxt-scroll-reveal"
                  style={{ '--reveal-delay': `${440 + outcomeIndex * 60}ms` }}
                >
                  <span className="finxt-cs-ed-outcome-mark" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
