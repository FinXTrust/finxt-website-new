import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesIndex() {
  return (
    <ScrollReveal className="finxt-cs-index">
      <p
        className="finxt-scroll-reveal finxt-cs-index-label"
        style={{ '--reveal-delay': '0ms' }}
      >
        Index — {caseStudies.length} programmes
      </p>

      <ol className="finxt-cs-index-grid">
        {caseStudies.map((study, index) => (
          <li
            key={study.id}
            className="finxt-scroll-reveal"
            style={{ '--reveal-delay': `${80 + index * 70}ms` }}
          >
            <Link href={`#${study.id}`} className="finxt-cs-index-card">
              <span className="finxt-cs-index-num" aria-hidden="true">
                {study.number}
              </span>
              <span className="finxt-cs-index-metric">{study.highlight.value}</span>
              <span className="finxt-cs-index-title">{study.title}</span>
              <span className="finxt-cs-index-tags">{study.tags.slice(0, 2).join(' · ')}</span>
              <span className="finxt-cs-index-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </ScrollReveal>
  );
}
