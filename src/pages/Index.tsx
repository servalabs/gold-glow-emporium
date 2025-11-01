import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { WhyYatraSection } from '@/components/WhyYatraSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { GuruSection } from '@/components/GuruSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Hero />
      <AboutSection />
      <WhyYatraSection />
      <BenefitsSection />
      <GuruSection />
      <Footer />
    </div>
  );
};

export default Index;
