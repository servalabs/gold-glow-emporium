import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919167399499', '_blank');
  };

  const handleRegisterClick = () => {
    window.open('https://ghoghawala.com/Enroll.aspx', '_blank');
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
              <Link
                to="/"
                className={`relative px-4 py-2 font-grotesk text-base lg:text-lg font-medium transition-all duration-300 ${
                  isActive('/')
                    ? 'text-gold'
                    : isScrolled 
                      ? 'text-white/90 hover:text-gold' 
                      : 'text-white hover:text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'
                }`}
              >
                <span className="relative z-10">Home</span>
                {isActive('/') && (
                  <>
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></span>
                    <span className="absolute inset-0 bg-gold/5 rounded-md"></span>
                  </>
                )}
                <span className="absolute inset-0 bg-gold/5 rounded-md opacity-0 hover:opacity-100 transition-opacity"></span>
              </Link>
              
              <Link
                to="/contact"
                className={`relative px-4 py-2 font-grotesk text-base lg:text-lg font-medium transition-all duration-300 ${
                  isActive('/contact')
                    ? 'text-gold'
                    : isScrolled 
                      ? 'text-white/90 hover:text-gold' 
                      : 'text-white hover:text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'
                }`}
              >
                <span className="relative z-10">Contact</span>
                {isActive('/contact') && (
                  <>
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></span>
                    <span className="absolute inset-0 bg-gold/5 rounded-md"></span>
                  </>
                )}
                <span className="absolute inset-0 bg-gold/5 rounded-md opacity-0 hover:opacity-100 transition-opacity"></span>
              </Link>

              {/* Register Now Button */}
              <button
                onClick={handleRegisterClick}
                className="relative group ml-2 px-4 py-2 bg-gradient-to-r from-gold to-gold/80 text-navy rounded-lg font-grotesk font-semibold text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/50 flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Register Now</span>
              </button>

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

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden relative z-10 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 ${
                isScrolled 
                  ? 'text-white hover:text-gold' 
                  : 'text-white hover:text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-navy/98 backdrop-blur-xl border-t border-gold/10 overflow-hidden transition-all duration-500 ${
              isMobileMenuOpen
                ? 'max-h-96 opacity-100 shadow-2xl'
                : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col py-4">
              <Link
                to="/"
                className={`px-6 py-3 font-grotesk text-lg font-medium transition-all duration-300 ${
                  isActive('/')
                    ? 'text-gold bg-gold/10 border-l-4 border-gold'
                    : 'text-white hover:text-gold hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className={`px-6 py-3 font-grotesk text-lg font-medium transition-all duration-300 ${
                  isActive('/contact')
                    ? 'text-gold bg-gold/10 border-l-4 border-gold'
                    : 'text-white hover:text-gold hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  handleRegisterClick();
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-navy rounded-lg font-grotesk font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Register Now
              </button>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg font-grotesk font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Floating WhatsApp Button (Mobile only) */}
      <a
        href="https://wa.me/919167399499"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:hidden z-40 w-14 h-14 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-float"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </>
  );
};
