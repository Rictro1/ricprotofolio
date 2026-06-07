'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Render as a semantic HTML element (default: div) */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps children in a semantic element with the `reveal` class.
 * IntersectionObserver adds `active` on scroll-in, driving CSS transitions.
 */
export default function ScrollReveal({
  children,
  className = '',
  id,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cast to any to allow dynamic tag with ref — safe because we constrain to intrinsic elements
  const AnyTag = Tag as React.ElementType;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <AnyTag ref={ref as any} id={id} className={`reveal ${className}`}>
      {children}
    </AnyTag>
  );
}
