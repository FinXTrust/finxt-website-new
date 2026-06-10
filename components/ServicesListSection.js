import ScrollReveal from './ScrollReveal';
import ServicesCompactCard from './ServicesCompactCard';
import { services, servicesIntro } from '../data/services';

export default function ServicesListSection() {
  return (
    <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <ScrollReveal className="finxt-micro-intro max-w-3xl">
          <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
            Service portfolio
          </p>
          <h2
            className="finxt-scroll-reveal finxt-section-heading"
            style={{ '--reveal-delay': '100ms' }}
          >
            Our Services
          </h2>
          <div
            className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
            style={{ '--reveal-delay': '200ms' }}
          />
          <p
            className="finxt-scroll-reveal finxt-home-intro finxt-body"
            style={{ '--reveal-delay': '300ms' }}
          >
            {servicesIntro}
          </p>
        </ScrollReveal>

        <div className="finxt-svc-page-grid mt-12 md:mt-14">
          {services.map((service, index) => (
            <ServicesCompactCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
