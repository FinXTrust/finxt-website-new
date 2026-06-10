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
    statusClass: 'text-emerald-400',
    description:
      'These cookies are essential for our website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without them.',
    locked: true,
  },
  {
    id: 'analytics',
    title: 'Analytics & Performance Cookies',
    status: 'Off by default',
    statusClass: 'text-[#C9A84C]',
    description:
      'These cookies allow us to count visits and understand how visitors interact with our website. All information collected is aggregated and anonymous. We use this data to improve how our website works.',
    locked: false,
  },
  {
    id: 'marketing',
    title: 'Marketing & Targeting Cookies',
    status: 'Off by default',
    statusClass: 'text-[#C9A84C]',
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
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
        checked ? 'bg-[#C9A84C]' : 'bg-white/20'
      } ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
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
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
    >
      <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0A0F1E] p-5 shadow-2xl md:p-6">
        {!showPreferences ? (
          <>
            <p className="text-sm leading-relaxed text-white/80 md:text-[0.9375rem]">
              We use cookies to improve your experience on our website, understand how it is
              used, and support our communications. You can accept all cookies, manage your
              preferences, or find out more in our{' '}
              <Link href="/cookie-policy" className="text-[#C9A84C] hover:underline">
                Cookie Policy
              </Link>
              .
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg border border-[#C9A84C] bg-[#050912] px-5 py-2.5 text-sm font-bold text-[#C9A84C] transition hover:bg-[#0A0F1E]"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="finxt-btn-secondary px-5 py-2.5 text-sm"
              >
                Manage preferences
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="text-sm text-white/60 underline-offset-2 transition hover:text-white hover:underline sm:ml-1"
              >
                Reject non-essential
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold text-white md:text-xl">Cookie preferences</h2>
            <p className="mt-2 text-sm text-white/65">
              Choose which cookies you allow. Strictly necessary cookies cannot be disabled.
            </p>

            <div className="mt-5 space-y-4">
              {CATEGORIES.map((category) => {
                const enabled = preferences[category.id];

                return (
                  <div
                    key={category.id}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-white">{category.title}</h3>
                        <p className={`mt-1 text-xs font-medium ${category.statusClass}`}>
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
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => savePreferences(preferences)}
                className="rounded-lg border border-[#C9A84C] bg-[#050912] px-5 py-2.5 text-sm font-bold text-[#C9A84C] transition hover:bg-[#0A0F1E]"
              >
                Save preferences
              </button>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/cookie-policy" className="text-[#C9A84C] hover:underline">
                  Cookie Policy
                </Link>
                <Link href="/privacy-policy" className="text-[#C9A84C] hover:underline">
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
