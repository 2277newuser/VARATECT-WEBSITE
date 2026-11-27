import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "Learn about VARATECT’s considered approach to architecture, interiors, renovation and commercial design.",
};

const principles = [
  {
    number: "01",
    title: "Begin by listening",
    description:
      "We start with your needs, aspirations and the character of the space.",
  },
  {
    number: "02",
    title: "Explore with purpose",
    description:
      "We test ideas together and shape a clear direction for the design.",
  },
  {
    number: "03",
    title: "Refine the details",
    description:
      "We bring plans, materials and meaningful details into a considered whole.",
  },
  {
    number: "04",
    title: "Make space for life",
    description:
      "We aim for spaces that work beautifully and feel personal to the people who use them.",
  },
];

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#e8efe7] text-[#20231f]">
      <SiteHeader />

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24 lg:px-14 lg:py-28">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#66785e]">
            About the studio
          </p>
          <h1 className="mt-6 max-w-2xl text-[clamp(3rem,7vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.075em]">
            Design that feels like{" "}
            <span className="font-serif font-normal italic text-[#526c4e]">
              belonging.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#5e635c]">
            VARATECT is an architecture and design studio that helps people
            create, transform and improve their spaces. We offer architectural
            design, interior design, renovation and commercial design services,
            along with personalised design consultancy tailored to each
            client&apos;s needs and vision.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b6e67]">
            We are passionate about exploring architecture, experimenting with
            ideas and discovering new possibilities through design. We believe
            every space has its own potential, and love bringing it to life
            through thoughtful planning, unique concepts and meaningful design
            solutions.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b6e67]">
            We work closely with clients throughout their design journey,
            understanding their aspirations, exploring possibilities and
            developing ideas into well-thought-out designs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#26362f] px-6 py-4 text-[11px] font-medium text-white transition-colors hover:bg-[#526c4e]"
          >
            Talk about your project
          </Link>
        </div>

        <div className="relative min-h-[360px] overflow-hidden bg-[#d3ddd2] sm:min-h-[470px]">
          <Image
            src="/images/varatect-residential-visualisation.webp"
            alt="Concept visualisation of a contemporary home within a green landscape"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-[#202b26]/85 px-4 py-2 text-[9px] uppercase tracking-[0.14em] text-white">
            Concept visualisation
          </span>
        </div>
      </section>

      <section className="bg-[#dfe9df]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#66785e]">
              How we work
            </p>
            <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.065em]">
              A clear process.
              <br />
              <span className="font-serif font-normal italic text-[#526c4e]">
                Thoughtful outcomes.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid border-t border-[#20231f]/20 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-b border-[#20231f]/20 py-6 sm:px-5 lg:border-b-0 lg:border-r lg:py-7 first:sm:pl-0 last:lg:border-r-0"
              >
                <span className="text-[10px] font-medium tracking-[0.12em] text-[#526c4e]">
                  {principle.number}
                </span>
                <h3 className="mt-7 text-xl font-medium tracking-[-0.04em]">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-[260px] text-sm leading-6 text-[#6d7069]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between md:py-20 lg:px-14">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#66785e]">
            One studio, many possibilities
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.06em] md:text-5xl">
            Find the right team for your space.
          </h2>
        </div>
        <Link
          href="/#services"
          className="w-fit border-b border-[#20231f]/30 pb-2 text-sm transition-colors hover:border-[#526c4e] hover:text-[#526c4e]"
        >
          Explore our divisions
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
