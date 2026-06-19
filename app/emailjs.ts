import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ioxlemt';
const PUBLIC_KEY = 'LHN36zibZMdIZeRb7';
export const ADMIN_TEMPLATE_ID = "template_cw0k096";
export const USER_TEMPLATE_ID = "template_iiks8gi";

emailjs.init(PUBLIC_KEY);

const sanitize = (value: unknown, fallback = "N/A"): string => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed || fallback;
  }

  if (value === undefined || value === null) {
    return fallback;
  }

  return String(value);
};

const pick = (...values: unknown[]): string => {
  for (const value of values) {
    const sanitized = sanitize(value, "");

    if (sanitized) {
      return sanitized;
    }
  }

  return "N/A";
};

type EmailJSApiBody = {
  countryName?: unknown;
  brandName?: unknown;
  websiteName?: unknown;
  formname?: unknown;
  data?: Record<string, unknown>;
};

// Helper function to format date in CST timezone
const formatCST = (date: Date): string => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(date);
  const get = (type: string) => parts.find(p => p.type === type)?.value ?? '';
  return `${get('day')}-${get('month')}-${get('year')}, ${get('hour')}:${get('minute')} ${get('dayPeriod')} (CST)`;
};

const formatClaimantLocal = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
};

export const sendWithEmailJS = async (apiBody: EmailJSApiBody) => {
  const d = apiBody.data || {};
  const currentYear = new Date().getFullYear();
  const now = new Date();
  const fullName = pick(d.full_name, d.fullName, d.name);
  const email = pick(d.email);
  const caseType = pick(d.case_type, d.caseType, d.category, apiBody.formname);
  const pageSource = pick(d.page_source, d.pageSource, d.source_url, d.sourceUrl);
  const consentValue = pick(
    d.consentgiven,
    d.consentGiven,
    d.consent,
    d.constent,
    "Yes"
  );
  const leadSubmittedAtClaimantLocalTime = pick(
    d.leadSubmittedAtClaimantLocalTime,
    d.lead_submitted_at_claimant_local_time,
    d.submission_date,
    d.submissionDate,
    formatClaimantLocal(now)
  );
  const leadReceivedAtInternalCST = pick(
    d.leadReceivedAtInternalCST,
    d.lead_received_at_internal_cst,
    d.submission_date_cst,
    d.submissionDateCST,
    formatCST(now)
  );
  

  const adminParams = {
    full_name: fullName,
    fullName,
    name: fullName,
    email,
    phone: pick(d.phone, d.phoneNumber, d.callerid, d.caller_id),
    phoneNumber: pick(d.phoneNumber, d.phone, d.callerid, d.caller_id),
    zip: pick(d.zip, d.zipCode),
    case_type: caseType,
    caseType,
    description: pick(d.description, d.message),
    consentgiven: consentValue,
    consentGiven: consentValue,
    consent: consentValue,
    constent: consentValue,
    ip_address: pick(d.ip_address, d.ipAddress),
    ipAddress: pick(d.ipAddress, d.ip_address),
    source_url: pick(d.source_url, d.sourceUrl, pageSource),
    sourceUrl: pick(d.sourceUrl, d.source_url, pageSource),
    page_source: pageSource,
    pageSource,
    submission_date: leadSubmittedAtClaimantLocalTime,
    submissionDate: leadSubmittedAtClaimantLocalTime,
    submission_date_cst: leadReceivedAtInternalCST,
    submissionDateCST: leadReceivedAtInternalCST,
    leadSubmittedAtClaimantLocalTime,
    leadReceivedAtInternalCST,
    lead_submitted_at_claimant_local_time: leadSubmittedAtClaimantLocalTime,
    lead_received_at_internal_cst: leadReceivedAtInternalCST,
    trusted_form_cert_url: pick(d.trusted_form_cert_url, d.trustedFormCertUrl, d.certId),
    trustedFormCertUrl: pick(d.trustedFormCertUrl, d.trusted_form_cert_url, d.certId),
    trusted_form_ping_url: pick(d.trusted_form_ping_url, d.trustedFormPingUrl, d.pingUrl),
    trustedFormPingUrl: pick(d.trustedFormPingUrl, d.trusted_form_ping_url, d.pingUrl),
    trusted_form_token: pick(d.trusted_form_token, d.trustedFormToken, d.tokenUrl),
    trustedFormToken: pick(d.trustedFormToken, d.trusted_form_token, d.tokenUrl),
    country: pick(apiBody.countryName),
    brand: pick(apiBody.brandName),
    website: pick(apiBody.websiteName),
    form_name: pick(apiBody.formname, d.form_name, d.formType, d.form_type),
    form_type: pick(d.form_type, apiBody.formname),
    year: currentYear,
  };

  // 1ï¸ADMIN EMAIL â€” ALWAYS TRY
  await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminParams);

  //  USER EMAIL â€” SAFE + OPTIONAL
  const userParams = {
    full_name: d.name,
    email,
    phone: d.phone,
    zip: d.zip || "N/A",
    case_type: d.caseType || "N/A",
    description: d.description || "N/A",
    submission_date: d.submissionDate,
    year: currentYear,
  };

  if (isValidEmail(email)) {
    try {
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, userParams);
    } catch (err) {
      console.warn("User confirmation email failed (non-blocking)", err);
    }
  } else {
    console.warn("Invalid user email, skipping confirmation:", email);
  }
};

const isValidEmail = (email?: string) =>
  !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);




