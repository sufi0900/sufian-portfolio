import React, { useMemo, useState } from "react";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import OptimizedVideo from "@/app/blogs/[slug]/OptimizedVideo";
import OptimizedImage from "@/app/blogs/[slug]/OptimizedImage";
import { Rocket, Clipboard, Check } from "lucide-react";
import { CopyBlock, dracula } from "react-code-blocks";
import { getFileUrl } from "./sanityFileUrl";
import Link from "next/link";

const ACCENT = "#E3B341";

const slugify = (text = "") =>
  String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const extractText = (children) => {
  if (!children) return "";

  if (typeof children === "string") return children;

  if (Array.isArray(children)) {
    return children
      .map((child) => {
        if (typeof child === "string") return child;
        if (child?.props?.children) return extractText(child.props.children);
        return "";
      })
      .join("");
  }

  return "";
};

const InfoIcon = () => (
  <svg
    className="h-3.5 w-3.5 text-[#F2CC6B]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CodeBlockComponent = ({ code = "", language = "text" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-[24px] border border-[#E3B341]/15 bg-[#030710] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
      <div className="flex items-center justify-between border-b border-[#E3B341]/12 bg-[#E3B341]/[0.045] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E3B341] shadow-[0_0_14px_rgba(227,179,65,0.9)]" />
          <span className="text-xs font-[850] uppercase tracking-[0.16em] text-[#F2CC6B]">
            {language || "code"}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-[#E3B341]/18 bg-[#E3B341]/[0.055] px-3 py-1.5 text-xs font-[720] text-[#EDE9DC]/70 transition hover:border-[#E3B341]/42 hover:bg-[#E3B341]/10 hover:text-[#F7F1DF]"
        >
          {copied ? <Check size={14} /> : <Clipboard size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="overflow-x-auto text-sm">
        <CopyBlock
          text={code}
          language={language}
          showLineNumbers
          theme={dracula}
          wrapLines
          codeBlock
        />
      </div>
    </div>
  );
};

const CaptionPortableText = ({ value }) => {
  const components = useMemo(
    () => ({
      block: {
        normal: ({ children }) => {
          const hasContent = children?.some((child) =>
            typeof child === "string" ? child.trim() : true
          );

          if (!hasContent) return null;

          return (
            <p className="m-0 text-xs font-[560] leading-6 text-[#EDE9DC]/62 sm:text-sm">
              {children}
            </p>
          );
        },
      },

      marks: {
        strong: ({ children }) => (
          <strong className="font-[850] text-[#F7F1DF]">{children}</strong>
        ),

        em: ({ children }) => (
          <em className="italic text-[#EDE9DC]/76">{children}</em>
        ),

        code: ({ children }) => (
          <code className="rounded-md border border-[#E3B341]/16 bg-[#E3B341]/[0.07] px-1.5 py-0.5 font-mono text-[0.78em] text-[#F2CC6B]">
            {children}
          </code>
        ),

        link: ({ children, value }) => {
          const href = value?.href || "#";
          const isExternal = href.startsWith("http");

          return (
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
              className="font-[720] text-[#F2CC6B] underline decoration-[#E3B341]/45 underline-offset-4 transition hover:text-[#F7F1DF]"
            >
              {children}
            </a>
          );
        },
      },
    }),
    []
  );

  return <PortableText value={value} components={components} />;
};

const RichTableComponent = ({ value }) => {
  const caption = value?.caption;
  const rows = value?.rows || [];

  if (!rows.length) return null;

  return (
    <div className="my-8 overflow-hidden rounded-[26px] border border-[#E3B341]/15 bg-[#071020]/86 shadow-[0_24px_90px_rgba(0,0,0,0.36)] backdrop-blur-xl">
      {caption && (
        <div className="border-b border-[#E3B341]/12 bg-[#E3B341]/[0.045] px-5 py-4">
          <p className="text-center text-sm font-[850] uppercase tracking-[0.12em] text-[#F2CC6B] sm:text-base">
            {caption}
          </p>
        </div>
      )}

      <div className="relative overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-[#E3B341]/10 transition ${
                  rowIndex % 2 === 0
                    ? "bg-[#E3B341]/[0.025]"
                    : "bg-[#E3B341]/[0.045]"
                } hover:bg-[#E3B341]/10`}
              >
                {row.cells?.map((cell, cellIndex) => {
                  const isHeader = cell.isHeader;
                  const CellTag = isHeader ? "th" : "td";

                  return (
                    <CellTag
                      key={cellIndex}
                      scope={isHeader ? "row" : undefined}
                      className={`px-4 py-4 align-top leading-7 sm:px-5 ${
                        isHeader
                          ? "font-[850] text-[#F7F1DF]"
                          : "font-[560] text-[#EDE9DC]/68"
                      }`}
                    >
                      {cell.content ? (
                        <PortableText
                          value={cell.content}
                          components={{
                            block: {
                              normal: ({ children }) => <span>{children}</span>,
                            },

                            marks: {
                              strong: ({ children }) => (
                                <strong className="font-[850] text-[#F7F1DF]">
                                  {children}
                                </strong>
                              ),

                              em: ({ children }) => (
                                <em className="italic text-[#EDE9DC]/76">
                                  {children}
                                </em>
                              ),

                              code: ({ children }) => (
                                <code className="rounded-md border border-[#E3B341]/16 bg-[#E3B341]/[0.07] px-1.5 py-0.5 font-mono text-xs text-[#F2CC6B]">
                                  {children}
                                </code>
                              ),

                              link: ({ value, children }) => {
                                const href = value?.href || "#";
                                const isExternal = href.startsWith("http");

                                return (
                                  <Link
                                    href={href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={
                                      isExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                    className="font-[720] text-[#F2CC6B] underline decoration-[#E3B341]/45 underline-offset-4 transition hover:text-[#F7F1DF]"
                                  >
                                    {children}
                                  </Link>
                                );
                              },
                            },
                          }}
                        />
                      ) : (
                        <span className="text-xs italic text-[#EDE9DC]/25">
                          Empty
                        </span>
                      )}
                    </CellTag>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const VideoComponent = ({ value }) => {
  const videoUrl =
    value?.videoUrl ||
    value?.url ||
    value?.asset?.url ||
    (value?.file ? getFileUrl(value.file) : "");

  if (!videoUrl) return null;

  return (
    <div className="my-10">
      <div className="group relative">
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[34px] bg-gradient-to-r from-[#C9952C]/18 via-[#E3B341]/18 to-[#F2CC6B]/12 opacity-70 blur-3xl transition duration-700 group-hover:scale-105 group-hover:opacity-100" />

        <div className="rounded-[30px] border border-[#E3B341]/15 bg-[#E3B341]/[0.045] p-2 shadow-[0_30px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl">
          <div className="overflow-hidden rounded-[24px] border border-[#E3B341]/12 bg-[#030710]">
            <OptimizedVideo
              src={videoUrl}
              poster={value?.poster}
              title={value?.title || "Article video"}
            />
          </div>

          {value?.caption && (
            <div className="mt-4 rounded-2xl border border-[#E3B341]/14 bg-[#E3B341]/[0.045] px-4 py-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E3B341]/12">
                  <InfoIcon />
                </span>

                <p className="m-0 text-xs font-[560] leading-6 text-[#EDE9DC]/62 sm:text-sm">
                  {value.caption}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PortableTextComponents = () => {
  const portableTextComponents = {
    types: {
      code: ({ value }) => {
        const code = value?.code || value?.codeString || value?.source || "";
        const language = (value?.language || value?.lang || "text").toLowerCase();

        return <CodeBlockComponent code={code} language={language} />;
      },

      video: VideoComponent,

      image: ({ value, index }) => {
        const imageUrl = value?.asset
          ? urlForImage(value.asset).url()
          : "/fallback-image-url.png";

        const isPriority = index < 3;

        const blurDataURL = value?.asset
          ? urlForImage(value.asset).width(20).height(20).blur(10).url()
          : undefined;

        return (
          <div className="my-10 w-full">
            <div className="group relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[34px] bg-gradient-to-r from-[#C9952C]/18 via-[#E3B341]/18 to-[#F2CC6B]/12 opacity-70 blur-3xl transition duration-700 group-hover:scale-105 group-hover:opacity-100" />

              <div className="rounded-[30px] border border-[#E3B341]/15 bg-[#E3B341]/[0.045] p-2 shadow-[0_30px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                <figure className="relative">
                  <div className="relative overflow-hidden rounded-[24px] border border-[#E3B341]/12 bg-[#030710]">
                    <OptimizedImage
                      src={imageUrl}
                      alt={value.alt || "Article image"}
                      className="h-auto w-full rounded-[24px] object-contain transition duration-700 ease-out group-hover:scale-[1.012]"
                      priority={isPriority}
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 920px"
                      width={1200}
                      height={675}
                      quality={90}
                      enableModal
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>

                  {value.imageDescription && (
                    <figcaption className="mt-4 rounded-2xl border border-[#E3B341]/14 bg-[#E3B341]/[0.045] px-4 py-3 backdrop-blur-xl">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E3B341]/12">
                          <InfoIcon />
                        </span>

                        <div className="min-w-0 flex-1">
                          <CaptionPortableText value={value.imageDescription} />
                        </div>
                      </div>
                    </figcaption>
                  )}
                </figure>
              </div>
            </div>
          </div>
        );
      },

      richTable: RichTableComponent,
    },

    block: {
      normal: ({ children }) => (
        <p className="customanchor mb-5 text-[1.04rem] font-[560] leading-[1.92] text-[#EDE9DC]/68 transition-colors duration-300 hover:text-[#EDE9DC]/82 sm:text-[1.08rem]">
          {children}
        </p>
      ),

      h1: ({ children }) => {
        const id = slugify(extractText(children));

        return (
          <h1
            id={id}
            className="scroll-mt-28 mb-6 mt-12 text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[#F7F1DF] sm:text-5xl"
          >
            {children}
          </h1>
        );
      },

      h2: ({ children }) => {
        const id = slugify(extractText(children));

        return (
          <h2
            id={id}
            className="group scroll-mt-28 mb-5 mt-12 border-t border-[#E3B341]/12 pt-8 text-3xl font-black leading-[1.12] tracking-[-0.045em] text-[#F7F1DF] sm:text-4xl"
          >
            <span className="mr-3 inline-block h-3 w-3 rounded-full bg-[#E3B341] align-middle shadow-[0_0_18px_rgba(227,179,65,0.9)]" />

            <span className="bg-gradient-to-br from-[#FFFFFF] via-[#F7F1DF] to-[#E3B341] bg-clip-text text-transparent">
              {children}
            </span>
          </h2>
        );
      },

      h3: ({ children }) => {
        const id = slugify(extractText(children));

        return (
          <h3
            id={id}
            className="scroll-mt-28 mb-4 mt-9 text-2xl font-black leading-[1.18] tracking-[-0.035em] text-[#F2CC6B] sm:text-3xl"
          >
            {children}
          </h3>
        );
      },

      h4: ({ children }) => {
        const id = slugify(extractText(children));

        return (
          <h4
            id={id}
            className="scroll-mt-28 mb-3 mt-7 text-xl font-[850] leading-snug text-[#F7F1DF]/90 sm:text-2xl"
          >
            {children}
          </h4>
        );
      },

      h5: ({ children }) => {
        const id = slugify(extractText(children));

        return (
          <h5
            id={id}
            className="scroll-mt-28 mb-3 mt-6 text-base font-black uppercase tracking-[0.12em] text-[#E3B341]"
          >
            {children}
          </h5>
        );
      },

      h6: ({ children }) => (
        <div className="my-8 overflow-hidden rounded-[26px] border border-[#E3B341]/24 bg-[#E3B341]/10 p-6 shadow-[0_24px_80px_rgba(227,179,65,0.10)]">
          <p className="m-0 text-center text-lg font-[720] leading-8 text-[#F7F1DF]">
            {children}
          </p>
        </div>
      ),

      blockquote: ({ children }) => (
        <blockquote className="my-8 rounded-[26px] border-l-4 border-[#E3B341] bg-[#E3B341]/[0.055] px-6 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.26)]">
          <div className="text-lg font-[650] leading-8 text-[#EDE9DC]/78">
            {children}
          </div>
        </blockquote>
      ),
    },

    list: {
      bullet: ({ children }) => (
        <ul className="my-7 space-y-3 rounded-[26px] border border-[#E3B341]/13 bg-[#E3B341]/[0.035] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] sm:p-6">
          {children}
        </ul>
      ),

      number: ({ children }) => (
        <ol className="my-7 list-none space-y-3 rounded-[26px] border border-[#E3B341]/13 bg-[#E3B341]/[0.035] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] sm:p-6">
          {children}
        </ol>
      ),
    },

    listItem: {
      bullet: ({ children }) => (
        <li className="relative pl-7 text-[1.02rem] font-[560] leading-8 text-[#EDE9DC]/70 before:absolute before:left-0 before:top-[0.78rem] before:h-2 before:w-2 before:rounded-full before:bg-[#E3B341] before:shadow-[0_0_14px_rgba(227,179,65,0.85)]">
          {children}
        </li>
      ),

      number: ({ children, index }) => (
        <li className="relative flex gap-4 text-[1.02rem] font-[560] leading-8 text-[#EDE9DC]/70">
          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-[#E3B341]/30 bg-[#E3B341]/10 text-xs font-black text-[#F2CC6B]">
            {String((index || 0) + 1).padStart(2, "0")}
          </span>

          <span className="customanchor min-w-0">{children}</span>
        </li>
      ),
    },

    marks: {
      code: ({ children }) => (
        <code className="rounded-md border border-[#E3B341]/16 bg-[#E3B341]/[0.07] px-1.5 py-0.5 font-mono text-[0.86em] font-semibold text-[#F2CC6B]">
          {children}
        </code>
      ),

      strong: ({ children }) => (
        <strong className="font-[850] text-[#F7F1DF]">{children}</strong>
      ),

      em: ({ children }) => (
        <em className="italic text-[#EDE9DC]/78">{children}</em>
      ),

      link: ({ children, value }) => {
        const href = value?.href || "#";
        const isExternal = href.startsWith("http");

        return (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer noopener" : undefined}
            className="customanchor-link font-[720] text-[#F2CC6B] underline decoration-[#E3B341]/45 decoration-[1.5px] underline-offset-4 transition hover:text-[#F7F1DF] hover:decoration-[#F2CC6B]/70"
          >
            {children}
          </a>
        );
      },
    },

    button: ({ value }) => {
      const { text, link } = value || {};

      if (!text || !link) return null;

      return (
        <div className="my-8 flex justify-center">
          <a
            href={link}
            className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-2xl border border-[#E3B341]/40 bg-gradient-to-r from-[#F2CC6B] via-[#E3B341] to-[#C9952C] px-7 py-4 text-base font-black text-[#2E2106] shadow-[0_22px_60px_rgba(227,179,65,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(227,179,65,0.38)] sm:w-auto"
            aria-label={text}
            itemProp="url"
          >
            <span>{text}</span>
            <Rocket className="ml-2 h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
          </a>
        </div>
      );
    },
  };

  return portableTextComponents;
};

export default PortableTextComponents;