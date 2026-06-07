import ScrollReveal from '@/components/effects/ScrollReveal';
import { profile } from '@/data/profile';
import { skills } from '@/data/skills';

export default function About() {
  return (
    <ScrollReveal as="section" className="section-about py-32 px-6 md:px-16" id="about">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block stagger-item stagger-delay-1">Personal Narrative</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-on-surface leading-[0.95] tracking-tighter mb-8 stagger-item stagger-delay-2">
              Crafting <span className="text-on-surface-variant/40">Digital</span> Experiences.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-body-lg text-on-surface-variant leading-relaxed stagger-item stagger-delay-3">{profile.tagline}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="col-span-12 lg:col-span-5 portrait-frame order-2 lg:order-1 stagger-item stagger-delay-4">
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/10 blur-[90px] rounded-full"></div>
              <div className="relative z-10 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] bg-surface-container-high border border-white/20 transition-all duration-700 group-hover:scale-[1.01] rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 z-20"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Eric - Portrait" className="w-full aspect-[4/5] object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1" src={profile.image} />
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[scan_4s_linear_infinite] z-30"></div>
                <div className="absolute bottom-6 left-6 right-6 z-30 glass-card p-6 rounded-2xl flex items-center justify-between transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-surface-container-lowest text-2xl font-light">fingerprint</span>
                    </div>
                    <div>
                      <h4 className="text-on-surface font-bold text-base">{profile.name}</h4>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">Lead Developer</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest mb-1">Status</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs font-semibold text-on-surface">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div className="space-y-8 stagger-item stagger-delay-2">
              <h3 className="text-3xl font-bold text-on-surface tracking-tight">The Vision</h3>
              <div className="space-y-6 text-xl text-on-surface-variant/90 leading-[1.6]">
                <p className="font-medium italic border-l-4 border-primary pl-8 py-2">&ldquo;{profile.quote}&rdquo;</p>
                {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="space-y-6 stagger-item stagger-delay-3">
              <h4 className="text-sm font-bold text-on-surface uppercase tracking-[0.3em]">Core Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <div key={s.id} className="skill-chip px-5 py-3 rounded-xl flex items-center gap-3 group/chip hoverable">
                    {s.icon === 'yolo' ? (
                      <span className="material-symbols-outlined text-sm text-primary group-hover/chip:rotate-12 transition-transform">visibility</span>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`https://cdn.simpleicons.org/${s.icon}/111111`}
                        alt={s.label}
                        className="w-4 h-4 group-hover/chip:rotate-12 transition-transform"
                      />
                    )}
                    <span className="text-sm font-bold text-on-surface">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
