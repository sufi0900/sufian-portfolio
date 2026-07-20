"use client";

import Link from "next/link";
import OptimizedImage from "@/app/blogs/[slug]/OptimizedImage";
import { ArrowUpRight, Calendar, Clock3, Sparkles } from "lucide-react";

const cleanReadTime = (readTime) => {
  if (!readTime) return "Deep read";
  return `${readTime} min`;
};

export default function InsightCard({
  publishedAt,
  mainImage,
  title,
  overview,
  readTime,
  slug,
  tags,
  category,
  featured = false,
}) {
  const categoryLabel = category || tags?.[0]?.name || "Article";
  const href = slug || "/blogs";

  return (
    <article
      className={`group relative min-w-0 overflow-hidden rounded-[28px] border border-[#e3b341]/[0.14] bg-[radial-gradient(420px_220px_at_18%_0%,rgba(227,179,65,0.08),transparent_72%),rgba(7,16,32,0.72)] shadow-[0_22px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-[18px] transition-all duration-200 before:pointer-events-none before:absolute before:left-[22px] before:right-[22px] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#f2cc6b]/[0.55] before:to-transparent before:opacity-70 hover:-translate-y-[5px] hover:border-[#e3b341]/30 hover:bg-[radial-gradient(460px_240px_at_18%_0%,rgba(227,179,65,0.12),transparent_72%),rgba(7,16,32,0.84)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.38),0_0_44px_rgba(227,179,65,0.08),inset_0_1px_0_rgba(255,255,255,0.055)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        featured
          ? "min-[920px]:grid min-[920px]:min-h-[380px] min-[920px]:grid-cols-[1.08fr_0.92fr] min-[920px]:col-span-2"
          : ""
      }`}
    >
      {/* MEDIA */}
      <Link
        href={href}
        aria-label={title}
        className={`block text-inherit no-underline ${featured ? "min-[920px]:h-full" : ""}`}
      >
        <div
          className={`relative h-[210px] overflow-hidden bg-[#030710] sm:h-[244px] ${
            featured ? "min-[920px]:h-full min-[920px]:min-h-[380px]" : ""
          }`}
        >
          {mainImage ? (
            <OptimizedImage
              src={mainImage}
              alt={title || "Sufian Mustafa insight"}
              width={1200}
              height={760}
              quality={86}
              priority={featured}
              sizes={
                featured
                  ? "(max-width: 920px) 100vw, 58vw"
                  : "(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 33vw"
              }
              className="h-full w-full scale-[1.01] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.065] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          ) : (
            <div className="grid h-full w-full place-items-center gap-2.5 bg-[radial-gradient(circle_at_32%_20%,rgba(227,179,65,0.18),transparent_42%),linear-gradient(135deg,#071020,#030710)] text-[#f2cc6b]">
              <Sparkles size={26} strokeWidth={1.8} />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em]">
                Sufian Mustafa
              </span>
            </div>
          )}

          {/* Category badge — replaces the old static "Insight" text */}
          <span className="absolute left-4 top-4 z-[3] inline-flex max-h-[31px] max-w-[calc(100%-32px)] items-center truncate rounded-full border border-[#e3b341]/[0.28] bg-[#050a18]/[0.58] px-[11px] py-[7px] text-[11px] font-extrabold leading-none tracking-[0.025em] text-[#f2cc6b] backdrop-blur-[16px]">
            {categoryLabel}
          </span>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030710]/[0.78] via-transparent via-[58%] to-transparent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(242,204,107,0.16),transparent_44%)]"
          />

          {/* Sheen sweep on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-[55%] bg-[linear-gradient(112deg,transparent_28%,rgba(255,255,255,0.08)_44%,rgba(242,204,107,0.16)_50%,transparent_64%)] opacity-0 transition-[opacity,transform] duration-700 group-hover:translate-x-[55%] group-hover:opacity-100 motion-reduce:hidden"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div
        className={`relative z-[2] p-[21px] sm:p-6 ${
          featured
            ? "min-[920px]:flex min-[920px]:flex-col min-[920px]:justify-center min-[920px]:border-l min-[920px]:border-[#e3b341]/[0.12] min-[920px]:p-9"
            : ""
        }`}
      >
        <div className="mb-[15px] flex flex-wrap items-center gap-2.5 text-[12px] font-bold leading-none text-[#ede9dc]/[0.48]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} strokeWidth={2.2} className="text-[#e3b341]" />
            {publishedAt || "Recently updated"}
          </span>
          <i className="h-[13px] w-px bg-[#ede9dc]/[0.13]" />
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={13} strokeWidth={2.2} className="text-[#e3b341]" />
            {cleanReadTime(readTime)}
          </span>
        </div>

        <Link href={href} className="outline-none no-underline">
          <h2
            className={`m-0 text-[clamp(1.18rem,2vw,1.48rem)] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#f7f1df] line-clamp-3 transition-colors duration-200 hover:text-[#fff4c7] hover:[text-shadow:0_0_18px_rgba(227,179,65,0.16)] ${
              featured ? "min-[920px]:line-clamp-4 min-[920px]:text-[clamp(1.75rem,3.4vw,2.65rem)] min-[920px]:leading-[1.02]" : ""
            }`}
          >
            {title}
          </h2>
        </Link>

        {/* Overview — hidden by default on desktop, revealed on hover.
            Always visible on touch/mobile since there is no hover there. */}
        {overview && (
          <div
            className={`overflow-hidden opacity-100 max-h-32 transition-[max-height,opacity] duration-300 ease-out sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-32 sm:group-hover:opacity-100 motion-reduce:sm:max-h-32 motion-reduce:sm:opacity-100 ${
              featured ? "min-[920px]:max-h-40 min-[920px]:opacity-100" : ""
            }`}
          >
            <p
              className={`pt-3.5 text-[14px] font-medium leading-[1.72] tracking-[-0.01em] text-[#ede9dc]/[0.58] line-clamp-3 ${
                featured ? "min-[920px]:line-clamp-4 min-[920px]:text-[15px]" : ""
              }`}
            >
              {overview}
            </p>
          </div>
        )}

        <Link
          href={href}
          className="group/action mt-[22px] inline-flex items-center gap-[7px] text-[13px] font-extrabold leading-none tracking-[-0.01em] text-[#f2cc6b] no-underline transition-colors duration-200 hover:text-[#fff4c7]"
        >
          Read Full Blog
          <ArrowUpRight
            size={15}
            strokeWidth={2.65}
            className="transition-transform duration-200 group-hover/action:-translate-y-[2px] group-hover/action:translate-x-[2px]"
          />
        </Link>
      </div>

      {/* Corner glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[92px] w-[92px] bg-[radial-gradient(circle_at_100%_100%,rgba(227,179,65,0.14),transparent_68%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </article>
  );
}