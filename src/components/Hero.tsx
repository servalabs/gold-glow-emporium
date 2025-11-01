import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '@/images';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    IMAGES.home.hero.slider.slide1,
    IMAGES.home.hero.slider.slide2,
    IMAGES.home.hero.slider.slide3,
  ];

  useEffect(() => {
    const getIntervalTime = (slideIndex: number) => {
      // Slide3 (index 2) stays for 5x longer (25 seconds)
      return slideIndex === 2 ? 25000 : 5000;
    };

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, getIntervalTime(currentSlide));

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleSlide3Click = () => {
    const section = document.getElementById('unal-99-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-auto md:min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-24 md:pt-28">
      {/* Background base color for any empty space - desktop only */}
      <div className="hidden md:block absolute inset-0 bg-navy" />
      
      {/* Mobile: Use img tags for proper height adjustment - container fits image */}
      <div className="relative w-full md:hidden bg-navy">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={index === 2 && index === currentSlide ? handleSlide3Click : undefined}
            className={`w-full transition-opacity duration-1000 ease-in-out z-10 ${
              index === currentSlide 
                ? 'opacity-100 relative' 
                : 'opacity-0 pointer-events-none absolute inset-0'
            } ${index === 2 && index === currentSlide ? 'cursor-pointer' : ''}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain"
              style={{
                filter: 'brightness(0.8)',
                WebkitFilter: 'brightness(0.8)',
              }}
            />
            {/* Overlay gradient for mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 pointer-events-none" />
          </div>
        ))}
      </div>
      
      {/* Desktop: Background images */}
      <div className="hidden md:block absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={index === 2 && index === currentSlide ? handleSlide3Click : undefined}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out z-10 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } ${index === 2 && index === currentSlide ? 'cursor-pointer' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('${slide}')`,
            }}
          />
        ))}
      </div>
      
      {/* Overlay Pattern - Allow pointer events to pass through when slide3 is active - Desktop only */}
      <div 
        className={`hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)] ${
          currentSlide === 2 ? 'pointer-events-none' : ''
        }`}
      />

      {/* Slider Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-[70%] md:top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-[70%] md:top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

      {/* Slide3 Intro Text and Button - Only visible when slide3 is active */}
      {currentSlide === 2 && (
        <div className="absolute inset-0 z-[15] flex items-end justify-end pr-4 md:pr-8 lg:pr-12 pb-24 md:pb-8 lg:pb-12">
          <div className="text-center max-w-[180px] md:max-w-sm lg:max-w-md animate-fade-in">
            <div className="bg-navy/90 backdrop-blur-md rounded-lg p-3 md:p-6 lg:p-7 border border-gold/30 shadow-2xl">
              <h3 className="font-cormorant text-sm md:text-xl lg:text-2xl font-bold text-gold mb-3 md:mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
                Shree Shasan Samrat Ashok Chandrodaya <span className="font-grotesk">Unalu 99</span>
              </h3>
              <p className="font-cormorant text-xs md:text-sm lg:text-base text-white/90 mb-3 md:mb-5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] leading-tight">
                Join us for the divine pilgrimage
              </p>
              <button
                onClick={handleSlide3Click}
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3.5 bg-gold text-navy font-semibold text-xs md:text-sm lg:text-base rounded-lg hover:bg-gold/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 border border-gold/60 w-full"
              >
                <span>Learn More</span>
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
