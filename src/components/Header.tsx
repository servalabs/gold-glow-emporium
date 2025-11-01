import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-elegant py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://www.vimalsales.com/ghoghawala99/assets/images/mbnlkj-999x776.png"
              alt="Ghoghawala Logo"
              className="w-12 h-12 transition-transform group-hover:scale-110"
            />
            <span className="font-cormorant text-2xl md:text-3xl font-bold text-gold hidden sm:block">
              Ghoghawala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-sans text-lg transition-smooth relative ${
                isActive('/')
                  ? 'text-gold font-semibold'
                  : 'text-white hover:text-gold'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`font-sans text-lg transition-smooth relative ${
                isActive('/contact')
                  ? 'text-gold font-semibold'
                  : 'text-white hover:text-gold'
              }`}
            >
              Contact Us
              {isActive('/contact') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold"></span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold transition-smooth p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4 border-t border-gold/20 pt-4">
            <Link
              to="/"
              className={`font-sans text-lg transition-smooth ${
                isActive('/')
                  ? 'text-gold font-semibold'
                  : 'text-white hover:text-gold'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`font-sans text-lg transition-smooth ${
                isActive('/contact')
                  ? 'text-gold font-semibold'
                  : 'text-white hover:text-gold'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
