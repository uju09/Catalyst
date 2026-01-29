import {
  Clock, BookOpen, Calendar, Target, Timer, GraduationCap,
  Users, CheckCircle2, ArrowRight, Flame, Zap, Brain,
  ClipboardCheck, TrendingUp, MessageSquare, Award
} from 'lucide-react';

// ============ IGNITE FOUNDATION PROGRAM ============
const igniteOverview = {
  title: "Ignite Foundation Program",
  subtitle: "For students currently in 7th or 8th Std",
  tagline: "Your definitive 1-year roadmap to mastering school academics while securing a competitive edge in Olympiads, NSEJS, NSTSE, and future Engineering/Medical entrances (JEE, NEET, etc)",
  duration: "April 2026 – Feb 2027",
  targets: ["NSEJS", "NSTSE", "NSO (Science)", "IMO (Maths)", "Homi Bhabha (HBCSE)", "JEE/NEET Foundation"],
  subjects8th: ["Physics", "Chemistry", "Biology", "Maths", "SST", "English", "Mental Ability (MAT)"],
  subjects9th: ["Physics", "Chemistry", "Biology", "Maths", "Mental Ability (MAT)"],
};

const igniteAdvantage = [
  { feature: "Concept Depth", detail: "Focus on clarity of fundamentals, not rote learning" },
  { feature: "Learning Style", detail: "Concept → Application → Competitive Thinking" },
  { feature: "Weekly Schedule", detail: "3 Days a Week for 8th Std students\n4 Days a Week for 9th Std students" },
  { feature: "Daily Intensity", detail: "2.5 hrs/day (balanced & age-appropriate)" },
  { feature: "Timings", detail: "5pm to 8pm" },
  { feature: "Classroom Focus", detail: "Teaching + guided practice + doubt resolution" },
];

const igniteTesting = [
  "Chapter-wise Tests after topic completion",
  "Monthly Cumulative Tests for retention",
  "Application-based & Olympiad-oriented questions",
  "Periodic Foundation-level Mock Tests",
];

const igniteTracking = [
  "Individual progress reports",
  "Strength & improvement-area mapping",
  "Regular feedback to students",
  "Scheduled PTMs with clear communication",
];

const igniteOutcomes = [
  "Strong command over core Math & Science concepts",
  "Confidence in solving higher-level problems",
  "Discipline, consistency & study habits",
  "Readiness to enter Super-13 (Elite 11–12 Program)",
];

// ============ SUPER-13 INTEGRATED PROGRAM ============
const super13Overview = {
  title: "Super-13 Integrated Program",
  subtitle: "For students currently in 10th Std",
  tagline: "Your Definitive 2-Year Roadmap for Success in various Engineering Competitions (JEE, MHTCET, BITSAT, etc)",
  duration: "April 2026 – May 2028",
  durationNote: "(including a bridge course)",
  targets: ["JEE Mains", "JEE Advanced", "BITSAT", "MHT-CET", "Other Engineering Competitions", "Board Exams"],
  subjects: ["Physics", "Chemistry", "Maths"],
  faculty: "Led by a core team of IITians, NITians and highly qualified faculties with 10+ yrs of expertise",
};

const bridgeCourse = {
  title: "The Mandatory Bridge Course",
  startDate: "6th April 2026",
  points: [
    { title: "Smooth Transition", desc: "A 2-week preparatory phase to align students from diverse boards" },
    { title: "Foundation First", desc: "Reinforce Class 9 & 10 fundamentals essential for JEE" },
    { title: "Analytical Edge", desc: "Early introduction to JEE-style problem-solving" },
  ],
  scholarship: "Attend our Scholarship Test on 21st April 2026 and earn exciting scholarships!",
};

const super13Advantage = [
  { feature: "Total Engagement", detail: "4000+ Hours", subtext: "of guided academic learning" },
  { feature: "Rigorous Testing", detail: "300+ Hours", subtext: "of dedicated testing" },
  { feature: "Weekly Schedule", detail: "6 Days a Week", subtext: "(1 day break)" },
  { feature: "Daily Intensity", detail: "6 to 6.5 hours", subtext: "of teaching, self-study & doubt resolution" },
];

