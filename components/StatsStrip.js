const stats = [
  { value: '7+', label: 'Countries' },
  { value: '9+', label: 'Service Verticals' },
  { value: '1,000+', label: 'Participants Managed' },
  { value: 'Multi', label: 'Projects Delivered' },
];

const compactCopy =
  '7+ countries · 9+ service verticals · 1,000+ participants managed · Multiple concurrent programmes delivered';

export default function StatsStrip() {
  return (
    <section className="finxt-home-accent finxt-section-rule-top px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <p className="finxt-label mb-8 text-center md:mb-10">Metrics / Scale</p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/[0.08]">
          {stats.map((stat) => (
            <div key={stat.label} className="px-0 text-center md:px-6 lg:px-8">
              <p className="finxt-stat-value">{stat.value}</p>
              <p className="finxt-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="finxt-stat-copy mx-auto mt-8 hidden max-w-4xl text-center md:block">
          Operating across the United Kingdom, Europe, the Americas, and Asia — FinXT
          delivers consistent programme quality regardless of geography. Our global
          network means you never have to choose between scale and standard.
        </p>

        <p className="finxt-stat-copy-compact mx-auto mt-6 max-w-3xl text-center md:hidden">
          {compactCopy}
        </p>
      </div>
    </section>
  );
}
