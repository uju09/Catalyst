import { Clock, BookOpen, Calendar, Target, Timer } from 'lucide-react';

const super13Features = [
  {
    feature: "Total Engagement",
    details: "3000+ Hours",
    subtext: "of guided academic learning",
    icon: BookOpen
  },
  {
    feature: "Rigorous Testing",
    details: "300+ Hours",
    subtext: "of dedicated testing",
    icon: Target
  },
  {
    feature: "Weekly Schedule",
    details: "6 Days a Week",
    subtext: "(1 day break)",
    icon: Calendar
  },
  {
    feature: "Daily Intensity",
    details: "6 hours",
    subtext: "of teaching, self-study, and doubt resolution",
    icon: Timer
  },
];

const timings = [
  { format: "Morning format", time: "8 AM – 1 PM" },
  { format: "Evening format", time: "3:30 PM – 8:30 PM" },
];

export const Courses = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Courses</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Comprehensive programs designed to transform aspirants into achievers
        </p>
      </div>
    </section>

    {/* Super 13 Advantage Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#EF4444] font-bold tracking-widest uppercase text-xs">Program Highlights</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">The Super 13 Advantage</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We offer one of the highest contact classroom programs in the industry
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {super13Features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-blue-100/50 border border-gray-100 hover:border-[#0090D4]/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0090D4]/10 to-[#0090D4]/5 flex items-center justify-center text-[#0090D4] mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="font-semibold text-slate-700 text-sm mb-2">{item.feature}</h3>
              <p className="text-2xl font-extrabold text-[#0090D4]">{item.details}</p>
              <p className="text-sm text-slate-500 mt-1">{item.subtext}</p>
            </div>
          ))}
        </div>

        {/* Timings Card */}
        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl p-8 md:p-10 text-white max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Clock size={24} className="text-[#EF4444]" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Timings (2 formats)</h3>
              <p className="text-slate-400 text-sm">Choose what works best for you</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timings.map((timing, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <p className="text-slate-400 text-sm font-medium mb-1">{timing.format}</p>
                <p className="text-2xl font-bold text-white">{timing.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#EF4444] text-white font-bold rounded-full hover:bg-red-500 transition-all shadow-xl shadow-red-200 transform hover:-translate-y-1"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  </div>
);
