import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AREAS = [
  { city: "Spring", state: "TX", zip: "77373, 77379, 77380, 77381, 77382, 77383, 77386, 77388, 77389" },
  { city: "The Woodlands", state: "TX", zip: "77380, 77381, 77382, 77384, 77385, 77386, 77389" },
  { city: "Tomball", state: "TX", zip: "77375, 77377" },
  { city: "Huntsville", state: "TX", zip: "77320, 77340, 77341, 77342, 77343, 77344, 77348, 77349" },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 sm:py-32 bg-white" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Service Areas</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2D2F] tracking-wide">
            Proudly Serving Greater Houston
          </h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6 mb-8" />
          <p className="text-[#2B2D2F]/60 font-body max-w-2xl mx-auto leading-relaxed">
            Paragon Partners Construction is your trusted roofing expert throughout the Greater Houston area, specializing
            in premium residential and commercial roofing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-group>
          {AREAS.map((area, i) => (
            <motion.div
              key={area.city}
              data-reveal-item
              data-hover-lift
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-surface p-8 text-center group hover:bg-[#2F5F6F] hover:shadow-[0_16px_34px_rgba(31,41,46,0.11)] transition-all duration-500"
            >
              <MapPin className="w-6 h-6 text-[#C9A961] mx-auto mb-4" aria-hidden />
              <h3 className="font-heading text-xl font-medium text-[#2B2D2F] group-hover:text-white transition-colors duration-300 mb-1">
                {area.city}
              </h3>
              <p className="text-sm text-[#2B2D2F]/40 group-hover:text-white/60 transition-colors duration-300 font-mono uppercase tracking-wider">
                {area.state}
              </p>
              <p className="text-xs text-[#2B2D2F]/30 group-hover:text-white/40 transition-colors duration-300 mt-3 font-mono break-words">
                {area.zip}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/service-areas"
            className="inline-flex items-center text-sm font-medium text-[#C9A961] hover:text-[#2F5F6F] transition-colors duration-300 font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5F6F] rounded-sm min-h-11 px-2"
          >
            View all service areas and community details
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
