import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Lightbulb, Trophy, GraduationCap } from 'lucide-react';

const examHighlights = [
  { icon: Trophy, label: "Olympiad Pathways", desc: "IOQM, NSEJS, IMO & more" },
  { icon: GraduationCap, label: "Exam Levels", desc: "From Confidence Builders to Gold Standard" },
  { icon: Lightbulb, label: "Parent FAQs", desc: "Get your questions answered" },
];

export const KnowledgeCornerPreview = () => (
  <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0090D4] flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <span className="text-[#0090D4] font-semibold uppercase tracking-wide text-sm">Knowledge Corner</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Which Competitive Exam is Right for Your Child?
          </h2>

          <p className="text-slate-300 mb-8 leading-relaxed">
            Competitive exams are not just about ranks — they are about <strong className="text-white">thinking ability, problem-solving, and early exposure to higher-level learning</strong>.
            Explore our comprehensive guide to understand what exams exist, when to attempt them, and why they matter.
          </p>

          <Link
            to="/knowledge-corner"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0090D4] text-white font-bold rounded-full hover:bg-[#0080C4] transition-all shadow-lg transform hover:-translate-y-1"
          >
            Explore Knowledge Corner <ArrowRight size={20} />
          </Link>
        </div>

        {/* Right - Highlights */}
        <div className="space-y-4">
          {examHighlights.map((item, i) => (
            <Link
              key={i}
              to="/knowledge-corner"
              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0090D4]/20 flex items-center justify-center text-[#0090D4] group-hover:bg-[#0090D4] group-hover:text-white transition-all">
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white">{item.label}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
              <ArrowRight size={20} className="text-slate-500 group-hover:text-[#0090D4] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);
