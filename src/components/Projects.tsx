import React, { useState } from 'react';
import { projectsData, projectFilterCategories, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(p => p.filterCategories.includes(activeFilter as any));

  return (
    <section id="projects" className="py-20 bg-[#0d121f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production AI Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-blue-purple">Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
              A collection of my best work in AI/ML and software development.
            </p>
          </div>

          <a
            href="https://github.com/Ajeet9555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#131929] border border-blue-500/30 text-blue-400 text-xs font-semibold hover:border-blue-500 hover:text-white hover:bg-blue-600/10 transition-all self-start md:self-auto shadow-glow-sm"
          >
            <span>View All Repositories on GitHub →</span>
          </a>
        </div>

        {/* Project Filter Pills */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-10">
          {projectFilterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow-sm scale-105'
                    : 'bg-[#131929] border border-blue-500/15 text-slate-300 hover:border-blue-500/40 hover:text-white hover:bg-[#182035]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
