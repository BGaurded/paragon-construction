import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/landing/StickyHeader";
import Footer from "@/components/landing/Footer";
import ServiceLeadForm from "./ServiceLeadForm";
import RelatedServices from "./RelatedServices";
import PageSEO, { localBusinessSchema } from "@/components/PageSEO";
import GafMasterEliteBadge from "@/components/GafMasterEliteBadge";
import { SITE } from "@/lib/siteConfig";

export default function ServicePageLayout({ config }) {
  const {
    heroImage,
    eyebrow,
    title,
    subtitle,
    intro,
    benefits,
    processSteps,
    faqs,
    formTitle,
    formSubtitle,
    serviceType,
    related,
    seo,
  } = config;

  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title={seo.title}
        description={seo.description}
        path={seo.path}
        jsonLd={localBusinessSchema()}
      />
      <StickyHeader />

      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden" data-reveal>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f272b]/80 via-[#2F5F6F]/48 to-[#1b2124]/82" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A961] text-sm mb-6 transition-colors font-mono tracking-wider uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]"
            >
              <ArrowLeft className="w-3 h-3" aria-hidden /> All Services
            </Link>
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">{eyebrow}</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white leading-[1.05] tracking-[0.015em] mb-4 drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              {title}
            </h1>
            <p className="text-white/88 font-body text-lg max-w-2xl mx-auto mb-8 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                data-magnetic
                onClick={() => document.querySelector("#service-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#C9A961] text-[#2B2D2F] hover:bg-white hover:text-[#2F5F6F] font-semibold px-10 py-6 text-base transition-all duration-300 min-h-12 touch-manipulation shadow-[0_14px_32px_rgba(201,169,97,0.32)] hover:-translate-y-0.5"
              >
                Schedule Free Consultation
              </Button>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:border-[#C9A961] hover:text-[#C9A961] px-8 py-3 rounded-md transition-all duration-300 text-base font-medium min-h-12 touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden /> Call {SITE.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">About This Service</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#2B2D2F] mb-6 tracking-wide">
                {intro.heading}
              </h2>
              <div className="space-y-4 font-body text-[#2B2D2F]/70 leading-relaxed">
                {intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="premium-surface p-8 border-l-2 border-[#C9A961] shadow-[0_12px_28px_rgba(31,41,46,0.08)]">
                <h3 className="font-heading text-xl font-medium text-[#2B2D2F] mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((b, i) => {
                    const text = typeof b === "string" ? b : b.text;
                    const withGaf = typeof b === "object" && b.withGafBadge;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#C9A961]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                        </span>
                        <span className="text-sm text-[#2B2D2F]/70 font-body leading-relaxed flex items-start gap-2 flex-wrap min-w-0">
                          {withGaf && <GafMasterEliteBadge size="sm" className="mt-0.5" />}
                          <span>{text}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Our Process</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#2B2D2F] tracking-wide">What to Expect</h2>
            <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" data-reveal-group>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                data-reveal-item
                data-hover-lift
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative premium-card p-5 border-[#ece8de]"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-full h-px bg-[#C9A961]/20" />
                )}
                <div className="w-12 h-12 rounded-full bg-[#2F5F6F] text-white font-heading text-lg font-medium flex items-center justify-center mx-auto mb-4 relative z-10 shadow-[0_10px_24px_rgba(47,95,111,0.34)]">
                  {i + 1}
                </div>
                <h3 className="font-heading text-base font-medium text-[#2B2D2F] mb-2">{step.title}</h3>
                <p className="text-xs text-[#2B2D2F]/60 font-body leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3EE]" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Questions</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#2B2D2F] tracking-wide">Frequently Asked</h2>
            <div className="w-16 h-px bg-[#C9A961] mx-auto mt-6" />
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ServiceLeadForm title={formTitle} subtitle={formSubtitle} defaultService={serviceType} />

      <RelatedServices related={related} />

      <Footer />
    </div>
  );
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const qMentionsGaf =
    /GAF Master Elite|GAF Certified/i.test(faq.question) || /GAF Master Elite/i.test(faq.answer);
  const aMentionsGaf = /GAF Master Elite|GAF Certified/i.test(faq.answer);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="premium-card border-[#e8e5de]"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-6 text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5F6F]"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-trigger-${index}`}
      >
        <span className="font-heading text-base font-medium text-[#2B2D2F] group-hover:text-[#2F5F6F] transition-colors flex items-start gap-2 flex-wrap">
          {qMentionsGaf && <GafMasterEliteBadge size="sm" className="mt-1 shrink-0" />}
          <span>{faq.question}</span>
        </span>
        <span
          className={`text-[#C9A961] text-xl transition-transform duration-300 shrink-0 ml-4 ${open ? "rotate-45" : ""}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <motion.div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-sm text-[#2B2D2F]/60 font-body leading-relaxed flex gap-2 items-start">
          {aMentionsGaf && <GafMasterEliteBadge size="sm" className="mt-0.5 shrink-0" />}
          <p>{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
