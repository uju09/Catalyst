import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

const Confetti = () => {
  const [confetti, setConfetti] = useState([]);
  useEffect(() => {
    const newConfetti = [];
    for (let i = 0; i < 20; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        transform: `rotate(${Math.random() * 360}deg)`
      });
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <>
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute w-[10px] h-[10px] bg-yellow-400 opacity-30 rounded-[2px]"
          style={{
            left: c.left,
            top: c.top,
            transform: c.transform
          }}
        ></div>
      ))}
    </>
  );
};

export const Results = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 bg-slate-50 min-h-screen">
      <style>{`
        .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }

        .bg-gradient-main {
            background: radial-gradient(circle at center, #1e40af 0%, #1e3a8a 50%, #172554 100%);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .topper-ribbon-blue {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 5% 50%);
        }
        .topper-ribbon-gold {
            background: linear-gradient(135deg, #ca8a04 0%, #a16207 100%);
            clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 5% 50%);
        }
        .gold-glow {
            box-shadow: 0 0 25px rgba(234, 179, 8, 0.3);
        }
      `}</style>

      {/* 1. Results_top Section */}
      <section className="relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[100px] opacity-60 -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-100 blur-[100px] opacity-60 -z-10 pointer-events-none"></div>

        <div className="max-w-[80rem] w-full mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-16 fade-in-up px-2 sm:px-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-semibold text-blue-600 mb-4 sm:mb-6 uppercase tracking-wider transition-all hover:shadow-md hover:border-blue-300 cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              Our Achievements
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Consistent Results Through <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">
                Conceptual Excellence.
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              Empowering students to reach their highest potential with proven methodologies and dedicated mentorship.
            </p>
          </div>

          {/* Stats Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {/* Item 1: Amber */}
            <div className="relative bg-white p-3 sm:p-5 xl:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group fade-in-up delay-100 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

              <svg viewBox="0 0 24 24" className="w-12 h-12 xl:w-14 xl:h-14 mb-4 drop-shadow-md group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 relative z-10">
                <defs>
                  <linearGradient id="grad-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fcd34d" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                </defs>
                <path fill="url(#grad-amber)" d="M19 3H5v2.5C5 9.09 7.91 12 11.5 12V14h-2v3h5v-3h-2v-2c3.59 0 6.5-2.91 6.5-6.5V3zm-2 2.5c0 2.48-2.02 4.5-4.5 4.5S8 7.98 8 5.5V5h9v.5zM4 5v2.5C4 9.43 5.57 11.01 7.5 11.5V9H6V5H4zm16 0v2.5c0 2.43-1.57 4.01-3.5 4.5V9h1.5V5h2z" />
                <path fill="#fff" opacity="0.3" d="M12 12c-2.48 0-4.5-2.02-4.5-4.5V5h9v.5c0 2.48-2.02 4.5-4.5 4.5z" />
                <path fill="url(#grad-amber)" d="M8 19h8v2H8v-2z" />
              </svg>

              <h3 className="text-lg xl:text-xl font-extrabold text-slate-900 mb-1 tracking-tight">Multiple</h3>
              <p className="text-slate-600 font-semibold text-xs xl:text-sm leading-relaxed">99+ Percentile Scorers</p>
            </div>

            {/* Item 2: Blue */}
            <div className="relative bg-white p-3 sm:p-5 xl:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group fade-in-up delay-200 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

              <svg viewBox="0 0 24 24" className="w-12 h-12 xl:w-14 xl:h-14 mb-4 drop-shadow-md group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300 relative z-10">
                <defs>
                  <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                </defs>
                <path fill="url(#grad-blue)" d="M4 20h16v2H4zM6 16h3v4H6zM11 10h3v10h-3zM16 4h3v16h-3z" />
                <path fill="url(#grad-blue)" d="M22 6l-6-6v4c-6 0-10 4.5-10 10 2.5-4.5 7-4.5 10-4.5v4l6-6z" />
                <path fill="#fff" opacity="0.2" d="M16 4h3v16h-3zM11 10h3v10h-3z" />
              </svg>

              <h3 className="text-lg xl:text-xl font-extrabold text-slate-900 mb-1 tracking-tight">Consistent</h3>
              <p className="text-slate-600 font-semibold text-xs xl:text-sm leading-relaxed">JEE Main Qualifiers</p>
            </div>

            {/* Item 3: Indigo */}
            <div className="relative bg-white p-3 sm:p-5 xl:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group fade-in-up delay-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

              <svg viewBox="0 0 24 24" className="w-12 h-12 xl:w-14 xl:h-14 mb-4 drop-shadow-md group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 relative z-10">
                <defs>
                  <linearGradient id="grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a5b4fc" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#312e81" />
                  </linearGradient>
                </defs>
                <path fill="url(#grad-indigo)" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15L22 9l-10-6zm6.8 7L12 13.8 5.2 10 12 6.2 18.8 10zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                <path fill="url(#grad-indigo)" d="M21 11v5c0 1.1-.9 2-2 2s-2-.9-2-2v-5l2-1 2 1z" />
                <path fill="#fff" opacity="0.2" d="M12 6.2L5.2 10 12 13.8 18.8 10z" />
              </svg>

              <h3 className="text-lg xl:text-xl font-extrabold text-slate-900 mb-1 tracking-tight">90%+ Board</h3>
              <p className="text-slate-600 font-semibold text-xs xl:text-sm leading-relaxed">Performers</p>
            </div>

            {/* Item 4: Teal */}
            <div className="relative bg-white p-3 sm:p-5 xl:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group fade-in-up delay-400 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

              <svg viewBox="0 0 24 24" className="w-12 h-12 xl:w-14 xl:h-14 mb-4 drop-shadow-md group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300 relative z-10">
                <defs>
                  <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5eead4" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                </defs>
                <path fill="url(#grad-teal)" d="M16 4h-1a4 4 0 0 0-4-4 4 4 0 0 0-4 4H6a4 4 0 0 0-4 4c0 1.25.58 2.37 1.48 3.1A4.5 4.5 0 0 0 4 15.5a4.5 4.5 0 0 0 4.5 4.5h7a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-1.48-4.4A4 4 0 0 0 20 8a4 4 0 0 0-4-4zM8.5 18A2.5 2.5 0 0 1 6 15.5 2.5 2.5 0 0 1 8.5 13H12v5H8.5zm7.5 0H12v-5h4.5A2.5 2.5 0 0 1 19 15.5 2.5 2.5 0 0 1 16.5 18z" />
                <path fill="#fff" opacity="0.4" d="M6 11a2 2 0 0 1-2-2 2 2 0 0 1 2-2h1.27A3.94 3.94 0 0 0 7 9c0 .72.19 1.4.5 2H6zm12 0h-1.5c.31-.6.5-1.28.5-2a3.94 3.94 0 0 0-.27-2H18a2 2 0 0 1 2 2 2 2 0 0 1-2 2zM11 2h2a2 2 0 0 1 2 2H9a2 2 0 0 1 2-2z" />
              </svg>

              <h3 className="text-lg xl:text-xl font-extrabold text-slate-900 mb-1 tracking-tight">Strong</h3>
              <p className="text-slate-600 font-semibold text-xs xl:text-sm leading-relaxed">Olympiad Exposure</p>
            </div>

            {/* Item 5: Violet */}
            <div className="col-span-2 md:col-span-1 mx-auto w-full max-w-[70%] sm:max-w-none relative bg-white p-3 sm:p-5 xl:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group fade-in-up delay-500 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] transition-all duration-300 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

              <svg viewBox="0 0 24 24" className="w-12 h-12 xl:w-14 xl:h-14 mb-4 drop-shadow-md group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 relative z-10">
                <defs>
                  <linearGradient id="grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c4b5fd" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                </defs>
                <path fill="url(#grad-violet)" d="M12 13c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
                <path fill="#fff" opacity="0.6" d="M8 7h2v1H8V7zm6 0h2v1h-2V7zm-3.5.5h3v-1h-3v1z" />
                <path fill="#fff" opacity="0.25" d="M11 14h2l1 5-2 2-2-2 1-5z" />
              </svg>

              <h3 className="text-lg xl:text-xl font-extrabold text-slate-900 mb-1 tracking-tight">10+ Years</h3>
              <p className="text-slate-600 font-semibold text-xs xl:text-sm leading-relaxed">of Teaching Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. results_Sec Section */}
      <section className="p-4 md:p-12 pb-20 relative z-20">
        <div className="max-w-6xl mx-auto bg-gradient-main rounded-3xl overflow-hidden shadow-2xl relative border border-blue-400/20">
          <Confetti />
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 blur-3xl rounded-full pointer-events-none"></div>

          {/* Header */}
          <div className="relative z-10 text-center pt-10 pb-6 px-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-xl shadow-lg border-2 border-red-500">
                <div className="flex flex-col items-center leading-none">
                  <span className="text-3xl font-black text-blue-800 italic">C<sup className="text-sm align-top text-red-500">3</sup></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                Catalyst <span className="text-blue-200">Coaching Classes</span>
              </h2>
            </div>

            <div className="inline-block relative">
              <div className="absolute -top-4 -left-8 text-yellow-400 opacity-50 text-2xl">✦</div>
              <div className="absolute -bottom-2 -right-8 text-yellow-400 opacity-50 text-2xl">✦</div>
              <h3 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-500 italic uppercase">
                JEE MAINS
              </h3>
            </div>

            <div className="mt-4 mb-4">
              <span className="bg-blue-600 text-white px-8 py-2 rounded-full font-bold text-xl uppercase tracking-widest border border-blue-400 shadow-xl inline-block">
                Session 1 Results
              </span>
            </div>
          </div>

          {/* Main Toppers Row */}
          <div className="relative z-10 px-2 sm:px-6 pb-6 sm:pb-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-8 max-w-4xl mx-auto mb-6 sm:mb-12">
              {/* Topper 1 */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-[2px] sm:p-1 shadow-xl sm:shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 gold-glow">
                <div className="relative bg-white rounded-[1rem] sm:rounded-[1.4rem] p-3 sm:p-6 text-center">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="topper-ribbon-gold text-white px-3 sm:px-8 py-0.5 sm:py-1 font-black text-[10px] sm:text-lg shadow-md sm:shadow-lg leading-none">TOPPER</div>
                    <div className="text-yellow-500 text-xs sm:text-2xl absolute -top-1.5 sm:-top-4 left-1/2 -translate-x-1/2">★</div>
                  </div>
                  <div className="w-16 h-16 sm:w-48 sm:h-48 mx-auto mt-2 sm:mt-4 mb-2 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border-2 sm:border-4 border-yellow-50">
                    <svg className="w-full h-full text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </div>
                  <h3 className="text-[11px] sm:text-2xl font-bold text-blue-900 mb-0.5 sm:mb-1 leading-tight line-clamp-1">Adrik Biswas</h3>
                  <div className="text-xl sm:text-5xl font-black text-yellow-600 flex items-center justify-center gap-0.5 sm:gap-1">
                    99.70 <span className="text-[9px] sm:text-lg font-bold text-yellow-600/60">%ile</span>
                  </div>
                </div>
              </div>

              {/* Topper 2 */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-[2px] sm:p-1 shadow-xl sm:shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="relative bg-white rounded-[1rem] sm:rounded-[1.4rem] p-3 sm:p-6 text-center">
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="topper-ribbon-blue text-white px-3 sm:px-8 py-0.5 sm:py-1 font-black text-[10px] sm:text-lg shadow-md sm:shadow-lg leading-none">TOPPER</div>
                    <div className="text-yellow-400 text-xs sm:text-2xl absolute -top-1.5 sm:-top-4 left-1/2 -translate-x-1/2">★</div>
                  </div>
                  <div className="w-16 h-16 sm:w-48 sm:h-48 mx-auto mt-2 sm:mt-4 mb-2 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border-2 sm:border-4 border-blue-50">
                    <svg className="w-full h-full text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </div>
                  <h3 className="text-[11px] sm:text-2xl font-bold text-blue-900 mb-0.5 sm:mb-1 leading-tight line-clamp-1">Pawar Aryan Gajanan</h3>
                  <div className="text-xl sm:text-5xl font-black text-blue-800 flex items-center justify-center gap-0.5 sm:gap-1">
                    99.51 <span className="text-[9px] sm:text-lg font-bold text-blue-600/60">%ile</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Performers */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              {/* Performers */}
              <div className="bg-white/95 rounded-lg sm:rounded-2xl p-2 sm:p-6 text-center shadow-lg border border-white/20">
                <div className="w-10 h-10 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-slate-100">
                  <svg className="w-full h-full text-slate-300 p-1.5 sm:p-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <h4 className="font-bold text-blue-900 text-[9px] sm:text-lg leading-[1.1] sm:leading-tight mb-1 sm:mb-2 line-clamp-2 min-h-[20px] sm:min-h-0">Sushant Sanjay Awalekar</h4>
                <p className="text-sm sm:text-3xl font-black text-blue-700">98.86</p>
              </div>

              <div className="bg-white/95 rounded-lg sm:rounded-2xl p-2 sm:p-6 text-center shadow-lg border border-white/20">
                <div className="w-10 h-10 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-slate-100">
                  <svg className="w-full h-full text-slate-300 p-1.5 sm:p-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <h4 className="font-bold text-blue-900 text-[9px] sm:text-lg leading-[1.1] sm:leading-tight mb-1 sm:mb-2 line-clamp-2 min-h-[20px] sm:min-h-0">Kad Yash Santosh</h4>
                <p className="text-sm sm:text-3xl font-black text-blue-700">98.76</p>
              </div>

              <div className="bg-white/95 rounded-lg sm:rounded-2xl p-2 sm:p-6 text-center shadow-lg border border-white/20">
                <div className="w-10 h-10 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-slate-100">
                  <svg className="w-full h-full text-slate-300 p-1.5 sm:p-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <h4 className="font-bold text-blue-900 text-[9px] sm:text-lg leading-[1.1] sm:leading-tight mb-1 sm:mb-2 line-clamp-2 min-h-[20px] sm:min-h-0">Sanskruti Abhay Katkamwar</h4>
                <p className="text-sm sm:text-3xl font-black text-blue-700">97.69</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-blue-950/50 py-6 sm:py-8 px-4 sm:px-6 text-center border-t border-white/5">
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-medium">
              Many more students have also performed <span className="text-yellow-400 font-black">exceptionally well</span> in this session.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ResultsSection Top Performers part */}
      <section className="bg-white relative overflow-hidden w-full py-16 -mt-16 z-10">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="mb-8 sm:mb-12 text-center">
            <p className="text-[#0090D4] font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2">Success Stories</p>
            <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Our Top Performers</h2>
            <div className="w-12 h-1 bg-[#0090D4] rounded-full mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-10 w-full">
            {resultsData.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 w-full flex justify-center">
            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium tracking-wide italic">
              and many more...
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] rounded-3xl p-8 sm:p-12 text-white shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4">Ready to Join Our Success Story?</h2>
            <p className="text-white/90 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Take the first step towards your dream career. Join Catalyst and become the next success story.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#0090D4] font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Request a Callback
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
