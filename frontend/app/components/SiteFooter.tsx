import Link from "next/link";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.25"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer bg-[#202b26] text-[#e8efe7]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-16 lg:px-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-12">
          <div>
            <Link href="/" aria-label="VARATECT home" className="inline-block">
              <span className="block text-[19px] font-semibold tracking-[0.16em]">
                VARATECT<span className="text-[#c5d5bd]">.</span>
              </span>
              <span className="mt-1.5 block text-[8px] uppercase tracking-[0.2em] text-white/50">
                Architecture &amp; design
              </span>
            </Link>
            <p className="mt-5 max-w-[320px] text-sm leading-6 text-white/60">
              Architecture, interiors and thoughtful detail for spaces that
              feel like your own.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c5d5bd]">
              Explore
            </h2>
            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3 text-sm text-white/65"
            >
              <Link href="/studio" className="transition-colors hover:text-white">
                Studio
              </Link>
              <Link
                href="/#services"
                className="transition-colors hover:text-white"
              >
                Divisions
              </Link>
              <Link
                href="/portfolio"
                className="transition-colors hover:text-white"
              >
                Concept gallery
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c5d5bd]">
              Connect
            </h2>
            <a
              href="mailto:studiovaratect@gmail.com"
              className="mt-5 inline-block text-sm text-white/75 transition-colors hover:text-white"
            >
              studiovaratect@gmail.com
            </a>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/varatect/"
                target="_blank"
                rel="noreferrer"
                aria-label="VARATECT on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#e8efe7] transition-colors hover:border-[#c5d5bd] hover:bg-[#c5d5bd] hover:text-[#202b26]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/107967548/"
                target="_blank"
                rel="noreferrer"
                aria-label="VARATECT on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#e8efe7] transition-colors hover:border-[#c5d5bd] hover:bg-[#c5d5bd] hover:text-[#202b26]"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 VARATECT DESIGN STUDIO. All rights reserved.</span>
          <Link
            href="/#home"
            className="w-fit transition-colors hover:text-white"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
