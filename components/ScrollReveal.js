import { useScrollReveal } from '../lib/useScrollReveal';

export default function ScrollReveal({
  children,
  className = '',
  as: Tag = 'div',
  rootMargin,
  threshold,
}) {
  const { ref, isVisible } = useScrollReveal({ rootMargin, threshold });

  return (
    <Tag
      ref={ref}
      className={[
        'finxt-scroll-reveal-group',
        isVisible ? 'finxt-scroll-reveal-group--visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}
