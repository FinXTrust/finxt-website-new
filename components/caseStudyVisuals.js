function uid(studyId, suffix) {
  return `cs-${studyId.replace(/-/g, '')}-${suffix}`;
}

function MultiMarketResearchScene({ studyId, compact }) {
  const id = uid(studyId, 'mm');
  const hub = { cx: 200, cy: 200 };
  const markets = [
    { cx: 200, cy: 72, delay: 0 },
    { cx: 328, cy: 200, delay: 0.8 },
    { cx: 200, cy: 328, delay: 1.6 },
    { cx: 72, cy: 200, delay: 2.4 },
  ];

  return (
    <svg viewBox="0 0 400 400" className="finxt-cs-scene-svg" role="presentation">
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--cs-accent-soft, rgba(91, 141, 239, 0.35))" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <circle cx={hub.cx} cy={hub.cy} r="148" fill={`url(#${id}-glow)`} className="finxt-cs-scene-glow" />

      <circle
        cx={hub.cx}
        cy={hub.cy}
        r="132"
        fill="none"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth="1"
        className="finxt-cs-scene-ring finxt-cs-scene-ring--outer"
        style={{ transformOrigin: '200px 200px' }}
      />
      <circle
        cx={hub.cx}
        cy={hub.cy}
        r="108"
        fill="none"
        stroke="var(--cs-accent-line, rgba(91, 141, 239, 0.35))"
        strokeWidth="1"
        strokeDasharray="5 12"
        className="finxt-cs-scene-ring"
        style={{ transformOrigin: '200px 200px' }}
      />

      {markets.map((node) => (
        <line
          key={`link-${node.cx}-${node.cy}`}
          x1={hub.cx}
          y1={hub.cy}
          x2={node.cx}
          y2={node.cy}
          className="finxt-cs-scene-link"
          style={{ '--scene-delay': `${node.delay}s` }}
        />
      ))}

      {markets.map((node, index) => (
        <g key={`route-${index}`}>
          <path
            id={`${id}-path-${index}`}
            d={`M ${hub.cx} ${hub.cy} L ${node.cx} ${node.cy}`}
            fill="none"
            stroke="none"
          />
          {!compact && (
            <circle r="3.5" className="finxt-cs-scene-flow-dot" style={{ '--scene-delay': `${index * 1.1}s` }}>
              <animateMotion
                dur="5.5s"
                repeatCount="indefinite"
                begin={`${index * 1.1}s`}
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                keyTimes="0; 0.5; 1"
              >
                <mpath href={`#${id}-path-${index}`} />
              </animateMotion>
            </circle>
          )}
        </g>
      ))}

      <circle
        cx={hub.cx}
        cy={hub.cy}
        r="14"
        className="finxt-cs-scene-hub-pulse"
        filter={`url(#${id}-blur)`}
      />
      <circle cx={hub.cx} cy={hub.cy} r="7" className="finxt-cs-scene-hub" />

      {markets.map((node, index) => (
        <g key={`market-${index}`}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r="16"
            className="finxt-cs-scene-node-pulse"
            style={{ '--scene-delay': `${node.delay}s` }}
          />
          <circle cx={node.cx} cy={node.cy} r="5.5" className="finxt-cs-scene-node" />
          {!compact && (
            <circle cx={node.cx} cy={node.cy} r="22" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          )}
        </g>
      ))}

      {!compact && (
        <>
          <rect x="52" y="52" width="72" height="28" rx="4" className="finxt-cs-scene-chip" />
          <text x="88" y="70" textAnchor="middle" className="finxt-cs-scene-chip-text">
            4 markets
          </text>
          <rect x="276" y="318" width="72" height="28" rx="4" className="finxt-cs-scene-chip finxt-cs-scene-chip--gold" />
          <text x="312" y="336" textAnchor="middle" className="finxt-cs-scene-chip-text">
            live sync
          </text>
        </>
      )}
    </svg>
  );
}

