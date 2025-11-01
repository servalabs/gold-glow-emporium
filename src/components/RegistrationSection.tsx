export const RegistrationSection = () => {
  return (
    <section
      className="relative py-24 md:py-28 lg:py-32 text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('https://server-assets.b-cdn.net/web/ghogha/Registration%20Background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] px-4">
            Shree Shasan Samrat Ashok Chandroday – <span className="text-gold drop-shadow-[0_3px_10px_rgba(194,143,71,0.6)]">Summer <span className="font-grotesk">૯૯</span></span>
          </h2>

          <h3 className="font-cormorant text-lg md:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span className="text-gold drop-shadow-[0_4px_12px_rgba(194,143,71,0.6)]">Ghoghawala</span> Parivar
          </h3>

          <p className="font-cormorant text-base md:text-xl mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold">
            Ghatkopar (Sanghani Estate)
          </p>

          <div className="my-6 md:my-8 space-y-2">
            <h4 className="font-cormorant text-xl md:text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium px-4">
              શ્રી સિદ્ધ ગિરિરાજ ૯૯ યાત્રા અનુષ્ઠાન
            </h4>
          </div>

          <div className="flex flex-col items-center gap-4 my-6 md:my-8">
            <div className="bg-navy/80 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-lg border border-gold/30 shadow-gold">
              <p className="text-gold font-semibold text-lg md:text-xl">11th Year</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                <p className="text-base md:text-lg">🗓 11th April, 2026</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                <p className="text-base md:text-lg">📍 Oswal Yatrik Bhavan, Palitana</p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <a
              href="https://ghoghawala.com/TnC.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-md bg-gold text-navy font-semibold shadow-elegant border border-gold/60 hover:bg-gold/90 hover:shadow-gold transition-smooth"
              aria-label="Register Now"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


