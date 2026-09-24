import React, { useEffect } from 'react';
import { Project } from '../data/projects';
import { X, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Cpu, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto modal-overlay bg-black/80 backdrop-blur-md">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#131929] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl modal-content">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600/80 transition-colors z-10"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12">
          <span className="px-3 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            {project.category} • Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            {project.name}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2">
            {cs.overview}
          </p>
        </div>

        {/* Image / Architecture Preview */}
        <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 aspect-[16/9] bg-slate-950">
          <img
            src={project.image}
            alt={`${project.name} Architecture Preview`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Case Study Grid Sections */}
        <div className="space-y-8 text-slate-200">
          
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-red-500/20">
              <h3 className="font-heading font-bold text-lg text-red-400 flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5" />
                Problem Statement
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {cs.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-emerald-500/20">
              <h3 className="font-heading font-bold text-lg text-emerald-400 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5" />
                Proposed Solution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {cs.solution}
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div className="p-6 rounded-2xl bg-[#0a0d14] border border-blue-500/20">
            <h3 className="font-heading font-bold text-lg text-blue-400 flex items-center gap-2 mb-3">
              <Layers className="w-5 h-5" />
              System Architecture
            </h3>
            <p className="text-slate-300 text-sm font-mono bg-[#131929] p-4 rounded-xl border border-slate-800">
              {cs.architecture}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.keyFeatures.map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0a0d14] border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {cs.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-3">
              Project Results & Impact
            </h3>
            <div className="space-y-2">
              {cs.results.map((res, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#0a0d14] border border-slate-800 text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-amber-500/20">
              <h3 className="font-heading font-bold text-lg text-amber-400 flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5" />
                Technical Challenges
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {cs.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-purple-500/20">
              <h3 className="font-heading font-bold text-lg text-purple-400 flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5" />
                Future Improvements
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {cs.futureImprovements.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-glow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 font-semibold text-sm transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
};
