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
      case 'Programming': return <Terminal className="w-4 h-4 text-[#C76B32]" />;
      case 'Machine Learning': return <Cpu className="w-4 h-4 text-[#C76B32]" />;
      case 'AI / DL': return <Layers className="w-4 h-4 text-[#C76B32]" />;
      case 'Data': return <Database className="w-4 h-4 text-[#C76B32]" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-[#C76B32]" />;
      case 'CS Fundamentals': return <BookOpen className="w-4 h-4 text-[#C76B32]" />;
      default: return <Shield className="w-4 h-4 text-[#C76B32]" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#F7F3EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs font-semibold mb-3 shadow-warm-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Skills & <span className="text-[#C76B32]">Technologies</span>
          </h2>
          <p className="mt-3 text-[#5F5A54] text-base sm:text-lg">
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#C76B32] text-white shadow-orange-sm scale-105'
                    : 'bg-white border border-[#E7E1D8] text-[#5F5A54] hover:border-[#C76B32] hover:text-[#C76B32] hover:bg-[#F8E9DD]/60 shadow-warm-sm'
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
              className="p-4 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] hover:bg-[#F8E9DD]/50 transition-all duration-200 group hover:-translate-y-1 shadow-warm-sm flex flex-col items-center text-center justify-center relative overflow-hidden"
            >
              <div className="p-3 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] group-hover:scale-110 transition-all mb-2.5">
                {getCategoryIcon(skill.category)}
              </div>
              <span className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#C76B32] transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] text-[#817A72] mt-1 uppercase tracking-wider font-semibold">
                {skill.category}
              </span>
              {skill.badge && (
                <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#F8E9DD] text-[#C76B32] border border-[#E7D2C3]">
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
