import React, { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/siteConfig";
import { validateInspectionFields, submitInspectionRequest } from "@/lib/inspectionForm";
import { LeadFormFields } from "@/components/landing/LeadFormFields";

const initialForm = (defaultService) => ({
  full_name: "",
  phone: "",
  email: "",
  zip_code: "",
  service_type: defaultService || "",
  message: "",
});

export default function ServiceLeadForm({ title, subtitle, defaultService }) {
  const [form, setForm] = useState(() => initialForm(defaultService));
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
    console.info("[ServiceLeadForm] Submit clicked", { formSnapshot: form });
    const eMap = validateInspectionFields(form);
    setErrors(eMap);
    if (Object.keys(eMap).length) {
      console.warn("[ServiceLeadForm] Validation failed", eMap);
      setSubmitError("Please complete the highlighted fields and try again.");
      return;
    }
    setSubmitting(true);
    try {
      await submitInspectionRequest(form);
      setSubmitted(true);
    } catch (err) {
      console.error("[ServiceLeadForm] Submission error", err);
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="service-form" className="py-24 sm:py-32 bg-[#2F5F6F] relative overflow-hidden" data-reveal>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <CheckCircle2 className="w-20 h-20 text-[#C9A961] mx-auto mb-6" aria-hidden />
            <h3 className="font-heading text-4xl text-white mb-4">Request Received</h3>
            <p className="text-white/60 font-body max-w-md mx-auto">
              A Paragon Partners specialist will contact you within 24 hours to schedule your assessment.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-8 inline-flex items-center gap-2 text-[#C9A961] hover:text-white transition-colors font-medium min-h-11"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden />
              Or call us directly: {SITE.phoneDisplay}
            </a>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="font-mono text-xs tracking-[0.3em] text-[#C9A961] uppercase mb-4">No Obligation</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-wide mb-3">
                {title || "Schedule Your Free Consultation"}
              </h2>
              <p className="text-white/78 font-body [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">{subtitle || "Expert assessment with no obligation"}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <LeadFormFields
                form={form}
                errors={errors}
                update={update}
                onSubmit={handleSubmit}
                submitting={submitting}
                submitError={submitError}
                submitLabel="Request Free Consultation"
                idPrefix="svc-lead"
              />
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
