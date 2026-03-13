import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

export const IgniteProgram = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-[#1f2937] font-sans pb-10 bg-[#f9faf8]" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px', WebkitFontSmoothing: 'antialiased' }}>
      {/* HERO SECTION */}
      <div className="relative bg-[#1b3b2b] overflow-hidden pt-6 sm:pt-8 pb-20 sm:pb-32 px-3 sm:px-6 lg:px-8">
        {/* Abstract Curve Background */}
        <div className="absolute top-0 right-0 w-[60%] h-full z-10 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(234, 179, 8, 0.15), transparent 60%)' }}></div>

        {/* Decorative Vector Blob */}
        <svg className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-30 z-0 text-[#eab308] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 C40,20 60,80 100,100 L100,0 Z"></path>
        </svg>

        {/* Background Image area (right side) */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-90 transition-opacity duration-300 pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b3b2b] via-[#1b3b2b]/80 to-transparent z-10 hidden md:block"></div>
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
            alt="Teacher helping students"
            className="w-full h-full object-cover object-center rounded-bl-[100px]"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-start pt-6">
          {/* Top Logo/Brand Placeholder */}
          <div className="flex items-center gap-2 mb-4 sm:mb-8">
            <i className="ph-fill ph-hexagon text-[#e6f0eb] text-2xl"></i>
            <span className="text-white font-semibold tracking-wide text-lg"><span className="text-[#eab308]">Catalyst</span> Coaching Classes</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3 sm:mb-4 tracking-tight">
              <span className="text-[#eab308]">IGNITE</span> Foundation Program
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl font-medium text-gray-200 mb-4 sm:mb-8 border-l-4 border-[#eab308] pl-3 sm:pl-4">
              For students in <span className="font-bold text-white">8th, 9th & 10th Std</span>
            </h2>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-5 md:p-6 mb-4 sm:mb-6 w-fit">
              <p className="text-sm sm:text-base md:text-xl text-white font-light leading-relaxed">
                Rigorous <span className="font-bold">1-Year Foundation Program</span><br className="hidden sm:block" />
                Designed to Excel in Academics & <span className="font-bold text-[#eab308]">Master Olympiads.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 relative z-30">

        {/* Alert Banner Bar */}
        <div className="bg-gradient-to-r from-yellow-50 to-[#eab308]/20 border border-yellow-200 rounded-lg py-3 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 mb-6 sm:mb-12 shadow-md w-fit">
          <i className="ph-fill ph-briefcase text-[#ea580c] text-xl sm:text-2xl animate-bounce"></i>
          <p className="text-gray-800 font-semibold text-xs sm:text-base text-center sm:text-left">
            Intense 1-Year Foundation Track for Competitive Excellence.
          </p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">

          {/* LEFT COLUMN (Content) */}
          <div className="lg:col-span-7 flex flex-col gap-12">

            {/* Section 1: Olympiad Prep */}
            <section>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 flex flex-wrap gap-2 items-center">
                Olympiad Exposure <span className="text-[#ea580c]">+</span> Academic Excellence
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Students develop strong conceptual understanding and problem-solving skills while getting early exposure to Olympiad-style thinking.
              </p>

              <div className="space-y-6">
                {/* List Item 1 */}
                <div className="flex items-start gap-4 group">
                  <i className="ph-fill ph-check-circle text-[#2d5a40] text-3xl mt-0.5 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Conceptual Clarity</h4>
                    <p className="text-gray-600">Not rote learning, but mastering Physics, Chemistry, Maths & Mental Ability through deep understanding.</p>
                  </div>
                </div>
                {/* List Item 2 */}
                <div className="flex items-start gap-4 group">
                  <i className="ph-fill ph-check-circle text-[#2d5a40] text-3xl mt-0.5 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Olympiad Thinking</h4>
                    <p className="text-gray-600">Carefully curated problems that introduce students to Olympiad-style logical and analytical thinking.</p>
                  </div>
                </div>
                {/* List Item 3 */}
                <div className="flex items-start gap-4 group">
                  <i className="ph-fill ph-check-circle text-[#2d5a40] text-3xl mt-0.5 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Structured Learning Schedule</h4>
                    <p className="text-gray-600">3–5 study days a week focusing on concepts, application, and disciplined study habits.</p>
                  </div>
                </div>
                {/* List Item 4 */}
                <div className="flex items-start gap-4 group">
                  <i className="ph-fill ph-check-circle text-[#2d5a40] text-3xl mt-0.5 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Strong Academic Foundation</h4>
                    <p className="text-gray-600">Build the core concepts required for school excellence today and JEE/NEET preparation later.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            {/* Section 2: Key Highlights Grid */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Highlights <span className="font-normal text-gray-500">of the IGNITE Foundation</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Highlight Card 1 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-yellow-50 text-[#eab308] p-2 rounded-lg shrink-0">
                      <i className="ph-fill ph-clock-countdown text-2xl"></i>
                    </div>
                    <h4 className="font-bold text-gray-900 leading-tight">300 + Hours <br /> <span className="text-sm font-medium text-gray-500">of Conceptual Mastery</span></h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-12">Balanced mix of theory + practice + Olympiad-level problems.</p>
                </div>

                {/* Highlight Card 2 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-green-50 text-[#2d5a40] p-2 rounded-lg shrink-0">
                      <i className="ph-fill ph-users-three text-2xl"></i>
                    </div>
                    <h4 className="font-bold text-gray-900 leading-tight">Small Batch Size <br /> <span className="text-sm font-medium text-gray-500">For focused learning</span></h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-12">Individual attention and small class strength.</p>
                </div>

                {/* Highlight Card 3 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-blue-50 text-blue-600 p-2 rounded-lg shrink-0">
                      <i className="ph-fill ph-file-text text-2xl"></i>
                    </div>
                    <h4 className="font-bold text-gray-900 leading-tight">Regular Tests, <br /> <span className="text-sm font-medium text-gray-500">Feedback & Updates</span></h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-12">Track progress, identify weaknesses, align strategy.</p>
                </div>

                {/* Highlight Card 4 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-50 text-[#ea580c] p-2 rounded-lg shrink-0">
                      <i className="ph-fill ph-trophy text-2xl"></i>
                    </div>
                    <h4 className="font-bold text-gray-900 leading-tight">Olympiad Excellence <br /> <span className="text-sm font-medium text-gray-500">Top Scorers in NSEJS...</span></h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-12">Exposure to Olympiad-style logical and analytical problems.</p>
                </div>

              </div>
            </section>

          </div>

          {/* RIGHT COLUMN (Forms & Images) */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-4 sm:p-8 border border-gray-100 relative overflow-hidden lg:-mt-24 z-40">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ea580c] to-[#eab308]"></div>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Schedule Your Free <br /> Counselling Session</h4>
              <p className="text-gray-500 text-sm mb-6">Discuss your child's academic goals and get a personalized roadmap.</p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-6">
                  <i className="ph-fill ph-check-circle text-green-500 text-4xl mb-2"></i>
                  <h5 className="text-green-800 font-bold text-lg mb-1">Details Received!</h5>
                  <p className="text-green-700 text-sm mb-4">You can now download the program brochure below.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Input 1 */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <i className="ph ph-user text-gray-400 text-lg"></i>
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#ea580c] focus:border-[#ea580c] block w-full pl-10 p-3.5 transition-colors" placeholder="Parent/Student Name" required />
                  </div>

                  {/* Input 2 (Select styled as input) */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <i className="ph ph-lock-key text-gray-400 text-lg"></i>
                    </div>
                    <select defaultValue="" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#ea580c] focus:border-[#ea580c] block w-full pl-10 p-3.5 appearance-none transition-colors" required>
                      <option value="" disabled className="text-gray-400">Current Class</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                      <i className="ph ph-caret-down text-gray-400"></i>
                    </div>
                  </div>

                  {/* Input 3 */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <i className="ph ph-phone text-gray-400 text-lg"></i>
                    </div>
                    <input type="tel" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#ea580c] focus:border-[#ea580c] block w-full pl-10 p-3.5 transition-colors" placeholder="Mobile Number" required />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="w-full text-white bg-[#ea580c] hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-semibold rounded-lg text-base px-5 py-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-orange-500/30 mt-4">
                    <i className="ph ph-paper-plane-right text-xl"></i>
                    Book My Counselling Slot
                  </button>
                </form>
              )}

              {/* Contact Methods */}
              <div className="mt-8 flex flex-col gap-4 justify-center items-center pt-6 border-t border-gray-100 mb-6">
                <a href="tel:+917758884678" className="flex items-center gap-3 text-gray-700 hover:text-[#ea580c] font-medium transition-colors">
                  <div className="bg-green-100 text-[#2d5a40] p-1.5 rounded-full">
                    <i className="ph-fill ph-phone text-lg"></i>
                  </div>
                  +91-7758884678
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#2d5a40] font-medium transition-colors">
                  <div className="bg-green-100 text-[#2d5a40] p-1.5 rounded-full">
                    <i className="ph-fill ph-whatsapp-logo text-lg"></i>
                  </div>
                  Message us on WhatsApp
                </a>
              </div>

              {/* Download Brochure (Always Visible, Conditionally Disabled) */}
              <div className="relative group w-full">
                <a
                  href={isSubmitted ? "/brochure/IGNITE Foundation Program.pdf" : "#"}
                  download={isSubmitted ? "IGNITE-Foundation-Program" : undefined}
                  onClick={(e) => {
                    if (!isSubmitted) e.preventDefault();
                  }}
                  className={`w-full font-semibold rounded-xl text-base px-5 py-4 flex items-center justify-center gap-2 transition-all duration-300 border-[2px]
                    ${isSubmitted
                      ? 'text-white bg-gradient-to-b from-[#18489a] to-[#0f3d8a] hover:from-[#133e85] hover:to-[#0a3175] focus:ring-4 focus:ring-blue-300 shadow-md border-[#93c5fd]/50'
                      : 'text-[#18489a]/60 bg-[#18489a]/5 border-[#18489a]/10 cursor-not-allowed hover:bg-[#18489a]/10'
                    }`}
                >
                  <BookOpen size={20} />
                  Download Brochure
                </a>

                {/* Tooltip on hover if not submitted */}
                {!isSubmitted && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
                    Please fill out the form to download
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
                  </div>
                )}
              </div>

            </div>

            {/* Secondary Image Container */}
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                alt="Students studying joyfully"
                className="w-full h-64 object-cover" />
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER CTA */}
      <div className="mt-20 w-full bg-[#1b3b2b] py-10 px-4 sm:px-6 lg:px-8 border-t-4 border-[#eab308]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
              Need the <span className="font-bold text-[#eab308]">Catalyst Edge</span> for Your Child?
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Give your child the <span className="font-bold text-white">best foundation</span> for future competitive exams.
            </p>
          </div>

          <button type="button" className="text-white bg-[#ea580c] hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-bold rounded-full text-base md:text-lg px-8 py-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-orange-900/50 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-white animate-ping mr-1"></div>
            Get Started for April 2026 Batch
          </button>
        </div>
      </div>
    </div>
  );
};
