"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MaskLine, ScrollProgress } from "./MotionKit";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type Division = {
  number: string;
  name: string;
  tagline: string;
  summary: string;
  details: string;
  image: string;
  includes: string[];
};

export default function DivisionPage({ division }: { division: Division }) {
  // Parallax for the hero image
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "11%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <main className="min-h-screen bg-[#e8efe7] text-[#20231f]">
      <ScrollProgress />
      <SiteHeader />

      <section ref={heroRef} className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-[#26362f] text-white md:min-h-[82vh]">
        <p className="absolute right-5 top-6 z-10 rounded-full bg-black/35 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-white/85 md:right-10">
          Concept visualisation
        </p>
        <motion.div
          aria-hidden
          style={{ y: bgY }}
          className="absolute inset-x-0 -top-[15%] -z-20 h-[130%]"
        >
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url("${division.image}")` }}
          />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        <motion.div
          style={{ y: textY }}
          className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-[10px] tracking-[.3em] text-white/70"
          >
            VARATECT DIVISION / {division.number}
          </motion.p>
          <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-light leading-[.9] tracking-[-.065em]">
            <MaskLine delay={0.15}>{division.name}</MaskLine>
            <MaskLine delay={0.35}>
              <span className="block pt-4 text-[clamp(1.2rem,3vw,2.5rem)] font-light italic tracking-normal text-white/75">
                {division.tagline}
              </span>
            </MaskLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-xl text-sm leading-7 text-white/75 md:text-base"
          >
            {division.summary}
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-32">
        <motion.div {...fadeUp}>
          <p className="text-[10px] tracking-[.25em] text-neutral-500">A CLOSER LOOK / {division.number}</p>
          <h2 className="mt-6 max-w-sm text-4xl font-light leading-tight tracking-[-.05em] md:text-6xl">A space shaped around <span className="italic">you.</span></h2>
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
          <p className="text-xl font-light leading-[1.7] tracking-[-.02em] md:text-2xl">{division.details}</p>
          <div className="mt-12 border-t border-black/15 pt-8">
            <p className="text-[10px] tracking-[.24em]">WHAT WE OFFER</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {division.includes.map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="flex gap-4 border-b border-black/10 pb-4">
                  <span className="text-xs text-neutral-400">0{i + 1}</span>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#26362f] px-5 py-20 text-[#f5f3ed] md:px-10 md:py-28">
        <motion.div {...fadeUp} className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] tracking-[.25em] text-white/50">HAVE A PROJECT IN MIND?</p>
            <h2 className="mt-5 max-w-2xl text-5xl font-light leading-[1.02] tracking-[-.055em] md:text-7xl">Let’s shape something <span className="italic text-[#d3b29f]">meaningful.</span></h2>
          </div>
          <a href={`mailto:studiovaratect@gmail.com?subject=${encodeURIComponent(`${division.name} enquiry`)}`} className="w-fit border-b border-white/60 pb-3 text-[10px] tracking-[.2em] transition hover:text-white/60">ENQUIRE ABOUT {division.name.toUpperCase()} ↗</a>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}