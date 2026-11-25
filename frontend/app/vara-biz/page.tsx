import DivisionPage from "../components/DivisionPage";

const division = {
  "number": "04",
  "name": "Vara BIZ",
  "tagline": "Your Brand, Our Balance.",
  "summary": "Innovative commercial spaces that reflect your brand and business vision.",
  "details": "Vara BIZ focuses on designing innovative commercial spaces that reflect your brand identity and business vision. From offices, retail outlets and showrooms to restaurants and other business environments, we create spaces that balance aesthetics, functionality and customer experience.",
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
