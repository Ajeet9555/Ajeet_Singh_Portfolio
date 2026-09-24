import React from 'react';
import { personalData } from '../data/personal';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const edu = personalData.education;

  return (
    <section id="education" className="py-20 bg-[#0d121f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-blue-purple">Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            My formal engineering foundation in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-[#131929] border border-blue-500/20 hover:border-blue-500/40 shadow-xl transition-all duration-300 relative overflow-hidden group">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white p-3 shadow-glow-md">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
                    {edu.institution}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 text-base font-medium mt-0.5">
                    {edu.specialization}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0a0d14] border border-slate-800 text-xs sm:text-sm font-semibold text-slate-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  {edu.duration}
                </span>
                <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/40 text-xs sm:text-sm font-extrabold text-blue-200">
                  <Award className="w-4 h-4 text-amber-400" />
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>

            {/* Coursework Focus */}
            <div className="pt-6">
              <h4 className="font-heading font-bold text-sm text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                Core Engineering Curriculum Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning Algorithms",
                  "Deep Learning & Neural Networks",
                  "Natural Language Processing",
                  "Data Structures & Algorithms",
                  "Object Oriented Programming",
                  "Database Management Systems",
                  "Operating Systems",
                  "Python Programming & Data Science"
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-xl bg-[#0a0d14] border border-slate-800 text-slate-300 text-xs font-medium hover:border-blue-500/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
