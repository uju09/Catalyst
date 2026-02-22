import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const classData = {
  'Std 6': {
    exams: [
      { name: "SOF IMO", subject: "Math", difficulty: "★★", format: "MCQ", month: "Nov–Dec", website: "https://sofworld.org" },
      { name: "SOF NSO", subject: "Science", difficulty: "★★", format: "MCQ", month: "Nov–Dec", website: "https://sofworld.org" },
      { name: "SilverZone Math", subject: "Math", difficulty: "★★", format: "MCQ", month: "Dec–Jan", website: "https://silverzone.org" },
      { name: "SilverZone Science", subject: "Science", difficulty: "★★", format: "MCQ", month: "Dec–Jan", website: "https://silverzone.org" },
      { name: "Indian Talent Olympiad", subject: "Math/Science", difficulty: "★", format: "MCQ", month: "Dec–Feb", website: "https://indiantalent.org" },
      { name: "MSCE Scholarship", subject: "Academic", difficulty: "★★", format: "Written", month: "Feb", website: "https://mscepuppss.in" },
    ]
  },
  'Std 7': {
    exams: [
      { name: "SOF IMO", subject: "Math", difficulty: "★★", format: "MCQ", month: "Nov–Dec", website: "https://sofworld.org" },
      { name: "SOF NSO", subject: "Science", difficulty: "★★", format: "MCQ", month: "Nov–Dec", website: "https://sofworld.org" },
      { name: "NSTSE", subject: "Science/Math", difficulty: "★★★", format: "MCQ", month: "Dec–Jan", website: "https://unifiedcouncil.com" },
      { name: "SilverZone Olympiads", subject: "Math/Science", difficulty: "★★", format: "MCQ", month: "Dec–Jan", website: "https://silverzone.org" },
      { name: "MSCE Scholarship", subject: "Academic", difficulty: "★★", format: "Written", month: "Feb", website: "https://mscepuppss.in" },
    ]
  },
  'Std 8': {
    exams: [
      { name: "SOF IMO / NSO", subject: "Math/Science", difficulty: "★★", format: "MCQ", month: "Nov–Dec", website: "https://sofworld.org" },
      { name: "NSTSE", subject: "Science/Math", difficulty: "★★★", format: "MCQ", month: "Dec–Jan", website: "https://unifiedcouncil.com" },
      { name: "Aryabhatta (AMO)", subject: "Math", difficulty: "★★", format: "Written", month: "Nov", website: "https://cbse.gov.in" },
      { name: "IOQM", subject: "Math", difficulty: "★★★★", format: "Subjective", month: "Sept", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "MTSE", subject: "Math", difficulty: "★★", format: "Objective", month: "Dec–Jan", website: "#" },
      { name: "MSCE Scholarship", subject: "Academic", difficulty: "★★", format: "Written", month: "Feb", website: "https://mscepuppss.in" },
    ]
  },
  'Std 9': {
    exams: [
      { name: "IOQM", subject: "Math", difficulty: "★★★★", format: "Subjective", month: "Sept", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "Homi Bhabha", subject: "Science", difficulty: "★★★", format: "Practical", month: "Sept–Dec", website: "https://msta.in" },
      { name: "YUVIKA (ISRO)", subject: "Space Science", difficulty: "★★★", format: "Selection", month: "Feb–Mar", website: "https://isro.gov.in" },
      { name: "NSTSE", subject: "Science/Math", difficulty: "★★★", format: "MCQ", month: "Dec–Jan", website: "https://unifiedcouncil.com" },
      { name: "MTSE", subject: "Math", difficulty: "★★", format: "Objective", month: "Dec–Jan", website: "#" },
      { name: "Aryabhatta (AMO)", subject: "Math", difficulty: "★★", format: "Written", month: "Nov", website: "https://cbse.gov.in" },
    ]
  },
  'Std 10': {
    exams: [
      { name: "IOQM", subject: "Math", difficulty: "★★★★", format: "Subjective", month: "Sept", website: "https://olympiads.hbcse.tifr.res.in" },
      { name: "NSTSE", subject: "Science/Math", difficulty: "★★★", format: "MCQ", month: "Dec–Jan", website: "https://unifiedcouncil.com" },
      { name: "MTSE", subject: "Math", difficulty: "★★", format: "Objective", month: "Dec–Jan", website: "#" },
      { name: "SOF IMO / NSO", subject: "Math/Science", difficulty: "★★", format: "MCQ", month: "Nov–Dec", website: "https://sofworld.org" },
      { name: "Aryabhatta (AMO)", subject: "Math", difficulty: "★★", format: "Written", month: "Nov", website: "https://cbse.gov.in" },
      { name: "MSCE Scholarship", subject: "Academic", difficulty: "★★", format: "Written", month: "Feb", website: "https://mscepuppss.in" },
    ]
  },
};

