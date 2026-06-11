import Link from 'next/link';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { pageSeo } from '../data/seo';

const ICO_REGISTRATION_NUMBER = 'Pending registration';
const COMPANIES_HOUSE_NUMBER = 'Pending confirmation';
const DPO_NAME = 'Anusha Addu';
const DPO_EMAIL = 'info@finxt.uk';
const REGISTERED_OFFICE = '118 North Street, Leeds, LS2 7PN, United Kingdom';

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

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageHead {...pageSeo.privacyPolicy} />
      <section className="finxt-section finxt-legal-section bg-[#050912] px-4 text-white md:px-6">
        <div className="finxt-legal-page-inner">
          <p className="finxt-label mb-5">Legal</p>

          <h1 className="finxt-page-heading">Privacy Policy</h1>

          <div className="finxt-divider" />

          <p className="finxt-legal-meta">Last updated: June 2026</p>

          <div className="mt-12 space-y-10 md:space-y-12">
            <Section id="who-we-are" title="1. Who We Are">
              <p>
                FinXT UK Ltd (&ldquo;FinXT&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                &ldquo;us&rdquo;) is a company registered in England and Wales (Company number:{' '}
                {COMPANIES_HOUSE_NUMBER}). Our registered office is at{' '}
                {REGISTERED_OFFICE}. We provide research study recruitment, participant
                management, programme management, logistics, staffing, payment solutions, and
                related services to clients across the United Kingdom, Europe, and internationally.
              </p>
              <p>
                FinXT UK Ltd is registered with the Information Commissioner&apos;s Office (ICO)
                as a data controller.
              </p>
              <p>
                ICO Registration Number: {ICO_REGISTRATION_NUMBER}
              </p>
            </Section>

            <Section id="data-protection-contact" title="2. Our Data Protection Contact">
              <p>
                If you have any questions, concerns, or requests regarding your personal data,
                please contact our designated data protection contact:
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <strong className="text-white/90">Name:</strong> {DPO_NAME}
                </li>
                <li>
                  <strong className="text-white/90">Email:</strong>{' '}
                  <a href={`mailto:${DPO_EMAIL}`} className="finxt-text-link">
                    {DPO_EMAIL}
                  </a>
                </li>
                <li>
                  <strong className="text-white/90">Postal address:</strong> FinXT UK Ltd,{' '}
                  {REGISTERED_OFFICE}
                </li>
              </ul>
            </Section>

            <Section id="information-we-collect" title="3. Information We Collect">
              <p>
                Depending on your relationship with FinXT (as a research participant, business
                contact, or website visitor), we may collect and process the following
                categories of personal data:
              </p>

              <Subheading>Research participants</Subheading>
              <p>
                When you apply for a live study through our website, we collect the information
                you provide in the application form, which may include:
              </p>
              <DashList
                items={[
                  'Full name, email address, and telephone number',
                  'Preferred contact method (for example call, email, WhatsApp, or SMS)',
                  'Country and language preference for the study location you are applying to',
                  'Gender',
                  'Ethnicity and, where applicable, a free-text ethnicity description, collected only where required by the specific study criteria set by our research client, and only with your explicit consent',
                  'Skin tone, collected only where required for study eligibility screening',
                  'Birth year and age range',
                  'Study eligibility screening responses (including employment details, participation history, and other study-specific questions such as whether you wear glasses or use makeup)',
                  'Referral code, if you were referred by an existing participant',
                  'Whether you would like to hear about future research studies (optional opt-in)',
                  'Session attendance and booking records',
                  'Payment details for reward disbursement',
                ]}
              />
              <p>
                Research studies are open to applicants aged 16 and over. We do not knowingly
                collect personal data from anyone under 16.
              </p>

              <Subheading>Business contacts and website enquiries</Subheading>
              <DashList
                items={[
                  'Name, email address, and telephone number',
                  'Message content submitted via our contact form',
                ]}
              />

              <Subheading>Website visitors</Subheading>
              <DashList
                items={[
                  <>
                    Cookie data and analytics information (see{' '}
                    <a href="#cookies" className="finxt-text-link">
                      Section 11 — Cookies
                    </a>
                    )
                  </>,
                  'IP address and browser/device data (collected automatically by our hosting and analytics services)',
                ]}
              />
            </Section>

            <Section id="how-we-use" title="4. How We Use Your Information">
              <p>
                We use personal data only for the purposes for which it was collected. These
                include:
              </p>
              <DashList
                items={[
                  'Assessing eligibility for research studies and contacting you regarding participation opportunities',
                  'Managing study bookings, session logistics, and attendance records',
                  'Processing participant reward payments in the applicable currency',
                  'Managing our referral programme, including validating referral codes and processing referral bonuses where applicable',
                  'Sending you information about future research studies, where you have opted in',
                  'Responding to business enquiries and managing client relationships',
                  'Fulfilling our contractual obligations to research clients (in anonymised or aggregated form only, unless you have consented otherwise)',
                  'Improving our participant recruitment and programme delivery services',
                  'Complying with legal, regulatory, and contractual obligations',
                ]}
              />
              <p>
                Eligibility for research studies is assessed by our team based on the information
                you provide. We do not make decisions based solely on automated processing that
                produces legal or similarly significant effects.
              </p>
            </Section>

            <Section id="legal-basis" title="5. Legal Basis for Processing">
              <p>
                We process personal data under the following legal bases as defined by the UK
                General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018:
              </p>
              <DashList
                items={[
                  <>
                    <strong className="text-white/90">Consent</strong> — where you have given
                    clear, freely given consent, particularly for the collection of special
                    category data (including ethnicity information) and for direct marketing
                    communications
                  </>,
                  <>
                    <strong className="text-white/90">Contract</strong> — where processing is
                    necessary to fulfil a contract with you, or to take steps at your request
                    prior to entering into a contract
                  </>,
                  <>
                    <strong className="text-white/90">Legal obligation</strong> — where we are
                    required to process your data to comply with a legal or regulatory
                    requirement
                  </>,
                  <>
                    <strong className="text-white/90">Legitimate interests</strong> — where
                    processing is necessary for our legitimate business interests, provided
                    those interests are not overridden by your rights and freedoms
                  </>,
                ]}
              />
              <div className="mt-4 rounded-lg border border-[#C9A84C]/20 bg-white/[0.04] px-4 py-4 text-sm leading-relaxed">
                <strong className="text-white/90">Note on special category data:</strong> Where
                we collect ethnicity information (a special category under UK GDPR), we do so
                only with your explicit consent and only where required by the specific research
                study criteria. You may withdraw this consent at any time without affecting your
                eligibility for other studies.
              </div>
            </Section>

            <Section id="sharing" title="6. Sharing Your Information">
              <p>We do not sell personal data. We may share your information in the following limited circumstances:</p>
              <DashList
                items={[
                  <>
                    <strong className="text-white/90">Research clients sponsoring a study</strong>{' '}
                    — participant session data may be shared in anonymised or aggregated form, or
                    in identified form only where you have provided explicit consent
                  </>,
                  <>
                    <strong className="text-white/90">Approved research partners and sub-contractors</strong>{' '}
                    assisting with study administration, on a confidentiality-bound basis
                  </>,
                  <>
                    <strong className="text-white/90">Payment service providers</strong> processing
                    reward disbursements and referral bonuses
                  </>,
                  <>
                    <strong className="text-white/90">Referral programme administration</strong> —
                    to validate referral codes and link referred participants with the referring
                    participant for bonus processing
                  </>,
                  <>
                    <strong className="text-white/90">Cloud infrastructure and IT service providers</strong>{' '}
                    that support our operations (all governed by data processing agreements)
                  </>,
                  <>
                    <strong className="text-white/90">Regulatory authorities or law enforcement</strong>{' '}
                    where required by law
                  </>,
                ]}
              />
              <p>
                All third parties who process data on our behalf are subject to appropriate
                contractual safeguards, including Data Processing Agreements (DPAs) where required
                under UK GDPR.
              </p>

              <Subheading>Service providers we use</Subheading>
              <p>
                The following providers process personal data on our behalf to operate this
                website and manage research applications:
              </p>
              <DashList
                items={[
                  <>
                    <strong className="text-white/90">Netlify</strong> — website hosting and
                    contact form submission processing
                  </>,
                  <>
                    <strong className="text-white/90">Google (Google Sheets and Google Apps Script)</strong>{' '}
                    — storage and processing of live study application submissions
                  </>,
                  <>
                    <strong className="text-white/90">Analytics and marketing providers</strong> —
                    only where you have enabled the relevant cookie categories (see{' '}
                    <a href="#cookies" className="finxt-text-link">
                      Section 11 — Cookies
                    </a>
                    )
                  </>,
                ]}
              />
              <p>
                Where these providers process data outside the United Kingdom, we rely on the
                safeguards described in{' '}
                <a href="#international-transfers" className="finxt-text-link">
                  Section 7 — International Transfers
                </a>
                .
              </p>
            </Section>

            <Section id="international-transfers" title="7. International Transfers">
              <p>
                FinXT operates internationally. Where we transfer personal data outside the United
                Kingdom, we ensure that adequate safeguards are in place, including reliance on the
                UK&apos;s adequacy regulations, Standard Contractual Clauses (SCCs), or the UK
                International Data Transfer Agreement (IDTA), as appropriate.
              </p>
            </Section>

            <Section id="retention" title="8. How Long We Keep Your Data">
              <p>
                We retain personal data only for as long as necessary for the purposes for which it
                was collected. Our standard retention periods are:
              </p>
              <DashList
                items={[
                  <>
                    <strong className="text-white/90">Research participant records:</strong> up to
                    24 months following last participation, unless you request earlier deletion
                  </>,
                  <>
                    <strong className="text-white/90">Payment records:</strong> 7 years, to comply
                    with HMRC financial record-keeping requirements
                  </>,
                  <>
                    <strong className="text-white/90">Business contact and enquiry records:</strong>{' '}
                    up to 3 years following last contact, or the duration of the business
                    relationship
                  </>,
                  <>
                    <strong className="text-white/90">Website analytics data:</strong> as set out in
                    our{' '}
                    <Link href="/cookie-policy" className="finxt-text-link">
                      Cookie Policy
                    </Link>
                  </>,
                ]}
              />
              <p>
                Upon expiry of the relevant retention period, data is securely deleted or anonymised
                in accordance with our data disposal procedures.
              </p>
            </Section>

            <Section id="your-rights" title="9. Your Rights">
              <p>
                Under UK GDPR, you have the following rights in relation to your personal data:
              </p>
              <DashList
                items={[
                  <>
                    <strong className="text-white/90">Right of access</strong> — to receive a copy of
                    the personal data we hold about you
                  </>,
                  <>
                    <strong className="text-white/90">Right to rectification</strong> — to request
                    correction of inaccurate or incomplete data
                  </>,
                  <>
                    <strong className="text-white/90">Right to erasure</strong> — to request deletion
                    of your personal data in certain circumstances
                  </>,
                  <>
                    <strong className="text-white/90">Right to restrict processing</strong> — to
                    request that we limit how we use your data
                  </>,
                  <>
                    <strong className="text-white/90">Right to data portability</strong> — to receive
                    your data in a structured, commonly used format
                  </>,
                  <>
                    <strong className="text-white/90">Right to object</strong> — to object to
                    processing based on legitimate interests or for direct marketing
                  </>,
                  <>
                    <strong className="text-white/90">Right to withdraw consent</strong> — at any
                    time where processing is based on consent, without affecting the lawfulness of
                    prior processing
                  </>,
                ]}
              />
              <p>
                To exercise any of these rights, please contact us at the details provided in{' '}
                <a href="#data-protection-contact" className="finxt-text-link">
                  Section 2
                </a>
                . We will respond within one calendar month.
              </p>
            </Section>

            <Section id="right-to-complain" title="10. Right to Complain">
              <p>
                If you are not satisfied with how we handle your personal data, you have the right
                to lodge a complaint with the Information Commissioner&apos;s Office (ICO), the UK
                supervisory authority for data protection matters.
              </p>
              <p className="font-semibold text-white/90">ICO contact details:</p>
              <DashList
                items={[
                  <>
                    Website:{' '}
                    <a
                      href="https://www.ico.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="finxt-text-link"
                    >
                      www.ico.org.uk
                    </a>
                  </>,
                  'Helpline: 0303 123 1113',
                  "Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF",
                ]}
              />
              <p>
                We would always appreciate the opportunity to address your concerns before you
                contact the ICO, and encourage you to contact us in the first instance.
              </p>
            </Section>

            <Section id="cookies" title="11. Cookies">
              <p>
                Our website uses cookies and similar tracking technologies to improve your browsing
                experience, understand how visitors interact with our site, and support our
                marketing activities. For full details of the cookies we use and how to manage your
                preferences, please refer to our{' '}
                <Link href="/cookie-policy" className="finxt-text-link">
                  Cookie Policy
                </Link>{' '}
                or use the cookie consent banner when you first visit our website.
              </p>
            </Section>

            <Section id="security" title="12. Security">
              <p>
                We implement appropriate technical and organisational measures to protect personal
                data against unauthorised access, accidental loss, destruction, or misuse. These
                measures are reviewed and updated regularly. However, no electronic transmission or
                storage system is entirely secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="changes" title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, legal requirements, or the services we provide. The most recent version
                will always be available on our website, with the date of last update shown at the
                top. Where changes are material, we will notify affected individuals by email or by
                a prominent notice on our website.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
