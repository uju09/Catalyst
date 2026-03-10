import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: 'Ujwal G. Akotkar',
    image: 'U',
    text: "I had the opportunity to learn under Mr. Mishra Sir, the founder of Catalyst Classes, and his guidance played a key role in my JEE preparation. His way of teaching—clear, concept-focused, and practical—made difficult topics much easier to understand. More than just academics, his mentoring and motivation helped me stay disciplined and confident. That guidance was instrumental in helping me secure admission to IIIT Dharwad through JEE. I’m truly grateful for his support.",
  },
  {
    id: 2,
    name: 'Tejas Bobade',
    image: 'T',
    text: "Catalyst Coaching Classes is an excellent institute for students preparing for JEE and Olympiads, especially for those who want to start early. The teaching emphasizes strong conceptual understanding, logical thinking, and problem-solving...",
  },
  {
    id: 3,
    name: 'Dhanraj Bhosale',
    image: 'D',
    text: "Catalyst Coaching Classes provides a very strong foundation for JEE and Olympiad preparation, especially for students who begin early. The focus on conceptual clarity and analytical thinking makes learning effective and long-lasting. The...",
  },
  {
    id: 4,
    name: 'Vansh Dhillon',
    image: 'V',
    text: "Preparing for competitive exams is usually a long journey, but under Mishra Sir’s guidance, I was able to clear both JEE Mains and JEE Advanced with just one year of preparation. His mentorship went far beyond just academics; he was a...",
  },
  {
    id: 5,
    name: 'BHAVESH SANDBHOR',
    image: 'B',
    text: "Cracking the JEE Advanced requires more than just hard work; it requires a specific kind of mental clarity. Catalyst Coaching Classes was instrumental in developing that mindset for me. Seturaj Sir teaching style is a masterclass in...",
  },
  {
    id: 6,
    name: 'Ketan Singh',
    image: 'K',
    text: "Catalyst Coaching Classes is an excellent place for JEE/NEET preparation. The teaching is concept-oriented and very student-friendly. Setu Sir makes Chemistry super easy to understand with his simple explanations and exam-focused guidance. Highly recommend this institute for serious aspirants!",
  },
  {
    id: 7,
    name: 'tushar Khandave',
    image: 't',
    text: "Catalyst Coaching Classes provides a great learning environment, and Setu Sir is truly an excellent faculty member. He explains concepts in a clear, logical, and easy-to-understand manner, making even complex topics simple.",
  },
  {
    id: 8,
    name: 'Jaswant Rajput',
    image: 'J',
    text: "Mishra Sir played a vital role in my NEET preparation. His clear, concept-based teaching built strong fundamentals, and his constant emotional support helped me stay motivated during stressful times 💪.Today, as a student of AIIMS Patna, I am...",
  }
];

const ReviewsSection = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#0090D4] font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2">Student Feedback</p>
          <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">What Our Students Say</h2>
          <div className="w-16 h-1.5 bg-[#0090D4] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-50 border border-slate-200">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random&color=fff&size=128&bold=true`}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{review.name}</h3>
                  <p className="text-xs text-slate-500">a month ago</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {review.text}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-6">
                <div className="flex items-center gap-1.5 cursor-pointer text-slate-500 hover:text-slate-700 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                  <span className="text-sm font-semibold">Like</span>
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer text-slate-500 hover:text-slate-700 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                  <span className="text-sm font-semibold">Share</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
