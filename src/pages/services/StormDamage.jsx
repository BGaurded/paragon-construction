import React from "react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import { IMAGES } from "@/lib/images";

const config = {
  heroImage: IMAGES.heroStorm,
  eyebrow: "Storm Damage",
  title: "Storm Damage Restoration in Greater Houston",
  subtitle: "Fast response, expert repairs, and full insurance claim assistance to restore your home after Texas storms.",
  seo: {
    title: "Storm Damage Roof Repair Greater Houston TX | Paragon Partners Construction",
    description:
      "Storm damage restoration & insurance claim support across Greater Houston. Emergency response for Spring, The Woodlands, Conroe, Cypress, Sugar Land, and surrounding communities. Free inspections.",
    path: "/services/storm-damage",
  },
  intro: {
    heading: "Houston's Trusted Storm Damage Experts",
    paragraphs: [
      "Texas storms can be severe and unpredictable. When hail, wind, or water damages your roof, you need a trusted partner who responds quickly, documents the damage thoroughly, and guides you through the insurance process with expertise.",
      "Paragon Partners Construction has extensive experience with storm damage restoration throughout the Greater Houston area. We provide emergency tarping to prevent further water intrusion, conduct detailed damage assessments, and create comprehensive documentation for your insurance claim.",
      "Our team works directly with all major insurance carriers and can advocate on your behalf to ensure you receive a fair settlement. We manage the entire process—from initial inspection through final restoration—so you can focus on your family while we handle the roof.",
    ],
  },
  benefits: [
    "Emergency response and temporary roof protection",
    "Detailed photo and written damage documentation",
    "Direct coordination with all major insurance carriers",
    "Free insurance claim review and guidance",
    "Licensed public adjuster partnerships available",
    "Complete restoration to pre-storm condition or better",
    "Warranty on all storm restoration work",
  ],
  processSteps: [
    { title: "Emergency Response", description: "We respond quickly to assess damage and install emergency protection to prevent further water intrusion." },
    { title: "Damage Documentation", description: "Our team provides thorough photographic and written documentation of all damage for your insurance claim." },
    { title: "Insurance Claim Assistance", description: "We work directly with your insurance adjuster to ensure all damage is properly identified and valued." },
    { title: "Approval & Scheduling", description: "Once your claim is approved, we schedule your restoration promptly and coordinate all materials." },
    { title: "Complete Restoration", description: "Our certified crew completes your roof restoration to the highest standards, with a full inspection and cleanup." },
  ],
  faqs: [
    { question: "What should I do immediately after storm damage?", answer: "First, document the damage with photos before any cleanup. Check for interior water damage and place buckets as needed. Contact Paragon Partners for an emergency inspection—we can install temporary tarping to prevent further damage. Don't wait to file your insurance claim." },
    { question: "How do I know if my roof has hail damage?", answer: "Hail damage can be subtle and is often not visible from the ground. Signs include: dented gutters or downspouts, bruised or fractured shingles (soft spots when pressed), granule loss creating bare spots, and damaged skylights or vent covers. Our inspectors can identify damage the untrained eye often misses." },
    { question: "Will my insurance cover storm damage repair?", answer: "Most homeowner's insurance policies cover sudden storm damage from hail, wind, and rain. Coverage depends on your policy, deductible, and the cause and extent of damage. We'll review your policy and help you understand what to expect from your claim." },
    { question: "How long does the insurance claim process take?", answer: "Typically 2–6 weeks from filing to payment. This includes the adjuster's inspection (usually within 5-10 days), review and approval of the estimate, and processing of the insurance check. We track your claim proactively and follow up to keep things moving." },
    { question: "What if my insurance company undervalues my claim?", answer: "We have experience negotiating with insurance companies and can provide supplemental documentation to support a proper settlement. In complex cases, we can connect you with licensed public adjusters who specialize in maximizing rightful claim settlements." },
    { question: "Do I have to use the contractor my insurance company recommends?", answer: "No. You have the right to choose any licensed contractor you trust. Insurance companies may have preferred contractors, but you are not obligated to use them. Your claim settlement should not be affected by your contractor choice." },
  ],
  formTitle: "Get Emergency Storm Damage Help",
  formSubtitle: "Fast response — call us or fill out the form below",
  serviceType: "Storm Damage",
  related: ["residential-roofing", "roof-repair", "gutter-systems"],
};

export default function StormDamage() {
  return <ServicePageLayout config={config} />;
}