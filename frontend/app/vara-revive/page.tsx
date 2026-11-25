import DivisionPage from "../components/DivisionPage";

const division = {
  "number": "03",
  "name": "Vara Revive",
  "tagline": "Your Past, Our Vision.",
  "summary": "Renewing existing spaces into functional and inspiring environments.",
  "details": "Vara Revive specialises in transforming existing spaces into renewed, functional and inspiring environments. Whether it is a complete home renovation, an exterior transformation, interior remodelling or restoration, we bring fresh perspectives to existing structures while respecting their character and potential.",
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
