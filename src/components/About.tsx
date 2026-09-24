import React from 'react';
import { GraduationCap, Briefcase, MapPin, Phone, Mail, ExternalLink, User } from 'lucide-react';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  const cards = [
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      content: (
        <div>
          <span className="font-semibold text-white block text-sm">
            {personalData.education.degree}
          </span>
          <span className="text-xs text-blue-400 block font-medium">
            {personalData.education.specialization}
          </span>
          <span className="text-xs text-slate-400 block mt-1">
            {personalData.education.institution} ({personalData.education.duration})
          </span>
          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-blue-600/20 text-blue-300 text-[11px] font-bold">
            CGPA: {personalData.education.cgpa}
          </span>
        </div>
      )
    },
    {
      title: "Experience",
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      content: (
        <div>
          <span className="font-semibold text-white block text-sm">
            ML Intern
          </span>
          <span className="text-xs text-purple-400 block font-medium">
            LogicBot Pvt Ltd
          </span>
          <span className="text-xs text-slate-400 block mt-1">
            Dec 2025 - May 2026
          </span>
        </div>
      )
    },
    {
      title: "Location",
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      content: (
        <div>
          <span className="font-semibold text-white block text-sm">
            Noida, India
          </span>
          <span className="text-xs text-slate-400 block mt-1">
            Open to Relocation & Remote Roles
          </span>
        </div>
      )
    },
    {
      title: "Phone",
      icon: <Phone className="w-5 h-5 text-amber-400" />,
      content: (
        <div>
          <a 
            href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
            className="font-semibold text-white hover:text-blue-400 transition-colors block text-sm"
          >
            {personalData.phone}
          </a>
          <span className="text-xs text-slate-400 block mt-1">
            Direct & WhatsApp Available
          </span>
        </div>
      )
    },
    {
      title: "Email",
      icon: <Mail className="w-5 h-5 text-rose-400" />,
      content: (
        <div>
          <a 
            href={`mailto:${personalData.email}`}
            className="font-semibold text-white hover:text-blue-400 transition-colors block text-sm break-all"
          >
            {personalData.email}
          </a>
          <span className="text-xs text-slate-400 block mt-1">
            Professional Correspondence
          </span>
        </div>
      )
    },
    {
      title: "Links",
      icon: <ExternalLink className="w-5 h-5 text-cyan-400" />,
      content: (
        <div className="flex items-center gap-3 mt-1">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Biography & Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-blue-purple">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Get to know more about my journey, skills and what drives me.
          </p>
        </div>

        {/* Bio Banner Card */}
        <div className="p-8 rounded-3xl bg-[#131929] border border-blue-500/20 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-slate-200 text-lg leading-relaxed relative z-10 font-medium">
            "{personalData.aboutBio}"
          </p>
        </div>

        {/* 6 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-[#131929] border border-blue-500/15 hover:border-blue-500/40 hover:bg-[#182035] transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-[#0a0d14] border border-slate-800 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-white">
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
