import Header from './Header';
import Footer from './footer';

export default function Layout({ children,showFooter = true }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1E] text-white">
      <Header />
      <main className="flex-grow w-full">{children}</main>
       {showFooter && <Footer />}
    </div>
  );
}
