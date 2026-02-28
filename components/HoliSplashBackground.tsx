
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Splash = {
  id: string;
  x: number; // %
  y: number; // %
  size: number; // px
  rotation: number; // deg
  color: string;
  opacity: number;
};

const COLORS = [
  "#FF2D55", // pink/red
  "#FF9500", // orange
  "#FFCC00", // yellow
  "#34C759", // green
  "#00C7BE", // teal
  "#007AFF", // blue
  "#AF52DE", // purple
];

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function HoliSplashBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // floating background splashes (decor)
  const decor = useMemo(() => {
    const items: Splash[] = Array.from({ length: 10 }).map(() => ({
      id: uid(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 180 + Math.random() * 220,
      rotation: Math.random() * 360,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: 0.10 + Math.random() * 0.10,
    }));
    return items;
  }, []);

  // click splashes (interactive)
  const [clickSplashes, setClickSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const splash: Splash = {
        id: uid(),
        x,
        y,
        size: 140 + Math.random() * 160,
        rotation: Math.random() * 360,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.35,
      };

      setClickSplashes((prev) => [...prev, splash]);

      // remove after animation
      setTimeout(() => {
        setClickSplashes((prev) => prev.filter((s) => s.id !== splash.id));
      }, 900);
    };

    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* soft gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,45,85,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,204,0,0.10),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(0,122,255,0.10),transparent_45%)]" />

      {/* floating decor splashes */}
      {decor.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute holi-float holi-blob-${(idx % 3) + 1}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            opacity: s.opacity,
            background: s.color,
          }}
        />
      ))}

      {/* click splashes */}
      {clickSplashes.map((s) => (
        <div
          key={s.id}
          className="absolute holi-pop"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            background: s.color,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}