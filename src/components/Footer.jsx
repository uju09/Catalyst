import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => (
  <footer id="contact" className="bg-[#0f172a] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          {/* Footer Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white border-2 border-[#EF4444] rounded flex flex-col items-center justify-center font-bold">
              <span className="text-[#0090D4] font-extrabold text-sm leading-none -mb-0.5">C</span>
              <span className="text-[#0090D4] text-[8px] font-bold leading-none ml-1">3</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight">CATALYST</span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
            To establish a leading Olympiad / IT-JEE / NEET Training ecosystem that reaches students nationwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0090D4] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0090D4] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0090D4] transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Our Centers</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 text-[#EF4444] shrink-0" />
              <span><strong>Wakad:</strong><br />Sonigara Landmark, beside Dynasty Society</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-1 text-[#EF4444] shrink-0" />
              <span><strong>Vikas Nagar:</strong><br />Vision Aristo, Near Mukai Chowk</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#0090D4]" />
              <span>7758884678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#0090D4]" />
              <span>info@catalystcoachingclasses.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; 2026 Catalyst Coaching Classes. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
