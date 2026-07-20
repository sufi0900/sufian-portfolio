//app/blogs/page.jsx of sufian website 

import React from 'react';
import BlogListingPageContent from "@/app/ai-tools/BlogListingPageContent";
import StaticPageShell from "./StaticPageShell";
import { PageCacheProvider } from "@/React_Query_Caching/CacheProvider";
import { client } from "@/sanity/lib/client";
import { redisHelpers } from '@/app/lib/redis';
// import AISEOHeroSection from "@/app/ai-seo/AISEOHeroSection";
// import StaticBlogsPageShell from "@/app/insights/StaticBlogsPageShell";
export const revalidate = false;
export const dynamic = "force-dynamic";

// Increased: fetch ALL subcategories for filter tabs (was 12)
const SUBCATEGORIES_LIMIT = 50;
// Increased: fetch more blogs for client-side filtering/sorting (was 12)
const BLOGS_PAGE_LIMIT = 50;

function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://doitwithai.tools';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

function generateOGImageURL(params) {
  const baseURL = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

async function getData(schemaType, pageSlugPrefix) {
  const cacheKey = `blogList:${schemaType}:main`;
  const startTime = Date.now();
  
  try {
    const cachedData = await redisHelpers.get(cacheKey);
    if (cachedData) {
      console.log(`[RedisCacheHit] for ${cacheKey} in ${Date.now() - startTime}ms`);
      return { ...cachedData, __source: 'server-redis' };
    }
  } catch (redisError) {
    console.error(`Redis error for ${cacheKey}:`, redisError.message);
  }
  
  console.log(`[SanityFetch] for ${cacheKey} starting...`);

  const featuresQuery = `*[
    _type == $schemaType &&
    displaySettings.isOwnPageFeature == true
  ][0]{
    _id, _type, title, slug, mainImage, overview, body,
    publishedAt, readTime, tags, displaySettings,
    "subcategories": subcategories[]->{
      _id, title, "slug": slug.current, description
    }
  }`;

  const firstPageBlogsQuery = `*[_type == $schemaType]
  | order(publishedAt desc)[0...${BLOGS_PAGE_LIMIT + 1}]{
    _id, _type, title, slug, mainImage, overview, body,
    publishedAt, readTime, tags, formattedDate,
    "subcategories": subcategories[]->{
      _id, title, "slug": slug.current, description
    }
  }`;

  const totalCountBlogsQuery = `count(*[_type == $schemaType])`;

  const firstPageSEOSubcategoriesQuery = `*[_type == "seoSubcategory"]
  | order(title asc){
    _id,
    title,
    "slug": slug.current,
    description,
    "blogCount": count(*[
      _type == $schemaType &&
      references(^._id)
    ])
  }[0...${SUBCATEGORIES_LIMIT + 1}]`;

  const totalSEOSubcategoryCountQuery = `count(*[_type == "seoSubcategory"])`;

  try {
    const [
      featuredPost,
      firstPageBlogs,
      totalCountBlogs,
      firstPageSEOSubcategories,
      totalSEOSubcategoryCount,
    ] = await Promise.all([
      client.fetch(featuresQuery, { schemaType }, { next: { tags: [schemaType] } }),
      client.fetch(firstPageBlogsQuery, { schemaType }, { next: { tags: [schemaType] } }),
      client.fetch(totalCountBlogsQuery, { schemaType }, { next: { tags: [schemaType] } }),
      client.fetch(firstPageSEOSubcategoriesQuery, { schemaType }, { next: { tags: ["seoSubcategory"] } }),
      client.fetch(totalSEOSubcategoryCountQuery, {}, { next: { tags: ["seoSubcategory"] } }),
    ]);

    const data = {
      featuredPost,
      firstPageBlogs,
      totalCount: totalCountBlogs,
      totalCountBlogs,
      firstPageSEOSubcategories,
      totalSEOSubcategoryCount,
      timestamp: Date.now(),
    };
    
    console.log(`[SanityFetch] for ${cacheKey} completed in ${Date.now() - startTime}ms`);

    if (data.featuredPost || data.firstPageBlogs?.length > 0 || data.firstPageSEOSubcategories?.length > 0) {
      try {
        await redisHelpers.set(cacheKey, data, { ex: 3600 });
        console.log(`[RedisCacheSet] for ${cacheKey}`);
      } catch (redisSetError) {
        console.error(`Redis set error for ${cacheKey}:`, redisSetError.message);
      }
    }
    return { ...data, __source: 'server-network' };
  } catch (error) {
    console.error(`Server-side fetch for Insights page failed:`, error.message);
    return null;
  }
}

// ============================================
// METADATA  (update when slug changes to /insights)
// ============================================

export default async function Page() {
  const schemaType = "seo";
  const pageSlugPrefix = "ai-seo";

  const serverData = await getData(schemaType, pageSlugPrefix);

  const pageTitle = "Insights";
  const pageTitleHighlight = "Strategic";
  const pageDescription = "Essays, technical breakdowns, and executive-level analysis on AI SEO, search visibility, digital systems, and long-term authority building.";

  return (
    <>
      <PageCacheProvider pageType="listing" pageId={`${schemaType}-listing`}>
        <StaticPageShell showBreadcrumb={false}>
          {/* Hero (separate component — untouched) */}
   
   
  

          {/* Blog listing with integrated filter tabs */}
          <BlogListingPageContent
            schemaType={schemaType}
            pageSlugPrefix={pageSlugPrefix}
            pageTitle={pageTitle}
            pageTitleHighlight={pageTitleHighlight}
            pageDescription={pageDescription}
            showSubcategoriesSection={true}
            subcategoriesLimit={SUBCATEGORIES_LIMIT}
            serverData={serverData}
          />
     
        </StaticPageShell>
      </PageCacheProvider>
    </>
  );
}