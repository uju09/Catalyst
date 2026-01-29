import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80',
    alt: 'Students in classroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80',
    alt: 'Students studying together'
  },
  {
    url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1920&q=80',
    alt: 'Graduation celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
    alt: 'Science laboratory'
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  return (
    <section id="home" className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image Slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 144, 212, 0.85), rgba(0, 15, 30, 0.8)), url('${image.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide
              ? 'bg-white w-8'
              : 'bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-white relative z-10">
        <p className="font-serif italic text-blue-100 mb-4 text-lg md:text-xl tracking-wide">
          "नास्ति ज्ञानसमं तेजः।।"
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
          There is no brilliance <br />equal to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">knowledge.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
          Shaping the next generation of scientific thinkers. The definitive roadmap to IIT-JEE, NEET & Olympiad success.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-[#0090D4] font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl transform hover:-translate-y-1"
          >
            Book Free Counselling
          </a>
          <a
            href="#programs"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0090D4] transition-all shadow-xl transform hover:-translate-y-1"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
};
