import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import LiveStudiesReferralSection from '../components/LiveStudiesReferralSection';
import { pageSeo } from '../data/seo';
import LiveStudiesReveal from '../components/LiveStudiesReveal';
import RevealItem from '../components/RevealItem';
import LiveStudiesStepsStrip from '../components/LiveStudiesStepsStrip';
import Link from 'next/link';

const studies = [
  {
    slug: 'leeds',
    country: 'United Kingdom',
    image: '/images/gb.png',
    payment: '£100 per person',
    lang: 'en',
    accent: '#C8102E',
  },
  {
    slug: 'poland',
    country: 'Poland',
    image: '/images/poland.png',
    payment: '285 Polish zloty per person',
    lang: 'pl',
    accent: '#DC143C',
  },
  {
    slug: 'spain',
    country: 'Spain',
    image: '/images/es.png',
    payment: '€100 per person',
    lang: 'es',
    accent: '#F1BF00',
  },
  {
    slug: 'usa',
    country: 'USA',
    image: '/images/us.png',
    payment: '$100 per person',
    lang: 'en',
    accent: '#3C3B6E',
  },
  {
    slug: 'mexico',
    country: 'Mexico',
    image: '/images/mx.png',
    payment: '1,200 MXN per person',
    lang: 'es',
    accent: '#006847',
  },
  {
    slug: 'india',
    country: 'India',
    image: '/images/in.png',
    payment: '₹5,000 per person',
    lang: 'en',
    accent: '#FF9933',
  },
];

export default function LiveStudies() {

  return (

    <Layout>
      <PageHead {...pageSeo.liveStudies} />
      <section className="finxt-page-hero finxt-live-studies-page-hero relative min-h-[32rem] overflow-hidden bg-[#050912] px-4 text-white md:min-h-[36rem] md:px-6 lg:min-h-0">
        <div className="finxt-page-hero-media absolute inset-0 lg:left-[42%]">
          <img
            src="/images/livestudies_banner.webp"
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="finxt-page-hero-bg finxt-live-studies-hero-bg h-full w-full object-cover"
          />
        </div>

        <div className="finxt-page-hero-scrim-mobile" aria-hidden="true" />
        <div className="finxt-page-hero-scrim-desktop" aria-hidden="true" />
        <div className="finxt-page-hero-glow-mobile" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl pb-14 pt-28 md:pb-20 md:pt-32 lg:py-32">
          <div className="finxt-live-hero-copy max-w-2xl lg:max-w-3xl">
            <div className="finxt-live-hero-item finxt-live-recruiting-badge mb-5" style={{ '--hero-delay': '0ms' }}>
              <span className="finxt-live-recruiting-dot" aria-hidden="true" />
              <span>Now recruiting participants</span>
            </div>

            <p className="finxt-live-hero-item finxt-label mb-5" style={{ '--hero-delay': '90ms' }}>
              Research opportunities
            </p>

            <h1 className="finxt-live-hero-item finxt-page-heading" style={{ '--hero-delay': '170ms' }}>
              Live Studies
            </h1>

            <div className="finxt-live-hero-item finxt-live-hero-divider finxt-divider" style={{ '--hero-delay': '260ms' }} />

            <div className="finxt-live-hero-item finxt-home-intro finxt-body" style={{ '--hero-delay': '340ms' }}>
              <p>
                Participate in global user studies and research programmes across our
                active locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="finxt-section-rule mb-10 md:mb-12" />

          <LiveStudiesReveal className="max-w-3xl">
            <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
              How it works
            </p>
            <h2 className="finxt-scroll-reveal finxt-section-heading" style={{ '--reveal-delay': '100ms' }}>
              Three Steps to Participate
            </h2>
            <div className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider" style={{ '--reveal-delay': '200ms' }} />

            <p
              className="finxt-scroll-reveal finxt-home-intro finxt-body"
              style={{ '--reveal-delay': '240ms' }}
            >
              From choosing your location to receiving your reward, the process is
              straightforward and only takes a few minutes to get started.
            </p>
          </LiveStudiesReveal>

          <LiveStudiesStepsStrip />
        </div>
      </section>

      <section
        id="live-studies-locations"
        className="finxt-section finxt-home-chapter relative scroll-mt-28 overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="finxt-section-rule mb-10 md:mb-12" />

          <LiveStudiesReveal className="max-w-3xl">
            <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
              Available locations
            </p>

            <h2 className="finxt-scroll-reveal finxt-section-heading" style={{ '--reveal-delay': '100ms' }}>
              Apply for Live Technology Research Studies
            </h2>

            <div className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider" style={{ '--reveal-delay': '200ms' }} />

            <p
              className="finxt-scroll-reveal finxt-home-intro finxt-body"
              style={{ '--reveal-delay': '240ms' }}
            >
              Studies available in the UK, Europe, the Americas, and India. Select your
              nearest location and apply in minutes.
            </p>
          </LiveStudiesReveal>

          <div className="finxt-live-locations-list mt-12 md:mt-14">
            {studies.map((study, index) => (
              <RevealItem
                key={study.slug}
                as="article"
                variant="scale"
                delay={index * 70}
                className="finxt-live-location-row group"
                style={{ '--study-accent': study.accent }}
              >
                <div className="finxt-live-location-main">
                  <div className="finxt-live-location-flag">
                    <img
                      src={study.image}
                      alt={`${study.country} flag`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="finxt-live-location-info">
                    <h3 className="finxt-card-title">{study.country}</h3>
                    <p className="finxt-card-body-sm mt-1">90-minute session · Paid research</p>
                  </div>
                </div>

                <div className="finxt-live-location-reward">
                  <span className="finxt-label">Session reward</span>
                  <span className="finxt-live-location-reward-value mt-2">{study.payment}</span>
                </div>

                <Link
                  href={`/live-studies-application?country=${study.slug}&lang=${study.lang}`}
                  className="finxt-live-location-apply finxt-btn-card"
                >
                  Apply →
                </Link>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      <LiveStudiesReferralSection />
    </Layout>
  );
}