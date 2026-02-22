import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame, Calendar, Target, BookOpen, ArrowRight,
  User, Phone, Send, Zap, Clock, Brain, BookMarked,
  CheckCircle, Sparkles
} from 'lucide-react';

const subjects9th = ['Physics', 'Chemistry', 'Biology', 'Maths', 'SST', 'English', 'Mental Ability'];
const subjects8th = ['Physics', 'Chemistry', 'Biology', 'Maths', 'Mental Ability'];
const targetCompetitions = ['NSEJS', 'IJSO', 'IOQM', 'RMO', 'NSE'];

export const IgniteProgram = () => {
  const [form, setForm] = useState({ name: '', phone: '', currentClass: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('IGNITE interest:', form);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', currentClass: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1E3F] via-[#0060A0] to-[#0090D4] text-white py-8 sm:py-14 relative overflow-hidden">
        <div className="absolute top-8 right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shrink-0">
              <Flame size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-extrabold leading-tight">IGNITE Foundation Program</h1>
              <p className="text-orange-300 text-xs sm:text-sm font-semibold">For students in 7th or 8th Std</p>
            </div>
          </div>
          <p className="text-white/50 text-xs sm:text-sm max-w-2xl mt-1 italic">
            1-year roadmap to mastering academics + competitive edge in Olympiads, NSEJS & future JEE/NEET prep.
          </p>
        </div>
      </section>

      {/* Main Content — Grid Layout */}
      <section className="py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">

            {/* LEFT COLUMN — Program Details */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">

              {/* Duration — Full Width */}
              <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Calendar size={16} className="text-[#0090D4]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold">Duration</p>
                  <p className="text-[#0090D4] font-extrabold text-sm sm:text-lg">April 2026 – Feb 2027</p>
                </div>
              </div>

              {/* Schedule + Intensity + Competitions + Subjects — 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-white rounded-xl p-3.5 sm:p-5 shadow-sm border border-gray-100 min-h-[90px]">
                  <Clock size={14} className="text-orange-500 mb-1.5" />
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold">Schedule</p>
                  <p className="text-slate-700 font-bold text-xs sm:text-sm mt-0.5">3–4 Days/week</p>
                  <p className="text-slate-400 text-[8px] sm:text-[10px]">6 PM – 9 PM</p>
                </div>
                <div className="bg-white rounded-xl p-3.5 sm:p-5 shadow-sm border border-gray-100 min-h-[90px]">
                  <Zap size={14} className="text-yellow-500 mb-1.5" />
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold">Intensity</p>
                  <p className="text-slate-700 font-bold text-xs sm:text-sm mt-0.5">3 hrs/day</p>
                  <p className="text-slate-400 text-[8px] sm:text-[10px]">2 subjects</p>
                </div>
                <div className="bg-white rounded-xl p-3.5 sm:p-5 shadow-sm border border-gray-100 min-h-[90px]">
                  <Target size={14} className="text-red-500 mb-1.5" />
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold mb-1.5">Target Competitions</p>
                  <div className="flex flex-wrap gap-1">
                    {targetCompetitions.map((c) => (
                      <span key={c} className="px-2 py-0.5 bg-red-50 text-red-500 text-[9px] sm:text-[10px] font-bold rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3.5 sm:p-5 shadow-sm border border-gray-100 min-h-[90px]">
                  <BookOpen size={14} className="text-purple-500 mb-1.5" />
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold mb-1.5">Subjects (9th)</p>
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {subjects9th.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 bg-purple-50 text-purple-600 text-[8px] sm:text-[9px] font-bold rounded-full">{s}</span>
                    ))}
                  </div>
                  <p className="text-[8px] text-slate-300 font-bold">8th: {subjects8th.join(', ')}</p>
                </div>
              </div>

              {/* IGNITE Advantage */}
              <div className="bg-gradient-to-br from-red-50/80 to-orange-50/50 rounded-xl p-4 sm:p-5 border border-red-100/50">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-800 mb-0.5">The IGNITE Advantage</h3>
                <p className="text-slate-400 italic text-[9px] sm:text-xs mb-3">Strong fundamentals. Right habits. Early edge.</p>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { icon: Brain, title: 'Concept Depth', desc: 'Clarity over rote' },
                    { icon: ArrowRight, title: 'Learning Style', desc: 'Concept → Application' },
                    { icon: Calendar, title: 'Weekly Plan', desc: '3d (8th) · 4d (9th)' },
                    { icon: Clock, title: '3 hrs/day', desc: 'Balanced intensity' },
                    { icon: BookMarked, title: 'Classroom', desc: 'Teach + practice' },
                    { icon: Sparkles, title: 'Philosophy', desc: 'Curiosity first' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-2 sm:p-3 border border-red-100/30">
                      <item.icon size={11} className="text-red-400 mb-0.5" />
                      <p className="text-slate-700 font-bold text-[9px] sm:text-xs leading-tight">{item.title}</p>
                      <p className="text-slate-400 text-[8px] sm:text-[10px] leading-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Sidebar */}
            <div className="space-y-4">

              {/* Interest Form */}
              <div className="relative bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-orange-100 overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-50 rounded-full blur-lg"></div>
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
                        <User size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-orange-400" />
                        <input type="text" placeholder="Parent / Student Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="pl-7 pr-2 py-2.5 rounded-lg text-xs text-slate-800 bg-slate-50 border border-slate-200 w-full outline-none placeholder-slate-400 focus:border-orange-400 focus:bg-white transition-all" />
                      </div>
                      <div className="relative">
                        <Phone size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-orange-400" />
                        <input type="tel" placeholder="Mobile Number" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="pl-7 pr-2 py-2.5 rounded-lg text-xs text-slate-800 bg-slate-50 border border-slate-200 w-full outline-none placeholder-slate-400 focus:border-orange-400 focus:bg-white transition-all" />
                      </div>
                      <select value={form.currentClass} onChange={(e) => setForm({ ...form, currentClass: e.target.value })} required
                        className="px-2 py-2.5 rounded-lg text-xs text-slate-600 bg-slate-50 border border-slate-200 w-full outline-none focus:border-orange-400 transition-all">
                        <option value="">Current Class</option>
                        <option value="7th">7th Std</option>
                        <option value="8th">8th Std</option>
                      </select>
                      <button type="submit" className="w-full px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xs rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-1.5 justify-center">
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
