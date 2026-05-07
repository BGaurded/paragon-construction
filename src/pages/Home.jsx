import React from "react";
import StickyHeader from "../components/landing/StickyHeader";
import HeroSection from "../components/landing/HeroSection";
import ServicesGrid from "../components/landing/ServicesGrid";
import WhyChoose from "../components/landing/WhyChoose";
import LeadCaptureForm from "../components/landing/LeadCaptureForm";
import ServiceAreas from "../components/landing/ServiceAreas";
import Footer from "../components/landing/Footer";
import GoldenThread from "../components/landing/GoldenThread";
import PageSEO, { localBusinessSchema } from "@/components/PageSEO";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Paragon Partners Construction | Premium Roofing in Spring, The Woodlands, Conroe, Cypress & Sugar Land TX"
        description="Premium residential & commercial roofing across the Greater Houston area. GAF Certified, licensed & insured. Spring, The Woodlands, Conroe, Cypress, Sugar Land, and beyond. Schedule your free inspection."
        path="/"
        jsonLd={localBusinessSchema()}
      />
      <GoldenThread />
      <StickyHeader />
      <HeroSection />
      <ServicesGrid />
      <WhyChoose />
      <LeadCaptureForm />
      <ServiceAreas />
      <Footer />
    </div>
  );
}
