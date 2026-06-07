'use client';

import { useEffect } from 'react';
import TileCursor from '@/components/effects/TileCursor';
import { profile } from '@/data/profile';

export default function Hero() {
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

  return (
    <div className="hero-wrap" id="hero">
      <div className="nav-hero hero-reveal" id="heroNav">
        <span className="nav-name">Eric.</span>
        <div className="nav-links-hero">
          <a className="hoverable" href="#about">About</a>
          <a className="hoverable" href="#achievements">Achievement</a>
          <a className="hoverable" href="#projects">Projects</a>
          <a className="hoverable" href="#contact">Contact</a>
        </div>
      </div>
      <TileCursor />
      <div className="content">
        <div className="badge hero-reveal" id="heroBadge"><span className="badge-dot"></span>Available for work</div>
        <div className="headline hero-reveal" id="heroHeadline">Hi, I&apos;m {profile.name}</div>
        <div className="subtitle hero-reveal" id="heroSubtitle">{profile.title}</div>
        <div className="divider hero-reveal" id="heroDivider"></div>
        <div className="body-txt hero-reveal" id="heroBody">I build clean, modern, and user-focused web applications with interest in AI and UI/UX design.</div>
        <div className="cta-row flex gap-4 mt-10 hero-reveal" id="heroCta">
          <a className="btn-primary hoverable" href="#projects">See my work  ↗</a>
          <a className="btn-outline hoverable" href="#contact">Get in touch</a>
        </div>
      </div>
      <div className="corner-label corner-bl hero-reveal" id="heroLoc">📍 {profile.location}</div>
      <div className="corner-label corner-br hero-reveal" id="heroCopy">© 2026 {profile.name}</div>
    </div>
  );
}
