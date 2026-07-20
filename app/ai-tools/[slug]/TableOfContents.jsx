"use client";

import React, { useState, useMemo } from "react";
import {
  ExpandMore,
  ExpandLess,
  FormatListBulleted,
} from "@mui/icons-material";

const TableOfContents = ({ tableOfContents }) => {
  const [isOpen, setIsOpen] = useState(true);

  const items = useMemo(() => {
    if (!tableOfContents || tableOfContents.length === 0) return [];
    return tableOfContents;
  }, [tableOfContents]);

  if (!items.length) return null;

  const generateAnchor = (text = "") => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const totalSubheadings = items.reduce(
    (total, item) => total + (item.subheadings?.length || 0),
    0
  );

  return (
    <section className="mb-8 overflow-hidden rounded-[28px] border border-white/5 bg-[#0A0F1E]/85 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex w-full items-center justify-between gap-4 border-b border-white/5 bg-white/[0.015] px-5 py-5 text-left transition hover:bg-white/[0.035] sm:px-6"
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E3B341]/25 bg-[#E3B341]/5 text-[#E3B341] shadow-[0_0_24px_rgba(227,179,65,0.08)] transition duration-200 group-hover:scale-105">
            <FormatListBulleted className="!h-5 !w-5" />
          </span>

          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E3B341]">
              Reading Map
            </p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Table of Contents
            </h2>
            <p className="mt-1 text-sm text-[#EDE9DC]/50">
              {items.length} main sections
              {totalSubheadings > 0 ? ` · ${totalSubheadings} sub-sections` : ""}
            </p>
          </div>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] text-[#EDE9DC]/70 transition duration-200 group-hover:border-[#E3B341]/30 group-hover:text-white">
          {isOpen ? (
            <ExpandLess className="!h-5 !w-5" />
          ) : (
            <ExpandMore className="!h-5 !w-5" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative p-5 sm:p-6">
            {/* Elegant vertical roadmap tracking bar line */}
            <div className="pointer-events-none absolute left-8 top-6 bottom-6 hidden w-px bg-gradient-to-b from-[#E3B341]/0 via-[#E3B341]/30 to-[#E3B341]/0 sm:block" />

            <ol className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="relative">
                  <a
                    href={`#${generateAnchor(item.heading)}`}
                    className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.015] p-3 transition duration-200 hover:border-[#E3B341]/30 hover:bg-[#E3B341]/5 hover:shadow-[0_0_32px_rgba(227,179,65,0.06)] sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#E3B341]/20 bg-[#E3B341]/5 text-xs font-bold text-[#E3B341]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-6 text-[#EDE9DC]/90 transition duration-150 group-hover:text-white sm:text-base">
                        {item.heading}
                      </span>

                      {item.subheadings && item.subheadings.length > 0 && (
                        <span className="mt-1 block text-xs font-medium text-[#EDE9DC]/40">
                          {item.subheadings.length} supporting point
                          {item.subheadings.length > 1 ? "s" : ""}
                        </span>
                      )}
                    </span>

                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#E3B341] opacity-45 shadow-[0_0_14px_rgba(227,179,65,0.6)] transition duration-150 group-hover:opacity-100" />
                  </a>

                  {item.subheadings && item.subheadings.length > 0 && (
                    <ul className="ml-5 mt-3 space-y-2 border-l border-[#E3B341]/15 pl-4 sm:ml-8 sm:pl-5">
                      {item.subheadings.map((subheadingObj, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={`#${generateAnchor(subheadingObj.subheading)}`}
                            className="group flex items-start gap-3 rounded-xl px-3 py-2 text-sm font-medium leading-6 text-[#EDE9DC]/60 transition duration-150 hover:bg-white/[0.025] hover:text-[#EDE9DC]"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/10 transition duration-150 group-hover:bg-[#E3B341] group-hover:shadow-[0_0_12px_rgba(227,179,65,0.8)]" />
                            <span className="border-b border-transparent transition duration-150 group-hover:text-white">
                              {subheadingObj.subheading}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;