import React, { useState } from 'react';
import { skillsData, skillCategories } from '../data/skills';
import { Cpu, Terminal, Database, Shield, Wrench, BookOpen, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'Machine Learning': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'AI / DL': return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'Data': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'CS Fundamentals': return <BookOpen className="w-4 h-4 text-rose-400" />;
      default: return <Shield className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0d121f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-blue-purple">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow-sm scale-105'
                    : 'bg-[#131929] border border-blue-500/15 text-slate-300 hover:border-blue-500/40 hover:text-white hover:bg-[#182035]'
                }`}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-2xl bg-[#131929] border border-blue-500/15 hover:border-blue-500/40 hover:bg-[#182035] transition-all duration-300 group hover:-translate-y-1 shadow-md flex flex-col items-center text-center justify-center relative overflow-hidden"
            >
              <div className="p-3 rounded-xl bg-[#0a0d14] border border-slate-800 group-hover:border-blue-500/30 group-hover:scale-110 transition-all mb-2.5">
                {getCategoryIcon(skill.category)}
              </div>
              <span className="font-heading font-bold text-sm text-slate-200 group-hover:text-white transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                {skill.category}
              </span>
              {skill.badge && (
                <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-blue-600/30 text-blue-300 border border-blue-500/40">
                  {skill.badge}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
