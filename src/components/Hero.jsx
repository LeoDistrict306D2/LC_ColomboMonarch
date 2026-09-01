import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/siteData';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-navy">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 border border-gold/30 rounded mb-8 animate-fade-in">
              <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
              <span className="text-gold/90 text-xs font-semibold tracking-[0.2em] uppercase">Part of Lions International</span>
            </div>

            {/* Main Headline */}
            <div className="mb-8 min-h-[200px] lg:min-h-[240px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 absolute'
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-display italic text-gold/80 mb-4">
                    {slide.subtitle}
                  </p>
                  <p className="text-base text-white/60 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="group px-7 py-3.5 bg-gold text-navy hover:bg-gold-light transition-all duration-300 rounded font-semibold text-sm tracking-wide flex items-center gap-2 uppercase">
                Join Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
              <button className="px-7 py-3.5 border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-all duration-300 rounded font-semibold text-sm tracking-wide uppercase">
                Learn More
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full h-1.5 ${
                    index === currentSlide
                      ? 'w-8 bg-gold'
                      : 'w-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-14 h-14 border border-gold/30 rounded flex items-center justify-center">
                    <span className="text-xl font-display font-bold text-gold">LEO</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">Colombo Monarch</h3>
                    <p className="text-white/50 text-sm tracking-wide">Leadership &middot; Experience &middot; Opportunity</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '50+', label: 'Members' },
                    { value: '30+', label: 'Projects' },
                    { value: '1000+', label: 'Lives Touched' },
                    { value: '5', label: 'Years' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.03] border border-white/5 rounded p-4">
                      <p className="text-2xl font-display font-bold text-gold">{stat.value}</p>
                      <p className="text-white/50 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-white/50 text-sm leading-relaxed italic border-l-2 border-gold/30 pl-4">
                  "To Survive is to do the bare minimum. To Thrive is to innovate. To Survive is to follow the crowd. To Thrive is to lead it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/15 rounded flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/15 rounded flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
