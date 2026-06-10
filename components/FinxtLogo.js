import { useId } from 'react';

const sizes = {
  sm: { height: 'h-10' },
  md: { height: 'h-11' },
  lg: { height: 'h-14' },
};

export const logoThemes = {
  color: {
    label: 'Colourful',
    description: 'Founder-style pink → purple → cyan. Distinctive and close to the original.',
    gradient: ['#F04F9A', '#A855F7', '#22D3EE'],
    glow1: '#F04F9A',
    glow2: '#22D3EE',
    finGlow: 'rgba(240, 79, 154, 0.55)',
    tGlow: 'rgba(34, 211, 238, 0.55)',
    leftAccents: ['#F04F9A', '#A855F7', '#22D3EE', '#F04F9A'],
    barcode: ['#22D3EE', '#A855F7', '#F04F9A', '#22D3EE', '#A855F7'],
    rightAccent: '#22D3EE',
    smallX: '#F04F9A',
    rightCircle: '#F04F9A',
  },
  gold: {
    label: 'Gold',
    description: 'Matches site palette (#C9A84C). Unified, premium B2B feel.',
    gradient: ['#8A6B24', '#C9A84C', '#F0D078'],
    glow1: '#C9A84C',
    glow2: '#F0D078',
    finGlow: 'rgba(201, 168, 76, 0.5)',
    tGlow: 'rgba(240, 208, 120, 0.5)',
    leftAccents: ['#C9A84C', '#A8873A', '#F0D078', '#C9A84C'],
    barcode: ['#C9A84C', '#A8873A', '#F0D078', '#C9A84C', '#A8873A'],
    rightAccent: '#F0D078',
    smallX: '#C9A84C',
    rightCircle: '#C9A84C',
  },
};

function Letter({ children, x, y, glowColor, fontSize = 23 }) {
  return (
    <text
      x={x}
      y={y}
      fontFamily="Inter, Arial Black, system-ui, sans-serif"
      fontSize={fontSize}
      fontWeight="900"
      fill="#FFFFFF"
      stroke="#111111"
      strokeWidth="2.4"
      paintOrder="stroke fill"
      letterSpacing="-1"
      style={glowColor ? { filter: `drop-shadow(0 1px 2px ${glowColor})` } : undefined}
    >
      {children}
    </text>
  );
}

export default function FinxtLogo({ size = 'sm', variant = 'color', className = '' }) {
  const theme = logoThemes[variant] || logoThemes.color;
  const uid = useId().replace(/:/g, '');
  const xGradientId = `finxt-x-gradient-${uid}`;
  const xGlowId = `finxt-x-glow-${uid}`;
  const { height } = sizes[size] || sizes.sm;

  const xLeft = 56;
  const xRight = 104;
  const xCenter = 80;
  const [gradStart, gradMid, gradEnd] = theme.gradient;
  const [leftLine1, leftLine2, leftLine3, leftCircle] = theme.leftAccents;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 152 50"
        className={`${height} w-auto shrink-0`}
        role="img"
        aria-label="FinXT"
      >
        <defs>
          <linearGradient id={xGradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradStart} />
            <stop offset="40%" stopColor={gradMid} />
            <stop offset="100%" stopColor={gradEnd} />
          </linearGradient>
          <filter id={xGlowId} x="-35%" y="-35%" width="170%" height="170%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor={theme.glow1} floodOpacity="0.5" />
            <feDropShadow dx="0" dy="0" stdDeviation="2.8" floodColor={theme.glow2} floodOpacity="0.3" />
          </filter>
        </defs>

        <g opacity="0.6">
          <line x1="6" y1="38" x2="22" y2="38" stroke={leftLine1} strokeWidth="2.2" strokeLinecap="round" />
          <line x1="8" y1="42" x2="18" y2="42" stroke={leftLine2} strokeWidth="1.6" strokeLinecap="round" />
          <line x1="10" y1="9" x2="10" y2="17" stroke={leftLine3} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="18" cy="7" r="2.8" fill="none" stroke={leftCircle} strokeWidth="1.4" />
        </g>

        <g opacity="0.38" strokeLinecap="round">
          {theme.barcode.map((stroke, index) => (
            <line
              key={index}
              x1={xCenter - 10 + index * 5}
              y1={index % 2 === 0 ? 8 : 6}
              x2={xCenter - 10 + index * 5}
              y2={index % 2 === 0 ? 42 : 44}
              stroke={stroke}
              strokeWidth="1.6"
            />
          ))}
        </g>

        <Letter x="18" y="35" glowColor={theme.finGlow}>
          FIN
        </Letter>

        <Letter x="108" y="35" glowColor={theme.tGlow}>
          T
        </Letter>

        <g filter={`url(#${xGlowId})`}>
          <line x1={xLeft} y1="41" x2={xRight} y2="9" stroke="#111111" strokeWidth="11" strokeLinecap="round" />
          <line x1={xLeft} y1="9" x2={xRight} y2="41" stroke="#111111" strokeWidth="11" strokeLinecap="round" />
          <line
            x1={xLeft}
            y1="41"
            x2={xRight}
            y2="9"
            stroke={`url(#${xGradientId})`}
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          <line
            x1={xLeft}
            y1="9"
            x2={xRight}
            y2="41"
            stroke={`url(#${xGradientId})`}
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          <line
            x1={xLeft + 5}
            y1="37"
            x2={xRight - 5}
            y2="13"
            stroke="#FFFFFF"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <line
            x1={xLeft + 5}
            y1="13"
            x2={xRight - 5}
            y2="37"
            stroke="#FFFFFF"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx={xCenter} cy="25" r="2.2" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.7" />
          <circle cx={xCenter} cy="25" r="0.8" fill="#FFFFFF" opacity="0.85" />
        </g>

        <g opacity="0.55">
          <circle cx="106" cy="11" r="2" fill="none" stroke={theme.rightAccent} strokeWidth="1.2" />
          <text x="114" y="15" fontSize="6.5" fontWeight="700" fill={theme.smallX} fontFamily="Inter, sans-serif">
            x
          </text>
          <circle cx="126" cy="38" r="1.8" fill="none" stroke={theme.rightCircle} strokeWidth="1.2" />
        </g>
      </svg>
    </span>
  );
}
