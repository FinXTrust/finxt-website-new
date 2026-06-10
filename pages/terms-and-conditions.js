import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { pageSeo } from '../data/seo';

function Section({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="finxt-legal-heading mb-4">{title}</h2>
      <div className="finxt-legal-prose space-y-4">{children}</div>
    </div>
  );
}

export default function TermsAndConditions() {
  return (
    <Layout>
      <PageHead {...pageSeo.termsAndConditions} />
      <section className="finxt-section finxt-legal-section bg-[#050912] px-4 text-white md:px-6">
        <div className="finxt-legal-page-inner">
          <p className="finxt-label mb-5">Legal</p>

          <h1 className="finxt-page-heading">Terms &amp; Conditions</h1>

          <div className="finxt-divider" />

          <p className="finxt-legal-meta">Last updated: June 2026</p>

          <div className="mt-12 space-y-10 md:space-y-12">
            <Section id="participation-eligibility" title="1. Participation Eligibility">
              <p>
                Participation in research studies is subject to eligibility requirements determined
                by FinXT UK Ltd and its research partners. Completing an application form does not
                guarantee participation in any study.
              </p>
            </Section>

            <Section id="accuracy-of-information" title="2. Accuracy of Information">
              <p>
                Participants must provide accurate and truthful information. FinXT UK Ltd reserves
                the right to decline participation where information is inaccurate, incomplete,
                misleading, or does not match official identification documents.
              </p>
            </Section>

            <Section id="study-invitations" title="3. Study Invitations">
              <p>
                Study invitations are subject to availability and project requirements. Only
                participants who receive a confirmed booking may attend a study.
              </p>
            </Section>

            <Section id="attendance" title="4. Attendance">
              <p>
                Participants may be required to present valid identification, arrive on time, and
                follow all instructions provided by research staff. Failure to comply may result in
                cancellation of participation.
              </p>
            </Section>

            <Section id="payments" title="5. Payments">
              <p>
                Where compensation is offered, payment will only be made to participants who
                successfully complete the study requirements. Payment amounts and methods will be
                communicated before the study.
              </p>
            </Section>

            <Section id="cancellation-and-changes" title="6. Cancellation and Changes">
              <p>
                FinXT UK Ltd reserves the right to modify, postpone, or cancel any study due to
                operational, client, technical, or safety requirements.
              </p>
            </Section>

            <Section id="health-and-safety" title="7. Health & Safety">
              <p>
                Participants must comply with all health and safety requirements communicated for a
                study. Participation may be declined where study requirements cannot be safely met.
              </p>
            </Section>

            <Section id="privacy" title="8. Privacy">
              <p>
                Personal information is processed in accordance with our{' '}
                <a href="/privacy-policy" className="finxt-text-link">
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section id="contact" title="9. Contact">
              <p>
                If you have any questions regarding these Terms & Conditions, please contact:
                <br />
                <a href="mailto:info@finxt.uk" className="finxt-text-link">
                  info@finxt.uk
                </a>
              </p>
            </Section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
