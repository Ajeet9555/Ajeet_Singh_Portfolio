import React, { useEffect } from 'react';
import { Project } from '../data/projects';
import { X, Github, ExternalLink, CheckCircle2, AlertTriangle, Cpu, Layers, ArrowLeft, ArrowRight, Image as ImageIcon, Workflow, Terminal, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto modal-overlay bg-black/60 backdrop-blur-md">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FAF8F3] border border-[#E7E1D8] rounded-3xl p-6 sm:p-10 shadow-2xl modal-content text-[#111111] space-y-10">
        
        {/* Top Breadcrumbs & Back Button */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E1D8]">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5F5A54]">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E7E1D8] text-[#111111] hover:text-[#C76B32] hover:border-[#E5A06A] hover:bg-[#F8E9DD] transition-colors shadow-warm-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>
            <span className="text-[#817A72]">/</span>
            <span className="text-[#5F5A54]">Case Study</span>
            <span className="text-[#817A72]">/</span>
            <span className="text-[#C76B32] font-mono font-bold">{project.number} — {project.name}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#F8E9DD] border border-[#E7D2C3] text-[#C76B32] hover:bg-[#C76B32] hover:text-white transition-colors shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Banner Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#F8E9DD] border border-[#E7D2C3] text-[#C76B32] text-xs font-bold font-mono">
              PROJECT {project.number}
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-[#E7E1D8] text-[#5F5A54] text-xs font-bold">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            {project.name}
          </h1>

          <p className="text-[#5F5A54] text-base sm:text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C76B32] text-white font-bold text-sm hover:bg-[#A95322] transition-all shadow-orange-sm"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#E7E1D8] text-[#111111] font-bold text-sm hover:bg-[#F8E9DD] hover:text-[#C76B32] transition-all shadow-warm-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Section 1: Main Project Preview Image */}
        <div className="rounded-2xl overflow-hidden border border-[#E7E1D8] aspect-[16/9] bg-white shadow-warm-md">
          <img
            src={cs.screenshots.banner}
            alt={`${project.name} Overview Banner`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section 2: Project Overview */}
        <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-3 shadow-warm-sm">
          <h2 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C76B32]" />
            1. Project Overview
          </h2>
          <p className="text-[#5F5A54] text-base leading-relaxed">
            {cs.overview}
          </p>
        </div>

        {/* Section 3: Problem Statement & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-3 shadow-warm-sm">
            <h3 className="font-heading font-bold text-lg text-[#111111] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#C76B32]" />
              2. Problem Statement
            </h3>
            <p className="text-[#5F5A54] text-sm sm:text-base leading-relaxed">
              {cs.problem}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-3 shadow-warm-sm">
            <h3 className="font-heading font-bold text-lg text-[#111111] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C76B32]" />
              3. Proposed Solution
            </h3>
            <p className="text-[#5F5A54] text-sm sm:text-base leading-relaxed">
              {cs.solution}
            </p>
          </div>
        </div>

        {/* Section 4: Focus Areas */}
        <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-4 shadow-warm-sm">
          <h3 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#C76B32]" />
            4. Core Capabilities & Focus Areas
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {cs.focusAreas.map((area, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E7E1D8] flex items-start gap-3 text-[#111111] text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-[#C76B32] shrink-0 mt-0.5" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Key Features */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#C76B32]" />
            5. Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.keyFeatures.map((feat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#E7E1D8] flex items-start gap-3 shadow-warm-sm">
                <div className="w-7 h-7 rounded-lg bg-[#F8E9DD] border border-[#E7D2C3] flex items-center justify-center text-[#C76B32] font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <span className="text-[#111111] text-sm sm:text-base font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Technology Stack */}
        <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-4 shadow-warm-sm">
          <h3 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#C76B32]" />
            6. Detailed Technology Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cs.techStackDetailed.map((group) => (
              <div key={group.category} className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E7E1D8] space-y-2">
                <span className="text-xs font-bold text-[#C76B32] uppercase tracking-wider block">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-md bg-white border border-[#E7E1D8] text-[#5F5A54] text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: System Architecture */}
        <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-6 shadow-warm-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#C76B32]" />
              7. System Architecture & Workflow
            </h3>
            <span className="text-xs text-[#5F5A54] font-mono">
              Component & Data Flow Pipeline
            </span>
          </div>

          {/* Workflow Sequence Diagram */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#5F5A54] uppercase tracking-wider block">
              Sequential Data & Execution Flow:
            </span>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 overflow-x-auto pb-2">
              {cs.architectureDiagram.flow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E7E1D8] flex-1 min-w-[180px] flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] flex items-center justify-center font-bold text-xs text-[#C76B32] shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#111111]">{step}</span>
                  </div>
                  {idx < cs.architectureDiagram.flow.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-[#C76B32]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Actual Architecture Image if present */}
          {cs.screenshots.architectureImage && (
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF8F3] border border-[#E7E1D8] space-y-2">
              <span className="text-xs font-bold text-[#5F5A54] uppercase tracking-wider block">
                Official Architecture Graph Diagram:
              </span>
              <div className="rounded-xl overflow-hidden border border-[#E7E1D8] bg-white p-2">
                <img
                  src={cs.screenshots.architectureImage}
                  alt={`${project.name} Architecture Diagram`}
                  className="w-full object-contain max-h-[450px] mx-auto"
                />
              </div>
            </div>
          )}

          {/* Major Architecture Components Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {cs.architectureDiagram.components.map((comp) => (
              <div key={comp.name} className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E7E1D8] space-y-1.5">
                <h4 className="font-heading font-bold text-sm text-[#C76B32]">
                  {comp.name}
                </h4>
                <p className="text-[#5F5A54] text-xs sm:text-sm leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: How It Works */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
            <Workflow className="w-5 h-5 text-[#C76B32]" />
            8. How It Works (Pipeline Walkthrough)
          </h3>
          <div className="space-y-3">
            {cs.howItWorks.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-white border border-[#E7E1D8] flex flex-col sm:flex-row items-start gap-4 shadow-warm-sm">
                <span className="font-mono font-extrabold text-lg text-[#C76B32] bg-[#F8E9DD] px-3 py-1 rounded-xl border border-[#E7D2C3] shrink-0">
                  STEP {step.step}
                </span>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-[#111111]">
                    {step.title}
                  </h4>
                  <p className="text-[#5F5A54] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 9: Screenshots / Product UI */}
        <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-4 shadow-warm-sm">
          <h3 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#C76B32]" />
            9. Application Screenshots & Product UI
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Banner Media */}
            <div className="rounded-2xl overflow-hidden border border-[#E7E1D8] bg-[#FAF8F3] aspect-[16/9]">
              <img
                src={cs.screenshots.banner}
                alt={`${project.name} Interface`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Screenshots Placeholders */}
            {cs.screenshots.placeholders.map((ph, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F3] border border-dashed border-[#E7E1D8] flex flex-col items-center justify-center text-center space-y-2 aspect-[16/9]">
                <ImageIcon className="w-8 h-8 text-[#817A72]" />
                <span className="font-heading font-bold text-sm text-[#111111]">
                  {ph.title}
                </span>
                <span className="text-xs text-[#5F5A54] font-mono px-3 py-1 rounded bg-white border border-[#E7E1D8]">
                  {ph.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 10: Technical Challenges & Solutions */}
        <div className="p-8 rounded-3xl bg-white border border-[#E7E1D8] space-y-4 shadow-warm-sm">
          <h3 className="font-heading font-bold text-xl text-[#111111] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#C76B32]" />
            10. Technical Challenges & Solutions
          </h3>
          <div className="space-y-4">
            {cs.challenges.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E7E1D8] space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C76B32] font-bold text-xs uppercase tracking-wider block shrink-0 mt-0.5">
                    CHALLENGE:
                  </span>
                  <p className="text-[#111111] text-sm font-semibold">{c.challenge}</p>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-[#E7E1D8]">
                  <span className="text-[#111111] font-bold text-xs uppercase tracking-wider block shrink-0 mt-0.5">
                    SOLUTION:
                  </span>
                  <p className="text-[#5F5A54] text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 11: Repository Links & Modal Footer */}
        <div className="pt-6 border-t border-[#E7E1D8] flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C76B32] text-white font-bold text-sm hover:bg-[#A95322] transition-all shadow-orange-sm"
          >
            <Github className="w-4 h-4" />
            <span>View Repository on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-6 py-3.5 rounded-xl bg-white border border-[#E7E1D8] text-[#111111] hover:bg-[#F8E9DD] hover:text-[#C76B32] font-bold text-sm transition-colors shadow-warm-sm"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
};
