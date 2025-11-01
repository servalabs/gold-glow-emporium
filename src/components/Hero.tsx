import { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '@/images';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    IMAGES.home.hero.slider.slide1,
    IMAGES.home.hero.slider.slide2,
    IMAGES.home.hero.slider.slide3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slider Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${slide}')`,
          }}
        />
      ))}
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />

      {/* Slider Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-gold'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24 md:pt-32 lg:pt-40">
        <div className="animate-fade-in-up">
          <h2 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] px-4">
            Shree Shasan Samrat Ashok Chandroday – <span className="text-gold drop-shadow-[0_3px_10px_rgba(194,143,71,0.6)]">Summer <span className="font-grotesk">૯૯</span></span>
          </h2>
          
          <h1 className="font-cormorant text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span className="text-gold drop-shadow-[0_4px_12px_rgba(194,143,71,0.6)]">Ghoghawala</span> <span className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Parivar</span>
          </h1>
          
          <p className="font-cormorant text-lg md:text-xl text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold">
            Ghatkopar (Sanghani Estate)
          </p>

          <div className="my-8 space-y-2">
            <h3 className="font-cormorant text-2xl md:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium px-4">
              શ્રી સિદ્ધ ગિરિરાજ ૯૯ યાત્રા અનુષ્ઠાન
            </h3>
          </div>

          <div className="flex flex-col items-center gap-4 my-8">
            <div className="bg-navy/80 backdrop-blur-md px-8 py-4 rounded-lg border border-gold/30 shadow-gold">
              <p className="text-gold font-semibold text-xl">11th Year</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-lg">🗓 11th April, 2026</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-lg">📍 Oswal Yatrik Bhavan, Palitana</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToSection}
            className="mt-16 animate-bounce inline-block text-gold hover:text-gold-light transition-smooth"
            aria-label="Scroll to content"
          >
            <ArrowDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};
