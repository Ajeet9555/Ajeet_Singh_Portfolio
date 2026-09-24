import React from 'react';
import { personalData } from '../data/personal';
import { Code, Briefcase, Award, Trophy } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const icons = [
    <Code className="w-6 h-6 text-blue-400" />,
    <Briefcase className="w-6 h-6 text-purple-400" />,
    <Award className="w-6 h-6 text-cyan-400" />,
    <Trophy className="w-6 h-6 text-amber-400" />,
  ];

  return (
    <section className="py-8 bg-[#0d121f] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {personalData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-[#131929]/80 border border-blue-500/15 backdrop-blur-md hover:border-blue-500/40 hover:bg-[#182035] transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/20 group-hover:scale-110 transition-transform">
                {icons[idx % icons.length]}
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
