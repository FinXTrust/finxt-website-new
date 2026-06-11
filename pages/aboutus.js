import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import FounderNoteSection from '../components/FounderNoteSection';
import OurStoryVisual from '../components/OurStoryVisual';
import ScrollReveal from '../components/ScrollReveal';
import RevealItem from '../components/RevealItem';
import { pageSeo } from '../data/seo';

const heroMetrics = [
  { value: '7+', label: 'Countries' },
  { value: '9', label: 'Service verticals' },
  { value: 'Multi', label: 'Programmes Delivered' },
];

const values = [
  {
    title: 'Integrity First',
    text: 'We do not take shortcuts. Every engagement, from a single research session to a 12-month programme, is delivered with the same transparency, honesty, and discretion. If something is not working, we say so. Then we fix it.',
  },
  {
    title: 'Operational Excellence',
    text: 'High standards are not aspirational at FinXT UK; they are the baseline. We invest in process, in people, and in the detail that other partners deprioritise. The quality of our delivery does not depend on the size of the contract.',
  },
  {
    title: 'Client Partnership',
    text: 'We measure every engagement by one thing: your outcome. Not our utilisation rate. Not our internal metrics. We succeed when you succeed, and we design our model accordingly, with flexible engagement structures, transparent reporting, and senior accountability at every stage.',
  },
  {
    title: 'Global Mindset',
    text: 'Every process, every team structure, and every supplier relationship at FinXT UK is built with international delivery in mind. We do not add countries as an afterthought. Global capability is built into how we operate from day one.',
  },
];

export default function About() {
  return (
    <Layout>
      <PageHead {...pageSeo.about} />
      <section className="finxt-page-hero finxt-about-page-hero relative min-h-[32rem] overflow-hidden bg-[#050912] px-4 text-white md:min-h-[36rem] md:px-6 lg:min-h-0">
        <div className="finxt-page-hero-media absolute inset-0 lg:left-[42%]">
          <img
            src="/images/about_banner.webp"
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="finxt-page-hero-bg finxt-about-hero-bg h-full w-full object-cover"
          />
        </div>

        <div className="finxt-page-hero-scrim-mobile" aria-hidden="true" />
        <div className="finxt-page-hero-scrim-desktop" aria-hidden="true" />
        <div className="finxt-page-hero-glow-mobile" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl pb-14 pt-28 md:pb-20 md:pt-32 lg:py-32">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className="finxt-label mb-5">About Us</p>

            <h1 className="finxt-page-heading">
              Built for Complexity. Trusted for Excellence.
            </h1>

            <div className="finxt-divider" />

            <div className="finxt-home-intro finxt-body">
              <p>
                FinXT UK is a global programme delivery and operational excellence
                company, UK-headquartered in Leeds. We work with financial institutions,
                technology enterprises, consumer brands, and public sector organisations
                to plan, manage, and execute complex international programmes
                reliably, compliantly, and at scale.
              </p>
              <p>
                Our model is simple but rare: nine integrated service verticals under
                one roof, one point of accountability, and a consistent standard of
                delivery, whether your programme spans one city or twenty countries.
              </p>
            </div>

            <div className="finxt-hero-metrics">
              <div className="finxt-hero-metrics-grid">
                {heroMetrics.map((stat) => (
                  <div key={stat.label} className="finxt-micro-metric finxt-hero-metric">
                    <p className="finxt-hero-metric-value">{stat.value}</p>
                    <p className="finxt-hero-metric-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="finxt-section-rule mb-10 md:mb-12" />

          <div className="finxt-story-grid">
            <ScrollReveal className="finxt-story-main max-w-3xl">
              <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
                Our story
              </p>

              <div
                className="finxt-scroll-reveal finxt-story-body finxt-body"
                style={{ '--reveal-delay': '120ms' }}
              >
                <p>
                  FinXT UK was founded on a single, clear observation: organisations running
                  complex international programmes were being let down by fragmented supplier
                  networks. They were coordinating between logistics vendors, staffing agencies,
                  payment platforms, and research operations firms, each accountable for their
                  own piece, and none of them accountable for the whole.
                </p>
                <p>
                  We were built to solve that. Starting from Leeds, FinXT UK was established to
                  bring programme management discipline, operational rigour, and global reach
                  together in one trusted partner. From our first engagement, the principle has
                  been the same: we take accountability for outcomes, not just activities.
                </p>
                <p>
                  Today, FinXT UK operates across seven-plus countries, manages participant research
                  programmes across Europe, the Americas, and Asia, and delivers services
                  across nine verticals, from ATA Carnet logistics to AI strategy consulting.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="finxt-story-visual-slot">
              <div
                className="finxt-scroll-reveal finxt-scroll-reveal--right"
                style={{ '--reveal-delay': '180ms' }}
              >
                <OurStoryVisual />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="finxt-section-rule mb-10 md:mb-12" />

          <ScrollReveal className="finxt-micro-intro max-w-3xl">
            <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
              Our values
            </p>
            <h2
              className="finxt-scroll-reveal finxt-section-heading"
              style={{ '--reveal-delay': '100ms' }}
            >
              What We Stand For
            </h2>
            <div
              className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
              style={{ '--reveal-delay': '200ms' }}
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:gap-5">
            {values.map((value, index) => (
              <RevealItem
                key={value.title}
                as="article"
                variant="scale"
                delay={100 + index * 90}
                className="finxt-micro-card finxt-home-card relative flex flex-col overflow-hidden p-5 pl-5 md:p-6 md:pl-6"
              >
                <div className="finxt-micro-card-topline absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-finxt-gold/50 to-transparent" />
                <div className="finxt-micro-card-accent absolute left-0 top-0 h-full w-[3px] bg-finxt-gold/80" />
                <h3 className="finxt-card-title pl-1">{value.title}</h3>
                <p className="finxt-card-body mt-3 pl-1">{value.text}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="finxt-section-rule mb-10 md:mb-12" />

          <ScrollReveal>
            <div className="finxt-scroll-reveal finxt-scroll-reveal--scale" style={{ '--reveal-delay': '80ms' }}>
              <FounderNoteSection />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
