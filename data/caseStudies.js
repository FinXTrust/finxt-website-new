export const caseStudies = [
  {
    id: 'multi-market-user-research',
    number: '01',
    title: 'Multi-Market User Research Programme',
    tags: ['User Research', 'Programme Management', 'Participant Payments'],
    featured: true,
    image: '/images/AI Strategy.jpg',
    accent: '#5B8DEF',
    galleryImage: '/images/case-studies/multi-market-research.webp',
    galleryImagePosition: 'center center',
    highlight: { value: '1,000+', label: 'Participants across 4 countries' },
    challenge:
      'Our global technology enterprise client needed to run a large-scale, in-person user research programme across four European markets simultaneously, recruiting specialist participant profiles, managing complex session logistics, and processing reward payments in multiple currencies within tight project timelines.',
    solution:
      'FinXT UK provided end-to-end programme management across all four markets. We recruited and screened 1,000+ participants against defined eligibility criteria, coordinated session scheduling and venue setup across locations, managed day-of-session operations, and disbursed participant rewards in local currencies within 48 hours of each session.',
    outcomes: [
      '1,000+ screened and confirmed participants across 4 countries',
      '98.97% session completion rate across all scheduled research days',
      'Multi-currency reward payments disbursed within 48 hours',
      'Full programme delivered on schedule and within budget',
    ],
  },
  {
    id: 'cross-border-logistics-ata-carnet',
    number: '02',
    title: 'Cross-Border Logistics & ATA Carnet Management',
    tags: ['Logistics', 'ATA Carnet', 'Site Setup'],
    image: '/images/Mainpicture.jpg',
    accent: '#C9A84C',
    galleryImage: '/images/case-studies/cross-border-logistics.webp',
    galleryImagePosition: 'center 42%',
    highlight: { value: 'Minimal', label: 'Customs delays across crossings' },
    challenge:
      'One of our technology clients required secure, time-critical shipment of proprietary research devices across multiple European borders for a series of in-market testing sessions. Standard logistics providers could not meet the regulatory documentation requirements for temporary import, creating significant risk to the programme schedule.',
    solution:
      "FinXT UK managed the full logistics chain from collection at the client's US facility to delivery at each research venue, including preparation and endorsement of ATA Carnet documentation for cross-border movement. We coordinated customs clearance, provided chain-of-custody documentation, and arranged secure local storage at each site.",
    outcomes: [
      'Minimal customs delays across all border crossings',
      '100% of devices delivered and returned within programme schedule',
      'Full ATA Carnet documentation managed end-to-end with no client resource required',
      'Devices returned to client with complete chain-of-custody audit trail',
    ],
  },
  {
    id: 'rapid-staffing-eor',
    number: '03',
    title: 'Rapid Staffing Deployment — Multi-Country EOR',
    tags: ['Staffing', 'Employer of Record', 'Compliance'],
    image: '/images/AI Advisory.jpg',
    accent: '#9B8EC4',
    galleryImage: '/images/services/staffing_payroll.webp',
    highlight: { value: '< 4 wks', label: 'Team deployed across 3 markets' },
    challenge:
      'Our client needed to deploy a research operations team across India, the UK, and European markets within four weeks, in jurisdictions where they had no existing legal entities. Standard employment setup timelines made direct hiring impossible within the required window.',
    solution:
      'FinXT UK deployed its Employer of Record service across the relevant jurisdictions, managing employment contracts, local payroll, and statutory compliance for the deployed team. The client had compliant, operationally ready staff in all three markets within the required timeframe.',
    outcomes: [
      'Full team deployed across 3 markets in under 4 weeks',
      '100% employment compliance in each jurisdiction from day one',
      'Client avoided entity setup costs and timeline risk',
      'Ongoing EOR management provided for the duration of the programme',
    ],
  },
  {
    id: 'high-volume-consumer-research',
    number: '04',
    title: 'High-Volume Consumer Research — Participant Recruitment',
    tags: ['Crowdsourcing', 'User Research', 'Payments'],
    featured: true,
    image: '/images/Marketing.jpg',
    accent: '#E07A5F',
    galleryImage: '/images/services/crowdsolutions.webp',
    highlight: { value: '95%+', label: 'Session fill rate maintained' },
    challenge:
      'A consumer brand required fast recruitment of a high volume of participants across the UK and Europe for a multi-market insight study. Standard recruitment timelines and costs were incompatible with the project budget and schedule.',
    solution:
      'FinXT UK deployed its crowdsourcing and participant management infrastructure to recruit, screen, and schedule participants at scale, managing eligibility screening, session confirmations, no-show mitigation protocols, and same-day replacement procedures to protect session fill rates.',
    outcomes: [
      '1,000+ participant sessions managed across the programme',
      'Fill rate maintained above 95% across all scheduled sessions',
      'Recruitment completed within agreed timelines and budget parameters',
      'Participant reward payments processed in full following each session',
    ],
  },
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export function getCaseStudyCardLabel(study) {
  return `Programme ${study.number}`;
}

export function getCaseStudyCardTitle(study) {
  if (study.titleSub) {
    return { title: study.title, sub: study.titleSub };
  }

  const emDashParts = study.title.split(' — ');
  if (emDashParts.length > 1) {
    return { title: emDashParts[0].trim(), sub: emDashParts[1].trim() };
  }

  const ampersandParts = study.title.split(' & ');
  if (ampersandParts.length > 1) {
    return {
      title: ampersandParts[0].trim(),
      sub: ampersandParts.slice(1).join(' & ').trim(),
    };
  }

  const programmeMatch = study.title.match(/^(.+?) Programme$/);
  if (programmeMatch) {
    return { title: programmeMatch[1].trim(), sub: 'Programme' };
  }

  return { title: study.title, sub: null };
}
