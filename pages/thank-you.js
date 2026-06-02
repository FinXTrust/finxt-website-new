// pages/thank-you.js
import Layout from '../components/Layout';

export default function ThankYou() {
  return (
    <Layout>
      <section className="py-24 text-center px-6 bg-[#fdf6ee] text-gray-800 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg">
            Your message has been successfully sent. We’ll get back to you shortly.
          </p>
        </div>
      </section>
    </Layout>
  );
}
