import React, { useState } from 'react';
import { certificatesData, certificateCategories, Certificate } from '../data/certificates';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';
import { Award } from 'lucide-react';

export const Certificates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const filteredCertificates = activeCategory === "All"
    ? certificatesData
    : certificatesData.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="py-20 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs font-semibold mb-3 shadow-warm-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Professional <span className="text-[#C76B32]">Certificates</span>
          </h2>
          <p className="mt-3 text-[#5F5A54] text-base sm:text-lg">
            Verified professional certifications, job simulations, and course completions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {certificateCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#C76B32] text-white shadow-orange-sm scale-105'
                    : 'bg-white border border-[#E7E1D8] text-[#5F5A54] hover:border-[#C76B32] hover:text-[#C76B32] hover:bg-[#F8E9DD]/60 shadow-warm-sm'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onOpenModal={(cert) => setSelectedCertificate(cert)}
            />
          ))}
        </div>

      </div>

      {/* Full-screen Lightbox Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        onSelectCertificate={(cert) => setSelectedCertificate(cert)}
      />
    </section>
  );
};

