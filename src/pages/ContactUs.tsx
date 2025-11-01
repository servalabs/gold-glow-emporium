import { CustomCursor } from '@/components/CustomCursor';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-cream">
      <CustomCursor />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,143,71,0.1)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-cormorant text-5xl md:text-7xl font-bold mb-6">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 font-cormorant">
              We're here to answer your questions about the 99 Yatra pilgrimage
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white rounded-lg p-8 shadow-elegant hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-4 rounded-lg">
                    <Phone className="text-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-navy mb-3">
                      Phone
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+919167399499"
                        className="block text-lg text-navy/80 hover:text-gold transition-smooth"
                      >
                        9167 399 499
                      </a>
                      <a
                        href="tel:+919167599699"
                        className="block text-lg text-navy/80 hover:text-gold transition-smooth"
                      >
                        9167 599 699
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-4 rounded-lg">
                    <Mail className="text-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-navy mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:info@ghoghawala.com"
                      className="text-lg text-navy/80 hover:text-gold transition-smooth"
                    >
                      info@ghoghawala.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-4 rounded-lg">
                    <MapPin className="text-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-navy mb-3">
                      Address
                    </h3>
                    <p className="text-lg text-navy/80 leading-relaxed">
                      33 Dariyasthan Street,<br />
                      1st Floor, Office No 101,<br />
                      Masjid Bunder West,<br />
                      Mumbai 400003
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-4 rounded-lg">
                    <Clock className="text-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-navy mb-3">
                      Working Hours
                    </h3>
                    <p className="text-lg text-navy/80">
                      4:00 PM to 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-lg p-8 shadow-elegant">
                <h2 className="font-cormorant text-3xl font-bold text-navy mb-6">
                  Send us a <span className="text-gold">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-navy font-semibold mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-navy/20 focus:border-gold"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-navy font-semibold mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-navy/20 focus:border-gold"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border-navy/20 focus:border-gold"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-navy font-semibold mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-navy/20 focus:border-gold min-h-[150px]"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold text-lg py-6 shadow-gold transition-smooth hover:scale-105"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="mt-8 bg-navy text-white rounded-lg p-8 shadow-elegant">
                <h3 className="font-cormorant text-2xl font-semibold mb-4 text-gold">
                  Register for 99 Yatra
                </h3>
                <p className="mb-4 text-cream/90">
                  Ready to join us on this divine spiritual journey?
                </p>
                <Button
                  onClick={() => window.open('https://ghoghawala.com/TnC.aspx', '_blank')}
                  className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 transition-smooth hover:scale-105"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
