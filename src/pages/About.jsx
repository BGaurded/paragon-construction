import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gem, HeartHandshake, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/landing/StickyHeader";
import Footer from "@/components/landing/Footer";
import GoldenThread from "@/components/landing/GoldenThread";
import LeadCaptureForm from "@/components/landing/LeadCaptureForm";
import PageSEO, { localBusinessSchema } from "@/components/PageSEO";
import GafMasterEliteBadge from "@/components/GafMasterEliteBadge";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/siteConfig";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VALUES = [
  {
    icon: Sparkles,
    title: "Quality without compromise",
    description: "We hold every installation to a higher standard—because your roof should perform as beautifully as it looks.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability you can trust",
    description: "Clear communication, honest timelines, and meticulous cleanup—every time we step on your property.",
  },
  {
    icon: Gem,
    title: "Expertise that shows",
    description: "From complex insurance claims to luxury architectural details, our team brings proven skill to every project.",
  },
  {
    icon: HeartHandshake,
    title: "Customer satisfaction guaranteed",
    description: "Your confidence matters. We follow through on our promises and stand behind our workmanship.",
  },
];

const DIFFERENTIATORS = [
  { text: "GAF Certified contractor with manufacturer-backed quality standards", gaf: true },
  { text: "Fully licensed and insured for your protection" },
  { text: "Premium materials only—no shortcuts, no substitutions" },
  { text: "Lifetime workmanship warranty on qualifying installations" },
  { text: "Deep Houston-area expertise across Spring, The Woodlands, Conroe, Cypress & Sugar Land" },
  { text: "24/7 emergency response when severe weather strikes" },
];

export default function About() {
  const counterRef = React.useRef(null);
  const counterWrapRef = React.useRef(null);

  useGSAP(
    () => {
      if (!counterRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const counter = { value: 0 };
      gsap.to(counter, {
        value: 100,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counterWrapRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          counterRef.current.textContent = `${Math.round(counter.value)}%`;
        },
      });
    },
    { scope: counterWrapRef }
  );

  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="About Paragon Partners | Houston's Trusted Roofing Experts"
        description="Premium residential & commercial roofing across Greater Houston—Spring, The Woodlands, Conroe, Cypress & Sugar Land. GAF Certified, licensed & insured. Integrity & craftsmanship."
        path="/about"
        jsonLd={localBusinessSchema()}
      />
      <GoldenThread />
      <StickyHeader />

      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden" data-reveal>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.inspectorBlueprint}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B2D2F]/80 via-[#2F5F6F]/60 to-[#2B2D2F]/80" />
        <div className="relative z-10 text-center px-4 pt-20 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">About Us</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide leading-tight">
              Why Choose Paragon Partners Construction
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Our Story</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#2B2D2F] tracking-wide mb-8">
                Premium Roofing, Elevated Standards
              </h2>
              <div className="space-y-5 font-body text-[#2B2D2F]/70 leading-relaxed">
                <p>
                  Paragon Partners Construction brings premium roofing excellence to Greater Houston with a commitment to
                  quality that goes beyond industry standards.
                </p>
                <p>
                  We built our reputation serving homeowners and businesses throughout Spring, The Woodlands, Conroe,
                  Cypress, Sugar Land, and the Greater Houston area—delivering refined workmanship, transparent
                  communication, and roofs engineered for Texas weather.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={IMAGES.aerialResidential}
                  alt="Aerial view of a completed premium residential roof in Greater Houston"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div ref={counterWrapRef} className="absolute -bottom-6 -left-6 bg-[#2F5F6F] p-8 max-w-[260px]">
                  <p ref={counterRef} className="font-heading text-4xl text-[#C9A961] font-light mb-1">0%</p>
                  <p className="text-white/70 text-sm font-body">Dedicated to craftsmanship you can see from the curb—and trust from the attic.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3EE] border-y border-[#e8e5de]" data-reveal>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Our Mission</p>
            <h2 className="font-heading text-2xl sm:text-3xl font-light text-[#2B2D2F] mb-6">Integrity in Every Layer</h2>
            <p className="text-[#2B2D2F]/70 font-body leading-relaxed text-lg">
              Delivering superior roofing solutions with integrity, craftsmanship, and unmatched customer service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">What We Stand For</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#2B2D2F] tracking-wide">Our Values</h2>
            <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-group>
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  data-reveal-item
                  data-hover-lift
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="premium-surface p-8 text-center hover:border-[#C9A961]/30 hover:shadow-[0_14px_32px_rgba(31,41,46,0.09)] transition-all duration-500"
                >
                  <div className="w-12 h-12 mx-auto mb-5 bg-[#2F5F6F]/10 rounded-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C9A961]" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-[#2B2D2F] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#2B2D2F]/60 font-body leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="warranty" className="py-24 sm:py-32 bg-[#2F5F6F]" data-reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">The Paragon Standard</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-wide mb-4 flex flex-wrap items-center justify-center gap-3">
              <span>GAF Certified Contractor</span>
              <GafMasterEliteBadge size="md" />
            </h2>
            <p className="text-white/86 font-body leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_14px_rgba(0,0,0,0.48)]">
              Paragon Partners Construction is proud to be a GAF Certified contractor recognized by North America&apos;s
              largest roofing manufacturer. This designation reflects our commitment to training, quality, and warranty
              options that protect your investment.
            </p>
            <a
              href={SITE.gafUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#C9A961] text-[#2B2D2F] hover:bg-white px-8 py-3 font-medium transition-all duration-300 font-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn more at GAF.com ↗
            </a>
          </motion.div>
          <ul className="space-y-4 max-w-xl mx-auto">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-white/85 font-body text-sm leading-relaxed"
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A961] mt-2 shrink-0" aria-hidden />
                <span className="flex flex-wrap items-center gap-2">
                  {item.gaf && <GafMasterEliteBadge size="sm" />}
                  <span>{item.text}</span>
                </span>
              </motion.li>
            ))}
          </ul>
          <p className="text-center text-white/60 font-body text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
            With years of experience across Greater Houston, we combine regional know-how with white-glove service—so your
            project feels precise, professional, and worry-free from the first call to the final walkthrough.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[#e8e5de]" data-reveal>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Visit Us</p>
            <h2 className="font-heading text-3xl font-light text-[#2B2D2F] mb-8 tracking-wide">Get In Touch</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 text-left sm:text-center">
              <div className="flex items-center gap-3 text-[#2B2D2F]/70">
                <MapPin className="w-5 h-5 text-[#C9A961] shrink-0" aria-hidden />
                <span className="font-body text-sm">
                  {SITE.address.streetAddress}, {SITE.address.addressLocality}, {SITE.address.addressRegion}{" "}
                  {SITE.address.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#2B2D2F]/70">
                <Phone className="w-5 h-5 text-[#C9A961] shrink-0" aria-hidden />
                <a href={`tel:${SITE.phoneTel}`} className="font-body text-sm hover:text-[#2F5F6F] transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-3 text-[#2B2D2F]/70">
                <Mail className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" aria-hidden />
                <div className="flex flex-col gap-1 font-body text-sm">
                  {SITE.emails.map((addr) => (
                    <a key={addr} href={`mailto:${addr}`} className="hover:text-[#2F5F6F] transition-colors break-all">
                      {addr}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/contact">
              <Button className="bg-[#C9A961] text-[#2B2D2F] hover:bg-[#2F5F6F] hover:text-white font-semibold px-10 py-6 text-base transition-all duration-300 min-h-12">
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
