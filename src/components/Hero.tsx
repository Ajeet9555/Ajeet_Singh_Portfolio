import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Download, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-glow">
      
      {/* Ambient Blue/Purple AI Glow & Network Shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold shadow-glow-sm">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>{personalData.positioning}</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Ajeet <span className="text-gradient-blue-purple">Singh</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mt-2">
                {personalData.heroHeadline}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              "{personalData.bio}"
            </p>

            {/* Contact Quick Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#131929] border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {personalData.location}
              </span>
              <a 
                href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#131929] border border-slate-800 hover:border-blue-500/40 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {personalData.phone}
              </a>
              <a 
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#131929] border border-slate-800 hover:border-blue-500/40 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                {personalData.email}
              </a>
            </div>

            {/* Clickable Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-2xl bg-[#131929] border border-blue-500/25 text-slate-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-600/10 transition-all shadow-glow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-2xl bg-[#131929] border border-blue-500/25 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/10 transition-all shadow-glow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Send Email"
                className="p-3 rounded-2xl bg-[#131929] border border-blue-500/25 text-slate-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-600/10 transition-all shadow-glow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                aria-label="Call Phone"
                className="p-3 rounded-2xl bg-[#131929] border border-blue-500/25 text-slate-300 hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-600/10 transition-all shadow-glow-sm"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-200 bg-[#131929] border border-blue-500/30 hover:border-blue-500/60 hover:text-white hover:bg-blue-600/10 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Open To Opportunities */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mr-1">
                  Open to opportunities:
                </span>
                {personalData.openTo.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg bg-[#131929] border border-blue-500/20 text-blue-300 font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Column — Clean Portrait Photo (No Floating Overlays) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Minimized Container */}
            <div className="relative w-full max-w-[310px] sm:max-w-[330px]">
              
              {/* Radial AI Background Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-[2.2rem] blur-xl opacity-40 animate-pulse-slow" />
              
              {/* Outer Glass Card */}
              <div className="relative bg-[#131929]/90 border border-blue-500/35 rounded-[2rem] p-3 overflow-hidden shadow-2xl backdrop-blur-xl">
                
                {/* Photo Aspect Container — Clean & Unobstructed */}
                <div className="relative rounded-[1.5rem] overflow-hidden bg-[#0d121f] aspect-[9/15] border border-blue-500/20 flex items-center justify-center">
                  
                  {/* Exact Raw Uploaded Image 1 */}
                  <img
                    src="/assets/profile/ajeet_original.jpg"
                    alt="Ajeet Singh - AI/ML Engineer Portrait"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                  />

                  {/* Gentle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/90 via-transparent to-transparent opacity-75" />

                  {/* Signature Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#0a0d14]/85 backdrop-blur-md border border-blue-500/30 flex items-center justify-between">
                    <div>
                      <span className="font-heading font-extrabold text-white text-sm block">
                        Ajeet Singh
                      </span>
                      <span className="text-[11px] text-blue-400 font-bold">
                        AI/ML Engineer
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-[10px] shadow-glow-sm">
                      AI
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Feature Callout */}
              <a
                href="#projects"
                className="mt-3 flex items-center justify-between p-3 rounded-xl bg-[#131929] border border-blue-500/30 hover:border-blue-500 hover:bg-blue-600/10 transition-all group cursor-pointer shadow-glow-sm"
              >
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">
                    Portfolio Projects
                  </span>
                  <span className="font-heading font-bold text-white text-xs group-hover:text-blue-400 transition-colors">
                    Turning Ideas Into Intelligent Solutions →
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
