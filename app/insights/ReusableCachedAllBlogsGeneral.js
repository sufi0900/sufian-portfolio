"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { CACHE_KEYS } from "@/React_Query_Caching/cacheKeys";
import { usePageCache } from "@/React_Query_Caching/usePageCache";
import { cacheSystem } from "@/React_Query_Caching/cacheSystem";
import { useUnifiedCache } from "@/React_Query_Caching/useUnifiedCache";
import InsightCard from "./InsightCard";

const DEFAULT_CATEGORY_LABELS = {
  aitool: "AI Systems",
  seo: "AI Search",
  coding: "Engineering",
  makemoney: "Growth Strategy",
};

const getInsightHref = (post) => {
  const slug = post?.slug?.current || post?.slug;
  return slug ? `/insights/${slug}` : "/insights";
};

const getImageUrl = (image) => {
  if (!image) return "";
  if (typeof image === "string") return image;

  try {
    return urlForImage(image)
      .width(1200)
      .height(760)
      .fit("crop")
      .auto("format")
      .url();
  } catch {
    return "";
  }
};

const formatPostDate = (date) => {
  if (!date) return "Recently updated";

  try {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recently updated";
  }
};

const InsightSkeleton = ({ featured = false }) => (
  <div className={`ig-skeleton ${featured ? "ig-skeleton--featured" : ""}`}>
    <div className="ig-skeleton-media" />
    <div className="ig-skeleton-body">
      <span />
      <strong />
      <p />
      <p />
      <i />
    </div>
  </div>
);

