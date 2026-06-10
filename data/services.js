export const services = [
  {
    id: 'rewards-payments',
    title: 'Rewards, Loyalty and Smart Payment Integration Solutions',
    image: '/images/services/rewards_loyalty.webp',
    summary:
      'Personalised reward platforms and secure payment integrations that deepen engagement and streamline transactions.',
    featured: true,
    points: [
      'Boost customer loyalty and retention through sophisticated, personalised reward systems and platforms developed by FinXT.',
      'Our smart payment solutions seamlessly integrate advanced technologies, enhancing transaction security, efficiency, and user experience.',
      'Benefit from frictionless payment systems, secure transaction processing, and scalable integration tailored specifically to your needs.',
    ],
  },
  {
    id: 'ai-digital-transformation',
    title: 'AI Services & Digital Transformation',
    image: '/images/services/AI.webp',
    summary:
      'Strategy, solution development, compliance advisory, and data insights, helping organisations adopt emerging technology responsibly.',
    featured: true,
    points: [
      'AI strategy and readiness consulting, custom AI solution development, compliance-focused AI advisory, and AI-enhanced data insights, helping organisations understand, adopt, and operationalise emerging technology responsibly.',
      'Clear roadmaps, readiness assessments, and governance frameworks aligned to your business outcomes and regulatory environment.',
      'From intelligent assistants and automation to predictive analytics, delivered with the same programme discipline as our operational services.',
    ],
  },
  {
    id: 'crowdsourcing',
    title: 'Crowdsourcing Solutions',
    image: '/images/services/crowdsolutions.webp',
    summary:
      'Scaled participant recruitment and coordination, GDPR-compliant and fully managed.',
    featured: true,
    points: [
      'Access to diverse, scalable participant pools across geographies for rapid data collection, usability testing, and engagement initiatives.',
      'Fully managed recruitment, screening, and coordination services with GDPR-compliant processes.',
    ],
  },
  {
    id: 'programme-management',
    title: 'Programme Management',
    image: '/images/services/programme_management.webp',
    summary:
      'Governance, risk control, and stakeholder reporting for complex programmes.',
    featured: true,
    points: [
      'Structured oversight of complex, multi-workstream programmes, ensuring alignment with business goals, timelines, and budgets.',
      'Dedicated PMs, governance frameworks, risk management, and stakeholder reporting.',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Secure Shipment',
    image: '/images/services/logistics.webp',
    summary:
      'Chain-of-custody logistics for high-value assets and insured international movement.',
    featured: true,
    points: [
      'Reliable, secure, and efficient transportation of equipment and materials, including high-value and sensitive assets.',
      'Full chain-of-custody, bonded warehousing, and comprehensive insurance coverage.',
    ],
  },
  {
    id: 'ata-carnet',
    title: 'ATA Carnet Handling',
    image: '/images/services/ATA.webp',
    summary:
      'Temporary import/export management across 87+ Carnet countries.',
    points: [
      'Expert management of international temporary imports and exports across 87+ signatory countries.',
      'Customs liaison, documentation management, and reduction of delays and duty exposure.',
    ],
  },
  {
    id: 'site-setup',
    title: 'Site Setup & Deployment',
    image: '/images/services/site_setup.webp',
    summary:
      'Rapid multi-location site deployment, from survey to teardown.',
    points: [
      'End-to-end setup of testing environments, pop-up research labs, and operational sites.',
      'From site survey to teardown, rapid, multi-location parallel deployment with full IT and infrastructure provisioning.',
    ],
  },
  {
    id: 'staffing-eor',
    title: 'Staffing Solutions, Payroll & EOR',
    image: '/images/services/staffing_payroll.webp',
    summary:
      'Compliant hiring, payroll, and Employer of Record across UK and EU.',
    points: [
      'Provision of skilled technical, operational, and research personnel.',
      'Employer of Record and payroll management services enabling compliant hiring across UK and EU markets without local entity requirement.',
    ],
  },
  {
    id: 'user-research',
    title: 'User Study & Research Support',
    image: '/images/services/user_research.webp',
    summary:
      'End-to-end research facilitation, recruitment, moderation, and multilingual delivery.',
    featured: true,
    points: [
      'Comprehensive facilitation of user research including participant recruitment, moderated and unmoderated sessions, ethnographic studies, data collection, and transcription.',
      'Delivered in multiple languages and markets.',
    ],
  },
];

export const servicesIntro =
  'Nine integrated capabilities, from digital transformation and payments to programme delivery, logistics, and research operations, under one accountable partner.';

export const deliveryPillars = [
  {
    title: 'One accountable partner',
    text: 'Nine capabilities under a single point of senior accountability.',
  },
  {
    title: 'End-to-end discipline',
    text: 'Governance, reporting, and risk control from strategy through live delivery.',
  },
  {
    title: 'Global capability',
    text: 'Operating across 7+ countries with consistent standards and compliance.',
  },
  {
    title: 'Built for complexity',
    text: 'Specialists in delivery when programmes are live and stakes are high.',
  },
];

/** Homepage mosaic — 6 of 9; titles/images pulled from the services page data */
const HOMEPAGE_MOSAIC_IDS = [
  'rewards-payments',
  'ai-digital-transformation',
  'crowdsourcing',
  'programme-management',
  'logistics',
  'user-research',
];

export const homepageFeaturedServices = HOMEPAGE_MOSAIC_IDS.map((id) => {
  const service = services.find((s) => s.id === id);
  return {
    id: service.id,
    title: service.title,
    image: service.image,
    href: `/services#${service.id}`,
  };
});
