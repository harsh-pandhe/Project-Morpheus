import MatrixRain from '@/components/MatrixRain';
import CRTOverlay from '@/components/CRTOverlay';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DomainsSection from '@/components/DomainsSection';
import PrizeSection from '@/components/PrizeSection';
import TimelineSection from '@/components/TimelineSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed Matrix Rain Background */}
      <MatrixRain />
      
      {/* CRT Scanlines & Vignette Overlay */}
      <CRTOverlay />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <PrizeSection />
        <TimelineSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
