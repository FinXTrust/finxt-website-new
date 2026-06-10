import { useEffect } from 'react';
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  readCookieConsent,
} from '../lib/cookieConsent';
import { applyTrackingConsent } from '../lib/trackingScripts';

export default function ConsentManager() {
  useEffect(() => {
    const syncTracking = (consent) => {
      applyTrackingConsent(consent ?? readCookieConsent());
    };

    syncTracking(readCookieConsent());

    const handleConsentUpdate = (event) => {
      syncTracking(event.detail);
    };

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdate);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdate);
    };
  }, []);

  return null;
}
