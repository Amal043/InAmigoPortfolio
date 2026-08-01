import React from 'react';
import { personalInfo, education } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10 font-sans">
      
      {/* Section Badge & Title */}
      <div data-aos="fade-up" className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          01 // Introduction
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Amal Srivastava</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Bio & Core Philosophy (7 cols) */}
        <div data-aos="fade-right" className="lg:col-span-7 flex flex-col justify-between glass-card rounded-3xl p-8 border-slate-800 hover:border-cyan-500/30 transition-all">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              Engineering & Software Passion
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
              Hi, I am <strong className="text-cyan-300 font-bold">Amal Srivastava</strong>, a Mechanical Engineering student at <strong className="text-white">NIT Jamshedpur</strong> with a deep-rooted passion for Full-Stack Web Development, Artificial Intelligence & Machine Learning, and Data Systems.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              By combining fundamental engineering problem-solving methodologies with modern software tools (React, Python, FastAPI, LangGraph, Google Vertex AI), I engineer scalable web platforms and intelligent AI solutions that convert complex raw data into actionable decision intelligence.
            </p>
          </div>

          {/* Key Milestones Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
            <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <span className="text-2xl">🏆</span>
              <div>
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">1st Place Winner</h4>
                <p className="text-xs text-slate-400">IIT Kharagpur Innovation Challenge</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <span className="text-2xl">🚀</span>
              <div>
                <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wide">PW Campus Ambassador</h4>
                <p className="text-xs text-slate-400">NIT Jamshedpur Campus Lead</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Profile Card (5 cols) */}
        <div data-aos="fade-left" className="lg:col-span-5 glass-card rounded-3xl p-6 border-slate-800 flex flex-col justify-between font-mono text-xs">
          {/* Terminal Window Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-slate-500 text-[11px]">amal_profile.json</span>
          </div>

          {/* Code Body */}
          <pre className="text-slate-300 leading-relaxed overflow-x-auto p-2 bg-slate-950/80 rounded-xl border border-slate-900">
{`{
  "name": "${personalInfo.name}",
  "role": "${personalInfo.title}",
  "institution": "${education.institution}",
  "degree": "${education.degree}",
  "cgpa": ${education.cgpa},
  "location": "${personalInfo.location}",
  "interests": [
    "Generative AI & LLMs",
    "Full-Stack Web Systems",
    "Machine Learning Pipelines"
  ],
  "contact": {
    "email": "${personalInfo.emails.primary}",
    "github": "Amal043"
  }
}`}
          </pre>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> System Ready
            </span>
            <span className="text-cyan-400 font-sans font-bold">NIT JSR '28</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