export default function ReusableCachedInsightsGrid({
  currentPage = 1,
  limit = 12,
  selectedCategory = "all",
  sortBy = "publishedAt desc",
  onDataLoad,
  initialPageData = null,
  initialTotalCount = null,
  categoryDisplayNames = DEFAULT_CATEGORY_LABELS,
}) {
  const [paginationStaleWarning, setPaginationStaleWarning] = useState(false);
  const [filterChangeDetected, setFilterChangeDetected] = useState(false);
  const [prevSelectedCategory, setPrevSelectedCategory] =
    useState(selectedCategory);
  const [prevSortBy, setPrevSortBy] = useState(sortBy);

  useEffect(() => {
    if (selectedCategory !== prevSelectedCategory || sortBy !== prevSortBy) {
      setFilterChangeDetected(true);
      setPrevSelectedCategory(selectedCategory);
      setPrevSortBy(sortBy);
    }
  }, [selectedCategory, prevSelectedCategory, sortBy, prevSortBy]);

  const start = useMemo(() => (currentPage - 1) * limit, [currentPage, limit]);

  const getCategoryFilter = useCallback((category) => {
    const allSchemaTypes = ["makemoney", "aitool", "coding", "seo"];

    return category === "all"
      ? `_type in ["${allSchemaTypes.join('","')}"]`
      : `_type=="${category}"`;
  }, []);

  const getQuerySchemaTypes = useCallback((category) => {
    return category === "all"
      ? ["makemoney", "aitool", "coding", "seo"]
      : [category];
  }, []);

  const pageQuery = useMemo(() => {
    return `*[${getCategoryFilter(
      selectedCategory
    )}]|order(${sortBy}){formattedDate,tags,readTime,_id,_type,title,slug,mainImage,overview,body,publishedAt}[${start}...${
      start + limit
    }]`;
  }, [getCategoryFilter, selectedCategory, sortBy, start, limit]);

  const totalCountQuery = useMemo(() => {
    return `count(*[${getCategoryFilter(selectedCategory)}])`;
  }, [getCategoryFilter, selectedCategory]);

  const insightsGroup = useMemo(() => "sufian-insights-directory-group", []);

  const pageCacheKey = useMemo(() => {
    return CACHE_KEYS.PAGE.MIXED_BLOGS_PAGINATED(
      currentPage,
      selectedCategory,
      sortBy
    );
  }, [currentPage, selectedCategory, sortBy]);

  const totalCountCacheKey = useMemo(() => {
    return CACHE_KEYS.PAGE.MIXED_BLOGS_TOTAL_COUNT(selectedCategory, sortBy);
  }, [selectedCategory, sortBy]);

  const stablePageOptions = useMemo(
    () => ({
      componentName: `InsightsPage_${currentPage}_${selectedCategory}_${sortBy}`,
      enableOffline: true,
      group: insightsGroup,
      initialData:
        currentPage === 1 && selectedCategory === "all" ? initialPageData : null,
      schemaType: getQuerySchemaTypes(selectedCategory),
    }),
    [
      currentPage,
      selectedCategory,
      sortBy,
      insightsGroup,
      initialPageData,
      getQuerySchemaTypes,
    ]
  );

  const stableTotalOptions = useMemo(
    () => ({
      componentName: `InsightsTotal_${selectedCategory}_${sortBy}`,
      enableOffline: true,
      group: insightsGroup,
      initialData: selectedCategory === "all" ? initialTotalCount : null,
      schemaType: getQuerySchemaTypes(selectedCategory),
    }),
    [
      selectedCategory,
      sortBy,
      insightsGroup,
      initialTotalCount,
      getQuerySchemaTypes,
    ]
  );

  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
    refresh: refreshPosts,
    isStale: isPostsStale,
  } = useUnifiedCache(pageCacheKey, pageQuery, {}, stablePageOptions);

  const {
    data: totalData,
    isLoading: isTotalLoading,
    error: totalError,
    refresh: refreshTotal,
    isStale: isTotalStale,
  } = useUnifiedCache(totalCountCacheKey, totalCountQuery, {}, stableTotalOptions);

  usePageCache(
    pageCacheKey,
    refreshPosts,
    pageQuery,
    `InsightsPage${currentPage}(${selectedCategory},${sortBy})`
  );

  usePageCache(
    totalCountCacheKey,
    refreshTotal,
    totalCountQuery,
    `InsightsTotalCount(${selectedCategory},${sortBy})`
  );

  const postsToDisplay = postsData || [];
  const isLoading = isPostsLoading || isTotalLoading;
  const totalCount = typeof totalData === "number" ? totalData : 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));
  const hasErrorAndNoData =
    (postsError || totalError) && (!postsData || postsData.length === 0);

  useEffect(() => {
    if (isPostsStale || isTotalStale) {
      setPaginationStaleWarning(true);

      if (typeof window !== "undefined" && window.navigator.onLine) {
        refreshPosts(false);
        refreshTotal(false);
      }
    } else if (
      postsData &&
      !isPostsStale &&
      totalData !== undefined &&
      !isTotalStale &&
      paginationStaleWarning
    ) {
      setPaginationStaleWarning(false);
    }
  }, [
    isPostsStale,
    isTotalStale,
    postsData,
    totalData,
    paginationStaleWarning,
    refreshPosts,
    refreshTotal,
  ]);

  useEffect(() => {
    if (!isLoading && filterChangeDetected) {
      setFilterChangeDetected(false);
    }
  }, [isLoading, filterChangeDetected]);

  useEffect(() => {
    if (
      onDataLoad &&
      postsData !== null &&
      typeof totalData === "number" &&
      !isLoading
    ) {
      onDataLoad(currentPage, totalPages, totalCount);
    }
  }, [
    currentPage,
    totalPages,
    totalCount,
    onDataLoad,
    postsData,
    totalData,
    isLoading,
  ]);

  const handleRefresh = useCallback(
    async (refreshAll = false) => {
      try {
        if (refreshAll) {
          if (typeof cacheSystem !== "undefined" && cacheSystem.refreshGroup) {
            await cacheSystem.refreshGroup(insightsGroup);
          } else {
            await refreshPosts(true);
            await refreshTotal(true);
          }
        } else {
          await refreshPosts(true);
          await refreshTotal(true);
        }
      } catch (error) {
        console.error("Refresh failed:", error);
      }
    },
    [insightsGroup, refreshPosts, refreshTotal]
  );

  return (
    <div className="ig-wrap">
      {filterChangeDetected && (
        <div className="ig-system-note">Applying intelligence filters...</div>
      )}

      {paginationStaleWarning && !filterChangeDetected && (
        <div className="ig-system-note ig-system-note--muted">
          Updating the publication index...
        </div>
      )}

      <div className="ig-grid">
        {isLoading && postsToDisplay.length === 0 ? (
          Array.from({ length: Math.min(limit, 12) }).map((_, index) => (
            <InsightSkeleton key={index} featured={index === 0} />
          ))
        ) : hasErrorAndNoData ? (
          <div className="ig-empty">
            <strong>Unable to load insights.</strong>
            <p>{postsError?.message || totalError?.message || ""}</p>

            <div>
              <button type="button" onClick={() => handleRefresh(false)}>
                Retry page
              </button>

              <button type="button" onClick={() => handleRefresh(true)}>
                Refresh index
              </button>
            </div>
          </div>
        ) : postsToDisplay.length > 0 ? (
          postsToDisplay.map((post, index) => (
            <InsightCard
              key={post._id}
              featured={index === 0 && currentPage === 1}
              readTime={post.readTime?.minutes || post.readTime}
              overview={post.overview}
              title={post.title}
              tags={post.tags}
              category={categoryDisplayNames[post._type] || "Insight"}
              mainImage={getImageUrl(post.mainImage)}
              slug={getInsightHref(post)}
              publishedAt={formatPostDate(post.publishedAt)}
            />
          ))
        ) : (
          <div className="ig-empty">
            <strong>No insights found.</strong>
            <p>Try changing the filter or refreshing the publication index.</p>

            <button type="button" onClick={() => handleRefresh(true)}>
              Refresh insights
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        .ig-wrap {
          width: 100%;
        }

        .ig-system-note {
          margin-bottom: 18px;
          border-radius: 18px;
          border: 1px solid rgba(227, 179, 65, 0.18);
          background: rgba(227, 179, 65, 0.07);
          padding: 14px 16px;
          color: #f2cc6b;
          text-align: center;
          font-size: 13px;
          font-weight: 720;
          line-height: 1.4;
          backdrop-filter: blur(16px);
        }

        .ig-system-note--muted {
          color: rgba(237, 233, 220, 0.66);
        }

        .ig-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 48px;
        }

        .ig-empty {
          grid-column: 1 / -1;
          border-radius: 28px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background: rgba(227, 179, 65, 0.045);
          padding: 36px;
          text-align: center;
          color: rgba(237, 233, 220, 0.68);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.26);
          backdrop-filter: blur(18px);
        }

        .ig-empty strong {
          display: block;
          color: #f7f1df;
          font-size: 1.25rem;
          font-weight: 900;
          letter-spacing: -0.035em;
        }

        .ig-empty p {
          margin: 10px auto 0;
          max-width: 520px;
          font-size: 14px;
          font-weight: 560;
          line-height: 1.7;
        }

        .ig-empty div {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 18px;
        }

        .ig-empty button {
          min-height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.22);
          background: rgba(227, 179, 65, 0.09);
          color: #f2cc6b;
          padding: 0 15px;
          font-size: 13px;
          font-weight: 760;
          transition:
            background 180ms ease,
            border-color 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .ig-empty button:hover {
          transform: translateY(-1px);
          border-color: rgba(227, 179, 65, 0.45);
          background: rgba(227, 179, 65, 0.14);
          color: #fff4c7;
        }

        .ig-skeleton {
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(227, 179, 65, 0.11);
          background: rgba(7, 16, 32, 0.64);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.24);
        }

        .ig-skeleton-media {
          height: 244px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(242, 204, 107, 0.08),
              transparent
            ),
            rgba(227, 179, 65, 0.05);
          animation: igPulse 1.7s ease-in-out infinite;
        }

        .ig-skeleton-body {
          padding: 24px;
        }

        .ig-skeleton-body span,
        .ig-skeleton-body strong,
        .ig-skeleton-body p,
        .ig-skeleton-body i {
          display: block;
          border-radius: 999px;
          background: rgba(237, 233, 220, 0.07);
          animation: igPulse 1.7s ease-in-out infinite;
        }

        .ig-skeleton-body span {
          width: 42%;
          height: 12px;
          margin-bottom: 18px;
        }

        .ig-skeleton-body strong {
          width: 88%;
          height: 24px;
          margin-bottom: 14px;
        }

        .ig-skeleton-body p {
          height: 13px;
          margin-bottom: 10px;
        }

        .ig-skeleton-body p:nth-child(3) {
          width: 96%;
        }

        .ig-skeleton-body p:nth-child(4) {
          width: 72%;
        }

        .ig-skeleton-body i {
          width: 118px;
          height: 15px;
          margin-top: 24px;
        }

        @media (min-width: 920px) {
          .ig-skeleton--featured {
            grid-column: span 2;
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          }

          .ig-skeleton--featured .ig-skeleton-media {
            height: 100%;
            min-height: 380px;
          }

          .ig-skeleton--featured .ig-skeleton-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }

        @keyframes igPulse {
          0%,
          100% {
            opacity: 0.46;
          }

          50% {
            opacity: 0.9;
          }
        }

        @media (max-width: 1180px) {
          .ig-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .ig-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ig-skeleton-media,
          .ig-skeleton-body span,
          .ig-skeleton-body strong,
          .ig-skeleton-body p,
          .ig-skeleton-body i {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}