import { IMAGES } from '@/images';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-navy mb-4">
              ગિરિરાજ <span className="text-gold">એટલે...</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-navy/90">
                સાધનાની શાંત શક્તિનો આલય,
              </p>
              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-navy/90">
                અનંત સિધ્ધોની વાર્તાઓનો સાક્ષી।
              </p>
              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-navy/90">
                અનંતાનંત આત્માઓએ અહીંથી મેળવ્યો મોક્ષનો માર્ગ —
              </p>
              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-gold font-semibold">
                તીર્થોમાં તીર્થ, શ્રદ્ધામાં શ્રેષ્ઠ...
              </p>
              <p className="font-cormorant text-3xl md:text-4xl leading-relaxed text-navy font-bold">
                તીર્થાધિરાજ — <span className="text-gold">ગિરિરાજ શત્રુંજય!</span>
              </p>
            </div>

            <div className="relative hover-3d">
              <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20"></div>
              <img
                src={IMAGES.home.about.temple}
                alt="Shatrunjaya Temple"
                className="relative rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
