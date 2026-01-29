import { Link } from 'react-router-dom';
import { Calendar, Trophy, FlaskConical, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: "ignite",
    title: "Ignite Foundation",
    badge: "Class 8-10",
    badgeColor: "bg-[#EF4444]",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    description: "Build a strong foundation for future competitive exams while excelling in school curriculum.",
    duration: "April 2026 – Feb 2027",
    exams: "Olympiads, NSEJS, NSTSE",
    durationIcon: Calendar,
    examsIcon: Trophy,
  },
  {
    id: "super13",
    title: "Super-13 Integrated",
    badge: "Class 11-12",
    badgeColor: "bg-[#0090D4]",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive 2-year preparation for IIT-JEE, NEET, and other competitive exams.",
    duration: "April 2026 – May 2028",
    exams: "JEE Main, Adv, BITSAT",
    durationIcon: Calendar,
    examsIcon: FlaskConical,
  },
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-2xl shadow-lg shadow-[#0090D4]/10 overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0090D4]/30">
    <div className="relative h-64 overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span className={`absolute top-4 right-4 ${course.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
        {course.badge}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{course.title}</h3>
    </div>
    <div className="p-8">
      <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium">
        {course.description}
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-4 text-sm text-slate-600 bg-blue-50/50 p-2 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-[#0090D4]/10 flex items-center justify-center text-[#0090D4]">
            <course.durationIcon size={16} />
          </div>
          <span className="font-semibold">{course.duration}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600 bg-blue-50/50 p-2 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-[#0090D4]/10 flex items-center justify-center text-[#0090D4]">
            <course.examsIcon size={16} />
          </div>
          <span className="font-semibold">{course.exams}</span>
        </div>
      </div>

      <Link
        to={`/courses#${course.id}`}
        className="inline-flex items-center text-[#0090D4] font-bold hover:text-[#EF4444] transition-colors gap-2"
      >
        View Program Details <ArrowRight size={18} />
      </Link>
    </div>
  </div>
);

export const Programs = () => (
  <section id="programs" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-20">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  </section>
);
