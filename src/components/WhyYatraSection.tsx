import { IMAGES } from '@/images';

export const WhyYatraSection = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gold font-grotesk">99</span> યાત્રા કેમ?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Image Card */}
            <div className="relative order-2 md:order-1 md:col-span-2">
              <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20"></div>
              <img
                src={IMAGES.bhagwan.bhagwan2}
                alt="99 યાત્રા કેમ?"
                className="relative rounded-lg shadow-gold w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up order-1 md:order-2 md:col-span-3">
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
                તે મહિમાને અનુભવી,
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                તેમણે પોતાના જીવનકાળમાં — પૂર્વ <span className="font-grotesk">99</span> વાર યાત્રા કરી।
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                અને આજ સુધી એ પરંપરા જીવંત છે —
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                જ્યાં યાત્રિકો કરે છે <span className="text-gold font-semibold font-grotesk">99</span> યાત્રા,
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed">
                જે માત્ર પગલાં નહીં,
              </p>
              <p className="font-cormorant text-xl md:text-2xl leading-relaxed italic">
                પરંતુ આત્મકલ્યાણનો અવિરત માર્ગ છે!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
