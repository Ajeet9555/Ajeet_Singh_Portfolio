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
    <section id="achievements" className="py-20 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs font-semibold mb-3 shadow-warm-sm">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Competitions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Hackathons & <span className="text-[#C76B32]">Achievements</span>
          </h2>
          <p className="mt-3 text-[#5F5A54] text-base sm:text-lg">
            Awards, hackathon victories, and official competitive recognitions.
          </p>
        </div>

        {/* Main Featured Achievement Banner (2nd Prize RKGIT GUVI Hackathon) */}
        {achievementsData.filter(a => a.featured).map((feat) => (
          <div
            key={feat.id}
            className="mb-12 p-8 rounded-3xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] shadow-warm-lg relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8E9DD]/50 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8E9DD] text-[#C76B32] border border-[#E7D2C3] font-bold text-xs shadow-warm-sm">
                  <Sparkles className="w-4 h-4 text-[#C76B32]" />
                  <span>{feat.badge}</span>
                </div>

                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111111] group-hover:text-[#C76B32] transition-colors">
                  {feat.title}
                </h3>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-[#5F5A54]">
                  <span className="font-semibold text-[#C76B32]">{feat.organizer}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium text-[#5F5A54]">
                    <Calendar className="w-4 h-4 text-[#C76B32]" />
                    {feat.date}
                  </span>
                </div>

                <p className="text-[#5F5A54] text-base leading-relaxed">
                  {feat.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setSelectedAchievement(feat);
                      triggerConfetti();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C76B32] text-white font-bold text-xs hover:bg-[#A95322] transition-all shadow-orange-sm"
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
                  className="rounded-2xl overflow-hidden border border-[#E7E1D8] aspect-[4/3] bg-[#FAF8F3] cursor-pointer group/img hover:scale-105 transition-transform"
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
                    className="rounded-2xl overflow-hidden border border-[#E7E1D8] aspect-[4/3] bg-[#FAF8F3] cursor-pointer group/img hover:scale-105 transition-transform"
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
              className="p-6 rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 cursor-pointer group flex flex-col sm:flex-row gap-5 items-center justify-between"
            >
              <div className="space-y-2 flex-1">
                <span className="px-2.5 py-0.5 rounded bg-[#F8E9DD] border border-[#E7D2C3] text-[#C76B32] text-[11px] font-bold">
                  {item.badge}
                </span>
                <h4 className="font-heading font-bold text-lg text-[#111111] group-hover:text-[#C76B32] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-[#5F5A54]">
                  <span>{item.organizer}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-[#5F5A54] text-xs line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden border border-[#E7E1D8] shrink-0 bg-[#FAF8F3]">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md modal-overlay">
          <div className="relative max-w-3xl w-full bg-[#FAF8F3] border border-[#E7E1D8] rounded-3xl p-6 modal-content text-[#111111] shadow-2xl">
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F8E9DD] text-[#C76B32] hover:bg-[#C76B32] hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading font-extrabold text-2xl mb-1 text-[#111111]">
              {selectedAchievement.title}
            </h3>
            <p className="text-xs text-[#5F5A54] mb-4">
              {selectedAchievement.organizer} • {selectedAchievement.date}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl overflow-hidden border border-[#E7E1D8] aspect-[4/3] bg-white">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              {selectedAchievement.secondaryImage && (
                <div className="rounded-xl overflow-hidden border border-[#E7E1D8] aspect-[4/3] bg-white">
                  <img
                    src={selectedAchievement.secondaryImage}
                    alt="Secondary trophy asset"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )}
            </div>

            <p className="text-[#5F5A54] text-sm leading-relaxed">
              {selectedAchievement.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

