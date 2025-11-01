import { Mail, Phone, MapPin, Clock } from 'lucide-react';
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

export const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919167799899';
    const message = 'I am interested in 99 yatra and am contacting through website';
    // Using api.whatsapp.com format which handles pre-filled messages better
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@ghoghawala.com', '_blank');
  };

  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy to-navy/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Brand Section */}
          <div className="text-center md:text-left animate-fade-in-up">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={IMAGES.logo.parivar} 
                  alt="Ghoghawala Logo" 
                  className="relative w-24 h-24 md:w-28 md:h-28 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
            </div>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gold mb-3">
              Ghoghawala Parivar
            </h3>
            <p className="font-grotesk text-cream/80 text-base leading-relaxed mb-6">
              Ghatkopar (Sanghani Estate)
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <button
                onClick={handleEmailClick}
                className="group relative p-3 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-lg hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="group relative p-3 bg-[#25D366]/10 backdrop-blur-sm border border-[#25D366]/30 rounded-lg hover:border-[#25D366]/50 hover:bg-[#25D366]/20 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-[#25D366] transition-colors" />
              </button>
            </div>
          </div>

          {/* Contact - Phone */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-playfair text-xl font-semibold text-gold mb-6 flex items-center gap-3 pb-3 border-b border-gold/20">
              <div className="p-2 bg-gold/10 rounded-lg">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <span>Contact</span>
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+919167399499"
                className="group flex items-center gap-3 text-cream/90 hover:text-gold transition-all duration-300 hover:translate-x-1"
              >
                <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="font-grotesk text-base">9167 399 499</span>
              </a>
              <a 
                href="tel:+919167599699"
                className="group flex items-center gap-3 text-cream/90 hover:text-gold transition-all duration-300 hover:translate-x-1"
              >
                <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="font-grotesk text-base">9167 599 699</span>
              </a>
            </div>
          </div>

          {/* Contact - Email */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-playfair text-xl font-semibold text-gold mb-6 flex items-center gap-3 pb-3 border-b border-gold/20">
              <div className="p-2 bg-gold/10 rounded-lg">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <span>Email</span>
            </h4>
            <a 
              href="mailto:info@ghoghawala.com"
              className="group inline-flex items-center gap-2 text-cream/90 hover:text-gold transition-all duration-300 hover:translate-x-1"
            >
              <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-grotesk text-base break-all">info@ghoghawala.com</span>
            </a>
          </div>

          {/* Address */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-playfair text-xl font-semibold text-gold mb-6 flex items-center gap-3 pb-3 border-b border-gold/20">
              <div className="p-2 bg-gold/10 rounded-lg">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <span>Location</span>
            </h4>
            <div className="text-cream/80 leading-relaxed font-grotesk">
              <p className="mb-1">33 Dariyasthan Street,</p>
              <p className="mb-1">1st Floor, Office No 101,</p>
              <p className="mb-1">Masjid Bunder West,</p>
              <p className="text-gold font-medium">Mumbai 400003</p>
            </div>
          </div>
        </div>

        {/* Working Hours & Copyright */}
        <div className="pt-12 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-cream/80 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-gold/10">
              <Clock className="w-5 h-5 text-gold" />
              <span className="font-grotesk text-sm md:text-base">
                Working Hours: <span className="text-gold font-semibold">4:00 PM to 6:00 PM</span>
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="font-grotesk text-cream/60 text-sm mb-1">
                © Copyright 2026 - All Rights Reserved
              </p>
              <p className="font-grotesk text-cream/50 text-xs">
                Ghoghawala Parivar
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
