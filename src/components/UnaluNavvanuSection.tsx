export const UnaluNavvanuSection = () => {
  return (
    <section className="py-12 md:py-16 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
                <span className="text-gold">ઉનાળુ</span> નવ્વાણું યાત્રા
              </h2>
              
              <div className="space-y-4">
                <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-navy/90">
                  એક વિચાર....
                </p>
                <p className="font-cormorant text-2xl md:text-3xl leading-relaxed text-navy/90">
                  એક પરિવાર.....
                </p>
                <p className="font-cormorant text-3xl md:text-4xl leading-relaxed text-gold font-bold">
                  અને સર્જાઈ ગઈ એક દિવ્ય યાત્રા!!!!
                </p>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20"></div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-elegant border-2 border-gold/30 bg-black/20 backdrop-blur-sm">
                <iframe
                  src="https://www.youtube.com/embed/83R0-dXobgU"
                  title="Ghoghawala Parivar Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

