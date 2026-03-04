import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: '/hero/saraswati.png',
    alt: 'Saraswati Puja Celebration',
    link: null
  },
  {
    url: '/hero/courses.png',
    alt: 'Our Courses Overview',
    link: '/courses'
  },
  {
    url: '/hero/knowledge.png',
    alt: 'Knowledge Corner',
    link: '/knowledge-corner'
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
    <section id="home" className="w-full bg-white flex justify-center pb-3 sm:pb-10 pt-2 sm:pt-4">
      <div className="relative w-full max-w-[1400px] h-[200px] sm:h-[380px] md:h-[450px] lg:h-[550px] flex items-center justify-center text-center overflow-hidden bg-white">
        {/* Background Image Slider */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
          >
            <div
              className={`w-full h-full bg-white ${image.link ? 'cursor-pointer' : ''}`}
              style={{
                backgroundImage: `url('${image.url}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              onClick={() => image.link && navigate(image.link)}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 sm:bottom-6 z-20 flex gap-1.5 sm:gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${index === currentSlide
                ? 'bg-blue-600 w-6 sm:w-8 shadow-sm'
                : 'bg-slate-300 hover:bg-slate-400 shadow-sm'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
