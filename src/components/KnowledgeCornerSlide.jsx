import React from 'react';

export const KnowledgeCornerSlide = () => {
  return (
    <div className="w-full h-full bg-[#1b263b] flex items-center justify-center">
      {/* 
        Main Poster Container
        Background uses a complex radial gradient to create the glowing center and dark edges.
      */}
      <div className="relative w-full h-full max-w-[1200px] overflow-hidden bg-[radial-gradient(circle_at_50%_45%,_#367de6_0%,_#1f5abf_35%,_#0c3278_80%,_#051c4f_100%)] flex flex-col items-center justify-center p-6 sm:p-10 md:p-12 font-sans text-center border-l border-r border-white/10 z-0 pointer-events-auto">

        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-noise z-[-1]"></div>

        {/* ================= BACKGROUND GRAPHICS ================= */}
        {/* Wavy Bottom Overlay */}
        <svg className="absolute bottom-0 left-0 w-full z-[-1] opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '45%' }}>
          <path fill="rgba(255,255,255,0.06)" d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,106.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="rgba(255,255,255,0.08)" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,218.7C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        {/* Floating Background Icons */}
        <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none text-white/10">
          {/* Top Left: Laptop */}
          <svg className="absolute top-[12%] left-[10%] w-16 h-16 bg-icon" style={{ '--rot': '-15deg' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          {/* Mid Left: Chemistry Flask */}
          <svg className="absolute top-[48%] left-[7%] w-14 h-14 bg-icon-slow" style={{ '--rot': '10deg' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75h4.5m-4.5 0v5.25c0 .727-.29 1.425-.806 1.935L4.82 14.545c-.868.869-.328 2.355.901 2.355h12.558c1.23 0 1.77-1.486.9-2.355l-3.624-3.615A2.75 2.75 0 0114.25 9v-5.25" />
          </svg>
          {/* Top Right: Briefcase / Bag */}
          <svg className="absolute top-[10%] right-[12%] w-12 h-12 bg-icon-slow" style={{ '--rot': '20deg' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.015-.39.03-.586.045m-12.91-4.5c.31-.01.62-.02.93-.03M8.25 5.25v-.75c0-1.243 1.007-2.25 2.25-2.25h3c1.243 0 2.25 1.007 2.25 2.25v.75m-7.5 0h7.5m-7.5 0A2.25 2.25 0 006 7.5v4.5M15.75 5.25A2.25 2.25 0 0118 7.5v4.5" />
          </svg>
          {/* Mid Right: Compass / Target */}
          <svg className="absolute top-[38%] right-[8%] w-12 h-12 bg-icon" style={{ '--rot': '-25deg' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
          </svg>
          {/* Bottom Right: Flask */}
          <svg className="absolute bottom-[18%] right-[14%] w-16 h-16 bg-icon-slow" style={{ '--rot': '15deg' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75h4.5m-4.5 0v5.25c0 .727-.29 1.425-.806 1.935L4.82 14.545c-.868.869-.328 2.355.901 2.355h12.558c1.23 0 1.77-1.486.9-2.355l-3.624-3.615A2.75 2.75 0 0114.25 9v-5.25" />
          </svg>

          {/* Sparkles */}
          <div className="absolute top-[25%] left-[24%] text-white/30 text-xl animate-pulse">✦</div>
          <div className="absolute bottom-[35%] right-[28%] text-white/30 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
          <div className="absolute top-[18%] right-[32%] text-white/20 text-lg animate-pulse" style={{ animationDelay: '0.5s' }}>✦</div>
          <div className="absolute bottom-[22%] left-[28%] text-white/20 text-sm animate-pulse" style={{ animationDelay: '1.5s' }}>✦</div>
        </div>
        {/* ================= END BACKGROUND GRAPHICS ================= */}

        {/* TOP TEXT */}
        {/* Sized specifically to fit well within a wider 5:3 ratio */}
        <div className="z-10 w-full px-4 mb-5 sm:mb-8 lg:mb-10 mt-auto pt-6">
          <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-[1.75rem] font-medium tracking-wide mb-1 sm:mb-2 text-shadow-sm">
            Confused about choosing the <span className="font-bold">RIGHT</span> exams?
          </h2>
          <h2 className="text-white text-base sm:text-xl md:text-2xl lg:text-[1.75rem] font-medium tracking-wide text-shadow-sm">
            Help is here for <span className="text-[var(--color-brand-yellowText)] font-bold">parents & students.</span>
          </h2>
        </div>

        {/* DIVIDER & "Introducing" */}
        <div className="z-10 flex items-center justify-center w-full gap-3 sm:gap-6 mb-5 sm:mb-8">
          <div className="h-[1.5px] w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#fdda5f]/80 to-transparent"></div>
          <span className="text-[var(--color-brand-yellowText)] font-[var(--font-serif)] italic text-2xl sm:text-3xl md:text-[2.2rem] tracking-wider px-2 text-shadow-sm">Introducing</span>
          <div className="h-[1.5px] w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#fdda5f]/80 to-transparent"></div>
        </div>

        {/* MAIN TITLE WITH BOOKS (SINGLE LINE) */}
        <div className="z-20 flex flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 lg:mb-12 whitespace-nowrap">

          {/* Stacked Books CSS Illustration */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 duration-300 w-[4.5rem] sm:w-[6rem] md:w-[7.5rem] lg:w-[9rem] -ml-2 sm:-ml-0">
            {/* Top Book (Red) */}
            <div className="w-[85%] h-6 sm:h-8 md:h-10 lg:h-12 bg-[var(--color-brand-bookRed)] rounded-r-lg border-b-[4px] sm:border-b-[6px] md:border-b-[8px] border-r-2 border-[var(--color-brand-bookPages)] shadow-lg relative z-20 transform translate-x-1 md:translate-x-2">
              <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-[var(--color-brand-bookRedSpine)] rounded-l-md border-r border-black/10"></div>
              {/* Page lines detail */}
              <div className="absolute bottom-[-3px] sm:bottom-[-5px] md:bottom-[-6px] left-[15%] right-1 h-[2px] bg-black/10"></div>
            </div>
            {/* Bottom Book (Teal) */}
            <div className="w-[95%] h-6 sm:h-8 md:h-10 lg:h-12 bg-[var(--color-brand-bookTeal)] rounded-r-lg border-b-[4px] sm:border-b-[6px] md:border-b-[8px] border-r-2 border-[var(--color-brand-bookPages)] shadow-xl relative -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 z-10">
              <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-[var(--color-brand-bookTealSpine)] rounded-l-md border-r border-black/20"></div>
              {/* Page lines detail */}
              <div className="absolute bottom-[-3px] sm:bottom-[-5px] md:bottom-[-6px] left-[15%] right-1 h-[2px] bg-black/10"></div>
            </div>
          </div>

          {/* Title Text */}
          <div className="font-[var(--font-title)] uppercase leading-none flex flex-row items-center text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]">
            <span className="text-white text-shadow-3d tracking-tight">KNOWLEDGE</span>
            {/* Spacing between words */}
            <span className="inline-block w-2 sm:w-3 md:w-5"></span>
            <span className="text-[var(--color-brand-yellowText)] text-shadow-3d tracking-tight">CORNER</span>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="z-10 w-full px-4 mb-auto pb-4">
          <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-[2.2rem] font-semibold tracking-wide mb-3 sm:mb-4 text-shadow-sm">
            A Level-Wise Guide to Exams & Olympiads
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-white/95 text-xs sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
            <span className="font-bold text-white whitespace-nowrap">Std 6&ndash;10</span>
            <span className="inline-block text-white/40">|</span>
            <span className="whitespace-nowrap">Explore Based on Your Child's Readiness</span>
          </div>
        </div>

      </div>
    </div>
  );
};
