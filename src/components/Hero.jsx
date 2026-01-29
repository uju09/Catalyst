export const Hero = () => (
  <section id="home" className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center px-4">
    {/* Background Image with Overlay */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 144, 212, 0.85), rgba(0, 15, 30, 0.8)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    <div className="max-w-4xl mx-auto text-white relative z-10">
      <p className="font-serif italic text-blue-100 mb-4 text-lg md:text-xl tracking-wide">
        "नास्ति ज्ञानसमं तेजः"
      </p>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
        There is no brilliance <br />equal to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">knowledge.</span>
      </h1>

      <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
        Shaping the next generation of scientific thinkers. The definitive roadmap to IIT-JEE, NEET & Olympiad success.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#contact"
          className="px-8 py-4 bg-white text-[#0090D4] font-bold rounded-full hover:bg-gray-50 transition-all shadow-xl transform hover:-translate-y-1"
        >
          Book Free Counselling
        </a>
        <a
          href="#programs"
          className="px-8 py-4 bg-[#EF4444] text-white font-bold rounded-full hover:bg-red-500 transition-all shadow-xl shadow-red-900/20 transform hover:-translate-y-1"
        >
          Explore Courses
        </a>
      </div>
    </div>
  </section>
);
