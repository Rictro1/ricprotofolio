'use client';

import { useEffect, useState } from 'react';
import TileCursor from '@/components/effects/TileCursor';
import { profile } from '@/data/profile';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ['heroNav', 'heroBadge', 'heroHeadline', 'heroSubtitle', 'heroDivider', 'heroBody', 'heroCta', 'heroLoc', 'heroCopy'];
    ids.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.transition = `opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)`;
      el.style.transitionDelay = `${index * 150}ms`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <div className="hero-wrap" id="hero">
      <div className="nav-hero hero-reveal" id="heroNav">
        <span className="nav-name">Eric.</span>
        
        {/* Desktop nav links */}
        <div className="nav-links-hero hidden md:flex">
          <a className="hoverable" href="#about">About</a>
          <a className="hoverable" href="#achievements">Achievement</a>
          <a className="hoverable" href="#projects">Projects</a>
          <a className="hoverable" href="#contact">Contact</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] pointer-events-auto z-20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ cursor: 'pointer' }}
        >
          <span className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-[40]" onClick={handleNavClick} />
          <div className="md:hidden absolute top-16 right-5 z-[50] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-black/5 p-2 min-w-[180px] pointer-events-auto">
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#about" onClick={handleNavClick} style={{ cursor: 'pointer' }}>About</a>
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#achievements" onClick={handleNavClick} style={{ cursor: 'pointer' }}>Achievement</a>
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#projects" onClick={handleNavClick} style={{ cursor: 'pointer' }}>Projects</a>
            <a className="block px-4 py-3 text-sm font-semibold text-on-surface hover:bg-black/5 rounded-xl transition-colors" href="#contact" onClick={handleNavClick} style={{ cursor: 'pointer' }}>Contact</a>
          </div>
        </>
      )}

      <TileCursor />
      <div className="content">
        <div className="badge hero-reveal" id="heroBadge"><span className="badge-dot"></span>Available for work</div>
        <div className="headline hero-reveal" id="heroHeadline">Hi, I&apos;m {profile.name}</div>
        <div className="subtitle hero-reveal" id="heroSubtitle">{profile.title}</div>
        <div className="divider hero-reveal" id="heroDivider"></div>
        <div className="body-txt hero-reveal" id="heroBody">I build clean, modern, and user-focused web applications with interest in AI and UI/UX design.</div>
        <div className="cta-row flex flex-col sm:flex-row gap-4 mt-10 hero-reveal" id="heroCta">
          <a className="btn-primary hoverable text-center" href="#projects">See my work  ↗</a>
          <a className="btn-outline hoverable text-center" href="#contact">Get in touch</a>
        </div>
      </div>
      <div className="corner-label corner-bl hero-reveal" id="heroLoc">📍 {profile.location}</div>
      <div className="corner-label corner-br hero-reveal" id="heroCopy">© 2026 {profile.name}</div>
    </div>
  );
}
