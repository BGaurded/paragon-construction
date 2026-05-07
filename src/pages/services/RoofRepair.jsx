import React from "react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import { IMAGES } from "@/lib/images";

const config = {
  heroImage: IMAGES.heroRepair,
  eyebrow: "Roof Repair",
  title: "Expert Roof Repair in Greater Houston",
  subtitle: "Fast, reliable repairs that diagnose root causes and extend your roof's life — not just quick patches.",
  seo: {
    title: "Roof Repair Greater Houston TX | Paragon Partners Construction",
    description:
      "Expert leak detection & roof repairs serving Spring, The Woodlands, Conroe, Cypress & Sugar Land. Honest repair vs. replace guidance. Call for a free inspection.",
    path: "/services/roof-repair",
  },
  intro: {
    heading: "Precision Repairs That Last",
    paragraphs: [
      "Not every roofing problem requires a full replacement. Paragon Partners Construction specializes in expert roof repairs that diagnose the underlying cause of problems—not just the visible symptoms—ensuring the repair lasts.",
      "Our certified inspectors use advanced leak detection methods to pinpoint the exact source of water intrusion, which is often not directly above where you see the interior staining. We document every finding and present transparent repair options with clear pricing.",
      "We service all roofing types including asphalt shingles, metal, tile, and flat commercial systems. Whether it's a few missing shingles, damaged flashing, or a persistent leak you haven't been able to solve, our team has the expertise to repair it correctly.",
    ],
  },
  benefits: [
    "Advanced leak detection technology and diagnostic methods",
    "Transparent pricing before any work begins",
    "All roofing types serviced: shingle, metal, tile, flat",
    "Flashing, vent, and skylight repair specialists",
    "Emergency repair services available",
    "Honest repair vs. replacement guidance",
    "Workmanship warranty on all repairs",
  ],
  processSteps: [
    { title: "Inspection & Diagnosis", description: "Our expert uses advanced techniques to find the true source of your problem, not just the visible symptom." },
    { title: "Detailed Repair Plan", description: "We document all findings and present a clear, itemized repair plan with transparent pricing before any work." },
    { title: "Transparent Pricing", description: "No hidden costs or surprise charges. You approve the scope and price before our crew starts any work." },
    { title: "Expert Repair Work", description: "Certified technicians complete the repair using compatible, quality materials matched to your existing roof." },
    { title: "Quality Guarantee", description: "Every repair comes with a workmanship warranty. We follow up to ensure the repair holds through Houston's weather." },
  ],
  faqs: [
    { question: "How do I know if my roof is leaking?", answer: "Common signs include: water stains on ceilings or walls, peeling paint near rooflines, mold or mildew odor in the attic, missing or curled shingles visible from the ground, granules in your gutters after rain, and unexplained increases in energy bills (indicating insulation damage)." },
    { question: "Why is my roof leaking after a recent repair?", answer: "If a repair has failed, it's usually because the underlying cause wasn't properly diagnosed, incorrect materials were used, or the repair was too localized. Our diagnostic approach finds the root cause, not just the surface symptom, which is why our repairs last." },
    { question: "How much does a roof repair typically cost?", answer: "Repair costs vary widely based on the size and complexity of the problem. Minor repairs (a few shingles, small flashing issue) typically range from $300-$800. Larger repairs or complex leak sources can range from $800-$2,500+. We provide exact pricing after our free inspection." },
    { question: "When should I repair vs. replace my roof?", answer: "Repair is usually the right choice if: the roof is under 15 years old, damage is localized to one area, the damage is caused by a specific event, and repair costs are well under 40% of replacement cost. We'll give you an honest recommendation based on your specific situation." },
    { question: "Can you match my existing shingle color?", answer: "We maintain relationships with all major shingle manufacturers and can typically match or closely match existing colors for repair work. On older roofs, some color variation from weathering is normal, but we'll show you samples to set proper expectations." },
  ],
  formTitle: "Schedule Your Repair Inspection",
  formSubtitle: "Expert diagnosis with transparent pricing — no obligation",
  serviceType: "Repair",
  related: ["residential-roofing", "storm-damage", "gutter-systems"],
};

export default function RoofRepair() {
  return <ServicePageLayout config={config} />;
}