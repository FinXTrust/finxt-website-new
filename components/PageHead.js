import Head from 'next/head';
import { SITE_URL } from '../data/organization';

const DEFAULT_OG_IMAGE = '/images/hero-banner.webp';
const SITE_NAME = 'FinXT UK';

function resolveUrl(path) {
  if (!path) return SITE_URL;
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

function resolveImage(image) {
  const src = image || DEFAULT_OG_IMAGE;
  return src.startsWith('http') ? src : `${SITE_URL}${src}`;
}

function formatTitle(title) {
  if (title.includes('FinXT')) return title;
  return `${title} | ${SITE_NAME}`;
}

export default function PageHead({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}) {
  const pageTitle = formatTitle(title);
  const canonicalUrl = resolveUrl(path);
  const ogImage = resolveImage(image);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
