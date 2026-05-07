import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { validateInspectionFields, submitInspectionRequest } from "@/lib/inspectionForm";
import { LeadFormFields } from "@/components/landing/LeadFormFields";

const initialForm = () => ({
  full_name: "",
  phone: "",
  email: "",
  zip_code: "",
  service_type: "",
  message: "",
});

export default function LeadCaptureForm() {
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
    console.info("[HomeLeadForm] Submit clicked", { formSnapshot: form });
    const eMap = validateInspectionFields(form);
    setErrors(eMap);
    if (Object.keys(eMap).length) {
      console.warn("[HomeLeadForm] Validation failed", eMap);
      setSubmitError("Please complete the highlighted fields and try again.");
      return;
    }
    setSubmitting(true);
    try {
      await submitInspectionRequest(form);
      setSubmitted(true);
    } catch (err) {
      console.error("[HomeLeadForm] Submission error", err);
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 sm:py-32 bg-[#2F5F6F]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-sm p-12 border border-white/10"
          >
            <CheckCircle2 className="w-16 h-16 text-[#C9A961] mx-auto mb-6" aria-hidden />
            <h3 className="font-heading text-3xl text-white mb-4">Thank You</h3>
            <p className="text-white/70 font-body">
              A Paragon Partners specialist will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#2F5F6F] relative overflow-hidden" data-reveal>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <img
              src={IMAGES.inspectorBlueprint}
              alt="Professional roofer working on a premium roof installation"
              className="w-full h-[600px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">Get Started</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-wide mb-2">
              Schedule Your Free
              <br />
              Roof Inspection
            </h2>
            <p className="text-white/78 font-body mb-8 [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">Expert assessment with no obligation.</p>

            <LeadFormFields
              form={form}
              errors={errors}
              update={update}
              onSubmit={handleSubmit}
              submitting={submitting}
              submitError={submitError}
              submitLabel="Request Free Inspection"
              idPrefix="home-lead"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
