// CachedAIToolsAllBlogs.jsx
"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import CardComponent from "@/components/Card/Page";
import SkelCard from "@/components/Blog/Skeleton/Card";
import { urlForImage } from "@/sanity/lib/image";
import { useUnifiedCache } from '@/React_Query_Caching/useUnifiedCache';
import { CACHE_KEYS } from '@/React_Query_Caching/cacheKeys';
import { usePageCache } from '@/React_Query_Caching/usePageCache';
import { cacheSystem } from '@/React_Query_Caching/cacheSystem';

const ReusableCachedAllBlogs = ({
  currentPage = 1,
  limit = 10,
  documentType,
  pageSlugPrefix,
  onDataLoad,
  customQuery = null,
  isSearchMode = false,
  initialPageData = null,    
  initialTotalCount = null,  
  selectedCategory = "all",  
  sortBy = "publishedAt desc", 
}) => {
  const start = useMemo(() => (currentPage - 1) * limit, [currentPage, limit]);

  const typeIdentifier = useMemo(() => (
    (Array.isArray(documentType) && documentType.length > 0)
      ? documentType.join('-')
      : (typeof documentType === 'string' && documentType.length > 0)
        ? documentType
        : 'default-blog-type'
  ), [documentType]);

  // 1. 🔥 FIXED: THE QUERY TEXT IS NOW 100% STATIC. IT NEVER MUTATES AT RUNTIME.
  const memoizedPageQuery = useMemo(() => {
    if (customQuery) {
      return `${customQuery.trim().endsWith(']') ? customQuery.slice(0, -1) : customQuery}[${start}...${start + limit + 1}]`;
    }
    
    // We pass the filter parameter logic purely via standard Sanity variables below
    return `*[_type == "${Array.isArray(documentType) ? documentType.join('" || _type == "') : documentType}" && ($selectedCategory == "all" || $selectedCategory in subcategories[]->slug.current || $selectedCategory in subcategories[]->slug || references($selectedCategory))] | order(${sortBy}) {
          _id, title, slug, mainImage, readTime, tags, overview, body, publishedAt, _type,
          resourceType, resourceFormat, aiToolDetails, seoTitle, seoDescription, seoKeywords,
          altText, structuredData, "resourceFile": resourceFile.asset->, content, promptContent,
          "relatedArticle": relatedArticle->{title, slug},
          "category": coalesce(subcategories[0]->title, subcategories[0]->name, tags[0]->name, tags[0])
        }[${start}...${start + limit + 1}]`;
  }, [customQuery, documentType, sortBy, start, limit]);

  const memoizedTotalCountQuery = useMemo(() => {
    if (customQuery) {
      return `count(${customQuery.split('[')[0]})`;
    }
    return `count(*[_type == "${Array.isArray(documentType) ? documentType.join('" || _type == "') : documentType}" && ($selectedCategory == "all" || $selectedCategory in subcategories[]->slug.current || $selectedCategory in subcategories[]->slug || references($selectedCategory))])`;
  }, [customQuery, documentType]);

  // 2. 🔥 FIXED: VARIABLES ARE ALWAYS INJECTED SECURELY TO PREVENT COMPILATION CRASHES
  const memoizedParams = useMemo(() => ({
    selectedCategory: selectedCategory || "all"
  }), [selectedCategory]); 

  // 3. 🔥 FIXED: CLEAN ROUTING STRINGS COMPLYING WITH PRE-EXISTING CACHE DEFINITIONS
  const pageCacheKey = useMemo(() => {
    if (isSearchMode) {
      return `search_results_${typeIdentifier}_page_${currentPage}`;
    }
    // We keep the signature structured safely so cacheKeys.js processes it cleanly
    return `page_${typeIdentifier}_all_blogs_page_${currentPage}_filter_${selectedCategory}_sort_${sortBy.replace(/\s+/g, '_')}`;
  }, [isSearchMode, typeIdentifier, currentPage, selectedCategory, sortBy]);

  const totalCountCacheKey = useMemo(() => {
    return `page_${typeIdentifier}_all_blogs_total_filter_${selectedCategory}`;
  }, [typeIdentifier, selectedCategory]);

  const paginationGroup = useMemo(() => `${typeIdentifier}-all-blogs`, [typeIdentifier]);

  const stableCacheOptions = useMemo(() => ({
    componentName: `${typeIdentifier || 'Custom'}-AllBlogs-Page${currentPage}`,
    enableOffline: true,
    group: paginationGroup,
    // Only prehydrate with server data if on the primary un-filtered grid view
    initialData: (currentPage === 1 && (!selectedCategory || selectedCategory === "all") && sortBy === "publishedAt desc") ? initialPageData : null, 
  }), [typeIdentifier, currentPage, paginationGroup, initialPageData, selectedCategory, sortBy]);

  const stableTotalCacheOptions = useMemo(() => ({
    componentName: `${typeIdentifier || 'Custom'}-AllBlogs-TotalCount`,
    enableOffline: true,
    group: paginationGroup,
    initialData: (!selectedCategory || selectedCategory === "all") ? initialTotalCount : null, 
  }), [typeIdentifier, paginationGroup, initialTotalCount, selectedCategory]);

  const { data: pageData, isLoading: pageIsLoading, error: pageError, refresh: refreshPageData } = useUnifiedCache(
    pageCacheKey, memoizedPageQuery, memoizedParams, { ...stableCacheOptions, schemaType: typeIdentifier }
  );

  const { data: totalData, isLoading: totalIsLoading, error: totalError, refresh: refreshTotal } = useUnifiedCache(
    totalCountCacheKey, memoizedTotalCountQuery, memoizedParams, { ...stableTotalCacheOptions, schemaType: typeIdentifier }
  );

  usePageCache(pageCacheKey, refreshPageData, memoizedPageQuery, `${typeIdentifier}BlogsPage${currentPage}_filter_${selectedCategory}`);
  usePageCache(totalCountCacheKey, refreshTotal, memoizedTotalCountQuery, `${typeIdentifier}BlogsTotalCount_filter_${selectedCategory}`);

  const totalItems = typeof totalData === 'number' ? totalData : 0;
  const calculatedTotalPages = Math.ceil(totalItems / limit);
  const hasMore = (pageData && Array.isArray(pageData) && pageData.length > limit);

  useEffect(() => {
    if (onDataLoad && !pageIsLoading && !totalIsLoading) {
      onDataLoad(hasMore, calculatedTotalPages, totalItems);
    }
  }, [onDataLoad, hasMore, calculatedTotalPages, totalItems, pageIsLoading, totalIsLoading]);

  const hasError = pageError || totalError;
  const combinedIsLoading = pageIsLoading || totalIsLoading;

  if (combinedIsLoading && !pageData) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: limit }).map((_, index) => <SkelCard key={index} />)}
      </div>
    );
  }

  if (hasError && !pageData) {
    return (
      <div className="text-center py-6 text-red-500 font-medium">
        Failed to resolve data layer. Please clear search matrix or reload.
      </div>
    );
  }

  const postsToDisplay = (pageData && Array.isArray(pageData)) ? pageData.slice(0, limit) : [];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {postsToDisplay.map((post) => (
          <CardComponent
            key={post._id}
            readTime={post.readTime?.minutes}
            overview={post.overview}
            title={post.title}
            tags={post.tags}
            category={post.category}
            mainImage={post.mainImage ? urlForImage(post.mainImage).url() : "https://placehold.co/600x400/cccccc/000000?text=No+Image"} 
            slug={`/${pageSlugPrefix}/${post.slug?.current || post.slug}`}
            publishedAt={post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : ""}
            resourceType={post.resourceType}
            resourceFormat={post.resourceFormat}
            resourceLink={post.resourceLink}
            resourceLinkType={post.resourceLinkType}
            previewSettings={post.previewSettings}
            resourceFile={post.resourceFile}
            content={post.content}
            promptContent={post.promptContent}
            relatedArticle={post.relatedArticle}
            aiToolDetails={post.aiToolDetails}
            seoTitle={post.seoTitle}
            seoDescription={post.seoDescription}
            seoKeywords={post.seoKeywords}
            altText={post.altText}
            structuredData={post.structuredData}
          />
        ))}
      </div>

      {postsToDisplay.length === 0 && !combinedIsLoading && (
        <div className="text-center py-12 border border-dashed border-gray-800 rounded-3xl">
          <p className="text-gray-400 mb-2 font-semibold">No system logs found matching this matrix layer.</p>
          <p className="text-gray-500 text-xs">Try selecting a different chip or resetting the keyword search bar.</p>
        </div>
      )}
    </div>
  );
};

export default ReusableCachedAllBlogs;