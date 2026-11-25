"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { DrawLine, MaskLine, ScrollProgress } from "./components/MotionKit";

const divisions = [
  {
    number: "01",
    name: "Vara Pro",
    tagline: "Your Vision, Our Signature",
    description:
      "Distinctive architecture, bespoke interiors and exceptional spatial experiences.",
    href: "/vara-pro",
  },
  {
    number: "02",
    name: "Vara Home",
    tagline: "Your Dream, Our Design",
    description:
      "Thoughtful home planning, architectural design, interiors and landscape design.",
    href: "/vara-home",
  },
  {
    number: "03",
    name: "Vara Revive",
    tagline: "Your Past, Our Vision",
    description:
      "Renovation, restoration and transformations that give existing spaces new life.",
    href: "/vara-revive",
  },
  {
    number: "04",
    name: "Vara BIZ",
    tagline: "Your Brand, Our Balance",
    description:
      "Distinctive environments for offices, retail outlets, showrooms and businesses.",
    href: "/vara-biz",
  },
];

const process = [
  [
    "01",
    "Discover",
    "Understanding your vision, needs and the possibilities of your space.",
  ],
  [
    "02",
    "Imagine",
    "Developing concepts, exploring ideas and shaping the design direction.",
  ],
  [
    "03",
    "Design",
    "Turning ideas into thoughtful plans, details and visual experiences.",
  ],
  [
    "04",
    "Deliver",
    "Bringing the design to life through careful coordination and execution.",
  ],
];

