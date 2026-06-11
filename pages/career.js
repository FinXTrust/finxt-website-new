import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { pageSeo } from '../data/seo';

export default function CareersPage() {
  return (
    <Layout>
      <PageHead {...pageSeo.careers} />
      <section className="finxt-page-hero relative overflow-hidden bg-[#050912] px-4 text-white md:px-6">
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,#050912,#0A0F1E,#0D1B3E)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl pb-14 pt-28 md:pb-20 md:pt-32 lg:py-32">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className="finxt-label mb-5">Careers</p>
            <h1 className="finxt-page-heading">
              Shape the Future of Operational Delivery
            </h1>
            <div className="finxt-divider" />
            <div className="finxt-home-intro finxt-body">
              <p>
                Join a team solving real-world delivery, research, technology, and operational
                challenges for ambitious global programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="finxt-section finxt-section-light px-4 md:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="finxt-section-heading-dark mb-5">Why Work With Us?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              [
                'Purpose-driven work',
                'Tackle meaningful programmes across research, operations, technology, and client delivery.',
              ],
              [
                'Growth-oriented culture',
                'Learn quickly, take responsibility, and work closely with senior leaders.',
              ],
              [
                'Flexibility & trust',
                'A practical, outcome-focused approach to work and collaboration.',
              ],
              [
                'Complex projects',
                'Support multi-country programmes with real operational impact.',
              ],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-gray-200 p-6">
                <h3 className="finxt-card-title-dark mb-2">{title}</h3>
                <p className="finxt-body-dark">{text}</p>
              </div>
            ))}
          </div>
          <p className="finxt-body-dark mt-8">
            For career enquiries, please contact{' '}
            <a className="finxt-text-link" href="mailto:info@finxt.uk">
              info@finxt.uk
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
