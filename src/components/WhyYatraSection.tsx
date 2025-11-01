import { IMAGES } from '@/images';

export const WhyYatraSection = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gold">99</span> યાત્રા કેમ?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative hover-3d order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20"></div>
              <img
                src={IMAGES.home.whyYatra.palitana}
                alt="Palitana Yatra"
                className="relative rounded-lg shadow-gold w-full h-auto"
              />
            </div>

            <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                <span className="text-gold font-semibold">કારણ કે —</span>
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                ભગવાન શ્રી ઋષભદેવ જીએ
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                કેવળજ્ઞાનમાં જાણ્યો — શ્રી સિદ્ધાચલ મહાતીર્થનો અપરંપાર મહિમા!
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                તે મહિમાને અનુભવી, તેમણે પોતાના જીવનકાળમાં —
              </p>
              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-gold font-semibold">
                પૂર્વ 99 વાર યાત્રા કરી।
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                અને આજ સુધી એ પરંપરા જીવંત છે —
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                જ્યાં યાત્રિકો કરે છે <span className="text-gold font-semibold">99 યાત્રા</span>,
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed italic">
                જે માત્ર પગલાં નહીં, પરંતુ આત્મકલ્યાણનો અવિરત માર્ગ છે!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
