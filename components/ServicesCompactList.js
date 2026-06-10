import { useState } from 'react';

export default function ServicesCompactList({ services, panelId }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="finxt-svc-compact">
      <p className="finxt-svc-compact-label">Additional capabilities</p>

      <ul className="finxt-svc-compact-list">
        {services.map((service) => {
          const isOpen = openId === service.id;
          const triggerId = `${panelId}-${service.id}-trigger`;
          const panelElId = `${panelId}-${service.id}-panel`;

          return (
            <li key={service.id} className="finxt-svc-compact-item">
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelElId}
                onClick={() => setOpenId(isOpen ? null : service.id)}
                className="finxt-svc-compact-trigger"
              >
                <span className="finxt-svc-compact-thumb">
                  <img src={service.image} alt="" loading="lazy" decoding="async" />
                </span>
                <span className="finxt-svc-compact-text">
                  <span className="finxt-svc-compact-title">{service.title}</span>
                  <span className="finxt-svc-compact-summary">{service.summary}</span>
                </span>
                <span className="finxt-svc-compact-chevron" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div
                  id={panelElId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="finxt-svc-compact-panel"
                >
                  {service.points.map((point) => (
                    <p key={point.slice(0, 40)} className="finxt-body-muted">
                      {point}
                    </p>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
