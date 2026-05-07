import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const ALL_SERVICES = {
  "residential-roofing": { title: "Residential Roofing", image: IMAGES.heroResidential, href: "/services/residential-roofing" },
  "commercial-roofing": { title: "Commercial Roofing", image: IMAGES.heroCommercial, href: "/services/commercial-roofing" },
  "storm-damage": { title: "Storm Damage", image: IMAGES.heroStorm, href: "/services/storm-damage" },
  "roof-repair": { title: "Roof Repair", image: IMAGES.heroRepair, href: "/services/roof-repair" },
  "gutter-systems": { title: "Gutter Systems", image: IMAGES.heroGutters, href: "/services/gutter-systems" },
  "siding-exterior": { title: "Siding & Exterior", image: IMAGES.heroSiding, href: "/services/siding-exterior" },
};

export default function RelatedServices({ related }) {
  const items = related.map(key => ALL_SERVICES[key]).filter(Boolean);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Explore More</p>
          <h2 className="font-heading text-3xl font-light text-[#2B2D2F] tracking-wide">Related Services</h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div key={s.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={s.href} className="group block relative overflow-hidden aspect-[4/3]">
                <img
                  src={s.image}
                  alt={`${s.title} — Paragon Partners Construction`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D2F]/80 via-[#2B2D2F]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-lg text-white mb-2">{s.title}</h3>
                  <span className="inline-flex items-center text-xs text-[#C9A961] font-mono uppercase tracking-wider group-hover:gap-3 gap-2 transition-all duration-300">
                    Learn More <span className="w-4 h-px bg-[#C9A961]" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}