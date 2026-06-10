import { locations } from '../data/organization';

const offices = [
  { id: 'uk', flag: '/images/gb.png', badge: 'Leeds HQ' },
  { id: 'spain', flag: '/images/es.png' },
  { id: 'poland', flag: '/images/poland.png' },
  { id: 'mexico', flag: '/images/mx.png' },
  { id: 'us', flag: '/images/us.png' },
];

const officesWithPhone = new Set([
  'United Kingdom',
  'Spain',
  'Poland',
  'Mexico',
  'United States',
]);

function formatAddress(office) {
  const lines = [office.streetAddress];

  if (office.streetAddressLine2) {
    lines.push(office.streetAddressLine2);
  }

  if (office.addressRegion && office.label !== 'United States') {
    lines.push(office.addressRegion);
  }

  if (office.label === 'United States') {
    lines.push(office.addressLocality);
    lines.push(office.postalCode);
    lines.push('USA');
  } else if (office.label === 'Mexico') {
    lines.push('Mexico');
  } else if (office.label === 'Spain') {
    lines.push(`${office.postalCode} ${office.addressLocality}`);
    lines.push('Spain');
  } else {
    lines.push(office.addressLocality);
    lines.push(office.postalCode);
  }

  return lines;
}

export default function ContactLocationsPanel() {
  return (
    <aside className="finxt-contact-panel finxt-home-card group relative overflow-hidden p-5 md:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-finxt-gold/50 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-[3px] bg-finxt-gold/80 transition-colors group-hover:bg-finxt-gold" />

      <div className="finxt-contact-panel-head pl-1">
        <h2 className="finxt-card-title">Our Locations</h2>
        <p className="finxt-card-body-sm mt-2">
          Offices across the UK, Europe, the Americas, and beyond.
        </p>
      </div>

      <ul className="finxt-contact-panel-body finxt-contact-locations divide-y divide-finxt-gold/20 pl-1">
        {offices.map((officeMeta) => {
          const office = locations[officeMeta.id];
          const addressLines = formatAddress(office);

          return (
            <li key={officeMeta.id}>
              <div className="flex h-6 w-8 shrink-0 items-center justify-center overflow-hidden rounded border border-white/10 bg-[#081126] p-0.5">
                <img
                  src={officeMeta.flag}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <p className="finxt-card-title text-base leading-tight">{office.label}</p>
                  {officeMeta.badge && (
                    <span className="rounded border border-finxt-gold/35 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-finxt-gold">
                      {officeMeta.badge}
                    </span>
                  )}
                </div>

                <address className="finxt-card-body-sm mt-1.5 space-y-0.5 not-italic">
                  {addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>

                {officesWithPhone.has(office.label) && (
                  <a
                    href={`tel:${office.telephone.replace(/\s/g, '')}`}
                    className="mt-2 inline-block text-[13px] font-semibold text-finxt-gold transition hover:text-[#E8C96A]"
                  >
                    {office.telephone}
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
