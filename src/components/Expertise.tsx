import React from 'react';
import { expertiseStrip } from '../data/skills';
import { Cpu, Shield, Sparkles, Brain, Code, Database, Terminal, Layers } from 'lucide-react';

export const Expertise: React.FC = () => {
  const getIcon = (item: string) => {
    switch (item) {
      case 'Python': return <Terminal className="w-4 h-4 text-[#C76B32]" />;
      case 'Machine Learning': return <Cpu className="w-4 h-4 text-[#C76B32]" />;
      case 'Deep Learning': return <Brain className="w-4 h-4 text-[#C76B32]" />;
      case 'NLP': return <Code className="w-4 h-4 text-[#C76B32]" />;
      case 'Data Analysis': return <Database className="w-4 h-4 text-[#C76B32]" />;
      case 'Cybersecurity': return <Shield className="w-4 h-4 text-[#C76B32]" />;
      case 'Generative AI': return <Sparkles className="w-4 h-4 text-[#C76B32]" />;
      case 'RAG': return <Layers className="w-4 h-4 text-[#C76B32]" />;
      default: return <Cpu className="w-4 h-4 text-[#C76B32]" />;
    }
  };

  return (
    <section className="py-6 bg-[#FAF8F3] border-y border-[#E7E1D8] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C76B32] animate-ping" />
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#111111]">
              Core Expertise
            </h3>
          </div>

          {/* Marquee Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {expertiseStrip.map((item) => (
              <div
                key={item}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E7E1D8] text-[#111111] text-xs font-bold flex items-center gap-2 hover:border-[#E5A06A] hover:bg-[#F8E9DD]/60 hover:text-[#C76B32] transition-all shadow-warm-sm"
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
