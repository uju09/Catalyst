import { Link } from 'react-router-dom';
import { Calendar, Trophy, FlaskConical, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: "ignite",
    title: "Ignite Foundation",
    badge: "Class 8-10",
    badgeColor: "bg-[#243b32]",
    iconColor: "text-[#243b32]",
    hoverColor: "hover:text-[#243b32]",
    image: "/ignite.png",
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
    iconColor: "text-[#0090D4]",
    hoverColor: "hover:text-[#0090D4]",
    image: "/super13.png",
    description: "Comprehensive 2-year preparation for IIT-JEE, NEET, and other competitive exams.",
    duration: "April 2026 – May 2028",
    exams: "JEE Main, Adv, BITSAT",
    durationIcon: Calendar,
    examsIcon: FlaskConical,
  },
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden group">
    {/* Image */}
    <div className="relative overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-auto object-contain"
      />
      <span className={`absolute top-3 right-3 ${course.badgeColor} text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full`}>
        {course.badge}
      </span>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5">
      <p className="text-slate-500 text-xs sm:text-sm mb-3 line-clamp-2">
        {course.description}
      </p>

      {/* Info Chips */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
          <course.durationIcon size={12} className={course.iconColor} />
          {course.duration}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
          <course.examsIcon size={12} className={course.iconColor} />
          {course.exams}
        </span>
      </div>

      <Link
        to={`/courses#${course.id}`}
        className={`inline-flex items-center text-xs sm:text-sm ${course.iconColor} font-semibold opacity-90 hover:opacity-100 transition-opacity gap-1`}
      >
        View Details <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

export const Programs = () => (
  <section id="programs" className="py-12 sm:py-16 md:py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative z-20">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  </section>
);
