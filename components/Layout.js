import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './footer';
import CookieConsent from './CookieConsent';
import ConsentManager from './ConsentManager';
import StructuredData from './StructuredData';

function scrollToHash(hash) {
  if (!hash) return;

  const id = decodeURIComponent(hash);
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Layout({ children, showFooter = true }) {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const hash = router.asPath.split('#')[1];
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToHash(hash), 150);

    return () => window.clearTimeout(timer);
  }, [router.isReady, router.asPath]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1E] text-white">
      <StructuredData />
      <Header />
      <main className="flex-grow w-full">{children}</main>
      {showFooter && <Footer />}
      <ConsentManager />
      <CookieConsent />
    </div>
  );
}
