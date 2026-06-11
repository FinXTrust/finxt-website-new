import Link from 'next/link';
import LiveStudiesReveal from './LiveStudiesReveal';

const referralSteps = [
  {
    title: 'Complete your session',
    text: 'Take part and receive your session payment as usual.',
  },
  {
    title: 'Share your code',
    text: 'We send you a personal referral code after your session.',
  },
  {
    title: 'Earn the bonus',
    text: 'Receive your bonus when your friend completes their study.',
  },
];

export default function LiveStudiesReferralSection() {
  return (
    <section className="finxt-section finxt-home-chapter finxt-live-referral-section relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
      <div className="finxt-live-referral-band" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="finxt-section-rule mb-10 md:mb-12" />

        <LiveStudiesReveal className="finxt-live-referral-layout">
          <div className="finxt-live-referral-intro">
            <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
              Earn more
            </p>

            <h2 className="finxt-scroll-reveal finxt-section-heading" style={{ '--reveal-delay': '100ms' }}>
              Refer a Friend. Get Rewarded.
            </h2>

            <div
              className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
              style={{ '--reveal-delay': '200ms' }}
            />

            <p
              className="finxt-scroll-reveal finxt-home-intro finxt-body"
              style={{ '--reveal-delay': '300ms' }}
            >
              Already taken part, or planning to? Refer eligible friends and you may
              earn a bonus on top of your normal session payment.
            </p>

            <div className="finxt-live-referral-flow mt-10 md:mt-12" aria-label="How referrals work">
              {referralSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="finxt-live-referral-flow-item finxt-scroll-reveal finxt-scroll-reveal--scale"
                  style={{ '--reveal-delay': `${300 + index * 90}ms` }}
                >
                  <span className="finxt-live-referral-flow-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="finxt-card-title">{step.title}</p>
                    <p className="finxt-card-body-sm mt-1">{step.text}</p>
                  </div>
                  {index < referralSteps.length - 1 && (
                    <span className="finxt-live-referral-flow-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p
              className="finxt-scroll-reveal finxt-body-muted mt-6"
              style={{ '--reveal-delay': '580ms' }}
            >
              Friends enter your code on the application form. Bonuses are paid after their
              session is completed and verified.
            </p>
          </div>

          <aside
            className="finxt-live-referral-aside finxt-scroll-reveal finxt-scroll-reveal--right"
            style={{ '--reveal-delay': '200ms' }}
          >
            <p className="finxt-label mb-2">Referral bonus</p>
            <p className="finxt-live-referral-stat finxt-live-referral-stat--message mt-2">
              Contact us to find out more
            </p>
            <p className="finxt-live-referral-stat-sub">
              Reward amounts vary by project and location.
            </p>

            <Link
              href="/contact"
              className="finxt-scroll-reveal finxt-btn-primary finxt-live-referral-link"
              style={{ '--reveal-delay': '360ms' }}
            >
              Contact us →
            </Link>

            <Link
              href="#live-studies-locations"
              className="finxt-scroll-reveal finxt-live-referral-link-secondary"
              style={{ '--reveal-delay': '420ms' }}
            >
              View studies &amp; apply →
            </Link>
          </aside>
        </LiveStudiesReveal>
      </div>
    </section>
  );
}
