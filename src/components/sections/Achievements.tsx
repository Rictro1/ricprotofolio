'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { achievements } from '@/data/achievements';
import type { Achievement } from '@/types';

function CertificateModal({ achievement, onClose }: { achievement: Achievement; onClose: () => void }) {
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

        {/* Left: Certificate Image */}
        <div className="md:w-1/2 h-[240px] md:h-full flex-shrink-0 bg-surface-container-highest flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={achievement.imageAlt}
            className="w-full h-full object-contain"
            src={achievement.image}
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto min-h-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">{achievement.icon}</span>
            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">{achievement.date}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface leading-tight tracking-tight mb-3">
            {achievement.title}
          </h3>

          <p className="text-sm font-semibold text-on-surface-variant mb-6">{achievement.issuer}</p>

          <div className="w-12 h-[3px] bg-on-surface rounded-full mb-6 flex-shrink-0" />

          <p className="text-on-surface-variant leading-relaxed mb-8">
            {achievement.description}
          </p>

          <div className="mt-auto flex-shrink-0">
            <a
              href={achievement.certificateUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-on-surface text-surface-bright font-semibold text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
              style={{ cursor: 'pointer' }}
            >
              Open Certificate
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 432; // card width + gap
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <>
      <ScrollReveal as="section" className="py-32 px-6 md:px-16 bg-surface-container-low border-t border-black/5" id="achievements">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-24">
            <div className="col-span-12 lg:col-span-7">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block stagger-item stagger-delay-1">Recognition</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-on-surface leading-[0.95] tracking-tighter mb-8 stagger-item stagger-delay-2">
                Achievements &amp; <span className="text-on-surface-variant/40">Certifications</span>.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-body-lg text-on-surface-variant leading-relaxed stagger-item stagger-delay-3">Validating technical expertise through recognized industry benchmarks and specialized academic excellence.</p>
            </div>
          </div>

          {/* Cards with navigation buttons */}
          <div className="relative">
            {/* Left scroll button */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-surface-bright border border-black/10 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hoverable ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              style={{ cursor: 'none' }}
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined text-on-surface">chevron_left</span>
            </button>

            {/* Right scroll button */}
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-surface-bright border border-black/10 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hoverable ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              style={{ cursor: 'none' }}
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined text-on-surface">chevron_right</span>
            </button>

            {/* Scrollable cards */}
            <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-0 md:px-0">
              {achievements.map((a, i) => (
                <div
                  key={a.id}
                  className={`group relative bg-surface-bright border border-black/5 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:translate-y-[-8px] hoverable stagger-item stagger-delay-${i + 1} snap-start flex-shrink-0 w-[340px] md:w-[400px] flex flex-col`}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={a.imageAlt} className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src={a.image} />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">{a.date}</span>
                      <span className="material-symbols-outlined text-primary">{a.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-on-surface mb-2">{a.title}</h4>
                    <p className="text-sm text-on-surface-variant mb-6">{a.issuer}</p>
                    <div className="mt-auto">
                      <button
                        onClick={() => setSelectedAchievement(a)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all hoverable bg-transparent border-none p-0"
                        style={{ cursor: 'none' }}
                      >
                        View Certificate{' '}
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Certificate Detail Modal */}
      {selectedAchievement && (
        <CertificateModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </>
  );
}
