export const RegistrationSection = () => {
  return (
    <section
      id="unal-99-section"
      className="relative py-12 md:py-16 lg:py-20 text-white overflow-hidden"
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
            <span className="text-gold drop-shadow-[0_3px_10px_rgba(194,143,71,0.6)]">Shree Shasan Samrat Ashok Chandrodaya <span className="font-grotesk">Unalu 99</span></span>
          </h2>

          <h3 className="font-cormorant text-lg md:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span className="text-gold drop-shadow-[0_4px_12px_rgba(194,143,71,0.6)]">Ghoghawala Parivar Ghatkopar ( Sanghani Estate )</span>
          </h3>

          {/* Registration Notice */}
          <div className="my-6 md:my-8">
            <div className="bg-gold/20 backdrop-blur-sm border-2 border-gold/50 rounded-lg px-4 md:px-6 py-3 md:py-4 shadow-lg shadow-gold/30 animate-pulse">
              <p className="font-cormorant text-base md:text-lg lg:text-xl text-gold font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                📢 Registration will open on <span className="text-white">5th November at 11 AM</span>
              </p>
            </div>
          </div>

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
              <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                <p className="text-base md:text-lg">👥 Age Limit: 15-40 Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


