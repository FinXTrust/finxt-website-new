import ScrollReveal from './ScrollReveal';

export default function CaseStudiesPageIntro() {
  return (
    <ScrollReveal className="finxt-micro-intro max-w-3xl">
      <p className="finxt-scroll-reveal finxt-label mb-5" style={{ '--reveal-delay': '0ms' }}>
        Proof in Practice
      </p>
      <h2
        className="finxt-scroll-reveal finxt-section-heading"
        style={{ '--reveal-delay': '100ms' }}
      >
        Programme stories, told with evidence
      </h2>
      <div
        className="finxt-scroll-reveal finxt-scroll-reveal--divider finxt-divider"
        style={{ '--reveal-delay': '200ms' }}
      />
      <p
        className="finxt-scroll-reveal finxt-home-intro finxt-body"
        style={{ '--reveal-delay': '300ms' }}
      >
        Each snapshot follows a real delivery pattern — the operational pressure, what FinXT
        mobilised, and the measurable outcomes clients needed. Scannable, anonymised, and built
        for capability conversations.
      </p>
    </ScrollReveal>
  );
}
