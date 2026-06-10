import ScrollReveal from './ScrollReveal';

export default function ServicesGridReveal({ children, className = '' }) {
  return <ScrollReveal className={className}>{children}</ScrollReveal>;
}
