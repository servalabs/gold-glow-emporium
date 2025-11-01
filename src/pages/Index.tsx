import { Header } from '@/components/Header';
import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/Hero';
import { UnaluNavvanuSection } from '@/components/UnaluNavvanuSection';
import { GuruSection } from '@/components/GuruSection';
import { AboutSection } from '@/components/AboutSection';
import { WhyYatraSection } from '@/components/WhyYatraSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { PreranaDataSection } from '@/components/PreranaDataSection';
import { Footer } from '@/components/Footer';
import { ScrollUp } from '@/components/ScrollUp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CustomCursor />
      <Hero />
      <UnaluNavvanuSection />
      <GuruSection />
      <AboutSection />
      <WhyYatraSection />
      <BenefitsSection />
      <PreranaDataSection />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Index;
