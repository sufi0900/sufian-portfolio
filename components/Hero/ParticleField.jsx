// components/Hero/ParticleField.jsx
"use client";

import { useEffect, useRef, useState } from "react";

/* PERF: fewer particles on small/mobile screens — same visual effect,
   less per-frame canvas work on the devices least able to spare it. */
export default function ParticleField({ accent, isDesktop }) {
  const canvasRef = useRef(null);
  const [particles] = useState(() =>
    Array.from({ length: isDesktop ? 22 : 10 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8, opacity: Math.random() * 0.45 + 0.1,
      speed: Math.random() * 0.012 + 0.004, drift: (Math.random() - 0.5) * 0.008,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId = null;
    const pState = particles.map((p) => ({
      ...p,
      fillStyle: `${accent}${Math.round(p.opacity * 255).toString(16).padStart(2, "0")}`,
    }));
    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      pState.forEach((p) => {
        const px = (p.x / 100) * width, py = (p.y / 100) * height;
        ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.fillStyle;
        ctx.fill();
        p.y -= p.speed; p.x += p.drift;
        if (p.y < -2) p.y = 102; if (p.x < -2) p.x = 102; if (p.x > 102) p.x = -2;
      });
      animId = requestAnimationFrame(render);
    };
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* PERF: stop scheduling animation frames entirely once the hero has
       scrolled out of view, instead of drawing an invisible canvas 60
       times a second. Resumes the moment it's back in the viewport. */
    let io = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (animId === null) animId = requestAnimationFrame(render);
        } else if (animId !== null) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      }, { threshold: 0 });
      io.observe(canvas);
    } else {
      render();
    }

    return () => { if (animId !== null) cancelAnimationFrame(animId); ro.disconnect(); if (io) io.disconnect(); };
  }, [accent, particles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 dark:opacity-100"
    />
  );
}