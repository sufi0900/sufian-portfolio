"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  lazy,
  Suspense,
} from "react";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import {
  AccessTime,
  CalendarMonthOutlined,
} from "@mui/icons-material";

import FeatureImg from "./BlogHeader";
import TableOfContents from "./TableOfContents";
import TagsAndShare from "./TagsAndShare";
import PortableTextComponents from "./createPortableTextComponents";
import AuthorBioCard from "./AuthorBioCard";
import StickyArticleNavbar from "./StickyArticleNavbar";
// import ReadingProgressCircle from "@/app/ai-seo/[slug]/ReadingProgressCircle";
import { ChevronRight } from "lucide-react"; // Optional: for cleaner separator icons
const FAQSection = lazy(() => import("./FAQSection"));
const RelatedPostsSection = lazy(() => import("./RelatedPostsSection"));
const RelatedResources = lazy(() => import("@/app/free-ai-resources/RelatedResources"));
const BlogSidebar = lazy(() => import("./BlogSidebar"));
const RecentPost = lazy(() => import("@/components/RecentPost/RecentHome"));
const CommentSection = lazy(() => import("./CommentSection"));

// Premium Editorial Skeleton Loader
const ComponentSkeleton = ({ height = "220px", className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-[24px] border border-[#E3B341]/10 bg-white/[0.02] ${className}`}
    style={{ height }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E3B341]/[0.04] to-transparent animate-pulse" />
    <div className="relative p-6 space-y-4">
      <div className="h-3.5 w-3/4 rounded-full bg-white/5" />
      <div className="h-3.5 w-1/2 rounded-full bg-white/5" />
      <div className="h-3.5 w-2/3 rounded-full bg-white/5" />
    </div>
  </div>
);

const SmartShimmer = ({ isLoading, children, fallback, delay = 0 }) => {
  const [showFallback, setShowFallback] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowFallback(false), delay);
      return () => clearTimeout(timer);
    }
    setShowFallback(true);
  }, [isLoading, delay]);

  if (showFallback) return fallback;
  return children;
};

const useDeviceSize = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isLargeDevice;
};

const getCategoryName = (type) => {
  if (type === "aitool") return "AI Tools";
  if (type === "makemoney") return "AI Learn & Earn";
  if (type === "coding") return "AI Code";
  if (type === "seo") return "AI SEO";
  if (type === "freeairesources") return "Free AI Resources";
  return "Insights";
};

const getCategoryHref = (type, schemaSlugMap = {}) => {
  const mapped = schemaSlugMap?.[type];
  if (!mapped) return "/articles";
  if (mapped === "ai-learn-earn") return "/ai-learn-earn";
  return `/${mapped}`;
};

