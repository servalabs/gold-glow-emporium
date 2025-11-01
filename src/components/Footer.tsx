import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src="https://www.vimalsales.com/ghoghawala99/assets/images/mbnlkj-999x776.png" 
                alt="Ghoghawala Logo" 
                className="w-20 h-20"
              />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-gold mb-2">
              Ghoghawala Parivar
            </h3>
            <p className="text-cream/80">
              Ghatkopar (Sanghani Estate)
            </p>
          </div>

          <div>
            <h4 className="font-cormorant text-xl font-semibold text-gold mb-4 flex items-center gap-2">
              <Phone size={20} />
              Phone
            </h4>
            <div className="space-y-2">
              <a 
                href="tel:+919167399499" 
                className="block hover:text-gold transition-smooth"
              >
                9167 399 499
              </a>
              <a 
                href="tel:+919167599699" 
                className="block hover:text-gold transition-smooth"
              >
                9167 599 699
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cormorant text-xl font-semibold text-gold mb-4 flex items-center gap-2">
              <Mail size={20} />
              Email
            </h4>
            <a 
              href="mailto:info@ghoghawala.com" 
              className="hover:text-gold transition-smooth"
            >
              info@ghoghawala.com
            </a>
          </div>

          <div>
            <h4 className="font-cormorant text-xl font-semibold text-gold mb-4 flex items-center gap-2">
              <MapPin size={20} />
              Address
            </h4>
            <p className="text-cream/80 leading-relaxed">
              33 Dariyasthan Street,<br />
              1st Floor, Office No 101,<br />
              Masjid Bunder West,<br />
              Mumbai 400003
            </p>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-cream/80">
              <Clock size={18} />
              <span>Working Hours: 4:00 PM to 6:00 PM</span>
            </div>
            <p className="text-cream/60 text-sm">
              © Copyright 2026 - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
