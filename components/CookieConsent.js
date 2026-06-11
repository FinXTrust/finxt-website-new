import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  DEFAULT_PREFERENCES,
  OPEN_COOKIE_SETTINGS_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from '../lib/cookieConsent';

const CATEGORIES = [
  {
    id: 'necessary',
    title: 'Strictly Necessary Cookies',
    status: 'Always on (cannot be disabled)',
    statusClass: 'finxt-cookie-category-status--on',
    description:
      'These cookies are essential for our website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without them.',
    locked: true,
  },
  {
    id: 'analytics',
    title: 'Analytics & Performance Cookies',
    status: 'Off by default',
    statusClass: 'finxt-cookie-category-status--optional',
    description:
      'These cookies allow us to count visits and understand how visitors interact with our website. All information collected is aggregated and anonymous. We use this data to improve how our website works.',
    locked: false,
  },
  {
    id: 'marketing',
    title: 'Marketing & Targeting Cookies',
    status: 'Off by default',
    statusClass: 'finxt-cookie-category-status--optional',
    description:
      'These cookies may be set by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but work by uniquely identifying your browser.',
    locked: false,
  },
];

function Toggle({ checked, disabled, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={[
        'finxt-cookie-toggle',
        checked ? 'finxt-cookie-toggle--on' : '',
        disabled ? 'finxt-cookie-toggle--disabled' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="finxt-cookie-toggle-thumb" />
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = readCookieConsent();
    if (!stored) {
      setVisible(true);
      return;
    }

    setPreferences({
      necessary: true,
      analytics: stored.analytics,
      marketing: stored.marketing,
    });
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      const stored = readCookieConsent();
      if (stored) {
        setPreferences({
          necessary: true,
          analytics: stored.analytics,
          marketing: stored.marketing,
        });
      }
      setShowPreferences(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  const savePreferences = (nextPreferences) => {
    writeCookieConsent(nextPreferences);
    setPreferences(nextPreferences);
    setShowPreferences(false);
    setVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  };

  const handleRejectNonEssential = () => {
    savePreferences(DEFAULT_PREFERENCES);
  };

  if (!visible) return null;

  return (
    <div className="finxt-cookie-overlay" role="presentation">
      <div
        className={[
          'finxt-cookie-modal',
          showPreferences ? 'finxt-cookie-modal--preferences' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="dialog"
        aria-label={showPreferences ? 'Cookie preferences' : 'Cookie consent'}
        aria-modal="true"
      >
        {!showPreferences ? (
          <>
            <h2 className="finxt-cookie-modal-title">We use cookies</h2>

            <div className="finxt-cookie-modal-copy">
              <p>
                We use cookies to improve your experience on our website, understand how it is
                used, and support our communications.
              </p>
              <p>
                You can accept all cookies, manage your preferences, or find out more in our{' '}
                <Link href="/cookie-policy" className="finxt-cookie-modal-link-inline">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className="finxt-cookie-modal-link-inline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="finxt-cookie-modal-actions">
              <div className="finxt-cookie-modal-actions-primary">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="finxt-btn-primary finxt-cookie-modal-action-btn"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="finxt-cookie-modal-reject finxt-cookie-modal-action-btn"
                >
                  Reject non-essential
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="finxt-cookie-modal-link finxt-cookie-modal-manage"
              >
                Manage preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="finxt-cookie-modal-title">Cookie preferences</h2>
            <p className="finxt-cookie-modal-lead">
              Choose which cookies you allow. Strictly necessary cookies cannot be disabled.
            </p>

            <div className="finxt-cookie-category-list">
              {CATEGORIES.map((category) => {
                const enabled = preferences[category.id];

                return (
                  <div key={category.id} className="finxt-cookie-category">
                    <div className="finxt-cookie-category-head">
                      <div>
                        <h3 className="finxt-cookie-category-title">{category.title}</h3>
                        <p className={`finxt-cookie-category-status ${category.statusClass}`}>
                          {category.status}
                        </p>
                      </div>
                      <Toggle
                        checked={enabled}
                        disabled={category.locked}
                        label={`${category.title} toggle`}
                        onChange={(value) =>
                          setPreferences((current) => ({
                            ...current,
                            [category.id]: value,
                          }))
                        }
                      />
                    </div>
                    <p className="finxt-cookie-category-copy">{category.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="finxt-cookie-modal-footer">
              <button
                type="button"
                onClick={() => savePreferences(preferences)}
                className="finxt-btn-primary finxt-cookie-modal-action-btn"
              >
                Save preferences
              </button>

              <div className="finxt-cookie-modal-policy-links">
                <Link href="/cookie-policy" className="finxt-cookie-modal-link-inline">
                  Cookie Policy
                </Link>
                <Link href="/privacy-policy" className="finxt-cookie-modal-link-inline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
