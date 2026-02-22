import React from 'react';

export const ResultCard = ({ name, rank, college, branch, image, className }) => {
  const [firstName, ...lastNameParts] = name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div
      className={`relative overflow-hidden flex flex-col shadow-xl rounded-2xl font-sans flex-shrink-0 border border-gray-100 ${className || ''}`}
      style={{
        containerType: 'inline-size',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 50%, #f8f0ff 100%)'
      }}
    >
      {/* ================= BACKGROUND GRAPHICS ================= */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,100,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,100,200,1) 1px, transparent 1px)`,
          backgroundSize: '4cqw 4cqw'
        }}
      ></div>

      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#008DD2]/10 blur-[80px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#EE3F46]/8 blur-[80px] rounded-full z-0 pointer-events-none"></div>

      {/* Wave */}
      <svg className="absolute bottom-0 left-0 w-full h-[35%] z-0 opacity-10 pointer-events-none" viewBox="0 0 1080 400" fill="none" preserveAspectRatio="none">
        <path d="M0 400V250C250 350 500 300 700 150C850 50 1000 100 1080 150V400H0Z" fill="#0090D4" />
        <path d="M0 400V350C300 450 600 350 800 250C950 150 1080 200 1080 200V400H0Z" fill="#EE3F46" />
      </svg>

      {/* ================= HEADER ================= */}
      <header className="relative z-20 flex justify-between items-center px-[5cqw] pt-[4cqw] pb-[2cqw] w-full">
        {/* Logo */}
        <div className="flex items-center gap-[1.5cqw]">
          <div className="flex items-center justify-center w-[7cqw] h-[7cqw] border-[0.4cqw] border-[#EE3F46] rounded-[1.2cqw] bg-white text-[#008DD2] font-black leading-none shadow-md">
            <span className="text-[4cqw] font-display ml-[0.2cqw]">
              C<sup className="text-[2.2cqw] relative -top-[0.6em] -left-[0.05em]">3</sup>
            </span>
          </div>
          <div className="leading-tight">
            <h2 className="font-extrabold text-[3.5cqw] text-[#0A1E3F] tracking-wide font-display uppercase">
              Catalyst
            </h2>
            <h3 className="font-bold text-[1.5cqw] text-slate-400 tracking-[0.15em] uppercase">
              Coaching Classes
            </h3>
          </div>
        </div>

        {/* Badge */}
        <div className="bg-gradient-to-r from-[#EE3F46] to-[#d42f36] text-white font-black px-[3cqw] py-[1.2cqw] rounded-full text-[2cqw] uppercase tracking-widest shadow-lg">
          ⭐ PROUD
        </div>
      </header>

      {/* ================= PHOTO + INFO ================= */}
      <main className="relative z-20 flex-1 flex flex-col items-center px-[5cqw] pb-[4cqw]">

        {/* Student Photo */}
        <div className="relative w-[40cqw] h-[40cqw] mb-[4cqw]">
          {/* Dashed ring */}
          <div className="absolute inset-[-2cqw] rounded-full border-[0.4cqw] border-dashed border-[#0090D4]/30 animate-[spin_25s_linear_infinite]"></div>
          {/* Glow */}
          <div className="absolute inset-[1cqw] rounded-full bg-gradient-to-tr from-[#008DD2] to-[#EE3F46] blur-lg opacity-30"></div>
          {/* Image */}
          <div className="absolute inset-0 rounded-full border-[1cqw] border-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden bg-gray-100 z-10">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Student Name */}
        <h1 className="font-display font-black text-[8cqw] leading-[1] text-[#0A1E3F] text-center uppercase mb-[2cqw]">
          {firstName}
          {lastName && (
            <>
              {' '}
              <span className="text-[#0090D4]">
                {lastName}
              </span>
            </>
          )}
        </h1>

        {/* College Box */}
        <div className="bg-[#0A1E3F]/5 backdrop-blur-md rounded-xl p-[3cqw] border border-[#0090D4]/15 border-l-[1cqw] border-l-[#0090D4] w-full mb-[2cqw]">
          <p className="text-[2cqw] font-medium text-slate-400 mb-[1cqw] tracking-wide text-center">
            Admitted to
          </p>
          <h2 className="font-display font-black text-[6cqw] text-[#0A1E3F] leading-none text-center mb-[1.5cqw]">
            {college}
          </h2>
          <div className="flex justify-center">
            <div className="inline-block bg-[#0090D4] rounded-lg px-[2.5cqw] py-[1cqw] shadow-md">
              <p className="text-[2cqw] text-white font-bold uppercase tracking-wider line-clamp-1">
                {branch}
              </p>
            </div>
          </div>
        </div>

        {/* Rank */}
        {rank && (
          <p className="text-[#EE3F46] font-black text-[3cqw] uppercase tracking-wider text-center">
            {rank}
          </p>
        )}
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-30 px-[5cqw] pb-[4cqw] flex justify-between items-center">
        <p className="text-[2.2cqw] font-black text-[#0090D4] uppercase tracking-wide leading-tight">
          Join Catalyst<br />Super 13
        </p>
        <div className="bg-[#0A1E3F] text-white rounded-full px-[2.5cqw] py-[1.2cqw] flex items-center gap-[1cqw] shadow-lg">
          <div className="bg-[#EE3F46] p-[1cqw] rounded-full text-white">
            <svg className="w-[2.5cqw] h-[2.5cqw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <p className="text-[2.2cqw] font-black leading-none">Call Us</p>
        </div>
      </footer>

    </div>
  );
};