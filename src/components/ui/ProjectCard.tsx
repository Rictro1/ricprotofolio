import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  delay: number;
}

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  const isRight = project.alignment === 'right';

  return (
    <div
      className={`col-span-12 ${isRight ? 'lg:col-span-10 lg:col-start-3' : 'lg:col-span-10'} group flex flex-col ${isRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12 stagger-item stagger-delay-${delay}`}
    >
      {/* Image block */}
      <div className="w-full lg:w-2/3 relative">
        {/* overflow-hidden is only on the aspect-ratio container, not the parent, so badges aren't clipped */}
        <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest rounded-2xl border border-black/5 transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hoverable">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={project.imageAlt}
            className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
            src={project.image}
          />
        </div>

        {/* Tech tags badge — positioned outside the overflow-hidden image box */}
        <div
          className={`absolute -bottom-8 ${isRight ? '-left-8' : '-right-8'} hidden lg:flex flex-col gap-2 bg-surface p-4 rounded-xl border border-black/5 shadow-xl z-20`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Text block */}
      <div
        className={`w-full lg:w-1/3 pt-8 lg:pt-24 space-y-6 ${isRight ? 'lg:text-right lg:items-end flex flex-col' : ''}`}
      >
        <h4 className="text-4xl font-bold text-on-surface tracking-tight">{project.title}</h4>
        <p className="text-lg text-on-surface-variant leading-relaxed">{project.description}</p>
        <a
          href={project.projectUrl}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all hoverable"
        >
          View Project{' '}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
