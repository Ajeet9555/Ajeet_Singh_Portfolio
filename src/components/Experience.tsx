import React from 'react';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Database, Shield, FileCheck, Layers } from 'lucide-react';

export const Experience: React.FC = () => {
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-extrabold text-[#111111] bg-[#F8E9DD] px-1 py-0.5 rounded border border-[#E7D2C3]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section id="experience" className="py-20 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs font-semibold mb-3 shadow-warm-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Professional <span className="text-[#C76B32]">Experience</span>
          </h2>
          <p className="mt-3 text-[#5F5A54] text-base sm:text-lg max-w-2xl mx-auto">
            Practical industry experience in Machine Learning model development and Digital Forensics investigation.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-10 relative">
          
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-[#E7E1D8]" />

          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] shadow-warm-md hover:shadow-warm-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              {/* Subtle Ambient Orange Glow Background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8E9DD]/40 rounded-full blur-3xl pointer-events-none" />

              {/* Number Badge & Category Pill Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-mono font-extrabold text-xs text-[#C76B32] uppercase tracking-widest bg-[#F8E9DD] px-3 py-1 rounded-md border border-[#E7D2C3]">
                  EXPERIENCE {exp.number} • {exp.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF8F3] border border-[#E7E1D8] text-[#5F5A54] text-xs font-semibold">
                  {exp.type}
                </span>
              </div>

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E1D8]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8E9DD] border border-[#E7D2C3] flex items-center justify-center text-[#C76B32] font-bold text-base shadow-warm-sm shrink-0">
                    {exp.category === 'AI/ML' ? <Briefcase className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-[#111111] group-hover:text-[#C76B32] transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-[#C76B32] font-bold text-base block">
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Duration & Location Badges */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-[#5F5A54]">
                  <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FAF8F3] border border-[#E7E1D8] font-semibold text-[#111111]">
                    <Calendar className="w-4 h-4 text-[#C76B32]" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8F3] border border-[#E7E1D8] font-medium text-[#5F5A54]">
                    <MapPin className="w-4 h-4 text-[#C76B32]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="py-6 space-y-3">
                <h4 className="font-heading font-bold text-xs text-[#111111] uppercase tracking-wider">
                  Key Contributions & Deliverables
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#5F5A54] text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#C76B32] shrink-0 mt-0.5" />
                      <span>{renderFormattedText(resp)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Measurable Impact / Metrics Cards */}
              {exp.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E7E1D8]">
                  {exp.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E7E1D8] flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] flex items-center justify-center text-[#C76B32] shrink-0">
                        {i === 0 ? <TrendingUp className="w-4 h-4" /> : i === 1 ? <Database className="w-4 h-4" /> : <FileCheck className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className="text-[11px] text-[#5F5A54] block font-semibold uppercase tracking-wider">{m.label}</span>
                        <span className="font-heading font-extrabold text-[#111111] text-xs sm:text-sm">{m.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Chips */}
              <div className="pt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#111111] mr-1 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#C76B32]" />
                  Skills & Tools:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-[#F8E9DD] border border-[#E7D2C3] text-[#C76B32] text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



