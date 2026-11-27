import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Vara Revive | Renovation & Restoration",
  description:
    "Reimagine existing spaces through renovation, restoration and interior remodelling with Vara Revive by VARATECT.",
};

const division = {
  "number": "03",
  "name": "Vara Revive",
  "tagline": "Your Past, Our Vision.",
  "summary": "Renewing existing spaces into functional and inspiring environments.",
  "details": "Vara Revive specialises in transforming existing spaces into renewed, functional and inspiring environments. Whether it is a complete home renovation, an exterior transformation, interior remodelling or restoration, we bring fresh perspectives to existing structures while respecting their character and potential. We reimagine what exists and create spaces for a better tomorrow.",
  "image": "/images/varatect-entry-concept.webp",
  "includes": [
    "Complete home renovation",
    "Exterior transformation",
    "Interior remodelling",
    "Restoration of existing spaces"
  ]
};

export default function Page() {
  return <DivisionPage division={division} />;
}
