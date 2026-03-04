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

      {/* ================= PHOTO + INFO ================= */}
      <main className="relative z-20 flex-1 flex flex-col items-center px-[5cqw] pt-[4cqw] pb-[4cqw]">

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

      </main>


    </div>
  );
};