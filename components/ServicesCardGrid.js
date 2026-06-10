import { useState } from 'react';
import AIServiceVisual from './AIServiceVisual';

export default function ServicesCardGrid({ services, panelId }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="finxt-svc-grid">
      {services.map((service, index) => {
        const isOpen = openId === service.id;
        const panelElId = `${panelId}-${service.id}-panel`;

        return (
          <article key={service.id} className="finxt-svc-grid-card group">
            <AIServiceVisual index={index} />

            <h4 className="finxt-svc-grid-card-title">{service.title}</h4>

            {isOpen && (
              <ul id={panelElId} className="finxt-svc-grid-card-points">
                {service.points.map((point) => (
                  <li key={point.slice(0, 40)}>
                    <span className="finxt-svc-grid-card-check" aria-hidden="true">
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
              aria-controls={panelElId}
              onClick={() => setOpenId(isOpen ? null : service.id)}
              className="finxt-svc-grid-card-btn"
            >
              {isOpen ? 'Show less' : 'More info'} →
            </button>
          </article>
        );
      })}
    </div>
  );
}
