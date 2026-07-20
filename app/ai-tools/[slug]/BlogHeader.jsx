import React, { useMemo } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

/* Image-description Portable Text (logic unchanged; restyled marks/blocks) */
const ImgDescPortableText = React.memo(({ value }) => {
  const components = useMemo(() => ({
    block: {
      normal: ({ children }) => {
        const hasContent = children.some((child) =>
          typeof child === "string" ? child.trim() : true
        );
        if (!hasContent) return null;
        return (
          <p className="m-0 text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300 transition-colors duration-300">
            {children}
          </p>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        const isExternal = value.href && !value.href.startsWith("/");
        return (
          <a
            className="font-medium text-[#5271ff] dark:text-[#7c93ff] transition-all duration-300 break-words bg-gradient-to-r from-current to-current bg-[length:100%_1.5px] bg-no-repeat bg-[position:0_100%] hover:bg-[length:0_1.5px]"
            href={value.href}
            rel={isExternal ? "noreferrer noopener" : undefined}
            target={isExternal ? "_blank" : undefined}
          >
            {children}
          </a>
        );
      },
    },
  }), []);

  return <PortableText value={value} components={components} />;
});
ImgDescPortableText.displayName = "ImgDescPortableText";

/* Loading skeleton */
const LoadingSkeleton = React.memo(() => (
  <div className="w-full animate-pulse">
    <div className="mb-6 sm:mb-8">
      <div className="mb-4 h-8 w-3/4 rounded-lg bg-slate-200 dark:bg-slate-700 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
      <div className="h-1 w-16 rounded-full bg-slate-200 dark:bg-slate-700 sm:w-24" />
    </div>
    <div className="aspect-[16/9] rounded-2xl bg-slate-200 dark:bg-slate-700" />
  </div>
));
LoadingSkeleton.displayName = "LoadingSkeleton";

const ArticleHeader = ({ data }) => {
  const imageUrls = useMemo(() => {
    if (!data?.mainImage) return null;
    return {
      main: urlForImage(data.mainImage).quality(95).format("webp").auto("format").url(),
      blur: urlForImage(data.mainImage).width(20).height(11).blur(10).quality(20).format("webp").url(),
    };
  }, [data?.mainImage]);

  const hasImageDescription = useMemo(() => {
    if (!data?.mainImage?.imageDescription) return false;
    return data.mainImage.imageDescription.some((block) =>
      block.children?.some((child) => child.text && child.text.trim().length > 0)
    );
  }, [data?.mainImage?.imageDescription]);

  if (!data || !data.title || !data.mainImage) {
    return <LoadingSkeleton />;
  }

  return (
 
  <article className="w-full">
    <section className="w-full" aria-label="Article featured image">
      <div className="group relative isolate">
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[34px] bg-gradient-to-r from-[#5271ff]/20 via-[#a78bfa]/16 to-[#00D9FF]/16 opacity-80 blur-3xl transition-all duration-700 group-hover:scale-105" />

        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl">
          <figure className="relative">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1430]">
              <Image
                className="h-auto w-full object-contain transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.015]"
                src={imageUrls.main}
                alt={data.mainImage.alt || `Featured image for ${data.title}`}
                width={1200}
                height={675}
                priority
                quality={100}
                unoptimized
                placeholder="blur"
                blurDataURL={imageUrls.blur}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 980px"
              />
            </div>

            {hasImageDescription && (
              <figcaption className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-[#5271ff]/15 p-1.5">
                    <svg
                      className="h-3.5 w-3.5 text-[#8EA7FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <ImgDescPortableText value={data.mainImage.imageDescription} />
                  </div>
                </div>
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  </article>

  );
};

export default React.memo(ArticleHeader);