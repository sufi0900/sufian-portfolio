// components/report/Screenshot.tsx
//
// Solves the "I'll add screenshots later from localhost" workflow. This is a
// SERVER component (no "use client", it must stay that way since it uses
// Node's fs module). At render time it checks whether the expected file
// actually exists under /public yet:
//
//   - File missing  -> renders a clean "pending" placeholder showing the
//     exact path it's looking for, so you always know exactly where to drop
//     the image.
//   - File present  -> renders the real screenshot with a caption, no code
//     changes needed on your end. Just add the file and reload.
//
// Requires the page that uses this to run on the default Node.js server
// runtime (not the Edge runtime). The chapter pages already do this by
// default since none of them declare `export const runtime = "edge"`.

import fs from "fs";
import path from "path";

export function Screenshot({
  src,
  alt,
  caption,
}: {
  /** Public-relative path, e.g. "/report-assets/chapter-3/brooklyn-homepage.png" */
  src: string;
  alt: string;
  caption: string;
}) {
  const absolutePath = path.join(process.cwd(), "public", src);
  const exists = fs.existsSync(absolutePath);

  if (!exists) {
    return (
      <div
        className="avoid-break my-6 rounded-md border-2 border-dashed p-6 text-center"
        style={{ borderColor: "var(--border-grey)", background: "var(--pale-blue)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-wide"
          style={{ color: "var(--text-light)" }}
        >
          Screenshot Pending
        </p>
        <p className="mt-2 text-sm" style={{ color: "var(--text-grey)" }}>
          {caption}
        </p>
        <p className="mt-3 font-mono text-xs" style={{ color: "var(--lionxe-blue)" }}>
          Expected at public{src}
        </p>
      </div>
    );
  }

  return (
    <figure className="avoid-break my-6">
      <div
        className="overflow-hidden rounded-md border"
        style={{ borderColor: "var(--border-grey)" }}
      >
        {/* Plain <img>, not next/image: screenshots vary in dimensions and
            this avoids having to hardcode width/height per image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
      <figcaption className="mt-2 text-xs" style={{ color: "var(--text-light)" }}>
        {caption}
      </figcaption>
    </figure>
  );
}
