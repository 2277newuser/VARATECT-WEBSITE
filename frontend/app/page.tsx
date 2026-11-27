"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import ProcessFlowChart from "./components/ProcessFlowChart";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const services = [
  {
    number: "01",
    name: "Vara Pro",
    tagline: "Your Vision, Our Signature",
    description:
      "Premium architecture, bespoke interiors and exceptional spatial experiences.",
    href: "/vara-pro",
    image: "/images/varatect-facade-concept.webp",
    imageAlt: "Contemporary architectural facade concept",
  },
  {
    number: "02",
    name: "Vara Home",
    tagline: "Your Dream, Our Design",
    description:
      "Thoughtfully designed homes shaped around your lifestyle and individuality.",
    href: "/vara-home",
    image: "/images/varatect-residential-visualisation.webp",
    imageAlt: "Residential architecture surrounded by greenery",
  },
  {
    number: "03",
    name: "Vara Revive",
    tagline: "Your Past, Our Vision",
    description:
      "Renewing existing spaces into functional and inspiring environments.",
    href: "/vara-revive",
    image: "/images/varatect-entry-concept.webp",
    imageAlt: "Refined architectural entry concept",
  },
  {
    number: "04",
    name: "Vara BIZ",
    tagline: "Your Brand, Our Balance",
    description:
      "Innovative commercial spaces shaped around your brand and business vision.",
    href: "/vara-biz",
    image: "/images/varatect-commercial-visualisation.webp",
    imageAlt: "Contemporary commercial architecture visualisation",
  },
];

const process = [
  {
    number: "01",
    title: "Listen",
    description:
      "We start with a conversation about your needs, your vision and the potential of your space.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Together, we discover ideas and shape a clear design direction for your project.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We refine the concept into thoughtful plans, material choices and meaningful details.",
  },
  {
    number: "04",
    title: "Bring to life",
    description:
      "We help turn the design into a considered space, right down to the finishing touches.",
  },
];

