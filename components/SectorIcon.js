const icons = {
  fintech: (
    <>
      <path d="M4 10h16v10H4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  tech: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9h6v6H9z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  retail: (
    <>
      <path d="M6 8h12l-1.2 10H7.2L6 8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  government: (
    <>
      <path d="M12 3l9 5v2H3V8l9-5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 10v8M10 10v8M14 10v8M18 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  professional: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8V6.5A3 3 0 0 1 15 6.5V8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
};

export default function SectorIcon({ type, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" role="presentation" className={className} aria-hidden="true">
      {icons[type]}
    </svg>
  );
}
