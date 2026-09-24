import React from 'react';
import { personalData } from '../data/personal';
import { Code, Briefcase, Award, Trophy } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const icons = [
    <Code className="w-6 h-6 text-[#C76B32]" />,
    <Briefcase className="w-6 h-6 text-[#C76B32]" />,
    <Award className="w-6 h-6 text-[#C76B32]" />,
    <Trophy className="w-6 h-6 text-[#C76B32]" />,
  ];

  return (
    <section className="py-8 bg-[#F7F3EC] border-y border-[#E7E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {personalData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] hover:bg-[#F8E9DD]/40 transition-all duration-200 flex items-center gap-4 group shadow-warm-sm"
            >
              <div className="p-3 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] group-hover:scale-110 transition-transform">
                {icons[idx % icons.length]}
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111111] group-hover:text-[#C76B32] transition-colors">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-[#5F5A54] font-medium">
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
