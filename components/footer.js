import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#C9A84C]/15 bg-[#050912] px-6 py-10 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-b border-[#1E2D50] pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4C430] text-sm font-extrabold text-black">
                FX
              </div>

              <div className="flex items-end gap-1">
                <span className="text-3xl font-extrabold tracking-tight text-white">
                  Fin<span className="text-[#F4C430]">XT</span>
                </span>
                <span className="mb-1 text-xs font-light tracking-[0.2em] text-[#B8BDC7]">
                  UK
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-7 text-[#A9B6D3]">
              Powering global programs with precision, speed and scale.
              Trusted by world-class enterprises across the UK, Europe, and beyond.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md border border-[#C9A84C]/40 px-3 py-1 text-xs font-bold text-[#F4C430]">
                🇬🇧 London HQ
              </span>

              <span className="rounded-md border border-[#C9A84C]/40 px-3 py-1 text-xs font-bold text-[#F4C430]">
                🇪🇺 European Network
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 text-[#F4C430] transition hover:bg-[#F4C430] hover:text-black">
                <FaFacebookF size={16} />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 text-[#F4C430] transition hover:bg-[#F4C430] hover:text-black">
                <FaInstagram size={16} />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A84C]/30 text-[#F4C430] transition hover:bg-[#F4C430] hover:text-black">
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 text-sm text-[#A9B6D3] sm:grid-cols-2 lg:min-w-[520px]">
            <div className="space-y-3">
              <p className="font-bold text-white">United Kingdom</p>

              <a href="mailto:info@finxt.uk" className="flex items-center gap-2 hover:text-white">
                ✉ info@finxt.uk
              </a>

              <a href="tel:+447837851544" className="flex items-center gap-2 hover:text-white">
                ☎ +44 7837 851 544
              </a>

              <p>📍 London, United Kingdom</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-white">United States</p>

              <div className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <p>30 N Gould St</p>
                  <p>Ste N</p>
                  <p>Sheridan, WY 82801</p>
                  <p>USA</p>
                </div>
              </div>

              <a href="tel:+13072962921" className="flex items-center gap-2 hover:text-white">
                ☎ +1 307 296 2921
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-5 text-xs text-[#6B7FA3] lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} FinXT UK Ltd. All rights reserved.</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>


          </div>
        </div>
      </div>
    </footer>
  );
}