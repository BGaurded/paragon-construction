import React from "react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import { IMAGES } from "@/lib/images";

const config = {
  heroImage: IMAGES.heroGutters,
  eyebrow: "Gutter Systems",
  title: "Professional Gutter Installation in Greater Houston",
  subtitle: "Seamless gutters precisely engineered to protect your home's foundation, landscaping, and exterior from Houston's heavy rainfall.",
  seo: {
    title: "Gutter Installation Spring TX | Paragon Partners Construction",
    description:
      "Seamless gutters & gutter guards for Spring, The Woodlands, Tomball & Huntsville. Custom on-site fabrication. Free gutter assessments.",
    path: "/services/gutter-systems",
  },
  intro: {
    heading: "Protecting Your Home From the Ground Up",
    paragraphs: [
      "Houston's intense rainstorms make proper gutter systems essential—not optional. Without effective gutters, water can damage your foundation, erode landscaping, cause basement flooding, and create moisture problems in your fascia and soffit.",
      "Paragon Partners installs seamless gutters custom-fabricated on-site to fit your home's exact dimensions. Unlike sectional gutters, seamless systems have no joints (except at corners and downspouts), dramatically reducing leak points and maintenance requirements.",
      "We offer a complete range of gutter solutions from standard aluminum to premium copper, and all of our installations include proper slope engineering, strategic downspout placement, and integration with your home's drainage plan.",
    ],
  },
  benefits: [
    "Seamless gutters custom-fabricated on-site for precise fit",
    "Premium aluminum, steel, and copper options available",
    "Gutter guard systems for low-maintenance protection",
    "Strategic downspout placement for optimal drainage",
    "Fascia and soffit inspection included",
    "Color-matched finishes to complement your home",
    "Complete system warranty on materials and labor",
  ],
  processSteps: [
    { title: "Home Assessment", description: "We measure your roofline and evaluate your current drainage to design an optimal gutter system." },
    { title: "Custom Gutter Design", description: "We engineer the perfect gutter layout including size, slope, and downspout placement for your specific home." },
    { title: "Material Selection", description: "Choose from our premium selection of aluminum, steel, or copper gutters in colors matched to your home." },
    { title: "Professional Installation", description: "Gutters are fabricated on-site and installed with precision, including proper slope for optimal flow." },
    { title: "Testing & Inspection", description: "We test the complete system for flow, leaks, and proper drainage, then clean up thoroughly." },
  ],
  faqs: [
    { question: "What is the difference between seamless and sectional gutters?", answer: "Sectional gutters come in pre-cut lengths joined together with connectors—creating multiple potential leak points. Seamless gutters are custom-fabricated on-site in one continuous piece to fit your exact roofline, eliminating most joints and drastically reducing leaks and maintenance." },
    { question: "How often should gutters be cleaned in Houston?", answer: "In the Greater Houston area with our tree cover and storm frequency, we recommend cleaning gutters at least twice per year—once in spring and once in fall. If you have many trees nearby, quarterly cleaning may be beneficial. Gutter guards can reduce cleaning frequency significantly." },
    { question: "Do gutter guards actually work?", answer: "Quality gutter guards significantly reduce the amount of debris that enters your gutters and can eliminate the need for regular cleaning in most cases. We recommend guards for homes with heavy tree coverage. Not all guards are equal—we install premium systems with proven performance." },
    { question: "What size gutters do I need?", answer: "Standard homes typically use 5-inch K-style gutters. Larger homes, homes with steep roof pitches, or homes with significant roof area may need 6-inch gutters to handle peak flow rates. We calculate the proper sizing based on your roof's square footage and pitch." },
    { question: "How long do seamless gutters last?", answer: "Quality aluminum seamless gutters typically last 20-30 years. Copper gutters can last 50-100 years. Lifespan is significantly affected by maintenance frequency, whether guards are installed, and the severity of weather exposure." },
  ],
  formTitle: "Get Your Free Gutter Assessment",
  formSubtitle: "Seamless gutter system consultation with no obligation",
  serviceType: "Gutter Systems",
  related: ["residential-roofing", "roof-repair", "siding-exterior"],
};

export default function GutterSystems() {
  return <ServicePageLayout config={config} />;
}