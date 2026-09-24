import React, { useState } from 'react';
import { achievementsData, Achievement } from '../data/achievements';
import { Trophy, Calendar, Sparkles, X, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="achievements" className="py-20 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Competitions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hackathons & <span className="text-gradient-blue-purple">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Awards, hackathon victories, and official competitive recognitions.
          </p>
        </div>

        {/* Main Featured Achievement Banner (2nd Prize RKGIT GUVI Hackathon) */}
        {achievementsData.filter(a => a.featured).map((feat) => (
          <div
            key={feat.id}
            className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-[#131929] via-[#1a233a] to-[#131929] border border-amber-500/30 shadow-2xl relative overflow-hidden group hover:border-amber-500/60 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs shadow-glow-sm">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{feat.badge}</span>
                </div>

                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white group-hover:text-amber-300 transition-colors">
                  {feat.title}
                </h3>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-blue-400">{feat.organizer}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    {feat.date}
                  </span>
                </div>

                <p className="text-slate-200 text-base leading-relaxed">
                  {feat.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setSelectedAchievement(feat);
                      triggerConfetti();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs hover:from-amber-400 hover:to-amber-500 transition-all shadow-glow-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Official Trophy & Goodies</span>
                  </button>
                </div>
              </div>

              {/* Right Dual Media Preview (5 cols) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div 
                  onClick={() => {
                    setSelectedAchievement(feat);
                    triggerConfetti();
                  }}
                  className="rounded-2xl overflow-hidden border border-amber-500/30 aspect-[4/3] bg-slate-900 cursor-pointer group/img hover:scale-105 transition-transform"
                >
                  <img
                    src={feat.image}
                    alt="Hackathon Winner Trophy Certificate"
                    className="w-full h-full object-cover"
                  />
                </div>
                {feat.secondaryImage && (
                  <div 
                    onClick={() => {
                      setSelectedAchievement(feat);
                      triggerConfetti();
                    }}
                    className="rounded-2xl overflow-hidden border border-amber-500/30 aspect-[4/3] bg-slate-900 cursor-pointer group/img hover:scale-105 transition-transform"
                  >
                    <img
                      src={feat.secondaryImage}
                      alt="GUVI Hackathon Goodies"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}

        {/* Secondary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.filter(a => !a.featured).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
              className="p-6 rounded-2xl bg-[#131929] border border-blue-500/15 hover:border-blue-500/40 hover:bg-[#182035] transition-all duration-300 cursor-pointer group flex flex-col sm:flex-row gap-5 items-center justify-between"
            >
              <div className="space-y-2 flex-1">
                <span className="px-2.5 py-0.5 rounded bg-blue-600/20 text-blue-300 text-[11px] font-bold">
                  {item.badge}
                </span>
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{item.organizer}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-slate-300 text-xs line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden border border-slate-800 shrink-0 bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Achievement Lightbox Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md modal-overlay">
          <div className="relative max-w-3xl w-full bg-[#131929] border border-amber-500/40 rounded-3xl p-6 modal-content text-white">
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading font-extrabold text-2xl mb-1 text-amber-300">
              {selectedAchievement.title}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {selectedAchievement.organizer} • {selectedAchievement.date}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[4/3]">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-contain bg-black"
                />
              </div>
              {selectedAchievement.secondaryImage && (
                <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[4/3]">
                  <img
                    src={selectedAchievement.secondaryImage}
                    alt="Secondary trophy asset"
                    className="w-full h-full object-contain bg-black"
                  />
                </div>
              )}
            </div>

            <p className="text-slate-300 text-sm">
              {selectedAchievement.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
