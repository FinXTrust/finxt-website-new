import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import CaseStudiesCarousel from './CaseStudiesCarousel';

const CASE_STUDIES_PAGE = '/case-studies';

export default function CaseStudiesTeaser() {
  return (
    <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <ScrollReveal className="max-w-3xl">
          <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
            Case studies
          </p>

          <h2
            className="finxt-scroll-reveal finxt-section-heading"
            style={{ '--reveal-delay': '100ms' }}
          >
            How We Deliver Under Pressure
          </h2>

          <div
            className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
            style={{ '--reveal-delay': '200ms' }}
          />

          <p
            className="finxt-scroll-reveal finxt-home-intro finxt-body"
            style={{ '--reveal-delay': '300ms' }}
          >
            Anonymised examples of how FinXT UK delivers complex programmes, from
            multi-market research and cross-border logistics to rapid staffing and
            high-volume participant recruitment.
          </p>
        </ScrollReveal>

        <ScrollReveal className="finxt-cs-carousel-wrap mt-12 w-full lg:mt-14">
          <div className="finxt-scroll-reveal" style={{ '--reveal-delay': '120ms' }}>
            <CaseStudiesCarousel mode="teaser" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8 flex justify-center md:mt-10">
          <Link
            href={CASE_STUDIES_PAGE}
            className="finxt-scroll-reveal finxt-btn-primary"
            style={{ '--reveal-delay': '120ms' }}
          >
            View all case studies
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
