import React from "react";
import { ShieldCheck, Award, Gem, Clock } from "lucide-react";
import { motion } from "framer-motion";
import GafMasterEliteBadge from "@/components/GafMasterEliteBadge";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed and insured in the State of Texas, providing complete peace of mind for every project.",
  },
  {
    icon: Award,
    title: "GAF Certified",
    description: "Part of an elite group of contractors trusted by North America's largest roofing manufacturer.",
    gafBadge: true,
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "We exclusively use top-tier materials and proven techniques, ensuring lasting beauty and performance.",
  },
  {
    icon: Clock,
    title: "Lifetime Warranty",
    description: "Our confidence in our craftsmanship is backed by a lifetime labor warranty on every installation.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-paragon" className="py-24 sm:py-32 bg-[#F5F3EE]" aria-labelledby="why-paragon-heading" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Why Paragon Partners</p>
          <h2 id="why-paragon-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2D2F] tracking-wide">
            The Paragon Difference
          </h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-reveal-group>
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                data-reveal-item
                data-hover-lift
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card p-8 text-center group hover:border-[#C9A961]/30 transition-all duration-500 hover:shadow-[0_18px_36px_rgba(31,41,46,0.1)]"
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-[#2F5F6F]/5 rounded-sm flex items-center justify-center group-hover:bg-[#2F5F6F]/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C9A961]" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-medium text-[#2B2D2F] mb-3 flex flex-wrap items-center justify-center gap-2">
                  <span>{item.title}</span>
                  {item.gafBadge && <GafMasterEliteBadge size="sm" />}
                </h3>
                <p className="text-sm text-[#2B2D2F]/60 leading-relaxed font-body">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
