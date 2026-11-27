import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ProjectBriefEntry from "../components/ProjectBriefEntry";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact VARATECT to discuss architecture, interiors, renovation or commercial design.",
};

const faqs = [
  {
    question: "Can I start if my ideas are still taking shape?",
    answer:
      "Absolutely. You do not need finalized plans or a complete brief. Share what you know so far, and the team can help you explore the next steps.",
  },
  {
    question: "What information should I prepare?",
    answer:
      "A rough idea of the space, its location, your priorities and any timing you have in mind is helpful. Approximate area and budget are optional, and it is fine to leave details undecided.",
  },
  {
    question: "Which VARATECT team should I choose?",
    answer:
      "Vara Home focuses on homes and residential design; Vara Revive handles renovation, remodelling and restoration; Vara BIZ is for commercial spaces; and Vara Pro offers premium architecture, bespoke interiors and consultancy. If you are unsure, choose the closest fit.",
  },
  {
    question: "Does submitting the brief automatically send my enquiry?",
    answer:
      "No. Your brief is prepared as an email draft for you to review. It stays in your browser until you open the draft in your email app and choose to send it.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#e8efe7] text-[#20231f]">
      <SiteHeader />

      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 sm:px-8 md:pb-14 md:pt-24 lg:px-14">
        <div className="max-w-4xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#66785e]">
            Start a project
          </p>
          <h1 className="mt-6 max-w-3xl text-[clamp(3rem,7vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.075em]">
            Let’s shape a space around{" "}
            <span className="font-serif font-normal italic text-[#526c4e]">
              you.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#5e635c]">
            Tell our team what you need, what matters to you, and where you are
            in your journey. Share as much or as little as you know—we’ll help
            you work through the rest.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-14">
        <Suspense
          fallback={
            <p role="status" className="mx-auto max-w-[1040px] py-10 text-sm">
              Preparing your project brief…
            </p>
          }
        >
          <ProjectBriefEntry />
        </Suspense>
      </section>

      <section
        aria-labelledby="project-faq-heading"
        className="contact-faq-section mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 md:pb-24 lg:px-14"
      >
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#526c4e]">
              Before we begin
            </p>
            <h2
              id="project-faq-heading"
              className="mt-4 max-w-md text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.06em]"
            >
              A few helpful things to know.
            </h2>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="contact-faq-item group rounded-2xl border border-[#26362f]/10 bg-white/45 px-5 sm:px-6"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#526c4e]/25 text-lg font-normal text-[#526c4e] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-[#4f574f]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dfe9df] px-5 py-12 sm:px-8 md:py-16 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-[#5e635c]">
            Still exploring? Learn about the studio or browse our concept
            visualisations before getting in touch.
          </p>
          <div className="flex flex-wrap gap-5 text-sm">
            <Link
              href="/studio"
              className="border-b border-[#20231f]/30 pb-1 transition-colors hover:border-[#526c4e] hover:text-[#526c4e]"
            >
              About VARATECT
            </Link>
            <Link
              href="/portfolio"
              className="border-b border-[#20231f]/30 pb-1 transition-colors hover:border-[#526c4e] hover:text-[#526c4e]"
            >
              Concept gallery
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
