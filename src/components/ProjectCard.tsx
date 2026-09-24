import React from 'react';
import { Project } from '../data/projects';
import { Github, ExternalLink, FileText, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group rounded-3xl bg-[#131929] border border-blue-500/15 hover:border-blue-500/40 hover:bg-[#182035] transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between hover:-translate-y-2">
      
      {/* Top Media & Numbering Container */}
      <div className="relative overflow-hidden aspect-[16/9] bg-slate-950">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131929] via-transparent to-transparent opacity-90" />

        {/* Project Number Label (01, 02, 03, 04) */}
        <div className="absolute top-3 right-4 font-heading font-extrabold text-3xl sm:text-4xl text-white/40 group-hover:text-blue-400/80 transition-colors drop-shadow-md">
          {project.number}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow-glow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Project</span>
          </div>
        )}

        {/* Category Tag */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-[#0a0d14]/85 backdrop-blur-md border border-slate-700 text-blue-400 text-xs font-semibold">
          {project.category}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono font-bold text-xs text-blue-400">
              {project.number} —
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mt-2 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#0a0d14] border border-slate-800 text-slate-300 text-xs font-medium group-hover:border-blue-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions Row */}
        <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-slate-800/80">
          
          {/* GitHub Repository Link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0d14] border border-blue-500/20 text-slate-200 text-xs font-semibold hover:border-blue-500 hover:text-white hover:bg-blue-600/10 transition-all"
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
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-glow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}

          {/* View Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>View Case Study</span>
          </button>

        </div>
      </div>

    </div>
  );
};
