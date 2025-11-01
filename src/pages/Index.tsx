import { Header } from '@/components/Header';
import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/Hero';
import { UnaluNavvanuSection } from '@/components/UnaluNavvanuSection';
import { GuruSection } from '@/components/GuruSection';
import { AboutSection } from '@/components/AboutSection';
import { WhyYatraSection } from '@/components/WhyYatraSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { Footer } from '@/components/Footer';

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
      <Footer />
    </div>
  );
};

export default Index;
