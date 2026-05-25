import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/aboutus', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/live-studies', label: 'Live Studies' },

  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2D50] bg-[#0A0F1E]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4C430] text-sm font-extrabold text-black shadow-md">
            FX
          </div>

          <div className="flex items-end gap-1">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Fin
              <span className="text-[#F4C430]">XT</span>
            </span>

            <span className="mb-0.5 text-xs font-light tracking-wide text-[#B8BDC7]">
              UK
            </span>
          </div>
        </Link>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                pathname === item.href ? 'bg-[#162444] text-white' : 'text-[#A9B6D3] hover:bg-[#162444] hover:text-white'
              }`}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
              pathname === '/contact'
                ? 'bg-[#162444] text-white'
                : 'text-[#A9B6D3] hover:bg-[#162444] hover:text-white'
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="border-t border-[#1E2D50] bg-[#0A0F1E] px-5 py-4 lg:hidden">
          {[...navItems, { href: '/contact', label: 'Contact Us' }].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-3 text-sm font-semibold ${
                pathname === item.href ? 'bg-[#162444] text-white' : 'text-[#A9B6D3]'
              }`}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
