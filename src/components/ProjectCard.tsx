import React from 'react';
import { Project } from '../data/projects';
import { Github, ExternalLink, FileText, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group rounded-3xl bg-white border border-[#E7E1D8] hover:border-[#E5A06A] transition-all duration-300 overflow-hidden shadow-warm-md hover:shadow-warm-lg flex flex-col justify-between hover:-translate-y-2">
      
      {/* Top Media & Numbering Container */}
      <div className="relative overflow-hidden aspect-[16/9] bg-[#FAF8F3]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

        {/* Project Number Label (01, 02, 03, 04) */}
        <div className="absolute top-3 right-4 font-heading font-extrabold text-3xl sm:text-4xl text-white/90 drop-shadow-md">
          {project.number}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C76B32] text-white text-xs font-bold shadow-orange-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Project</span>
          </div>
        )}

        {/* Category Tag */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-[#E7E1D8] text-[#C76B32] text-xs font-semibold shadow-warm-sm">
          {project.category}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono font-bold text-xs text-[#C76B32]">
              {project.number} —
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-[#111111] group-hover:text-[#C76B32] transition-colors">
              {project.name}
            </h3>
          </div>
          <p className="text-[#5F5A54] text-sm leading-relaxed mt-2 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#F8E9DD] border border-[#E7D2C3] text-[#5F5A54] text-xs font-medium group-hover:border-[#E5A06A] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions Row */}
        <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-[#E7E1D8]">
          
          {/* GitHub Repository Link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E7E1D8] text-[#111111] text-xs font-semibold hover:border-[#E5A06A] hover:text-[#C76B32] hover:bg-[#F8E9DD] transition-all shadow-warm-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* Live Demo only if real URL exists */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#C76B32] text-white text-xs font-semibold hover:bg-[#A95322] transition-all shadow-orange-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}

          {/* View Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8E9DD] border border-[#E7D2C3] text-[#C76B32] text-xs font-semibold hover:bg-[#C76B32] hover:text-white transition-all shadow-warm-sm"
          >
            <FileText className="w-4 h-4" />
            <span>View Case Study</span>
          </button>

        </div>
      </div>

    </div>
  );
};

