import Link from 'next/link';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { pageSeo } from '../data/seo';
import { openCookieSettings } from '../lib/cookieConsent';

function Section({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="finxt-legal-heading mb-4">{title}</h2>
      <div className="finxt-legal-prose space-y-4">
        {children}
      </div>
    </div>
  );
}

function Subheading({ children }) {
  return <h3 className="finxt-legal-subheading">{children}</h3>;
}

function DashList({ items }) {
  return (
    <ul className="finxt-legal-list mt-3 space-y-2.5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function CategoryCard({ title, status, statusTone, description, examples }) {
  const statusClass =
    statusTone === 'required' ? 'text-emerald-400' : 'text-[#C9A84C]';

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 md:p-5">
      <h3 className="finxt-card-title">{title}</h3>
      <p className={`mt-1 finxt-label ${statusClass}`}>{status}</p>
      <p className="mt-3 finxt-legal-prose">{description}</p>
      {examples?.length > 0 && (
        <DashList items={examples} />
      )}
    </div>
  );
}

export default function CookiePolicy() {
  return (
    <Layout>
      <PageHead {...pageSeo.cookiePolicy} />
      <section className="finxt-section finxt-legal-section bg-[#050912] px-4 text-white md:px-6">
        <div className="finxt-legal-page-inner">
          <p className="finxt-label mb-5">Legal</p>

          <h1 className="finxt-page-heading">Cookie Policy</h1>

          <div className="finxt-divider" />

          <p className="finxt-legal-meta">Last updated: June 2026</p>

          <div className="mt-12 space-y-10 md:space-y-12">
            <Section id="what-are-cookies" title="1. What Are Cookies">
              <p>
                Cookies are small text files placed on your device when you visit a website. They
                help the site remember your preferences, understand how it is used, and support
                certain functionality. Similar technologies, such as local storage, pixels, and
                tags, are also covered by this policy.
              </p>
              <p>
                This Cookie Policy explains how FinXT UK Ltd (&ldquo;FinXT&rdquo;, &ldquo;we&rdquo;,
                &ldquo;our&rdquo;, or &ldquo;us&rdquo;) uses cookies on{' '}
                <a href="https://finxt.uk" className="finxt-text-link">
                  finxt.uk
                </a>{' '}
                and should be read alongside our{' '}
                <Link href="/privacy-policy" className="finxt-text-link">
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>

            <Section id="how-we-use" title="2. How We Use Cookies">
              <p>We use cookies to:</p>
              <DashList
                items={[
                  'Enable core website functionality and security',
                  'Remember your cookie consent choices',
                  'Understand how visitors use our website so we can improve performance and content',
                  'Support communications and marketing activities where you have given consent',
                ]}
              />
              <p>
                Non-essential cookies and any related analytics or marketing scripts are only
                loaded after you have made a choice through our cookie consent banner or
                preferences panel. Until you accept optional categories, those scripts do not run.
              </p>
            </Section>

            <Section id="categories" title="3. Cookie Categories">
              <p>
                We group cookies into the categories below. You can manage optional categories at
                any time using our cookie consent banner or by updating your preferences.
              </p>

              <div className="space-y-4">
                <CategoryCard
                  title="Strictly Necessary Cookies"
                  status="Always on (cannot be disabled)"
                  statusTone="required"
                  description="These cookies are essential for our website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without them."
                  examples={[
                    'Cookie consent preference storage',
                    'Session and security cookies required to operate the website',
                  ]}
                />

                <CategoryCard
                  title="Analytics & Performance Cookies"
                  status="Off by default"
                  statusTone="optional"
                  description="These cookies allow us to count visits and understand how visitors interact with our website. All information collected is aggregated and anonymous. We use this data to improve how our website works."
                  examples={[
                    'Website analytics tools that measure page views, traffic sources, and on-site behaviour',
                    'Performance monitoring to identify technical issues',
                  ]}
                />

                <CategoryCard
                  title="Marketing & Targeting Cookies"
                  status="Off by default"
                  statusTone="optional"
                  description="These cookies may be set by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but work by uniquely identifying your browser."
                  examples={[
                    'Advertising and remarketing cookies from third-party platforms',
                    'Social media or campaign tracking pixels where applicable',
                  ]}
                />
              </div>
            </Section>

            <Section id="managing-preferences" title="4. Managing Your Preferences">
              <p>
                When you first visit our website, you will see a cookie consent banner. You can:
              </p>
              <DashList
                items={[
                  'Accept all cookies',
                  'Reject non-essential cookies',
                  'Manage preferences and choose which optional categories to enable',
                ]}
              />
              <p>
                You can change your choices at any time by clicking{' '}
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="finxt-text-link finxt-text-link-btn"
                >
                  Cookie settings
                </button>{' '}
                in the footer or by clearing cookies in your browser and revisiting the site.
              </p>
              <p>
                Please note that blocking some cookies may affect how the website functions or
                limit certain features.
              </p>
            </Section>

            <Section id="third-party" title="5. Third-Party Cookies">
              <p>
                Some cookies are placed by third-party services that appear on our pages, for
                example analytics providers, hosting infrastructure, or advertising partners. These
                third parties may process data according to their own privacy policies.
              </p>
              <p>
                We only enable non-essential third-party cookies where you have given consent
                through your cookie preferences.
              </p>
            </Section>

            <Section id="retention" title="6. How Long Cookies Last">
              <p>
                Cookie duration depends on purpose. Some cookies expire when you close your browser
                (session cookies). Others remain on your device for a defined period (persistent
                cookies) until they expire or you delete them.
              </p>
              <DashList
                items={[
                  'Strictly necessary cookies: typically session-based or up to 12 months',
                  'Analytics cookies: typically up to 13 months, where enabled',
                  'Marketing cookies: typically up to 13 months, where enabled',
                  'Cookie consent preferences: stored locally until you clear them or change your choices',
                ]}
              />
            </Section>

            <Section id="browser-controls" title="7. Browser Controls">
              <p>
                Most browsers allow you to refuse or delete cookies through their settings. You can
                usually find these controls in your browser&apos;s privacy or security menu. For
                more information, visit your browser provider&apos;s help pages.
              </p>
              <p>
                If you use different devices or browsers, you may need to update your preferences
                separately on each one.
              </p>
            </Section>

            <Section id="changes" title="8. Changes to This Policy">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in the
                cookies we use, legal requirements, or our services. The most recent version will
                always be available on this page, with the date of last update shown at the top.
              </p>
            </Section>

            <Section id="contact" title="9. Contact">
              <p>
                If you have questions about our use of cookies or this policy, please contact us
                using the details in our{' '}
                <Link
                  href="/privacy-policy#data-protection-contact"
                  className="finxt-text-link"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
