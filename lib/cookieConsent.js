export const COOKIE_CONSENT_KEY = 'finxt-cookie-consent';

export const DEFAULT_PREFERENCES = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function readCookieConsent() {
  if (typeof window === 'undefined') return null;

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      timestamp: parsed.timestamp ?? null,
    };
  } catch {
    return null;
  }
}

export const COOKIE_CONSENT_UPDATED_EVENT = 'finxt:cookie-consent-updated';

export function writeCookieConsent(preferences) {
  if (typeof window === 'undefined') return;

  const consent = {
    necessary: true,
    analytics: Boolean(preferences.analytics),
    marketing: Boolean(preferences.marketing),
    timestamp: Date.now(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: consent })
  );
}

export const OPEN_COOKIE_SETTINGS_EVENT = 'finxt:open-cookie-settings';

export function openCookieSettings() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
