import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

export const LEAD_SERVICE_TYPES = [
  "Residential Roof",
  "Commercial Roof",
  "Repair",
  "Storm Damage",
  "Gutter Systems",
  "Siding & Exterior",
  "Consultation",
];

export function LeadFormFields({
  form,
  errors,
  update,
  onSubmit,
  submitting,
  submitError,
  submitLabel = "Request Free Inspection",
  idPrefix = "lead",
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {submitError && (
        <p className="text-sm text-red-200 bg-red-950/40 border border-red-400/30 rounded-md px-4 py-3" role="alert">
          {submitError}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name" error={errors.full_name} fieldId={`${idPrefix}-name`}>
          <Input
            id={`${idPrefix}-name`}
            name="full_name"
            autoComplete="name"
            value={form.full_name}
            onChange={(e) => update("full_name", e.target.value)}
            placeholder="John Smith"
            className="bg-white/10 border-white/20 rounded-md text-white placeholder:text-white/30 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]/45 min-h-11"
            aria-invalid={errors.full_name ? "true" : "false"}
            aria-describedby={errors.full_name ? `${idPrefix}-name-err` : undefined}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone} fieldId={`${idPrefix}-phone`}>
          <Input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(281) 659-4129"
            className="bg-white/10 border-white/20 rounded-md text-white placeholder:text-white/30 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]/45 min-h-11"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? `${idPrefix}-phone-err` : undefined}
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email" error={errors.email} fieldId={`${idPrefix}-email`}>
          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="john@example.com"
            className="bg-white/10 border-white/20 rounded-md text-white placeholder:text-white/30 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]/45 min-h-11"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? `${idPrefix}-email-err` : undefined}
          />
        </Field>
        <Field label="Zip Code" error={errors.zip_code} fieldId={`${idPrefix}-zip`}>
          <Input
            id={`${idPrefix}-zip`}
            name="zip_code"
            autoComplete="postal-code"
            value={form.zip_code}
            onChange={(e) => update("zip_code", e.target.value)}
            placeholder="77380"
            className="bg-white/10 border-white/20 rounded-md text-white placeholder:text-white/30 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]/45 min-h-11"
            aria-invalid={errors.zip_code ? "true" : "false"}
            aria-describedby={errors.zip_code ? `${idPrefix}-zip-err` : undefined}
          />
        </Field>
      </div>
      <Field label="Service Type" error={errors.service_type} fieldId={`${idPrefix}-service`}>
        <Select value={form.service_type} onValueChange={(v) => update("service_type", v)}>
          <SelectTrigger
            id={`${idPrefix}-service`}
            className="bg-white/10 border-white/20 rounded-md text-white focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]/45 min-h-11"
            aria-invalid={errors.service_type ? "true" : "false"}
            aria-describedby={errors.service_type ? `${idPrefix}-service-err` : undefined}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {LEAD_SERVICE_TYPES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Message (Optional)" fieldId={`${idPrefix}-message`}>
        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your project..."
          rows={4}
          className="bg-white/10 border-white/20 rounded-md text-white placeholder:text-white/30 focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]/45 resize-none min-h-[120px]"
        />
      </Field>
      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#C9A961] text-[#2B2D2F] hover:bg-white hover:text-[#2F5F6F] font-semibold tracking-[0.04em] py-6 text-base transition-all duration-300 min-h-12 touch-manipulation shadow-[0_10px_24px_rgba(201,169,97,0.28)] hover:-translate-y-0.5"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <span
              className="w-4 h-4 border-2 border-[#2B2D2F]/30 border-t-[#2B2D2F] rounded-full animate-spin"
              aria-hidden
            />
            Submitting...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="w-4 h-4" aria-hidden />
            {submitLabel}
          </span>
        )}
      </Button>
    </form>
  );
}

function Field({ label, error, children, fieldId }) {
  const errId = fieldId ? `${fieldId}-err` : undefined;
  return (
    <div className="space-y-1.5">
      <Label htmlFor={fieldId} className="text-white/75 text-[11px] font-mono tracking-[0.2em] uppercase">
        {label}
      </Label>
      {children}
      {error && (
        <p id={errId} className="text-red-400 text-xs" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
