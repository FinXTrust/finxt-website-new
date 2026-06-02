import Layout from '../components/Layout';

export default function TermsAndConditions() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-20 text-white">
        <h1 className="mb-8 text-4xl font-black">
          Terms & Conditions
        </h1>
        <p className="mb-10 text-sm text-white/60">
          Last Updated: 2 June 2026
        </p>

        <div className="space-y-8 text-white/80 leading-8">

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              1. Participation Eligibility
            </h2>
            <p>
              Participation in research studies is subject to eligibility
              requirements determined by FinXT UK Ltd and its research partners.
              Completing an application form does not guarantee participation in
              any study.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              2. Accuracy of Information
            </h2>
            <p>
              Participants must provide accurate and truthful information.
              FinXT UK Ltd reserves the right to decline participation where
              information is inaccurate, incomplete, misleading, or does not
              match official identification documents.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              3. Study Invitations
            </h2>
            <p>
              Study invitations are subject to availability and project
              requirements. Only participants who receive a confirmed booking
              may attend a study.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              4. Attendance
            </h2>
            <p>
              Participants may be required to present valid identification,
              arrive on time, and follow all instructions provided by research
              staff. Failure to comply may result in cancellation of
              participation.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              5. Payments
            </h2>
            <p>
              Where compensation is offered, payment will only be made to
              participants who successfully complete the study requirements.
              Payment amounts and methods will be communicated before the study.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              6. Cancellation and Changes
            </h2>
            <p>
              FinXT UK Ltd reserves the right to modify, postpone, or cancel any
              study due to operational, client, technical, or safety
              requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              7. Health & Safety
            </h2>
            <p>
              Participants must comply with all health and safety requirements
              communicated for a study. Participation may be declined where
              study requirements cannot be safely met.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              8. Privacy
            </h2>
            <p>
             Personal information is processed in accordance with our{' '}
              <a
                href="/privacy-policy"
                className="text-[#C9A84C] hover:underline"
              >
                Privacy Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#C9A84C]">
              9. Contact
            </h2>
            <p>
             If you have any questions regarding these Terms & Conditions, please contact:
              <br />
              <a
                href="mailto:info@finxt.uk"
                className="text-[#C9A84C] hover:underline"
              >
                info@finxt.uk
              </a>
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
}