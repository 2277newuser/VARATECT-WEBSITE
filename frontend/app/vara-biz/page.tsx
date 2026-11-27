import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Vara BIZ | Commercial Design",
  description:
    "Explore commercial architecture and design for offices, retail, showrooms and other business spaces with Vara BIZ by VARATECT.",
};

const division = {
  "number": "04",
  "name": "Vara BIZ",
  "tagline": "Your Brand, Our Balance.",
  "summary": "Innovative commercial spaces that reflect your brand and business vision.",
  "details": "Vara BIZ focuses on designing innovative commercial spaces that reflect your brand identity and business vision. From offices, retail outlets and showrooms to restaurants and other business environments, we create spaces that balance aesthetics, functionality and customer experience. Every project is an opportunity to translate your brand into a physical environment.",
  "image": "/images/varatect-commercial-visualisation.webp",
  "includes": [
    "Office design",
    "Retail outlets and showrooms",
    "Restaurant spaces",
    "Business environments"
  ]
};

export default function Page() {
  return <DivisionPage division={division} />;
}
