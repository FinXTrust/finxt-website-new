import { services as finxtServices } from '../data/services';
import { organization, SITE_URL } from '../data/organization';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const LOCATION_IDS = {
  uk: `${SITE_URL}/#localbusiness-uk`,
  spain: `${SITE_URL}/#localbusiness-spain`,
  poland: `${SITE_URL}/#localbusiness-poland`,
  us: `${SITE_URL}/#localbusiness-us`,
};

function postalAddress(location) {
  const streetAddress = location.streetAddressLine2
    ? `${location.streetAddress}, ${location.streetAddressLine2}`
    : location.streetAddress;

  return {
    '@type': 'PostalAddress',
    streetAddress,
    addressLocality: location.addressLocality,
    ...(location.addressRegion ? { addressRegion: location.addressRegion } : {}),
    postalCode: location.postalCode,
    addressCountry: location.addressCountry,
  };
}

function buildLocalBusiness(key, location, nameSuffix) {
  const business = {
    '@type': 'LocalBusiness',
    '@id': LOCATION_IDS[key],
    name: nameSuffix ? `${organization.name} — ${nameSuffix}` : organization.name,
    description: organization.description,
    url: organization.url,
    image: organization.logo,
    telephone: location.telephone,
    email: location.email,
    priceRange: '£££',
    address: postalAddress(location),
    parentOrganization: { '@id': ORG_ID },
    areaServed: location.addressCountry,
  };

  if (location.geo) {
    business.geo = {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    };
  }

  return business;
}

function buildServices() {
  return finxtServices.map((service, index) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-${index + 1}`,
    name: service.title,
    description: service.points[0],
    provider: { '@id': ORG_ID },
    areaServed: ['GB', 'EU', 'US', 'IN', 'MX', 'ES', 'PL'],
    serviceType: service.title,
    url: `${SITE_URL}/services`,
  }));
}

export function buildStructuredData() {
  const services = buildServices();
  const { uk, spain, poland, us } = organization.locations;

  const localBusinesses = [
    buildLocalBusiness('uk', uk, null),
    buildLocalBusiness('spain', spain, 'Spain'),
    buildLocalBusiness('poland', poland, 'Poland'),
    buildLocalBusiness('us', us, 'Americas'),
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: organization.name,
        legalName: organization.legalName,
        alternateName: organization.alternateName,
        url: organization.url,
        logo: organization.logo,
        image: organization.logo,
        description: organization.description,
        email: organization.email,
        telephone: organization.ukPhone,
        ...(organization.socialProfiles?.some((profile) => profile.url)
          ? {
              sameAs: organization.socialProfiles
                .map((profile) => profile.url)
                .filter(Boolean),
            }
          : {}),
        address: postalAddress(uk),
        location: Object.values(LOCATION_IDS).map((id) => ({ '@id': id })),
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: organization.ukPhone,
            email: organization.email,
            contactType: 'customer service',
            areaServed: ['GB', 'ES', 'PL', 'EU'],
            availableLanguage: ['English', 'Spanish', 'Polish'],
          },
          {
            '@type': 'ContactPoint',
            telephone: organization.usPhone,
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English'],
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'FinXT UK Services',
          itemListElement: services.map((service, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: { '@id': service['@id'] },
          })),
        },
      },
      ...localBusinesses,
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: organization.name,
        description: organization.description,
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-GB',
      },
      ...services,
    ],
  };
}
