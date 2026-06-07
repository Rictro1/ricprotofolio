import ScrollReveal from '@/components/effects/ScrollReveal';

export default function Footer() {
  return (
    <ScrollReveal as="footer" className="py-16 px-6 bg-surface-container-lowest text-center" id="footer">
      <div className="max-w-container-max mx-auto">
        <div className="font-headline-md text-2xl font-extrabold tracking-tighter mb-4 stagger-item stagger-delay-1">Eric.</div>
        <p className="text-on-surface-variant text-sm mb-8 opacity-60 stagger-item stagger-delay-2">© 2026 Eric Yedija Sinaga. All rights reserved.</p>
        <div className="flex justify-center gap-6 stagger-item stagger-delay-3">
          <a className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface hoverable" href="#hero">Back to Top</a>
        </div>
      </div>
    </ScrollReveal>
  );
}
