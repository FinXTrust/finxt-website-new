import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/useScrollReveal';

function parseMetric(value) {
  const match = String(value).match(/^(\d+)(.*)$/);
  if (!match) return null;

  return {
    target: Number(match[1]),
    suffix: match[2],
  };
}

export default function AnimatedCaseStudyMetric({ value, label, isActive }) {
  const reducedMotion = usePrefersReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const parsed = parseMetric(value);

    if (reducedMotion || !parsed) {
      setDisplayValue(value);
      return undefined;
    }

    if (!isActive) {
      return undefined;
    }

    if (hasAnimatedRef.current) {
      setDisplayValue(value);
      return undefined;
    }

    hasAnimatedRef.current = true;

    const duration = 1100;
    const start = performance.now();
    let frameId = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(parsed.target * eased);

      setDisplayValue(`${current}${parsed.suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isActive, reducedMotion, value]);

  return (
    <div className={`finxt-cs-story-stat ${isActive ? 'finxt-cs-story-stat--active' : ''}`}>
      <p className="finxt-cs-story-stat-value">{displayValue}</p>
      <p className="finxt-cs-story-stat-label">{label}</p>
    </div>
  );
}
