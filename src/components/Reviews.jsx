import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Aarav Sharma",
    role: "JEE Advanced 2025 - AIR 342",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The faculty at Catalyst completely transformed my approach to Physics. Their concept-first methodology helped me crack problems I never thought I could solve. Forever grateful!",
  },
  {
    name: "Priya Patel",
    role: "NEET 2025 - AIR 156",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Small batch sizes meant I got personal attention whenever I struggled with Biology concepts. The mentors here genuinely care about each student's success.",
  },
  {
    name: "Rohan Gupta",
    role: "JEE Main 2025 - 99.2 Percentile",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The rigorous testing schedule and detailed analytics helped me identify and work on my weak areas. Best decision I made was joining Catalyst in Class 11.",
  },
  {
    name: "Ananya Reddy",
    role: "Chemistry Olympiad - Gold Medal",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The depth of conceptual teaching here is unmatched. My Chemistry teacher made complex organic reactions feel like solving puzzles. Amazing learning experience!",
  },
  {
    name: "Vikram Singh",
    role: "NEET 2025 - AIR 89",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "From barely passing to topping my batch - Catalyst made it possible. The 1:1 mentorship sessions were game-changers for my preparation strategy.",
  },
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToReview = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#EF4444] font-bold tracking-widest uppercase text-xs">
            Student Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            What Our Students Say
          </h2>
          <p className="text-slate-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Real stories from real achievers who transformed their dreams into reality with Catalyst.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto px-8 sm:px-12">
          {/* Main Review Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-blue-100">
              <Quote size={40} className="sm:w-16 sm:h-16 md:w-20 md:h-20" strokeWidth={1} />
            </div>

            {/* Review Content */}
            <div className="relative z-10">
              <div className="flex flex-col items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Avatar */}
                <img
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                />

                {/* Name & Role */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-[#0090D4] font-semibold text-xs sm:text-sm">
                    {reviews[currentIndex].role}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mt-2 justify-center">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px] fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed italic text-center">
                "{reviews[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 text-slate-600 hover:text-[#0090D4] transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 text-slate-600 hover:text-[#0090D4] transition-all"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${index === currentIndex
                ? 'bg-[#0090D4] w-6 sm:w-8'
                : 'bg-slate-300 hover:bg-slate-400'
                }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {[
            { value: "500+", label: "Students Placed" },
            { value: "98%", label: "Success Rate" },
            { value: "50+", label: "Top 100 Ranks" },
            { value: "4.9/5", label: "Student Rating" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0090D4]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
