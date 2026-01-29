import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Trophy, Star, Quote, GraduationCap, Award, TrendingUp,
  BookOpen, Users, CheckCircle2
} from 'lucide-react';

// ============ RESULTS DATA ============
const topperResults = [
  {
    name: "Arjun Sharma",
    exam: "JEE Advanced 2025",
    rank: "AIR 156",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    previousSchool: "Ryan International School",
    quote: "The structured approach and regular testing at Catalyst helped me stay on track throughout my JEE preparation."
  },
  {
    name: "Priya Patel",
    exam: "JEE Main 2025",
    rank: "99.8 Percentile",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    previousSchool: "Delhi Public School",
    quote: "The faculty's dedication and personalized attention made all the difference in my preparation journey."
  },
  {
    name: "Rohan Deshmukh",
    exam: "BITSAT 2025",
    rank: "386 / 450",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    previousSchool: "St. Xavier's High School",
    quote: "Catalyst's Super-13 program gave me the edge I needed for BITSAT. The mock tests were incredibly helpful."
  },
  {
    name: "Sneha Kumar",
    exam: "NSEJS 2024",
    rank: "State Topper",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    previousSchool: "Podar International",
    quote: "Starting early with Ignite Foundation built my competitive exam mindset from the ground up."
  },
  {
    name: "Aditya Joshi",
    exam: "MHT-CET 2025",
    rank: "99.5 Percentile",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    previousSchool: "Sinhgad School",
    quote: "The bridge course helped me transition smoothly from 10th to JEE preparation. Highly recommend Catalyst!"
  },
  {
    name: "Meera Iyer",
    exam: "JEE Advanced 2025",
    rank: "AIR 423",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    previousSchool: "VIBGYOR High",
    quote: "The rigorous testing schedule at Catalyst prepared me for the pressure of the actual exam."
  },
];

const statsData = [
  { label: "Students Qualified JEE", value: "500+", icon: GraduationCap },
  { label: "Selection Rate", value: "85%", icon: TrendingUp },
  { label: "Average Percentile", value: "95+", icon: Award },
  { label: "Years of Excellence", value: "10+", icon: Trophy },
];

const reviews = [
  {
    name: "Rajesh Sharma",
    role: "Parent of Arjun Sharma",
    rating: 5,
    text: "Catalyst has been instrumental in shaping my son's career. The faculty is dedicated and the results speak for themselves. We couldn't be happier with our choice.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Dr. Sunita Patel",
    role: "Parent of Priya Patel",
    rating: 5,
    text: "The personalized attention each student receives at Catalyst is remarkable. Priya's confidence grew tremendously during her time here.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Vikram Deshmukh",
    role: "Parent of Rohan Deshmukh",
    rating: 5,
    text: "The structured approach and regular parent-teacher meetings kept us informed about Rohan's progress. Excellent institute!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Amit Kulkarni",
    role: "Alumni - JEE 2023",
    rating: 5,
    text: "Catalyst's teaching methodology is unique. The concept-first approach helped me understand physics at a deeper level. Now studying at IIT Bombay!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Kavita Nair",
    role: "Parent",
    rating: 5,
    text: "The faculty goes above and beyond to ensure each student succeeds. My daughter's transformation during the Ignite program was amazing.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sanjay Mehta",
    role: "Alumni - JEE 2024",
    rating: 5,
    text: "The mock tests and analysis sessions were game-changers. Catalyst prepared me not just academically but mentally for the competitive exams.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
];

// ============ COMPONENT ============
export const Results = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Results</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Celebrating the success of our students who have achieved their dreams
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0090D4]/10 flex items-center justify-center text-[#0090D4]">
                  <stat.icon size={24} />
                </div>
                <p className="text-3xl font-extrabold text-[#0090D4]">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Section */}
      <section id="toppers" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Our Toppers</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet some of our exceptional students who have made us proud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topperResults.map((topper, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] p-6 text-center">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mt-4">{topper.name}</h3>
                  <p className="text-blue-100 text-sm">{topper.previousSchool}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-600">{topper.exam}</span>
                    <span className="px-4 py-1 bg-[#EF4444] text-white text-sm font-bold rounded-full">
                      {topper.rank}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Quote size={16} className="text-[#0090D4] shrink-0 mt-1" />
                    <p className="text-sm text-slate-600 italic">{topper.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">What People Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hear from our students and parents about their experience with Catalyst
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 mb-6 leading-relaxed">"{review.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800">{review.name}</h4>
                    <p className="text-sm text-[#0090D4]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#0090D4] to-[#0070A4] rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-extrabold mb-4">Ready to Join Our Success Story?</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Take the first step towards your dream career. Join Catalyst and become the next success story.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#0090D4] font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl transform hover:-translate-y-1"
            >
              Book Free Counselling
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
