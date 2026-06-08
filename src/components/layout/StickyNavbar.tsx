'use client';

import { useEffect, useState } from 'react';

export default function StickyNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('stickyNav');
    if (!nav) return;
    const handler = () => {
      if (window.scrollY > 400) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
        setMobileOpen(false);
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);



  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="top-nav fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-3xl border-b border-black/5 shadow-[0_0_40px_rgba(0,0,0,0.05)]" id="stickyNav">
      <div className="flex justify-between items-center px-6 md:px-16 py-5 w-full max-w-container-max mx-auto">
        <a className="font-headline-md text-xl font-extrabold text-on-surface hoverable tracking-tighter" href="#hero">Eric.</a>
        
        {/* Desktop nav */}
        <div className="hidden md:flex gap-10 ml-auto">
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#about">About</a>
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#achievements">Achievements</a>
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#projects">Projects</a>
          <a className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors hoverable" href="#contact">Contact</a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ cursor: 'pointer' }}
        >
          <span className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-[99]" onClick={handleNavClick} />
          <div className="md:hidden absolute top-full right-4 mt-2 z-[101] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-black/5 p-2 min-w-[180px]">
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#about" onClick={handleNavClick} style={{ cursor: 'pointer' }}>About</a>
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#achievements" onClick={handleNavClick} style={{ cursor: 'pointer' }}>Achievements</a>
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#projects" onClick={handleNavClick} style={{ cursor: 'pointer' }}>Projects</a>
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#contact" onClick={handleNavClick} style={{ cursor: 'pointer' }}>Contact</a>
          </div>
        </>
      )}
    </nav>
  );
}
