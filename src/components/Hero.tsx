import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Download, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-glow">
      
      {/* Soft Warm Ambient Glow Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F8E9DD] via-[#FDF3EC] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#E5A06A]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E7E1D830_1px,transparent_1px),linear-gradient(to_bottom,#E7E1D830_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Category Positioning Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs sm:text-sm font-semibold shadow-warm-sm">
              <Sparkles className="w-4 h-4 text-[#C76B32] animate-pulse" />
              <span>{personalData.positioning}</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Ajeet <span className="text-[#C76B32]">Singh</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mt-2">
                {personalData.heroHeadline}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-[#5F5A54] text-base sm:text-lg leading-relaxed max-w-2xl">
              "{personalData.bio}"
            </p>

            {/* Contact Quick Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5F5A54]">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E7E1D8] shadow-warm-sm font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C76B32]" />
                {personalData.location}
              </span>
              <a 
                href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E7E1D8] shadow-warm-sm hover:border-[#E5A06A] hover:text-[#C76B32] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C76B32]" />
                {personalData.phone}
              </a>
              <a 
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E7E1D8] shadow-warm-sm hover:border-[#E5A06A] hover:text-[#C76B32] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#C76B32]" />
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
                className="p-3 rounded-2xl bg-white border border-[#E7E1D8] text-[#111111] hover:text-[#C76B32] hover:border-[#C76B32] hover:bg-[#F8E9DD]/50 transition-all shadow-warm-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-2xl bg-white border border-[#E7E1D8] text-[#111111] hover:text-[#C76B32] hover:border-[#C76B32] hover:bg-[#F8E9DD]/50 transition-all shadow-warm-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Send Email"
                className="p-3 rounded-2xl bg-white border border-[#E7E1D8] text-[#111111] hover:text-[#C76B32] hover:border-[#C76B32] hover:bg-[#F8E9DD]/50 transition-all shadow-warm-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                aria-label="Call Phone"
                className="p-3 rounded-2xl bg-white border border-[#E7E1D8] text-[#111111] hover:text-[#C76B32] hover:border-[#C76B32] hover:bg-[#F8E9DD]/50 transition-all shadow-warm-sm"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-[#C76B32] hover:bg-[#A95322] shadow-orange-sm hover:shadow-orange-md transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-[#111111] bg-white border border-[#C76B32] hover:bg-[#F8E9DD] transition-all duration-200 hover:-translate-y-0.5 text-sm shadow-warm-sm"
              >
                <Download className="w-4 h-4 text-[#C76B32]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Availability Tags */}
            <div className="pt-4 border-t border-[#E7E1D8]">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#5F5A54]">
                <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px] mr-1">
                  Open to opportunities:
                </span>
                {personalData.openTo.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg bg-[#F8E9DD] border border-[#E7D2C3] text-[#5F5A54] hover:text-[#C76B32] hover:border-[#C76B32] transition-colors font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Column — Professional Portrait Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Container */}
            <div className="relative w-full max-w-[310px] sm:max-w-[330px]">
              
              {/* Radial Warm Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C76B32] via-[#E5A06A] to-[#F8E9DD] rounded-[2.2rem] blur-xl opacity-35 animate-pulse-slow" />
              
              {/* Outer Glass Card */}
              <div className="relative bg-white/95 border border-[#E7E1D8] rounded-[2rem] p-3 overflow-hidden shadow-warm-lg backdrop-blur-xl">
                
                {/* Photo Container */}
                <div className="relative rounded-[1.5rem] overflow-hidden bg-[#F7F3EC] aspect-[9/15] border border-[#E7D2C3] flex items-center justify-center">
                  
                  {/* Exact Raw Uploaded Image 1 */}
                  <img
                    src="/assets/profile/ajeet_original.jpg"
                    alt="Ajeet Singh - AI/ML Engineer Portrait"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                  />

                  {/* Gentle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-transparent to-transparent opacity-80" />

                  {/* Signature Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7E1D8] flex items-center justify-between shadow-warm-md">
                    <div>
                      <span className="font-heading font-extrabold text-[#111111] text-sm block">
                        Ajeet Singh
                      </span>
                      <span className="text-[11px] text-[#C76B32] font-bold">
                        AI/ML Engineer
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#C76B32] to-[#E5A06A] flex items-center justify-center text-white font-black text-[10px] shadow-orange-sm">
                      AI
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Feature Callout */}
              <a
                href="#projects"
                className="mt-3 flex items-center justify-between p-3 rounded-xl bg-white border border-[#E7E1D8] hover:border-[#C76B32] hover:bg-[#F8E9DD]/40 transition-all group cursor-pointer shadow-warm-sm"
              >
                <div>
                  <span className="text-[11px] text-[#5F5A54] font-medium block">
                    Portfolio Projects
                  </span>
                  <span className="font-heading font-bold text-[#111111] text-xs group-hover:text-[#C76B32] transition-colors">
                    Turning Ideas Into Intelligent Solutions →
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#C76B32] flex items-center justify-center text-white group-hover:translate-x-1 transition-transform shrink-0">
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
