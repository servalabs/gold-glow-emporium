import { IMAGES } from '@/images';

export const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-cream relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-navy mb-4">
              <span className="text-gold font-grotesk">૯૯</span> યાત્રામાં શું મેળવશો???
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          {/* Side-by-side Layout: Text on Left, Image on Right */}
          <div className="grid md:grid-cols-10 gap-8 items-center">
            {/* Text - Takes 3 columns (30%) */}
            <div className="md:col-span-3 space-y-4 animate-fade-in-up order-2 md:order-1">
              <div>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-navy">
                  શાશ્વત તીર્થના અદ્વિતીય સ્પર્શનો આનંદ...
                </p>
              </div>

              <div>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-navy">
                  અદ્ભુત એવા ભવ્યત્વની છાપ...
                </p>
              </div>

              <div>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-navy">
                  જિનઆગમ અને જિનપડિમા પ્રત્યે —
                </p>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-gold font-semibold mt-2">
                  મેરુ પર્વત જેવી અડગ શ્રદ્ધા!
                </p>
              </div>

              <div>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-navy">
                  પ્રભુના ભક્ત બની,
                </p>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-navy font-semibold mt-2">
                  શેષ જીવનનું સાચું સાફલ્ય પ્રાપ્ત કરશો।
                </p>
              </div>

              <div>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-navy">
                  અને ગુરુસંગે,
                </p>
                <p className="font-cormorant text-lg md:text-xl leading-relaxed text-gold italic mt-2">
                  વાંચના — વિહાર — વંદનાનું પવિત્ર વલોણું કરશો..
                </p>
              </div>
            </div>

            {/* Image - Takes 7 columns (70%) */}
            <div className="md:col-span-7 animate-fade-in-up order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20"></div>
                <div className="relative rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src={IMAGES.deraser.frontView}
                    alt="૯૯ યાત્રામાં શું મેળવશો"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
