import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Knowledge Corner", href: "/knowledge-corner" },
  { name: "Results", href: "/results" },
  { name: "Contact Us", href: "/contact" },
];

// Reusable Logo Component
export const Logo = ({ size = 'default' }) => {
  const sizes = {
    small: { box: 'w-10 h-10', c: 'text-xl', three: 'text-[10px] top-0.5 right-1', text: 'text-base', sub: 'text-[8px]' },
    default: { box: 'w-12 h-12', c: 'text-2xl', three: 'text-xs top-1 right-1.5', text: 'text-lg', sub: 'text-[10px]' },
    large: { box: 'w-16 h-16', c: 'text-4xl', three: 'text-sm top-1 right-2', text: 'text-xl', sub: 'text-xs' },
  };
  const s = sizes[size] || sizes.default;

  return (
    <div className="flex items-center gap-3">
      <div className={`${s.box} bg-white border-[3px] border-[#EF4444] rounded-2xl flex items-center justify-center shadow-md relative overflow-hidden`}>
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        <span className={`text-[#0090D4] font-extrabold ${s.c} leading-none relative z-10`}>C</span>
        <span className={`text-[#0090D4] font-bold absolute ${s.three} z-10`}>3</span>
      </div>
      <div className="flex flex-col">
        <span className={`font-extrabold ${s.text} leading-tight text-[#0090D4] tracking-tight`}>
          CATALYST COACHING
        </span>
        <span className={`${s.sub} font-bold text-slate-400 tracking-[0.2em] uppercase`}>
          CLASSES
        </span>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Handle Home - scroll to top
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Handle hash links on homepage
    if (href.includes('#') && location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="relative w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link to="/" className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => handleNavClick('/')}>
            <Logo size="default" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-[#0090D4] transition-colors"
                  onClick={() => handleNavClick(link.href)}
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
