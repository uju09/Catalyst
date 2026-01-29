import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => (
  <footer id="contact" className="bg-[#0090D4] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          {/* Footer Logo - C³ */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-white border-[3px] border-[#EF4444] rounded-2xl flex items-center justify-center relative shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
              <span className="text-[#0090D4] font-extrabold text-3xl leading-none relative z-10">C</span>
              <span className="text-[#0090D4] text-sm font-bold absolute top-1 right-2 z-10">3</span>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight block">CATALYST COACHING</span>
              <span className="font-bold text-sm tracking-widest text-white/80">CLASSES</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl font-serif italic text-white/90 mb-2">
            नास्ति ज्ञानसमं तेजः।।
          </p>
          <p className="text-white/80 text-sm mb-6">
            There is no brilliance equal to knowledge
          </p>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Our Centers</h4>
          <ul className="space-y-4 text-white/80 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 text-[#EF4444] shrink-0" />
              <span><strong className="text-white">Wakad:</strong><br />Sonigara Landmark, beside Dynasty Society</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 text-[#EF4444] shrink-0" />
              <span><strong className="text-white">Vikas Nagar:</strong><br />Vision Aristo, Near Mukai Chowk</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-white/80 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#EF4444]" />
              <span>7758884678 / 7758885345</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#EF4444]" />
              <span>info@catalystcoachingclasses.in</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe size={18} className="text-[#EF4444]" />
              <a href="https://www.catalystcoachingclasses.in" className="hover:text-white transition-colors">
                www.catalystcoachingclasses.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
        <p>&copy; 2026 Catalyst Coaching Classes. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
