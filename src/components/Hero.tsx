import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://www.vimalsales.com/ghoghawala99/assets/images/gregretge-1627x1128.png')`,
        }}
      />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <img 
              src="https://www.vimalsales.com/ghoghawala99/assets/images/mbnlkj-999x776.png" 
              alt="Ghoghawala Logo" 
              className="w-32 h-32 mx-auto mb-8"
            />
          </div>
          
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            <span className="text-gold">Ghoghawala</span> Parivar
          </h1>
          
          <p className="font-cormorant text-2xl md:text-3xl text-cream mb-2">
            Ghatkopar (Sanghani Estate)
          </p>

          <div className="my-8 space-y-2">
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              શ્રી શાસન સમ્રાટ અશોક ચંદ્રોદય – <span className="text-gold">ઉનાળુ ૯૯</span>
            </h2>
            <h3 className="font-cormorant text-2xl md:text-3xl text-cream/90">
              શ્રી સિદ્ધ ગિરિરાજ ૯૯ યાત્રા અનુષ્ઠાન
            </h3>
          </div>

          <div className="flex flex-col items-center gap-4 my-8">
            <div className="bg-navy/80 backdrop-blur-md px-8 py-4 rounded-lg border border-gold/30 shadow-gold">
              <p className="text-gold font-semibold text-xl">11th Year</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-lg">🗓 11th April, 2026</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-lg">📍 Oswal Yatrik Bhavan, Palitana</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold text-lg px-8 py-6 shadow-gold transition-smooth hover:scale-105"
              onClick={() => window.open('https://ghoghawala.com/TnC.aspx', '_blank')}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold text-lg px-8 py-6 transition-smooth hover:scale-105"
              onClick={() => window.open('https://youtu.be/83R0-dXobgU', '_blank')}
            >
              Watch Video
            </Button>
          </div>

          <button 
            onClick={scrollToSection}
            className="mt-16 animate-bounce inline-block text-gold hover:text-gold-light transition-smooth"
            aria-label="Scroll to content"
          >
            <ArrowDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};
