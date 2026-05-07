import React from "react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import { IMAGES } from "@/lib/images";

const config = {
  heroImage: IMAGES.heroResidential,
  eyebrow: "Residential Services",
  title: "Premium Residential Roofing in Greater Houston",
  subtitle: "Protect your home with expert craftsmanship and premium materials built to last Texas's toughest seasons.",
  seo: {
    title: "Residential Roofing Services Spring TX | Paragon Partners Construction",
    description:
      "Premium residential roofing across Greater Houston—Spring, The Woodlands, Conroe, Cypress & Sugar Land. GAF Certified. Architectural shingles, repairs & replacements. Free inspections.",
    path: "/services/residential-roofing",
  },
  intro: {
    heading: "Houston's Trusted Residential Roofing Experts",
    paragraphs: [
      "Your home is your most significant investment, and your roof is its first line of defense. At Paragon Partners Construction, we deliver premium residential roofing solutions that combine superior materials, meticulous craftsmanship, and lasting value.",
      "From full roof replacements to new construction installations, our GAF Certified team works with you to select the perfect roofing system for your home's architecture, your budget, and Houston's demanding climate.",
      "We believe the quality of your roof should match the quality of your home. That's why we exclusively use top-tier materials and proven installation techniques, backed by industry-leading warranties and our own lifetime labor guarantee.",
    ],
  },
  benefits: [
    {
      text: "Certified installation — top 3% of roofing contractors nationwide",
      withGafBadge: true,
    },
    "Premium architectural shingles in 40+ designer colors and styles",
    "Energy-efficient roofing options to reduce cooling costs",
    "Impact-resistant materials for Texas hail protection",
    "Lifetime labor warranty on all new installations",
    "Seamless project management from inspection to cleanup",
    "Detailed documentation for insurance and home sale purposes",
  ],
  processSteps: [
    { title: "Free Inspection & Assessment", description: "Our expert evaluates your roof's condition and documents any issues with photos and a detailed report." },
    { title: "Detailed Quote & Selection", description: "We present a transparent, itemized quote and help you choose the perfect materials for your home." },
    { title: "Scheduling & Preparation", description: "We coordinate a convenient start date and prepare your property to protect your landscaping and driveway." },
    { title: "Expert Installation", description: "Our certified crew installs your new roof using best-practice techniques and premium materials." },
    { title: "Final Walkthrough & Cleanup", description: "We do a thorough inspection, magnetic nail sweep, and complete cleanup—leaving your property spotless." },
  ],
  faqs: [
    { question: "How long does a residential roof replacement take?", answer: "Most residential roof replacements in the Houston area take 1–3 days depending on the size and complexity of the roof. We'll give you a precise timeline during your free inspection." },
    { question: "What's the difference between architectural and 3-tab shingles?", answer: "Architectural shingles are thicker, heavier, and more durable than 3-tab shingles. They have a layered appearance that adds depth and dimension, better wind resistance, and longer warranties. We strongly recommend architectural shingles for Houston homes." },
    { question: "Will my homeowner's insurance cover the roof replacement?", answer: "If the damage is from a covered event like a storm, hail, or wind, your homeowner's insurance will typically cover the replacement. We work with all major insurers and can assist with your claim process." },
    { question: "What is GAF Certified status?", answer: "GAF Certified status means your contractor is manufacturer-recognized and can install qualifying GAF roofing systems with strong warranty support. It gives homeowners added confidence in workmanship and product eligibility." },
    { question: "Do you offer financing for residential roofing projects?", answer: "Yes, we work with financing partners to offer flexible payment options for qualifying projects. Ask your Paragon consultant about current financing terms during your free inspection." },
    { question: "How do I know when my roof needs to be replaced vs. repaired?", answer: "Key signs that replacement is more cost-effective include: age over 20 years, widespread granule loss, multiple leaks in different areas, sagging or structural damage, or when repairs would cost more than 40% of replacement cost. We'll give you an honest assessment." },
  ],
  formTitle: "Schedule Your Free Roof Inspection",
  formSubtitle: "Expert residential roofing assessment with no obligation",
  serviceType: "Residential Roof",
  related: ["commercial-roofing", "storm-damage", "roof-repair"],
};

export default function ResidentialRoofing() {
  return <ServicePageLayout config={config} />;
}
