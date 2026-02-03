
// use new code 
"use client";

import { useMemo } from "react";

type Mode = "screen" | "burst";

type Heart = {
  id: number;
  left: number;      // %
  size: number;      // px
  duration: number;  // seconds
  delay: number;     // seconds
  opacity: number;   // 0-1
  blur: number;      // px
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function FloatingHearts({
  count = 14,
  mode = "screen",
  color = "#ff2d55", // ❤️ default red
}: {
  count?: number;
  mode?: Mode;
  color?: string;
}) {
  const hearts = useMemo<Heart[]>(() => {
    // 💗 FULL SCREEN (your old style)
    if (mode === "screen") {
      return Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: rand(5, 95),
        size: rand(14, 40),
        duration: rand(6, 12),
        delay: rand(0, 6),
        opacity: rand(0.18, 0.45),
        blur: rand(0, 1.5),
      }));
    }

    // ❤️ BURST (from button)
    // return Array.from({ length: count }).map((_, i) => ({
    //   id: i,
    //   left: rand(10, 90),
    //   size: rand(10, 22),
    //   duration: rand(0.9, 1.4),
    //   delay: rand(0, 0.15),
    //   opacity: rand(0.65, 1),
    //   blur: rand(0, 0.6),
    // }));

    // new here 
    // ❤️ BURST (from button center)
return Array.from({ length: count }).map((_, i) => ({
  id: i,
  left: 15 + rand(6, -6),    //centered
  size: rand(26, 40),         // ✅ bigger hearts
  duration: rand(0.9, 1.2),   // ✅ quick burst
  delay: rand(0, 0.08),       // ✅ almost instant
  opacity: rand(0.8, 1),
  blur: rand(0, 0.3),
}));

  }, [count, mode]);


  const containerClass =
    mode === "screen"
      ? "fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      : "absolute inset-0 -z-10 pointer-events-none overflow-visible"; // behind button

  const heartClass =
    mode === "screen"
      ? "absolute bottom-[-60px] animate-floatHeart"
      : "absolute bottom-1 animate-heartBurst"; // start from button area

  return (
    <div className={containerClass}>
      {hearts.map((h) => (
        <span
          key={h.id}
          className={heartClass}
          style={{
            left: `${h.left}%`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
            filter: `blur(${h.blur}px)`,
          }}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-full w-full">
            <path
              d="M12 21s-7.2-4.6-9.7-8.6C.6 9.4 2.1 6.3 5.3 5.4c1.8-.5 3.7.2 4.7 1.6 1-1.4 2.9-2.1 4.7-1.6 3.2.9 4.7 4 3 7-2.5 4-9.7 8.6-9.7 8.6z"
              fill={mode === "screen" ? "#f8a8c3" : color} // screen=soft pink, burst=red
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

