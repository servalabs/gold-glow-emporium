import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/images';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '919167799899';
    const message = 'I am interested in 99 yatra and am contacting through website';
    // Using api.whatsapp.com format which handles pre-filled messages better
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out will-change-transform ${
          isScrolled
            ? 'bg-navy/98 backdrop-blur-xl shadow-2xl py-3 border-b border-gold/10'
            : 'bg-transparent py-6'
        }`}
        style={{
          transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Glass morphism background overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/98 to-navy/95 transition-opacity duration-500 ease-out ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={IMAGES.logo.parivar}
                  alt="Ghoghawala Logo"
                  className="relative w-14 h-14 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-playfair text-xl md:text-2xl lg:text-3xl font-bold leading-tight group-hover:text-gold-light transition-colors ${
                  isScrolled ? 'text-gold' : 'text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                }`}>
                  Ghoghawala
                </span>
                <span className={`font-grotesk text-[10px] md:text-xs tracking-wider uppercase ${
                  isScrolled ? 'text-white/70' : 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'
                }`}>
                  Parivar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-6">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="relative group ml-2 px-4 py-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg font-grotesk font-semibold text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/50 flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <WhatsAppIcon className="w-4 h-4 relative z-10" />
                <span className="relative z-10 hidden lg:inline">WhatsApp</span>
                <span className="relative z-10 lg:hidden">WA</span>
              </button>
            </nav>

            {/* Mobile WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className={`md:hidden relative z-10 p-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#25D366]/50 ${
                isScrolled ? '' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
              }`}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

