import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/landing/StickyHeader";
import Footer from "@/components/landing/Footer";
import GoldenThread from "@/components/landing/GoldenThread";
import LeadCaptureForm from "@/components/landing/LeadCaptureForm";
import PageSEO, { localBusinessSchema } from "@/components/PageSEO";
import { Button } from "@/components/ui/button";

const AREAS = [
  {
    city: "Spring",
    state: "TX",
    description:
      "Trusted residential and commercial roofing experts serving the Spring community with premium installations, storm-ready repairs, and meticulous clean-up.",
  },
  {
    city: "The Woodlands",
    state: "TX",
    description:
      "Luxury roofing solutions for The Woodlands' finest homes and commercial properties—designed for curb appeal, longevity, and Texas weather.",
  },
  {
    city: "Conroe",
    state: "TX",
    description:
      "Full-service roofing for Conroe homeowners and businesses, from inspections and repairs to full replacements with premium materials.",
  },
  {
    city: "Cypress",
    state: "TX",
    description:
      "Dependable roofing and exterior protection for Cypress neighborhoods, with honest assessments and craftsmanship you can see from the curb.",
  },
  {
    city: "Sugar Land",
    state: "TX",
    description:
      "Upscale residential and light commercial roofing tailored to Sugar Land properties—refined details, strong warranties, and clear communication.",
  },
  {
    city: "Greater Houston Area",
    state: null,
    description:
      "Wherever you are around the metro, we bring the same GAF Master Elite standards, responsive service, and insurance-claim experience to every project.",
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Service Areas | Spring, The Woodlands, Conroe, Cypress & Sugar Land TX Roofing"
        description="Paragon Partners Construction serves the entire Greater Houston area—Spring, The Woodlands, Conroe, Cypress, Sugar Land, and communities throughout the metro. Free inspections."
        path="/service-areas"
        jsonLd={localBusinessSchema()}
      />
      <GoldenThread />
      <StickyHeader />

      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#F5F3EE]" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Coverage</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2D2F] tracking-wide">
              Proudly Serving Greater Houston
            </h1>
            <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6 mb-8" />
            <p className="text-[#2F5F6F] font-body max-w-3xl mx-auto leading-relaxed text-lg font-medium mb-4">
              Paragon Partners Construction serves the entire Greater Houston area.
            </p>
            <p className="text-[#2B2D2F]/65 font-body max-w-3xl mx-auto leading-relaxed text-lg">
              We proudly serve Spring, The Woodlands, Conroe, Cypress, Sugar Land, and the Greater Houston Area with fast
              response times and local expertise. Our team knows the unique roofing challenges of Texas weather and
              delivers solutions built to last.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal-group>
            {AREAS.map((area, i) => (
              <motion.article
                key={area.city}
                data-reveal-item
                data-hover-lift
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="premium-surface p-8 sm:p-10 hover:border-[#C9A961]/35 hover:shadow-[0_14px_30px_rgba(31,41,46,0.09)] transition-all duration-300"
              >
                <MapPin className="w-7 h-7 text-[#C9A961] mb-4" aria-hidden />
                <h2 className="font-heading text-2xl font-medium text-[#2B2D2F] mb-1">
                  {area.state ? `${area.city}, ${area.state}` : area.city}
                </h2>
                <p className="text-sm font-mono uppercase tracking-wider text-[#2F5F6F]/70 mb-4">Premium roofing</p>
                <p className="text-[#2B2D2F]/70 font-body leading-relaxed">{area.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/contact">
              <Button
                data-magnetic
                className="bg-[#C9A961] text-[#2B2D2F] hover:bg-[#2F5F6F] hover:text-white font-semibold px-10 py-6 text-base transition-all duration-300 min-h-12"
              >
                Schedule Your Free Inspection
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <LeadCaptureForm />
      <Footer />
    </div>
  );
}
