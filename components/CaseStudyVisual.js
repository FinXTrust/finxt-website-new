import AnimatedCaseStudyMetric from './AnimatedCaseStudyMetric';
import { CaseStudyDiagram } from './caseStudyVisuals';

export default function CaseStudyVisual({ study, isActive, variant = 'panel' }) {
  const isEditorial = variant === 'editorial';

  return (
    <div
      className={[
        'finxt-cs-story-visual',
        isEditorial ? 'finxt-cs-story-visual--editorial' : '',
        isActive ? 'finxt-cs-story-visual--active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--cs-accent': study.accent }}
      aria-hidden="true"
    >
      <div className="finxt-cs-story-visual-bg" />
      <div className="finxt-cs-story-visual-grid" aria-hidden="true" />

      {isEditorial && <div className="finxt-cs-ed-visual-ambient" aria-hidden="true" />}

      <div className="finxt-cs-story-visual-inner">
        {!isEditorial && (
          <div className="finxt-cs-story-visual-top">
            <span className="finxt-cs-story-visual-index">Snapshot {study.number}</span>
          </div>
        )}

        <div className="finxt-cs-story-visual-art">
          <CaseStudyDiagram
            studyId={study.id}
            isActive={isActive}
            accent={study.accent}
            variant={isEditorial ? 'scene' : 'compact'}
            className={isEditorial ? 'finxt-cs-diagram--editorial' : 'finxt-cs-diagram--story'}
          />
        </div>

        {!isEditorial && (
          <div className="finxt-cs-story-visual-metric">
            <AnimatedCaseStudyMetric
              value={study.highlight.value}
              label={study.highlight.label}
              isActive={isActive}
            />
          </div>
        )}
      </div>
    </div>
  );
}
