import { useEffect, useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import { CaseStudyDiagram } from './caseStudyVisuals';
import { usePrefersReducedMotion } from '../lib/useScrollReveal';

const orbitPositions = [
  { top: '5%', left: '50%', transform: 'translateX(-50%)' },
  { top: '50%', right: '1%', transform: 'translateY(-50%)' },
  { bottom: '5%', left: '50%', transform: 'translateX(-50%)' },
  { top: '50%', left: '1%', transform: 'translateY(-50%)' },
];

const phases = ['Challenge', 'Deliver', 'Outcomes'];

export default function CaseStudiesIntroVisual() {
  const reducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = caseStudies[activeIndex] ?? caseStudies[0];

  useEffect(() => {
    if (reducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % caseStudies.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <aside className="finxt-cs-intro-visual" aria-hidden="true">
      <div className="finxt-cs-intro-orbit-wrap">
        <div className="finxt-cs-intro-orbit">
          <svg className="finxt-cs-intro-orbit-ring" viewBox="0 0 320 320" role="presentation">
            <circle
              cx="160"
              cy="160"
              r="128"
              fill="none"
              stroke="rgba(201, 168, 76, 0.2)"
              strokeWidth="1"
              strokeDasharray="4 10"
            />
            <circle
              cx="160"
              cy="160"
              r="108"
              fill="none"
              stroke="rgba(91, 141, 239, 0.12)"
              strokeWidth="1"
            />
          </svg>

          <div
            key={activeStudy.id}
            className="finxt-cs-intro-orbit-core"
            style={{ '--cs-accent': activeStudy.accent }}
          >
            <div className="finxt-cs-intro-orbit-core-panel">
              <CaseStudyDiagram studyId={activeStudy.id} className="finxt-cs-diagram--orbit-core" />
            </div>
            <div className="finxt-cs-intro-orbit-core-badge">
              <span className="finxt-cs-intro-orbit-core-num">{activeStudy.number}</span>
              <span className="finxt-cs-intro-orbit-core-label">Snapshot</span>
            </div>
            <div className="finxt-cs-intro-orbit-core-glow" />
          </div>

          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={[
                'finxt-cs-intro-orbit-node',
                index === activeIndex ? 'finxt-cs-intro-orbit-node--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{
                '--cs-accent': study.accent,
                ...orbitPositions[index],
              }}
            >
              <div className="finxt-cs-intro-orbit-node-panel">
                <CaseStudyDiagram studyId={study.id} className="finxt-cs-diagram--orbit-node" />
              </div>
              <span className="finxt-cs-intro-orbit-node-num">{study.number}</span>
            </div>
          ))}
        </div>

        <div className="finxt-cs-intro-phases">
          {phases.map((phase, index) => (
            <span key={phase} className="finxt-cs-intro-phase">
              {phase}
              {index < phases.length - 1 && (
                <span className="finxt-cs-intro-phase-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
