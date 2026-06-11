import { deliveryPillars } from '../data/services';

export default function ServicesDeliveryStrip() {
  return (
    <section className="finxt-svc-delivery" aria-labelledby="svc-delivery-heading">
      <div className="finxt-svc-delivery-inner">
        <div className="finxt-svc-delivery-intro">
          <p className="finxt-label">How we deliver</p>
          <h2 id="svc-delivery-heading" className="finxt-section-heading">
            One Partner. Full Programme Discipline.
          </h2>
          <div className="finxt-divider" />
        </div>

        <div className="finxt-svc-delivery-grid">
          {deliveryPillars.map((pillar, index) => (
            <article key={pillar.title} className="finxt-svc-delivery-card">
              <span className="finxt-svc-delivery-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="finxt-svc-delivery-title">{pillar.title}</h3>
              <p className="finxt-body-muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
