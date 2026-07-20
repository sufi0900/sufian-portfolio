/*eslint-disable react/no-unescaped-entities*/
"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Search, SlidersHorizontal, X, ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { useCachedSearch } from '@/React_Query_Caching/useCachedSearch';
import SearchResults from '@/React_Query_Caching/SearchResults';
import ReusableCachedFeaturePost from "@/app/ai-tools/CachedAIToolsFeaturePost";
import ReusableCachedAllBlogs from "@/app/ai-tools/CachedAIToolsAllBlogs";
import { CACHE_KEYS } from '@/React_Query_Caching/cacheKeys';
import { PageCacheProvider } from "@/React_Query_Caching/CacheProvider";
import { useUnifiedCache } from '@/React_Query_Caching/useUnifiedCache';
import { usePageCache } from '@/React_Query_Caching/usePageCache';

const SORT_OPTIONS = [
  { value: "publishedAt desc", label: "Latest first" },
  { value: "publishedAt asc", label: "Oldest first" },
  { value: "title asc", label: "A–Z" },
  { value: "title desc", label: "Z–A" },
];

export default function BlogListingPageContent({
  schemaType,
  pageSlugPrefix,
  pageTitle,
  pageTitleHighlight,
  pageDescription,
  serverData,
  showSubcategoriesSection = false,
  subcategoriesLimit = 50,
}) {
  const cardsPerPage = 12;

  const initialDataCacheOptions = useMemo(() => ({
    componentName: `${schemaType}BlogListingInitial`,
    enableOffline: true,
    initialData: serverData,
    forceRefresh: false,
  }), [serverData, schemaType]);

  // 🔥 FIX: Corrected "subcategory" to look up the array reference "subcategories[]"
  const initialDataQuery = useMemo(() => `{
    "featuredPost": *[
      _type == $schemaType &&
      displaySettings.isOwnPageFeature == true
    ][0]{
      _id, _type, title, slug, mainImage, overview, body, publishedAt, readTime, tags, displaySettings,
      "subcategories": subcategories[]->{ _id, title, "slug": slug.current, description }
    },
    "firstPageBlogs": *[_type == $schemaType] | order(publishedAt desc)[0...12]{
      _id, _type, title, slug, mainImage, overview, body, publishedAt, readTime, tags, formattedDate,
      "subcategories": subcategories[]->{ _id, title, "slug": slug.current, description }
    },
    "totalCount": count(*[_type == $schemaType])
  }`, [schemaType]);

  const initialDataParams = useMemo(() => ({ schemaType }), [schemaType]);

  const { data: cachedInitialData, refresh: refreshInitialData } = useUnifiedCache(
    CACHE_KEYS.PAGE.BLOG_LISTING_INITIAL(schemaType), 
    initialDataQuery, 
    initialDataParams, 
    { ...initialDataCacheOptions, schemaType }
  );

  usePageCache(CACHE_KEYS.PAGE.BLOG_LISTING_INITIAL(schemaType), refreshInitialData, initialDataQuery, `${schemaType}BlogListingInitial`);

  const finalInitialData = cachedInitialData || serverData;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    finalInitialData?.totalCount ? Math.ceil(finalInitialData.totalCount / cardsPerPage) : 1
  );
  const [totalCount, setTotalCount] = useState(finalInitialData?.totalCount || 0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("publishedAt desc");
  const [showFilters, setShowFilters] = useState(true);

  const categoryFilters = useMemo(() => {
    const baseFilters = [{ key: "all", label: "All Insights" }];
    const subcategories = serverData?.firstPageSEOSubcategories || [];
    subcategories.forEach((sub) => {
      if (sub && sub.title) {
        baseFilters.push({
          key: sub.slug || sub._id,
          label: sub.title
        });
      }
    });
    return baseFilters;
  }, [serverData]);

  const searchHookOptions = useMemo(() => ({
    documentType: schemaType,
    searchFields: ['title', 'overview', 'body'],
    pageSlugPrefix: pageSlugPrefix,
    componentName: `${schemaType}PageSearch`,
    minSearchLength: 3,
  }), [schemaType, pageSlugPrefix]);

  const searchHook = useCachedSearch(searchHookOptions);

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [totalPages]);

  const handleAllBlogsDataLoad = useCallback((hasMore, fetchedTotalPages, fetchedTotalCount) => {
    setTotalPages(fetchedTotalPages);
    setTotalCount(fetchedTotalCount);
  }, []);

  const handleCategoryFilter = useCallback((categoryKey) => {
    setSelectedCategory(categoryKey);
    setCurrentPage(1);
    searchHook.resetSearch();
  }, [searchHook]);

  const handleSortChange = useCallback((newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
    searchHook.resetSearch();
  }, [searchHook]);

  const handleInitiateSearch = useCallback(() => {
    if (searchHook.searchText.trim().length > 0) {
      searchHook.handleSearch();
      setCurrentPage(1);
    } else {
      searchHook.resetSearch();
      setCurrentPage(1);
    }
  }, [searchHook]);

  const visibleCount = Math.min(cardsPerPage, totalCount);
  const activeCategoryLabel = useMemo(() => {
    const match = categoryFilters.find(f => f.key === selectedCategory);
    return match ? match.label : "Insights";
  }, [selectedCategory, categoryFilters]);

  return (
    <PageCacheProvider pageType={pageSlugPrefix} pageId="main">
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl">
          <span className="text-blue-600 dark:text-[#f2cc6b]">{pageTitleHighlight}</span> {pageTitle.replace(pageTitleHighlight, '')}
        </h1>
        <p className="max-w-3xl text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
          {pageDescription}
        </p>
      </header>

      <section className="mb-16" aria-label="Featured insight">
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
          <h2 className="text-xl font-bold tracking-wide text-black dark:text-[#f7f1df]">
            Featured System Post
          </h2>
        </div>
        <ReusableCachedFeaturePost
          documentType={schemaType}
          pageSlugPrefix={pageSlugPrefix}
          cacheKey={CACHE_KEYS.PAGE.FEATURE_POST(pageSlugPrefix)}
          initialData={finalInitialData?.featuredPost}
        />
      </section>

      <section className="idc-control-section" aria-label="Insights directory tools">
        <div className="idc-control-panel">
          <div className="idc-search-row">
            <div className="idc-search-box">
              <Search size={18} strokeWidth={2.2} aria-hidden="true" />
              <input
                type="text"
                placeholder={`Search ${pageTitle.toLowerCase()} keywords...`}
                value={searchHook.searchText}
                onChange={(e) => searchHook.updateSearchText(e.target.value)}
                onKeyDown={searchHook.handleKeyDown}
              />
            </div>

            <div className="idc-action-row">
              <button type="button" onClick={handleInitiateSearch} className="idc-primary-btn">
                <Search size={16} strokeWidth={2.25} /> Search
              </button>

              {searchHook.isSearchActive && (
                <button type="button" onClick={searchHook.resetSearch} className="idc-ghost-btn">
                  <X size={16} strokeWidth={2.25} /> Reset
                </button>
              )}

              <button type="button" onClick={() => setShowFilters(prev => !prev)} className="idc-filter-toggle">
                <SlidersHorizontal size={16} strokeWidth={2.25} /> {showFilters ? "Hide filters" : "Filters"}
              </button>
            </div>
          </div>

          <div className={`idc-filter-row ${showFilters ? "idc-filter-row--open" : ""}`}>
            <div className="idc-chip-row">
              {categoryFilters.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleCategoryFilter(item.key)}
                  disabled={searchHook.isSearchActive}
                  className={`idc-chip ${selectedCategory === item.key ? "is-active" : ""} ${searchHook.isSearchActive ? "is-disabled" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="idc-sort-wrap">
              <label htmlFor="insights-sort">Sort Matrix</label>
              <select id="insights-sort" value={sortBy} onChange={(e) => handleSortChange(e.target.value)} disabled={searchHook.isSearchActive}>
                {SORT_OPTIONS.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="idc-results-bar">
        <p>
          {searchHook.isSearchActive ? (
            <>Showing <strong>{searchHook.searchResults?.length || 0}</strong> matrix search hits for <em>“{searchHook.searchText}”</em></>
          ) : (
            <>Showing <strong>{visibleCount}</strong> of <strong>{totalCount}</strong> articles inside <em>{activeCategoryLabel}</em></>
          )}
        </p>
        <span><CalendarDays size={15} strokeWidth={2.1} /> System Matrix Index</span>
      </div>

      {searchHook.isSearchActive ? (
        <section className="mb-20" aria-label="Active Search Results Matrix">
          <SearchResults
            searchResults={searchHook.searchResults}
            isLoading={searchHook.isSearchLoading}
            error={searchHook.searchError}
            isSearchActive={searchHook.isSearchActive}
            searchText={searchHook.searchText}
            pageSlugPrefix={pageSlugPrefix}
            showNoResults={searchHook.showNoResults}
            cacheSource={searchHook.cacheSource}
            isStale={searchHook.isStale}
            onResetSearch={searchHook.resetSearch}
            onRefreshSearch={searchHook.refreshSearch}
            className="w-full"
          />
        </section>
      ) : (
        <section className="mb-16" aria-label="Paginated content architecture">
          <ReusableCachedAllBlogs
            currentPage={currentPage}
            limit={cardsPerPage}
            documentType={schemaType}
            pageSlugPrefix={pageSlugPrefix}
            onDataLoad={handleAllBlogsDataLoad}
            initialPageData={currentPage === 1 ? finalInitialData?.firstPageBlogs : undefined}
            initialTotalCount={finalInitialData?.totalCount}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
          />
        </section>
      )}

      {!searchHook.isSearchActive && (
        <div className="idc-pagination">
          <button type="button" onClick={handlePrevious} disabled={currentPage === 1}>
            <ArrowLeft size={16} strokeWidth={2.35} /> Previous
          </button>
          <span>Page <strong>{currentPage}</strong> of {totalPages}</span>
          <button type="button" onClick={handleNext} disabled={currentPage >= totalPages}>
            Next <ArrowRight size={16} strokeWidth={2.35} />
          </button>
        </div>
      )}

      <style jsx global>{`
        .idc-control-section { margin-bottom: 24px; }
        .idc-control-panel { position: relative; overflow: hidden; border-radius: 30px; border: 1px solid rgba(227, 179, 65, 0.16); background: radial-gradient(540px 220px at 15% 0%, rgba(227, 179, 65, 0.1), transparent 70%), rgba(7, 16, 32, 0.7); padding: 18px; box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.04); backdrop-filter: blur(22px); }
        .idc-control-panel::before { content: ""; position: absolute; top: 0; left: 24px; right: 24px; height: 1px; background: linear-gradient(90deg, transparent, rgba(242, 204, 107, 0.55), transparent); }
        .idc-search-row { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 12px; align-items: center; }
        .idc-search-box { display: flex; align-items: center; gap: 11px; min-height: 54px; border-radius: 18px; border: 1px solid rgba(227, 179, 65, 0.14); background: rgba(3, 7, 16, 0.36); padding: 0 16px; color: rgba(237, 233, 220, 0.58); }
        .idc-search-box:focus-within { border-color: rgba(227, 179, 65, 0.42); background: rgba(3, 7, 16, 0.48); box-shadow: 0 0 0 4px rgba(227, 179, 65, 0.08); }
        .idc-search-box svg { flex-shrink: 0; color: #e3b341; }
        .idc-search-box input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: #f7f1df; font-size: 14px; font-weight: 650; }
        .idc-search-box input::placeholder { color: rgba(237, 233, 220, 0.38); }
        .idc-action-row { display: flex; align-items: center; gap: 9px; }
        .idc-primary-btn, .idc-ghost-btn, .idc-filter-toggle { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 54px; border-radius: 17px; padding: 0 17px; font-size: 13px; font-weight: 850; transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, color 180ms ease; }
        .idc-primary-btn { border: 1px solid rgba(227, 179, 65, 0.42); background: linear-gradient(135deg, #f2cc6b, #e3b341, #c9952c); color: #2e2106; box-shadow: 0 14px 34px rgba(227, 179, 65, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.22); }
        .idc-ghost-btn, .idc-filter-toggle { border: 1px solid rgba(227, 179, 65, 0.15); background: rgba(227, 179, 65, 0.055); color: rgba(237, 233, 220, 0.72); }
        .idc-primary-btn:hover, .idc-ghost-btn:hover, .idc-filter-toggle:hover { transform: translateY(-1px); }
        .idc-ghost-btn:hover, .idc-filter-toggle:hover { border-color: rgba(227, 179, 65, 0.34); background: rgba(227, 179, 65, 0.1); color: #f7f1df; }
        .idc-filter-row { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 16px; align-items: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(227, 179, 65, 0.1); }
        .idc-chip-row { display: flex; flex-wrap: wrap; gap: 9px; }
        .idc-chip { min-height: 38px; border-radius: 999px; border: 1px solid rgba(227, 179, 65, 0.14); background: rgba(255, 255, 255, 0.026); color: rgba(237, 233, 220, 0.62); padding: 0 14px; font-size: 12px; font-weight: 760; transition: all 160ms ease; }
        .idc-chip:hover { transform: translateY(-1px); border-color: rgba(227, 179, 65, 0.32); color: #f7f1df; }
        .idc-chip.is-active { border-color: rgba(227, 179, 65, 0.52); background: rgba(227, 179, 65, 0.14); color: #f2cc6b; box-shadow: 0 0 24px rgba(227, 179, 65, 0.08); }
        .idc-chip.is-disabled { cursor: not-allowed; opacity: 0.48; }
        .idc-sort-wrap { display: flex; align-items: center; gap: 10px; }
        .idc-sort-wrap label { color: rgba(237, 233, 220, 0.44); font-size: 11px; font-weight: 850; letter-spacing: 0.15em; text-transform: uppercase; }
        .idc-sort-wrap select { min-height: 40px; border-radius: 14px; border: 1px solid rgba(227, 179, 65, 0.14); background: rgba(3, 7, 16, 0.52); color: #f7f1df; padding: 0 36px 0 13px; font-size: 12px; font-weight: 760; outline: none; }
        .idc-sort-wrap option { background: #071020; color: #f7f1df; }
        .idc-results-bar { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 22px; color: rgba(237, 233, 220, 0.52); }
        .idc-results-bar p { margin: 0; font-size: 13px; font-weight: 650; }
        .idc-results-bar strong { color: #f2cc6b; font-weight: 900; }
        .idc-results-bar em { display: inline-flex; margin-left: 8px; border-radius: 999px; border: 1px solid rgba(227, 179, 65, 0.16); background: rgba(227, 179, 65, 0.055); padding: 3px 9px; color: rgba(237, 233, 220, 0.66); font-style: normal; font-size: 12px; }
        .idc-results-bar > span { display: inline-flex; align-items: center; gap: 7px; color: rgba(237, 233, 220, 0.42); font-size: 12px; white-space: nowrap; }
        .idc-results-bar svg { color: #e3b341; }
        .idc-pagination { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 24px; }
        .idc-pagination button { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; border-radius: 999px; border: 1px solid rgba(227, 179, 65, 0.18); background: rgba(227, 179, 65, 0.06); color: rgba(237, 233, 220, 0.72); padding: 0 16px; font-size: 13px; font-weight: 800; transition: all 180ms ease; }
        .idc-pagination button:not(:disabled):hover { transform: translateY(-1px); border-color: rgba(227, 179, 65, 0.42); background: rgba(227, 179, 65, 0.12); color: #fff4c7; }
        .idc-pagination button:disabled { cursor: not-allowed; opacity: 0.42; }
        .idc-pagination span { color: rgba(237, 233, 220, 0.48); font-size: 13px; }
        .idc-pagination span strong { color: #f2cc6b; font-weight: 900; }

        @media (max-width: 980px) {
          .idc-search-row { grid-template-columns: 1fr; }
          .idc-action-row { display: grid; grid-template-columns: 1fr 1fr; }
          .idc-action-row .idc-filter-toggle { grid-column: 1 / -1; }
          .idc-filter-row { grid-template-columns: 1fr; }
        }
        @media (min-width: 981px) { .idc-filter-toggle { display: none; } }
        @media (max-width: 720px) {
          .idc-control-panel { padding: 14px; border-radius: 24px; }
          .idc-action-row { grid-template-columns: 1fr; }
          .idc-filter-row { display: none; }
          .idc-filter-row--open { display: grid; }
          .idc-chip-row { display: grid; grid-template-columns: 1fr; }
          .idc-chip { width: 100%; }
          .idc-sort-wrap { align-items: stretch; flex-direction: column; }
          .idc-sort-wrap select { width: 100%; }
          .idc-results-bar { align-items: flex-start; flex-direction: column; }
          .idc-pagination { flex-wrap: wrap; }
          .idc-pagination span { order: -1; width: 100%; text-align: center; }
        }
      `}</style>
    </PageCacheProvider>
  );
}
