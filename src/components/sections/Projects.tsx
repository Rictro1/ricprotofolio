'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      style={{ cursor: 'auto' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[960px] h-[600px] bg-surface-bright rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: 'auto' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          style={{ cursor: 'pointer' }}
        >
          <span className="material-symbols-outlined text-on-surface text-xl">close</span>
        </button>

        {/* Left: Project Image */}
        <div className="md:w-1/2 h-[240px] md:h-full flex-shrink-0 bg-surface-container-highest flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={project.imageAlt}
            className="w-full h-full object-contain"
            src={project.image}
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto min-h-0">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest bg-surface-container-low px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface leading-tight tracking-tight mb-4">
            {project.title}
          </h3>

          <div className="w-12 h-[3px] bg-on-surface rounded-full mb-6 flex-shrink-0" />

          <p className="text-on-surface-variant leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="mt-auto flex-shrink-0">
            <a
              href={project.projectUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-on-surface text-surface-bright font-semibold text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
              style={{ cursor: 'pointer' }}
            >
              Open Project
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <ScrollReveal as="section" className="py-32 px-6 md:px-16 bg-surface border-t border-black/5" id="projects">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative grid grid-cols-12 gap-8 mb-32">
            <div className="absolute -left-12 top-0 hidden lg:block h-full stagger-item stagger-delay-1">
              <span className="sticky top-32 text-[120px] font-extrabold text-on-surface-variant/5 tracking-tighter leading-none uppercase [writing-mode:vertical-rl] rotate-180">Portfolio</span>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-on-surface leading-[0.85] tracking-tighter mb-12 stagger-item stagger-delay-2">
                Selected<br /><span className="text-on-surface-variant/20">Projects.</span>
              </h2>
              <div className="max-w-xl ml-auto border-l-4 border-primary pl-8 stagger-item stagger-delay-3">
                <p className="text-body-lg text-on-surface-variant leading-relaxed italic">A collection of digital products focused on solving complex problems through elegant design and robust engineering.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-y-32 lg:gap-y-48">
            {projects.map((project, i) => {
              const isRight = project.alignment === 'right';
              return (
                <div key={project.id} className={`col-span-12 ${isRight ? 'lg:col-span-10 lg:col-start-3' : 'lg:col-span-10'} group flex flex-col ${isRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12 stagger-item stagger-delay-${i+1}`}>
                  <div className="w-full lg:w-2/3 relative">
                    <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest rounded-2xl border border-black/5 transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hoverable">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt={project.imageAlt} className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src={project.image} />
                    </div>
                    <div className={`absolute -bottom-8 ${isRight ? '-left-8' : '-right-8'} hidden lg:flex flex-col gap-2 bg-surface p-4 rounded-xl border border-black/5 shadow-xl z-20`}>
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className={`w-full lg:w-1/3 pt-8 lg:pt-24 space-y-6${isRight ? ' lg:text-right lg:items-end flex flex-col' : ''}`}>
                    <h4 className="text-4xl font-bold text-on-surface tracking-tight">{project.title}</h4>
                    <p className="text-lg text-on-surface-variant leading-relaxed">{project.description}</p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all hoverable bg-transparent border-none p-0"
                      style={{ cursor: 'none' }}
                    >
                      View Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
