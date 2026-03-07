import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame, Rocket, ArrowRight, CalendarDays, Clock4, Crosshair,
  BookOpenText, GraduationCap, CheckCircle2
} from 'lucide-react';

export const Courses = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3F] via-[#0060A0] to-[#0090D4] text-white py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
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

          {/* IGNITE Foundation Program — uses IgniteProgram colors: green #1b3b2b, gold #eab308, orange #ea580c */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-[#1b3b2b] to-[#2d5a40] p-4 sm:p-6 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 rounded-xl flex items-center justify-center">
                <Flame size={22} className="text-[#eab308]" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-extrabold text-white">IGNITE Foundation Program</h2>
                <p className="text-white/60 text-xs sm:text-sm">For students currently in 7th or 8th Std</p>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <p className="text-gray-500 text-xs sm:text-sm mb-5 italic">
                1-year roadmap to mastering academics + competitive edge in Olympiads, NSEJS & future JEE/NEET prep.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <CalendarDays size={14} className="text-[#ea580c] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Duration</p>
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">Apr 2026 – Feb 2027</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <Clock4 size={14} className="text-[#ea580c] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Schedule</p>
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">3–4 Days/week</p>
                  <p className="text-gray-400 text-[8px]">6 PM – 9 PM</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <Crosshair size={14} className="text-[#ea580c] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Competitions</p>
                  <div className="flex flex-wrap gap-0.5 mt-1">
                    {['NSEJS', 'IJSO', 'IOQM', 'RMO', 'NSE'].map((c) => (
                      <span key={c} className="px-1.5 py-0.5 bg-yellow-50 text-[#ea580c] text-[7px] sm:text-[8px] font-bold rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <BookOpenText size={14} className="text-[#ea580c] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Subjects</p>
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">PCB + Maths</p>
                  <p className="text-gray-400 text-[8px]">+ Mental Ability</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
                {['Concept Depth', 'Guided Practice', '3 hrs/day', 'Weekly Tests'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-green-50 text-[#2d5a40] text-[9px] sm:text-xs font-semibold rounded-full">
                    <CheckCircle2 size={10} /> {tag}
                  </span>
                ))}
              </div>

              <Link to="/courses/ignite" className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-[#1b3b2b] hover:bg-[#2d5a40] text-white font-bold text-xs sm:text-sm rounded-full hover:shadow-lg hover:shadow-green-200 transition-all">
                View Full Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* SUPER-13 Integrated Program — uses Super13Program colors: blue #0f4c9c, #1e62c5, accent #3b82f6 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-[#0f4c9c] to-[#1e62c5] p-4 sm:p-6 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 rounded-xl flex items-center justify-center">
                <Rocket size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-extrabold text-white">SUPER-13 Integrated Program</h2>
                <p className="text-white/60 text-xs sm:text-sm">For students in 10th Std · 2-Year Program</p>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <p className="text-gray-500 text-xs sm:text-sm mb-5 italic">
                2-Year roadmap for Engineering Competitions — JEE, MHTCET, BITSAT & more.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <CalendarDays size={14} className="text-[#3b82f6] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Duration</p>
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">Apr 2026 – May 2028</p>
                  <p className="text-gray-400 text-[8px]">incl. bridge course</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <Clock4 size={14} className="text-[#3b82f6] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Schedule</p>
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">6 Days/week</p>
                  <p className="text-gray-400 text-[8px]">5 hrs/day</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <Crosshair size={14} className="text-[#3b82f6] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Target Exams</p>
                  <div className="flex flex-wrap gap-0.5 mt-1">
                    {['JEE', 'BITSAT', 'MHTCET', 'IISER', 'UGEE'].map((e) => (
                      <span key={e} className="px-1.5 py-0.5 bg-blue-50 text-[#1e40af] text-[7px] sm:text-[8px] font-bold rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <GraduationCap size={14} className="text-[#3b82f6] mb-1" />
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Faculty</p>
                  <p className="text-gray-800 font-bold text-xs sm:text-sm">IITians & NITians</p>
                  <p className="text-gray-400 text-[8px]">10+ yrs experience</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
                {['Bridge Course', '3000+ Hrs', '300+ Test Hrs', '2 Timing Formats'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-[#1e40af] text-[9px] sm:text-xs font-semibold rounded-full">
                    <CheckCircle2 size={10} /> {tag}
                  </span>
                ))}
              </div>

              <Link to="/courses/super-13" className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all">
                View Full Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-[#0A1E3F] to-[#0f4c9c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-lg sm:text-2xl font-extrabold mb-2">Not sure which program is right for you?</h2>
          <p className="text-white/50 text-xs sm:text-base mb-5">Contact us and we'll help you choose the best fit.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#0f4c9c] font-bold text-sm rounded-full hover:shadow-lg transition-all">
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
