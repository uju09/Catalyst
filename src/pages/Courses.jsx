import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame, Zap, ArrowRight, Calendar, Clock, Target,
  BookOpen, GraduationCap, Users, CheckCircle2
} from 'lucide-react';

export const Courses = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3F] via-[#0060A0] to-[#0090D4] text-white py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">Our Programs</h1>
          <p className="text-white/60 text-sm sm:text-lg max-w-2xl mx-auto">
            Comprehensive programs designed to transform aspirants into achievers
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

          {/* IGNITE Foundation Program */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 sm:p-6 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Flame size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-extrabold text-white">IGNITE Foundation Program</h2>
                <p className="text-white/70 text-xs sm:text-sm">For students currently in 7th or 8th Std</p>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <p className="text-slate-500 text-xs sm:text-sm mb-5 italic">
                1-year roadmap to mastering academics + competitive edge in Olympiads, NSEJS & future JEE/NEET prep.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <Calendar size={14} className="text-[#0090D4] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Duration</p>
                  <p className="text-slate-800 font-bold text-xs sm:text-sm">Apr 2026 – Feb 2027</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <Clock size={14} className="text-orange-500 mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Schedule</p>
                  <p className="text-slate-800 font-bold text-xs sm:text-sm">3–4 Days/week</p>
                  <p className="text-slate-400 text-[8px]">6 PM – 9 PM</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <Target size={14} className="text-red-500 mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Competitions</p>
                  <div className="flex flex-wrap gap-0.5 mt-1">
                    {['NSEJS', 'IJSO', 'IOQM', 'RMO', 'NSE'].map((c) => (
                      <span key={c} className="px-1.5 py-0.5 bg-red-50 text-red-500 text-[7px] sm:text-[8px] font-bold rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <BookOpen size={14} className="text-purple-500 mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Subjects</p>
                  <p className="text-slate-800 font-bold text-xs sm:text-sm">PCB + Maths</p>
                  <p className="text-slate-400 text-[8px]">+ Mental Ability</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
                {['Concept Depth', 'Guided Practice', '3 hrs/day', 'Weekly Tests'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-orange-50 text-orange-600 text-[9px] sm:text-xs font-semibold rounded-full">
                    <CheckCircle2 size={10} /> {tag}
                  </span>
                ))}
              </div>

              <Link to="/courses/ignite" className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xs sm:text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                View Full Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* SUPER-13 Integrated Program */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-[#0060A0] to-[#0090D4] p-4 sm:p-6 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Zap size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-extrabold text-white">SUPER-13 Integrated Program</h2>
                <p className="text-white/70 text-xs sm:text-sm">For students in 10th Std · 2-Year Program</p>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <p className="text-slate-500 text-xs sm:text-sm mb-5 italic">
                2-Year roadmap for Engineering Competitions — JEE, MHTCET, BITSAT & more.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <Calendar size={14} className="text-[#0090D4] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Duration</p>
                  <p className="text-slate-800 font-bold text-xs sm:text-sm">Apr 2026 – May 2028</p>
                  <p className="text-slate-400 text-[8px]">incl. bridge course</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <Clock size={14} className="text-blue-500 mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Schedule</p>
                  <p className="text-slate-800 font-bold text-xs sm:text-sm">6 Days/week</p>
                  <p className="text-slate-400 text-[8px]">5 hrs/day</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <Target size={14} className="text-red-500 mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Target Exams</p>
                  <div className="flex flex-wrap gap-0.5 mt-1">
                    {['JEE', 'BITSAT', 'MHTCET', 'IISER', 'UGEE'].map((e) => (
                      <span key={e} className="px-1.5 py-0.5 bg-red-50 text-red-500 text-[7px] sm:text-[8px] font-bold rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <GraduationCap size={14} className="text-purple-500 mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Faculty</p>
                  <p className="text-slate-800 font-bold text-xs sm:text-sm">IITians & NITians</p>
                  <p className="text-slate-400 text-[8px]">10+ yrs experience</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
                {['Bridge Course', '3000+ Hrs', '300+ Test Hrs', '2 Timing Formats'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-[#0090D4] text-[9px] sm:text-xs font-semibold rounded-full">
                    <CheckCircle2 size={10} /> {tag}
                  </span>
                ))}
              </div>

              <Link to="/courses/super-13" className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#0060A0] to-[#0090D4] text-white font-bold text-xs sm:text-sm rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                View Full Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-[#0A1E3F] to-[#0060A0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-lg sm:text-2xl font-extrabold mb-2">Not sure which program is right for you?</h2>
          <p className="text-white/50 text-xs sm:text-base mb-5">Contact us and we'll help you choose the best fit.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#0090D4] font-bold text-sm rounded-full hover:shadow-lg transition-all">
              Contact Us <ArrowRight size={14} />
            </Link>
            <Link to="/knowledge-corner" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white/30 text-white font-bold text-sm rounded-full hover:bg-white/10 transition-all">
              Knowledge Corner <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
