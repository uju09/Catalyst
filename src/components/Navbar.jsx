import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Results", href: "/#results" },
  { name: "Contact Us", href: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href) => {
    setIsOpen(false);
    // If it's a hash link on the home page, scroll to element
    if (href.includes('#') && location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 bg-white border-[3px] border-[#EF4444] rounded-lg flex flex-col items-center justify-center shadow-sm">
              <span className="text-[#0090D4] font-extrabold text-xl leading-none -mb-1">C</span>
              <span className="text-[#0090D4] text-[10px] font-bold leading-none ml-2">3</span>
            </div>
            <div>
              <span className="block font-extrabold text-xl leading-tight text-[#0090D4] tracking-tight">CATALYST</span>
              <span className="block text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">Coaching Classes</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-[#0090D4] transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-[#0090D4] transition-colors"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="/#contact"
              className="px-6 py-2.5 bg-[#0090D4] text-white text-sm font-bold rounded-full hover:bg-sky-500 transition-all shadow-lg shadow-blue-200"
            >
              Book a Free Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 text-2xl hover:text-[#0090D4]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="p-4 space-y-3">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-4 py-2 text-slate-600 font-medium hover:bg-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-slate-600 font-medium hover:bg-slate-50"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="/#contact"
              className="block w-full text-center px-4 py-3 bg-[#0090D4] text-white font-bold rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
