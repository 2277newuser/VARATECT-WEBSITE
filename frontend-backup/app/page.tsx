
"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

const services = [
  {
    number: "01",
    name: "Vara Pro",
    image: "/images/varatect-facade-concept.webp",
    tagline: "Your Vision, Our Signature",
    summary:
      "Distinctive architecture, bespoke interiors and exceptional spatial experiences.",
    details:
      "Vara Pro is the premium design division of Varatect, dedicated to distinctive architecture, bespoke interiors and exceptional spatial experiences. Through creative exploration, refined detailing and personalised design consultancy, we develop unique solutions for clients seeking something beyond the ordinary.",
    includes: [
      "Distinctive architectural design",
      "Bespoke interior design",
      "Refined detailing and spatial planning",
      "Personalised design consultancy",
    ],
  },
  {
    number: "02",
    name: "Vara Home",
    image: "/images/varatect-residential-visualisation.webp",
    tagline: "Your Dream, Our Design",
    summary:
      "Thoughtfully designed homes shaped around your lifestyle and individuality.",
    details:
      "Vara Home is dedicated to creating homes that reflect your lifestyle, aspirations and individuality. From initial planning and architectural design to interiors and landscape design, we transform your dream of a home into a meaningful living experience with creativity, functionality and attention to detail.",
    includes: [
      "Initial home planning",
      "Architectural design",
      "Interior design",
      "Landscape design",
    ],
  },
  {
    number: "03",
    name: "Vara Revive",
    image: "/images/varatect-entry-concept.webp",
    tagline: "Your Past, Our Vision.",
    summary:
      "Renewing existing spaces into functional and inspiring environments.",
    details:
      "Vara Revive specialises in transforming existing spaces into renewed, functional and inspiring environments. Whether it is a complete home renovation, an exterior transformation, interior remodelling or restoration, we bring fresh perspectives to existing structures while respecting their character and potential.",
    includes: [
      "Complete home renovation",
      "Exterior transformation",
      "Interior remodelling",
      "Restoration of existing spaces",
    ],
  },
  {
    number: "04",
    name: "Vara BIZ",
    image: "/images/varatect-commercial-visualisation.webp",
    tagline: "Your Brand, Our Balance.",
    summary:
      "Innovative commercial spaces that reflect your brand and business vision.",
    details:
      "Vara BIZ focuses on designing innovative commercial spaces that reflect your brand identity and business vision. From offices, retail outlets and showrooms to restaurants and other business environments, we create spaces that balance aesthetics, functionality and customer experience.",
    includes: [
      "Office design",
      "Retail outlets and showrooms",
      "Restaurant spaces",
      "Business environments",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-white text-[#111111] selection:bg-black selection:text-white">

      {/* SCROLL PROGRESS */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-black"
        style={{ scaleX: smoothProgress }}
      />

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">

          <a
            href="#top"
            aria-label="Varatect home"
            className="text-xl font-semibold tracking-[0.2em] md:text-2xl"
          >
            VARATECT<span>.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["STUDIO", "#about"],
              ["SERVICES", "#services"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[10px] tracking-[0.2em] text-[#444444] transition-colors hover:text-black"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-3 bg-black px-5 py-3 text-[10px] tracking-[0.18em] text-white transition-all hover:bg-[#444444] sm:inline-flex"
          >
            START A PROJECT <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-black/20 text-xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-black/10 bg-white md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {[
                  ["STUDIO", "#about"],
                  ["SERVICES", "#services"],
                  ["CONTACT", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className="border-b border-black/10 py-4 text-xs tracking-[0.2em]"
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-[82vh] items-end overflow-hidden bg-black md:min-h-[calc(100vh-76px)]"
      >
        <motion.div
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=2200')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-32 text-white md:px-12 md:pb-28">

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-7 text-[10px] tracking-[0.35em] text-white/75 md:text-xs"
          >
            ARCHITECTURE · INTERIORS · TRANSFORMATION
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="max-w-5xl text-[clamp(3.5rem,9vw,8.8rem)] font-light leading-[0.94] tracking-[-0.055em]"
          >
            Your space,
            <br />
            <span className="font-normal italic text-white/75">
              our vision.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-sm leading-7 text-white/75 md:text-base">
              We create, transform and improve spaces through thoughtful
              architecture, meaningful interiors and personalised design.
            </p>

            <a
              href="#services"
              className="group inline-flex w-fit items-center gap-5 border-b border-white/60 pb-3 text-[10px] tracking-[0.2em] text-white transition-colors hover:text-white/60"
            >
              EXPLORE OUR WORK
              <span className="text-lg transition-transform group-hover:translate-x-2">
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-7 left-6 hidden items-center gap-3 text-[9px] tracking-[0.2em] text-white/65 md:left-12 md:flex"
        >
          <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_white]" />
          DESIGNING WITH PURPOSE
        </motion.div>

        <div className="absolute bottom-7 right-6 hidden items-center gap-4 text-[9px] tracking-[0.25em] text-white/70 md:right-12 md:flex">
          <span className="h-px w-12 bg-white/50" />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* INTRO / ABOUT VARATECT */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={fadeUp}
        transition={{ duration: 0.75 }}
        className="bg-white px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-[1600px]">

          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">

            {/* LEFT CONTENT */}
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#777777]">
                01 — ABOUT VARATECT
              </p>

              <h2 className="mt-8 text-5xl font-light leading-[1.05] tracking-[-0.06em] md:text-7xl">
                VARATECT
              </h2>

              <p className="mt-5 text-2xl font-light italic text-[#777777] md:text-3xl">
                Your space, our വര
              </p>

              <div className="mt-12 h-px w-20 bg-black" />

              <p className="mt-6 text-[10px] tracking-[0.25em] text-[#777777]">
                ARCHITECTURE · INTERIORS · DESIGN
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center">

              <p className="text-xl font-light leading-[1.7] tracking-[-0.02em] text-[#222222] md:text-2xl md:leading-[1.8]">
                VARATECT is an architecture and design studio that helps
                people create, transform and improve their spaces. We offer
                architectural design, interior design, renovation and
                commercial design services, along with personalised design
                consultancy tailored to each client's needs and vision.
              </p>

              <p className="mt-8 text-sm leading-8 text-[#666666] md:text-base md:leading-9">
                We are passionate about exploring architecture,
                experimenting with ideas and discovering new possibilities
                through design. We believe every space has its own potential,
                and we love finding creative ways to bring that potential to
                life through thoughtful planning, unique concepts and
                meaningful design solutions.
              </p>

              <p className="mt-6 text-sm leading-8 text-[#666666] md:text-base md:leading-9">
                We work closely with our clients from the very beginning to
                the end of their design journey, understanding their
                aspirations, exploring possibilities and developing ideas
                into well thought out designs.
              </p>

              <a
                href="#services"
                className="group mt-10 inline-flex w-fit items-center gap-5 border-b border-black pb-3 text-[10px] tracking-[0.2em]"
              >
                EXPLORE OUR DIVISIONS
                <span className="text-lg transition-transform group-hover:translate-x-2">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* STUDIO VALUES */}
      <section className="border-y border-[#dedede] bg-[#f5f5f5] px-6 py-8 md:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-6 sm:grid-cols-3">
          {[
            ["01", "PERSONAL APPROACH", "Every project begins with your story."],
            ["02", "THOUGHTFUL DESIGN", "Balancing beauty, purpose and function."],
            ["03", "DETAIL-LED THINKING", "Care in every choice, from concept to finish."],
          ].map(([number, title, copy], index) => (
            <motion.div
              key={number}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="flex gap-4 border-l border-black pl-5"
            >
              <span className="pt-1 text-[10px] tracking-widest text-black">
                {number}
              </span>

              <div>
                <p className="text-[10px] tracking-[0.18em]">{title}</p>
                <p className="mt-2 text-xs leading-6 text-[#555555]">
                  {copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDITORIAL IMAGE STRIP */}
      <section className="grid min-h-[300px] grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[540px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage:
                "url('/images/varatect-residential-visualisation.webp')",
            }}
          />
        </div>

        <div className="flex flex-col justify-between bg-[#eeeeee] px-8 py-10 md:px-12 md:py-14">
          <p className="text-[10px] tracking-[0.25em] text-[#333333]">
            OUR DESIGN PHILOSOPHY
          </p>

          <div className="my-12">
            <p className="max-w-lg text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
              Every space has a story waiting to be{" "}
              <span className="italic text-[#333333]">imagined.</span>
            </p>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#555555]">
              We explore the potential of each space through careful planning,
              creative concepts and attention to the details that make it
              personal.
            </p>
          </div>

          <p className="text-[10px] tracking-[0.2em] text-[#555555]">
            THOUGHTFUL BY DESIGN — VARATECT
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-[#f2f2f2] px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-[1600px]">

          <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-black">
                02 — WHAT WE DO
              </p>

              <h2 className="mt-6 text-5xl font-light tracking-[-0.05em] md:text-7xl">
                Four ways to
                <br />
                <span className="italic text-black">
                  shape your space.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#555555] md:justify-self-end">
              From a new home to a renewed space or a distinctive business
              environment, explore the Varatect divisions and find the right
              place to begin.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {services.map((service, index) => {
              const isOpen = openService === service.number;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                  className="group overflow-hidden border border-[#d2d2d2] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition-shadow duration-500 hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenService(isOpen ? null : service.number)
                    }
                    className="group block w-full text-left"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#eeeeee]">
                      <img
                        src={service.image}
                        alt={`${service.name} design`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />

                      <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] tracking-[0.18em] text-black">
                        {service.number}
                      </span>

                      <span
                        className={`absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "group-hover:translate-x-1"
                        }`}
                      >
                        +
                      </span>
                    </div>

                    <div className="p-6 md:p-8">
                      <p className="text-[10px] tracking-[0.22em] text-black">
                        {service.tagline}
                      </p>

                      <h3 className="mt-3 text-3xl font-light tracking-[-0.04em] transition-colors group-hover:text-[#555555] md:text-4xl">
                        {service.name}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#555555]">
                        {service.summary}
                      </p>

                      <p className="mt-5 text-[10px] tracking-[0.18em] text-black">
                        {isOpen ? "CLOSE DETAILS ↑" : "EXPLORE DIVISION ↗"}
                      </p>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#d2d2d2] px-6 py-7 md:px-8">
                          <p className="text-sm leading-8 text-[#555555]">
                            {service.details}
                          </p>

                          <p className="mb-4 mt-7 text-[10px] tracking-[0.22em] text-black">
                            SERVICES INCLUDE
                          </p>

                          <ul className="space-y-3 text-sm text-[#555555]">
                            {service.includes.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="text-black">↗</span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <a
                            href={`mailto:studiovaratect@gmail.com?subject=${encodeURIComponent(
                              `${service.name} enquiry`
                            )}`}
                            className="mt-8 inline-flex items-center gap-4 border-b border-black pb-2 text-[10px] tracking-[0.18em] transition-colors hover:text-[#555555]"
                          >
                            ENQUIRE ABOUT {service.name.toUpperCase()} ↗
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-[10px] tracking-[0.28em] text-black">
              03 — THE JOURNEY
            </p>

            <h2 className="mt-6 text-5xl font-light leading-tight tracking-[-0.05em] md:text-6xl">
              From first thought to{" "}
              <span className="italic text-black">final detail.</span>
            </h2>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            {[
              [
                "01",
                "Listen",
                "We begin by understanding your needs, aspirations and the way you want your space to work.",
              ],
              [
                "02",
                "Explore",
                "We explore possibilities, ideas and design directions around your vision.",
              ],
              [
                "03",
                "Design",
                "We develop considered design solutions with creativity and attention to detail.",
              ],
              [
                "04",
                "Transform",
                "We help take the design journey forward, from the initial idea towards a meaningful space.",
              ],
            ].map(([n, title, copy], index) => (
              <motion.div
                key={n}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={reduceMotion ? undefined : { x: 5 }}
                className="border-t border-[#d9d9d9] py-7 pr-7 sm:odd:mr-8"
              >
                <p className="text-[10px] tracking-widest text-black">{n}</p>
                <h3 className="mt-4 text-2xl font-light">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#555555]">
                  {copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-12 md:py-36">
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full border border-white/10"
        />

        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-4 -top-24 h-[350px] w-[350px] rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-[1600px]">
          <p className="text-[10px] tracking-[0.28em] text-white/70">
            LET’S MAKE SOMETHING MEANINGFUL
          </p>

          <h2 className="mt-8 max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-8xl">
            Have a space
            <br />
            in mind<span className="italic text-white/60">?</span>
          </h2>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/65">
              Tell us what you are imagining. We would love to hear about your
              project and explore what is possible.
            </p>

            <a
              href="mailto:studiovaratect@gmail.com?subject=New%20project%20enquiry"
              className="group inline-flex w-fit items-center gap-6 border-b border-white/60 pb-3 text-[10px] tracking-[0.2em] transition-colors hover:text-white/60"
            >
              START A CONVERSATION
              <span className="text-xl transition-transform group-hover:translate-x-2">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-black px-6 py-16 text-white md:px-12 md:py-20"
      >
        <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">

          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/65">
              VARATECT DESIGN STUDIO
            </p>

            <a
              href="#top"
              className="mt-6 inline-block text-4xl font-light tracking-[0.12em] md:text-5xl"
            >
              VARATECT<span className="text-white/60">.</span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Your space, our vision. Thoughtful architecture, meaningful
              interiors and creative transformations.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.22em] text-white/65">
              GET IN TOUCH
            </p>

            <p className="mt-7 text-xs text-white/45">
              STUDIO ENQUIRIES
            </p>

            <a
              href="mailto:studiovaratect@gmail.com"
              className="mt-2 block break-all text-sm transition-colors hover:text-white/60"
            >
              studiovaratect@gmail.com
            </a>

            <p className="mt-6 text-xs text-white/45">
              CUSTOMER CARE
            </p>

            <a
              href="mailto:varatecthq@gmail.com"
              className="mt-2 block break-all text-sm transition-colors hover:text-white/60"
            >
              varatecthq@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.22em] text-white/65">
              FOLLOW OUR JOURNEY
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 text-sm text-white/65">
              {[
                ["Instagram", "https://www.instagram.com/varatect/"],
                ["Facebook", "https://www.facebook.com/varatectstudio/"],
                [
                  "LinkedIn",
                  "https://www.linkedin.com/company/107967548/",
                ],
                [
                  "Find us on Google",
                  "https://www.google.com/search?q=varatect",
                ],
              ].map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1600px] flex-col justify-between gap-4 border-t border-white/15 pt-7 text-[9px] tracking-[0.12em] text-white/40 md:flex-row">
          <p>© 2026 VARATECT DESIGN STUDIO. ALL RIGHTS RESERVED.</p>

          <a
            href="#top"
            className="w-fit transition-colors hover:text-white"
          >
            BACK TO TOP ↑
          </a>

          <p>DESIGNED WITH PURPOSE. BUILT AROUND PEOPLE.</p>
        </div>
      </footer>
    </main>
  );
}
