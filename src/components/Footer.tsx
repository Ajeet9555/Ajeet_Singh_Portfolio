import React from 'react';
import { personalData } from '../data/personal';
import { Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07090f] border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-glow-sm">
              {personalData.logoText}
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg text-white block">
                {personalData.name}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                AI/ML Engineer • Building Intelligent Solutions
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-blue-400 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#131929] border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#131929] border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl bg-[#131929] border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 {personalData.name}. All rights reserved.</span>
          <span className="text-slate-400">
            Designed & Engineered for AI/ML Excellence
          </span>
        </div>
      </div>
    </footer>
  );
};
