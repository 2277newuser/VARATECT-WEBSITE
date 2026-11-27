"use client";

import { motion } from "motion/react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessFlowChart({
  steps,
}: {
  steps: ProcessStep[];
}) {
  return (
    <section
      id="approach"
      className="process-flow-section scroll-mt-24 bg-[#dfe9df]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#526c4e]">
              Our approach
            </p>
            <h2 className="text-[clamp(2.4rem,4.6vw,4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
              A good process
              <br />
              makes room for{" "}
              <span className="font-serif font-normal italic text-[#526c4e]">
                good ideas.
              </span>
            </h2>
          </div>
          <p className="max-w-[320px] text-sm leading-6 text-[#50574f]">
            Clear communication and considered choices, from the first
            conversation to the final details.
          </p>
        </motion.div>

        <div className="process-flow-track relative">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-10 w-full overflow-visible lg:block"
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
          >
            <path
              d="M125 20H875"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
            <motion.path
              d="M125 20H875"
              fill="none"
              stroke="#78956e"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          <div className="grid gap-4 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="process-flow-step relative grid grid-cols-[40px_1fr] items-start gap-4 lg:flex lg:flex-col lg:items-center lg:gap-0"
              >
                <span className="process-flow-node relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#526c4e]/40 bg-[#dfe9df] text-[10px] font-medium tracking-[0.08em] text-[#526c4e] transition-colors duration-300 lg:shrink-0">
                  {step.number}
                </span>
                <div className="process-flow-card min-h-full rounded-2xl border border-[#26362f]/10 bg-white/45 p-5 transition-[border-color,background-color,box-shadow] duration-300 sm:p-6 lg:mt-5 lg:w-full lg:min-h-[214px]">
                  <h3 className="text-xl font-medium tracking-[-0.04em] sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#4f574f]">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
