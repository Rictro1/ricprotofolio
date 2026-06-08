'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => cursor.classList.add('cursor-hover');
    const removeHover = () => cursor.classList.remove('cursor-hover');

    window.addEventListener('mousemove', onMove);

    // Delegate hover to all interactive elements
    const attachHoverables = () => {
      document.querySelectorAll('.hoverable, button, a').forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    attachHoverables();

    // Re-attach on DOM changes (e.g. dynamic content)
    const observer = new MutationObserver(attachHoverables);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
}
