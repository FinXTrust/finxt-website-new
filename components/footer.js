import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import FinxtLogo from './FinxtLogo';
import { openCookieSettings } from '../lib/cookieConsent';
import { organization } from '../data/organization';

const officeLabels = ['Leeds HQ', 'Spain', 'Poland', 'Americas network'];

const SOCIAL_ICONS = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
};

const socialIconBaseClass =
  'flex h-10 w-10 items-center justify-center rounded-full border transition';
const socialIconActiveClass =
  'border-finxt-gold/30 text-finxt-gold hover:bg-finxt-gold hover:text-finxt-navy';
const socialIconInactiveClass =
  'cursor-default border-finxt-gold/20 text-finxt-gold/45';

export default function Footer() {
  return (
    <footer className="finxt-section-rule-top relative bg-[#050912] px-6 py-12 text-white md:py-14">

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 border-b border-finxt-border pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16 xl:gap-24">
          <div className="max-w-md">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90" aria-label="FinXT home">
              <FinxtLogo size="md" />
            </Link>

            <p className="mt-4 text-sm leading-7 text-finxt-muted">
              Powering global programmes with precision, speed and scale.
              Trusted by world-class enterprises across the UK, Europe, and beyond.
            </p>

            <div className="mt-6 flex gap-3">
              {organization.socialProfiles.map(({ platform, label, url }) => {
                const Icon = SOCIAL_ICONS[platform];

                if (url) {
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`FinXT on ${label}`}
                      className={`${socialIconBaseClass} ${socialIconActiveClass}`}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  );
                }

                return (
                  <span
                    key={platform}
                    aria-label={`FinXT on ${label} (coming soon)`}
                    className={`${socialIconBaseClass} ${socialIconInactiveClass}`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                );
              })}
            </div>
          </div>

          <div className="lg:min-w-[240px] lg:pt-0.5 lg:text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7FA3] lg:text-right">
              Locations
            </p>

            <ul className="mt-5 space-y-3.5 lg:ml-auto lg:w-fit">
              {officeLabels.map((label) => (
                <li key={label} className="text-sm text-white/85">
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-xs text-xs leading-relaxed text-[#6B7FA3] lg:ml-auto lg:text-right">
              Full office details available on our{' '}
              <Link
                href="/contact"
                className="font-semibold text-finxt-gold/70 underline-offset-3 transition duration-200 hover:text-finxt-gold hover:underline"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-[#6B7FA3] lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} FinXT UK Ltd. All rights reserved.</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>

            <button
              type="button"
              onClick={openCookieSettings}
              className="text-left hover:text-white"
            >
              Cookie settings
            </button>

            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
