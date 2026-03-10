import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';

export const Super13Program = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f4f7fb] text-[#0f172a] font-sans pb-10" style={{ WebkitFontSmoothing: 'antialiased' }}>
      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-[#0f4c9c] to-[#1e62c5] overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-24 md:pt-16 md:pb-32 px-3 sm:px-6 lg:px-8">
        {/* Background Image area (right side) */}
        <div className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-20 md:opacity-90 transition-opacity duration-300 pointer-events-none">
          {/* Gradient overlay to blend image into background smoothly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f4c9c] via-[#0f4c9c]/80 to-transparent z-10 hidden md:block"></div>
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Students studying collaboratively"
            className="w-full h-full object-cover object-center"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-start">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 tracking-tight">
              SUPER-13 Integrated <br className="hidden md:block" />
              Mentorship Program
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6">
              For Class 10 Students Serious About IIT, NIT & Top Engineering Colleges.
            </h2>
            <div className="h-1 w-12 sm:w-16 bg-white/30 rounded mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl leading-relaxed">
              A 2-Year High-Intensity Academic Program Designed to Build Top <span className="font-bold text-white">JEE Performers</span> — Not Average Aspirants.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER (Pulled up over hero) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-30">

        {/* Timeline & Exams Info Bar */}
        <div className="bg-white rounded-xl md:rounded-full shadow-lg border border-gray-100 p-3 sm:p-4 md:py-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base text-[#0f172a] font-medium">
          <div className="flex items-center gap-2">
            <i className="ph ph-calendar-blank text-[#3b82f6] text-xl"></i>
            <span>April 2026 – May 2028</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-200"></div>
          <div className="flex flex-wrap justify-center items-center gap-2 text-center">
            <i className="ph ph-stack text-[#3b82f6] text-xl"></i>
            <span className="text-[#64748b]">JEE Main</span>
            <span className="text-gray-300">|</span>
            <span>JEE Advanced</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#64748b]">BITSAT</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#64748b]">MHT-CET</span>
          </div>
        </div>

        {/* Alert Banner (Top) */}
        <div className="bg-[#fef3c7]/80 border border-yellow-200 rounded-xl md:rounded-full py-2 sm:py-3 px-4 sm:px-6 flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 mx-auto max-w-4xl shadow-sm">
          <i className="ph-fill ph-lightning text-yellow-500 text-lg sm:text-xl animate-pulse"></i>
          <p className="text-yellow-800 font-medium text-xs sm:text-sm md:text-base text-center">
            <span className="font-bold">Limited to Only 13 Focused Students Per Batch</span> for Personal Mentorship.
          </p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">

          {/* LEFT COLUMN (Content) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10">

            {/* Section 1: What Child Gets */}
            <section>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1e40af] mb-4 sm:mb-6">What Your Child Gets in 2 Years</h3>
              <div className="space-y-3">
                {/* List Items */}
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg"><span className="font-bold text-[#0f172a]">3000+ Hours</span> of Structured Academic Training</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg"><span className="font-bold text-[#0f172a]">6 Days/Week</span> Academic Immersion</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg"><span className="font-bold text-[#0f172a]">Daily 5+ Hours</span> of Focused Learning</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg">Continuous Performance Tracking</p>
                </div>
              </div>
            </section>

            {/* Small Alert Banner */}
            <div className="bg-[#fef3c7]/80 border border-yellow-200 rounded-lg py-3 px-5 flex items-center justify-start gap-3 shadow-sm">
              <i className="ph-fill ph-drop text-yellow-500 text-lg"></i>
              <p className="text-yellow-800 font-medium text-sm md:text-base">
                <span className="font-bold">Performance-Based Scholarships Available</span> After Bridge Program
              </p>
            </div>

            {/* Section 2: Bridge Program */}
            <section>
              <h3 className="text-2xl font-bold text-[#1e40af] mb-3">Mandatory Academic Bridge Program</h3>
              <p className="text-gray-600 mb-6 text-base md:text-lg">
                Before the main batch begins, every student undergoes a structured academic bridge to:
              </p>
              <div className="space-y-3">
                {/* List Items */}
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg">Strengthen Class 9–10 <span className="font-bold text-[#0f172a]">fundamentals</span></p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg">Introduce <span className="font-bold text-[#0f172a]">JEE-style thinking</span> early</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg">Align students from different school boards</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform duration-200">
                  <i className="ph-fill ph-check-circle text-green-600 text-2xl flex-shrink-0"></i>
                  <p className="text-gray-700 text-lg">Prepare them for <span className="font-bold text-[#0f172a]">competitive intensity</span></p>
                </div>
              </div>
            </section>

            {/* Small Alert Banner (Repeated as in design) */}
            <div className="bg-[#fef3c7]/80 border border-yellow-200 rounded-lg py-3 px-5 flex items-center justify-start gap-3 shadow-sm mb-8 lg:mb-0">
              <i className="ph-fill ph-drop text-yellow-500 text-lg"></i>
              <p className="text-yellow-800 font-medium text-sm md:text-base">
                <span className="font-bold">Performance-Based Scholarships Available</span> After Bridge Program
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN (Forms & Results) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-6 md:p-8 border border-gray-100">
              <h4 className="text-xl font-bold text-[#0f172a] mb-2">Schedule a Free <br /> Academic Strategy Session</h4>
              <p className="text-gray-500 text-sm mb-6">Discuss your child's academic goals and get a personalized roadmap.</p>

              <form className="space-y-4">
                {/* Input 1 */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <i className="ph ph-user text-gray-400 text-lg"></i>
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-200 text-[#0f172a] text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full pl-10 p-3 transition-colors" placeholder="Parent/Student Name" required />
                </div>

                {/* Input 2 (Select styled as input) */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <i className="ph ph-lock-key text-gray-400 text-lg"></i>
                  </div>
                  <select defaultValue="" className="bg-gray-50 border border-gray-200 text-[#0f172a] text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full pl-10 p-3 appearance-none transition-colors" required>
                    <option value="" disabled className="text-gray-400">Current Class</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ph ph-caret-down text-gray-400"></i>
                  </div>
                </div>

                {/* Input 3 */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <i className="ph ph-phone text-gray-400 text-lg"></i>
                  </div>
                  <input type="tel" className="bg-gray-50 border border-gray-200 text-[#0f172a] text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full pl-10 p-3 transition-colors" placeholder="Mobile Number" required />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full text-white bg-[#3b82f6] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3.5 flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-blue-500/30 mt-2">
                  <i className="ph ph-paper-plane-right text-xl"></i>
                  Book My Counselling Slot
                </button>
              </form>

              {/* Contact Methods */}
              <div className="mt-6 flex flex-col gap-3 justify-center items-center pt-5 border-t border-gray-100">
                <a href="tel:+917758884678" className="flex items-center gap-2 text-[#0f172a] hover:text-[#3b82f6] font-medium transition-colors">
                  <i className="ph-fill ph-phone-call text-green-600 text-xl"></i>
                  +91-7758884678
                </a>
                <a href="#" className="flex items-center gap-2 text-[#0f172a] hover:text-green-600 font-medium transition-colors">
                  <i className="ph-fill ph-whatsapp-logo text-green-600 text-xl"></i>
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            {/* Results Card */}
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-6 md:p-8 border border-gray-100">
              <h4 className="text-xl font-bold text-[#0f172a] mb-5">Proven Results</h4>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-green-600 text-xl mt-0.5"></i>
                  <p className="text-gray-700 text-sm md:text-base">Multiple <span className="font-bold text-[#0f172a]">99+ Percentile Scorers</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-green-600 text-xl mt-0.5"></i>
                  <p className="text-gray-700 text-sm md:text-base"><span className="font-bold text-[#0f172a]">Consistent</span> JEE Main Qualifiers</p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ph-fill ph-check-circle text-green-600 text-xl mt-0.5"></i>
                  <p className="text-gray-700 text-sm md:text-base">Strong Track Record in Competitive Exams</p>
                </div>
              </div>

              <a
                href="/brochure/SUPER13.pdf"
                download="SUPER-13-Brochure"
                className="w-full text-white bg-gradient-to-b from-[#18489a] to-[#0f3d8a] hover:from-[#133e85] hover:to-[#0a3175] focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-5 py-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-md border-[3px] border-[#93c5fd]/50"
              >
                <BookOpen size={20} />
                Download Brochure
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM CTA BANNER */}
      <div className="mt-16 w-full bg-gradient-to-br from-[#0f4c9c] to-[#1e62c5] py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Start <span className="font-light">the Journey to IIT?</span>
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Serious preparation requires <span className="font-bold text-white">serious commitment.</span><br />
              <span className="font-bold text-white">Seats</span> are limited to 13 students only.
            </p>
          </div>

          <button type="button" className="text-[#1e40af] bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-base px-8 py-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-xl flex-shrink-0">
            <i className="ph ph-paper-plane-right text-xl"></i>
            Secure Your Seat for 2026 Batch
          </button>
        </div>
      </div>

    </div>
  );
};
