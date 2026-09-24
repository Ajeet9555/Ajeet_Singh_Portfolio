import React from 'react';
import { GraduationCap, Briefcase, MapPin, Phone, Mail, ExternalLink, User } from 'lucide-react';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  const cards = [
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5 text-[#C76B32]" />,
      content: (
        <div>
          <span className="font-semibold text-[#111111] block text-sm">
            {personalData.education.degree}
          </span>
          <span className="text-xs text-[#C76B32] block font-semibold mt-0.5">
            {personalData.education.specialization}
          </span>
          <span className="text-xs text-[#5F5A54] block mt-1">
            {personalData.education.institution} ({personalData.education.duration})
          </span>
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-[#F8E9DD] text-[#C76B32] text-[11px] font-extrabold border border-[#E7D2C3]">
            CGPA: {personalData.education.cgpa}
          </span>
        </div>
      )
    },
    {
      title: "Experience",
      icon: <Briefcase className="w-5 h-5 text-[#C76B32]" />,
      content: (
        <div>
          <span className="font-semibold text-[#111111] block text-sm">
            ML Intern
          </span>
          <span className="text-xs text-[#C76B32] block font-semibold mt-0.5">
            LogicBot Pvt Ltd
          </span>
          <span className="text-xs text-[#5F5A54] block mt-1">
            Dec 2025 - May 2026
          </span>
        </div>
      )
    },
    {
      title: "Location",
      icon: <MapPin className="w-5 h-5 text-[#C76B32]" />,
      content: (
        <div>
          <span className="font-semibold text-[#111111] block text-sm">
            Noida, India
          </span>
          <span className="text-xs text-[#5F5A54] block mt-1">
            Open to Relocation & Remote Roles
          </span>
        </div>
      )
    },
    {
      title: "Phone",
      icon: <Phone className="w-5 h-5 text-[#C76B32]" />,
      content: (
        <div>
          <a 
            href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
            className="font-semibold text-[#111111] hover:text-[#C76B32] transition-colors block text-sm"
          >
            {personalData.phone}
          </a>
          <span className="text-xs text-[#5F5A54] block mt-1">
            Direct & WhatsApp Available
          </span>
        </div>
      )
    },
    {
      title: "Email",
      icon: <Mail className="w-5 h-5 text-[#C76B32]" />,
      content: (
        <div>
          <a 
            href={`mailto:${personalData.email}`}
            className="font-semibold text-[#111111] hover:text-[#C76B32] transition-colors block text-sm break-all"
          >
            {personalData.email}
          </a>
          <span className="text-xs text-[#5F5A54] block mt-1">
            Professional Correspondence
          </span>
        </div>
      )
    },
    {
      title: "Links",
      icon: <ExternalLink className="w-5 h-5 text-[#C76B32]" />,
      content: (
        <div className="flex items-center gap-2.5 mt-2">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F8E9DD] text-[#C76B32] border border-[#E7D2C3] hover:bg-[#C76B32] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F8E9DD] text-[#C76B32] border border-[#E7D2C3] hover:bg-[#C76B32] hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs font-semibold mb-3 shadow-warm-sm">
            <User className="w-3.5 h-3.5" />
            <span>Biography & Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            About <span className="text-[#C76B32]">Me</span>
          </h2>
          <p className="mt-3 text-[#5F5A54] text-base sm:text-lg">
            Get to know more about my journey, skills and what drives me.
          </p>
        </div>

        {/* Bio Banner Card */}
        <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] shadow-warm-md mb-10 relative overflow-hidden">
          <p className="text-[#111111] text-lg leading-relaxed font-medium">
            "{personalData.aboutBio}"
          </p>
        </div>

        {/* 6 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] hover:bg-[#F8E9DD]/20 transition-all duration-300 group shadow-warm-sm"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E7E1D8]">
                <div className="p-2.5 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-[#111111]">
                  {card.title}
                </h3>
              </div>
              {card.content}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
