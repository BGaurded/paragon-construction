import React from "react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import { IMAGES } from "@/lib/images";

const config = {
  heroImage: IMAGES.heroCommercial,
  eyebrow: "Commercial Services",
  title: "Commercial Roofing Solutions in Greater Houston",
  subtitle: "Reliable, low-disruption roofing systems engineered for businesses and commercial property managers.",
  seo: {
    title: "Commercial Roofing The Woodlands TX | Paragon Partners Construction",
    description:
      "Commercial flat roofing, TPO, EPDM & metal across Greater Houston—Spring, The Woodlands, Conroe, Cypress & Sugar Land. Minimal disruption. Licensed & insured. Request a consultation.",
    path: "/services/commercial-roofing",
  },
  intro: {
    heading: "Commercial Roofing Built for Houston's Demands",
    paragraphs: [
      "Commercial roofing requires a specialized approach that balances durability, energy efficiency, and minimal disruption to your business operations. Paragon Partners Construction has the expertise, equipment, and certified workforce to handle projects of any scale.",
      "We specialize in all major commercial roofing systems including TPO, EPDM, modified bitumen, and standing seam metal roofing. Our team conducts thorough site assessments to recommend the system best suited to your building's structure, climate exposure, and budget.",
      "As a commercial property owner or manager, you need a roofing partner you can trust for long-term performance and responsive service. Our preventative maintenance programs help you avoid costly emergency repairs and protect your investment for decades.",
    ],
  },
  benefits: [
    "Expertise in TPO, EPDM, metal, and flat roofing systems",
    "Minimal business disruption during installation",
    "Preventative maintenance programs available",
    "Detailed project documentation and permitting",
    "Energy-efficient roof coatings to reduce HVAC costs",
    "Emergency repair response for commercial properties",
    "Long-term service agreements for ongoing maintenance",
  ],
  processSteps: [
    { title: "Site Assessment & Consultation", description: "Comprehensive evaluation of your commercial property's roofing needs and structural requirements." },
    { title: "Custom Proposal & Timeline", description: "We develop a detailed proposal with a clear timeline designed to minimize operational disruption." },
    { title: "Project Planning & Permits", description: "We handle all necessary permits and coordinate logistics for a smooth installation process." },
    { title: "Professional Installation", description: "Certified crews execute the installation with precision and strict quality control protocols." },
    { title: "Ongoing Maintenance Support", description: "Post-installation inspection, documentation, and access to our preventative maintenance programs." },
  ],
  faqs: [
    { question: "What commercial roofing systems do you install?", answer: "We install all major commercial roofing systems: TPO (Thermoplastic Polyolefin), EPDM rubber roofing, modified bitumen, built-up roofing (BUR), standing seam metal, and commercial roof coatings. We'll recommend the best system for your specific building and climate exposure." },
    { question: "How do you minimize disruption to our business operations?", answer: "We schedule work during off-hours when possible, use efficient installation methods to reduce project duration, create clear communication plans with your team, and stage materials to minimize impact on parking and access areas." },
    { question: "Do you offer commercial roofing maintenance programs?", answer: "Yes, we offer annual and bi-annual maintenance programs for commercial properties that include thorough inspections, minor repairs, drain cleaning, and detailed condition reports. Regular maintenance can extend your roof's life by 5-10 years." },
    { question: "How long do commercial roofs typically last?", answer: "Lifespan varies by system: TPO and EPDM typically last 20-30 years with proper maintenance; metal roofing can last 40-70 years; modified bitumen typically provides 15-25 years. Proper installation quality and regular maintenance are the biggest factors." },
    { question: "Can you work on occupied commercial buildings?", answer: "Absolutely. We have extensive experience working on occupied commercial properties including office buildings, retail centers, and warehouses. We use phased project plans, OSHA-compliant safety protocols, and communicate proactively with building occupants." },
  ],
  formTitle: "Request a Commercial Roofing Consultation",
  formSubtitle: "Expert commercial assessment with no obligation",
  serviceType: "Commercial Roof",
  related: ["residential-roofing", "storm-damage", "roof-repair"],
};

export default function CommercialRoofing() {
  return <ServicePageLayout config={config} />;
}