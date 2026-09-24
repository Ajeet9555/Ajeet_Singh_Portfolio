import React from 'react';
import { expertiseStrip } from '../data/skills';
import { Cpu, Shield, Sparkles, Brain, Code, Database, Terminal, Layers } from 'lucide-react';

export const Expertise: React.FC = () => {
  const getIcon = (item: string) => {
    switch (item) {
      case 'Python': return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'Machine Learning': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'Deep Learning': return <Brain className="w-4 h-4 text-cyan-400" />;
      case 'NLP': return <Code className="w-4 h-4 text-emerald-400" />;
      case 'Data Analysis': return <Database className="w-4 h-4 text-amber-400" />;
      case 'Cybersecurity': return <Shield className="w-4 h-4 text-rose-400" />;
      case 'Generative AI': return <Sparkles className="w-4 h-4 text-indigo-400" />;
      case 'RAG': return <Layers className="w-4 h-4 text-blue-400" />;
      default: return <Cpu className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section className="py-6 bg-[#0a0d14] border-y border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-widest text-slate-300">
              Core Expertise
            </h3>
          </div>

          {/* Marquee Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {expertiseStrip.map((item) => (
              <div
                key={item}
                className="px-3.5 py-1.5 rounded-xl bg-[#131929] border border-blue-500/20 text-slate-200 text-xs font-bold flex items-center gap-2 hover:border-blue-500/50 hover:bg-[#182035] transition-all"
              >
                {getIcon(item)}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
