import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const resultsData = [
  { name: 'Akash Nair', college: 'IIT Madras', image: '/results/Akash Nair.jpg' },
  { name: 'Indrajeet Mohite', college: 'IIT Bombay', image: '/results/Indrajeet Mohite.png' },
  { name: 'Vishwajeet Natu', college: 'IIT Bombay', image: '/results/Vishwajeet Natu.png' },
  { name: 'Advait Kisar', college: 'IIT Madras', image: '/results/Advait Kisar.png' },
  { name: 'Atharva Joshi', college: 'IIT Hyderabad', image: '/results/Atharva Joshi.png' },
  { name: 'Sujal Diwedi', college: 'VJTI Mumbai', image: '/results/Sujal Dwivedi.png' },
  { name: 'Jaswant Rajput', college: 'AIIMS Patna', image: '/results/Jaswant Rajput.jpeg' },
  { name: 'Paresh Deshmukh', college: 'BITS Pilani', image: '/results/Paresh Deshmukh.jpeg' },
  { name: 'Tejas Bobabe', college: 'NIT Calicut', image: '/results/Tejas Bobabe.jpeg' },
  { name: 'Ujjwal Akotkar', college: 'IIT Dharwad', image: 'https://ui-avatars.com/api/?name=Ujjwal+Akotkar&background=1e293b&color=fff&size=256&bold=true' }
];

const MOBILE_INITIAL_COUNT = 4;

const StudentCard = ({ student }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div
      className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full p-[3px] sm:p-[4px] shadow-lg group-hover:scale-105 transition-transform duration-300 ease-out"
      style={{ background: 'linear-gradient(135deg, #dc2626 48%, #2563eb 52%)' }}
    >
      <img
        src={student.image}
        alt={student.name}
        className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-white bg-slate-100"
        onError={(e) => {
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=f0f9ff&color=1e3a8a&size=256&bold=true`;
        }}
      />
    </div>
    <div className="mt-2 sm:mt-4 text-center">
      <h3 className="text-slate-800 font-black text-[11px] sm:text-sm md:text-base tracking-wide uppercase leading-tight">{student.name}</h3>
      <p className="text-blue-700 font-bold text-[10px] sm:text-xs md:text-sm tracking-wider uppercase mt-0.5 sm:mt-1">{student.college}</p>
    </div>
  </div>
);

export const ResultsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-slate-50 relative overflow-x-hidden font-montserrat flex items-center justify-center w-full">

      {/* Thematic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Subtle glow for the theme */}
      <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 0) 70%)' }}></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-16 flex flex-col items-center">

        {/* Header Badge */}
        <div className="mb-6 sm:mb-14 relative group">
          <div className="absolute inset-0 bg-red-200 blur-md opacity-50 rounded-full group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-white px-6 sm:px-10 py-2 sm:py-2.5 rounded-full border border-red-500 shadow-xl">
            <h2 className="text-red-700 text-lg sm:text-2xl md:text-3xl font-black tracking-widest uppercase m-0">OUR RESULTS</h2>
          </div>
        </div>

        {/* ===== DESKTOP: Show all results (hidden on mobile) ===== */}
        <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-12 w-full">
          {resultsData.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>

        {/* ===== MOBILE: Show 4 initially with expand toggle (hidden on sm+) ===== */}
        <div className="sm:hidden w-full">
          {/* First 4 results — always visible */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 w-full">
            {resultsData.slice(0, MOBILE_INITIAL_COUNT).map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </div>

          {/* Remaining results — expandable with smooth animation */}
          <div
            className="grid grid-cols-2 gap-x-3 gap-y-6 w-full overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: showAll ? `${(resultsData.length - MOBILE_INITIAL_COUNT) * 160}px` : '0px',
              opacity: showAll ? 1 : 0,
              marginTop: showAll ? '1.5rem' : '0',
            }}
          >
            {resultsData.slice(MOBILE_INITIAL_COUNT).map((student, index) => (
              <StudentCard key={index + MOBILE_INITIAL_COUNT} student={student} />
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1.5 px-6 py-3 min-h-[44px] bg-white border-2 border-red-500 text-red-600 font-bold text-sm rounded-full shadow-md hover:bg-red-50 active:scale-95 transition-all duration-200"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>Show More <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 sm:mt-12 w-full flex justify-center pb-2 sm:pb-4">
          <p className="text-slate-500 text-xl sm:text-3xl md:text-5xl tracking-wide opacity-90 m-0" style={{ fontFamily: "'Dancing Script', cursive" }}>
            and many more....
          </p>
        </div>

      </div>
    </div>
  );
};
