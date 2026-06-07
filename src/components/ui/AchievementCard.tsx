import type { Achievement } from '@/types';

interface AchievementCardProps {
  achievement: Achievement;
  delay: number;
}

export default function AchievementCard({ achievement, delay }: AchievementCardProps) {
  return (
    <div
      className={`group relative bg-surface-bright border border-black/5 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:translate-y-[-8px] hoverable stagger-item stagger-delay-${delay}`}
    >
      {/* Image — aspect ratio matches original exactly */}
      <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={achievement.imageAlt}
          className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
          src={achievement.image}
        />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
            {achievement.date}
          </span>
          <span className="material-symbols-outlined text-primary">{achievement.icon}</span>
        </div>
        <h4 className="text-xl font-bold text-on-surface mb-2">{achievement.title}</h4>
        <p className="text-sm text-on-surface-variant mb-6">{achievement.issuer}</p>
        <a
          href={achievement.certificateUrl}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all hoverable"
        >
          View Certificate{' '}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
