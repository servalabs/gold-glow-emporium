import { useState } from 'react';
import { IMAGES } from '@/images';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

export const AboutSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <section id="about" className="py-24 bg-cream relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-navy mb-4">
                ગિરિરાજ <span className="text-gold">એટલે...</span>
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="space-y-6 animate-fade-in-up md:col-span-2">
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

              <div className="relative group animate-fade-in-up md:col-span-3">
                <div className="absolute -inset-4 bg-gradient-gold rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div 
                  className="relative rounded-lg shadow-elegant overflow-hidden cursor-zoom-in"
                  onClick={handleImageClick}
                >
                  <img
                    src={IMAGES.deraser.ultraTopView}
                    alt="Deraser Ultra Top View"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                      <ZoomIn className="w-5 h-5 text-navy" />
                      <span className="font-grotesk text-navy font-semibold text-sm">Click to Zoom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseZoom}
        >
          <button
            onClick={handleCloseZoom}
            className="absolute top-4 right-4 z-50 text-white hover:text-gold transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
            aria-label="Close zoom"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={IMAGES.deraser.ultraTopView}
              alt="Deraser Ultra Top View - Zoomed"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};
