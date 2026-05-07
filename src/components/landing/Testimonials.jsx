import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import GafMasterEliteBadge from "@/components/GafMasterEliteBadge";

const REVIEWS = [
  {
    name: "David & Sarah Mitchell",
    location: "The Woodlands, TX",
    text: "Paragon Partners replaced our entire roof after storm damage. Their professionalism from estimate through completion was exceptional. They handled the insurance claim seamlessly and the final result exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    location: "Spring, TX",
    text: "As a commercial property manager, I've worked with many roofers. Paragon Partners stands apart — their attention to detail, communication, and quality of materials are simply unmatched in the Houston market.",
    rating: 5,
  },
  {
    name: "Jennifer & Mark Alvarez",
    location: "Tomball, TX",
    rating: 5,
    body: (
      <>
        We chose Paragon for our new construction roof and couldn&apos;t be happier. The{" "}
        <span className="inline-flex items-center gap-1.5 align-middle flex-wrap">
          <GafMasterEliteBadge size="sm" />
          <span className="not-italic">GAF</span>
        </span>{" "}
        lifetime warranty gives us complete peace of mind, and the crew was respectful of our property throughout the
        entire project.
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#F5F3EE]" aria-labelledby="testimonials-heading" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Client Testimonials</p>
          <h2 id="testimonials-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2D2F] tracking-wide">
            Trusted by Homeowners
          </h2>
          <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" data-reveal-group>
          {REVIEWS.map((review, i) => (
            <motion.article
              key={review.name}
              data-reveal-item
              data-hover-lift
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="premium-card p-8 relative group hover:shadow-[0_18px_36px_rgba(31,41,46,0.12)] transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-[#C9A961]/20 absolute top-6 right-6" aria-hidden />
              <div className="flex gap-1 mb-6" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" aria-hidden />
                ))}
              </div>
              <p className="text-sm text-[#2B2D2F]/70 leading-relaxed font-body mb-6 italic">
                <span aria-hidden>“</span>
                {review.body ?? review.text}
                <span aria-hidden>”</span>
              </p>
              <div className="border-t border-[#F5F3EE] pt-4">
                <p className="font-heading text-base font-medium text-[#2B2D2F]">{review.name}</p>
                <p className="text-xs text-[#2B2D2F]/40 font-mono uppercase tracking-wider mt-1">{review.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
