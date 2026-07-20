//insights directory page of sufian website 

"use client";

import React, { useState, useCallback, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { PageCacheProvider } from "@/React_Query_Caching/CacheProvider";
import { useCachedSearch } from "@/React_Query_Caching/useCachedSearch";
import { urlForImage } from "@/sanity/lib/image";
import ReusableCachedInsightsGrid from "./ReusableCachedAllBlogsGeneral";
import InsightCard from "./InsightCard";

const CATEGORY_DISPLAY_NAMES = {
  aitool: "AI Systems",
  seo: "AI Search",
  coding: "Engineering",
  makemoney: "Growth Strategy",
};

const CATEGORY_FILTERS = [
  { key: "all", label: "All Insights" },
  { key: "seo", label: "AI Search" },
  { key: "coding", label: "Engineering" },
  { key: "aitool", label: "AI Systems" },
  { key: "makemoney", label: "Growth Strategy" },
];

const SORT_OPTIONS = [
  { value: "publishedAt desc", label: "Latest first" },
  { value: "publishedAt asc", label: "Oldest first" },
  { value: "title asc", label: "A–Z" },
  { value: "title desc", label: "Z–A" },
];

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

const SearchSkeletons = () => (
  <div className="idc-search-grid">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="idc-search-skeleton">
        <span />
        <strong />
        <p />
        <p />
      </div>
    ))}
  </div>
);

