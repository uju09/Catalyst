import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => (
  <footer id="contact" className="bg-[#0090D4] text-white pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          {/* Footer Logo - C³ */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-2 sm:border-[3px] border-[#EF4444] rounded-xl sm:rounded-2xl flex items-center justify-center relative shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
              <span className="text-[#0090D4] font-extrabold text-xl sm:text-2xl md:text-3xl leading-none relative z-10">C</span>
              <span className="text-[#0090D4] text-[10px] sm:text-xs md:text-sm font-bold absolute top-0.5 right-1 sm:top-1 sm:right-1.5 z-10">3</span>
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight block">CATALYST COACHING</span>
              <span className="font-bold text-[10px] sm:text-xs md:text-sm tracking-widest text-white/80">CLASSES</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl font-serif italic text-white/90 mb-1">
            नास्ति ज्ञानसमं तेजः।।
          </p>
          <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6">
            There is no brilliance equal to knowledge
          </p>

          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"><Facebook size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"><Instagram size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"><Youtube size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
          </div>
        </div>

        {/* Centers */}
        <div>
          <h4 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 text-white">Our Centers</h4>
          <ul className="space-y-3 sm:space-y-4 text-white/80 text-xs sm:text-sm">
            <li className="flex gap-2 sm:gap-3">
              <MapPin size={16} className="mt-0.5 text-[#EF4444] shrink-0 sm:w-[18px] sm:h-[18px]" />
              <span><strong className="text-white">Wakad:</strong><br />Sonigara Landmark, beside Dynasty Society</span>
            </li>
            <li className="flex gap-2 sm:gap-3">
              <MapPin size={16} className="mt-0.5 text-[#EF4444] shrink-0 sm:w-[18px] sm:h-[18px]" />
              <span><strong className="text-white">Vikas Nagar:</strong><br />Vision Aristo, Near Mukai Chowk</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 text-white">Contact</h4>
          <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-white/80 text-xs sm:text-sm">
            <li className="flex items-center gap-2 sm:gap-3">
              <Phone size={16} className="text-[#EF4444] sm:w-[18px] sm:h-[18px]" />
              <span>7758884678 / 7758885345</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Mail size={16} className="text-[#EF4444] sm:w-[18px] sm:h-[18px]" />
              <span className="break-all">info@catalystcoachingclasses.in</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Globe size={16} className="text-[#EF4444] sm:w-[18px] sm:h-[18px]" />
              <a href="https://www.catalystcoachingclasses.in" className="hover:text-white transition-colors break-all">
                catalystcoachingclasses.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs text-white/60">
        <p>© 2026 Catalyst Coaching Classes. All Rights Reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
