import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Concept Gallery",
  description:
    "Explore VARATECT concept visualisations across architecture, homes, renovation and commercial design.",
};

const concepts = [
  {
    name: "Architectural facade study",
    division: "Vara Pro",
    category: "Architecture",
    image: "/images/varatect-facade-concept.webp",
    alt: "Architectural facade concept visualisation",
    href: "/vara-pro",
  },
  {
    name: "Home in its landscape",
    division: "Vara Home",
    category: "Residential",
    image: "/images/varatect-residential-visualisation.webp",
    alt: "Residential concept visualisation surrounded by greenery",
    href: "/vara-home",
  },
  {
    name: "Entry and renewal study",
    division: "Vara Revive",
    category: "Renovation",
    image: "/images/varatect-entry-concept.webp",
    alt: "Architectural entry concept visualisation",
    href: "/vara-revive",
  },
  {
    name: "Commercial space study",
    division: "Vara BIZ",
    category: "Commercial",
    image: "/images/varatect-commercial-visualisation.webp",
    alt: "Commercial architecture concept visualisation",
    href: "/vara-biz",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#e8efe7] text-[#20231f]">
      <SiteHeader />

      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 sm:px-8 md:pb-14 md:pt-24 lg:px-14">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#66785e]">
          Concept gallery
        </p>
        <div className="mt-5 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <h1 className="max-w-4xl text-[clamp(3rem,7vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.075em]">
            Ideas for spaces with{" "}
            <span className="font-serif font-normal italic text-[#526c4e]">
              purpose.
            </span>
          </h1>
          <p className="max-w-lg text-sm leading-7 text-[#646961]">
            A selection of VARATECT design visualisations across our four
            divisions. These images are concepts, not a record of completed
            projects.
          </p>
        </div>
      </section>

      <section
        aria-label="Design concept visualisations"
        className="mx-auto grid max-w-[1440px] gap-5 px-5 pb-20 sm:grid-cols-2 sm:px-8 md:gap-7 md:pb-28 lg:grid-cols-2 lg:px-14"
      >
        {concepts.map((concept, index) => (
          <article
            key={concept.name}
            className="group overflow-hidden rounded-2xl border border-[#26362f]/10 bg-[#f1f5ef]"
          >
            <div className="relative aspect-[1.35] overflow-hidden bg-[#d3ddd2]">
              <Image
                src={concept.image}
                alt={concept.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 46vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-[#e8efe7]/95 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#555950]">
                Concept {String(index + 1).padStart(2, "0")}
              </span>
              <span className="absolute bottom-4 left-4 rounded-full bg-[#202b26]/85 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white">
                {concept.category}
              </span>
            </div>
            <div className="flex items-end justify-between gap-5 p-5 sm:p-6">
              <div>
                <h2 className="text-xl font-medium tracking-[-0.04em] sm:text-2xl">
                  {concept.name}
                </h2>
                <p className="mt-2 text-xs text-[#687067]">
                  {concept.division} · Design visualisation
                </p>
              </div>
              <Link
                href={concept.href}
                aria-label={`Learn about ${concept.division}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#26362f] text-white transition-colors hover:bg-[#526c4e]"
              >
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#26362f] px-5 py-16 text-[#e8efe7] sm:px-8 md:py-20 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c5d5bd]">
              Have a project in mind?
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.06em] md:text-5xl">
              Let’s explore what’s possible.
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-fit rounded-full bg-[#e8efe7] px-6 py-4 text-[11px] font-medium text-[#26362f] transition-colors hover:bg-[#c5d5bd]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
