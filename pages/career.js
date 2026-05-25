import Layout from '../components/Layout';

export default function CareersPage() {
  return (
    <Layout>
      <section className="bg-[linear-gradient(135deg,#050912,#0A0F1E,#0D1B3E)] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="finxt-label mb-5">Careers</p>
          <h1 className="finxt-heading max-w-4xl text-5xl md:text-7xl">Shape the future of operational delivery.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Join a team solving real-world delivery, research, technology, and operational challenges for ambitious global programmes.
          </p>
        </div>
      </section>
      <section className="bg-[#F4F6FB] px-6 py-20 text-[#2D3748]">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-10 shadow-sm">
          <h2 className="mb-5 text-3xl font-extrabold text-[#0A0F1E]">Why work with us?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ['Purpose-driven work', 'Tackle meaningful programmes across research, operations, technology, and client delivery.'],
              ['Growth-oriented culture', 'Learn quickly, take responsibility, and work closely with senior leaders.'],
              ['Flexibility & trust', 'A practical, outcome-focused approach to work and collaboration.'],
              ['Complex projects', 'Support multi-country programmes with real operational impact.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-[#0A0F1E]">{title}</h3>
                <p className="text-sm leading-7">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600">For career enquiries, please contact <a className="font-bold text-[#A07D30]" href="mailto:info@finxt.uk">info@finxt.uk</a>.</p>
        </div>
      </section>
    </Layout>
  );
}
