import type { Skill } from '@/types';

interface SkillChipProps {
  skill: Skill;
}

export default function SkillChip({ skill }: SkillChipProps) {
  return (
    <div className="skill-chip px-5 py-3 rounded-xl flex items-center gap-3 group/chip hoverable">
      <span className="material-symbols-outlined text-sm text-primary group-hover/chip:rotate-12 transition-transform">
        {skill.icon}
      </span>
      <span className="text-sm font-bold text-on-surface">{skill.label}</span>
    </div>
  );
}