function CrossBorderLogisticsScene({ studyId, compact }) {
  const id = uid(studyId, 'log');
  const route =
    'M 56 268 C 108 228, 148 248, 188 208 S 268 168, 312 128 S 348 96, 344 88';
  const checkpoints = [
    { cx: 56, cy: 268, label: 'origin' },
    { cx: 188, cy: 208, label: 'border' },
    { cx: 344, cy: 88, label: 'venue' },
  ];

  return (
    <svg viewBox="0 0 400 400" className="finxt-cs-scene-svg" role="presentation">
      <defs>
        <linearGradient id={`${id}-route`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(201, 168, 76, 0.15)" />
          <stop offset="50%" stopColor="var(--cs-accent-line, rgba(201, 168, 76, 0.55))" />
          <stop offset="100%" stopColor="rgba(91, 141, 239, 0.45)" />
        </linearGradient>
      </defs>

      {!compact && (
        <g className="finxt-cs-scene-docs">
          {[0, 1, 2].map((layer) => (
            <g key={layer} transform={`translate(${48 + layer * 6}, ${52 + layer * 8})`}>
              <rect
                x="0"
                y="0"
                width="64"
                height="82"
                rx="4"
                className="finxt-cs-scene-doc"
                style={{ '--scene-delay': `${layer * 0.35}s` }}
              />
              <line x1="12" y1="22" x2="52" y2="22" className="finxt-cs-scene-doc-line" />
              <line x1="12" y1="36" x2="44" y2="36" className="finxt-cs-scene-doc-line" />
              <line x1="12" y1="50" x2="48" y2="50" className="finxt-cs-scene-doc-line" />
            </g>
          ))}
          <text x="78" y="168" textAnchor="middle" className="finxt-cs-scene-doc-label">
            ATA
          </text>
        </g>
      )}

      <path id={`${id}-route`} d={route} fill="none" stroke={`url(#${id}-route)`} strokeWidth="2" className="finxt-cs-scene-route" />
      <path d={route} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="6 10" className="finxt-cs-scene-route-dash" />

      {!compact && (
        <circle r="4" className="finxt-cs-scene-flow-dot finxt-cs-scene-flow-dot--gold">
          <animateMotion dur="7s" repeatCount="indefinite" calcMode="linear">
            <mpath href={`#${id}-route`} />
          </animateMotion>
        </circle>
      )}

      {checkpoints.map((point, index) => (
        <g key={point.label}>
          <circle
            cx={point.cx}
            cy={point.cy}
            r="18"
            className="finxt-cs-scene-node-pulse"
            style={{ '--scene-delay': `${index * 1.2}s` }}
          />
          <circle cx={point.cx} cy={point.cy} r="6" className="finxt-cs-scene-node finxt-cs-scene-node--gold" />
        </g>
      ))}

      {!compact && (
        <>
          <path d="M 332 76 L 344 88 L 334 98" fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="1.4" className="finxt-cs-scene-arrow" />
          <rect x="248" y="312" width="96" height="28" rx="4" className="finxt-cs-scene-chip finxt-cs-scene-chip--gold" />
          <text x="296" y="330" textAnchor="middle" className="finxt-cs-scene-chip-text">
            chain of custody
          </text>
        </>
      )}
    </svg>
  );
}

function RapidStaffingEorScene({ studyId, compact }) {
  const id = uid(studyId, 'eor');
  const nodes = [
    { cx: 88, cy: 248, delay: 0 },
    { cx: 200, cy: 248, delay: 0.9 },
    { cx: 312, cy: 248, delay: 1.8 },
  ];

  return (
    <svg viewBox="0 0 400 400" className="finxt-cs-scene-svg" role="presentation">
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="var(--cs-accent-soft, rgba(155, 142, 196, 0.28))" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="248" rx="148" ry="28" fill={`url(#${id}-glow)`} className="finxt-cs-scene-glow" />

      <line x1="64" y1="248" x2="336" y2="248" className="finxt-cs-scene-timeline" />

      {nodes.slice(0, -1).map((node, index) => (
        <line
          key={`seg-${index}`}
          x1={node.cx}
          y1={248}
          x2={nodes[index + 1].cx}
          y2={248}
          className="finxt-cs-scene-timeline-seg"
          style={{ '--scene-delay': `${0.4 + index * 0.9}s` }}
        />
      ))}

      {!compact && (
        <g className="finxt-cs-scene-deploy">
          <path d="M 200 196 L 200 148" className="finxt-cs-scene-deploy-line" />
          <path d="M 188 160 L 200 148 L 212 160" fill="none" className="finxt-cs-scene-deploy-arrow" />
          <rect x="168" y="108" width="64" height="28" rx="4" className="finxt-cs-scene-chip" />
          <text x="200" y="126" textAnchor="middle" className="finxt-cs-scene-chip-text">
            &lt; 4 wks
          </text>
        </g>
      )}

      {nodes.map((node, index) => (
        <g key={`jurisdiction-${index}`}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r="22"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            className="finxt-cs-scene-jurisdiction-ring"
            style={{ '--scene-delay': `${node.delay}s` }}
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r="16"
            className="finxt-cs-scene-node-pulse"
            style={{ '--scene-delay': `${node.delay}s` }}
          />
          <circle cx={node.cx} cy={node.cy} r="7" className="finxt-cs-scene-node" />
          {!compact && (
            <line x1={node.cx} y1={node.cy + 14} x2={node.cx} y2={node.cy + 36} className="finxt-cs-scene-staff-line" style={{ '--scene-delay': `${node.delay + 0.2}s` }} />
          )}
        </g>
      ))}

      {!compact && (
        <>
          <circle cx="88" cy="292" r="4" className="finxt-cs-scene-staff-dot" style={{ '--scene-delay': '0.3s' }} />
          <circle cx="104" cy="292" r="4" className="finxt-cs-scene-staff-dot" style={{ '--scene-delay': '0.5s' }} />
          <circle cx="200" cy="292" r="4" className="finxt-cs-scene-staff-dot" style={{ '--scene-delay': '1.1s' }} />
          <circle cx="216" cy="292" r="4" className="finxt-cs-scene-staff-dot" style={{ '--scene-delay': '1.3s' }} />
          <circle cx="312" cy="292" r="4" className="finxt-cs-scene-staff-dot" style={{ '--scene-delay': '2s' }} />
          <rect x="52" y="52" width="88" height="28" rx="4" className="finxt-cs-scene-chip finxt-cs-scene-chip--gold" />
          <text x="96" y="70" textAnchor="middle" className="finxt-cs-scene-chip-text">
            3 jurisdictions
          </text>
        </>
      )}
    </svg>
  );
}

function HighVolumeResearchScene({ studyId, compact }) {
  const id = uid(studyId, 'hvr');
  const gridCols = compact ? 3 : 5;
  const gridRows = compact ? 3 : 4;
  const dots = [];

  for (let row = 0; row < gridRows; row += 1) {
    for (let col = 0; col < gridCols; col += 1) {
      dots.push({
        cx: 168 + col * (compact ? 28 : 22),
        cy: 188 + row * (compact ? 28 : 18),
        delay: (row + col) * 0.12,
        filled: (row + col) % 3 !== 0,
      });
    }
  }

  return (
    <svg viewBox="0 0 400 400" className="finxt-cs-scene-svg" role="presentation">
      <defs>
        <linearGradient id={`${id}-scan`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="var(--cs-accent-soft, rgba(224, 122, 95, 0.18))" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {!compact && (
        <g className="finxt-cs-scene-card-stack">
          {[0, 1, 2].map((layer) => (
            <rect
              key={layer}
              x={56 + layer * 8}
              y={72 + layer * 10}
              width="78"
              height="52"
              rx="5"
              className="finxt-cs-scene-session-card"
              style={{ '--scene-delay': `${layer * 0.4}s` }}
            />
          ))}
          <path d="M 118 148 L 168 168" className="finxt-cs-scene-link" style={{ '--scene-delay': '0.6s' }} />
          <circle r="3" className="finxt-cs-scene-flow-dot">
            <animateMotion dur="4s" repeatCount="indefinite" begin="0.6s">
              <mpath href={`#${id}-intake`} />
            </animateMotion>
          </circle>
          <path id={`${id}-intake`} d="M 118 148 L 168 168" fill="none" stroke="none" />
        </g>
      )}

      <rect
        x="156"
        y="168"
        width={gridCols * (compact ? 28 : 22) + 16}
        height={gridRows * (compact ? 28 : 18) + 16}
        rx="8"
        className="finxt-cs-scene-grid-frame"
      />

      {!compact && (
        <rect x="156" y="168" width="126" height="88" fill={`url(#${id}-scan)`} className="finxt-cs-scene-scan" />
      )}

      {dots.map((dot, index) => (
        <circle
          key={`participant-${index}`}
          cx={dot.cx}
          cy={dot.cy}
          r="4"
          className={[
            'finxt-cs-scene-participant',
            dot.filled ? 'finxt-cs-scene-participant--filled' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ '--scene-delay': `${dot.delay}s` }}
        />
      ))}

      {!compact && (
        <>
          <rect x="248" y="52" width="96" height="28" rx="4" className="finxt-cs-scene-chip finxt-cs-scene-chip--gold" />
          <text x="296" y="70" textAnchor="middle" className="finxt-cs-scene-chip-text">
            95%+ fill
          </text>
          <rect x="248" y="318" width="108" height="28" rx="4" className="finxt-cs-scene-chip" />
          <text x="302" y="336" textAnchor="middle" className="finxt-cs-scene-chip-text">
            session flow
          </text>
        </>
      )}
    </svg>
  );
}

const sceneComponents = {
  'multi-market-user-research': MultiMarketResearchScene,
  'cross-border-logistics-ata-carnet': CrossBorderLogisticsScene,
  'rapid-staffing-eor': RapidStaffingEorScene,
  'high-volume-consumer-research': HighVolumeResearchScene,
};

export function CaseStudyDiagram({
  studyId,
  className = '',
  isActive = false,
  accent = '#C9A84C',
  variant = 'scene',
}) {
  const Scene = sceneComponents[studyId];
  const isCompact = variant === 'compact' || className.includes('orbit');

  if (!Scene) return null;

  return (
    <div
      className={[
        'finxt-cs-scene',
        isCompact ? 'finxt-cs-scene--compact' : 'finxt-cs-scene--full',
        isActive ? 'finxt-cs-scene--active' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        '--cs-accent': accent,
        '--cs-accent-soft': `color-mix(in srgb, ${accent} 32%, transparent)`,
        '--cs-accent-line': `color-mix(in srgb, ${accent} 55%, rgba(255,255,255,0.2))`,
      }}
    >
      <Scene studyId={studyId} compact={isCompact} />
    </div>
  );
}
