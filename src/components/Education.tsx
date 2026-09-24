import React from 'react';
import { personalData } from '../data/personal';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const edu = personalData.education;

  return (
    <section id="education" className="py-20 bg-[#F7F3EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs font-semibold mb-3 shadow-warm-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Education & <span className="text-[#C76B32]">Qualifications</span>
          </h2>
          <p className="mt-3 text-[#5F5A54] text-base sm:text-lg">
            My formal engineering foundation in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] shadow-warm-md hover:shadow-warm-lg transition-all duration-300 relative overflow-hidden group">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E7E1D8]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#F8E9DD] border border-[#E7D2C3] flex items-center justify-center text-[#C76B32] p-3 shadow-warm-sm shrink-0">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C76B32] uppercase tracking-widest block mb-1">
                    {edu.institution}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#111111] group-hover:text-[#C76B32] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-[#5F5A54] text-base font-medium mt-0.5">
                    {edu.specialization}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FAF8F3] border border-[#E7E1D8] text-xs sm:text-sm font-semibold text-[#111111]">
                  <Calendar className="w-4 h-4 text-[#C76B32]" />
                  {edu.duration}
                </span>
                <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] text-xs sm:text-sm font-extrabold text-[#C76B32]">
                  <Award className="w-4 h-4 text-[#C76B32]" />
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>

            {/* Coursework Focus */}
            <div className="pt-6">
              <h4 className="font-heading font-bold text-sm text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C76B32]" />
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
                    className="px-3 py-1.5 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] text-[#5F5A54] text-xs font-medium hover:border-[#E5A06A] transition-colors"
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

