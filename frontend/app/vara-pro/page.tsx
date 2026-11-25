import DivisionPage from "../components/DivisionPage";

const division = {
  "number": "01",
  "name": "Vara Pro",
  "tagline": "Your Vision, Our Signature",
  "summary": "Distinctive architecture, bespoke interiors and exceptional spatial experiences.",
  "details": "Vara Pro is the premium design division of Varatect, dedicated to distinctive architecture, bespoke interiors and exceptional spatial experiences. Through creative exploration, refined detailing and personalised design consultancy, we develop unique solutions for clients seeking something beyond the ordinary.",
  "image": "/images/varatect-facade-concept.webp",
  "includes": [
    "Distinctive architectural design",
    "Bespoke interior design",
    "Refined detailing and spatial planning",
    "Personalised design consultancy"
  ]
};

export default function Page() {
  return <DivisionPage division={division} />;
}
