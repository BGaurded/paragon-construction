import React from "react";
import { Home, Building2, CloudLightning, Wrench, Droplets, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Roofing",
    description: "Premium installations, full replacements, and architectural shingles crafted to elevate your home's protection and curb appeal.",
    image: IMAGES.heroResidential,
    href: "/services/residential-roofing",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Flat roofs, TPO, EPDM, and metal roofing systems engineered for durability and long-term commercial performance.",
    image: IMAGES.heroCommercial,
    href: "/services/commercial-roofing",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "Full insurance claims assistance and emergency repairs to restore your property quickly after severe Texas weather.",
    image: IMAGES.heroStorm,
    href: "/services/storm-damage",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description: "Expert leak detection, shingle replacement, and comprehensive diagnostics to extend your roof's lifespan.",
    image: IMAGES.heroRepair,
    href: "/services/roof-repair",
  },
  {
    icon: Droplets,
    title: "Gutter Systems",
    description: "Seamless gutters, gutter guards, and precision-fitted downspouts designed to protect your foundation and landscape.",
    image: IMAGES.heroGutters,
    href: "/services/gutter-systems",
  },
  {
    icon: Layers,
    title: "Siding & Exterior",
    description: "Premium siding installation, storm damage repair, and exterior upgrades that complement your home's architectural style.",
    image: IMAGES.heroSiding,
    href: "/services/siding-exterior",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Our Expertise</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2D2F] tracking-wide">
            Comprehensive Roofing Solutions
          </h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-reveal-group>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-reveal-item
      data-hover-lift
      className="group relative premium-card overflow-hidden hover:shadow-[0_20px_44px_rgba(35,43,47,0.14)] hover:-translate-y-1 transition-all duration-500"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} — Paragon Partners Construction`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D2F]/68 to-transparent" />
        <div className="absolute bottom-4 left-4 w-11 h-11 bg-[#C9A961]/95 rounded-md flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-heading text-[1.38rem] leading-tight font-medium text-[#2B2D2F] mb-3 tracking-[0.01em]">{service.title}</h3>
        <p className="text-[0.95rem] text-[#2B2D2F]/62 leading-relaxed mb-5 font-body">{service.description}</p>
        <Link
          to={service.href}
          className="inline-flex items-center text-sm font-semibold tracking-[0.08em] uppercase text-[#C9A961] hover:text-[#2F5F6F] transition-colors duration-300 group/link"
        >
          Learn More
          <span className="ml-2 w-4 h-px bg-[#C9A961] group-hover/link:w-8 group-hover/link:bg-[#2F5F6F] transition-all duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}