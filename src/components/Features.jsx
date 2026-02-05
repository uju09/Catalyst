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

      {/* Features Grid - Compact horizontal cards on mobile */}
      <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 sm:flex-col sm:items-start bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-100 hover:border-[#0090D4]/30 transition-colors"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: idx % 2 === 0 ? '#E0F2FE' : '#F3E8FF' }}
            >
              <feature.icon
                size={24}
                className="sm:w-7 sm:h-7"
                style={{ color: idx % 2 === 0 ? '#0090D4' : '#8B5CF6' }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-800 mb-0.5 sm:mb-1">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm line-clamp-2">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