const formatDate = (date) => {
  if (!date) return "Recently updated";
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const BlogLayout = ({
  data,
  loading,
  relatedPosts,
  relatedPostsLoading,
  relatedResources,
  resourcesLoading,
  schemaSlugMap = {},
  imgdesc,
}) => {
  const [showGlobalHeader, setShowGlobalHeader] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [loadStage, setLoadStage] = useState(1);
  const [contentReady, setContentReady] = useState(!!data);
  const [layoutReady, setLayoutReady] = useState(false);

  const isLargeDevice = useDeviceSize();

  const portableTextComponents = useMemo(() => {
    const components = PortableTextComponents();
    components.types.button = components.button;
    return components;
  }, []);

  useEffect(() => {
    setMounted(true);
    setLayoutReady(true);

    if (data && !loading) {
      setContentReady(true);
    }

    const handleScroll = () => {
      setShowGlobalHeader(window.scrollY <= 100);
    };

    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    const handleLoad = () => {
      const savedPosition = sessionStorage.getItem("scrollPosition");
      if (savedPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
          sessionStorage.removeItem("scrollPosition");
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", handleLoad);

    const loadTimer1 = setTimeout(() => setLoadStage(2), 10);
    const loadTimer2 = setTimeout(() => setLoadStage(3), 50);
    const loadTimer3 = setTimeout(() => setLoadStage(4), 100);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("load", handleLoad);
      clearTimeout(loadTimer1);
      clearTimeout(loadTimer2);
      clearTimeout(loadTimer3);
    };
  }, [data, loading]);

  const breadcrumbData = useMemo(() => {
    const categoryType = data?._type || "default";
    const title = data?.title || "";

    return {
      homeHref: "/",
      categoryHref: getCategoryHref(categoryType, schemaSlugMap),
      categoryName: getCategoryName(categoryType),
      title: title.length > 58 ? `${title.substring(0, 58)}...` : title,
    };
  }, [data, schemaSlugMap]);

  if (!layoutReady || (!data && loading)) {
    return (
      <main className="min-h-screen bg-[#050a18] text-[#EDE9DC]">
        <section className="relative overflow-hidden px-4 py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(227,179,65,0.12),transparent_45%),linear-gradient(180deg,#050a18,#0a0f1e)]" />

          <div className="relative mx-auto flex min-h-[55vh] max-w-4xl items-center justify-center">
            <div className="w-full rounded-[32px] border border-[#E3B341]/15 bg-[#0a0f1e]/60 p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-2 border-white/5 border-t-[#E3B341]" />
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#E3B341]">
                Preparing System Insight
              </p>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#EDE9DC]">
                Loading elite experience...
              </h1>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen bg-[#050a18] px-4 py-28 text-[#EDE9DC]">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-[#E3B341]/15 bg-[#0a0f1e]/60 p-8 text-center backdrop-blur-xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#E3B341]">
            Protocol Interrupted
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white">
            This insight could not be located.
          </h1>
          <Link
            href="/"
            className="mt-7 inline-flex rounded-xl bg-[#E3B341] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#2E2106] shadow-[0_18px_45px_rgba(227,179,65,0.2)] transition hover:translate-y-[-2px]"
          >
            Return to Core Shell
          </Link>
        </div>
      </main>
    );
  }

  const currentPostId = data?._id;
  const currentPostType = data?._type;
  const publishedDate = formatDate(data?.publishedAt);
  const readMinutes = data?.readTime?.minutes || data?.readTime || null;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050a18] text-[#EDE9DC]">
      {/* Structural Global Styles for Isolated High-End Typography */}
      <style dangerouslySetInnerHTML={{ __html: `
        .article-content {
          font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
          font-size: 17px;
          line-height: 1.85;
          color: rgba(237, 233, 220, 0.84);
          letter-spacing: -0.01em;
        }
        .article-content p {
          margin-bottom: 1.75rem;
        }
        .article-content h2 {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #white;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .article-content h2::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 24px;
          background-color: #E3B341;
          border-radius: 2px;
        }
        .article-content h3 {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #EDE9DC;
          margin-top: 2.25rem;
          margin-bottom: 1rem;
        }
        .article-content a {
          color: #E3B341;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px dashed rgba(227, 179, 65, 0.4);
          transition: all 0.2s ease;
        }
        .article-content a:hover {
          color: #white;
          border-bottom-color: #E3B341;
          background: rgba(227, 179, 65, 0.05);
        }
        .article-content strong {
          color: #white;
          font-weight: 800;
        }
        .article-content blockquote {
          margin: 2.5rem 0;
          padding: 1.5rem 2rem;
          background: rgba(227, 179, 65, 0.03);
          border-left: 3px solid #E3B341;
          border-radius: 0 16px 16px 0;
          font-style: italic;
          color: #EDE9DC;
        }
        .article-content blockquote p {
          margin-bottom: 0;
        }
        .article-content ul, .article-content ol {
          margin-bottom: 1.75rem;
          padding-left: 1.5rem;
        }
       
        .article-content code {
          font-family: monospace;
          background: rgba(255, 255, 255, 0.06);
          padding: 0.2rem 0.4rem;
          border-radius: 6px;
          font-size: 14.5px;
          color: #F2CC6B;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .article-content pre {
          background: #0a0f1e !important;
          border: 1px solid rgba(227, 179, 65, 0.15);
          padding: 1.5rem;
          border-radius: 16px;
          overflow-x: auto;
          margin-bottom: 2rem;
        }
        .article-content pre code {
          background: transparent;
          padding: 0;
          border: none;
          color: #EDE9DC;
        }
      `}} />

      {/* Ambient Canvas Background Geometry */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(227,179,65,0.08),transparent_35%),radial-gradient(circle_at_82%_12%,rgba(227,179,65,0.04),transparent_30%),linear-gradient(180deg,#050a18_0%,#0a0f1e_48%,#050a18_100%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(227,179,65,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(227,179,65,0.15)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#E3B341]/5 blur-[120px]" />
      </div>

      <section
        className={`relative z-10 pb-[120px] transition-all duration-500 ease-out ${
          mounted && showGlobalHeader ? "pt-[34px]" : "pt-[10px]"
        }`}
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          
      <nav
            aria-label="Breadcrumb"
            className="mb-7 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl"
          >
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/55">
              <li>
                <Link href={breadcrumbData.homeHref} className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li className="text-white/25">/</li>
              <li>
                <Link
                  href={breadcrumbData.categoryHref}
                  className="text-[#E3B341] transition hover:text-[#F2CC6B]"
                >
                  {breadcrumbData.categoryName}
                </Link>
              </li>
              <li className="text-white/25">/</li>
              <li className="max-w-full truncate text-white/45">
                {breadcrumbData.title}
              </li>
            </ol>
          </nav>

          <article id="main-content">
            <header className="mx-auto max-w-[920px] text-center mt-12 mb-10">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E3B341]/20 bg-[#E3B341]/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#E3B341]">
                <span className="h-2 w-2 rounded-full bg-[#E3B341] shadow-[0_0_12px_rgba(227,179,65,0.8)]" />
                SUFIAN MUSTAFA AUTHORITY PLATFORM
              </div>

              <h1 className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {data?.title}
              </h1>

              {data?.excerpt && (
                <p className="mx-auto mt-6 max-w-3xl text-[16.5px] leading-relaxed text-[#EDE9DC]/60 font-medium">
                  {data.excerpt}
                </p>
              )}

              {/* Verified Author Blueprint Module */}
              <div className="mx-auto mt-8 flex max-w-[760px] flex-col gap-4 rounded-[24px] border border-white/5 bg-[#0a0f1e]/60 p-4 text-left shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <Link
                    href="/author/sufian-mustafa"
                    className="group relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[#E3B341]/30 bg-[#050a18] shadow-[0_0_24px_rgba(227,179,65,0.08)]"
                  >
                    <Image
                      src="/sufian-mustafa-founder-doitwithaitools.png"
                      alt="Sufian Mustafa"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      priority
                    />
                    <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[#0a0f1e] bg-emerald-500" />
                  </Link>

                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/30">
                      Systems Architect
                    </p>
                    <Link
                      href="/author/sufian-mustafa"
                      className="mt-0.5 block truncate text-sm font-black text-[#EDE9DC] transition hover:text-[#E3B341]"
                    >
                      Sufian Mustafa
                    </Link>
                    <p className="mt-0.5 text-xs font-semibold text-[#EDE9DC]/40">
                      Full-Stack Dev · AI SEO Strategist
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-bold text-[#EDE9DC]/70">
                    <CalendarMonthOutlined className="!h-4 !w-4 text-[#E3B341]" />
                    {publishedDate}
                  </div>

                  {readMinutes && (
                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-bold text-[#EDE9DC]/70">
                      <AccessTime className="!h-4 !w-4 text-[#E3B341]" />
                      {readMinutes} min read
                    </div>
                  )}
                </div>
              </div>
            </header>

            <div className="mx-auto mt-10 max-w-[980px]">
              <FeatureImg data={data} imgdesc={imgdesc} />
            </div>

            <StickyArticleNavbar articleTitle={data?.title} />
            {/* <ReadingProgressCircle /> */}

            {loading && contentReady && (
              <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center rounded-xl border border-[#E3B341]/20 bg-[#E3B341]/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#E3B341]">
                <span className="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-[#E3B341]" />
                Refreshing system pipeline...
              </div>
            )}

            {/* Main Publication Plate */}
            <div className="mx-auto mt-10 max-w-[1000px]">
              <div className="overflow-hidden rounded-[34px] border border-[#E3B341]/10 bg-[#0a0f1e]/90 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                
                <div className="border-b border-white/5 bg-white/[0.01] px-6 py-5 sm:px-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#E3B341]">
                        Technical Documentation Body
                      </p>
                      <p className="mt-0.5 text-xs text-[#EDE9DC]/40 font-medium">
                        Optimized for systemized reading, corporate authority, and logic flows.
                      </p>
                    </div>

                    <div className="rounded-full border border-[#E3B341]/20 bg-[#E3B341]/5 px-4 py-1.5 text-xs font-bold text-[#E3B341] uppercase tracking-wider">
                      {breadcrumbData.categoryName}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8 lg:px-10">
                  <TableOfContents tableOfContents={data.tableOfContents} />

                  <div className="article-content mt-8 border-t border-white/5 pt-8">
                    <PortableText
                      value={data.content}
                      components={portableTextComponents}
                    />
                  </div>

                  <div className="mt-10 border-t border-white/5 pt-8">
                    <SmartShimmer
                      isLoading={loadStage < 4}
                      fallback={<ComponentSkeleton height="300px" />}
                      delay={100}
                    >
                      <Suspense fallback={<ComponentSkeleton height="300px" />}>
                        <FAQSection faqs={data.faqs} />
                      </Suspense>

                      <div className="mt-8">
                        <AuthorBioCard />
                      </div>
                    </SmartShimmer>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <TagsAndShare tags={data.tags} />
              </div>

              <div className="mt-8">
                <SmartShimmer
                  isLoading={loadStage < 4}
                  fallback={<ComponentSkeleton height="520px" />}
                  delay={200}
                >
                  <Suspense fallback={<ComponentSkeleton height="520px" />}>
                    <CommentSection
                      articleId={data?._id}
                      articleSlug={data?.slug?.current}
                      articleType={data?._type}
                      articleTitle={data?.title}
                    />
                  </Suspense>
                </SmartShimmer>
              </div>
            </div>
          </article>

          {/* Core Sidebar Configurations */}
          {isLargeDevice && (
            <section className="mx-auto mt-14 max-w-[1180px]">
              <SmartShimmer
                isLoading={loadStage < 2}
                fallback={<ComponentSkeleton height="460px" />}
                delay={100}
              >
                <Suspense fallback={<ComponentSkeleton height="460px" />}>
                  {/* <BlogSidebar
                    relatedPosts={relatedPosts}
                    relatedPostsLoading={relatedPostsLoading}
                    relatedResources={relatedResources}
                    resourcesLoading={resourcesLoading}
                    schemaSlugMap={schemaSlugMap}
                    currentPostId={currentPostId}
                    currentPostType={currentPostType}
                    variant="wide"
                  /> */}
                </Suspense>
              </SmartShimmer>
            </section>
          )}

          {/* Bottom Resource Links Grid */}
          <section className="mx-auto mt-14 max-w-[1180px] space-y-10">
            <SmartShimmer
              isLoading={loadStage < 3 || resourcesLoading}
              fallback={<ComponentSkeleton height="420px" />}
              delay={150}
            >
              <Suspense fallback={<ComponentSkeleton height="420px" />}>
                {/* <RelatedResources
                  resources={relatedResources}
                  isLoading={resourcesLoading}
                  slidesToShow={3}
                /> */}
              </Suspense>
            </SmartShimmer>

            <SmartShimmer
              isLoading={loadStage < 3 || relatedPostsLoading}
              fallback={<ComponentSkeleton height="520px" />}
              delay={150}
            >
              <Suspense fallback={<ComponentSkeleton height="520px" />}>
                {/* <RelatedPostsSection
                  relatedPosts={relatedPosts}
                  loading={relatedPostsLoading}
                  schemaSlugMap={schemaSlugMap}
                  articleSchemaType={data?._type}
                /> */}
              </Suspense>
            </SmartShimmer>

            <div className="border-t border-white/5 pt-10">
              <SmartShimmer
                isLoading={loadStage < 4}
                fallback={<ComponentSkeleton height="420px" />}
                delay={200}
              >
                <Suspense fallback={<ComponentSkeleton height="420px" />}>
                  {/* <RecentPost /> */}
                </Suspense>
              </SmartShimmer>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
};

export default BlogLayout;