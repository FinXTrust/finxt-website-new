import { useEffect, useState } from 'react';
import RevealItem from './RevealItem';

export default function ServicesCompactCard({ service, index = 0 }) {
  const [imageError, setImageError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tapToExpand, setTapToExpand] = useState(false);
  const panelId = `${service.id}-details`;

  useEffect(() => {
    const touchQuery = window.matchMedia('(hover: none)');

    const update = () => setTapToExpand(touchQuery.matches);

    update();
    touchQuery.addEventListener('change', update);

    return () => touchQuery.removeEventListener('change', update);
  }, []);

  const toggleOpen = () => setIsOpen((open) => !open);

  const handleCardClick = () => {
    if (tapToExpand) {
      toggleOpen();
    }
  };

  const handleCardKeyDown = (event) => {
    if (!tapToExpand) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleOpen();
    }
  };

  return (
    <RevealItem
      as="article"
      id={service.id}
      variant="scale"
      delay={index * 70}
      className={[
        'finxt-svc-page-card group scroll-mt-28',
        tapToExpand ? 'finxt-svc-page-card--touch' : '',
        isOpen ? 'finxt-svc-page-card--expanded' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      tabIndex={tapToExpand ? 0 : undefined}
      role={tapToExpand ? 'button' : undefined}
      aria-expanded={tapToExpand ? isOpen : undefined}
      aria-label={
        tapToExpand ? `${isOpen ? 'Collapse' : 'Expand'} ${service.title} details` : undefined
      }
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      onBlur={(event) => {
        if (tapToExpand && !event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <div className="finxt-svc-page-card-media" aria-hidden="true">
        {!imageError ? (
          <img
            src={service.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="finxt-svc-page-card-fallback" />
        )}
        <div className="finxt-svc-page-card-media-scrim" />
      </div>

      <div className="finxt-svc-page-card-panel">
        <h3 className="finxt-svc-page-card-title">{service.title}</h3>
        <p className="finxt-svc-page-card-summary">{service.summary}</p>

        <div id={panelId} className="finxt-svc-page-card-reveal">
          <ul className="finxt-svc-page-card-points">
            {service.points.map((point) => (
              <li key={point.slice(0, 48)}>
                <span className="finxt-svc-page-card-check" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <span
          aria-hidden={tapToExpand ? 'true' : undefined}
          className="finxt-svc-page-card-btn"
        >
          {isOpen ? 'Show less' : 'More info'}
          <span className="finxt-micro-btn-arrow" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </RevealItem>
  );
}
