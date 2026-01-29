import { User } from 'lucide-react';

const students = [
  { name: "Aarav Patel", college: "IIT Bombay", rank: "AIR 452 (JEE Adv)", color: "text-[#0090D4]", bg: "bg-blue-50", bar: "bg-[#0090D4]" },
  { name: "Sneha Gupta", college: "BJ Medical", rank: "705/720 (NEET)", color: "text-green-600", bg: "bg-green-50", bar: "bg-green-500" },
  { name: "Rohan D.", college: "COEP Pune", rank: "99.8%ile (CET)", color: "text-[#0090D4]", bg: "bg-blue-50", bar: "bg-[#0090D4]" },
  { name: "Priya S.", college: "BITs Pilani", rank: "340/390 (BITSAT)", color: "text-purple-600", bg: "bg-purple-50", bar: "bg-purple-500" },
];

export const Results = () => (
  <section id="results" className="py-20 bg-slate-50 border-t border-slate-200/60">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-[#0090D4] font-bold tracking-widest uppercase text-xs">Proven Excellence</span>
        <h2 className="text-3xl font-bold text-slate-800 mt-2">Hall of Fame</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all group relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 ${student.bar} group-hover:h-2 transition-all`}></div>
            <div className="w-20 h-20 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
              <User size={36} />
            </div>
            <h3 className="font-bold text-lg text-slate-800">{student.name}</h3>
            <p className="text-sm text-slate-500 font-medium mb-3">{student.college}</p>
            <span className={`inline-block px-3 py-1 ${student.bg} ${student.color} text-xs font-extrabold rounded-full`}>
              {student.rank}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
