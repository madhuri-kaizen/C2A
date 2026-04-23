import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ioxlemt';
const PUBLIC_KEY = 'LHN36zibZMdIZeRb7';
export const ADMIN_TEMPLATE_ID = "template_cw0k096";
export const USER_TEMPLATE_ID = "template_iiks8gi";


emailjs.init(PUBLIC_KEY);

// Formats a date as "25-Apr-2026, 11:00 PM (EST)" in the claimant's local timezone
const formatClaimantLocal = (dateInput: Date | string | undefined): string => {
  const date = dateInput ? new Date(dateInput) : new Date();
  if (isNaN(date.getTime())) return '';
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tzAbbr = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
    .formatToParts(date)
    .find(p => p.type === 'timeZoneName')?.value ?? '';
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(date);
  const get = (type: string) => parts.find(p => p.type === type)?.value ?? '';
  return `${get('day')}-${get('month')}-${get('year')}, ${get('hour')}:${get('minute')} ${get('dayPeriod')} (${tzAbbr})`;
};

// Formats a date as "25-Apr-2026, 10:00 PM (CST)" in Central Time
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

export const sendWithEmailJS = async (apiBody: any) => {
  const data = apiBody.data;
  const currentYear = new Date().getFullYear();

  // ============================
  // ADMIN EMAIL (FULL DATA)
  // ============================
  const adminParams = {
    full_name: data.name,
    email: data.email,
    phone: data.phone,
    zip: data.zip,
    case_type: data.caseType,
    description: data.description,

    ip_address: data.ipAddress,
    source_url: data.pageSource,
    submission_date: formatClaimantLocal(data.submissionDate),
    submission_date_cst: formatCST(new Date()),

    trusted_form_cert_url: data.trustedFormCertUrl,
    trusted_form_ping_url: data.trustedFormPingUrl,
    trusted_form_token: data.trustedFormToken,

    country: apiBody.countryName,
    brand: apiBody.brandName,
    website: apiBody.websiteName,
    form_name: apiBody.formname,
        year: currentYear,

  };

  // ============================
  // USER EMAIL (ONLY USER DATA)
  // ============================
  const userParams = {
    full_name: data.name,
    email: data.email,
    phone: data.phone,
    zip: data.zip,
    case_type: data.caseType,
    description: data.description,
    submission_date: formatClaimantLocal(data.submissionDate),
        year: currentYear,

  };

  // ============================
  // SEND BOTH
  // ============================
  await Promise.all([
    emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminParams),
    emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, userParams),
  ]);
};