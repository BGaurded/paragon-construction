const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function digitsOnlyPhone(phone) {
  return (phone || "").replace(/\D/g, "");
}

export function validateInspectionFields(form) {
  const errors = {};
  if (!form.full_name?.trim()) errors.full_name = "Name is required";
  const digits = digitsOnlyPhone(form.phone);
  if (!form.phone?.trim()) errors.phone = "Phone is required";
  else if (digits.length < 10) errors.phone = "Enter a valid 10-digit phone number";
  if (!form.email?.trim() || !EMAIL_RE.test(form.email.trim())) errors.email = "Valid email is required";
  if (!form.zip_code?.trim()) errors.zip_code = "Zip code is required";
  else if (!/^\d{5}(-\d{4})?$/.test(form.zip_code.trim())) errors.zip_code = "Enter a valid ZIP code";
  if (!form.service_type) errors.service_type = "Please select a service";
  return errors;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * @returns {Promise<void>}
 */
export async function submitInspectionRequest(form) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  console.info("[LeadForm] submitInspectionRequest called", {
    hasAccessKey: Boolean(accessKey),
    endpoint: WEB3FORMS_ENDPOINT,
    serviceType: form?.service_type || null,
    envMode: import.meta.env.MODE,
  });

  if (!accessKey) {
    throw new Error(
      "Form delivery is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your environment."
    );
  }

  const body = {
    access_key: accessKey,
    subject: `Paragon Partners — ${form.service_type || "Website inquiry"}`,
    from_name: form.full_name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    zip_code: form.zip_code.trim(),
    service_type: form.service_type,
    message: (form.message || "").trim(),
  };

  console.debug("[LeadForm] Sending Web3Forms request payload", {
    subject: body.subject,
    from_name: body.from_name,
    email: body.email,
    zip_code: body.zip_code,
    service_type: body.service_type,
    has_message: Boolean(body.message),
  });

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    console.error("[LeadForm] Web3Forms response was not JSON");
    throw new Error("We could not reach the form service. Please try again or call us.");
  }

  console.info("[LeadForm] Web3Forms response received", {
    status: res.status,
    ok: res.ok,
    success: data?.success,
    message: data?.message || null,
  });

  if (!res.ok || !data.success) {
    console.error("[LeadForm] Web3Forms submission failed", { status: res.status, data });
    throw new Error(data?.message || "Something went wrong. Please try again or call us.");
  }

  console.info("[LeadForm] Web3Forms submission succeeded");
}
