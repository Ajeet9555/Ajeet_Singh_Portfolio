import React, { useEffect } from 'react';
import { Certificate, certificatesData } from '../data/certificates';
import { X, ExternalLink, Award, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
  onSelectCertificate?: (cert: Certificate) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ 
  certificate, 
  onClose,
  onSelectCertificate 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && certificate && onSelectCertificate) {
        handleNext();
      }
      if (e.key === 'ArrowLeft' && certificate && onSelectCertificate) {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose, onSelectCertificate]);

  if (!certificate) return null;

  const currentIndex = certificatesData.findIndex(c => c.id === certificate.id);
  
  const handlePrev = () => {
    if (!onSelectCertificate) return;
    const prevIndex = (currentIndex - 1 + certificatesData.length) % certificatesData.length;
    onSelectCertificate(certificatesData[prevIndex]);
  };

  const handleNext = () => {
    if (!onSelectCertificate) return;
    const nextIndex = (currentIndex + 1) % certificatesData.length;
    onSelectCertificate(certificatesData[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md modal-overlay overflow-y-auto">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#131929] border border-blue-500/40 rounded-3xl p-6 sm:p-8 modal-content shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                {certificate.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentIndex + 1} / {certificatesData.length}
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-white mt-1">
              {certificate.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mt-2">
              <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <Award className="w-4 h-4" />
                {certificate.issuer}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {certificate.date}
              </span>
              {certificate.duration && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-purple-300 font-medium">
                    <Clock className="w-4 h-4" />
                    {certificate.duration}
                  </span>
                </>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 transition-colors shrink-0"
            aria-label="Close Certificate Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Resolution Image Container with Next/Prev Nav */}
        <div className="relative my-6 flex-1 bg-black/80 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center p-2 min-h-[350px] max-h-[60vh] group">
          
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white hover:bg-blue-600 transition-colors shadow-lg z-10 opacity-80 group-hover:opacity-100"
            title="Previous Certificate"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Certificate Image */}
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white hover:bg-blue-600 transition-colors shadow-lg z-10 opacity-80 group-hover:opacity-100"
            title="Next Certificate"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-glow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Full Resolution Certificate</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 font-semibold text-xs transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 font-semibold text-xs transition-colors flex items-center gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 font-semibold text-xs sm:text-sm transition-colors ml-2"
            >
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
