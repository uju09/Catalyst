import React from 'react';

export const WhyChooseUs = () => {
  return (
    <section className="py-10 sm:py-20 md:py-24 px-3 sm:px-6 relative bg-[#f4f8fc] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 15% 50%, rgba(184, 216, 240, 0.4) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(184, 216, 240, 0.3) 0%, transparent 50%)`
      }}>
      {/* Decorative Background Waves */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-60 pointer-events-none">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 400 C 200 200, 400 600, 800 400 C 1200 200, 1400 500, 1600 400" stroke="rgba(255,255,255,0.6)" strokeWidth="4" fill="none" strokeDasharray="10 5" />
          <path d="M-100 450 C 300 300, 500 700, 900 450 C 1300 200, 1500 600, 1600 500" stroke="rgba(200,225,245,0.4)" strokeWidth="20" fill="none" filter="blur(8px)" />
          <path d="M-100 350 C 250 150, 450 550, 850 350 C 1250 150, 1450 450, 1600 350" stroke="rgba(200,225,245,0.3)" strokeWidth="40" fill="none" filter="blur(12px)" />
        </svg>
      </div>

      <div className="max-w-[1050px] w-full relative z-10 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16 relative">
          <div className="relative inline-block">
            {/* Refined Orange Background Ribbon */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] rounded-2xl transform shadow-[0_4px_20px_rgba(249,115,22,0.4)] opacity-90 scale-105"></div>

            {/* Content Container */}
            <div className="relative px-4 py-3 sm:px-10 sm:py-5">
              <h2 className="text-xl sm:text-4xl md:text-[44px] font-bold text-white tracking-wide leading-tight [text-shadow:0px_2px_4px_rgba(153,27,27,0.4)]">
                Why Choose Catalyst Classes?
              </h2>
            </div>
          </div>

          <p className="text-[#0c3966] text-sm sm:text-xl md:text-[22px] font-medium italic mt-4 sm:mt-6 relative z-10">
            Achieve Your Best with Our Proven Approach.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Card 1: IITian & NITian Faculty */}
          <div className="bg-white rounded-[16px] shadow-[0_10px_30px_rgba(10,40,80,0.08),0_4px_6px_rgba(10,40,80,0.04)] p-4 sm:p-6 flex items-center gap-4 sm:gap-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-16 sm:w-[110px] flex-shrink-0 flex justify-center items-center">
              <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-md">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                </defs>
                <path d="M30 50 L20 85 L35 75 L50 85 L50 50 Z" fill="#0284c7" />
                <path d="M70 50 L80 85 L65 75 L50 85 L50 50 Z" fill="#0284c7" />
                <path d="M50 15 L58 23 L69 21 L73 31 L83 34 L81 45 L89 53 L81 61 L83 72 L73 75 L69 85 L58 83 L50 91 L42 83 L31 85 L27 75 L17 72 L19 61 L11 53 L19 45 L17 34 L27 31 L31 21 L42 23 Z" fill="url(#goldGrad)" filter="url(#iconShadow)" />
                <circle cx="50" cy="53" r="26" fill="#f59e0b" />
                <circle cx="50" cy="53" r="23" fill="#fbbf24" />
                <text x="50" y="62" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#ffffff" textAnchor="middle">10+</text>
                <g filter="url(#iconShadow)">
                  <path d="M15 30 L50 15 L85 30 L50 45 Z" fill="#1e293b" />
                  <path d="M35 37 L35 50 C35 55 65 55 65 50 L65 37 Z" fill="#334155" />
                  <path d="M50 45 L50 55" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="50" cy="55" r="3" fill="#f59e0b" />
                  <path d="M80 28 L80 50" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M76 50 L84 50 L82 60 L78 60 Z" fill="#f59e0b" />
                </g>
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-[#0c3966] font-bold text-lg sm:text-[20px] leading-tight pb-2 border-b-[1.5px] border-[#e2e8f0] inline-block w-full">IITian & NITian Faculty</h3>
              <p className="text-[#475569] text-sm sm:text-[15px] font-medium mt-2 leading-snug">
                10+ Years Proven<br />Experience
              </p>
            </div>
          </div>

          {/* Card 2: Small Batch Advantage */}
          <div className="bg-white rounded-[16px] shadow-[0_10px_30px_rgba(10,40,80,0.08),0_4px_6px_rgba(10,40,80,0.04)] p-6 flex items-center gap-5 sm:gap-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-24 sm:w-[110px] flex-shrink-0 flex justify-center items-center">
              <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-md">
                <defs>
                  <filter id="shadowBatch" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                </defs>
                <g transform="translate(0, 5)">
                  <g fill="#475569">
                    <circle cx="30" cy="35" r="11" />
                    <path d="M10 70 C10 50 50 50 50 70 Z" />
                  </g>
                  <g fill="#334155">
                    <circle cx="70" cy="35" r="11" />
                    <path d="M50 70 C50 50 90 50 90 70 Z" />
                  </g>
                  <g fill="#1e3a8a" filter="url(#shadowBatch)">
                    <circle cx="50" cy="30" r="14" />
                    <path d="M20 75 C20 45 80 45 80 75 Z" />
                  </g>
                  <g filter="url(#shadowBatch)">
                    <circle cx="75" cy="65" r="18" fill="#0056b3" stroke="#ffffff" strokeWidth="4" />
                    <path d="M68 65 L73 70 L83 58" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-[#0c3966] font-bold text-lg sm:text-[20px] leading-tight pb-2 border-b-[1.5px] border-[#e2e8f0] inline-block w-full">Small Batch Advantage</h3>
              <p className="text-[#475569] text-sm sm:text-[15px] font-medium mt-2 leading-snug">
                True Personalized<br />Attention
              </p>
            </div>
          </div>

          {/* Card 3: Regular Tests & Analysis */}
          <div className="bg-white rounded-[16px] shadow-[0_10px_30px_rgba(10,40,80,0.08),0_4px_6px_rgba(10,40,80,0.04)] p-6 flex items-center gap-5 sm:gap-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-24 sm:w-[110px] flex-shrink-0 flex justify-center items-center">
              <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-md">
                <defs>
                  <filter id="shadowTest" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                </defs>
                <rect x="25" y="15" width="50" height="70" rx="4" fill="#cbd5e1" stroke="#1e293b" strokeWidth="3" />
                <rect x="25" y="25" width="50" height="60" rx="0" fill="#f8fafc" />
                <path d="M40 10 h20 v10 h-20 z" fill="#334155" rx="2" />
                <circle cx="50" cy="15" r="2" fill="#94a3b8" />

                <rect x="32" y="32" width="8" height="8" rx="1" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                <path d="M34 36 L36 38 L40 33" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
                <line x1="45" y1="36" x2="65" y2="36" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

                <rect x="32" y="46" width="8" height="8" rx="1" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                <path d="M34 50 L36 52 L40 47" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
                <line x1="45" y1="50" x2="65" y2="50" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

                <rect x="35" y="70" width="8" height="10" fill="#f59e0b" />
                <rect x="47" y="60" width="8" height="20" fill="#0ea5e9" />
                <rect x="59" y="50" width="8" height="30" fill="#334155" />
                <line x1="30" y1="80" x2="70" y2="80" stroke="#1e293b" strokeWidth="2" />

                <g filter="url(#shadowTest)">
                  <circle cx="68" cy="65" r="16" fill="#1e3a8a" stroke="#ffffff" strokeWidth="3" />
                  <line x1="79" y1="76" x2="90" y2="88" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                  <path d="M60 65 L65 70 L75 58" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-[#0c3966] font-bold text-lg sm:text-[20px] leading-tight pb-2 border-b-[1.5px] border-[#e2e8f0] inline-block w-full">Regular Tests & Analysis</h3>
              <p className="text-[#475569] text-sm sm:text-[15px] font-medium mt-2 leading-snug">
                Performance Tracking<br />& Growth
              </p>
            </div>
          </div>

          {/* Card 4: High Contact Hours */}
          <div className="bg-white rounded-[16px] shadow-[0_10px_30px_rgba(10,40,80,0.08),0_4px_6px_rgba(10,40,80,0.04)] p-6 flex items-center gap-5 sm:gap-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-24 sm:w-[110px] flex-shrink-0 flex justify-center items-center">
              <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-md">
                <defs>
                  <filter id="shadowClock" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                  <linearGradient id="bookGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                <circle cx="45" cy="45" r="28" fill="#ffffff" stroke="#1e293b" strokeWidth="4" />
                <circle cx="45" cy="45" r="3" fill="#1e293b" />
                <line x1="45" y1="21" x2="45" y2="25" stroke="#94a3b8" strokeWidth="2" />
                <line x1="45" y1="69" x2="45" y2="65" stroke="#94a3b8" strokeWidth="2" />
                <line x1="21" y1="45" x2="25" y2="45" stroke="#94a3b8" strokeWidth="2" />
                <line x1="69" y1="45" x2="65" y2="45" stroke="#94a3b8" strokeWidth="2" />
                <line x1="45" y1="45" x2="58" y2="45" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <line x1="45" y1="45" x2="45" y2="30" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

                <g filter="url(#shadowClock)">
                  <path d="M 15 78 Q 30 70 45 78 Q 60 70 75 78 L 75 88 Q 60 80 45 88 Q 30 80 15 88 Z" fill="url(#bookGrad)" />
                  <path d="M 17 76 Q 31 69 45 76 L 45 85 Q 31 78 17 85 Z" fill="#ffffff" />
                  <path d="M 73 76 Q 59 69 45 76 L 45 85 Q 59 78 73 85 Z" fill="#f8fafc" />
                  <line x1="45" y1="76" x2="45" y2="87" stroke="#0f172a" strokeWidth="1.5" />
                  <line x1="22" y1="78" x2="38" y2="78" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="22" y1="81" x2="35" y2="81" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="52" y1="78" x2="68" y2="78" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="55" y1="81" x2="68" y2="81" stroke="#cbd5e1" strokeWidth="1" />
                </g>

                <g filter="url(#shadowClock)">
                  <path d="M 65 65 A 14 14 0 1 1 85 45 A 14 14 0 0 1 93 63 L 96 73 L 85 70 A 14 14 0 0 1 65 65 Z" fill="#ea580c" stroke="#ffffff" strokeWidth="2" />
                  <text x="79" y="62" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18" fill="#ffffff" textAnchor="middle">?</text>
                </g>
              </svg>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-[#0c3966] font-bold text-lg sm:text-[20px] leading-tight pb-2 border-b-[1.5px] border-[#e2e8f0] inline-block w-full">High Contact Hours</h3>
              <p className="text-[#475569] text-sm sm:text-[15px] font-medium mt-2 leading-snug">
                Deep Coverage &<br />Doubt Solving
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
