import React from 'react';
import { personalData } from '../data/personal';
import { Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171512] border-t border-[#302B26] py-12 text-[#D8D2CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#302B26]">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C76B32] to-[#E5A06A] flex items-center justify-center font-bold text-white shadow-orange-sm">
              {personalData.logoText}
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg text-white block">
                {personalData.name}
              </span>
              <span className="text-xs text-[#A9A29A] font-medium">
                AI/ML Engineer • Building Intelligent Solutions
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#D8D2CA] font-medium">
            <a href="#home" className="hover:text-[#E5A06A] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#E5A06A] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#E5A06A] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#E5A06A] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#E5A06A] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#E5A06A] transition-colors">Education</a>
            <a href="#achievements" className="hover:text-[#E5A06A] transition-colors">Achievements</a>
            <a href="#certificates" className="hover:text-[#E5A06A] transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-[#E5A06A] transition-colors">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1E1B18] border border-[#302B26] text-[#A9A29A] hover:text-[#E5A06A] hover:border-[#E5A06A] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1E1B18] border border-[#302B26] text-[#A9A29A] hover:text-white hover:border-[#E5A06A] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl bg-[#1E1B18] border border-[#302B26] text-[#A9A29A] hover:text-[#E5A06A] hover:border-[#E5A06A] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-[#A9A29A] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 {personalData.name}. All rights reserved.</span>
          <span className="text-[#A9A29A]">
            Designed & Engineered for AI/ML Excellence
          </span>
        </div>
      </div>
    </footer>
  );
};

