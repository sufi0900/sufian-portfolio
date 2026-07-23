/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { Providers } from "./providers";

import "../styles/index.css";
// import "../components/Hero/critical-hero.css"

import { useEffect, useState } from "react";
import { useOnlineStatus } from "./useOnlineStatus";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Hero from "@/components/Hero/index";
import Header from "@/components/Hero/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { CacheProvider } from "@/React_Query_Caching/CacheProvider";
import Script from "next/script";
import { AlertTriangle, XCircle } from "lucide-react";

// EVERYTHING else lazy-loaded
const ConditionalGlobalHeader = dynamic(
  () => import("@/components/Header/ConditionalGlobalHeader"),
  { ssr: false }
);

const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

const Toaster = dynamic(() => import("react-hot-toast").then((m) => m.Toaster), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isOnline = useOnlineStatus();

  const [hydrated, setHydrated] = useState(false);
  const [isOfflineRetrying, setIsOfflineRetrying] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);
  const [showConstructionBar, setShowConstructionBar] = useState(true);

  const handleOfflineRetry = () => {
    setIsOfflineRetrying(true);

    setTimeout(() => {
      setIsOfflineRetrying(false);

      if (navigator.onLine) {
        window.location.reload();
      }
    }, 1500);
  };

  useEffect(() => {
    setHydrated(true);

    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  useEffect(() => {
    const goOnline = () => {
      console.log("You are back online!");
    };

    const goOffline = () => {
      console.log("You are offline.");
    };

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href?.startsWith("/") || href.startsWith("//")) return;

      const staticPages = [
        "/about",
        "/skills",
        "/work",
        "/insights",
        "/faq",
        "/contact",
        "/privacy",
        "/terms",
        "/select-engagements",
      ];

      const normalizedHref = href.replace(/\/$/, "");
      const isStaticPage =
        staticPages.includes(href) || staticPages.includes(normalizedHref);

      if (isStaticPage) {
        setTimeout(() => {
          navigator.serviceWorker?.controller?.postMessage({
            type: "PRECACHE_STATIC_PAGE",
            path: href,
            url: window.location.origin + href,
          });
        }, 100);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (hydrated) {
      setRefreshCount((prevCount) => prevCount + 1);
    }
  }, [hydrated]);

  const cleanPathname = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  const isHomePage = cleanPathname === "/";

  // Remove the '/contact' string constraint out of this rule block
  const isSelectEngagementPage = cleanPathname === "/select-engagements";

  const isSlugPage =
    pathname.startsWith("/ai-tools/") ||
    pathname.startsWith("/ai-seo/") ||
    pathname.startsWith("/ai-code/") ||
    pathname.startsWith("/ai-learn-earn/") ||
    pathname.startsWith("/free-ai-resources/") ||
    (pathname.startsWith("/ai-news/") && pathname.split("/").length === 3);

  const shouldHidePortfolioNavbar = isHomePage || isSelectEngagementPage;
  const shouldShowSlugHeader = isSlugPage && !shouldHidePortfolioNavbar;
  const shouldShowPortfolioNavbar = !isSlugPage && !shouldHidePortfolioNavbar;
  const shouldAddTopPadding = shouldShowSlugHeader || shouldShowPortfolioNavbar;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="vodw9TgfqC4efMfrAO9xrw"
          strategy="afterInteractive"
        />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SHX78424XN"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SHX78424XN', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-[#f0fdfa] dark:bg-black`}>
        <noscript>JavaScript is required for this app to work properly.</noscript>

        {/* ENHANCED OFFLINE BAR */}
        {!isOnline && (
          <div className="fixed bottom-6 left-1/2 z-[1000] mx-4 w-full max-w-md -translate-x-1/2">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-[2px] shadow-2xl">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-75" />

              <div className="relative rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-4 dark:from-gray-800 dark:to-gray-900">
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 animate-ping rounded-full bg-orange-400 opacity-75" />

                      <div className="relative rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-2">
                        <svg
                          className="h-5 w-5 animate-pulse text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-gray-900 dark:text-gray-100">
                      <p className="text-base font-bold leading-tight">
                        🔌 You're Offline
                      </p>

                      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {refreshCount} components • Using cached content
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={handleOfflineRetry}
                      disabled={isOfflineRetrying}
                      className={`relative overflow-hidden rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ${
                        isOfflineRetrying
                          ? "cursor-not-allowed bg-gray-400 text-white"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                      }`}
                    >
                      {isOfflineRetrying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                          <svg
                            className="h-4 w-4 animate-spin text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />

                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </div>
                      )}

                      <div
                        className={`flex items-center space-x-2 transition-opacity duration-200 ${
                          isOfflineRetrying ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>

                        <span>Retry</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="mt-3 h-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full animate-pulse rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
                </div>
              </div>
            </div>
          </div>
        )}

        <Providers>
          {/* ADVANCED COORDINATED LAYOUT SYSTEM FOR TOP BAR */}
          {showConstructionBar && (
            <>
              <div 
                className={[
                  "bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 px-3 py-2 sm:px-4 sm:py-2.5 text-center text-[11px] sm:text-[12.5px] font-bold flex items-center justify-between shadow-sm backdrop-blur-md animate-fade-in",
                  isHomePage 
                    ? "relative z-[9999] rounded-xl mt-3 sm:mt-4 max-w-[calc(100%-24px)] sm:max-w-7xl mx-auto w-full" 
                    : "fixed top-0 left-0 right-0 w-full z-[10000] border-x-0 border-t-0 rounded-none"
                ].join(" ")}
              >
                <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2">
                  <AlertTriangle className="shrink-0 animate-pulse text-amber-500 w-[14px] h-[14px] sm:w-[15px] sm:h-[15px]" />
                  <span className="leading-tight sm:leading-normal">
                    {/* Desktop Text */}
                    <span className="hidden sm:inline">
                      Notice: This platform is running optimization cycles under live construction. Core models are being synchronized.
                    </span>
                    {/* Mobile Text: Kept short to prevent multiline wrapping and height expansion */}
                    <span className="sm:hidden">
                      Live optimization in progress. Core models syncing.
                    </span>
                  </span>
                </div>
                <button 
                  onClick={() => setShowConstructionBar(false)}
                  className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors ml-1 sm:ml-2 shrink-0 focus:outline-none"
                  aria-label="Dismiss notice"
                >
                  <XCircle className="w-4 h-4 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* AUTOMATED LAYOUT OVERRIDES WHEN THE BAR IS RENDERED ON SUBPAGES */}
              {!isHomePage && (
                <style>{`
                  /* Shift fixed navigation structures downward matching the bar size */
                  .pn-header {
                    top: 45px !important;
                  }
                  /* Shift the conditional global tracking header wrapper as well */
                  .fixed.top-0.left-0.w-full.z-40 {
                    top: 45px !important;
                  }
                  
                  /* SMART EXCEPTION: Balanced container normalization specifically calibrated for the contact grid */
                  ${pathname === '/contact' ? `
                    main {
                      padding-top: 45px !important;
                    }
                  ` : `
                    main {
                      padding-top: 135px !important;
                    }
                  `}

                  /* UPDATED: Slimmer offsets for mobile since the text no longer wraps onto multiple lines */
                  @media (max-width: 640px) {
                    .pn-header, .fixed.top-0.left-0.w-full.z-40 {
                      top: 36px !important;
                    }
                    
                    ${pathname === '/contact' ? `
                      main {
                        padding-top: 36px !important;
                      }
                    ` : `
                      main {
                        padding-top: 129px !important;
                      }
                    `}
                  }
                `}</style>
              )}
            </>
          )}

          {shouldShowSlugHeader ? (
            <ConditionalGlobalHeader />
          ) : shouldShowPortfolioNavbar ? (
            <Header />
          ) : null}

          {isHomePage && <Hero />}

          {hydrated && (
            <>
              <CacheProvider>
                <main className={shouldAddTopPadding && !showConstructionBar ? "pt-[80px]" : ""}>
                  {children}
                </main>

                <Footer />
                <ScrollToTop />
              </CacheProvider>

              <Toaster position="bottom-center" />
              <SpeedInsights />
              <Analytics />
            </>
          )}
        </Providers>
      </body>
    </html>
  );
}