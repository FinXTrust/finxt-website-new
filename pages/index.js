import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import HeroSection from '../components/HeroSection';
import { pageSeo } from '../data/seo';
import ParticipantBanner from '../components/ParticipantBanner';
import AboutSection from '../components/AboutSection';
import CaseStudiesTeaser from '../components/CaseStudiesTeaser';
import SectorsSection from '../components/SectorsSection';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  return (
    <Layout>
      <PageHead {...pageSeo.home} />
      <HeroSection />
      <ParticipantBanner />
      <AboutSection />
      <ServicesSection />
      <SectorsSection />
      <CaseStudiesTeaser />
    </Layout>
  );
}
