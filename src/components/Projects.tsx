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
    <section id="projects" className="py-20 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E9DD] border border-[#E5A06A] text-[#C76B32] text-xs font-semibold mb-3 shadow-warm-sm">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production AI Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Featured <span className="text-[#C76B32]">Projects</span>
            </h2>
            <p className="mt-3 text-[#5F5A54] text-base sm:text-lg max-w-2xl">
              A collection of my best work in AI/ML and software development.
            </p>
          </div>

          <a
            href="https://github.com/Ajeet9555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#E7E1D8] text-[#111111] text-xs font-semibold hover:border-[#E5A06A] hover:bg-[#F8E9DD] hover:text-[#C76B32] transition-all self-start md:self-auto shadow-warm-sm"
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
                    ? 'bg-[#C76B32] text-white shadow-orange-sm scale-105'
                    : 'bg-white border border-[#E7E1D8] text-[#5F5A54] hover:border-[#C76B32] hover:text-[#C76B32] hover:bg-[#F8E9DD]/60 shadow-warm-sm'
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

