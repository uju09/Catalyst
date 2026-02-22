import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';

const levels = {
  1: {
    title: "Level 1: The Confidence Builders",
    subtitle: "Entry / Exploration",
    color: "from-green-400 to-green-600",
    headerBg: "bg-green-500",
    description: "Best for: 6th – 8th Standard. These align closely with the school syllabus but add a layer of logical application.",
    exams: [
      { name: "SOF (NSO/IMO)", emoji: "🧮", difficulty: "Low to Mid", format: "MCQ (Objective)", duration: "1 Hour", advantage: "Best for overcoming exam fear and getting a 'National Rank.'", website: "https://sofworld.org" },
      { name: "VVM (Vigyan Manthan)", emoji: "🔬", difficulty: "Mid", format: "Digital / MCQ", duration: "90 Mins", advantage: "Focuses on Indian scientists and conceptual science. Very engaging.", website: "#" },
      { name: "NSTSE", emoji: "📊", difficulty: "Mid", format: "MCQ", duration: "90 Mins", advantage: "Provides a very detailed 'Success Gap' report for parents.", website: "https://unifiedcouncil.com" },
      { name: "SilverZone Olympiads", emoji: "🥈", difficulty: "Low to Mid", format: "MCQ", duration: "1 Hour", advantage: "Good for building exam confidence with application-based questions.", website: "https://silverzone.org" },
      { name: "Indian Talent Olympiad", emoji: "🇮🇳", difficulty: "Easy", format: "MCQ", duration: "1 Hour", advantage: "Covers fundamentals across Math & Science.", website: "https://indiantalent.org" },
    ]
  },
  2: {
    title: "Level 2: Logic & State Specialists",
    subtitle: "Intermediate / Competitive",
    color: "from-[#0090D4] to-blue-600",
    headerBg: "bg-[#0090D4]",
    description: "Best for: 8th – 10th Standard. These require students to think 'outside the box' and move away from rote learning.",
    exams: [
      { name: "MTSE (Maharashtra)", emoji: "📝", difficulty: "Mid-High", format: "MCQ (SAT + MAT)", duration: "3 Hours", advantage: "The gold standard for state-level talent recognition.", website: "#" },
      { name: "NMTC (Primary/Junior)", emoji: "🔢", difficulty: "Mid-High", format: "Objective + Subjective", duration: "2-3 Hours", advantage: "Focused purely on creative Math. Teaches how to write 'proofs'.", website: "#" },
      { name: "Homi Bhabha (DHBBVC)", emoji: "⚗️", difficulty: "Mid-High", format: "Theory + Practical", duration: "Variable", advantage: "Includes a Practical Lab Exam, making it very prestigious.", website: "https://msta.in" },
      { name: "Aryabhatta (AMO)", emoji: "📐", difficulty: "Medium", format: "Written", duration: "2 Hours", advantage: "CBSE-organized exam focused on reasoning.", website: "https://cbse.gov.in" },
      { name: "MSCE Scholarship", emoji: "🎓", difficulty: "Medium", format: "Written", duration: "2 Hours", advantage: "State govt scholarship exam for aptitude.", website: "https://mscepuppss.in" },
    ]
  },
  3: {
    title: "Level 3: The Gold Standard Olympiads",
    subtitle: "Gold Standard / Olympiad Path",
    color: "from-red-500 to-red-700",
    headerBg: "bg-red-500",
    description: "Best for: 9th – 12th Standard. These are the toughest exams in the country for this age group.",
    exams: [
      { name: "NSEJS", emoji: "🔬", difficulty: "High", format: "MCQ (Advanced)", duration: "2 Hours", advantage: "Gateway to International Science Olympiads. Tests 11th/12th level science.", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "IOQM", emoji: "🏅", difficulty: "Very High", format: "Integer Answer (00-99)", duration: "3 Hours", advantage: "First step to the IMO (Math). Pure mathematical maturity.", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "YUVIKA (ISRO)", emoji: "🚀", difficulty: "High", format: "Selection-based", duration: "Variable", advantage: "ISRO's residential program for top science students.", website: "https://isro.gov.in" },
    ]
  }
};

export const KCLevel = () => {
  const location = useLocation();
  const selectedLevel = location.state?.level || 1;
  const level = levels[selectedLevel];

  useEffect(() => { window.scrollTo(0, 0); }, [selectedLevel]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className={`bg-gradient-to-r ${level.color} text-white py-8 sm:py-14`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-corner" className="animate-fadeIn inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={16} /> Back to Knowledge Corner
          </Link>
          <h1 className="animate-fadeInUp text-xl sm:text-4xl font-extrabold">{level.title}</h1>
          <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2 max-w-2xl">{level.description}</p>
        </div>
      </section>

      {/* Level Tabs */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 -mt-4 sm:-mt-5 relative z-10">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-1 flex gap-0.5 sm:gap-1">
          {[1, 2, 3].map((lvl) => (
            <Link key={lvl} to="/knowledge-corner/level" state={{ level: lvl }}
              className={`flex-1 text-center py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-bold transition-all ${selectedLevel === lvl
                ? `${level.headerBg} text-white shadow-sm`
                : 'text-slate-500 hover:bg-slate-50'
                }`}
            >
              Level {lvl}
            </Link>
          ))}
        </div>
      </div>

      {/* Exam Cards */}
      <section className="py-6 sm:py-10">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {level.exams.map((exam, idx) => (
              <div key={idx} className="hover-glow animate-fadeInUp bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-md p-4 sm:p-5 flex flex-col justify-between" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div>
                  <h3 className="font-bold text-base text-slate-800 flex items-center gap-2 mb-2">
                    <span className="text-xl">{exam.emoji}</span> {exam.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs mb-3">
                    <div><span className="text-slate-400 block">Difficulty</span><span className="font-semibold text-slate-700">{exam.difficulty}</span></div>
                    <div><span className="text-slate-400 block">Duration</span><span className="font-semibold text-slate-700">{exam.duration}</span></div>
                    <div className="col-span-2"><span className="text-slate-400 block">Format</span><span className="font-semibold text-slate-700">{exam.format}</span></div>
                  </div>
                  <p className="text-xs text-slate-500 italic mb-4">💡 {exam.advantage}</p>
                </div>
                <a href={exam.website} target="_blank" rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0090D4] text-white text-xs font-bold rounded-xl hover:bg-[#0080C4] transition-colors">
                  Visit Website <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
