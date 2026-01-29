import {
  BookOpen, GraduationCap, Trophy, Target, ArrowRight,
  Lightbulb, MessageCircle, MapPin, Phone, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// ============ EXAM DATA ============
const level1Exams = [
  {
    name: "SOF (NSO/IMO)",
    difficulty: "Low to Mid",
    format: "MCQ (Objective)",
    duration: "1 Hour",
    advantage: "Best for overcoming exam fear and getting a 'National Rank.'"
  },
  {
    name: "VVM (Vidyarthi Vigyan Manthan)",
    difficulty: "Mid",
    format: "Digital / MCQ",
    duration: "90 Mins",
    advantage: "Focuses on Indian scientists and conceptual science. Very engaging."
  },
  {
    name: "NSTSE",
    difficulty: "Mid",
    format: "MCQ",
    duration: "90 Mins",
    advantage: "Provides a very detailed 'Success Gap' report for parents."
  },
];

const level2Exams = [
  {
    name: "MTSE (Maharashtra)",
    difficulty: "Mid-High",
    format: "MCQ (SAT + MAT)",
    duration: "3 Hours",
    advantage: "The gold standard for state-level talent recognition. Excellent for 10th graders."
  },
  {
    name: "NMTC (Primary/Junior)",
    difficulty: "Mid - High",
    format: "Objective + Subjective",
    duration: "2-3 Hours",
    advantage: "Focused purely on creative Math. It teaches how to write 'proofs' early on."
  },
  {
    name: "Homi Bhabha (DHBBVC)",
    difficulty: "Mid - High",
    format: "Theory + Practical",
    duration: "Variable",
    advantage: "Unique because it includes a Practical Lab Exam, making it very prestigious."
  },
];

const level3Exams = [
  {
    name: "NSEJS",
    difficulty: "High",
    format: "MCQ (Advanced)",
    duration: "2 Hours",
    advantage: "Gateway to International Science Olympiads. Tests 11th/12th level science."
  },
  {
    name: "IOQM",
    difficulty: "High",
    format: "Integer Answer (00-99)",
    duration: "3 Hours",
    advantage: "The first step to the IMO (Math). No guesswork; pure mathematical maturity."
  },
];

const parentFaqs = [
  {
    question: "Why should my child give IOQM if it's so hard?",
    answer: "Think of IOQM as 'High-Intensity Interval Training' for the brain. Even if they don't qualify, the level of math they learn will make their 10th Board Exams and future JEE prep feel significantly easier."
  },
  {
    question: "Does my child need to prepare separately for MTSE?",
    answer: "MTSE covers the school syllabus but adds 'Mental Ability.' Preparing for it helps 10th students sharpen their speed and accuracy, which is vital for any future entrance exam."
  },
];

// ============ COMPONENTS ============
const ExamTable = ({ exams, levelColor }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className={`${levelColor} text-white`}>
          <th className="px-4 py-3 text-left font-semibold">Exam Name</th>
          <th className="px-4 py-3 text-left font-semibold">Difficulty</th>
          <th className="px-4 py-3 text-left font-semibold">Format</th>
          <th className="px-4 py-3 text-left font-semibold">Duration</th>
          <th className="px-4 py-3 text-left font-semibold">Main Advantage</th>
        </tr>
      </thead>
      <tbody>
        {exams.map((exam, i) => (
          <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-gray-100`}>
            <td className="px-4 py-4 font-semibold text-slate-800">{exam.name}</td>
            <td className="px-4 py-4 text-slate-600">{exam.difficulty}</td>
            <td className="px-4 py-4 text-slate-600">{exam.format}</td>
            <td className="px-4 py-4 text-slate-600">{exam.duration}</td>
            <td className="px-4 py-4 text-slate-600">{exam.advantage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const StageCard = ({ stage, classes, items, color }) => (
  <div className={`${color} rounded-2xl p-6 text-white`}>
    <h3 className="font-bold text-lg mb-1">{stage}</h3>
    <p className="text-white/80 text-sm mb-4">{classes}</p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const KnowledgeCorner = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={32} />
            <h1 className="text-4xl md:text-5xl font-extrabold">Knowledge Corner</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Competitive exams are not just about ranks — they are about <strong>thinking ability, problem-solving, and early exposure to higher-level learning</strong>.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            At <strong className="text-[#0090D4]">CATALYST COACHING CLASSES</strong>, we believe awareness is the first step.
            This Knowledge Corner is designed to help parents and students understand <strong>what exams exist, when to attempt them, and why they matter</strong>.
          </p>
        </div>
      </section>

      {/* Competitive Exams Overview */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-800 text-center mb-8">
            Competitive Exams Overview: Class 6 to 12
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StageCard
              stage="Foundation Stage"
              classes="(Class 6 – 8)"
              color="bg-gradient-to-br from-green-500 to-green-600"
              items={[
                "Olympiads (Maths, Science, English)",
                "Builds Logic & Fundamentals",
                "NSTSE - Early Skill Development",
                "Talent Search Exams - Boosts Confidence"
              ]}
            />
            <StageCard
              stage="Pre-Competitive Stage"
              classes="(Class 9 – 10)"
              color="bg-gradient-to-br from-[#0090D4] to-blue-600"
              items={[
                "IOQM / IJSO - Sharpens Analytical Skills",
                "Regional Talent Exams",
                "JEE / NEET Readiness"
              ]}
            />
            <StageCard
              stage="Competitive Stage"
              classes="(Class 11 – 12)"
              color="bg-gradient-to-br from-purple-500 to-purple-600"
              items={[
                "JEE Main & Advanced - Gateway to IITs & NITs",
                "NEET - Entry to Medical Colleges",
                "Olympiads - Research & Scholarships"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Olympiad Progression */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-800 text-center mb-8">
            Olympiad Progression Pathways
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mathematics Pathway */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-[#0090D4] mb-4 flex items-center gap-2">
                <Target size={20} />
                Mathematics Pathway
              </h3>
              <div className="flex items-center gap-2 flex-wrap text-sm font-semibold">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">IOQM</span>
                <ArrowRight size={16} className="text-blue-400" />
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">RMO</span>
                <ArrowRight size={16} className="text-blue-400" />
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">INMO</span>
                <ArrowRight size={16} className="text-blue-400" />
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full">IMO</span>
              </div>
              <p className="text-sm text-slate-600 mt-4 italic">Path to International Math Olympiad</p>
            </div>

            {/* Science Pathway */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                <GraduationCap size={20} />
                Science Pathway
              </h3>
              <div className="flex items-center gap-2 flex-wrap text-sm font-semibold">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">NSEJS</span>
                <ArrowRight size={16} className="text-green-400" />
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">INJSO</span>
                <ArrowRight size={16} className="text-green-400" />
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">OCSC</span>
                <ArrowRight size={16} className="text-green-400" />
                <span className="px-3 py-1 bg-green-600 text-white rounded-full">IJSO</span>
              </div>
              <p className="text-sm text-slate-600 mt-4 italic">Path to International Science Olympiad</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-slate-500 font-medium">
              <Lightbulb size={16} className="inline mr-1" />
              Advanced Learning Journey — From School-Level to Global Stage
            </p>
          </div>
        </div>
      </section>

      {/* Level 1 */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <h2 className="text-xl font-bold text-slate-800">Level 1: The Confidence Builders</h2>
          </div>
          <p className="text-slate-600 italic mb-6">
            Best for: 6th - 10th Standard. These align closely with the school syllabus but add a layer of logical application.
          </p>
          <ExamTable exams={level1Exams} levelColor="bg-green-500" />
        </div>
      </section>

      {/* Level 2 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <h2 className="text-xl font-bold text-slate-800">Level 2: The Logic & State Specialists</h2>
          </div>
          <p className="text-slate-600 italic mb-6">
            Best for: 8th – 10th Standard. These require students to think "outside the box" and move away from rote learning.
          </p>
          <ExamTable exams={level2Exams} levelColor="bg-yellow-500" />
        </div>
      </section>

      {/* Level 3 */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <h2 className="text-xl font-bold text-slate-800">Level 3: The "Gold Standard" Olympiads</h2>
          </div>
          <p className="text-slate-600 italic mb-6">
            Best for: 9th - 12th Standard. These are the toughest exams in the country for this age group.
          </p>
          <ExamTable exams={level3Exams} levelColor="bg-red-500" />
        </div>
      </section>

      {/* Parent's FAQ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-yellow-500" size={28} />
            <h2 className="text-2xl font-bold text-slate-800">Parent's FAQ</h2>
          </div>

          <div className="space-y-6">
            {parentFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-slate-800 mb-3">"{faq.question}"</h3>
                <p className="text-slate-600 italic">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0090D4] to-[#0070A4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-4">
            Confused About Which Exam is Right for Your Child?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span>Talk to our academic mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Visit our center</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>Book a free counselling session</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#0090D4] font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl transform hover:-translate-y-1"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};
