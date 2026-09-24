import React from 'react';
import { Certificate } from '../data/certificates';
import { Award, Calendar, Eye, Clock } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
  onOpenModal: (cert: Certificate) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onOpenModal }) => {
  return (
    <div
      onClick={() => onOpenModal(certificate)}
      className="group rounded-2xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] transition-all duration-300 overflow-hidden shadow-warm-sm hover:shadow-warm-md flex flex-col justify-between cursor-pointer hover:-translate-y-1"
    >
      
      {/* Thumbnail Container */}
      <div className="relative aspect-[4/3] bg-[#FAF8F3] overflow-hidden border-b border-[#E7E1D8]">
        <img
          src={certificate.image}
          alt={certificate.title}
          loading="lazy"
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#FAF8F3]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="px-4 py-2 rounded-xl bg-[#C76B32] text-white font-semibold text-xs shadow-orange-sm flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            View Certificate
          </span>
        </div>

        {/* Category Tag */}
        <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-[#E7E1D8] text-[#C76B32] text-[10px] font-bold shadow-warm-sm">
          {certificate.category}
        </span>
      </div>

      {/* Info Container */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="font-heading font-bold text-sm sm:text-base text-[#111111] group-hover:text-[#C76B32] transition-colors line-clamp-2">
            {certificate.title}
          </h3>
          <p className="text-xs text-[#C76B32] font-semibold mt-1 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            {certificate.issuer}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#E7E1D8] text-[11px] text-[#5F5A54]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#5F5A54]" />
            {certificate.date}
          </span>
          {certificate.duration && (
            <span className="flex items-center gap-1 text-[#C76B32] font-medium">
              <Clock className="w-3 h-3" />
              {certificate.duration}
            </span>
          )}
        </div>
      </div>

    </div>
  );
};

