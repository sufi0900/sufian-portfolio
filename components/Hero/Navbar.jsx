"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ChevronDown, AlertTriangle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

import "./navbar.css";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Work", href: "/work" },
  { label: "Journey", href: "/success-journey" },
  { label: "Blogs", href: "/blogs" },
];

const secondaryLinks = [
  { label: "Timeline", href: "/timeline" },
  { label: "FAQ", href: "/faq" },
  { label: "Gulf Vision", href: "/gulf-vision" },
];

const ecosystemLinks = [
  {
    label: "LIONXE™",
    href: "https://lionxeframework.com",
    external: true,
  },
  {
    label: "DoItWithAI",
    href: "https://doitwithai.tools",
    external: true,
  },
];

export default function Navbar({ hideOnScroll = false, hideAfter = 90 }) {
  const pathname = usePathname();
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showConstructionBar, setShowConstructionBar] = useState(true);
  
  // State to handle desktop dropdown interaction
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;

      setScrolled(y > 10);
      setHiddenByScroll(hideOnScroll && !open && y > hideAfter);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hideOnScroll, hideAfter, open]);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false); // Auto-close dropdown on route shift
  }, [pathname]);

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      window.location.reload();
    } else {
      window.location.href = "/";
    }
  };

  // Helper check to see if any items inside the dropdown are currently active
  const isDropdownActive = secondaryLinks.some((link) => pathname === link.href);

  return (
    <header
      className={[
        "pn-header",
        scrolled ? "pn-header--scrolled" : "pn-header--top",
        hiddenByScroll ? "pn-header--hidden" : "",
      ].join(" ")}
    >
      {/* {showConstructionBar && (
        <div className="relative z-[9999] w-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 px-4 py-2.5 text-center text-[12.5px] font-bold flex items-center justify-between rounded-xl backdrop-blur-md mt-4 max-w-7xl mx-auto shadow-sm animate-fade-in">
          <div className="flex-1 flex items-center justify-center gap-2">
            <AlertTriangle size={15} className="shrink-0 animate-pulse text-amber-500" />
            <span>Notice: This platform is running optimization cycles under live construction. Core models are being synchronized.</span>
          </div>
          <button
            onClick={() => setShowConstructionBar(false)}
            className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors ml-2 focus:outline-none"
            aria-label="Dismiss notice"
          >
            <XCircle size={16} />
          </button>
        </div>
      )} */}

      <div className="pn-inner">
        {/* LEFT BRAND */}
        <div className="pn-brand-wrap">
          <Link
            href="/"
            onClick={handleLogoClick}
            aria-label="Go to Sufian Mustafa homepage"
            className="pn-brand"
          >
            <span className="pn-brand-mark">S</span>

            <span className="pn-brand-text">
              <span>Sufian</span>
              <strong>Mustafa</strong>
            </span>
          </Link>
        </div>

        {/* CENTER NAV */}
        <nav className="pn-nav" aria-label="Primary navigation">
          <div className="pn-nav-group">
            {navLinks.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`pn-nav-link ${active ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <span className="pn-divider pn-divider--subtle" aria-hidden="true" />

          {/* PREMIUM INTEGRATED DROPDOWN MENU */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`pn-nav-link flex items-center gap-1.5 focus:outline-none transition-all duration-200 ${
                isDropdownActive ? "is-active font-bold" : ""
              }`}
              style={{ background: "none", border: "none", cursor: "pointer" }}
              aria-expanded={dropdownOpen}
            >
              <span>Deep Dive</span>
              <ChevronDown
                size={13}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ease-out ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                style={{ color: isDropdownActive ? "var(--pn-gold)" : "inherit" }}
              />
            </button>

            {dropdownOpen && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 mt-1 w-44 rounded-xl border border-amber-500/15 bg-white/95 p-1.5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/95 animate-fade-in z-50"
                style={{ transformOrigin: "top center" }}
              >
                {secondaryLinks.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 text-[13px] font-semibold text-slate-600 transition-all hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white ${
                        active ? "bg-amber-500/10 !text-amber-600 dark:!text-amber-400" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <span className="pn-divider" aria-hidden="true" />

          <div className="pn-nav-group pn-eco-group">
            {ecosystemLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pn-eco-link"
              >
                <span className="pn-eco-dot" aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* RIGHT CTA */}
        <div className="pn-cta-wrap">
          <Link href="/contact" className="pn-cta">
            <span>Select Engagements</span>
            <ArrowUpRight size={14} strokeWidth={2.65} />
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="pn-mobile-wrap">
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="pn-menu-button"
          >
            {open ? <X size={20} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <div className={`pn-mobile-panel ${open ? "is-open" : ""}`}>
        <div className="pn-mobile-inner">
          {[...navLinks, ...secondaryLinks, ...ecosystemLinks].map((item) => {
            const external = item.external || item.href.startsWith("http");

            const active =
              !external &&
              (item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href));

            const Comp = external ? "a" : Link;

            return (
              <Comp
                key={item.href}
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`pn-mobile-link ${active ? "is-active" : ""}`}
              >
                <span>
                  {external && <span className="pn-eco-dot" aria-hidden="true" />}
                  {item.label}
                </span>

                {external && <ArrowUpRight size={14} strokeWidth={2.65} />}
              </Comp>
            );
          })}

          <Link href="/contact" className="pn-mobile-cta">
            <span>Select Engagements</span>
            <ArrowUpRight size={14} strokeWidth={2.65} />
          </Link>
        </div>
      </div>
    </header>
  );
}