import React from "react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import { IMAGES } from "@/lib/images";

const config = {
  heroImage: IMAGES.heroSiding,
  eyebrow: "Siding & Exterior",
  title: "Premium Siding & Exterior in Greater Houston",
  subtitle: "Enhance your home's beauty, protection, and energy efficiency with expert siding installation and exterior upgrades.",
  seo: {
    title: "Siding & Exterior The Woodlands TX | Paragon Partners Construction",
    description:
      "Premium siding, soffit & fascia in Spring, The Woodlands, Tomball & Huntsville. Fiber cement & vinyl. Storm repairs. Request a consultation.",
    path: "/services/siding-exterior",
  },
  intro: {
    heading: "Your Home's First Impression, Elevated",
    paragraphs: [
      "Your home's exterior does more than look beautiful—it's a critical protective barrier against Houston's humidity, heat, and storm season. Paragon Partners Construction delivers premium siding solutions that combine stunning aesthetics with long-term durability.",
      "We specialize in fiber cement, vinyl, and composite siding systems from leading manufacturers like James Hardie. Our team handles everything from full siding replacements to storm damage repairs, with meticulous attention to detail in every trim, corner, and transition.",
      "A premium siding installation improves your home's energy efficiency, increases resale value, and provides superior protection against moisture intrusion—one of the leading causes of structural damage in Houston's humid climate.",
    ],
  },
  benefits: [
    "James Hardie fiber cement siding certified installer",
    "Premium vinyl and composite siding options",
    "Storm damage siding repair and replacement",
    "Soffit, fascia, and trim installation and repair",
    "Enhanced moisture resistance for Houston's humidity",
    "Energy-efficient insulated siding options available",
    "Transferable manufacturer and labor warranties",
  ],
  processSteps: [
    { title: "Design Consultation", description: "We review your home's architecture and your aesthetic goals to recommend the perfect siding system and color palette." },
    { title: "Material Selection", description: "Choose from premium siding options with samples and manufacturer color tools to visualize the final result." },
    { title: "Project Planning", description: "We prepare a detailed installation plan, secure necessary permits, and coordinate project logistics." },
    { title: "Expert Installation", description: "Our trained crew installs your siding with precision, ensuring proper moisture barriers, trim, and transitions." },
    { title: "Final Inspection", description: "A thorough quality inspection ensures every panel, trim, and caulk line meets our exacting standards before sign-off." },
  ],
  faqs: [
    { question: "What type of siding is best for Houston's climate?", answer: "Fiber cement siding (like James Hardie) is our top recommendation for Houston. It resists humidity, insects, rot, and impact damage better than vinyl or wood. It doesn't warp in heat, is fire-resistant, and holds paint beautifully. It's the premium choice for Houston's demanding climate." },
    { question: "How long does a siding installation take?", answer: "A complete siding replacement on an average-sized home typically takes 5-10 business days depending on home size, complexity, and weather. We'll provide a specific timeline during your consultation." },
    { question: "Can you match my existing siding for a partial repair?", answer: "For standard vinyl siding, matching is often possible if the product line is still manufactured. For fiber cement siding, we can typically match profiles and paint colors. We'll assess your existing siding and provide an honest assessment of matching options." },
    { question: "Does new siding improve my home's energy efficiency?", answer: "Yes, significantly. Modern insulated siding systems add R-value that reduces heat transfer, lowering cooling costs in Houston's summer heat. Proper installation also eliminates air infiltration around windows and penetrations, further improving efficiency." },
    { question: "Will new siding increase my home's resale value?", answer: "Siding replacement consistently ranks among the highest ROI home improvements. According to national remodeling data, fiber cement siding replacement returns approximately 76-88% of cost at resale, while also making your home significantly more attractive to buyers." },
  ],
  formTitle: "Request Your Free Exterior Consultation",
  formSubtitle: "Expert siding assessment with no obligation",
  serviceType: "Siding & Exterior",
  related: ["residential-roofing", "gutter-systems", "storm-damage"],
};

export default function SidingExterior() {
  return <ServicePageLayout config={config} />;
}