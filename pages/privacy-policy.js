import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-20 text-white">
        <h1 className="mb-8 text-4xl font-black">
          Privacy Policy
        </h1>

        <p className="mb-10 text-sm text-white/60">
          Last Updated: 2 June 2026
        </p>

        <div className="space-y-8 text-white/80 leading-8">
          <div>
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3">
              1. Who We Are
            </h2>
            <p> FinXT UK Ltd ("FinXT", "we", "our", or "us") provides research study recruitment, participant management, programme management, and related services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3"> 2. Information We Collect
            </h2>
            <p>We may collect:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Date of birth or age range</li>
              <li>Gender</li>
              <li>Ethnicity information (where relevant to research requirements)</li>
              <li>Study eligibility responses</li>
              <li>Referral information</li>
              <li>Communication preferences</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3">
              3. How We Use Your Information
            </h2> 
            <p>
              We use your information to:
            </p> 
            <ul className="list-disc pl-6 mt-3 space-y-2"> 
              <li>Assess eligibility for research studies</li> 
              <li>Contact you regarding participation opportunities</li>
              <li>Manage study bookings and attendance</li> 
              <li>Process participant payments where applicable</li> 
              <li>Improve our recruitment and research services</li> 
              <li>Comply with legal and regulatory obligations</li> 
            </ul> 
          </div> 
          <div> 
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3"> 
              4. Legal Basis for Processing 
            </h2> 
            <p>
              We process personal data based on:
            </p> 
            <ul className="list-disc pl-6 mt-3 space-y-2"> 
              <li>Your consent</li> <li>Legitimate business interests</li> 
              <li>Compliance with legal obligations</li> 
            </ul> 
          </div> 
          <div> 
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3"> 
              5. Sharing of Information 
            </h2> 
            <p>
              We may share your information with:
            </p> 
            <ul className="list-disc pl-6 mt-3 space-y-2"> 
              <li>Research clients sponsoring a study</li> 
              <li>Approved research partners</li> 
              <li>Service providers assisting with study administration</li> 
            </ul> 
            <p className="mt-4"> 
              We do not sell personal information. 
            </p> 
          </div> 
          <div> 
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3"> 
              6. Data Retention 
            </h2>
            <p> 
              We retain personal information only for as long as necessary for recruitment, research administration, legal compliance, and operational purposes. 
            </p> 
          </div> 
          <div> 
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3"> 
              7. Your Rights 
            </h2> 
            <p>
              You may:
            </p> 
            <ul className="list-disc pl-6 mt-3 space-y-2"> 
              <li>Request access to your data</li> 
              <li>Request correction of inaccurate data</li> 
              <li>Request deletion of your data</li> 
              <li>Withdraw consent</li> 
              <li>Request restriction of processing</li> 
            </ul> 
            <p className="mt-4"> 
              Requests can be sent to{' '} 
              <a href="mailto:info@finxt.uk" className="text-[#C9A84C] hover:underline" > 
                info@finxt.uk 
              </a> 
              </p> 
          </div> 
          <div> 
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3"> 
              8. Security 
            </h2> 
            <p> 
              We implement reasonable technical and organisational measures to protect personal information against unauthorised access, loss, or misuse. 
            </p> 
          </div> 
          <div> 
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-3"> 
              9. Contact 
            </h2>
            <p> 
              If you have questions regarding this Privacy Policy, please contact: 
            </p> 
            <p className="mt-4"> 
              <strong>FinXT UK Ltd</strong> 
              <br /> Email:{' '} 
              <a href="mailto:info@finxt.uk" className="text-[#C9A84C] hover:underline" > 
                info@finxt.uk 
              </a> 
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}