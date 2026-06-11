import Link from 'next/link';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import ScrollReveal from '../components/ScrollReveal';
import ServicesListSection from '../components/ServicesListSection';
import { pageSeo } from '../data/seo';

export default function Services() {
  return (
    <Layout>
      <PageHead {...pageSeo.services} />
      <section className="finxt-page-hero relative min-h-[32rem] overflow-hidden bg-[#050912] px-4 text-white md:min-h-[36rem] md:px-6 lg:min-h-0">
        <div className="finxt-page-hero-media absolute inset-0 lg:left-[42%]">
          <img
            src="/images/services_banner.webp"
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="finxt-page-hero-bg finxt-services-hero-bg h-full w-full object-cover"
          />
        </div>

        <div className="finxt-page-hero-scrim-mobile" aria-hidden="true" />
        <div className="finxt-page-hero-scrim-desktop" aria-hidden="true" />
        <div className="finxt-page-hero-glow-mobile" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl pb-14 pt-28 md:pb-20 md:pt-32 lg:py-32">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className="finxt-label mb-5">Our services</p>

            <h1 className="finxt-page-heading">
              Integrated Delivery Across Nine Core Capabilities
            </h1>

            <div className="finxt-divider" />

            <div className="finxt-home-intro finxt-body">
              <p className="lg:hidden">
                One accountable partner for AI, programmes, logistics, and research, delivered
                globally.
              </p>
              <p className="hidden lg:block">
                From AI and digital transformation to programme management, logistics, and research
                operations: one accountable partner, delivered globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesListSection />

      <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="finxt-section-rule mb-10 md:mb-12" />

          <ScrollReveal className="finxt-svc-cta mx-auto max-w-5xl">
            <div className="finxt-svc-cta-ambient" aria-hidden="true" />
            <div className="finxt-svc-cta-orb finxt-svc-cta-orb--gold" aria-hidden="true" />
            <div className="finxt-svc-cta-orb finxt-svc-cta-orb--blue" aria-hidden="true" />

            <div className="finxt-svc-cta-content">
              <h2
                className="finxt-scroll-reveal finxt-cta-heading"
                style={{ '--reveal-delay': '0ms' }}
              >
                Ready to Discuss Your Requirements?
              </h2>
              <p
                className="finxt-scroll-reveal finxt-home-intro finxt-body mx-auto max-w-lg"
                style={{ '--reveal-delay': '120ms' }}
              >
                Our team will build a bespoke proposal tailored to your programme needs.
              </p>
              <Link
                href="/contact"
                className="finxt-scroll-reveal finxt-svc-cta-btn"
                style={{ '--reveal-delay': '240ms' }}
              >
                Request a Proposal
                <span className="finxt-micro-btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
