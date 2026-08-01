import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, projects, technicalSkills } from '../data/portfolioData';

const AiSandbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hi! I'm Amal's AI Assistant 🤖. Ask me anything about Amal Srivastava's projects (like AETHER AI or FinAgent), tech stack, education at NIT Jamshedpur, or how to contact him!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg = { sender: 'user', text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Intelligent query matching for Amal's profile
    setTimeout(() => {
      let botResponse = "";
      const lower = userText.toLowerCase();

      if (lower.includes('aether') || lower.includes('commerce') || lower.includes('ml model') || lower.includes('logistics')) {
        botResponse = `⚡ **AETHER AI** is Amal's flagship enterprise decision platform. It processes high-throughput e-commerce transactional data with 10 production ML models (Demand Spike, Churn Risk, Revenue Trajectory, Carrier Delays, Stock Depletion, Return Probability, LTV, etc.), featuring an Anomaly Engine and multi-horizon forecasting (7 to 365 days). Built with FastAPI & Next.js 15!`;
      } else if (lower.includes('finagent') || lower.includes('iit') || lower.includes('kharagpur') || lower.includes('money') || lower.includes('winner')) {
        botResponse = `🏆 **FinAgent** won 1st Place at the IIT Kharagpur Platinum Jubilee Innovation Challenge! It's an AI-powered student money co-pilot automating budgeting and expense tracking using React, Node.js, MongoDB, and GCP Vertex AI.`;
      } else if (lower.includes('quickstyle') || lower.includes('agent') || lower.includes('langgraph') || lower.includes('fashion')) {
        botResponse = `🤖 **QuickStyle** is a 30-minute quick-commerce fashion platform powered by a multi-agent AI system (LangGraph & Vertex AI Gemini). Stylist and Anti-Return agents negotiate in real-time with voice-to-commerce flow and Google Maps live tracking!`;
      } else if (lower.includes('sonoria') || lower.includes('music') || lower.includes('streaming')) {
        botResponse = `🎵 **Sonoria** is a premium Spotify-style music streaming web app featuring a live canvas wave visualizer and seamless one-click switching between audio streaming and HD video playback!`;
      } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack') || lower.includes('python') || lower.includes('react')) {
        botResponse = `💻 **Amal's Core Tech Stack**:\n• **Languages**: Python, C/C++, JavaScript, TypeScript, HTML5/CSS3\n• **Frontend**: React 19, Next.js 15, Tailwind CSS, Framer Motion, GSAP\n• **Backend & AI**: FastAPI, Node.js/Express, Scikit-Learn, PyTorch, LangChain, LangGraph, Google Vertex AI / Gemini SDK\n• **Cloud & DevOps**: Docker, MongoDB, PostgreSQL, Git/GitHub`;
      } else if (lower.includes('edu') || lower.includes('nit') || lower.includes('jamshedpur') || lower.includes('cgpa') || lower.includes('college')) {
        botResponse = `🎓 **Education & Achievements**:\n• B.Tech in Mechanical Engineering at **NIT Jamshedpur** (CGPA: 8.78)\n• 1st Place Winner at IIT Kharagpur Innovation Challenge\n• High School Excellence: 12th CBSE 95.8%, 10th CBSE 94.8%`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach')) {
        botResponse = `📬 You can reach out directly to Amal at **${personalInfo.emails.primary}** or connect on GitHub (**github.com/Amal043**) and LinkedIn (**linkedin.com/in/amal-srivastava-061798329/**)!`;
      } else {
        botResponse = `Thanks for asking! Amal Srivastava is a B.Tech student at NIT Jamshedpur (CGPA 8.78) and an expert Full-Stack & AI Engineer. He won 1st Place at the IIT Kharagpur Platinum Jubilee Innovation Challenge with FinAgent, built AETHER AI (10 ML production models platform), QuickStyle (LangGraph Multi-Agent system), and Sonoria. Contact him at amalsrivastava1200@gmail.com!`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-[#ff2a2a] to-orange-500 text-white font-bold shadow-[0_0_25px_rgba(255,42,42,0.5)] hover:scale-105 transition-all duration-300 group cursor-pointer"
        aria-label="Open AI Assistant"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="text-sm">Ask Amal's AI 🤖</span>
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[400px] h-[520px] max-h-[80vh] rounded-3xl bg-[#0f0f0f]/95 border border-white/20 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-fade-in font-sans">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-red-600 to-red-900 border-b border-white/10 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-lg border border-white/20">
                🤖
              </div>
              <div>
                <h4 className="font-extrabold text-sm tracking-tight">Amal's AI Assistant</h4>
                <p className="text-[11px] text-white/80 font-medium">Ask about projects, ML & skills</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-xs md:text-sm bg-black/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-3.5 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-[#ff2a2a] text-white self-end rounded-br-none shadow-md font-medium'
                    : 'bg-white/10 text-white/90 self-start rounded-bl-none border border-white/10 leading-relaxed font-normal'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className="mb-1 last:mb-0">
                    {line}
                  </p>
                ))}
              </div>
            ))}
            {isTyping && (
              <div className="self-start bg-white/10 text-white/60 px-4 py-2 rounded-2xl rounded-bl-none border border-white/10 text-xs animate-pulse">
                Amal's AI is thinking...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-black/60 border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
            {['AETHER AI?', 'IIT Winner?', 'QuickStyle?', 'Tech Stack?'].map((chip) => (
              <button
                key={chip}
                onClick={() => {
                  setInput(chip);
                }}
                className="px-2.5 py-1 text-[11px] rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-300 text-white/70 border border-white/10 whitespace-nowrap transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[#0a0a0a] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Amal's work..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-xs md:text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-white/40"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AiSandbox;
