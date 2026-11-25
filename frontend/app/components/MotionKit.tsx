"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Thin progress line at the very top of the screen that fills as you scroll.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[2px] w-full bg-white mix-blend-difference"
    />
  );
}

/**
 * Text that rises out of an invisible mask, one line at a time.
 * Wrap each line of a heading in its own <MaskLine>.
 */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
      <motion.span
        className={`block ${className}`}
        initial={reduceMotion ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Image that is "wiped" open when it scrolls into view,
 * while the picture inside settles from a slight zoom.
 * Keeps the hover zoom of the original design.
 */
export function RevealImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group overflow-hidden bg-[#e7e6e1]"
      initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={reduceMotion ? false : { scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: EASE }}
        className={`${className} transition-transform duration-700 group-hover:scale-[1.05]`}
      />
    </motion.div>
  );
}

/**
 * A line that draws itself from left to right when scrolled into view.
 */
export function DrawLine({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`h-px w-full origin-left ${className}`}
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    />
  );
}