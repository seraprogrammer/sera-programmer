"use client";

import { useEffect, useState } from "react";

export default function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden
      className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
    >
      <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
      <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
      <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />

      <div
        className="absolute size-96 rounded-full bg-primary/5 blur-[120px] opacity-60 transition-transform duration-1000 ease-out"
        style={{
          left: `calc(${mousePosition.x * 100}% - 12rem)`,
          top: `calc(${mousePosition.y * 100}% - 12rem)`,
        }}
      />
      <div
        className="absolute size-64 rounded-full bg-chart-1/10 blur-[80px] opacity-50 transition-transform duration-700 ease-out"
        style={{
          right: `calc(${(1 - mousePosition.x) * 100}% - 8rem)`,
          bottom: `calc(${(1 - mousePosition.y) * 100}% - 8rem)`,
        }}
      />
    </div>
  );
}
