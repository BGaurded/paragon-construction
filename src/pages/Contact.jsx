import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/landing/StickyHeader";
import Footer from "@/components/landing/Footer";
import GoldenThread from "@/components/landing/GoldenThread";
import PageSEO, { localBusinessSchema } from "@/components/PageSEO";
import { LeadFormFields } from "@/components/landing/LeadFormFields";
import { validateInspectionFields, submitInspectionRequest } from "@/lib/inspectionForm";
import { SITE, formatAddressLines } from "@/lib/siteConfig";
import GafMasterEliteBadge from "@/components/GafMasterEliteBadge";
import { CheckCircle2 } from "lucide-react";

const initialForm = () => ({
  full_name: "",
  phone: "",
  email: "",
  zip_code: "",
  service_type: "",
  message: "",
});

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    console.info("[ContactForm] Submit clicked", { formSnapshot: form });
    const eMap = validateInspectionFields(form);
    setErrors(eMap);
    if (Object.keys(eMap).length) {
      console.warn("[ContactForm] Validation failed", eMap);
      setSubmitError("Please complete the highlighted fields and try again.");
      return;
    }
    setSubmitting(true);
    try {
      await submitInspectionRequest(form);
      setSubmitted(true);
    } catch (err) {
      console.error("[ContactForm] Submission error", err);
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const [line1, line2] = formatAddressLines();

  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Contact Paragon Partners | Free Roof Inspection | Greater Houston TX"
        description="Contact Paragon Partners Construction for a free roof inspection across Greater Houston—Spring, The Woodlands, Conroe, Cypress & Sugar Land. Call (281) 659-4129 or send a message."
        path="/contact"
        jsonLd={localBusinessSchema()}
      />
      <GoldenThread />
      <StickyHeader />

      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-[#2F5F6F]" data-reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Contact</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide mb-6">
              Get In Touch With Paragon Partners
            </h1>
            <p className="text-white/88 font-body max-w-2xl mx-auto leading-relaxed [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
              Schedule your free inspection, ask a question, or request a call back. We serve the entire Greater Houston
              area, including Spring, The Woodlands, Conroe, Cypress, Sugar Land, and surrounding communities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-white/90 text-sm font-body">
              <span className="font-mono uppercase tracking-wider text-[#C9A961]/90">GAF Master Elite®</span>
              <GafMasterEliteBadge size="sm" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact-form" className="py-16 sm:py-24 bg-[#F5F3EE]" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="font-heading text-2xl font-light text-[#2B2D2F] mb-6">Contact information</h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Phone className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#2B2D2F]/50 mb-1">Phone</p>
                      <a
                        href={`tel:${SITE.phoneTel}`}
                        className="text-[#2B2D2F] font-medium hover:text-[#2F5F6F] transition-colors text-lg"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#2B2D2F]/50 mb-1">Email</p>
                      <div className="flex flex-col gap-1.5">
                        {SITE.emails.map((addr) => (
                          <a
                            key={addr}
                            href={`mailto:${addr}`}
                            className="text-[#2B2D2F] font-medium hover:text-[#2F5F6F] transition-colors break-all"
                          >
                            {addr}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#2B2D2F]/50 mb-1">Hours</p>
                      <p className="text-[#2B2D2F]/80 font-body text-sm leading-relaxed">
                        Monday–Friday: 7:00 AM – 6:00 PM
                        <br />
                        Saturday: 8:00 AM – 2:00 PM
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MapPin className="w-5 h-5 text-[#C9A961] shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#2B2D2F]/50 mb-1">Office</p>
                      <p className="text-[#2B2D2F]/80 font-body text-sm leading-relaxed">
                        {line1}
                        <br />
                        {line2}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="premium-card p-6">
                <p className="text-sm text-[#2B2D2F]/70 font-body leading-relaxed mb-4">
                  <strong className="text-[#2B2D2F]">Service area:</strong> We serve all of the Greater Houston area,
                  including Spring, The Woodlands, Conroe, Cypress, and Sugar Land.
                </p>
                <Link to="/service-areas" className="text-sm font-medium text-[#2F5F6F] hover:text-[#C9A961] transition-colors">
                  View all service areas →
                </Link>
              </div>
              <a
                data-magnetic
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#C9A961] text-[#2B2D2F] hover:bg-[#2F5F6F] hover:text-white font-semibold px-8 py-6 min-h-12 rounded-md text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F5F6F]"
              >
                Call {SITE.phoneDisplay}
              </a>
            </motion.div>

            <motion.div
              className="lg:col-span-7 bg-[#2F5F6F] p-6 sm:p-10 lg:p-12 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-[#C9A961] mx-auto mb-6" aria-hidden />
                  <h3 className="font-heading text-3xl text-white mb-4">Message sent</h3>
                  <p className="text-white/70 font-body">Thank you — we&apos;ll respond as soon as possible.</p>
                </div>
              ) : (
                <>
                  <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-3">Free inspection</p>
                  <h2 className="font-heading text-2xl sm:text-3xl font-light text-white tracking-wide mb-2">
                    Schedule Your Free Inspection
                  </h2>
                  <p className="text-white/78 font-body mb-8 text-sm sm:text-base [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
                    Tell us how we can help. Fields marked required must be completed to submit.
                  </p>
                  <LeadFormFields
                    form={form}
                    errors={errors}
                    update={update}
                    onSubmit={handleSubmit}
                    submitting={submitting}
                    submitError={submitError}
                    submitLabel="Submit request"
                    idPrefix="contact"
                  />
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
