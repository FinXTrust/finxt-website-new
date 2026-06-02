import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout showFooter={true}>
      <section className="relative overflow-hidden bg-[#050912] px-6 py-20 text-white md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact_banner.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050912]/90 via-[#050912]/70 to-[#050912]/40" />

        <div className="relative z-10 mx-auto max-w-7xl">

        <div className="max-w-xl">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
            Contact Us
          </p>

          <h1 className="finxt-heading max-w-4xl text-3xl leading-tight md:text-5xl">
            Let’s Build the
            <br />
            Future Together
          </h1>

          <p className="mt-6 text-sm leading-7 text-white/80 md:text-base">
            Have a challenge in mind or want to explore opportunities?
            We’d love to hear from you.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"
            className="mt-10 max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>

            <h2 className="mb-6 text-2xl font-black text-white">
              Contact us
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  maxLength={100}
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0A0F1E] outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  maxLength={255}
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0A0F1E] outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Contact Number
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  name="number"
                  maxLength={25}
                  pattern="[\+0-9\s\-\(\)]{7,25}"
                  autoComplete="tel"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0A0F1E] outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white">
                  Tell us more about your request / query
                </label>
                <textarea
                  name="message"
                  rows="5"
                  maxLength={3000}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#0A0F1E] outline-none"
                  placeholder="Tell us how we can help"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]"
              >
                Submit
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}