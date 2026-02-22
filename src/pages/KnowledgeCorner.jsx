import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Search, Layers, GitBranch, GraduationCap,
  ArrowRight, Lightbulb, Phone, MessageCircle, Sparkles, Trophy, Star, Rocket
} from 'lucide-react';

const tabs = [
  { id: 'level', label: 'Explore by Level', icon: Search, mobileLabel: 'Level' },
  { id: 'pathway', label: 'Explore by Pathway', icon: GitBranch, mobileLabel: 'Pathway' },
  { id: 'class', label: 'Explore by Class', icon: GraduationCap, mobileLabel: 'Class' },
];

// ============ LEVEL VIEW ============
const LevelView = () => (
  <div>
    <h3 className="text-center font-bold text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 uppercase tracking-wider animate-fadeInUp">
      🎯 Choose by Level
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
      {/* Level 1 */}
      <Link to="/knowledge-corner/level" state={{ level: 1 }}
        className="hover-glow animate-fadeInUp delay-100 relative bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-7 text-center group overflow-hidden"
      >
        {/* Shimmering overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none rounded-2xl"></div>
        {/* Floating icon */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
          <Star size={22} className="text-white sm:w-7 sm:h-7" />
        </div>
        <h4 className="font-extrabold text-lg sm:text-xl mb-0.5 sm:mb-1">LEVEL 1</h4>
        <p className="text-white/90 text-[11px] font-bold uppercase tracking-widest mb-3">Entry / Exploration</p>
        <div className="w-10 h-0.5 bg-white/30 mx-auto mb-3"></div>
        <p className="text-white/80 text-sm font-medium">Beginner-Friendly</p>
        <p className="text-white/60 text-xs mt-1">For Std 6–8</p>
        <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold bg-white/20 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Explore <ArrowRight size={12} />
        </div>
      </Link>

      {/* Level 2 */}
      <Link to="/knowledge-corner/level" state={{ level: 2 }}
        className="hover-glow animate-fadeInUp delay-200 relative bg-gradient-to-br from-[#0090D4] to-blue-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-7 text-center group overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none rounded-2xl"></div>
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
          <Trophy size={22} className="text-white sm:w-7 sm:h-7" />
        </div>
        <h4 className="font-extrabold text-lg sm:text-xl mb-0.5 sm:mb-1">LEVEL 2</h4>
        <p className="text-white/90 text-[11px] font-bold uppercase tracking-widest mb-3">Intermediate / Competitive</p>
        <div className="w-10 h-0.5 bg-white/30 mx-auto mb-3"></div>
        <p className="text-white/80 text-sm font-medium">Skill Building</p>
        <p className="text-white/60 text-xs mt-1">For Std 8–10</p>
        <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold bg-white/20 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Explore <ArrowRight size={12} />
        </div>
      </Link>

      {/* Level 3 */}
      <Link to="/knowledge-corner/level" state={{ level: 3 }}
        className="hover-glow animate-fadeInUp delay-300 relative bg-gradient-to-br from-red-500 to-rose-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-7 text-center group overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none rounded-2xl"></div>
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
          <Rocket size={22} className="text-white sm:w-7 sm:h-7" />
        </div>
        <h4 className="font-extrabold text-lg sm:text-xl mb-0.5 sm:mb-1">LEVEL 3</h4>
        <p className="text-white/90 text-[11px] font-bold uppercase tracking-widest mb-3">Gold Standard / Olympiad Path</p>
        <div className="w-10 h-0.5 bg-white/30 mx-auto mb-3"></div>
        <p className="text-white/80 text-sm font-medium">Elite Exams</p>
        <p className="text-white/60 text-xs mt-1">For Top Students</p>
        <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold bg-white/20 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Explore <ArrowRight size={12} />
        </div>
      </Link>
    </div>
  </div>
);

// ============ PATHWAY VIEW ============
const PathwayView = () => (
  <div>
    <h3 className="text-center font-bold text-lg text-slate-700 mb-8 uppercase tracking-wider animate-fadeInUp">
      🛤️ Explore by Pathway
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
      {/* Math Pathway */}
      <Link to="/knowledge-corner/pathway" state={{ pathway: 'math' }}
        className="hover-glow animate-fadeInUp delay-100 relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200 group overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-200/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-200/20 rounded-full group-hover:scale-150 transition-transform duration-700 delay-100"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#0090D4] rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <span className="text-2xl">🧮</span>
            </div>
            <h4 className="font-bold text-[#0090D4] text-lg">Maths Pathway</h4>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap text-xs font-semibold text-blue-600">
            {['IMO', 'NSTSE', 'IOQM', 'INMO'].map((s, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className={`px-2 py-0.5 rounded-full ${i === 3 ? 'bg-blue-600 text-white' : 'bg-blue-100'} group-hover:scale-105 transition-transform`}>{s}</span>
                {i < 3 && <ArrowRight size={10} className="text-blue-300" />}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 flex items-center gap-1 group-hover:text-[#0090D4] transition-colors">
            View full pathway <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </p>
        </div>
      </Link>

      {/* Science Pathway */}
      <Link to="/knowledge-corner/pathway" state={{ pathway: 'science' }}
        className="hover-glow animate-fadeInUp delay-200 relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200 group overflow-hidden"
      >
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-200/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-200/20 rounded-full group-hover:scale-150 transition-transform duration-700 delay-100"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <span className="text-2xl">🔬</span>
            </div>
            <h4 className="font-bold text-green-600 text-lg">Science Pathway</h4>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap text-xs font-semibold text-green-600">
            {['NSO', 'NSEJS', 'NSEP', 'INO'].map((s, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className={`px-2 py-0.5 rounded-full ${i === 3 ? 'bg-green-600 text-white' : 'bg-green-100'} group-hover:scale-105 transition-transform`}>{s}</span>
                {i < 3 && <ArrowRight size={10} className="text-green-300" />}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 flex items-center gap-1 group-hover:text-green-500 transition-colors">
            View full pathway <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </p>
        </div>
      </Link>
    </div>
  </div>
);

// ============ CLASS VIEW ============
const ClassView = () => (
  <div>
    <h3 className="text-center font-bold text-lg text-slate-700 mb-8 uppercase tracking-wider animate-fadeInUp">
      🎓 Explore by Class
    </h3>
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
      {['Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10'].map((std, i) => (
        <Link
          key={std}
          to="/knowledge-corner/class"
          state={{ class: std }}
          className={`animate-fadeInUp px-8 py-5 bg-white border-2 border-slate-200 rounded-2xl text-slate-700 font-bold text-sm hover:border-[#0090D4] hover:text-[#0090D4] hover:shadow-lg hover:-translate-y-2 hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {/* Hover background fill */}
          <div className="absolute inset-0 bg-[#0090D4]/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl origin-center"></div>
          <span className="relative z-10">{std}</span>
        </Link>
      ))}
    </div>
  </div>
);

// ============ MAIN PAGE ============
export const KnowledgeCorner = () => {
  const [activeTab, setActiveTab] = useState('level');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1E3F] via-[#0060A0] to-[#0090D4] text-white py-10 sm:py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-16 w-40 h-40 bg-[#EE3F46]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FACC15]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fadeInUp flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
              <BookOpen size={18} className="sm:w-[22px] sm:h-[22px]" />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Knowledge Corner
            </h1>
          </div>
          <p className="animate-fadeInUp delay-100 text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-2 font-medium">
            Competitive Exams & Olympiad Roadmap (Std 6–10)
          </p>
          <p className="animate-fadeInUp delay-200 text-xs sm:text-sm text-white/50 max-w-xl mx-auto">
            Helping parents choose the RIGHT exams at the RIGHT stage — without stress.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-3xl mx-auto px-3 sm:px-4 -mt-6 sm:-mt-7 relative z-20 animate-fadeInUp delay-300">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-1 sm:p-1.5 flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                ? 'bg-[#0090D4] text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? 'animate-pulse' : ''} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.mobileLabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-12 sm:py-16" key={activeTab}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'level' && <LevelView />}
          {activeTab === 'pathway' && <PathwayView />}
          {activeTab === 'class' && <ClassView />}
        </div>
      </section>

      {/* Parent Note */}
      <section className="py-10 bg-gradient-to-r from-amber-50/80 to-orange-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl group-hover:animate-bounce">📝</span>
                <h3 className="font-bold text-slate-800 text-lg uppercase">Parent Note</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Olympiads are about <strong className="text-slate-800">learning & growth</strong>.<br />
                Start at the right level.<br />
                Progress with interest, not pressure.
              </p>
            </div>
            <div className="flex flex-col items-center text-center shrink-0">
              <p className="text-slate-500 text-xs font-medium mb-2">Not sure where to start?</p>
              <Link
                to="/contact"
                className="animate-pulseGlow inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Sparkles size={14} />
                Get a Guided Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0090D4] to-[#0070A4] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-2xl font-extrabold mb-4">
            Confused About Which Exam is Right for Your Child?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><MessageCircle size={18} /><span className="text-sm">Talk to our mentors</span></div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><Phone size={18} /><span className="text-sm">Book a free session</span></div>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#0090D4] font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};
