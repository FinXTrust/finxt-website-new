import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FinxtLogo from './FinxtLogo';
import LiveStudiesAnnouncement from './LiveStudiesAnnouncement';

export default function Header() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const showLiveStudiesBar = pathname !== '/live-studies';

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/aboutus', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/live-studies', label: 'Live Studies', highlight: true },
  ];

  const linkClass = (href, highlight = false) => {
    const isActive = pathname === href;

    if (highlight) {
      return `inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition ${
        isActive
          ? 'bg-finxt-gold text-finxt-navy shadow-[0_0_20px_rgba(201,168,76,0.25)]'
          : 'border border-finxt-gold/50 bg-finxt-gold/15 text-finxt-gold-light hover:border-finxt-gold hover:bg-finxt-gold/25'
      }`;
    }

    return `rounded-md px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-finxt-navy-3 text-white'
        : 'text-finxt-muted hover:bg-finxt-navy-3 hover:text-white'
    }`;
  };

  return (
    <div className="sticky top-0 z-50">
      {showLiveStudiesBar && <LiveStudiesAnnouncement />}

      <header className="border-b border-finxt-border bg-finxt-navy/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="transition-opacity hover:opacity-90" aria-label="FinXT home">
          <FinxtLogo size="sm" />
        </Link>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href, item.highlight)}
            >
              {item.label}
              {item.badge && (
                <span className="rounded bg-finxt-navy/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-finxt-gold-light">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          <Link href="/contact" className={linkClass('/contact')}>
            Contact Us
          </Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="border-t border-finxt-border bg-finxt-navy px-5 py-4 lg:hidden">
          {[...navItems, { href: '/contact', label: 'Contact Us' }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold ${
                pathname === item.href
                  ? item.highlight
                    ? 'bg-finxt-gold text-finxt-navy'
                    : 'bg-finxt-navy-3 text-white'
                  : item.highlight
                    ? 'text-finxt-gold-light'
                    : 'text-finxt-muted'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    pathname === item.href
                      ? 'bg-finxt-navy/15 text-finxt-navy'
                      : 'bg-finxt-gold/20 text-finxt-gold-light'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      )}
      </header>
    </div>
  );
}
