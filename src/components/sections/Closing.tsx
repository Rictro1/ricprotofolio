import ScrollReveal from '@/components/effects/ScrollReveal';

export default function Closing() {
  return (
    <ScrollReveal as="section" className="py-48 px-6 md:px-16 bg-surface-container-lowest relative overflow-hidden border-t border-black/5" id="closing">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[15vw] font-extrabold text-on-surface-variant/5 tracking-tighter leading-none uppercase select-none stagger-item stagger-delay-1">Innovate</span>
      </div>
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent stagger-item stagger-delay-2"></div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-primary uppercase tracking-[0.4em] stagger-item stagger-delay-3">Current Focus</h3>
            <p className="text-2xl md:text-3xl font-medium text-on-surface max-w-2xl mx-auto leading-relaxed stagger-item stagger-delay-4">
              Exploring the synergy between <span className="italic">minimalist design</span> and <span className="italic">intelligent systems</span>.
            </p>
          </div>
          <div className="flex items-center gap-4 pt-8 stagger-item stagger-delay-5">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-black/5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Open for global opportunities</span>
            </div>
            <span className="text-xs font-medium text-on-surface-variant/40">•</span>
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Based in Indonesia</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