const super13Timings = [
  { format: "Morning Batch", time: "8 AM – 2 PM" },
  { format: "Evening Batch", time: "2:30 PM – 8:30 PM" },
];

const super13Testing = [
  { name: "CTT (Current Topic Test)", desc: "End of every 3 weeks" },
  { name: "ATT (All Topic Test)", desc: "Mid-cycle assessment" },
  { name: "Revision & Test Series", desc: "3 Rounds post syllabus completion" },
  { name: "Part Tests & Full-Length Tests", desc: "Aligned to JEE Main, JEE Adv, MHTCET, BITSAT" },
];

// ============ COMPONENT ============
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Courses = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when navigating from another page
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Programs</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive programs designed to transform aspirants into achievers
          </p>
        </div>
      </section>

      {/* ============ IGNITE FOUNDATION SECTION ============ */}
      <section id="ignite" className="py-16 border-b border-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
              <Flame size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-800">{igniteOverview.title}</h2>
              <p className="text-[#EF4444] font-semibold">{igniteOverview.subtitle}</p>
            </div>
          </div>

          <p className="text-slate-600 max-w-4xl mb-8 leading-relaxed">
            {igniteOverview.tagline}
          </p>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#0090D4]" size={24} />
                <h3 className="font-bold text-slate-800">Duration</h3>
              </div>
              <p className="text-2xl font-extrabold text-[#0090D4]">{igniteOverview.duration}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#EF4444]" size={24} />
                <h3 className="font-bold text-slate-800">Target Competitions</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {igniteOverview.targets.slice(0, 4).map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-red-50 text-[#EF4444] text-xs font-semibold rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-[#0090D4]" size={24} />
                <h3 className="font-bold text-slate-800">Subjects (9th Std)</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {igniteOverview.subjects9th.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-[#0090D4] text-xs font-semibold rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* The Ignite Advantage */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">The Ignite Advantage</h3>
            <p className="text-slate-600 italic mb-6">Strong fundamentals. Right habits. Early edge.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {igniteAdvantage.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-[#EF4444] text-sm mb-2">{item.feature}</h4>
                  <p className="text-slate-700 text-sm whitespace-pre-line">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/60 rounded-xl">
              <p className="text-slate-700 italic">
                <strong>Teaching Philosophy:</strong> We ignite curiosity first — speed and ranks follows
              </p>
            </div>
          </div>

          {/* Testing & Tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="text-[#0090D4]" size={24} />
                <h3 className="font-bold text-slate-800">Structured Testing System</h3>
              </div>
              <ul className="space-y-3">
                {igniteTesting.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-[#EF4444]" size={24} />
                <h3 className="font-bold text-slate-800">Performance Tracking & PTMs</h3>
              </div>
              <ul className="space-y-3">
                {igniteTracking.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcomes */}
          <div className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Outcomes of the Ignite Foundation Program</h3>
            <p className="text-white/80 mb-4">By the end of Class 9, students will have:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {igniteOutcomes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Award size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/80">
                <strong className="text-white">Program Pathway:</strong> Ignite Foundation (8–9) → Special Foundation → Super-13 Integrated Program (11–12)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SUPER-13 INTEGRATED SECTION ============ */}
      <section id="super13" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0090D4] to-blue-600 flex items-center justify-center text-white shadow-lg">
              <Zap size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-800">{super13Overview.title}</h2>
              <p className="text-[#0090D4] font-semibold">{super13Overview.subtitle} • 2-Year Program</p>
            </div>
          </div>

          <p className="text-slate-600 max-w-4xl mb-8 leading-relaxed italic">
            {super13Overview.tagline}
          </p>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Calendar className="text-[#0090D4] mb-3" size={24} />
              <h3 className="font-bold text-slate-800 text-sm mb-1">Duration</h3>
              <p className="text-xl font-extrabold text-[#0090D4]">{super13Overview.duration}</p>
              <p className="text-xs text-slate-500">{super13Overview.durationNote}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Target className="text-[#EF4444] mb-3" size={24} />
              <h3 className="font-bold text-slate-800 text-sm mb-1">Target Exams</h3>
              <div className="flex flex-wrap gap-1">
                {super13Overview.targets.slice(0, 3).map((t, i) => (
                  <span key={i} className="px-2 py-0.5 bg-red-50 text-[#EF4444] text-[10px] font-semibold rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <BookOpen className="text-[#0090D4] mb-3" size={24} />
              <h3 className="font-bold text-slate-800 text-sm mb-1">Subjects</h3>
              <div className="flex gap-2">
                {super13Overview.subjects.map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-50 text-[#0090D4] text-xs font-semibold rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <GraduationCap className="text-purple-600 mb-3" size={24} />
              <h3 className="font-bold text-slate-800 text-sm mb-1">Faculty</h3>
              <p className="text-xs text-slate-600">IITians, NITians with 10+ yrs experience</p>
            </div>
          </div>

          {/* Bridge Course */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 mb-12 border-2 border-yellow-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-4 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">MANDATORY</div>
              <h3 className="text-xl font-bold text-slate-800">{bridgeCourse.title}</h3>
            </div>
            <p className="text-slate-600 mb-6">Commences: <strong className="text-slate-800">{bridgeCourse.startDate}</strong></p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {bridgeCourse.points.map((point, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-orange-600 mb-2">{point.title}</h4>
                  <p className="text-sm text-slate-600">{point.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 bg-yellow-100 rounded-xl">
              <Award className="text-yellow-600" size={24} />
              <p className="text-sm text-yellow-800 font-medium">{bridgeCourse.scholarship}</p>
            </div>
          </div>

          {/* Super 13 Advantage */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">The Super 13 Advantage</h3>
            <p className="text-slate-600 mb-6">We offer one of the highest contact classroom programs in the industry</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {super13Advantage.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#0090D4]/30 hover:shadow-xl transition-all group">
                  <h4 className="font-semibold text-slate-600 text-sm mb-2">{item.feature}</h4>
                  <p className="text-3xl font-extrabold text-[#0090D4] mb-1">{item.detail}</p>
                  <p className="text-xs text-slate-500">{item.subtext}</p>
                </div>
              ))}
            </div>

            {/* Timings Card */}
            <div className="bg-gradient-to-r from-[#0090D4] via-[#0080C4] to-[#0070A4] rounded-2xl p-8 text-white shadow-xl shadow-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Timings (2 formats)</h4>
                  <p className="text-white/80 text-sm">Choose what works best for you</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {super13Timings.map((timing, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                    <p className="text-[#0090D4] text-sm font-semibold mb-1">{timing.format}</p>
                    <p className="text-3xl font-extrabold text-slate-800">{timing.time}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/70 mt-4">Note: Institute will be closed for 6 days during Diwali</p>
            </div>
          </div>

          {/* Testing & Performance */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="text-[#0090D4]" size={28} />
              <div>
                <h3 className="text-xl font-bold text-slate-800">Testing, Performance Tracking & PTMs</h3>
                <p className="text-slate-600 text-sm">We don't just teach; we measure. Our testing cycle ensures no concept is left behind.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {super13Testing.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0090D4]/10 flex items-center justify-center text-[#0090D4] shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
              <MessageSquare className="text-purple-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-800">Parent-Teacher Meetings & Student Report Card</h4>
                <p className="text-sm text-slate-600">Regular PTMs with detailed performance analytics</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-slate-700 mb-6 font-medium">Ready to secure your seat? Contact Us now for more details!</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#EF4444] text-white font-bold rounded-full hover:bg-red-500 transition-all shadow-xl shadow-red-200 transform hover:-translate-y-1"
            >
              Enroll Now <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
