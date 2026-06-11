import { useScrollReveal } from '../lib/useScrollReveal';

function StepIcon({ type }) {
  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" role="presentation" className="finxt-live-journey-icon-svg">
        <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'application') {
    return (
      <svg viewBox="0 0 24 24" role="presentation" className="finxt-live-journey-icon-svg">
        <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M16 16l1.5 1.5L20 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" role="presentation" className="finxt-live-journey-icon-svg">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v8M9.5 14.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6.5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const steps = [
  {
    title: 'Choose your location',
    text: 'Select the study nearest to you from our active locations worldwide.',
    icon: 'location',
    chip: '6 locations',
  },
  {
    title: 'Complete the application',
    text: 'Fill in a short eligibility form — it only takes a few minutes.',
    icon: 'application',
    chip: 'A few minutes',
  },
  {
    title: 'Attend and get rewarded',
    text: 'Join a 90-minute session and receive your payment after completion.',
    icon: 'reward',
    chip: '90-minute · Paid',
  },
];

export default function LiveStudiesStepsStrip() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={[
        'finxt-live-journey',
        'mt-12',
        'md:mt-14',
        isVisible ? 'finxt-live-journey--visible' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="finxt-live-journey-rail" aria-hidden="true">
        <span className="finxt-live-journey-rail-bg" />
        <span className="finxt-live-journey-rail-fill" />
        <span className="finxt-live-journey-rail-glow" />
      </div>

      <ol className="finxt-live-journey-steps">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={`finxt-live-journey-step finxt-live-journey-step--${step.icon}`}
            style={{ '--step-index': index }}
          >
            <div className="finxt-live-journey-marker">
              <span className="finxt-live-journey-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="finxt-live-journey-node">
                <StepIcon type={step.icon} />
              </span>
            </div>

            <div className="finxt-live-journey-body">
              <h3 className="finxt-card-title">{step.title}</h3>
              <span className="finxt-live-journey-chip mt-2">{step.chip}</span>
              <p className="finxt-card-body mt-3">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
