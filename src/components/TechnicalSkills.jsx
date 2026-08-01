import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...technicalSkills.categories.map((cat) => cat.title)];

  const filteredCategories =
    activeCategory === 'All'
      ? technicalSkills.categories
      : technicalSkills.categories.filter((cat) => cat.title === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10 font-sans">
      
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
          02 // Expertise & Tools
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Skills Matrix</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-3">
          Languages, frameworks, databases, and AI tooling I use to craft production software.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-[0_0_15px_rgba(0,242,254,0.4)] scale-105'
                : 'glass-card text-slate-400 hover:text-white hover:border-slate-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Display Grid */}
      <div className="space-y-10">
        {filteredCategories.map((category, idx) => (
          <div data-aos="fade-up" key={category.title} className="glass-card rounded-3xl p-6 md:p-8 border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-slate-900/70 rounded-2xl p-4 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-200">{skill.name}</span>
                    <span className="text-xs font-mono font-bold text-cyan-400">{skill.level}%</span>
                  </div>
                  {/* Glowing Progress Bar */}
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_#00f2fe]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TechnicalSkills;
