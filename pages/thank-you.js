import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Link from 'next/link';
import { pageSeo } from '../data/seo';
import { useRouter } from 'next/router';

export default function ThankYou() {
  const router = useRouter();
  const isLiveStudies = router.query.source === 'live-studies';

  return (
    <Layout>
      <PageHead {...pageSeo.thankYou} />
      <section className="finxt-section finxt-section-light flex min-h-[60vh] items-center px-4 text-center md:px-6">
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
          <p className="finxt-label mb-5">
            {isLiveStudies ? 'Application received' : 'Message sent'}
          </p>
          <h1 className="finxt-page-heading">
            {isLiveStudies ? 'Thank you for applying!' : 'Thank you!'}
          </h1>
          <div className="finxt-divider mx-auto" />
          <div className="finxt-home-intro finxt-body-dark">
            <p>
              {isLiveStudies
                ? 'Your application has been received. If you are eligible for the study, our team will contact you using your preferred method.'
                : 'Your message has been successfully sent. We’ll get back to you shortly.'}
            </p>
          </div>

          {isLiveStudies && (
            <Link
              href="/live-studies"
              className="finxt-btn-primary mt-10 inline-block"
            >
              Back to Live Studies →
            </Link>
          )}
        </div>
      </section>
    </Layout>
  );
}
