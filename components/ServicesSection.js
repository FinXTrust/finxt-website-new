import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import RevealItem from './RevealItem';
import { homepageFeaturedServices } from '../data/services';

const SERVICES_PAGE = '/services';

function mosaicTileBorders(index, total) {
  const col = index % 3;
  const row = Math.floor(index / 3);

  return [
    index < total - 1 ? 'max-md:border-b max-md:border-white/10' : '',
    row === 0 ? 'md:border-b md:border-white/10' : '',
    col < 2 ? 'md:border-r md:border-white/10' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

function ServiceTile({ service, index }) {
  return (
    <div
      className={`group relative aspect-[16/10] overflow-hidden bg-[#0a0f1e] md:aspect-square ${mosaicTileBorders(index, homepageFeaturedServices.length)}`}
    >
      <img
        src={service.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050912]/85 via-[#050912]/20 to-transparent transition group-hover:from-[#050912]/75" />
      <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold leading-snug text-white md:p-5 md:text-[0.9375rem]">
        <span className="mr-2 text-finxt-gold" aria-hidden="true">
          →
        </span>
        {service.title}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 md:px-6 md:pb-16">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <ScrollReveal className="max-w-3xl">
          <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
            What We Deliver
          </p>

          <div
            className="finxt-scroll-reveal finxt-home-intro finxt-body"
            style={{ '--reveal-delay': '120ms' }}
          >
            <p>
              Every organisation we work with faces its own version of the same
              challenge: too many moving parts, too many vendors, and not enough
              certainty. FinXT replaces that fragmented model with one integrated
              delivery partner, accountable for the whole, not just the parts we
              find convenient.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 md:mt-14">
          <ScrollReveal className="max-w-3xl">
            <h2
              className="finxt-scroll-reveal finxt-section-heading"
              style={{ '--reveal-delay': '0ms' }}
            >
              Our Service Verticals
            </h2>

            <div
              className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
              style={{ '--reveal-delay': '100ms' }}
            />

            <p
              className="finxt-scroll-reveal finxt-home-intro finxt-body mt-8"
              style={{ '--reveal-delay': '200ms' }}
            >
              Highlights from our nine integrated service verticals, each available
              standalone or as a fully managed end-to-end programme, from strategy
              and human-centred design through to technical delivery and support.
            </p>
          </ScrollReveal>

          <div className="finxt-service-mosaic mt-8 md:mx-auto md:mt-10 md:max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {homepageFeaturedServices.map((service, index) => (
                <RevealItem key={service.id} variant="scale" delay={160 + index * 80}>
                  <ServiceTile service={service} index={index} />
                </RevealItem>
              ))}
            </div>
          </div>

          <ScrollReveal className="mt-8 flex justify-center md:mt-10">
            <Link
              href={SERVICES_PAGE}
              className="finxt-scroll-reveal finxt-btn-primary"
              style={{ '--reveal-delay': '120ms' }}
            >
              View all services →
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
