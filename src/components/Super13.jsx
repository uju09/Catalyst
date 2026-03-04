import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-12 bg-[#e2e8f0] font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        
        div {
            font-family: 'Outfit', sans-serif;
        }
        
        .dot-pattern {
            background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
            background-size: 16px 16px;
        }

        .wave-separator {
            position: absolute;
            left: -2px;
            top: 0;
            bottom: 0;
            width: 100px;
            overflow: hidden;
            z-index: 0;
        }
        
        @media (max-width: 768px) {
            .wave-separator {
                display: none;
            }
        }
      `}} />

      {/* Main Landscape Card Container */}
      <div className="relative w-full max-w-[1100px] bg-[#f8fafc] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white">

        {/* "Class 9-12" Badge (Top Right of overall card) */}
        <div className="absolute top-0 right-0 bg-[#1e3a8a] text-white px-8 py-3 rounded-bl-[2rem] rounded-tr-[2.5rem] font-bold text-lg z-30 shadow-md tracking-wide">
          Class 9-12
        </div>

        {/* LEFT COLUMN (Branding & Titles) */}
        <div className="w-full md:w-[48%] p-10 lg:p-16 relative flex flex-col justify-center overflow-hidden">

          {/* Decorative Dots */}
          <div className="absolute top-24 left-10 w-24 h-24 dot-pattern opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 dot-pattern opacity-60"></div>

          <div className="relative z-10">
            {/* Top Brand Header */}
            <div className="flex items-center gap-3 mb-8">
              {/* Geometric Logo Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[#1e3a8a] font-bold text-sm tracking-[0.15em] border-b-2 border-[#1e3a8a] pb-0.5 uppercase">
                Advanced Competitive
              </span>
            </div>

            {/* Main Titles */}
            <div className="mb-8 relative">
              <h1 className="text-6xl lg:text-[5rem] font-black text-[#2546b5] tracking-tight leading-none mb-3 flex items-start">
                SUPER 13
                {/* Lightning Bolts */}
                <div className="ml-2 mt-[-10px] flex flex-col items-start">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12 translate-x-2 text-[#2546b5]">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12 -translate-y-2 text-[#2546b5]">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
                  </svg>
                </div>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#11235a] leading-[1.1]">
                INTEGRATED<br />PROGRAM
              </h2>
            </div>

            {/* 2-Year Program Pill */}
            <div className="inline-block">
              <div className="bg-[#2546b5] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transform transition hover:scale-105 cursor-default">
                2-YEAR PROGRAM
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Features, Info & CTA) */}
        <div className="w-full md:w-[52%] bg-gradient-to-br from-[#2a52be] via-[#1d3d99] to-[#142970] p-8 lg:p-14 relative flex flex-col justify-center">

          {/* SVG Wave to create a curved division between left and right */}
          <svg className="wave-separator hidden md:block h-full text-[#f8fafc]" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0 0 C 40 20, 40 80, 0 100 L 0 0 Z" />
          </svg>

          {/* Inner White Card */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl relative z-10 mb-8 mt-10 md:mt-0">

            {/* Features List */}
            <ul className="space-y-6 mb-8">
              {/* Feature 1 */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#2546b5" />
                    <path d="M7 12.5L10.5 16L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[#334155] font-semibold text-lg lg:text-xl leading-tight">
                  Targeted JEE & NEET coaching
                </span>
              </li>
              {/* Feature 2 */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-[#eef2ff] flex items-center justify-center border-2 border-[#2546b5]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2546b5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2v7.31L2 20.5h20l-8-11.19V2h-4Z" /><path d="M8.5 2h7" />
                    </svg>
                  </div>
                </div>
                <span className="text-[#334155] font-semibold text-lg lg:text-xl leading-tight">
                  Expert IIT Alumni Faculty
                </span>
              </li>
              {/* Feature 3 */}
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-[#eef2ff] flex items-center justify-center border-2 border-[#2546b5]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2546b5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <span className="text-[#334155] font-semibold text-lg lg:text-xl leading-tight">
                  Small Batches & Personalized Mentorship
                </span>
              </li>
            </ul>

            {/* Exams Info Box */}
            <div className="bg-[#f1f5f9] rounded-2xl p-4 lg:p-5 flex items-center gap-4 shadow-inner">
              <div className="text-[#2546b5]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" /><path d="M12 12h.01" /><path d="M8 12h.01" /><path d="M16 12h.01" />
                </svg>
              </div>
              <div className="flex-1 flex flex-wrap items-baseline gap-2">
                <span className="text-[#0f172a] font-bold text-lg">Exams</span>
                <span className="text-[#475569] font-medium text-lg">JEE Main, Adv. & NEET</span>
              </div>
            </div>
          </div>

          {/* Call to Action & Date */}
          <div className="flex flex-col items-center z-10">
            <button className="group w-full max-w-sm border-2 border-white/40 bg-white/10 hover:bg-white/20 hover:border-white backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 mb-5 shadow-lg">
              Explore Program
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2 text-blue-100 font-medium tracking-wide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Starting April 2026
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}