const SCRIPT_IDS = {
  gaLoader: 'finxt-ga-loader',
  gaConfig: 'finxt-ga-config',
  metaPixel: 'finxt-meta-pixel',
};

function getGaMeasurementId() {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || '';
}

function getMetaPixelId() {
  return process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || '';
}

function injectScript(id, src) {
  if (document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

function injectInlineScript(id, content) {
  if (document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.text = content;
  document.head.appendChild(script);
}

function removeScript(id) {
  document.getElementById(id)?.remove();
}

function loadGoogleAnalytics() {
  const gaId = getGaMeasurementId();
  if (!gaId) return;

  injectScript(SCRIPT_IDS.gaLoader, `https://www.googletagmanager.com/gtag/js?id=${gaId}`);
  injectInlineScript(
    SCRIPT_IDS.gaConfig,
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`
  );
}

function unloadGoogleAnalytics() {
  removeScript(SCRIPT_IDS.gaLoader);
  removeScript(SCRIPT_IDS.gaConfig);
  delete window.gtag;
  delete window.dataLayer;
}

function loadMetaPixel() {
  const pixelId = getMetaPixelId();
  if (!pixelId) return;

  injectInlineScript(
    SCRIPT_IDS.metaPixel,
    `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`
  );
}

function unloadMetaPixel() {
  removeScript(SCRIPT_IDS.metaPixel);
  delete window.fbq;
  delete window._fbq;
}

export function applyTrackingConsent(consent) {
  if (!consent) {
    unloadGoogleAnalytics();
    unloadMetaPixel();
    return;
  }

  if (consent.analytics) {
    loadGoogleAnalytics();
  } else {
    unloadGoogleAnalytics();
  }

  if (consent.marketing) {
    loadMetaPixel();
  } else {
    unloadMetaPixel();
  }
}
