const cycleWords = ['Europe', 'the Americas', 'Asia', '7+ countries'];

const nodes = [
  { cx: 200, cy: 200, r: 7, delay: 0, hub: true },
  { cx: 118, cy: 148, r: 4, delay: 0.4 },
  { cx: 168, cy: 132, r: 4, delay: 0.8 },
  { cx: 92, cy: 178, r: 4, delay: 1.2 },
  { cx: 278, cy: 156, r: 4, delay: 1.6 },
  { cx: 248, cy: 210, r: 4, delay: 2 },
  { cx: 142, cy: 248, r: 4, delay: 2.4 },
];

const links = [
  [200, 200, 118, 148],
  [200, 200, 168, 132],
  [200, 200, 92, 178],
  [200, 200, 278, 156],
  [200, 200, 248, 210],
  [200, 200, 142, 248],
  [118, 148, 168, 132],
  [278, 156, 248, 210],
];

const worldMapPaths = [
  'M48 108c18-34 52-42 78-22 14 12 18 38 6 58-14 22-44 32-68 18-20-12-28-36-16-54z',
  'M92 168c16-10 34 4 32 42-4 48-28 72-48 52-18-18-12-62 16-94z',
  'M162 92c32-18 68-8 78 28 10 48-2 108-32 138-28 28-58 12-72-28-14-42-8-108 26-138z',
  'M244 76c54-12 98 8 104 48 6 42-18 82-62 88-38 6-72-18-84-58-12-42 8-86 42-78z',
  'M272 214c26-10 48 6 44 34-4 24-32 36-52 18-18-16-10-44 8-52z',
  'M118 72c22-18 42-6 38 16-4 18-26 28-42 14-14-12-8-32 4-30z',
];

export default function OurStoryVisual() {
  return (
    <div className="finxt-story-visual finxt-micro-panel" aria-hidden="true">
      <div className="finxt-story-visual-panel">
        <div className="finxt-story-visual-graphic">
          <svg className="finxt-story-network" viewBox="0 0 400 400" role="presentation">
          <defs>
            <radialGradient id="finxt-story-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(201, 168, 76, 0.32)" />
              <stop offset="100%" stopColor="rgba(201, 168, 76, 0)" />
            </radialGradient>
            <filter id="finxt-story-hub-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="finxt-story-world-map">
            {worldMapPaths.map((d, index) => (
              <path key={`continent-${index}`} d={d} />
            ))}
          </g>

          <circle cx="200" cy="200" r="148" fill="url(#finxt-story-glow)" className="finxt-story-orbit" />

          <circle
            cx="200"
            cy="200"
            r="148"
            fill="none"
            stroke="rgba(201, 168, 76, 0.12)"
            strokeWidth={1}
            className="finxt-story-orbit-ring-outer"
          />

          <circle
            cx="200"
            cy="200"
            r="132"
            fill="none"
            stroke="rgba(201, 168, 76, 0.28)"
            strokeWidth={1.5}
            strokeDasharray="6 10"
            className="finxt-story-orbit-ring"
          />

          {links.map(([x1, y1, x2, y2], index) => (
            <line
              key={`link-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="finxt-story-link"
              style={{ '--link-delay': `${index * 0.35}s` }}
            />
          ))}

          {nodes.map((node, index) => (
            <g key={`node-${index}`}>
              {!node.hub && (
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="12"
                  className="finxt-story-node-pulse"
                  style={{ '--node-delay': `${node.delay}s` }}
                />
              )}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                className={node.hub ? 'finxt-story-node-hub' : 'finxt-story-node'}
                filter={node.hub ? 'url(#finxt-story-hub-glow)' : undefined}
              />
            </g>
          ))}
          </svg>
        </div>

        <div className="finxt-story-cycle finxt-story-global-band">
          <p className="finxt-story-cycle-label">Delivering programmes across</p>
          <div className="finxt-story-cycle-words">
            {cycleWords.map((word, index) => (
              <span
                key={word}
                className="finxt-story-cycle-word"
                style={{ '--word-index': index }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
