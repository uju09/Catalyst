import React from 'react';
import { ResultCard } from './ResultCard';

const studentResults = [
  {
    name: "Aarav Sharma",
    rank: "JEE Advanced 2025 - AIR 342",
    college: "IIT DELHUI",
    branch: "Computer Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Siddharth Kumar",
    rank: "JEE Main 2025 - 99.9%ile",
    college: "IIT BOMBAY",
    branch: "Computer Science",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Priya Patel",
    rank: "NEET 2025 - AIR 156",
    college: "AIIMS DELHI",
    branch: "MBBS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rohan Gupta",
    rank: "JEE Main 2025 - 99.2%ile",
    college: "NIT TRICHY",
    branch: "Electronics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ananya Reddy",
    rank: "Chemistry Olympiad Gold",
    college: "IISC BANGALORE",
    branch: "Research",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  }
];

// Duplicate 4 times so we have enough content to fill large screens and cleanly loop 50%
const duplicatedResults = [...studentResults, ...studentResults, ...studentResults, ...studentResults];

export const Reviews = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Inject Fonts for the Result Card */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-display { font-family: 'Outfit', sans-serif; }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#EF4444] font-bold tracking-widest uppercase text-xs">
            Student Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            Our Hall of Fame
          </h2>
          <p className="text-slate-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Celebrating the extraordinary achievements of Catalyst scholars admitted to top tier institutions.
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative flex overflow-hidden w-full group py-4">
        {/* Gradients removed for higher edge-to-edge opacity as requested */}

        <div className="flex space-x-6 sm:space-x-8 animate-marquee pl-6 sm:pl-8 max-w-none w-max">
          {duplicatedResults.map((result, idx) => (
            <ResultCard
              key={idx}
              className="w-[180px] sm:w-[260px] md:w-[320px]"
              name={result.name}
              rank={result.rank}
              college={result.college}
              branch={result.branch}
              image={result.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
