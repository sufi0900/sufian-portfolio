"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0;

      setIsVisible(scrollTop > 320);
      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const circumference = 2 * Math.PI * 21;
  const dashOffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="stt-wrap" aria-hidden={!isVisible}>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`stt-button ${isVisible ? "is-visible" : ""}`}
      >
        <svg
          className="stt-progress"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          aria-hidden="true"
        >
          <circle className="stt-progress-track" cx="26" cy="26" r="21" />
          <circle
            className="stt-progress-value"
            cx="26"
            cy="26"
            r="21"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>

        <span className="stt-icon">
          <ArrowUp size={18} strokeWidth={2.65} />
        </span>
      </button>

      <style jsx global>{`
        .stt-wrap {
          --stt-gold: #e3b341;
          --stt-gold-deep: #c9952c;
          --stt-gold-soft: #f2cc6b;
          --stt-accent-ink: #2e2106;

          position: fixed;
          right: max(22px, env(safe-area-inset-right));
          bottom: max(24px, env(safe-area-inset-bottom));
          z-index: 120;
          pointer-events: none;
        }

        .stt-button {
          position: relative;
          display: grid;
          place-items: center;
          width: 52px;
          height: 52px;
          border: 1px solid rgba(227, 179, 65, 0.24);
          border-radius: 18px;
          background:
            radial-gradient(
              circle at 30% 15%,
              rgba(242, 204, 107, 0.2),
              transparent 48%
            ),
            linear-gradient(
              145deg,
              rgba(227, 179, 65, 0.14),
              rgba(5, 10, 24, 0.72)
            );
          color: var(--stt-gold-soft);
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          transform: translateY(16px) scale(0.92);
          box-shadow:
            0 18px 46px rgba(0, 0, 0, 0.34),
            0 0 34px rgba(227, 179, 65, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            opacity 220ms ease,
            transform 220ms ease,
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease,
            color 180ms ease;
        }

        .stt-button.is-visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .stt-button:hover,
        .stt-button:focus-visible {
          color: #fff4c7;
          border-color: rgba(227, 179, 65, 0.48);
          background:
            radial-gradient(
              circle at 30% 15%,
              rgba(242, 204, 107, 0.28),
              transparent 50%
            ),
            linear-gradient(
              145deg,
              rgba(227, 179, 65, 0.2),
              rgba(5, 10, 24, 0.78)
            );
          box-shadow:
            0 22px 56px rgba(0, 0, 0, 0.42),
            0 0 42px rgba(227, 179, 65, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transform: translateY(-3px) scale(1.02);
          outline: none;
        }

        .stt-progress {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
        }

        .stt-progress-track {
          fill: none;
          stroke: rgba(237, 233, 220, 0.09);
          stroke-width: 2;
        }

        .stt-progress-value {
          fill: none;
          stroke: url("#sttGoldGradient");
          stroke-width: 2.35;
          stroke-linecap: round;
          transition: stroke-dashoffset 120ms linear;
          filter: drop-shadow(0 0 6px rgba(227, 179, 65, 0.38));
        }

        .stt-icon {
          position: relative;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 35px;
          height: 35px;
          border-radius: 13px;
          background: rgba(227, 179, 65, 0.08);
          transition:
            background 180ms ease,
            transform 180ms ease;
        }

        .stt-icon svg {
          display: block;
        }

        .stt-button:hover .stt-icon,
        .stt-button:focus-visible .stt-icon {
          background: rgba(227, 179, 65, 0.14);
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .stt-wrap {
            right: 16px;
            bottom: 18px;
          }

          .stt-button {
            width: 48px;
            height: 48px;
            border-radius: 16px;
          }

          .stt-progress {
            width: 48px;
            height: 48px;
          }

          .stt-icon {
            width: 33px;
            height: 33px;
            border-radius: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stt-button,
          .stt-icon,
          .stt-progress-value {
            transition: none !important;
          }

          .stt-button:hover,
          .stt-button:focus-visible {
            transform: none;
          }
        }
      `}</style>

      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="sttGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9952C" />
            <stop offset="52%" stopColor="#E3B341" />
            <stop offset="100%" stopColor="#F2CC6B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}