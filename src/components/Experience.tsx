import React from 'react';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Database, Shield, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-blue-purple">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Practical industry experience in Machine Learning development and Digital Forensics investigations.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-10 relative">
          
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-slate-800" />

          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative p-8 rounded-3xl bg-[#131929] border border-blue-500/20 hover:border-blue-500/40 shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Number Badge & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono font-bold text-xs text-blue-400 uppercase tracking-widest bg-blue-600/10 px-3 py-1 rounded-md border border-blue-500/20">
                  EXPERIENCE {exp.number} • {exp.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                  {exp.type}
                </span>
              </div>

              {/* Role & Company Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-glow-sm shrink-0">
                    {exp.category === 'AI/ML' ? <Briefcase className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-blue-400 font-bold text-base block">
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0a0d14] border border-slate-800 font-semibold text-slate-300">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0a0d14] border border-slate-800 font-medium">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="py-6 space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-300 uppercase tracking-wider">
                  Key Responsibilities & Deliverables
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Impact Banner */}
              {exp.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                  {exp.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#0a0d14] border border-blue-500/15 flex items-center gap-3">
                      {i === 0 ? <TrendingUp className="w-5 h-5 text-emerald-400" /> : i === 1 ? <Database className="w-5 h-5 text-purple-400" /> : <Award className="w-5 h-5 text-amber-400" />}
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">{m.label}</span>
                        <span className="font-heading font-bold text-white text-sm sm:text-base">{m.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Chips */}
              <div className="pt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-2">Skills & Tools:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
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
