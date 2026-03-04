
import React from 'react';

export const CoursesSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#050b14]">
      {/* Main Outer Canvas: Forces 5:3 Aspect Ratio on Desktop */}
      <div className="relative w-full h-full max-w-[1300px] flex flex-col rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10">

        {/* Stunning Split Background mimicking the original image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b4c] to-[#0f172a] z-0"></div>
        {/* Left Fiery Glow */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-600/40 via-orange-500/10 to-transparent blur-[120px] z-0 mix-blend-screen"></div>
        {/* Right Cosmic Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/40 via-cyan-500/10 to-transparent blur-[120px] z-0 mix-blend-screen"></div>
        {/* Starry Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 z-0 mix-blend-overlay"></div>

        {/* Header Section */}
        <div className="relative z-10 text-center mb-4 lg:mb-8 mt-6 lg:mt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Two Programs.</span>
            {' '}
            <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">One Clear Path to Excellence</span>
          </h1>
        </div>

        {/* Cards Container */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10 w-full h-full justify-center items-stretch pb-6 lg:pb-10 px-4 sm:px-8 lg:px-12 pointer-events-auto">

          {/* ================= CARD 1: IGNITE (ORANGE/GOLD) ================= */}
          {/* Outer Glossy Gradient Border */}
          <div className="flex-1 rounded-[2.5rem] p-[4px] bg-gradient-to-b from-yellow-300 via-orange-500 to-orange-700 shadow-[0_15px_50px_-10px_rgba(234,88,12,0.6)] transform transition-transform duration-300 hover:scale-[1.02] flex flex-col group relative">

            {/* Inner Card Container */}
            <div className="flex-1 bg-white rounded-[2.25rem] flex flex-col overflow-hidden relative shadow-inner">

              {/* Card Header (Glossy Gradient) */}
              <div className="h-[22%] min-h-[100px] bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 relative flex items-center justify-center lg:justify-start lg:pl-10 gap-4 overflow-hidden border-b border-orange-700/30">
                {/* Glassy Top Highlight */}
                <div className="absolute top-0 left-0 w-full h-[45%] glass-highlight rounded-t-[2.25rem]"></div>

                {/* Icon */}
                <div className="relative z-10 bg-gradient-to-br from-yellow-100 to-orange-100 p-2.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10 text-orange-600 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>

                {/* Title */}
                <div className="relative z-10 text-white flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-[2.5rem] font-extrabold tracking-tight leading-none drop-shadow-md">IGNITE</h2>
                  <p className="text-orange-100 font-bold text-sm lg:text-[15px] tracking-widest uppercase mt-1 drop-shadow-sm">Foundation Program</p>
                </div>
              </div>

              {/* Overlapping Class Pill */}
              <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-gradient-to-b from-orange-400 to-orange-600 text-white font-extrabold text-sm lg:text-lg py-1 px-8 rounded-full border-[3px] border-white shadow-[0_4px_15px_rgba(234,88,12,0.5)] whitespace-nowrap">
                  Classes 8 – 10
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 card-body-pattern flex flex-col items-center px-6 pt-12 pb-6 relative z-10">
                <h3 className="text-xl lg:text-2xl font-extrabold text-orange-700 text-center mb-6">
                  1-Year Program
                </h3>

                <ul className="space-y-5 lg:space-y-6 w-full max-w-[90%] mx-auto flex-1 flex flex-col justify-center">
                  <li className="flex items-center gap-4 border-b border-gray-200 pb-3">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#5cb85c] flex-shrink-0 check-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-800 font-semibold text-[15px] lg:text-[17px] leading-tight">Strong Concepts in Science & Mathematics</span>
                  </li>
                  <li className="flex items-center gap-4 border-b border-gray-200 pb-3">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#5cb85c] flex-shrink-0 check-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-800 font-semibold text-[15px] lg:text-[17px] leading-tight">Logical Thinking & Advanced Problem Solving</span>
                  </li>
                  <li className="flex items-center gap-4 pb-3">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#5cb85c] flex-shrink-0 check-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-800 font-semibold text-[15px] lg:text-[17px] leading-tight">Early Olympiad & Competitive Exposure</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4 w-full text-center">
                  <span className="text-orange-600 font-extrabold text-xl lg:text-2xl tracking-wide drop-shadow-sm">Olympiads / IJSO</span>
                </div>
              </div>

              {/* Card Footer (Gradient Bottom) */}
              <div className="h-[10%] min-h-[50px] bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center px-4 border-t border-orange-400">
                <p className="text-white font-bold text-sm lg:text-[16px] tracking-wide drop-shadow-md">Start Early. Build Smart. Stay Ahead.</p>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: SUPER-13 (BLUE/CYAN) ================= */}
          {/* Outer Glossy Gradient Border */}
          <div className="flex-1 rounded-[2.5rem] p-[4px] bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-800 shadow-[0_15px_50px_-10px_rgba(37,99,235,0.6)] transform transition-transform duration-300 hover:scale-[1.02] flex flex-col group relative">

            {/* Inner Card Container */}
            <div className="flex-1 bg-white rounded-[2.25rem] flex flex-col overflow-hidden relative shadow-inner">

              {/* Card Header (Glossy Gradient) */}
              <div className="h-[22%] min-h-[100px] bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 relative flex items-center justify-center lg:justify-start lg:pl-10 gap-4 overflow-hidden border-b border-blue-800/30">
                {/* Glassy Top Highlight */}
                <div className="absolute top-0 left-0 w-full h-[45%] glass-highlight rounded-t-[2.25rem]"></div>

                {/* Icon */}
                <div className="relative z-10 bg-gradient-to-br from-cyan-100 to-blue-100 p-2.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>

                {/* Title */}
                <div className="relative z-10 text-white flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-[2.5rem] font-extrabold tracking-tight leading-none drop-shadow-md">SUPER-13</h2>
                  <p className="text-blue-100 font-bold text-sm lg:text-[15px] tracking-widest uppercase mt-1 drop-shadow-sm">Integrated Program</p>
                </div>
              </div>

              {/* Overlapping Class Pill */}
              <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-extrabold text-sm lg:text-lg py-1 px-8 rounded-full border-[3px] border-white shadow-[0_4px_15px_rgba(37,99,235,0.5)] whitespace-nowrap">
                  Class 11 – 12
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 card-body-pattern flex flex-col items-center px-6 pt-12 pb-6 relative z-10">
                <h3 className="text-xl lg:text-2xl font-extrabold text-blue-800 text-center mb-6">
                  2-Year Program
                </h3>

                <ul className="space-y-4 lg:space-y-5 w-full max-w-[95%] mx-auto flex-1 flex flex-col justify-center">
                  <li className="flex items-center gap-4 border-b border-gray-200 pb-2.5">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#5cb85c] flex-shrink-0 check-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-800 font-medium text-[15px] lg:text-[16px] leading-snug"><span className="font-bold text-blue-900">Mentorship</span> by IITians & NITians</span>
                  </li>
                  <li className="flex items-center gap-4 border-b border-gray-200 pb-2.5">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#5cb85c] flex-shrink-0 check-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-800 font-medium text-[15px] lg:text-[16px] leading-snug"><span className="font-bold text-blue-900">Limited to 13 Students</span> Per Batch</span>
                  </li>
                  <li className="flex items-center gap-4 border-b border-gray-200 pb-2.5">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#5cb85c] flex-shrink-0 check-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-800 font-medium text-[15px] lg:text-[16px] leading-snug">Intensive <span className="font-bold">JEE / NEET</span>-Focused Curriculum</span>
                  </li>
                  <li className="flex items-center gap-4 pb-2.5">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#5cb85c] flex-shrink-0 check-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-800 font-medium text-[15px] lg:text-[16px] leading-snug">Testing, Analysis & Strategic Mentorship</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4 w-full text-center">
                  <span className="text-blue-800 font-extrabold text-xl lg:text-2xl tracking-wide drop-shadow-sm">
                    JEE <span className="text-blue-300 mx-1">|</span> NEET <span className="text-blue-300 mx-1">|</span> MHTCET
                  </span>
                </div>
              </div>

              {/* Card Footer (Gradient Bottom) */}
              <div className="h-[10%] min-h-[50px] bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center px-4 border-t border-blue-400">
                <p className="text-white font-bold text-sm lg:text-[16px] tracking-wide drop-shadow-md">Elite Batch. Focused Mentorship. Top Results.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
