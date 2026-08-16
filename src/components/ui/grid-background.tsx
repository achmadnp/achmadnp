"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      el.style.setProperty("--mouse-x", `${e.clientX}px`);
      el.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 animate-[grid-rainbow_6s_linear_infinite]"
        style={
          {
            "--grid-hue": 0,
            backgroundImage:
              "linear-gradient(to right, hsla(var(--grid-hue), 90%, 65%, 0.45) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--grid-hue), 90%, 65%, 0.45) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            WebkitMaskImage:
              "radial-gradient(220px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
            maskImage:
              "radial-gradient(220px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
