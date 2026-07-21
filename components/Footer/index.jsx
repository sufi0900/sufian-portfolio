"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  Mail,
  FileText,
  BookOpen,
  Rss,
} from "lucide-react";

const footerLinks = {
  explore: [
    { title: "About", path: "/about" },
    { title: "Skills", path: "/skills" },
    { title: "Work", path: "/work" },
    { title: "Insights", path: "/insights" },
    { title: "Select Engagements", path: "/contact" },
  ],
  ecosystem: [
    {
      title: "LIONXE ™ Framework",
      path: "https://lionxeframework.com",
      external: true,
    },
    {
      title: "DoItWithAI.tools",
      path: "https://doitwithai.tools",
      external: true,
    },
    {
      title: "Linktree",
      path: "https://linktr.ee/doitwithaitools",
      external: true,
    },
  ],
  legal: [
    { title: "Privacy", path: "/privacy" },
    { title: "Terms", path: "/terms" },
    { title: "Contact", path: "/contact" },
  ],
};

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sufian-mustafa/",
    icon: Linkedin,
  },
  {
    title: "X / Twitter",
    href: "https://x.com/SufianWebDev",
    icon: Twitter,
  },
  {
    title: "GitHub",
    href: "https://github.com/sufi0900",
    icon: Github,
  },
  {
    title: "Dev.to",
    href: "https://dev.to/sufian",
    icon: FileText,
  },
  {
    title: "Medium",
    href: "https://medium.com/@sufianmustafa0900",
    icon: BookOpen,
  },
  {
    title: "Substack",
    href: "https://substack.com/@sufianai",
    icon: Rss,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@doitwithaitools",
    icon: Youtube,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/doitwithaitools/",
    icon: Instagram,
  },
  {
    title: "Email",
    href: "mailto:contact@sufianmustafa.com",
    icon: Mail,
  },
];

function isExternalHref(href = "") {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  );
}

