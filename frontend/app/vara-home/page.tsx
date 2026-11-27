import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Vara Home | Residential Design",
  description:
    "Discover thoughtful home planning, architecture, interiors and landscape design with Vara Home by VARATECT.",
};

const division = {
  "number": "02",
  "name": "Vara Home",
  "tagline": "Your Dream, Our Design",
  "summary": "Thoughtfully designed homes shaped around your lifestyle, aspirations and individuality.",
  "details": "Vara Home is dedicated to creating thoughtfully designed homes that reflect your lifestyle, aspirations and individuality. From initial planning and architectural design to interiors and landscape design, we transform your dream of a home into a meaningful living experience. Every space is designed with creativity, functionality and attention to detail.",
  "image": "/images/varatect-residential-visualisation.webp",
  "includes": [
    "Initial home planning",
    "Architectural design",
    "Interior design",
    "Landscape design"
  ]
};

export default function Page() {
  return <DivisionPage division={division} />;
}
