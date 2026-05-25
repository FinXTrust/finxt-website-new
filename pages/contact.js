import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout showFooter={false}>
      <section className="relative overflow-hidden bg-[#050912] px-6 py-20 text-white md:py-28">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact_banner.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050912]/90 via-[#050912]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-lg">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
              Contact Us
            </p>

            <h1 className="finxt-heading max-w-4xl text-3xl md:text-5xl leading-tight">
              Let’s Build the
              <br />
              Future Together
            </h1>

            <p className="mt-6 text-sm leading-7 text-white/80 md:text-base">
              Have a challenge in mind or want to explore opportunities?
              We’d love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C]">
                  ✉
                </div>

                 <a
                href="mailto:info@finxt.uk"
                className="flex items-center gap-2 hover:text-white"
              >
                 info@finxt.uk
              </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C]">
                  ☎
                </div>

                <a
                href="tel:+447837851544"
                className="flex items-center gap-2 hover:text-white"
              >
                +44 7837 851 544
              </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C]">
                  📍
                </div>

                <p className="text-sm text-white/85 md:text-base">
                  London, United Kingdom
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C]">
                  🌐
                </div>

                <a
                href="https://finxt.uk/"
                className="flex items-center gap-2 hover:text-white"
              >
                  www.finxt.uk
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>
    </Layout>
  );
}