import { Lightbulb, GraduationCap, Users, LineChart, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "Concept Depth",
    desc: "Understanding First, Shortcuts Later. We build strong foundations that make complex problems feel simple.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "IITians & NITians with 10+ Years Experience. Learn from the best minds who've walked the same path.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Users,
    title: "Small Batches",
    desc: "Personalized Attention & 1:1 Mentorship. Every student gets the focus they deserve to excel.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    gradient: "from-orange-500 to-amber-400"
  },
  {
    icon: LineChart,
    title: "Rigorous Testing",
    desc: "Continuous Improvement via Analytics. Track your progress with detailed performance insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    gradient: "from-emerald-500 to-teal-400"
  },
];

export const Features = () => (
  <section className="py-10 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-10 md:mb-14">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0090D4] font-bold tracking-widest uppercase text-[10px] sm:text-xs rounded-full mb-2">
          The Catalyst Advantage
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800">
          Why Choose <span className="text-[#0090D4]">Us?</span>
        </h2>
      </div>

      {/* Features Grid - Horizontal on mobile, Clean cards on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-row md:flex-col items-center md:items-start bg-white rounded-[20px] p-4 sm:p-6 md:p-8 border border-slate-100 hover:border-[#0090D4]/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group gap-4 md:gap-0"
          >
            {/* Icon Block */}
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 flex-shrink-0 rounded-[14px] flex items-center justify-center md:mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: idx % 2 === 0 ? '#E0F2FE' : '#F3E8FF' }}
            >
              <feature.icon
                size={22}
                className="sm:w-6 sm:h-6 md:w-[22px] md:h-[22px]"
                style={{ color: idx % 2 === 0 ? '#0090D4' : '#8B5CF6' }}
              />
            </div>

            {/* Content Text */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base sm:text-lg text-slate-800 mb-1 md:mb-2 line-clamp-1 md:line-clamp-none">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
