import ContactLocationsPanel from '../components/ContactLocationsPanel';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { pageSeo } from '../data/seo';

export default function ContactPage() {
  return (
    <Layout showFooter={true}>
      <PageHead {...pageSeo.contact} />
      <section className="finxt-page-hero finxt-contact-page-hero relative min-h-[32rem] overflow-hidden bg-[#050912] px-4 text-white md:min-h-[36rem] md:px-6 lg:min-h-0">
        <div className="finxt-page-hero-media absolute inset-0 lg:left-[42%]">
          <img
            src="/images/contact_banner.webp"
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="finxt-page-hero-bg finxt-contact-hero-bg h-full w-full object-cover"
          />
        </div>

        <div className="finxt-page-hero-scrim-mobile" aria-hidden="true" />
        <div className="finxt-page-hero-scrim-desktop" aria-hidden="true" />
        <div className="finxt-page-hero-glow-mobile" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl pb-14 pt-28 md:pb-20 md:pt-32 lg:py-32">
          <div className="max-w-2xl lg:max-w-3xl">
            <p className="finxt-label mb-5">Contact Us</p>

            <h1 className="finxt-page-heading">
              Let&apos;s Build the
              <br />
              Future Together
            </h1>

            <div className="finxt-divider" />

            <div className="finxt-home-intro finxt-body">
              <p>
                Have a challenge in mind, or want to explore opportunities?
                We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="finxt-section finxt-home-chapter relative overflow-hidden px-4 pt-0 pb-14 text-white md:px-6 md:pb-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="finxt-section-rule mb-10 md:mb-12" />

          <div className="finxt-contact-split">
            <form
              name="contact"
              method="POST"
              netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              className="finxt-contact-panel finxt-home-card group relative overflow-hidden p-5 md:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-finxt-gold/50 to-transparent" />
              <div className="absolute left-0 top-0 h-full w-[3px] bg-finxt-gold/80 transition-colors group-hover:bg-finxt-gold" />

              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="finxt-contact-panel-head pl-1">
                <h2 className="finxt-card-title">Send us a message</h2>
                <p className="finxt-card-body-sm mt-2">
                  Share your enquiry and our team will respond shortly.
                </p>
              </div>

              <div className="finxt-contact-panel-body pl-1">
                <div className="finxt-contact-form-fields space-y-5">
                  <div>
                    <label className="finxt-form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      maxLength={100}
                      autoComplete="name"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-[15px] text-[#0A0F1E] outline-none transition focus:border-finxt-gold/50 focus:ring-2 focus:ring-finxt-gold/20"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="finxt-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      maxLength={255}
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-[15px] text-[#0A0F1E] outline-none transition focus:border-finxt-gold/50 focus:ring-2 focus:ring-finxt-gold/20"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="finxt-form-label">
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
                      className="w-full rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-[15px] text-[#0A0F1E] outline-none transition focus:border-finxt-gold/50 focus:ring-2 focus:ring-finxt-gold/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="finxt-contact-message mt-5">
                  <label className="finxt-form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    maxLength={3000}
                    required
                    className="finxt-contact-textarea w-full rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-[15px] text-[#0A0F1E] outline-none transition focus:border-finxt-gold/50 focus:ring-2 focus:ring-finxt-gold/20"
                    placeholder="Tell us how we can help"
                  />
                </div>
              </div>

              <div className="finxt-contact-panel-foot pl-1">
                <button type="submit" className="finxt-btn-primary w-full text-center">
                  Submit →
                </button>
              </div>
            </form>

            <ContactLocationsPanel />
          </div>
        </div>
      </section>
    </Layout>
  );
}
