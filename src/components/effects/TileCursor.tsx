'use client';

import { useEffect, useRef } from 'react';

interface TileData {
  el: HTMLDivElement;
  lastActive: number;
  active: boolean;
}

const TILE_SIZE = 52;
const RADIUS = 2.8;
const MAX_LIFT = 18;
const DECAY = 1600;

const tileKey = (c: number, r: number) => `${c},${r}`;

export default function TileCursor() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const heroWrapRef = useRef<HTMLElement | null>(null);
  const tilesRef = useRef<Map<string, TileData>>(new Map());
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    heroWrapRef.current = document.getElementById('hero');
    const canvas = canvasRef.current;
    if (!canvas || !heroWrapRef.current) return;

    const tiles = tilesRef.current;

    function getTilesInRadius(mx: number, my: number, heroWrap: HTMLElement) {
      const cols = Math.ceil(heroWrap.offsetWidth / TILE_SIZE) + 2;
      const rows = Math.ceil(heroWrap.offsetHeight / TILE_SIZE) + 2;
      const cx = Math.floor(mx / TILE_SIZE);
      const cy = Math.floor(my / TILE_SIZE);
      const affected: { c: number; r: number; dist: number; tx: number; ty: number }[] = [];

      for (let dr = -Math.ceil(RADIUS); dr <= Math.ceil(RADIUS); dr++) {
        for (let dc = -Math.ceil(RADIUS); dc <= Math.ceil(RADIUS); dc++) {
          const c = cx + dc;
          const r = cy + dr;
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          const tx = c * TILE_SIZE + TILE_SIZE / 2;
          const ty = r * TILE_SIZE + TILE_SIZE / 2;
          const dist =
            Math.sqrt((tx - mx) ** 2 + (ty - my) ** 2) / TILE_SIZE;
          if (dist < RADIUS) affected.push({ c, r, dist, tx, ty });
        }
      }
      return affected;
    }

    function getOrCreateTile(c: number, r: number): TileData {
      const k = tileKey(c, r);
      if (!tiles.has(k)) {
        const el = document.createElement('div');
        el.className = 'tile';
        const lightness = 88 + Math.random() * 8;
        el.style.cssText = `
          width:${TILE_SIZE - 2}px;
          height:${TILE_SIZE - 2}px;
          left:${c * TILE_SIZE + 1}px;
          top:${r * TILE_SIZE + 1}px;
          background:hsl(36,8%,${lightness}%);
          border:0.5px solid rgba(0,0,0,0.05);
          opacity:0;
          transform:perspective(400px) translateZ(0px) rotateX(0deg) rotateY(0deg);
        `;
        canvas.appendChild(el);
        tiles.set(k, { el, lastActive: 0, active: false });
      }
      return tiles.get(k)!;
    }

    function frame(now: number) {
      rafRef.current = requestAnimationFrame(frame);
      const heroWrap = heroWrapRef.current;
      if (!heroWrap) return;

      const heroRect = heroWrap.getBoundingClientRect();
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const relX = mouseX - heroRect.left;
      const relY = mouseY - heroRect.top;

      if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
        const affected = getTilesInRadius(relX, relY, heroWrap);
        const activeKeys = new Set<string>();
        const isOverHero =
          mouseX >= heroRect.left &&
          mouseX <= heroRect.right &&
          mouseY >= heroRect.top &&
          mouseY <= heroRect.bottom;

        if (isOverHero) {
          affected.forEach(({ c, r, dist, tx, ty }) => {
            const k = tileKey(c, r);
            const t = getOrCreateTile(c, r);
            activeKeys.add(k);
            const influence = Math.max(0, 1 - dist / RADIUS);
            const smooth = influence * influence * (3 - 2 * influence);
            const lift = smooth * MAX_LIFT;
            const opacity = 0.12 + smooth * 0.82;
            const dx = (tx - relX) / TILE_SIZE;
            const dy = (ty - relY) / TILE_SIZE;
            const rx = dy * smooth * 14;
            const ry = -dx * smooth * 14;
            t.el.style.opacity = String(opacity);
            t.el.style.transform = `perspective(400px) translateZ(${lift}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            t.el.style.boxShadow =
              lift > 2
                ? `0 ${lift * 0.4}px ${lift * 1.2}px rgba(0,0,0,${smooth * 0.15})`
                : 'none';
            t.active = true;
            t.lastActive = now;
          });
        }

        tiles.forEach((t, k) => {
          if (!activeKeys.has(k) && t.active) {
            const elapsed = now - t.lastActive;
            const fade = Math.max(0, 1 - elapsed / DECAY);
            if (fade <= 0.01) {
              t.el.remove();
              tiles.delete(k);
              return;
            }
            t.el.style.opacity = String(fade * 0.12);
            t.el.style.transform = `perspective(400px) translateZ(${fade * 2}px) rotateX(0deg) rotateY(0deg)`;
            t.el.style.boxShadow = 'none';
          }
        });
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div className="tile-canvas" ref={canvasRef} />;
}