// Animated underline for desktop nav links
const navLink =
  "relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Parallax for the hero background
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroProgress, [0, 1], ["0%", "11%"]);
  const heroTextY = useTransform(heroProgress, [0, 1], ["0px", "-60px"]);

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <main className="overflow-hidden bg-[#f7f7f4] text-sm text-[#171717]">
      <ScrollProgress />

      {/* NAVIGATION */}
      <header className="relative z-50 border-b border-black/10 bg-[#f7f7f4]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">

          <a href="#" className="flex shrink-0 items-center">
            <img
              src="/images/varatect-logo.png"
              alt="VaraTect"
              className="h-6 w-[75px] object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.15em] md:flex">
            <a href="#studio" className={navLink}>
              Studio
            </a>
            <a href="#services" className={navLink}>
              Services
            </a>
            <a href="#contact" className={navLink}>
              Contact
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[10px] uppercase tracking-[0.15em] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close −" : "Menu +"}
          </button>

          <a
            href="#contact"
            className="hidden border border-black px-4 py-2.5 text-[9px] uppercase tracking-[0.15em] transition hover:bg-black hover:text-white md:block"
          >
            Start a project ↗
          </a>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-black/10 text-[11px] uppercase tracking-widest md:hidden"
            >
              <div className="flex flex-col gap-5 px-6 py-6">
                {[
                  ["Studio", "#studio"],
                  ["Services", "#services"],
                  ["Contact", "#contact"],
                ].map(([name, href], i) => (
                  <motion.a
                    key={name}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.4 }}
                  >
                    {name}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* INTRODUCTION */}
      <section
        ref={heroRef}
        className="relative mx-auto flex min-h-[570px] max-w-[1600px] flex-col justify-between overflow-hidden bg-black px-6 pb-7 pt-20 text-white md:min-h-[640px] md:px-12 md:pb-8 md:pt-24 lg:px-20"
      >
        {/* Background image: slow zoom-in on load + parallax on scroll */}
        <motion.div
          aria-hidden
          style={{ y: reduceMotion ? 0 : heroBgY }}
          className="absolute inset-x-0 -top-[15%] h-[130%]"
        >
          <motion.div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/varatect-introduction.jpg')" }}
            initial={reduceMotion ? false : { scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Dark image overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero heading */}
        <motion.div
          className="relative z-10"
          style={{ y: reduceMotion ? 0 : heroTextY }}
        >
          <motion.p
            className="mb-5 text-[9px] uppercase tracking-[0.22em] text-white/70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Architecture · Interiors · Spatial Design
          </motion.p>

          <h1 className="max-w-[900px] text-[clamp(2.1rem,5.5vw,4.6rem)] font-medium leading-[0.9] tracking-[-0.075em]">
            <MaskLine delay={0.15}>Spaces</MaskLine>
            <MaskLine delay={0.3}>
              with{" "}
              <span className="font-serif italic font-normal">meaning.</span>
            </MaskLine>
          </h1>
        </motion.div>

        {/* ABOUT VARATECT */}
        <motion.div
          className="relative z-10 mt-12 grid gap-7 md:mt-14 md:grid-cols-12 md:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            className="md:col-span-5"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-white/50">
              About VaraTect
            </p>

            <h2 className="text-base font-light leading-tight tracking-tight text-white md:text-2xl">
              Our Space.
              <br />
              <span className="text-white/50">Our Vision.</span>
            </h2>

            <p className="mt-3 text-xs font-light tracking-wide text-white/65">
              Architecture · Interiors · Thoughtful Design
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="md:col-span-7"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-medium leading-6 text-white">
              VARATECT is an architecture and design studio dedicated to
              creating, transforming and enhancing spaces through thoughtful
              design.
            </p>

            <p className="mt-4 text-xs font-light leading-6 text-white/65">
              We offer architectural design, interior design, renovation and
              commercial design services, along with personalised design
              consultancy shaped around each client&apos;s needs and vision.
            </p>

            <p className="mt-4 text-xs font-light leading-6 text-white/65">
              We are passionate about exploring architecture, experimenting
              with ideas and discovering new possibilities. We believe every
              space has its own potential, and we bring that potential to
              life through creative concepts, careful planning and meaningful
              design solutions.
            </p>

            <p className="mt-4 text-xs font-light leading-6 text-white/65">
              From the first conversation to the final details, we work
              closely with our clients, understanding their aspirations and
              turning possibilities into thoughtful, well-developed designs.
            </p>

            <motion.div
              className="mt-6 h-px w-full bg-white/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "left" }}
            />

            <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-white/50">
              Designing spaces. Creating possibilities.
            </p>
          </motion.div>
        </motion.div>

        {/* EXPLORE LINK */}
        <motion.a
          href="#studio"
          className="relative z-10 mt-10 flex w-fit items-center gap-4 border-b border-white/60 pb-2 text-[9px] uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Explore our studio
          <motion.span
            className="text-base"
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.a>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-black/10 py-4">
        <motion.div
          animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-12 whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-neutral-500"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>
              Architecture ✳ Interiors ✳ Design ✳ Your space, our വര ✳
            </span>
          ))}
        </motion.div>
      </div>

      {/* STUDIO */}
      <section id="studio" className="bg-[#191919] text-[#f7f7f4]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-20 lg:px-20">
          <motion.div
            className="md:col-span-5"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-white/40">
              01 / Who we are
            </p>

            <h2 className="text-2xl font-medium leading-[1.02] tracking-[-0.055em] md:text-3xl">
              Design
              <br />
              beyond
              <br />
              <span className="font-serif italic font-normal">
                ordinary.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col justify-end md:col-span-6 md:col-start-7"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-5 text-sm leading-6 tracking-tight md:text-base">
              Every space begins with an idea. We turn that idea into a place
              that feels considered, personal and meaningful.
            </p>

            <p className="max-w-lg text-xs leading-7 text-white/55">
              VARATECT brings together architectural design, interior design,
              renovation, commercial design and personalised consultancy.
              We believe the best spaces are created through understanding,
              collaboration and thoughtful design decisions.
            </p>

            <a
              href="#contact"
              className="mt-8 w-fit border-b border-white/50 pb-2 text-[9px] uppercase tracking-[0.2em] transition hover:border-white"
            >
              Get to know our approach ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-14 lg:px-20"
      >
        <motion.div
          className="mb-10"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-neutral-500">
            02 / What we do
          </p>

          <h2 className="text-2xl font-medium tracking-[-0.055em] md:text-3xl">
            Our{" "}
            <span className="font-serif italic font-normal">divisions.</span>
          </h2>
        </motion.div>

        <div className="border-t border-black/20">
          {divisions.map((division, index) => (
            <motion.a
              key={division.number}
              href={division.href}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid gap-4 border-b border-black/20 py-6 transition-colors hover:bg-[#eeede8] md:grid-cols-12 md:items-center md:px-5"
            >
              <span className="text-[10px] text-neutral-400 md:col-span-1">
                {division.number}
              </span>

              <div className="md:col-span-4">
                <h3 className="text-lg font-medium tracking-[-0.04em] transition-transform group-hover:translate-x-1 md:text-base">
                  {division.name}
                </h3>

                <p className="mt-2 text-[10px] text-neutral-500">
                  {division.tagline}
                </p>
              </div>

              <p className="max-w-md text-xs leading-6 text-neutral-500 md:col-span-5">
                {division.description}
              </p>

              <span className="text-base transition-transform group-hover:translate-x-2 md:col-span-2 md:text-right">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#e9e8e3]">
        <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-14 lg:px-20">
          <motion.div
            className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-neutral-500">
                03 / How we work
              </p>

              <h2 className="text-2xl font-medium tracking-[-0.055em] md:text-3xl">
                From idea
                <br />
                to{" "}
                <span className="font-serif italic font-normal">reality.</span>
              </h2>
            </div>

            <p className="max-w-[260px] text-xs leading-6 text-neutral-500">
              A thoughtful process that transforms ideas into meaningful
              spaces, with clarity and purpose at every stage.
            </p>
          </motion.div>

          <DrawLine className="bg-black/20" />
          <div className="grid gap-0 md:grid-cols-4">
            {process.map(([number, title, description], index) => (
              <motion.div
                key={number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group border-b border-black/20 py-6 md:border-b-0 md:border-r md:px-5 md:py-7 first:md:pl-0 last:md:border-r-0"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">
                    {number}
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 text-xs transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                    ↗
                  </span>
                </div>

                <h3 className="mb-3 text-base tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {title}
                </h3>

                <p className="max-w-[230px] text-xs leading-6 text-neutral-500">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#191919] text-[#f7f7f4]">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-14 lg:px-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-white/45">
              04 / Start a conversation
            </p>

            <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-2xl md:text-3xl">
              Have a space in{" "}
              <span className="font-serif italic font-normal">mind?</span>
            </h2>

            <p className="mt-4 max-w-[380px] text-xs leading-6 text-white/45">
              Let&apos;s discuss your next project and create something
              considered, functional and timeless.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-7 border-t border-white/15 pt-7 md:grid-cols-2">
            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/40">
                Let&apos;s create something
              </p>

              <a
                href="mailto:studiovaratect@gmail.com"
                className="group inline-flex items-center gap-3 text-xs transition-colors hover:text-white/60"
              >
                studiovaratect@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <p className="mt-3 text-xs text-white/40">
                varatecthq@gmail.com
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-white/40">
                Connect with us
              </p>

              <div className="flex flex-wrap gap-2">
                <motion.a
                  href="https://www.instagram.com/varatect/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-3 border border-white/20 px-4 py-3 text-[10px] uppercase tracking-[0.12em] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#191919]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/varatectstudio/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-3 border border-white/20 px-4 py-3 text-[10px] uppercase tracking-[0.12em] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#191919]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.5Z" />
                  </svg>
                  Facebook
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/company/107967548/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-3 border border-white/20 px-4 py-3 text-[10px] uppercase tracking-[0.12em] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#191919]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M6.5 8.5A2 2 0 1 0 6.5 4.5a2 2 0 0 0 0 4ZM5 10h3v9H5v-9Zm5 0h2.9v1.2h.1c.4-.8 1.4-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.3V19h-3v-4.4c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9Z" />
                  </svg>
                  LinkedIn
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#191919] px-6 pb-6 text-[#f7f7f4] md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 border-t border-white/15 pt-5 text-[9px] tracking-wider text-white/40 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#"
            className="text-[13px] font-semibold tracking-[0.12em] text-white transition-opacity hover:opacity-60"
          >
            VARATECT.
          </a>

          <p className="text-[10px]">Your space, our വര</p>

          <p>© 2026 VARATECT. All rights reserved.</p>

          <a
            href="#"
            className="group inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}