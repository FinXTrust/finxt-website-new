import { useScrollReveal } from '../lib/useScrollReveal';

export default function RevealItem({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  variant = '',
  rootMargin,
  threshold,
  style,
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal({ rootMargin, threshold });

  const variantClass = variant ? `finxt-scroll-reveal--${variant}` : '';

  return (
    <Tag
      ref={ref}
      className={[
        'finxt-scroll-reveal-group',
        'finxt-scroll-reveal',
        variantClass,
        isVisible ? 'finxt-scroll-reveal-group--visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
