import { Lightbulb, GraduationCap, Users, LineChart } from 'lucide-react';

const features = [
  { icon: Lightbulb, title: "Concept Depth", desc: "Understanding First, Shortcuts Later.", color: "text-[#0090D4]", bg: "bg-blue-50" },
  { icon: GraduationCap, title: "Expert Faculty", desc: "IITians & NITians with 10+ Years Experience.", color: "text-[#EF4444]", bg: "bg-red-50" },
  { icon: Users, title: "Small Batches", desc: "Personalized Attention & 1:1 Mentorship.", color: "text-[#0090D4]", bg: "bg-blue-50" },
  { icon: LineChart, title: "Rigorous Testing", desc: "Continuous Improvement via Analytics.", color: "text-[#EF4444]", bg: "bg-red-50" },
];

export const Features = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-[#EF4444] font-bold tracking-widest uppercase text-xs">The Catalyst Advantage</span>
        <h2 className="text-3xl font-bold text-slate-800 mt-2">Why Choose Us?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center p-6 rounded-2xl bg-white hover:bg-blue-50/50 transition-all border border-transparent hover:border-blue-100 group">
            <div className={`w-16 h-16 mx-auto ${feature.bg} rounded-2xl flex items-center justify-center ${feature.color} text-2xl mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
              <feature.icon size={32} />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-500 font-medium whitespace-pre-line">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
