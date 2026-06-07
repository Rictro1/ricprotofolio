'use client';

import { useEffect } from 'react';

export default function StickyNavbar() {
  useEffect(() => {
    const nav = document.getElementById('stickyNav');
    if (!nav) return;
    const handler = () => {
      if (window.scrollY > 400) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className="top-nav fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-3xl border-b border-black/5 shadow-[0_0_40px_rgba(0,0,0,0.05)]" id="stickyNav">
      <div className="flex justify-between items-center px-6 md:px-16 py-5 w-full max-w-container-max mx-auto">
        <a className="font-headline-md text-xl font-extrabold text-on-surface hoverable tracking-tighter" href="#hero">Eric.</a>
        <div className="hidden md:flex gap-10 ml-auto">
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#about">About</a>
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#achievements">Achievements</a>
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#projects">Projects</a>
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
