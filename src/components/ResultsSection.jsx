import React from 'react';

const resultsData = [
  { name: 'Akash Nair', college: 'IIT Madras', image: '/result/akash.jpeg' },
  { name: 'Indrajeet Mohite', college: 'IIT Bombay', image: '/result/indrajeet.jpeg' },
  { name: 'Vishwajeet Natu', college: 'IIT Bombay', image: '/result/vishwajeet.jpeg' },
  { name: 'Advait Kisar', college: 'IIT Madras', image: '/result/advait.jpeg' },
  { name: 'Atharva Joshi', college: 'IIT Hyderabad', image: '/result/atharva.jpeg' },
  { name: 'Sujal Diwedi', college: 'VJTI Mumbai', image: '/result/sujal.jpeg' },
  { name: 'Jaswant Rajput', college: 'AIIMS Patna', image: '/result/jaswant.jpeg' },
  { name: 'Paresh Deshmukh', college: 'BITS Pilani', image: '/result/paresh.jpeg' },
  { name: 'Tejas Bobabe', college: 'NIT Calicut', image: '/result/tejas.jpeg' },
  { name: 'Ujwal Akotkar', college: 'IIIT Dharwad', image: '/result/uju.png' },
];

const StudentCard = ({ student }) => (
  <div className="flex flex-col items-center group">
    <div className="relative">
      {/* Subtle ring */}
      <div
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full p-[2.5px] sm:p-[3px] group-hover:scale-105 transition-transform duration-300 ease-out"
        style={{ background: 'linear-gradient(135deg, #0090D4, #0060A0)' }}
      >
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-full object-cover rounded-full border-2 sm:border-[3px] border-white bg-gray-100"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=f0f9ff&color=0A1E3F&size=256&bold=true`;
          }}
        />
      </div>
    </div>
    <div className="mt-2 sm:mt-3 text-center">
      <h3 className="text-gray-800 font-bold text-[10px] sm:text-sm md:text-base tracking-wide leading-tight">{student.name}</h3>
      <p className="text-[#0090D4] font-semibold text-[9px] sm:text-xs md:text-sm mt-0.5">{student.college}</p>
    </div>
  </div>
);

export const ResultsSection = () => {
  return (
    <section className="bg-white relative overflow-hidden w-full">
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col items-center">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-[#0090D4] font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2">Success Stories</p>
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Our Top Performers</h2>
          <div className="w-12 h-1 bg-[#0090D4] rounded-full mx-auto mt-3"></div>
        </div>

        {/* Results Grid: 3 cols on mobile, 5 on md+ */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-10 w-full">
          {resultsData.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-8 sm:mt-12 w-full flex justify-center">
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium tracking-wide italic">
            and many more...
          </p>
        </div>

      </div>
    </section>
  );
};