function FooterLink({ link, className = "" }) {
  const external = link.external || isExternalHref(link.path);

  if (external) {
    return (
      <a
        href={link.path}
        className={className}
        target={link.path.startsWith("mailto:") ? undefined : "_blank"}
        rel={link.path.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        <span>{link.title}</span>
        <ArrowUpRight size={12} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={link.path} className={className}>
      <span>{link.title}</span>
    </Link>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const cleanPathname = pathname === "/" ? "/" : pathname?.replace(/\/$/, "");

  // Homepage already has its own footer inside Hero.
  if (cleanPathname === "/") return null;

  return (
    <footer className="pf-footer pf-footer--page" aria-label="Site footer">
      <div className="pf-footer-glow" aria-hidden="true" />

      <div className="pf-footer-inner">
        <div className="pf-footer-brand-card">
          <Link
            href="/"
            className="pf-footer-brand"
            aria-label="Sufian Mustafa home"
          >
            <span className="pf-footer-brand-mark">SM</span>
            <span className="pf-footer-brand-text">Sufian Mustafa</span>
          </Link>

          <p className="pf-footer-statement">
            Architecting digital authority through AI SEO systems, deep
            research, and the LIONXE ™ framework.
          </p>

          <div className="pf-social-row" aria-label="Social links">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              const isMail = item.href.startsWith("mailto:");

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="pf-social-link"
                  aria-label={item.title}
                  title={item.title}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                >
                  <Icon size={17} strokeWidth={2.25} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pf-footer-columns">
          <div className="pf-footer-column">
            <h2>Explore</h2>

            <div className="pf-footer-link-list">
              {footerLinks.explore.map((link) => (
                <FooterLink
                  key={link.title}
                  link={link}
                  className="pf-footer-link"
                />
              ))}
            </div>
          </div>

          <div className="pf-footer-column">
            <h2>Ecosystem</h2>

            <div className="pf-footer-link-list">
              {footerLinks.ecosystem.map((link) => (
                <FooterLink
                  key={link.title}
                  link={link}
                  className="pf-footer-link"
                />
              ))}
            </div>
          </div>

          <div className="pf-footer-column">
            <h2>Signal</h2>

            <div className="pf-footer-link-list">
              {footerLinks.legal.map((link) => (
                <FooterLink
                  key={link.title}
                  link={link}
                  className="pf-footer-link"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pf-footer-bottom">
        <span>© {year} Sufian Mustafa. All rights reserved.</span>
        <span>Royal Gold identity · Built for compounding authority.</span>
      </div>

      <style jsx global>{`
        .pf-footer {
          --pf-gold: #e3b341;
          --pf-gold-deep: #c9952c;
          --pf-gold-soft: #f2cc6b;
          --pf-accent-ink: #2e2106;
          --pf-ink: #ede9dc;

          position: relative;
          z-index: 5;
          color: var(--pf-ink);
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .pf-footer--page {
          overflow: hidden;
          border-top: 1px solid rgba(227, 179, 65, 0.16);
          background:
            radial-gradient(
              800px 360px at 20% 0%,
              rgba(227, 179, 65, 0.12),
              transparent 70%
            ),
            linear-gradient(180deg, rgba(5, 10, 24, 0.98), #02050d 100%);
          padding: 58px clamp(18px, 4vw, 56px) 22px;
        }

        .pf-footer-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(242, 204, 107, 0.05),
              transparent
            ),
            radial-gradient(
              480px 120px at 50% 0%,
              rgba(227, 179, 65, 0.1),
              transparent 75%
            );
        }

        .pf-footer-inner {
          position: relative;
          z-index: 1;
          width: min(100%, 1280px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 1.1fr) minmax(420px, 1.4fr);
          gap: clamp(28px, 5vw, 78px);
          align-items: start;
        }

        .pf-footer-brand-card {
          max-width: 470px;
        }

        .pf-footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          text-decoration: none;
          outline: none;
        }

        .pf-footer-brand-mark {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          border-radius: 17px;
          color: var(--pf-accent-ink);
          background: linear-gradient(
            135deg,
            var(--pf-gold-soft),
            var(--pf-gold),
            var(--pf-gold-deep)
          );
          box-shadow: 0 14px 38px rgba(227, 179, 65, 0.28);
          font-size: 13px;
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.08em;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .pf-footer-brand-text {
          color: #fff;
          font-size: 18px;
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.04em;
          text-shadow: 0 0 22px rgba(227, 179, 65, 0.14);
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .pf-footer-brand:hover .pf-footer-brand-mark,
        .pf-footer-brand:focus-visible .pf-footer-brand-mark {
          transform: translateY(-1px);
          box-shadow: 0 18px 44px rgba(227, 179, 65, 0.34);
        }

        .pf-footer-brand:hover .pf-footer-brand-text,
        .pf-footer-brand:focus-visible .pf-footer-brand-text {
          color: var(--pf-gold-soft);
          transform: translateX(1px);
        }

        .pf-footer-statement {
          margin: 22px 0 0;
          max-width: 430px;
          color: rgba(237, 233, 220, 0.66);
          font-size: 14.5px;
          line-height: 1.76;
          font-weight: 560;
          letter-spacing: -0.01em;
        }

        .pf-social-row {
          margin-top: 22px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pf-social-link {
          position: relative;
          display: inline-grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 14px;
          border: 1px solid rgba(227, 179, 65, 0.18);
          background:
            linear-gradient(
              145deg,
              rgba(227, 179, 65, 0.1),
              rgba(255, 255, 255, 0.025)
            );
          color: rgba(237, 233, 220, 0.72);
          text-decoration: none;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.055),
            0 10px 24px rgba(0, 0, 0, 0.16);
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .pf-social-link::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          opacity: 0;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(242, 204, 107, 0.28),
            transparent 66%
          );
          transition: opacity 180ms ease;
          pointer-events: none;
        }

        .pf-social-link svg {
          position: relative;
          z-index: 1;
          display: block;
        }

        .pf-social-link:hover,
        .pf-social-link:focus-visible {
          color: var(--pf-gold-soft);
          border-color: rgba(227, 179, 65, 0.44);
          background:
            linear-gradient(
              145deg,
              rgba(227, 179, 65, 0.16),
              rgba(255, 255, 255, 0.04)
            );
          transform: translateY(-2px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 16px 34px rgba(227, 179, 65, 0.12);
          outline: none;
        }

        .pf-social-link:hover::before,
        .pf-social-link:focus-visible::before {
          opacity: 1;
        }

        .pf-footer-columns {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(20px, 3vw, 44px);
        }

        .pf-footer-column h2 {
          margin: 0 0 14px;
          color: var(--pf-gold);
          font-size: 11px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: 0.19em;
          text-transform: uppercase;
        }

        .pf-footer-link-list {
          display: grid;
          gap: 10px;
        }

        .pf-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          width: fit-content;
          color: rgba(237, 233, 220, 0.66);
          text-decoration: none;
          font-size: 13.5px;
          line-height: 1.28;
          font-weight: 720;
          letter-spacing: -0.01em;
          transition:
            color 160ms ease,
            transform 160ms ease;
        }

        .pf-footer-link svg {
          display: block;
          flex: 0 0 auto;
        }

        .pf-footer-link:hover,
        .pf-footer-link:focus-visible {
          color: #fff;
          transform: translateX(2px);
          outline: none;
        }

        .pf-footer-bottom {
          position: relative;
          z-index: 1;
          width: min(100%, 1280px);
          margin: 42px auto 0;
          padding-top: 18px;
          border-top: 1px solid rgba(227, 179, 65, 0.12);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          color: rgba(237, 233, 220, 0.42);
          font-size: 12px;
          line-height: 1.5;
          font-weight: 650;
        }

        @media (max-width: 980px) {
          .pf-footer-inner {
            grid-template-columns: 1fr;
          }

          .pf-footer-columns {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .pf-footer--page {
            padding-top: 46px;
          }

          .pf-footer-columns {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .pf-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-footer-link,
          .pf-social-link,
          .pf-footer-brand-mark,
          .pf-footer-brand-text {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}