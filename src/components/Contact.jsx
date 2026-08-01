import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emails.primary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10 font-sans">
      
      {/* Section Header */}
      <div data-aos="fade-up" className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
          03 // Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Details & Connect</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto mt-3">
          Let's discuss full-stack engineering, AI project collaborations, or career opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Info (5 cols) */}
        <div data-aos="fade-right" className="lg:col-span-5 flex flex-col justify-between glass-card rounded-3xl p-8 border-slate-800">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Direct Channels</h3>
            
            {/* Email Box with Copy Button */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Primary Email</span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm md:text-base font-semibold text-cyan-300 font-mono truncate">{personalInfo.emails.primary}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 text-xs font-bold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all shrink-0"
                >
                  {copied ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Location & Academic Campus</span>
              <p className="text-sm font-semibold text-slate-200"> Prayagraj, UP, India / NIT Jamshedpur</p>
            </div>
          </div>

          {/* Social Links Buttons */}
          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 transition-all group"
            >
              <span className="text-sm font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                GitHub Profile (@Amal043)
              </span>
              <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 text-slate-200 hover:text-blue-300 transition-all group"
            >
              <span className="text-sm font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LinkedIn Profile
              </span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form (7 cols) */}
        <div data-aos="fade-left" className="lg:col-span-7 glass-card rounded-3xl p-8 border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

          {submitted ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center">
              <span className="text-3xl mb-2 block">🎉</span>
              <h4 className="text-lg font-bold text-emerald-400">Message Sent!</h4>
              <p className="text-xs text-slate-300 mt-1">Thank you for reaching out to Amal. He will respond to your email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Amal, I'd like to discuss an opportunity..."
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
