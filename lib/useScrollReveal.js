import { useEffect, useRef, useState } from 'react';

export function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(motionQuery.matches);

    update();
    motionQuery.addEventListener('change', update);

    return () => motionQuery.removeEventListener('change', update);
  }, []);

  return reducedMotion;
}

function isMobileViewport() {
  return window.matchMedia('(max-width: 1023px)').matches;
}

function shouldReveal(element) {
  const rect = element.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.height <= 0) return false;

  const revealLine = viewHeight * (isMobileViewport() ? 0.86 : 0.9);

  return rect.top < revealLine && rect.bottom > 0;
}

export function getScrollRevealDefaults() {
  if (typeof window === 'undefined') {
    return {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12,
    };
  }

  const mobile = isMobileViewport();

  return {
    rootMargin: mobile ? '0px 0px -5% 0px' : '0px 0px -10% 0px',
    threshold: mobile ? 0.08 : 0.12,
  };
}

export function useScrollReveal({ rootMargin, threshold } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const hasRevealedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const element = ref.current;
    if (!element) return undefined;

    let frameId = 0;
    let observer;
    let scrollTicking = false;

    const reveal = () => {
      if (hasRevealedRef.current) return;
      hasRevealedRef.current = true;

      observer?.disconnect();

      frameId = requestAnimationFrame(() => {
        frameId = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    };

    const checkReveal = () => {
      if (shouldReveal(element)) {
        reveal();
      }
    };

    const onScroll = () => {
      if (hasRevealedRef.current || scrollTicking) return;

      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        checkReveal();
      });
    };

    const defaults = getScrollRevealDefaults();
    const observerRootMargin = rootMargin ?? defaults.rootMargin;
    const observerThreshold = threshold ?? defaults.threshold;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
        }
      },
      { threshold: observerThreshold, rootMargin: observerRootMargin }
    );

    observer.observe(element);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', checkReveal, { passive: true });
    window.addEventListener('orientationchange', checkReveal, { passive: true });

    const delayedCheck = window.setTimeout(checkReveal, 120);

    return () => {
      window.clearTimeout(delayedCheck);
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkReveal);
      window.removeEventListener('orientationchange', checkReveal);
    };
  }, [reducedMotion, rootMargin, threshold]);

  return { ref, isVisible, reducedMotion };
}
