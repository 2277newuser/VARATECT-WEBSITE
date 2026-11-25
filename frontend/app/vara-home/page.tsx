import DivisionPage from "../components/DivisionPage";

const division = {
  "number": "02",
  "name": "Vara Home",
  "tagline": "Your Dream, Our Design",
  "summary": "Thoughtfully designed homes shaped around your lifestyle and individuality.",
  "details": "Vara Home is dedicated to creating homes that reflect your lifestyle, aspirations and individuality. From initial planning and architectural design to interiors and landscape design, we transform your dream of a home into a meaningful living experience with creativity, functionality and attention to detail.",
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
