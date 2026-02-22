import { Star, Quote } from 'lucide-react';

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

// Duplicate 4 times so we have enough content to fill large screens,
// and scrolling 50% will be a clean loop.
const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

export const Reviews = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
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
      </div>

      {/* Marquee Section */}
      <div className="relative flex overflow-hidden w-full group py-4">
        {/* Gradients removed for higher edge-to-edge opacity as requested */}

        <div className="flex space-x-6 sm:space-x-8 animate-marquee pl-6 sm:pl-8 max-w-none w-max">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[350px] md:w-[400px] bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <Quote size={24} className="text-blue-100 mb-4" strokeWidth={2} />
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                    {review.name}
                  </h3>
                  <p className="text-[#0090D4] font-semibold text-xs sm:text-sm">
                    {review.role}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
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
