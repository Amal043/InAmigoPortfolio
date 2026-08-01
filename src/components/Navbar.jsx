import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40 transition-all duration-500 rounded-full ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-xl border border-sky-400/40 shadow-[0_0_25px_rgba(56,189,248,0.2)] py-3 px-6'
          : 'bg-slate-800/70 backdrop-blur-md border border-slate-700/60 py-4 px-8'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Brand Logo: Amal Srivastava */}
        <div className="flex items-center gap-3">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_12px_#38bdf8]"></span>
            <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-sky-300 transition-colors">
              Amal Srivastava
            </span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/15 text-sky-300 border border-sky-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            NIT Jamshedpur
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-semibold text-slate-200 hover:text-sky-300 hover:bg-sky-500/15 rounded-full transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-black bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 hover:from-sky-300 hover:to-blue-400 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-200 hover:text-sky-400 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-700 flex flex-col space-y-2 pb-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-sky-500/20 hover:text-sky-300 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-sky-400 rounded-full shadow-lg mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
