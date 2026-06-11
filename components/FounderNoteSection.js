const highlights = [
  { value: '7+', label: 'Countries' },
  { value: '9', label: 'Service verticals' },
  { value: '1', label: 'Accountable partner' },
];

export default function FounderNoteSection() {
  return (
    <div className="finxt-founder-note">
      <div className="finxt-founder-note-panel">
        <div className="finxt-founder-note-accent" aria-hidden="true" />
        <div className="finxt-founder-note-glow" aria-hidden="true" />

        <header className="finxt-founder-note-header">
          <p className="finxt-label mb-5">Founder note</p>
          <h2 className="finxt-section-heading finxt-founder-note-title">
            A Note From Our Founder (Anusha Addu)
          </h2>
          <div className="finxt-divider" />
        </header>

        <div className="finxt-founder-note-grid">
          <aside className="finxt-founder-note-aside">
            <p className="finxt-founder-note-quote">
              FinXT exists because I saw a gap that no one was filling.
            </p>

            <ul className="finxt-founder-note-highlights">
              {highlights.map((item) => (
                <li key={item.label} className="finxt-founder-note-highlight">
                  <span className="finxt-founder-note-highlight-value">{item.value}</span>
                  <span className="finxt-founder-note-highlight-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="finxt-founder-note-content finxt-body">
            <p>
              I spent years working across global financial services and international
              programme delivery, and in that time, I saw the same problem repeat itself
              across clients and geographies. Organisations with genuine ambition and real
              budgets were being let down by the operational infrastructure around them.
              Logistics vendors who could not cross borders. Research operations teams
              that could recruit participants but could not pay them. Programme managers
              who could plan but could not execute. The pieces were always there. What was
              missing was someone who could connect them.
            </p>

            <p>
              I founded FinXT to be that connection. Not another specialist adding to the
              coordination problem, but an integrated partner that takes accountability for
              the whole programme from the first planning call to the final reconciliation
              report.
            </p>

            <div className="finxt-founder-note-callout">
              <p>
                We are built on a belief that operational excellence is not a luxury: it is
                the foundation on which everything else rests. When the logistics work, when
                the participants show up, when the payments clear without dispute, and when
                the data comes back clean, that is when the real work of our clients can
                happen. Our job is to make that invisible.
              </p>
            </div>

            <p className="finxt-founder-note-closer">
              Seven-plus countries in. Nine verticals deep. And still operating by the same
              principle we started with: one partner, full accountability, no excuses.
            </p>

            <footer className="finxt-founder-note-signature">
              <p className="finxt-founder-note-name">Anusha Addu</p>
              <p className="finxt-founder-note-role">Founder &amp; Director, FinXT</p>
              <p className="finxt-founder-note-location">Leeds, United Kingdom</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
