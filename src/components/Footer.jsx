import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-800 bg-[#0f172a] relative z-10 font-sans text-xs text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Name */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
          <span className="font-extrabold text-white text-base">Amal Srivastava</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Full-Stack & AI Engineer</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-sky-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-sky-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-sky-300 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div>
          © {new Date().getFullYear()} Amal Srivastava. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
