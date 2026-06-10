export const SITE_URL = 'https://finxt.uk';

export const locations = {
  uk: {
    label: 'United Kingdom',
    streetAddress: '118 North Street',
    addressLocality: 'Leeds',
    postalCode: 'LS2 7PN',
    addressCountry: 'GB',
    telephone: '+447837851544',
    email: 'info@finxt.uk',
    geo: { latitude: 53.8008, longitude: -1.5491 },
  },
  spain: {
    label: 'Spain',
    streetAddress: 'C. de Recoletos, 19',
    addressLocality: 'Madrid',
    addressRegion: 'Salamanca',
    postalCode: '28001',
    addressCountry: 'ES',
    telephone: '+447837851544',
    email: 'info@finxt.uk',
    geo: { latitude: 40.4238, longitude: -3.6922 },
  },
  poland: {
    label: 'Poland',
    streetAddress: '2A Berezeńska Street',
    addressLocality: 'Warsaw',
    postalCode: '03-902',
    addressCountry: 'PL',
    telephone: '+447837851544',
    email: 'info@finxt.uk',
    geo: { latitude: 52.2297, longitude: 21.0122 },
  },
  mexico: {
    label: 'Mexico',
    addressLocality: 'Mexico City',
    addressCountry: 'MX',
    telephone: '+447837851544',
    email: 'info@finxt.uk',
  },
  us: {
    label: 'United States',
    streetAddress: '30 N Gould St',
    streetAddressLine2: 'Ste N',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
    telephone: '+13072962921',
    email: 'info@finxt.uk',
  },
};

export const organization = {
  name: 'FinXT UK Ltd',
  legalName: 'FinXT UK Ltd',
  alternateName: 'FinXT',
  url: SITE_URL,
  logo: `${SITE_URL}/images/finxt-wordmark.svg`,
  email: 'info@finxt.uk',
  ukPhone: locations.uk.telephone,
  usPhone: locations.us.telephone,
  description:
    'FinXT UK is a global programme delivery and operational excellence company with offices in Leeds, Madrid, Warsaw, and the United States. We provide research study recruitment, participant management, programme management, logistics, staffing, payment solutions, AI consulting, and related services across the United Kingdom, Europe, the Americas, and Asia.',
  // Set `url` on each profile when ready; footer and schema pick these up automatically.
  socialProfiles: [
    { platform: 'linkedin', label: 'LinkedIn', url: null },
    { platform: 'facebook', label: 'Facebook', url: null },
    { platform: 'instagram', label: 'Instagram', url: null },
    { platform: 'twitter', label: 'X', url: null },
  ],
  locations,
};
