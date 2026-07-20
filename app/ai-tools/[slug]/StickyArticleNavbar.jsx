"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, BookOpen, CheckCircle, Clock } from "lucide-react";

const StickyArticleNavbar = ({ articleTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateArticleProgress = () => {
      const articleElement = document.querySelector(".article-content");

      if (!articleElement) return;

      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const windowHeight = window.innerHeight;

      const articleTop =
        articleElement.getBoundingClientRect().top + scrollTop;

      const articleHeight = articleElement.offsetHeight;

      const articleBottom = articleTop + articleHeight;

      const totalReadableHeight =
        articleBottom - articleTop - windowHeight;

      let calculatedProgress =
        ((scrollTop - articleTop + windowHeight * 0.5) /
          totalReadableHeight) *
        100;

      calculatedProgress = Math.max(
        0,
        Math.min(100, calculatedProgress)
      );

      setProgress(Math.round(calculatedProgress));

      setIsVisible(scrollTop > articleTop - 160);
    };

    calculateArticleProgress();

    window.addEventListener("scroll", calculateArticleProgress, {
      passive: true,
    });

    window.addEventListener("resize", calculateArticleProgress);

    return () => {
      window.removeEventListener("scroll", calculateArticleProgress);
      window.removeEventListener("resize", calculateArticleProgress);
    };
  }, []);

  const scrollToTop = () => {
    const articleElement = document.querySelector(".article-content");

    if (articleElement) {
      const articleTop =
        articleElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, articleTop - 120),
        behavior: "smooth",
      });

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isComplete = progress >= 100;

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[45] transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mt-3 overflow-hidden rounded-[24px] border border-white/5 bg-[#0A0F1E]/90 shadow-[0_24px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="relative">
            {/* Soft, premium radial glow tracking the gold accents from image_eba49b.png */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(227,179,65,0.08),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(254,243,199,0.03),transparent_30%)]" />

            <div className="relative flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl border sm:flex transition-all duration-300 ${
                    isComplete
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                      : "border-[#E3B341]/20 bg-[#E3B341]/5 text-[#E3B341] shadow-[0_0_24px_rgba(227,179,65,0.1)]"
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle size={18} />
                  ) : (
                    <BookOpen size={18} />
                  )}
                </span>

                <div className="min-w-0">
                  <p className="hidden text-[10px] font-black uppercase tracking-[0.18em] text-[#E3B341] sm:block">
                    {isComplete ? "Article completed" : "Reading now"}
                  </p>

                  <h2 className="truncate text-sm font-bold tracking-tight text-[#EDE9DC] sm:text-base">
                    {articleTitle || "Article"}
                  </h2>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <div
                  className={`hidden items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold sm:inline-flex ${
                    isComplete
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                      : "border-white/5 bg-white/[0.03] text-[#EDE9DC]/60"
                  }`}
                >
                  <Clock
                    size={14}
                    className={
                      isComplete ? "text-emerald-400" : "text-[#E3B341]"
                    }
                  />
                  {progress}%
                </div>

                <Link
                  href="/"
                  className="hidden rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-xs font-bold text-[#EDE9DC]/70 transition duration-200 hover:border-[#E3B341]/30 hover:bg-[#E3B341]/10 hover:text-white md:inline-flex"
                >
                  Home
                </Link>

                <button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Scroll to article top"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E3B341]/25 bg-[#E3B341]/5 text-[#E3B341] shadow-[0_0_20px_rgba(227,179,65,0.08)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E3B341]/15 hover:text-white"
                >
                  <ArrowUp size={17} />
                </button>
              </div>
            </div>

            {/* Seamless custom tracking indicator line */}
            <div className="h-[2.5px] w-full bg-white/[0.04]">
              <div
                className={`h-full rounded-r-full transition-[width] duration-150 ${
                  isComplete
                    ? "bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    : "bg-gradient-to-r from-[#C9952C] via-[#E3B341] to-[#F2CC6B] shadow-[0_0_14px_rgba(227,179,65,0.6)]"
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyArticleNavbar;