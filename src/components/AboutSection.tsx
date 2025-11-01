import { IMAGES } from '@/images';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-cream relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-navy mb-4">
              ગિરિરાજ <span className="text-gold">એટલે...</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          {/* Side-by-side Layout: Image on Left, Text on Right */}
          <div className="grid md:grid-cols-10 gap-8 items-center">
            {/* Image - Takes 7 columns (70%) */}
            <div className="md:col-span-7 animate-fade-in-up">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative rounded-lg shadow-elegant overflow-hidden">
                  <img
                    src={IMAGES.deraser.ultraTopView}
                    alt="Deraser Ultra Top View"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Text - Takes 3 columns (30%) */}
            <div className="md:col-span-3 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy/90">
                સાધનાની શાંત શક્તિનો આલય,
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy/90">
                અનંત સિધ્ધોની વાર્તાઓનો સાક્ષી।
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy/90">
                અનંતાનંત આત્માઓએ અહીંથી મેળવ્યો મોક્ષનો માર્ગ —
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-gold font-semibold">
                તીર્થોમાં તીર્થ, શ્રદ્ધામાં શ્રેષ્ઠ...
              </p>
              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-navy font-bold">
                તીર્થાધિરાજ — <span className="text-gold">ગિરિરાજ શત્રુંજય!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