export default function InsightsDirectory({ initialServerData }) {
  const cardsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    initialServerData?.totalCount
      ? Math.ceil(initialServerData.totalCount / cardsPerPage)
      : 1
  );
  const [totalCount, setTotalCount] = useState(
    initialServerData?.totalCount || 0
  );

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("publishedAt desc");
  const [showFilters, setShowFilters] = useState(false);

  const searchHookOptions = useMemo(
    () => ({
      documentType: ["makemoney", "aitool", "coding", "seo"],
      searchFields: ["title", "overview", "body"],
      pageSlugPrefix: "insights",
      componentName: "SufianInsightsDirectorySearch",
      minSearchLength: 1,
    }),
    []
  );

  const searchHook = useCachedSearch(searchHookOptions);

  const handleMixedBlogsDataLoad = useCallback(
    (fetchedCurrentPg, fetchedTotalPgs, fetchedTotalCnt) => {
      setCurrentPage(fetchedCurrentPg);
      setTotalPages(fetchedTotalPgs);
      setTotalCount(fetchedTotalCnt);
    },
    []
  );

  const handleInitiateSearch = useCallback(() => {
    const trimmedText = searchHook.searchText.trim();

    if (trimmedText.length > 0) {
      searchHook.handleSearch();
      setCurrentPage(1);
    } else {
      searchHook.resetSearch();
      setCurrentPage(1);
    }
  }, [searchHook]);

  const handleCategoryFilter = useCallback(
    (category) => {
      setSelectedCategory(category);
      setCurrentPage(1);
      searchHook.resetSearch();
    },
    [searchHook]
  );

  const handleSortChange = useCallback(
    (newSortBy) => {
      setSortBy(newSortBy);
      setCurrentPage(1);
      searchHook.resetSearch();
    },
    [searchHook]
  );

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [totalPages]);

  const visibleCount = Math.min(cardsPerPage, totalCount);
  const activeCategoryLabel =
    selectedCategory === "all"
      ? "All Insights"
      : CATEGORY_DISPLAY_NAMES[selectedCategory] || "Insights";

  return (
    <PageCacheProvider pageType="insights" pageId="insights-directory">
      <section className="idc-control-section" aria-label="Insights controls">
        <div className="idc-control-panel">
          <div className="idc-search-row">
            <div className="idc-search-box">
              <Search size={18} strokeWidth={2.2} aria-hidden="true" />

              <input
                type="text"
                placeholder="Search insights, frameworks, topics, or systems..."
                value={searchHook.searchText}
                onChange={(e) => searchHook.updateSearchText(e.target.value)}
                onKeyDown={searchHook.handleKeyDown}
                aria-label="Search insights"
              />
            </div>

            <div className="idc-action-row">
              <button
                type="button"
                onClick={handleInitiateSearch}
                className="idc-primary-btn"
              >
                <Search size={16} strokeWidth={2.25} />
                Search
              </button>

              {searchHook.isSearchActive && (
                <button
                  type="button"
                  onClick={searchHook.resetSearch}
                  className="idc-ghost-btn"
                >
                  <X size={16} strokeWidth={2.25} />
                  Reset
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowFilters((value) => !value)}
                className="idc-filter-toggle"
              >
                <SlidersHorizontal size={16} strokeWidth={2.25} />
                {showFilters ? "Hide filters" : "Filters"}
              </button>
            </div>
          </div>

          <div
            className={`idc-filter-row ${showFilters ? "idc-filter-row--open" : ""}`}
          >
            <div className="idc-chip-row" aria-label="Insight category filters">
              {CATEGORY_FILTERS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleCategoryFilter(item.key)}
                  disabled={searchHook.isSearchActive}
                  className={`idc-chip ${
                    selectedCategory === item.key ? "is-active" : ""
                  } ${searchHook.isSearchActive ? "is-disabled" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="idc-sort-wrap">
              <label htmlFor="insights-sort">Sort</label>

              <select
                id="insights-sort"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                disabled={searchHook.isSearchActive}
              >
                {SORT_OPTIONS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="idc-results-bar">
        <p>
          {searchHook.isSearchActive ? (
            <>
              Showing{" "}
              <strong>{searchHook.searchResults?.length || 0}</strong> search
              results for <em>“{searchHook.searchText}”</em>
            </>
          ) : (
            <>
              Showing <strong>{visibleCount}</strong> of{" "}
              <strong>{totalCount}</strong> insights
              {selectedCategory !== "all" && <em>{activeCategoryLabel}</em>}
            </>
          )}
        </p>

        <span>
          <CalendarDays size={15} strokeWidth={2.1} />
          Publication index
        </span>
      </div>

      {searchHook.isSearchActive ? (
        <section className="idc-search-results" aria-label="Search results">
          {searchHook.isSearchLoading ? (
            <SearchSkeletons />
          ) : searchHook.searchError ? (
            <div className="idc-empty">
              <strong>Search could not be completed.</strong>
              <p>{searchHook.searchError?.message || "Please try again."}</p>
              <button type="button" onClick={searchHook.refreshSearch}>
                Retry search
              </button>
            </div>
          ) : searchHook.searchResults?.length > 0 ? (
            <div className="idc-search-grid">
              {searchHook.searchResults.map((post, index) => (
                <InsightCard
                  key={post._id || `${post.title}-${index}`}
                  featured={false}
                  readTime={post.readTime?.minutes || post.readTime}
                  overview={post.overview}
                  title={post.title}
                  tags={post.tags}
                  category={CATEGORY_DISPLAY_NAMES[post._type] || "Insight"}
                  mainImage={getImageUrl(post.mainImage)}
                  slug={getInsightHref(post)}
                  publishedAt={formatPostDate(post.publishedAt)}
                />
              ))}
            </div>
          ) : (
            <div className="idc-empty">
              <strong>No matching insights found.</strong>
              <p>
                Try searching a broader topic such as AI SEO, technical SEO,
                LIONXE, search visibility, or digital systems.
              </p>
              <button type="button" onClick={searchHook.resetSearch}>
                Clear search
              </button>
            </div>
          )}
        </section>
      ) : (
        <ReusableCachedInsightsGrid
          currentPage={currentPage}
          limit={cardsPerPage}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          onDataLoad={handleMixedBlogsDataLoad}
          initialPageData={
            currentPage === 1 ? initialServerData?.firstPageBlogs : undefined
          }
          initialTotalCount={initialServerData?.totalCount}
          categoryDisplayNames={CATEGORY_DISPLAY_NAMES}
        />
      )}

      {!searchHook.isSearchActive && (
        <div className="idc-pagination">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <ArrowLeft size={16} strokeWidth={2.35} />
            Previous
          </button>

          <span>
            Page <strong>{currentPage}</strong> of {totalPages}
          </span>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage >= totalPages}
          >
            Next
            <ArrowRight size={16} strokeWidth={2.35} />
          </button>
        </div>
      )}

      <style jsx global>{`
        .idc-control-section {
          margin-bottom: 24px;
        }

        .idc-control-panel {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background:
            radial-gradient(
              540px 220px at 15% 0%,
              rgba(227, 179, 65, 0.1),
              transparent 70%
            ),
            rgba(7, 16, 32, 0.7);
          padding: 18px;
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(22px);
        }

        .idc-control-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(242, 204, 107, 0.55),
            transparent
          );
        }

        .idc-search-row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 12px;
          align-items: center;
        }

        .idc-search-box {
          display: flex;
          align-items: center;
          gap: 11px;
          min-height: 54px;
          border-radius: 18px;
          border: 1px solid rgba(227, 179, 65, 0.14);
          background: rgba(3, 7, 16, 0.36);
          padding: 0 16px;
          color: rgba(237, 233, 220, 0.58);
          transition:
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .idc-search-box:focus-within {
          border-color: rgba(227, 179, 65, 0.42);
          background: rgba(3, 7, 16, 0.48);
          box-shadow: 0 0 0 4px rgba(227, 179, 65, 0.08);
        }

        .idc-search-box svg {
          flex-shrink: 0;
          color: #e3b341;
        }

        .idc-search-box input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #f7f1df;
          font-size: 14px;
          font-weight: 650;
          line-height: 1;
        }

        .idc-search-box input::placeholder {
          color: rgba(237, 233, 220, 0.38);
        }

        .idc-action-row {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .idc-primary-btn,
        .idc-ghost-btn,
        .idc-filter-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 54px;
          border-radius: 17px;
          padding: 0 17px;
          font-size: 13px;
          font-weight: 850;
          line-height: 1;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease,
            box-shadow 180ms ease;
        }

        .idc-primary-btn {
          border: 1px solid rgba(227, 179, 65, 0.42);
          background: linear-gradient(135deg, #f2cc6b, #e3b341, #c9952c);
          color: #2e2106;
          box-shadow:
            0 14px 34px rgba(227, 179, 65, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }

        .idc-ghost-btn,
        .idc-filter-toggle {
          border: 1px solid rgba(227, 179, 65, 0.15);
          background: rgba(227, 179, 65, 0.055);
          color: rgba(237, 233, 220, 0.72);
        }

        .idc-primary-btn:hover,
        .idc-ghost-btn:hover,
        .idc-filter-toggle:hover {
          transform: translateY(-1px);
        }

        .idc-ghost-btn:hover,
        .idc-filter-toggle:hover {
          border-color: rgba(227, 179, 65, 0.34);
          background: rgba(227, 179, 65, 0.1);
          color: #f7f1df;
        }

        .idc-filter-row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 16px;
          align-items: center;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(227, 179, 65, 0.1);
        }

        .idc-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .idc-chip {
          min-height: 38px;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.14);
          background: rgba(255, 255, 255, 0.026);
          color: rgba(237, 233, 220, 0.62);
          padding: 0 14px;
          font-size: 12px;
          font-weight: 760;
          line-height: 1;
          letter-spacing: -0.005em;
          transition:
            color 160ms ease,
            background 160ms ease,
            border-color 160ms ease,
            transform 160ms ease;
        }

        .idc-chip:hover {
          transform: translateY(-1px);
          border-color: rgba(227, 179, 65, 0.32);
          color: #f7f1df;
        }

        .idc-chip.is-active {
          border-color: rgba(227, 179, 65, 0.52);
          background: rgba(227, 179, 65, 0.14);
          color: #f2cc6b;
          box-shadow: 0 0 24px rgba(227, 179, 65, 0.08);
        }

        .idc-chip.is-disabled {
          cursor: not-allowed;
          opacity: 0.48;
        }

        .idc-sort-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .idc-sort-wrap label {
          color: rgba(237, 233, 220, 0.44);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .idc-sort-wrap select {
          min-height: 40px;
          border-radius: 14px;
          border: 1px solid rgba(227, 179, 65, 0.14);
          background: rgba(3, 7, 16, 0.52);
          color: #f7f1df;
          padding: 0 36px 0 13px;
          font-size: 12px;
          font-weight: 760;
          outline: none;
        }

        .idc-sort-wrap option {
          background: #071020;
          color: #f7f1df;
        }

        .idc-results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 22px;
          color: rgba(237, 233, 220, 0.52);
        }

        .idc-results-bar p {
          margin: 0;
          font-size: 13px;
          font-weight: 650;
          line-height: 1.5;
        }

        .idc-results-bar strong {
          color: #f2cc6b;
          font-weight: 900;
        }

        .idc-results-bar em {
          display: inline-flex;
          margin-left: 8px;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background: rgba(227, 179, 65, 0.055);
          padding: 3px 9px;
          color: rgba(237, 233, 220, 0.66);
          font-style: normal;
          font-size: 12px;
          font-weight: 720;
        }

        .idc-results-bar > span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(237, 233, 220, 0.42);
          font-size: 12px;
          font-weight: 720;
          white-space: nowrap;
        }

        .idc-results-bar svg {
          color: #e3b341;
        }

        .idc-search-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 48px;
        }

        .idc-search-skeleton {
          overflow: hidden;
          min-height: 350px;
          border-radius: 28px;
          border: 1px solid rgba(227, 179, 65, 0.11);
          background: rgba(7, 16, 32, 0.64);
          padding: 24px;
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.24);
        }

        .idc-search-skeleton span,
        .idc-search-skeleton strong,
        .idc-search-skeleton p {
          display: block;
          border-radius: 999px;
          background: rgba(237, 233, 220, 0.07);
          animation: idcPulse 1.7s ease-in-out infinite;
        }

        .idc-search-skeleton span {
          width: 48%;
          height: 160px;
          border-radius: 20px;
          width: 100%;
          margin-bottom: 22px;
        }

        .idc-search-skeleton strong {
          width: 86%;
          height: 22px;
          margin-bottom: 14px;
        }

        .idc-search-skeleton p {
          height: 13px;
          margin-bottom: 10px;
        }

        .idc-search-skeleton p:nth-child(3) {
          width: 100%;
        }

        .idc-search-skeleton p:nth-child(4) {
          width: 74%;
        }

        .idc-empty {
          margin-bottom: 48px;
          border-radius: 28px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background: rgba(227, 179, 65, 0.045);
          padding: 36px;
          text-align: center;
          color: rgba(237, 233, 220, 0.68);
          box-shadow: 0 22px 70px rgba(0, 0, 0, 0.26);
          backdrop-filter: blur(18px);
        }

        .idc-empty strong {
          display: block;
          color: #f7f1df;
          font-size: 1.25rem;
          font-weight: 900;
          letter-spacing: -0.035em;
        }

        .idc-empty p {
          margin: 10px auto 0;
          max-width: 560px;
          font-size: 14px;
          font-weight: 560;
          line-height: 1.7;
        }

        .idc-empty button {
          margin-top: 18px;
          min-height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.22);
          background: rgba(227, 179, 65, 0.09);
          color: #f2cc6b;
          padding: 0 15px;
          font-size: 13px;
          font-weight: 760;
        }

        .idc-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 12px;
        }

        .idc-pagination button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.18);
          background: rgba(227, 179, 65, 0.06);
          color: rgba(237, 233, 220, 0.72);
          padding: 0 16px;
          font-size: 13px;
          font-weight: 800;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease;
        }

        .idc-pagination button:not(:disabled):hover {
          transform: translateY(-1px);
          border-color: rgba(227, 179, 65, 0.42);
          background: rgba(227, 179, 65, 0.12);
          color: #fff4c7;
        }

        .idc-pagination button:disabled {
          cursor: not-allowed;
          opacity: 0.42;
        }

        .idc-pagination span {
          color: rgba(237, 233, 220, 0.48);
          font-size: 13px;
          font-weight: 720;
          white-space: nowrap;
        }

        .idc-pagination span strong {
          color: #f2cc6b;
          font-weight: 900;
        }

        @keyframes idcPulse {
          0%,
          100% {
            opacity: 0.46;
          }

          50% {
            opacity: 0.9;
          }
        }

        @media (max-width: 980px) {
          .idc-search-row {
            grid-template-columns: 1fr;
          }

          .idc-action-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .idc-action-row .idc-filter-toggle {
            grid-column: 1 / -1;
          }

          .idc-filter-row {
            grid-template-columns: 1fr;
          }

          .idc-search-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 981px) {
          .idc-filter-toggle {
            display: none;
          }
        }

        @media (max-width: 720px) {
          .idc-control-panel {
            padding: 14px;
            border-radius: 24px;
          }

          .idc-action-row {
            grid-template-columns: 1fr;
          }

          .idc-filter-row {
            display: none;
          }

          .idc-filter-row--open {
            display: grid;
          }

          .idc-chip-row {
            display: grid;
            grid-template-columns: 1fr;
          }

          .idc-chip {
            width: 100%;
          }

          .idc-sort-wrap {
            align-items: stretch;
            flex-direction: column;
          }

          .idc-sort-wrap select {
            width: 100%;
          }

          .idc-results-bar {
            align-items: flex-start;
            flex-direction: column;
          }

          .idc-search-grid {
            grid-template-columns: 1fr;
          }

          .idc-pagination {
            flex-wrap: wrap;
          }

          .idc-pagination span {
            order: -1;
            width: 100%;
            text-align: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .idc-primary-btn,
          .idc-ghost-btn,
          .idc-filter-toggle,
          .idc-chip,
          .idc-pagination button,
          .idc-search-skeleton span,
          .idc-search-skeleton strong,
          .idc-search-skeleton p {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </PageCacheProvider>
  );
}