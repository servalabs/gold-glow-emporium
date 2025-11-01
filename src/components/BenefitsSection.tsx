import { IMAGES } from '@/images';

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-navy mb-4">
              <span className="text-gold">99</span> યાત્રામાં શું મેળવશો???
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="space-y-6 animate-fade-in-up md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-elegant hover-lift">
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy">
                  શાશ્વત તીર્થના અદ્વિતીય સ્પર્શનો આનંદ...
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-elegant hover-lift">
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy">
                  અદ્ભુત એવા ભવ્યત્વની છાપ...
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-elegant hover-lift">
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy">
                  જિનઆગમ અને જિનપડિમા પ્રત્યે —
                </p>
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-gold font-semibold mt-2">
                  મેરુ પર્વત જેવી અડગ શ્રદ્ધા!
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-elegant hover-lift">
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy">
                  પ્રભુના ભક્ત બની,
                </p>
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy font-semibold mt-2">
                  શેષ જીવનનું સાચું સાફલ્ય પ્રાપ્ત કરશો।
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-elegant hover-lift">
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-navy">
                  અને ગુરુસંગે,
                </p>
                <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-gold italic mt-2">
                  વાંચના — વિહાર — વંદનાનું પવિત્ર વલોણું કરશો..
                </p>
              </div>
            </div>

            <div className="relative hover-3d md:col-span-3">
              <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20"></div>
              <img
                src={IMAGES.deraser.frontView}
                alt="99 યાત્રામાં શું મેળવશો"
                className="relative rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
