"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSiteTheme } from "./ThemeProvider";

const links = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/studio" },
  { label: "Divisions", href: "/#services" },
  { label: "Concepts", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useSiteTheme();
  const darkMode = theme === "dark";

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[#20231f]/10 bg-[#e8efe7]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-[13px] sm:px-8 lg:px-14">
        <Link
          href="/"
          aria-label="VARATECT home"
          className="inline-flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/images/varatect-logo.png"
            alt="VARATECT logo"
            width={2139}
            height={1266}
            sizes="68px"
            className="site-header-logo h-10 w-auto object-contain"
          />
          <span className="leading-none">
            <span className="site-header-wordmark block text-[16px] font-semibold tracking-[0.14em] text-[#26362f]">
              VARATECT
            </span>
            <span className="site-header-descriptor mt-1.5 block text-[9px] uppercase tracking-[0.14em] text-[#4f5a50]">
              Architecture &amp; design
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[11px] tracking-[0.04em] lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              className="site-nav-link py-2 transition-[color,text-shadow] duration-200 hover:text-[#526c4e] hover:[text-shadow:0_0_10px_rgba(185,209,173,0.8)] focus-visible:outline-none focus-visible:text-[#526c4e] focus-visible:[text-shadow:0_0_10px_rgba(185,209,173,0.8)]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="site-header-cta hidden items-center rounded-full bg-[#26362f] px-5 py-3 text-[10px] font-medium tracking-[0.04em] text-white transition-colors hover:bg-[#526c4e] md:inline-flex"
          >
            Start a project
          </Link>

          <button
            type="button"
            aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
            aria-pressed={darkMode}
            onClick={toggleTheme}
            className="site-theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#20231f]/15 transition-colors hover:bg-[#dfe9df]"
          >
            {darkMode ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.22-6.72-1.42 1.42M6.7 17.3l-1.42 1.42m13.44 0-1.42-1.42M6.7 6.7 5.28 5.28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="site-menu-button rounded-full border border-[#20231f]/15 px-4 py-2.5 text-[10px] lg:hidden"
          >
            {menuOpen ? "Close −" : "Menu +"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="site-mobile-nav border-t border-[#20231f]/10 px-5 py-5 sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
