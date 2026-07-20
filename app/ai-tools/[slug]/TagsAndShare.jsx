import TagButton from "@/components/Blog/TagButton";
import SharePost from "@/components/Blog/SharePost";

const TagsAndShare = ({ tags }) => {
  const visibleTags = tags?.slice(0, 5) || [];

  if (!visibleTags.length) {
    return (
      <div className="mt-8 rounded-[28px] border border-white/5 bg-[#0A0F1E]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E3B341]">
              Share Insight
            </p>
            <p className="mt-1 text-sm text-[#EDE9DC]/50">
              Send this article to someone who may find it useful.
            </p>
          </div>

          <div className="flex items-center sm:justify-end">
            <SharePost />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative mt-8 overflow-hidden rounded-[28px] border border-white/5 bg-[#0A0F1E]/80 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      {/* Premium organic gold radial glow matching design standards */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(227,179,65,0.08),transparent_34%),radial-gradient(circle_at_90%_20%,rgba(237,233,220,0.03),transparent_28%)]" />

      <div className="relative grid gap-0 md:grid-cols-[1fr_auto]">
        <div className="border-b border-white/5 p-5 sm:p-6 md:border-b-0 md:border-r">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#E3B341]/20 bg-[#E3B341]/5 shadow-[0_0_24px_rgba(227,179,65,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3B341] shadow-[0_0_16px_rgba(227,179,65,0.8)]" />
            </span>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.18em] text-[#E3B341]">
                Related Tags
              </h4>
              <p className="mt-1 text-sm text-[#EDE9DC]/50">
                Topic signals connected to this article.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {visibleTags.map((tag) => (
              <TagButton
                key={tag?.name}
                href={tag?.link}
                text={tag?.name}
              />
            ))}
          </div>
        </div>

        <div className="flex min-w-[240px] flex-col justify-center p-5 sm:p-6">
          <h5 className="text-xs font-black uppercase tracking-[0.18em] text-[#E3B341] md:text-right">
            Share this post
          </h5>
          <p className="mt-1 text-sm text-[#EDE9DC]/50 md:text-right">
            Useful read? Pass it forward.
          </p>

          <div className="mt-4 flex items-center md:justify-end">
            <SharePost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagsAndShare;