import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap, Calendar, Target, BookOpen, ArrowRight, Award,
  Clock, GraduationCap, User, Phone, Send, CheckCircle,
  BarChart3, Timer, CalendarDays, Activity
} from 'lucide-react';

const targetExams = ['JEE Mains', 'JEE Advanced', 'BITSAT', 'MHTCET', 'IISER', 'UGEE'];
const subjects = ['Physics', 'Chemistry', 'Maths'];

export const Super13Program = () => {
  const [form, setForm] = useState({ name: '', phone: '', currentClass: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUPER-13 interest:', form);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', currentClass: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3F] via-[#0060A0] to-[#0090D4] text-white py-8 sm:py-14 relative overflow-hidden">
        <div className="absolute top-10 right-16 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
              <Zap size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-extrabold leading-tight">SUPER-13 Integrated Program</h1>
              <p className="text-blue-300 text-xs sm:text-sm font-semibold">For 10th Std · 2-Year Program</p>
            </div>
          </div>
          <p className="text-white/50 text-xs sm:text-sm max-w-2xl mt-1 italic">
            2-Year roadmap for Engineering Competitions — JEE, MHTCET, BITSAT & more.
          </p>
        </div>
      </section>

      {/* Main Content — Grid Layout */}
      <section className="py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-4">

              {/* Quick Info Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                  <Calendar size={14} className="text-[#0090D4] mb-1" />
                  <p className="text-[10px] text-slate-400 font-bold">Duration</p>
                  <p className="text-[#0090D4] font-extrabold text-xs sm:text-sm mt-0.5">Apr 2026 – May 2028</p>
                  <p className="text-slate-300 text-[8px]">incl. bridge course</p>
                </div>
                <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                  <BookOpen size={14} className="text-purple-500 mb-1" />
                  <p className="text-[10px] text-slate-400 font-bold">Subjects</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {subjects.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 bg-blue-50 text-[#0090D4] text-[9px] font-bold rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                  <GraduationCap size={14} className="text-orange-500 mb-1" />
                  <p className="text-[10px] text-slate-400 font-bold">Faculty</p>
                  <p className="text-slate-700 font-bold text-xs mt-0.5">IITians & NITians</p>
                  <p className="text-slate-300 text-[8px]">10+ yrs experience</p>
                </div>
                <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                  <Target size={14} className="text-red-500 mb-1" />
                  <p className="text-[10px] text-slate-400 font-bold">Target Exams</p>
                  <div className="flex flex-wrap gap-0.5 mt-1">
                    {targetExams.map((e) => (
                      <span key={e} className="px-1 py-0.5 bg-red-50 text-red-500 text-[7px] sm:text-[8px] font-bold rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bridge Course */}
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-xl p-4 sm:p-5 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-amber-400 text-white text-[8px] font-bold rounded-full uppercase">Mandatory</span>
                  <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">Bridge Course</h3>
                  <span className="text-slate-400 text-[10px] ml-auto">Starts 6th April 2026</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { title: 'Smooth Transition', desc: '2-week prep for diverse boards' },
                    { title: 'Foundation First', desc: 'Class 9–10 fundamentals for JEE' },
                    { title: 'Analytical Edge', desc: 'JEE-style problem-solving intro' },
                  ].map((f, i) => (
                    <div key={i} className="bg-white rounded-lg p-2.5 border border-amber-100/50">
                      <p className="text-orange-500 font-bold text-[10px] sm:text-xs mb-0.5">{f.title}</p>
                      <p className="text-slate-500 text-[9px] sm:text-[10px] leading-tight">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 bg-yellow-50 rounded-lg px-3 py-2 flex items-center gap-1.5 border border-yellow-200">
                  <Award size={12} className="text-yellow-600 shrink-0" />
                  <p className="text-[9px] sm:text-[10px] text-yellow-800 font-medium">Scholarship Test at end of Bridge Course — earn exciting scholarships!</p>
                </div>
              </div>

              {/* SUPER 13 Advantage — Stats + Timings Side by Side */}
              <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-800 mb-0.5">The SUPER 13 Advantage</h3>
                <p className="text-slate-400 text-[10px] mb-3">Highest contact classroom program in the industry</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {[
                    { icon: BarChart3, label: 'Engagement', val: '3000+', unit: 'Hrs' },
                    { icon: Timer, label: 'Testing', val: '300+', unit: 'Hrs' },
                    { icon: CalendarDays, label: 'Schedule', val: '6 Days', unit: '/Week' },
                    { icon: Activity, label: 'Daily', val: '5', unit: 'hrs/day' },
                  ].map((s, i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-2.5 text-center">
                      <s.icon size={12} className="text-[#0090D4] mx-auto mb-1" />
                      <p className="text-[8px] text-slate-400 font-bold">{s.label}</p>
                      <p className="text-[#0090D4] font-extrabold text-sm sm:text-lg leading-tight">{s.val}<span className="text-[10px] font-bold"> {s.unit}</span></p>
                    </div>
                  ))}
                </div>

                {/* Timings inline */}
                <div className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2 text-white">
                    <Clock size={14} />
                    <span className="font-bold text-xs">Timings — 2 Formats</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-md p-2.5">
                      <p className="text-red-500 text-[9px] font-bold">Morning</p>
                      <p className="text-slate-800 font-extrabold text-sm sm:text-base">8 AM – 2 PM</p>
                    </div>
                    <div className="bg-white rounded-md p-2.5">
                      <p className="text-red-500 text-[9px] font-bold">Evening</p>
                      <p className="text-slate-800 font-extrabold text-sm sm:text-base">2:30 – 8:30 PM</p>
                    </div>
                  </div>
                  <p className="text-white/40 text-[8px] mt-2 italic">Closed 6 days during Diwali</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Sidebar */}
            <div className="space-y-4">

              {/* Interest Form */}
              <div className="relative bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-blue-100 overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-50 rounded-full blur-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-800 mb-0.5">Get Started</h3>
                  <p className="text-slate-400 text-[10px] mb-3">Course details & eligibility info</p>
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2.5 text-green-700 text-center text-xs font-bold">
                      <CheckCircle size={14} className="inline mr-1" />We'll contact you soon!
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2">
                      <div className="relative">
                        <User size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-blue-400" />
                        <input type="text" placeholder="Parent / Student Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="pl-7 pr-2 py-2.5 rounded-lg text-xs text-slate-800 bg-slate-50 border border-slate-200 w-full outline-none placeholder-slate-400 focus:border-blue-400 focus:bg-white transition-all" />
                      </div>
                      <div className="relative">
                        <Phone size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-blue-400" />
                        <input type="tel" placeholder="Mobile Number" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="pl-7 pr-2 py-2.5 rounded-lg text-xs text-slate-800 bg-slate-50 border border-slate-200 w-full outline-none placeholder-slate-400 focus:border-blue-400 focus:bg-white transition-all" />
                      </div>
                      <select value={form.currentClass} onChange={(e) => setForm({ ...form, currentClass: e.target.value })} required
                        className="px-2 py-2.5 rounded-lg text-xs text-slate-600 bg-slate-50 border border-slate-200 w-full outline-none focus:border-blue-400 transition-all">
                        <option value="">Current Class</option>
                        <option value="10th">10th Std</option>
                      </select>
                      <button type="submit" className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xs rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-1.5 justify-center">
                        <Send size={12} /> Request Details
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#0A1E3F] to-[#0060A0] rounded-xl p-4 sm:p-5 text-white">
                <h4 className="font-bold text-sm mb-1">Not sure which exam is right?</h4>
                <p className="text-white/50 text-[10px] mb-3">Our Knowledge Corner has everything mapped out.</p>
                <Link to="/knowledge-corner" className="inline-flex items-center gap-1 px-4 py-2 bg-white text-[#0090D4] font-bold text-xs rounded-full hover:shadow-lg transition-all">
                  Explore <ArrowRight size={12} />
                </Link>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h4 className="font-bold text-slate-700 text-xs mb-2">Quick Contact</h4>
                <a href="tel:+917758884678" className="flex items-center gap-2 text-[#0090D4] text-xs font-semibold hover:underline mb-1">
                  <Phone size={12} /> +91 7758884678
                </a>
                <a href="tel:+918999519632" className="flex items-center gap-2 text-[#0090D4] text-xs font-semibold hover:underline">
                  <Phone size={12} /> +91 8999519632
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
