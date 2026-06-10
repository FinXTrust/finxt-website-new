import { useState } from 'react';

export default function ServicesFeaturedBlock({ service, index }) {
  const [imageError, setImageError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const reversed = index % 2 === 1;
  const panelId = `${service.id}-points`;

  return (
    <article
      id={service.id}
      className={[
        'finxt-svc-featured scroll-mt-28',
        reversed ? 'finxt-svc-featured--reverse' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="finxt-svc-featured-media">
        <div className="finxt-svc-featured-frame">
          {!imageError ? (
            <img
              src={service.image}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
              className="finxt-svc-featured-img"
            />
          ) : (
            <div className="finxt-svc-featured-fallback" />
          )}
          <div className="finxt-svc-featured-overlay" />
        </div>
      </div>

      <div className="finxt-svc-featured-body">
        <h3 className="finxt-card-title">{service.title}</h3>
        <div className="finxt-divider" />

        {isOpen && (
          <ul id={panelId} className="finxt-svc-featured-points finxt-svc-featured-points--open">
            {service.points.map((point) => (
              <li key={point.slice(0, 40)}>
                <span className="finxt-svc-featured-check" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="finxt-svc-featured-more"
        >
          {isOpen ? 'Show less' : 'More info'}
          <span className="finxt-micro-btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </article>
  );
}
