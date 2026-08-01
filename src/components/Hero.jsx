import React from 'react';
import avatarImg from '../assets/Amal-avatar.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden bg-cyber-grid">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] orb-cyan rounded-full pointer-events-none blur-3xl opacity-45"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] orb-purple rounded-full pointer-events-none blur-3xl opacity-35"></div>

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        
        {/* Holographic Avatar Display */}
        <div data-aos="zoom-in" className="relative mb-8 group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-400 opacity-80 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-sky-400/90 bg-slate-900 shadow-[0_0_35px_rgba(56,189,248,0.5)]">
            <img
              src={avatarImg}
              alt="Amal Srivastava Avatar"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="absolute bottom-1.5 right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
          </span>
        </div>

        {/* Status Pill */}
        <div data-aos="fade-up" className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-sky-400/30 text-xs md:text-sm font-semibold text-sky-300 mb-6 shadow-lg">
          <span className="text-yellow-400 text-sm">🏆</span> Winner of IIT Kharagpur Innovation Challenge
        </div>

        {/* Main Name & Title */}
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4 leading-none">
          Amal <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 text-glow-cyan">Srivastava</span>
        </h1>

        <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl font-extrabold text-slate-200 max-w-2xl mb-8 tracking-wide">
          Full-Stack & AI Engineer <span className="text-sky-400">@</span> NIT Jamshedpur
        </p>

        {/* Short Summary Tagline */}
        <p data-aos="fade-up" data-aos-delay="300" className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mb-10 font-medium">
          Building intelligent multi-agent AI systems, high-throughput machine learning pipelines, and modern full-stack web platforms. Combining engineering problem-solving with cutting-edge software architectures.
        </p>

        {/* Action Buttons */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-600 text-black font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.75)] hover:scale-105 transition-all duration-300"
          >
            Explore Profile ↓
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full glass-card border-sky-400/40 text-sky-300 hover:text-white hover:border-sky-400 font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Quick Metric Counters */}
        <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <div className="glass-card rounded-2xl p-4.5 text-center border-slate-700/60 hover:border-sky-400/50 transition-all hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-black text-sky-400 font-mono">8.78</h3>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-1">CGPA @ NIT JSR</p>
          </div>
          <div className="glass-card rounded-2xl p-4.5 text-center border-slate-700/60 hover:border-purple-400/50 transition-all hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-black text-purple-400 font-mono">#1 Win</h3>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-1">IIT Kharagpur</p>
          </div>
          <div className="glass-card rounded-2xl p-4.5 text-center border-slate-700/60 hover:border-emerald-400/50 transition-all hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">10+ ML</h3>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-1">Production Models</p>
          </div>
          <div className="glass-card rounded-2xl p-4.5 text-center border-slate-700/60 hover:border-yellow-400/50 transition-all hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-black text-yellow-400 font-mono">100%</h3>
            <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-1">Full-Stack & AI</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
