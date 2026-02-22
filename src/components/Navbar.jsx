import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Flame, Zap } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Courses",
    href: "/courses",
    dropdown: [
      { name: "IGNITE Foundation Program", href: "/courses/ignite", icon: Flame, color: "text-orange-500" },
      { name: "SUPER-13 Integrated Program", href: "/courses/super-13", icon: Zap, color: "text-blue-500" },
    ]
  },
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
    setMobileCoursesOpen(false);
  }, [location]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    setMobileCoursesOpen(false);
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href.includes('#') && location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="relative w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link to="/" className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => handleNavClick('/')}>
            <Logo size="default" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                // Courses with dropdown
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-[#0090D4] transition-colors"
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Panel */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                    <div className="p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-[#0090D4] transition-colors group"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                            <item.icon size={16} />
                          </div>
                          <span className="text-sm font-semibold">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 p-2">
                      <Link to="/courses" className="block text-center text-xs font-semibold text-slate-400 hover:text-[#0090D4] py-1.5 transition-colors" onClick={() => setDropdownOpen(false)}>
                        View All Courses →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-[#0090D4] transition-colors"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </Link>
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
            className="md:hidden text-slate-600 hover:text-[#0090D4] transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-7 h-7">
              <Menu size={28} className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
              <X size={28} className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl overflow-hidden transition-all ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{ transitionDuration: '400ms' }}
      >
        <div className="p-4 space-y-1">
          {navLinks.map((link, idx) => (
            link.dropdown ? (
              // Mobile Courses Accordion
              <div key={link.name}
                className={`transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: isOpen ? `${idx * 60}ms` : '0ms' }}
              >
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-slate-600 font-medium rounded-xl hover:bg-blue-50 hover:text-[#0090D4] transition-all"
                >
                  {link.name}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileCoursesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-1 pb-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-slate-500 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-[#0090D4] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon size={14} className={item.color} />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-4 py-3 text-slate-600 font-medium rounded-xl hover:bg-blue-50 hover:text-[#0090D4] transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                style={{ transitionDelay: isOpen ? `${idx * 60}ms` : '0ms' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <div
            className={`pt-2 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 60}ms` : '0ms' }}
          >
            <a
              href="/#contact"
              className="block w-full text-center px-4 py-3 bg-[#0090D4] text-white font-bold rounded-full hover:bg-sky-500 transition-colors shadow-lg shadow-blue-200/50"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
