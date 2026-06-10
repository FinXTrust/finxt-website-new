const AI_VISUALS = [
  { color: '#C9A84C', title: 'AI', shape: 'strategy' },
  { color: '#4EA1FF', title: 'BOT', shape: 'chat' },
  { color: '#35D0A3', title: 'DATA', shape: 'data' },
  { color: '#F25F5C', title: 'SEC', shape: 'security' },
  { color: '#A78BFA', title: 'LAW', shape: 'compliance' },
  { color: '#22D3EE', title: 'PAY', shape: 'payments' },
  { color: '#E4B947', title: 'VIP', shape: 'loyalty' },
  { color: '#EC4899', title: 'AI', shape: 'marketing' },
];

export default function AIServiceVisual({ index }) {
  const visual = AI_VISUALS[index % AI_VISUALS.length];

  return (
    <div className="finxt-svc-grid-visual">
      <div
        className="finxt-svc-grid-visual-bg"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${visual.color}33, transparent 34%), linear-gradient(135deg, #0B1325 0%, #050912 100%)`,
        }}
      />

      <div className="finxt-svc-grid-visual-grid" aria-hidden="true" />

      <div
        className="finxt-svc-grid-visual-glow"
        style={{ backgroundColor: `${visual.color}30` }}
        aria-hidden="true"
      />

      <div className="finxt-svc-grid-visual-ring finxt-svc-grid-visual-ring--outer" aria-hidden="true" />
      <div
        className="finxt-svc-grid-visual-ring finxt-svc-grid-visual-ring--inner"
        style={{ borderColor: `${visual.color}70` }}
        aria-hidden="true"
      />

      <div
        className="finxt-svc-grid-visual-badge"
        style={{
          borderColor: `${visual.color}70`,
          color: visual.color,
          boxShadow: `0 0 40px ${visual.color}25`,
        }}
      >
        {visual.title}
      </div>

      {visual.shape === 'strategy' && (
        <>
          <div className="finxt-svc-grid-visual-bar finxt-svc-grid-visual-bar--1" />
          <div className="finxt-svc-grid-visual-bar finxt-svc-grid-visual-bar--2" />
          <div className="finxt-svc-grid-visual-bar finxt-svc-grid-visual-bar--3" />
        </>
      )}

      {visual.shape === 'chat' && (
        <>
          <div className="finxt-svc-grid-visual-bubble finxt-svc-grid-visual-bubble--left" />
          <div className="finxt-svc-grid-visual-bubble finxt-svc-grid-visual-bubble--right" />
        </>
      )}

      {visual.shape === 'data' && (
        <div className="finxt-svc-grid-visual-chart" aria-hidden="true">
          <span className="finxt-svc-grid-visual-chart-bar finxt-svc-grid-visual-chart-bar--1" />
          <span className="finxt-svc-grid-visual-chart-bar finxt-svc-grid-visual-chart-bar--2" />
          <span className="finxt-svc-grid-visual-chart-bar finxt-svc-grid-visual-chart-bar--3" />
          <span className="finxt-svc-grid-visual-chart-bar finxt-svc-grid-visual-chart-bar--4" />
        </div>
      )}

      {visual.shape === 'security' && (
        <>
          <div className="finxt-svc-grid-visual-shield" />
          <div className="finxt-svc-grid-visual-shield-box" />
        </>
      )}

      {visual.shape === 'compliance' && (
        <>
          <div className="finxt-svc-grid-visual-scale-line" />
          <div className="finxt-svc-grid-visual-scale-bar" />
          <div className="finxt-svc-grid-visual-scale-plate finxt-svc-grid-visual-scale-plate--left" />
          <div className="finxt-svc-grid-visual-scale-plate finxt-svc-grid-visual-scale-plate--right" />
        </>
      )}

      {visual.shape === 'payments' && <div className="finxt-svc-grid-visual-card" />}

      {visual.shape === 'loyalty' && (
        <>
          <div className="finxt-svc-grid-visual-ticket" />
          <div className="finxt-svc-grid-visual-ticket-notch" />
        </>
      )}

      {visual.shape === 'marketing' && (
        <>
          <div className="finxt-svc-grid-visual-orbit" />
          <div className="finxt-svc-grid-visual-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </>
      )}

      <div className="finxt-svc-grid-visual-fade" aria-hidden="true" />

      <div className="finxt-svc-grid-visual-index">
        {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  );
}