const projectStarts = [
  { label: "New home", project: "home" },
  { label: "Renovation", project: "renovation" },
  { label: "Interiors", project: "interiors" },
  { label: "Commercial", project: "commercial" },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.5 15.5 15 5m0 0H6m9 0v9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const reveal = {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <main className="home-page overflow-hidden bg-[#e8efe7] text-[#20231f]">
      <SiteHeader />

      <section id="home" className="relative isolate mx-auto grid max-w-[1440px] gap-9 px-5 pb-10 pt-9 sm:px-8 md:grid-cols-[0.88fr_1.12fr] md:items-center md:gap-10 md:py-12 lg:gap-16 lg:px-14 lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
        >
          <Image
            src="/images/varatect-introduction.jpg"
            alt=""
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="home-leaf-overlay absolute inset-0 bg-gradient-to-r from-[#e8efe7]/62 via-[#e8efe7]/78 to-[#e8efe7]/88" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="home-hero-copy relative z-10 py-3 md:py-8"
        >
          <p className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#435546]">
            <span className="h-px w-8 bg-[#526c4e]" />
            Architecture · Interiors · Spatial design
          </p>
          <h1 className="max-w-[680px] text-[clamp(3.35rem,6vw,6.6rem)] font-medium leading-[0.9] tracking-[-0.075em]">
            Your space,
            <br />
            our{" "}
            <span className="font-serif font-normal italic text-[#526c4e]">
              വര
            </span>
          </h1>
          <p className="mt-7 max-w-[420px] text-[15px] leading-7 text-[#454d46] sm:text-base">
            Architecture, interiors and thoughtful design to help you create,
            transform and improve your space.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="home-hero-cta inline-flex items-center gap-3 rounded-full bg-[#26362f] px-6 py-4 text-[11px] font-medium text-white transition-colors hover:bg-[#526c4e]"
            >
              Start a project <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="home-hero-secondary border-b border-[#20231f]/40 pb-1.5 text-xs text-[#343b35] transition-colors hover:border-[#526c4e] hover:text-[#526c4e]"
            >
              Explore concepts
            </Link>
          </div>
          <div className="home-hero-metrics mt-12 flex items-center gap-4 border-t border-[#20231f]/25 pt-5 text-[11px] uppercase tracking-[0.1em] text-[#4f574f] sm:mt-16">
            <span className="font-medium text-[#526c4e]">01 — 04</span>
            <span className="home-hero-metric-rule h-px w-10 bg-[#20231f]/20" />
            <span>One studio, many possibilities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#d3ddd2] sm:min-h-[470px] md:min-h-[560px] md:rounded-3xl"
        >
          <Image
            src="/images/varatect-residential-visualisation.webp"
            alt="A contemporary home designed to sit naturally within its landscape"
            fill
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 58vw"
            className="scale-[1.05] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171b17]/45 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-white sm:p-7">
            <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/75">
              Concept visualisation · Designed with intention
            </p>
              <p className="mt-2 text-sm">A home in harmony with its setting</p>
            </div>
            <Link
              href="/portfolio"
              aria-label="Explore the concept gallery"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-[#26362f]"
            >
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <section id="studio" className="scroll-mt-24 bg-[#dfe9df]">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-24 lg:px-14 lg:py-28">
          <motion.div {...reveal}>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#526c4e]">
              The studio
            </p>
            <h2 className="max-w-[540px] text-[clamp(2.25rem,4.4vw,4rem)] font-medium leading-[0.98] tracking-[-0.065em]">
              Good design
              <br />
              feels like{" "}
              <span className="font-serif font-normal italic text-[#526c4e]">
                belonging.
              </span>
            </h2>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
            <p className="max-w-[680px] text-xl leading-[1.55] tracking-[-0.025em] text-[#373c36] sm:text-2xl">
              We help people create, transform and improve their spaces through
              architecture, interiors, renovation and commercial design.
            </p>
            <p className="mt-5 max-w-[640px] text-sm leading-7 text-[#4f574f]">
              We are passionate about exploring architecture, experimenting
              with ideas and discovering new possibilities through design. We
              believe every space has potential, and work closely with clients
              to develop thoughtful plans, unique concepts and meaningful
              design solutions.
            </p>
            <Link
              href="#approach"
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium text-[#26362f] transition-colors hover:text-[#526c4e]"
            >
              How we work <ArrowIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14 lg:py-28"
      >
        <motion.div
          {...reveal}
          className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-12"
        >
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#526c4e]">
              What we do
            </p>
            <h2 className="text-[clamp(2.25rem,4.4vw,4rem)] font-medium leading-none tracking-[-0.065em]">
              Different needs.
              <br className="sm:hidden" />{" "}
              <span className="font-serif font-normal italic text-[#526c4e]">
                One thoughtful approach.
              </span>
            </h2>
          </div>
          <p className="max-w-[330px] text-sm leading-6 text-[#50574f]">
            Explore the part of the studio that feels right for your next
            project.
          </p>
        </motion.div>

        <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
            >
              <Link
                href={service.href}
                className="home-service-card group flex h-full flex-col overflow-hidden rounded-2xl border border-[#26362f]/10 bg-[#dfe9df] shadow-[0_8px_24px_rgba(32,35,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(32,35,31,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#526c4e]"
              >
                <div className="relative aspect-[1.12] overflow-hidden bg-[#d3ddd2]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#171b17]/75 via-[#171b17]/10 to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#e8efe7]/95 px-3 py-1.5 text-[9px] font-medium tracking-[0.12em] text-[#555950] shadow-sm">
                    Concept · {service.number} / 04
                  </span>
                  <h3 className="absolute bottom-5 left-5 text-2xl font-medium tracking-[-0.045em] text-[#fffaf3] sm:text-[1.7rem]">
                    {service.name}
                  </h3>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8efe7] text-[#26362f] transition-colors group-hover:bg-[#526c4e] group-hover:text-white">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#526c4e]">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-[13px] leading-5 text-[#4f574f]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-perspective bg-[#26362f] text-[#e8efe7]">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-16 sm:px-8 md:grid-cols-[1fr_0.85fr] md:items-center md:gap-16 md:py-24 lg:px-14 lg:py-28">
          <motion.div {...reveal}>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c5d5bd]">
              Our point of view
            </p>
            <h2 className="max-w-[760px] text-[clamp(2.8rem,6.2vw,6rem)] font-medium leading-[0.95] tracking-[-0.07em]">
              The details are
              <br />
              what make a place
              <br />
              <span className="font-serif font-normal italic text-[#c5d5bd]">
                feel like yours.
              </span>
            </h2>
            <p className="mt-6 max-w-[490px] text-sm leading-7 text-white/65">
              We bring big ideas and the little decisions together. Every
              material, proportion and detail has a part to play in making a
              space feel complete.
            </p>
          </motion.div>
          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.12 }}
            className="relative aspect-[1.12] overflow-hidden bg-[#3e5540]"
          >
            <Image
              src="/images/varatect-commercial-visualisation.webp"
              alt="A carefully composed commercial architecture concept"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <p className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.16em] text-white/85">
              Concept visualisation · Design, considered from the beginning
            </p>
          </motion.div>
        </div>
      </section>

      <ProcessFlowChart steps={process} />

      <section id="contact" className="home-contact scroll-mt-24 bg-[#526c4e] text-[#fffaf3]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between md:py-24 lg:px-14 lg:py-28">
          <motion.div {...reveal}>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
              Have a project in mind?
            </p>
            <h2 className="max-w-[830px] text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.075em]">
              Let&apos;s make
              <br />
              space for{" "}
              <span className="font-serif font-normal italic">what matters.</span>
            </h2>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white/75">
              What are you planning?
            </p>
            <div className="mb-6 flex max-w-[410px] flex-wrap gap-2">
              {projectStarts.map((start) => (
                <Link
                  key={start.project}
                  href={`/contact?project=${start.project}`}
                  className="rounded-full border border-white/35 px-4 py-2.5 text-[11px] text-white transition-colors hover:border-[#e8efe7] hover:bg-[#e8efe7] hover:text-[#26362f]"
                >
                  {start.label}
                </Link>
              ))}
            </div>
            <p className="mb-5 max-w-[310px] text-sm leading-6 text-white/75">
              Choose a starting point or tell us about your project in your own
              words.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 rounded-full bg-[#e8efe7] px-6 py-4 text-[11px] font-medium text-[#26362f] transition-colors hover:bg-[#26362f] hover:text-white"
            >
              Start a conversation <ArrowIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