const allClasses = ['Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10'];

export const KCClass = () => {
  const location = useLocation();
  const selectedClass = location.state?.class || 'Std 6';
  const data = classData[selectedClass];

  useEffect(() => { window.scrollTo(0, 0); }, [selectedClass]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0A1E3F] to-[#0090D4] text-white py-8 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-corner" className="animate-fadeIn inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={16} /> Back to Knowledge Corner
          </Link>
          <h1 className="text-xl sm:text-4xl font-extrabold">
            Competitions for {selectedClass}
          </h1>
          <p className="text-white/70 text-sm mt-2">All recommended exams and olympiads for this class.</p>
        </div>
      </section>

      {/* Class Tabs */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 -mt-4 sm:-mt-5 relative z-10">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-1 flex gap-0.5 sm:gap-1 overflow-x-auto">
          {allClasses.map((cls) => (
            <Link key={cls} to="/knowledge-corner/class" state={{ class: cls }}
              className={`flex-1 text-center py-2 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-sm font-bold transition-all whitespace-nowrap px-2 sm:px-3 ${selectedClass === cls
                ? 'bg-[#0090D4] text-white shadow-sm'
                : 'text-slate-500 hover:bg-slate-50'
                }`}
            >
              {cls}
            </Link>
          ))}
        </div>
      </div>

      {/* Exam Table/Cards */}
      <section className="py-6 sm:py-10">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">

          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#0A1E3F] text-white">
                  <th className="px-5 py-3 text-left text-sm font-semibold">Exam</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold">Subject</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold">Difficulty</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold">Format</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold">Month</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold">Link</th>
                </tr>
              </thead>
              <tbody>
                {data.exams.map((exam, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-gray-100 hover:bg-blue-50/50 transition-colors`}>
                    <td className="px-5 py-4 font-semibold text-slate-800 text-sm">{exam.name}</td>
                    <td className="px-5 py-4 text-slate-600 text-sm">{exam.subject}</td>
                    <td className="px-5 py-4 text-sm">{exam.difficulty}</td>
                    <td className="px-5 py-4 text-slate-600 text-sm">{exam.format}</td>
                    <td className="px-5 py-4 text-slate-600 text-sm">{exam.month}</td>
                    <td className="px-5 py-4">
                      <a href={exam.website} target="_blank" rel="noopener noreferrer" className="text-[#0090D4] hover:text-blue-700">
                        <ExternalLink size={16} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-3">
            {data.exams.map((exam, i) => (
              <div key={i} className="animate-fadeInUp bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ animationDelay: `${i * 0.08}s` }}>
                <h3 className="font-bold text-slate-800 text-sm mb-2">{exam.name}</h3>
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div><span className="text-slate-400">Subject:</span> <span className="font-medium text-slate-700">{exam.subject}</span></div>
                  <div><span className="text-slate-400">Difficulty:</span> <span className="font-medium">{exam.difficulty}</span></div>
                  <div><span className="text-slate-400">Format:</span> <span className="font-medium text-slate-700">{exam.format}</span></div>
                  <div><span className="text-slate-400">Month:</span> <span className="font-medium text-slate-700">{exam.month}</span></div>
                </div>
                <a href={exam.website} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#0090D4] font-semibold">
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
