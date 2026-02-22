import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, GraduationCap, ExternalLink } from 'lucide-react';

const pathways = {
  math: {
    title: "Mathematics Pathway",
    emoji: "🧮",
    color: "from-[#0090D4] to-indigo-600",
    steps: [
      { name: "IMO (SOF)", desc: "School-level math olympiad. Builds logical reasoning.", classes: "6–10", website: "https://sofworld.org" },
      { name: "NSTSE", desc: "Conceptual depth in math with detailed analytics.", classes: "6–10", website: "https://unifiedcouncil.com" },
      { name: "IOQM", desc: "The gateway to International Math Olympiad. Advanced problem-solving.", classes: "8–12", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "RMO", desc: "Regional level qualifier. Advanced proofs and subjective math.", classes: "9–12", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "INMO", desc: "National level. Top 30–35 students selected for training camp.", classes: "9–12", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "IMO (International)", desc: "The ultimate goal — representing India on the global stage.", classes: "Selected", website: "https://www.imo-official.org" },
    ],
    flowSteps: ["IOQM", "RMO", "INMO", "IMO"],
  },
  science: {
    title: "Science Pathway",
    emoji: "🔬",
    color: "from-green-500 to-emerald-600",
    steps: [
      { name: "NSO (SOF)", desc: "School-level science olympiad. PCB concepts.", classes: "6–10", website: "https://sofworld.org" },
      { name: "Homi Bhabha", desc: "Unique practical + theory exam. Very prestigious.", classes: "9", website: "https://msta.in" },
      { name: "NSEJS", desc: "Gateway to International Junior Science Olympiad.", classes: "8–10", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "NSEP / NSEC / NSEB", desc: "National-level subject olympiads in Physics, Chemistry, Biology.", classes: "11–12", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "INPhO / INChO / INBO", desc: "Indian National Olympiad. Top students selected for camp.", classes: "11–12", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "IPhO / IChO / IBO", desc: "International Olympiad — the ultimate honor.", classes: "Selected", website: "#" },
    ],
    flowSteps: ["NSEJS", "INJSO", "OCSC", "IJSO"],
  },
};

export const KCPathway = () => {
  const location = useLocation();
  const selectedPathway = location.state?.pathway || 'math';
  const pathway = pathways[selectedPathway];

  useEffect(() => { window.scrollTo(0, 0); }, [selectedPathway]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className={`bg-gradient-to-r ${pathway.color} text-white py-8 sm:py-14`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-corner" className="animate-fadeIn inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={16} /> Back to Knowledge Corner
          </Link>
          <h1 className="animate-fadeInUp text-xl sm:text-4xl font-extrabold flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">{pathway.emoji}</span> {pathway.title}
          </h1>
        </div>
      </section>

      {/* Pathway Tabs */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 -mt-4 sm:-mt-5 relative z-10">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-1 flex gap-0.5 sm:gap-1">
          {['math', 'science'].map((p) => (
            <Link key={p} to="/knowledge-corner/pathway" state={{ pathway: p }}
              className={`flex-1 text-center py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-bold transition-all ${selectedPathway === p ? 'bg-[#0090D4] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
                }`}
            >
              {p === 'math' ? '🧮 Maths' : '🔬 Science'}
            </Link>
          ))}
        </div>
      </div>

      {/* Flow Diagram */}
      <section className="py-5 sm:py-8">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {pathway.flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${i === pathway.flowSteps.length - 1
                  ? 'bg-[#0090D4] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700'
                  }`}>{step}</span>
                {i < pathway.flowSteps.length - 1 && <ArrowRight size={16} className="text-slate-300" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-4 sm:py-6 pb-10 sm:pb-16">
        <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="space-y-3 sm:space-y-4">
            {pathway.steps.map((step, idx) => (
              <div key={idx} className="animate-fadeInUp flex gap-3 sm:gap-4 items-start bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0090D4] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">{step.name}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5 sm:mt-1">{step.desc}</p>
                  <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 block">Classes: {step.classes}</span>
                </div>
                <a href={step.website} target="_blank" rel="noopener noreferrer"
                  className="text-[#0090D4] hover:text-blue-700 shrink-0 mt-1">
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
