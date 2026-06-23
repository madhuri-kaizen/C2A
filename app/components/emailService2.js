  // emailService.js
import emailjs from '@emailjs/browser';

const sanitize = (value) => {
  if (typeof value === 'string') {
    return value.trim() === '' ? 'N/A' : value;
  }
  if (value === undefined || value === null) {
    return 'N/A';
  }
  return value;
};


const SERVICE_ID = 'service_ioxlemt';   
const ADMIN_TEMPLATE_ID = 'template_fa7qndd';
const USER_TEMPLATE_ID = 'template_vghzjt8';
  
// SubService template IDs
const SUBSERVICE_ADMIN_TEMPLATE_ID = 'template_mo5pzwu';
const SUBSERVICE_USER_TEMPLATE_ID = 'template_bz16ror';

// Motor vehicle accident form

const MotorVehicle_ADMIN_TEMPLATE_ID = 'template_rtu70jb'
const MotorVehicle_USER_TEMPLATE_ID = 'template_xfveyie'

// Talcum Powder form
const TalcumPowder_ADMIN_TEMPLATE_ID = 'template_kvmmyig'
const TalcumPowder_USER_TEMPLATE_ID = 'template_5if400h'

// Depo Provera form
const DepoProvera_ADMIN_TEMPLATE_ID = 'template_vf1p4wh'
const DepoProvera_USER_TEMPLATE_ID = 'template_wnvmf8b'

//Hair Relaxer form
const HairRelaxer_ADMIN_TEMPLATE_ID = 'template_lezimdw'
const HairRelaxer_USER_TEMPLATE_ID = 'template_tmeg83l'

// Ozempic form
const Ozempic_ADMIN_TEMPLATE_ID = 'template_raogh7n'
const Ozempic_USER_TEMPLATE_ID = 'template_z0riks6'

// Hernia Mesh form
const HerniaMesh_ADMIN_TEMPLATE_ID = 'template_lzgibf4'
const HerniaMesh_USER_TEMPLATE_ID = 'template_vbarzc9'

//depolawsuitlanderA
const DepoProveraLawsuit_ADMIN_TEMPLATE_ID = 'template_qdt9r0s';
const DepoProveraLawsuit_USER_TEMPLATE_ID = 'template_1vu41gr';

//hairrelaxerlawsuitlanderA
const HairRelaxerLawsuit_ADMIN_TEMPLATE_ID = 'template_u1apm3q';
const HairRelaxerLawsuit_USER_TEMPLATE_ID = 'template_mbhjtqg';

//herniameshlawsuitlanderA
const HerniaMeshLawsuit_ADMIN_TEMPLATE_ID = 'template_yixup5u';
const HerniaMeshLawsuit_USER_TEMPLATE_ID = 'template_bzfb5yq';

//ozempiclawsuitlanderA
const OzempicLawsuit_ADMIN_TEMPLATE_ID = 'template_b7ux0dq';
const OzempicLawsuitE_ADMIN_TEMPLATE_ID = 'template_m962fnn';

const OzempicLawsuit_USER_TEMPLATE_ID = 'template_50szhwp';

//talcumlawsuitlanderA
const TalcumPowderLawsuit_ADMIN_TEMPLATE_ID = 'template_5yzhoxl';
const TalcumPowderLawsuit_USER_TEMPLATE_ID = 'template_5z257ow';

//ridesharesalanderA
const RideshareSALawsuit_ADMIN_TEMPLATE_ID = 'template_3cn4wmp';
const RideshareSALawsuit_USER_TEMPLATE_ID = 'template_dizy35y';

//robloxsalanderA
const RobloxSALawsuit_ADMIN_TEMPLATE_ID = 'template_iwfihnh';
const RobloxSALawsuit_USER_TEMPLATE_ID = 'template_j8n4g7a';

//socialmediaAddictionlanderA
const SMALawsuit_ADMIN_TEMPLATE_ID = 'template_a2gl1kk';
const SMALawsuit_USER_TEMPLATE_ID = 'template_va3c6zx';

//rounduplawsuitlanderA
const ROUNDUP_LAWSUIT_ADMIN_TEMPLATE_ID = 'template_liyz1an';
const ROUNDUP_LAWSUIT_USER_TEMPLATE_ID = 'template_pxt274a';

// Dupixent lawsuit lander D
const DupixentLawsuit_ADMIN_TEMPLATE_ID = 'template_1p2u32o';
const DupixentLawsuit_USER_TEMPLATE_ID = 'template_sfbhzfi';

//Dynamic Lander Template IDs
const DynamicLander_ADMIN_TEMPLATE_ID = 'template_t1grj7h';
const DynamicLander_USER_TEMPLATE_ID = 'template_3uc1yoq';

const SSDI_ADMIN_TEMPLATE_ID = 'template_xp7372w';
const SSDI_USER_TEMPLATE_ID = 'template_1yk15md';

const SSDI_EKQ_ADMIN_TEMPLATE_ID = "template_y954yaq";
const SSDI_EKQ_USER_TEMPLATE_ID = "template_krsbgvu";

const SSDI_RIG_ADMIN_TEMPLATE_ID = "template_6hbp7mk";
const SSDI_RIG_USER_TEMPLATE_ID = "template_xpsf9t2";

const SSDI_E_ADMIN_TEMPLATE_ID = "template_wh3b21o";
const SSDI_E_USER_TEMPLATE_ID = "template_0yx1rdq";

const PUBLIC_KEY = 'LHN36zibZMdIZeRb7';

const convertToCentralTime = (dateTime) => {
  if (!dateTime) return "";

  return new Date(dateTime).toLocaleString("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

const getBestContactDateTime = (formData = {}) => {
  const value =
    formData.bestContactDateTime ||
    formData.best_contact_date_time ||
    formData.bestTime ||
    formData.best_time;

  if (!value) return "N/A";
  if (typeof value === "string" && value.toUpperCase().includes("CST")) {
    return value;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return sanitize(value);

  return `${convertToCentralTime(value)} CST`;
};

const getPageSourceValue = (formData = {}) => {
  return sanitize(
    formData.pageSource ||
      formData.page_source ||
      formData.sourceUrl ||
      formData.source_url ||
      getSourceUrl()
  );
};

const getPathUrlValue = (formData = {}) => {
  const pathValue =
    formData.pathUrl ||
    formData.path_url ||
    formData.pagePathUrl ||
    formData.page_path_url;

  if (pathValue) return sanitize(pathValue);

  const sourceUrl = getPageSourceValue(formData);
  if (!sourceUrl || sourceUrl === "N/A" || sourceUrl === "Unknown") {
    return sourceUrl;
  }

  try {
    const url = new URL(sourceUrl);
    return `${url.origin}${url.pathname}`;
  } catch {
    return sourceUrl;
  }
};

const getCentralTime = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
emailjs.init(PUBLIC_KEY);

const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";
  return window.location.href;
};

// Function to get IP address
const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "IP address not available";
  }
};
// Function to get CST timestamp
const getCSTTimestamp = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

const getClaimantLocalTimestamp = () => {
  return new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

const getConsentValue = (templateParams = {}) => {
  const rawConsent =
    templateParams.consentgiven ??
    templateParams.consentGiven ??
    templateParams.consent ??
    templateParams.constent ??
    templateParams.terms_accepted ??
    templateParams.termsAccepted;

  if (rawConsent === false) return "No";
  if (rawConsent === true) return "Yes";

  if (typeof rawConsent === "string") {
    const normalized = rawConsent.trim().toLowerCase();

    if (["false", "no", "n", "0"].includes(normalized)) return "No";
    if (["true", "yes", "y", "1"].includes(normalized)) return "Yes";
    if (normalized) return rawConsent;
  }

  return "Yes";
};

const withLeadTimestampFields = (templateParams = {}) => {
  const leadSubmittedAtClaimantLocalTime = getClaimantLocalTimestamp();
  const leadReceivedAtInternalCST = getCSTTimestamp();
  const consentValue = getConsentValue(templateParams);
  const pageSource = getPageSourceValue(templateParams);
  const pathUrl = getPathUrlValue(templateParams);

  return {
    ...templateParams,
    pageSource,
    page_source: pageSource,
    sourceUrl: pageSource,
    source_url: pageSource,
    pathUrl,
    path_url: pathUrl,
    pagePathUrl: pathUrl,
    page_path_url: pathUrl,
    consentgiven: consentValue,
    consentGiven: consentValue,
    consent: consentValue,
    constent: consentValue,
    leadSubmittedAtClaimantLocalTime,
    leadReceivedAtInternalCST,
    lead_submitted_at_claimant_local_time: leadSubmittedAtClaimantLocalTime,
    lead_received_at_internal_cst: leadReceivedAtInternalCST,
    "Lead Submitted At (Claimant Local Time)": leadSubmittedAtClaimantLocalTime,
    "Lead Received At (Internal - CST)": leadReceivedAtInternalCST,
    "Lead Received At (Internal \u2013 CST)": leadReceivedAtInternalCST,
  };
};

const sendEmailWithLeadTimestamps = (
  serviceId,
  templateId,
  templateParams,
  ...rest
) => {
  return emailjs.send(
    serviceId,
    templateId,
    withLeadTimestampFields(templateParams),
    ...rest
  );
};
// Function to clean phone number to 10 digits
const cleanPhoneNumber = (phone) => {
  if (!phone) return '';
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  // Return last 10 digits if more than 10, otherwise return all digits
  return digits.length > 10 ? digits.slice(-10) : digits;
};

// Original functions (keeping your existing ones)
export const SSDIEKQSendAdminEmail = async ({ formData }) => {
  const ipAddress = formData.ip_address || (await getIPAddress());

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    firstName: sanitize(formData.firstName),
    lastName: sanitize(formData.lastName),
    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    bestContactDateTime: getBestContactDateTime(formData),
    phone: sanitize(formData.phone),
    state: sanitize(formData.state),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    answers_text: sanitize(formData.answersText),
    localTime: new Date().toString(),
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),
    consentgiven: formData.consentgiven ? "true" : "false",
    ip_address: ipAddress,
    pageSource: getPageSourceValue(formData),
    page_source: getPageSourceValue(formData),
    form_type: "SSDI EKQ Landing Page",
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SSDI_EKQ_ADMIN_TEMPLATE_ID, templateParams);
};

export const SSDIEKQSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    firstName: sanitize(formData.firstName),
    lastName: sanitize(formData.lastName),
    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),
    state: sanitize(formData.state),
    consentgiven: formData.consentgiven ? "true" : "false",
    question_1: formData.question_1,
    question_2: formData.question_2,
    question_3: formData.question_3,
    question_4: formData.question_4,
    question_5: formData.question_5,
    question_6: formData.question_6,
    question_7: formData.question_7,
    question_8: formData.question_8,
    question_9: formData.question_9,
    question_10: formData.question_10,
    question_11: formData.question_11,
    question_12: formData.question_12,
    question_13: formData.question_13,
    question_14: formData.question_14,
    question_15: formData.question_15,
    question_16: formData.question_16,
    question_17: formData.question_17,
    question_18: formData.question_18,
    question_19: formData.question_19,


    date: new Date().toLocaleDateString(),
    form_type: "SSDI EKQ Landing Page",
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SSDI_EKQ_USER_TEMPLATE_ID, templateParams);
};

export const SSDIRIGSendAdminEmail = async ({ formData }) => {
  const ipAddress = formData.ip_address || (await getIPAddress());

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    first_name: sanitize(formData.first_name || formData.firstName),
    last_name: sanitize(formData.last_name || formData.lastName),
    firstName: sanitize(formData.firstName || formData.first_name),
    lastName: sanitize(formData.lastName || formData.last_name),
    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    to_email: sanitize(formData.email),
    to_name: sanitize(formData.fullName),
    reply_to: sanitize(formData.email),
    callerid: sanitize(formData.callerid || formData.caller_id),
    caller_id: sanitize(formData.caller_id || formData.callerid),
    phone: sanitize(formData.phone || formData.callerid || formData.caller_id),
    phoneNumber: sanitize(formData.phoneNumber || formData.callerid || formData.caller_id),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    localTime: new Date().toString(),
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),
    ipAddress: sanitize(formData.ipAddress || formData.ip_address || ipAddress),
    ip_address: sanitize(formData.ip_address || formData.ipAddress || ipAddress),
    source_url: sanitize(formData.source_url || formData.sourceUrl || getSourceUrl()),
    sourceUrl: sanitize(formData.sourceUrl || formData.source_url || getSourceUrl()),
    trusted_form_cert_url: sanitize(formData.trusted_form_cert_url || formData.certId),
    trustedFormCertUrl: sanitize(formData.trustedFormCertUrl || formData.trusted_form_cert_url || formData.certId),
    trustedFormPingUrl: sanitize(formData.trustedFormPingUrl || formData.pingUrl),
    trustedFormToken: sanitize(formData.trustedFormToken || formData.tokenUrl),
    pageSource: sanitize(formData.pageSource || formData.page_source || formData.sourceUrl || formData.source_url || getSourceUrl()),
    page_source: sanitize(formData.page_source || formData.pageSource || formData.source_url || formData.sourceUrl || getSourceUrl()),
    form_type: "SSDI RIG Landing Page",
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SSDI_RIG_ADMIN_TEMPLATE_ID, templateParams);
};

export const SSDIRIGSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    first_name: sanitize(formData.first_name || formData.firstName),
    last_name: sanitize(formData.last_name || formData.lastName),
    firstName: sanitize(formData.firstName || formData.first_name),
    lastName: sanitize(formData.lastName || formData.last_name),
    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    to_email: sanitize(formData.email),
    to_name: sanitize(formData.fullName),
    reply_to: sanitize(formData.email),
    callerid: sanitize(formData.callerid || formData.caller_id),
    caller_id: sanitize(formData.caller_id || formData.callerid),
    phone: sanitize(formData.phone || formData.callerid || formData.caller_id),
    phoneNumber: sanitize(formData.phoneNumber || formData.callerid || formData.caller_id),
    ipAddress: sanitize(formData.ipAddress || formData.ip_address),
    ip_address: sanitize(formData.ip_address || formData.ipAddress),
    source_url: sanitize(formData.source_url || formData.sourceUrl || getSourceUrl()),
    sourceUrl: sanitize(formData.sourceUrl || formData.source_url || getSourceUrl()),
    pageSource: sanitize(formData.pageSource || formData.page_source || formData.sourceUrl || formData.source_url || getSourceUrl()),
    page_source: sanitize(formData.page_source || formData.pageSource || formData.source_url || formData.sourceUrl || getSourceUrl()),
    trusted_form_cert_url: sanitize(formData.trusted_form_cert_url || formData.certId),
    trustedFormCertUrl: sanitize(formData.trustedFormCertUrl || formData.trusted_form_cert_url || formData.certId),
    trustedFormPingUrl: sanitize(formData.trustedFormPingUrl || formData.pingUrl),
    trustedFormToken: sanitize(formData.trustedFormToken || formData.tokenUrl),
    date: new Date().toLocaleDateString(),
    form_type: "SSDI RIG Landing Page",
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SSDI_RIG_USER_TEMPLATE_ID, templateParams);
};
export const SSDIESendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    firstName: sanitize(formData.firstName),
    lastName: sanitize(formData.lastName),
    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    bestContactDateTime: getBestContactDateTime(formData),
    phone: sanitize(formData.phone),
    state: sanitize(formData.state),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    answers_text: sanitize(formData.answersText),
    localTime: new Date().toString(),
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),
    consentgiven: formData.consentgiven ? "true" : "false",
    ip_address: ipAddress,
    pageSource: getPageSourceValue(formData),
    page_source: getPageSourceValue(formData),
    form_type: "SSDI E Landing Page",
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SSDI_E_ADMIN_TEMPLATE_ID, templateParams);
};

export const SSDIESendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    firstName: sanitize(formData.firstName),
    lastName: sanitize(formData.lastName),
    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),
    state: sanitize(formData.state),
    question_1: formData.question_1,
    question_2: formData.question_2,
    question_3: formData.question_3,
    question_4: formData.question_4,
    question_5: formData.question_5,
    question_6: formData.question_6,
    question_7: formData.question_7,
    question_8: formData.question_8,
    question_9: formData.question_9,
    question_10: formData.question_10,
    question_11: formData.question_11,
    question_12: formData.question_12,
    question_13: formData.question_13,
    question_14: formData.question_14,
    question_15: formData.question_15,
    question_16: formData.question_16,
    question_17: formData.question_17,
    question_18: formData.question_18,
    question_19: formData.question_19,


    date: new Date().toLocaleDateString(),
    form_type: "SSDI E Landing Page",
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SSDI_E_USER_TEMPLATE_ID, templateParams);
};
export const sendAdminEmail = async (formData) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    alternateNumber: sanitize(formData.alternateNumber),
    category: formData.category,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
    message: `New legal service request from ${formData.name}`,
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),

    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
};

export const sendUserEmail = async (formData) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    alternateNumber: sanitize(formData.alternateNumber),
    category: formData.category,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
    date: new Date().toLocaleDateString(),
    ip_address: ipAddress,
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    page_source: getSourceUrl(),

    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, USER_TEMPLATE_ID, templateParams);
};

// NEW SubService functions
export const SubServiceSendAdminEmail = async (formData) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    // Handle both desktop and mobile form field names
    firstName: formData.firstName || formData.fist_name || '',
    lastName: formData.lastName || '',
    full_name: `${formData.firstName || formData.fist_name || ''} ${formData.lastName || ''}`.trim(),
    email: formData.email,
    phone: formData.phone,
    alternateNumber: sanitize(formData.alternateNumber),
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zipCode || ''}`.replace(/^,\s*/, '').trim(),
    message: `New SubService case review request from ${formData.firstName || formData.fist_name || ''} ${formData.lastName || ''}`,
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),

    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',

    // Additional fields for better tracking
    form_type: 'SubService Case Review',
    captcha_verified: 'Yes',
    terms_accepted: formData.termsAccepted ? 'Yes' : 'No',
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SUBSERVICE_ADMIN_TEMPLATE_ID, templateParams);
};

export const SubServiceSendUserEmail = async (formData) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    // Handle both desktop and mobile form field names
    firstName: formData.firstName || formData.firstName || '',
    lastName: formData.lastName || '',
    full_name: `${formData.firstName || formData.firstName || ''} ${formData.lastName || ''}`.trim(),
    email: formData.email,
    alternateNumber: sanitize(formData.alternateNumber),

    phone: formData.phone,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zipCode || ''}`.replace(/^,\s*/, '').trim(),
    date: new Date().toLocaleDateString(),
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),

    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',

    // Additional fields for personalization
    form_type: 'SubService Case Review',
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, SUBSERVICE_USER_TEMPLATE_ID, templateParams);
};


export const MotorVehicleSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {

    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: formData.FirstName,
    LastName: formData.LastName,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    q1: formData['Were you injured in a motor vehicle accident, or are you looking to file a claim?'],
    q2: formData['Do you currently have a motor vehicle accident claim, or are you looking to file one?'],
    trustedFormCertUrl: formData.certId,
    trustedFormPingUrl: formData.pingUrl,
    trustedFormToken: formData.tokenUrl,
    ip_address: ipAddress,
    page_source: getSourceUrl()
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, MotorVehicle_ADMIN_TEMPLATE_ID, templateParams);
};


export const MotorVehicleSendUserEmail = async ({ formData }) => {
  const templateParams = {

    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: formData.FirstName,
    LastName: formData.LastName,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    q1: formData['Were you injured in a motor vehicle accident, or are you looking to file a claim?'],
    q2: formData['Do you currently have a motor vehicle accident claim, or are you looking to file one?'],
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, MotorVehicle_USER_TEMPLATE_ID, templateParams);
};

















//depo lawsuit lander form functions A
export const DepoProveraLawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question lawsuit lander questions
    q1: sanitize(formData.q1), // "Have you been diagnosed with meningioma?"
    q2: sanitize(formData.q2), // "Have you ever used Depo-Provera or Depo-SubQ Provera?"
    q3: sanitize(formData.q3), // "Are you currently working with an attorney regarding this matter?"

    message: `New Depo-Provera Lawsuit inquiry from ${sanitize(formData.fullName)}`,

    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Depo-Provera Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, DepoProveraLawsuit_ADMIN_TEMPLATE_ID, templateParams);
};

export const DepoProveraLawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Include questions for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Depo-Provera Lawsuit Landing Page'
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, DepoProveraLawsuit_USER_TEMPLATE_ID, templateParams);
};

//hair relaxer lander form functions A
export const HairRelaxerLawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question lawsuit lander questions
    q1: sanitize(formData.q1), // "Have you been diagnosed with any of the following?"
    q2: sanitize(formData.q2), // "Have you used chemical hair relaxer products?"
    q3: sanitize(formData.q3), // "Are you currently working with an attorney regarding this matter?"

    message: `New Hair Relaxer Lawsuit inquiry from ${sanitize(formData.fullName)}`,

    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Hair Relaxer Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, HairRelaxerLawsuit_ADMIN_TEMPLATE_ID, templateParams);
};

export const HairRelaxerLawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Include questions for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Hair Relaxer Lawsuit Landing Page'
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, HairRelaxerLawsuit_USER_TEMPLATE_ID, templateParams);
};

//herniamesh lander form functions A
export const HerniaMeshLawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question lawsuit lander questions
    q1: sanitize(formData.q1), // "Did you undergo hernia repair surgery involving a mesh implant?"
    q2: sanitize(formData.q2), // "Did you experience complications after the surgery?"
    q3: sanitize(formData.q3), // "Are you currently working with an attorney regarding this matter?"

    message: `New Hernia Mesh Lawsuit inquiry from ${sanitize(formData.fullName)}`,

    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Hernia Mesh Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, HerniaMeshLawsuit_ADMIN_TEMPLATE_ID, templateParams);
};

export const HerniaMeshLawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Include questions for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Hernia Mesh Lawsuit Landing Page'
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, HerniaMeshLawsuit_USER_TEMPLATE_ID, templateParams);
};

//ozempic lander form functions A
export const OzempicLawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question lawsuit lander questions
    q1: sanitize(formData.q1), // "Have you been diagnosed with NAION?"
    q2: sanitize(formData.q2), // "Have you taken GLP-1 medications?"
    q3: sanitize(formData.q3), // "Are you currently working with an attorney?"

    message: `New Ozempic Lawsuit inquiry from ${sanitize(formData.fullName)}`,

    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Ozempic Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, OzempicLawsuit_ADMIN_TEMPLATE_ID, templateParams);
};
export const OzempicLawsuitSendAdminEmailE = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const docs = Array.isArray(formData.documentUrls)
    ? formData.documentUrls
    : [];

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    ip_address: ipAddress,
    page_source: getSourceUrl(),

    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),

    /* DOCUMENT LINKS */

    doc1: docs[0] || "",
    doc2: docs[1] || "",
    doc3: docs[2] || "",
    doc4: docs[3] || "",
    doc5: docs[4] || "",
    doc6: docs[5] || "",
    doc7: docs[6] || "",
    doc8: docs[7] || "",
    doc9: docs[8] || "",
    doc10: docs[9] || "",
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    OzempicLawsuitE_ADMIN_TEMPLATE_ID,
    templateParams
  );
};
export const OzempicLawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Include questions for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Ozempic Lawsuit Landing Page'
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, OzempicLawsuit_USER_TEMPLATE_ID, templateParams);
};

//talcum lander form functions A
export const TalcumPowderLawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question lawsuit lander questions
    q1: sanitize(formData.q1), // Dropdown: "Which condition were you diagnosed with?"
    q2: sanitize(formData.q2), // "Did you use talcum powder in the genital or perineal area?"
    q3: sanitize(formData.q3), // "Are you currently working with an attorney?"

    message: `New Talcum Powder Lawsuit inquiry from ${sanitize(formData.fullName)}`,

    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Talcum Powder Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, TalcumPowderLawsuit_ADMIN_TEMPLATE_ID, templateParams);
};

export const TalcumPowderLawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Include questions for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Talcum Powder Lawsuit Landing Page'
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, TalcumPowderLawsuit_USER_TEMPLATE_ID, templateParams);
};

//RideshareSA lander form functions A
export const RideshareSALawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question rideshare SA lander
    q1: sanitize(formData.q1), // Incident type
    q2: sanitize(formData.q2), // Was offender Uber/Lyft driver?
    q3: sanitize(formData.q3), // Already has attorney?

    message: `New Rideshare Sexual Assault inquiry from ${sanitize(formData.fullName)}`,

    // TrustedForm
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    // Metadata
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Rideshare Sexual Assault Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    RideshareSALawsuit_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const RideshareSALawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Echo answers for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Rideshare Sexual Assault Lawsuit Landing Page',
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    RideshareSALawsuit_USER_TEMPLATE_ID,
    templateParams
  );
};

//Social media addiction lander form functions A
export const SMALawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question Social Media Addiction lander
    q1: sanitize(formData.q1), // Currently under 19?
    q2: sanitize(formData.q2), // Used social media before 18?
    q3: sanitize(formData.q3), // Serious harm after use?

    message: `New Social Media Addiction inquiry from ${sanitize(formData.fullName)}`,

    // TrustedForm
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    // Metadata
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Social Media Addiction Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    SMALawsuit_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const SMALawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Echo answers for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Social Media Addiction Lawsuit Landing Page',
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    SMALawsuit_USER_TEMPLATE_ID,
    templateParams
  );
};


//RobloxSA lander form functions A
export const RobloxSALawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question Roblox SA lander
    q1: sanitize(formData.q1), // Met abuser through Roblox?
    q2: sanitize(formData.q2), // Under 18 at time of abuse?
    q3: sanitize(formData.q3), // Sexual exploitation / harm occurred?

    message: `New Roblox Sexual Abuse inquiry from ${sanitize(formData.fullName)}`,

    // TrustedForm
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    // Metadata
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Roblox Sexual Abuse Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    RobloxSALawsuit_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const RobloxSALawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Echo answers for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Roblox Sexual Abuse Lawsuit Landing Page',
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    RobloxSALawsuit_USER_TEMPLATE_ID,
    templateParams
  );
};


//Roundup lawsuit lander form functions A
export const RoundupLawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // 3-question Roundup Lawsuit lander
    q1: sanitize(formData.q1), // Diagnosed with Non-Hodgkin's Lymphoma?
    q2: sanitize(formData.q2), // Used Roundup for 3+ years before diagnosis?
    q3: sanitize(formData.q3), // Currently represented by an attorney?

    message: `New Roundup Lawsuit inquiry from ${sanitize(formData.fullName)}`,

    // TrustedForm
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    // Metadata
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Roundup Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    ROUNDUP_LAWSUIT_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const RoundupLawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Echo answers for confirmation
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Roundup Lawsuit Landing Page',
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    ROUNDUP_LAWSUIT_USER_TEMPLATE_ID,
    templateParams
  );
};


//Dupixent lawsuit lander form functions D
export const DupixentLawsuitSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Dupixent questions
    q1: sanitize(formData.q1), // Diagnosed with CTCL?
    q2: sanitize(formData.q2), // Diagnosis after Dupixent?
    q3: sanitize(formData.q3), // Attorney?

    message: `New Dupixent Lawsuit inquiry from ${sanitize(formData.fullName)}`,

    // TrustedForm
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    // Metadata
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Dupixent Lawsuit Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    DupixentLawsuit_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const DupixentLawsuitSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Echo answers
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),

    date: new Date().toLocaleDateString(),
    form_type: 'Dupixent Lawsuit Landing Page',
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    DupixentLawsuit_USER_TEMPLATE_ID,
    templateParams
  );
};


// ================= SSDI EMAILJS TEMPLATE IDS =================




// ================= ADMIN EMAIL =================

export const SSDISendAdminEmail = async ({ formData }) => {

  const ipAddress = await getIPAddress();

  const templateParams = {

    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),

    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    localTime: sanitize(formData.localTime || new Date().toString()),

    fullName: sanitize(formData.fullName),

    email: sanitize(formData.email),

    phone: sanitize(formData.phone),

    state: sanitize(formData.state),

    bestContactDateTime: getBestContactDateTime(formData),

    consentgiven: getConsentValue(formData),

    // SSDI Questions
    q1: sanitize(formData.q1), // Age 50-62
    q2: sanitize(formData.q2), // Receiving SSDI
    q3: sanitize(formData.q3), // Worked 5/10 years
    q4: sanitize(formData.q4), // Currently working
    q5: sanitize(formData.q5), // Attorney
    q6: sanitize(formData.q6), // Doctor treatment
    q7: sanitize(formData.q7), // Located in US

    message: `New SSDI Eligibility inquiry from ${sanitize(formData.fullName)}`,

    // TrustedForm
    certId: sanitize(formData.certId),
    pingUrl: sanitize(formData.pingUrl),
    tokenUrl: sanitize(formData.tokenUrl),

    // Metadata
    ip_address: ipAddress,

    pageSource: getPageSourceValue(formData),

    page_source: getPageSourceValue(formData),

    form_type: 'SSDI Eligibility Landing Page',

    // Ad tracking
    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    SSDI_ADMIN_TEMPLATE_ID,
    templateParams
  );
};


// ================= USER EMAIL =================

export const SSDISendUserEmail = async ({ formData }) => {

  const templateParams = {

    submissionDate: new Date().toLocaleString(),

    submissionDateCST: getCSTTimestamp(),

    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),

    email: sanitize(formData.email),

    phone: sanitize(formData.phone),

    state: sanitize(formData.state),

    // Echo Answers
    q1: sanitize(formData.q1),
    q2: sanitize(formData.q2),
    q3: sanitize(formData.q3),
    q4: sanitize(formData.q4),
    q5: sanitize(formData.q5),
    q6: sanitize(formData.q6),
    q7: sanitize(formData.q7),

    date: new Date().toLocaleDateString(),

    form_type: 'SSDI Eligibility Landing Page',
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    SSDI_USER_TEMPLATE_ID,
    templateParams
  );
};








// Talcum Powder form functions
export const TalcumPowderSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Talcum Powder Questions
    q1: sanitize(formData['Are you female?']),
    q2: sanitize(
      formData['Were you diagnosed with ovarian cancer or fallopian tube cancer in 2015 or later?']
    ),
    q3: sanitize(
      formData["Did you regularly use Johnson's Baby Powder or Johnson & Johnson's Shower to Shower for personal hygiene ?"]
    ),
    q4: sanitize(formData['Did your use occur after 1982?']),
    q5: sanitize(
      formData["For how long did you use Johnson's Baby Powder or Shower to Shower for personal hygiene?"]
    ),
    q6: sanitize(formData['Are you currently represented by an attorney for this case?']),

    message: `New Talcum Powder eligibility check from ${sanitize(
      formData.FirstName
    )} ${sanitize(formData.LastName)}`,

    trustedFormCertUrl: formData.certId || 'Not available',
    trustedFormPingUrl: formData.pingUrl || 'Not available',
    trustedFormToken: formData.tokenUrl || 'Not available',

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Talcum Powder Lawsuit Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    TalcumPowder_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const TalcumPowderSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Optional: include answers if needed later
    q1: sanitize(formData['Are you female?']),
    q2: sanitize(
      formData['Were you diagnosed with ovarian cancer or fallopian tube cancer in 2015 or later?']
    ),
    q3: sanitize(
      formData["Did you regularly use Johnson's Baby Powder or Johnson & Johnson's Shower to Shower for personal hygiene ?"]
    ),
    q4: sanitize(formData['Did your use occur after 1982?']),
    q5: sanitize(
      formData["For how long did you use Johnson's Baby Powder or Shower to Shower for personal hygiene?"]
    ),
    q6: sanitize(formData['Are you currently represented by an attorney for this case?']),

    date: new Date().toLocaleDateString(),
    form_type: 'Talcum Powder Lawsuit Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    TalcumPowder_USER_TEMPLATE_ID,
    templateParams
  );
};


// Depo Provera form functions
export const DepoProveraSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    q1: sanitize(formData['Are you female?']),
    q2: sanitize(formData['Did you receive Depo-Provera (birth control injection)?']),
    q3: sanitize(formData['Have you been diagnosed with a brain tumor, including meningioma?']),
    q4: sanitize(formData['How old were you at the time of your brain tumor diagnosis?']),
    q5: sanitize(formData['For how long did you receive Depo-Provera injections?']),
    q6: sanitize(formData['Did your brain tumor diagnosis occur within the last 10 years?']),
    q7: sanitize(formData['Is the person diagnosed still living?']),
    q8: sanitize(formData['Did the person pass away within the last 10 years?']),
    q9: sanitize(formData['Do you have access to medical records related to the brain tumor diagnosis?']),
    q10: sanitize(formData['Are you currently represented by an attorney for this case?']),

    message: `New Depo-Provera Brain Tumor eligibility check from ${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`,

    trustedFormCertUrl: formData.certId || 'Not available',
    trustedFormPingUrl: formData.pingUrl || 'Not available',
    trustedFormToken: formData.tokenUrl || 'Not available',

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Depo-Provera Brain Tumor Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, DepoProvera_ADMIN_TEMPLATE_ID, templateParams);
};


export const DepoProveraSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    q1: sanitize(formData['Are you female?']),
    q2: sanitize(formData['Did you receive Depo-Provera (birth control injection)?']),
    q3: sanitize(formData['Have you been diagnosed with a brain tumor, including meningioma?']),
    q4: sanitize(formData['How old were you at the time of your brain tumor diagnosis?']),
    q5: sanitize(formData['For how long did you receive Depo-Provera injections?']),
    q6: sanitize(formData['Did your brain tumor diagnosis occur within the last 10 years?']),
    q7: sanitize(formData['Is the person diagnosed still living?']),
    q8: sanitize(formData['Did the person pass away within the last 10 years?']),
    q9: sanitize(formData['Do you have access to medical records related to the brain tumor diagnosis?']),
    q10: sanitize(formData['Are you currently represented by an attorney for this case?']),

    date: new Date().toLocaleDateString(),
    form_type: 'Depo-Provera Brain Tumor Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, DepoProvera_USER_TEMPLATE_ID, templateParams);
};

//Hair Relaxer form functions
export const HairRelaxerSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Hair Relaxer Questions
    q1: sanitize(formData['Have you been diagnosed with any of the following cancers in 2010 or later?']),
    q2: sanitize(formData['How old were you at the time of your cancer diagnosis?']),
    q3: sanitize(formData['Did you use chemical hair relaxer products continuously for at least 4 years before your diagnosis?']),
    q4: sanitize(formData['During your highest period of use, did you use hair relaxers at least 4 times per year?']),
    q5: sanitize(formData['Did your cancer diagnosis occur within 10 years of your last hair relaxer use?']),
    q6: sanitize(formData['Do you know the hair relaxer brand you used, and did it contain formaldehyde or phthalates?']),
    q7: sanitize(formData['Are you currently represented by an attorney for this case?']),

    message: `New Hair Relaxer Cancer eligibility check from ${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`,

    trustedFormCertUrl: formData.certId || 'Not available',
    trustedFormPingUrl: formData.pingUrl || 'Not available',
    trustedFormToken: formData.tokenUrl || 'Not available',

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Hair Relaxer Cancer Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    HairRelaxer_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const HairRelaxerSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Hair Relaxer Questions (optional for user template, but safe to include)
    q1: sanitize(formData['Have you been diagnosed with any of the following cancers in 2010 or later?']),
    q2: sanitize(formData['How old were you at the time of your cancer diagnosis?']),
    q3: sanitize(formData['Did you use chemical hair relaxer products continuously for at least 4 years before your diagnosis?']),
    q4: sanitize(formData['During your highest period of use, did you use hair relaxers at least 4 times per year?']),
    q5: sanitize(formData['Did your cancer diagnosis occur within 10 years of your last hair relaxer use?']),
    q6: sanitize(formData['Do you know the hair relaxer brand you used, and did it contain formaldehyde or phthalates?']),
    q7: sanitize(formData['Are you currently represented by an attorney for this case?']),

    date: new Date().toLocaleDateString(),
    form_type: 'Hair Relaxer Cancer Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    HairRelaxer_USER_TEMPLATE_ID,
    templateParams
  );
};

// Ozempic form functions
export const OzempicSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Ozempic / GLP-1 Vision Loss Questions
    q1: sanitize(
      formData[
      'Have you been diagnosed with Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION)?'
      ]
    ),
    q2: sanitize(
      formData[
      'Did your NAION diagnosis occur while you were actively taking the medication?'
      ]
    ),
    q3: sanitize(
      formData[
      'Did you stop taking the medication at the time of your NAION diagnosis?'
      ]
    ),
    q4: sanitize(
      formData[
      'Do you currently have permanent vision impairment as a result of NAION?'
      ]
    ),
    q5: sanitize(
      formData[
      'How old are you right now?'
      ]
    ),
    q6: sanitize(
      formData[
      'Did you use a brand-name GLP-1 medication such as one of the following?'
      ]
    ),
    q7: sanitize(
      formData[
      'Are you currently represented by an attorney for this matter?'
      ]
    ),

    message: `New Ozempic / GLP-1 Vision Loss eligibility check from ${sanitize(
      formData.FirstName
    )} ${sanitize(formData.LastName)}`,

    trustedFormCertUrl: formData.certId || 'Not available',
    trustedFormPingUrl: formData.pingUrl || 'Not available',
    trustedFormToken: formData.tokenUrl || 'Not available',

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Ozempic & GLP-1 Vision Loss (NAION) Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    Ozempic_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const OzempicSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Ozempic Questions (optional for user email)
    q1: sanitize(
      formData[
      'Have you been diagnosed with Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION)?'
      ]
    ),
    q2: sanitize(
      formData[
      'Did your NAION diagnosis occur while you were actively taking the medication?'
      ]
    ),
    q3: sanitize(
      formData[
      'Did you stop taking the medication at the time of your NAION diagnosis?'
      ]
    ),
    q4: sanitize(
      formData[
      'Do you currently have permanent vision impairment as a result of NAION?'
      ]
    ),
    q5: sanitize(
      formData[
      'How old are you right now?'
      ]
    ),
    q6: sanitize(
      formData[
      'Did you use a brand-name GLP-1 medication such as one of the following?'
      ]
    ),
    q7: sanitize(
      formData[
      'Are you currently represented by an attorney for this matter?'
      ]
    ),

    date: new Date().toLocaleDateString(),
    form_type: 'Ozempic & GLP-1 Vision Loss (NAION) Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    Ozempic_USER_TEMPLATE_ID,
    templateParams
  );
};


// Hernia Mesh form functions
export const HerniaMeshSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Hernia Mesh Eligibility Questions (DOC-ALIGNED)
    q1: sanitize(
      formData[
      'Did you receive a hernia mesh implant as part of a hernia repair surgery?'
      ]
    ),
    q2: sanitize(
      formData[
      'What complication did you experience after your hernia mesh surgery?'
      ]
    ),
    q3: sanitize(
      formData[
      'Did you require revision or removal surgery due to the complication?'
      ]
    ),
    q4: sanitize(
      formData[
      'How old were you when the mesh complication occurred?'
      ]
    ),
    q5: sanitize(
      formData[
      'Did the complication or revision surgery occur within the last 10 years?'
      ]
    ),
    q6: sanitize(
      formData[
      'Are you currently represented by an attorney for this matter?'
      ]
    ),
    q7: sanitize(
      formData[
      'Do you have access to medical records related to your hernia mesh surgery or complications?'
      ]
    ),

    message: `New Hernia Mesh eligibility check from ${sanitize(
      formData.FirstName
    )} ${sanitize(formData.LastName)}`,

    trustedFormCertUrl: formData.certId || 'Not available',
    trustedFormPingUrl: formData.pingUrl || 'Not available',
    trustedFormToken: formData.tokenUrl || 'Not available',

    ip_address: ipAddress,
    page_source: getSourceUrl(),
    form_type: 'Hernia Mesh Lawsuit Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    HerniaMesh_ADMIN_TEMPLATE_ID,
    templateParams
  );
};


export const HerniaMeshSendUserEmail = async ({ formData }) => {
  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    FirstName: sanitize(formData.FirstName),
    LastName: sanitize(formData.LastName),
    fullName: `${sanitize(formData.FirstName)} ${sanitize(formData.LastName)}`.trim(),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),
    state: sanitize(formData.state),

    // Hernia Mesh Questions (optional display for user)
    q1: sanitize(
      formData[
      'Did you receive a hernia mesh implant as part of a hernia repair surgery?'
      ]
    ),
    q2: sanitize(
      formData[
      'What complication did you experience after your hernia mesh surgery?'
      ]
    ),
    q3: sanitize(
      formData[
      'Did you require revision or removal surgery due to the complication?'
      ]
    ),
    q4: sanitize(
      formData[
      'How old were you when the mesh complication occurred?'
      ]
    ),
    q5: sanitize(
      formData[
      'Did the complication or revision surgery occur within the last 10 years?'
      ]
    ),
    q6: sanitize(
      formData[
      'Are you currently represented by an attorney for this matter?'
      ]
    ),
    q7: sanitize(
      formData[
      'Do you have access to medical records related to your hernia mesh surgery or complications?'
      ]
    ),

    date: new Date().toLocaleDateString(),
    form_type: 'Hernia Mesh Lawsuit Eligibility Check'
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    HerniaMesh_USER_TEMPLATE_ID,
    templateParams
  );
};

//Dynamic Lander form functions
export const DynamicLanderSendAdminEmail = async ({ formData }) => {
  const ipAddress = await getIPAddress();

  let questionsHtml = "";

  Object.keys(formData).forEach((key) => {
    if (/^question\d+$/.test(key)) {
      const questionNumber = key.replace("question", "");
      const answerKey = `q${questionNumber}`;

      questionsHtml += `
        <div style="margin-bottom: 12px;">
          <div style="font-weight: bold; color: #444;">
            Q${questionNumber}: ${sanitize(formData[key])}
          </div>

          <div style="margin-top: 4px; color: #000;">
            ${sanitize(formData[answerKey]) || "N/A"}
          </div>
        </div>
      `;
    }
  });

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),

    questions_html: questionsHtml,

    message: `New Dynamic Lander submission from ${sanitize(formData.fullName)}`,

    trustedFormCertUrl: formData.certId || 'Not available',
    trustedFormPingUrl: formData.pingUrl || 'Not available',
    trustedFormToken: formData.tokenUrl || 'Not available',

    ip_address: ipAddress,
    page_source: getSourceUrl(),

    form_type: 'Dynamic Lawsuit Landing Page',

    gclid: sanitize(formData.gclid),
    gbraid: sanitize(formData.gbraid),
    wbraid: sanitize(formData.wbraid),
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    DynamicLander_ADMIN_TEMPLATE_ID,
    templateParams
  );
};

export const DynamicLanderSendUserEmail = async ({ formData }) => {
  let questionsHtml = "";

  Object.keys(formData).forEach((key) => {
    if (/^question\d+$/.test(key)) {
      const questionNumber = key.replace("question", "");
      const answerKey = `q${questionNumber}`;

      questionsHtml += `
        <div style="margin-bottom: 12px;">
          <div style="font-weight: bold; color: #444;">
            Q${questionNumber}: ${sanitize(formData[key])}
          </div>

          <div style="margin-top: 4px; color: #000;">
            ${sanitize(formData[answerKey]) || "N/A"}
          </div>
        </div>
      `;
    }
  });

  const templateParams = {
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

    fullName: sanitize(formData.fullName),
    email: sanitize(formData.email),
    phoneNumber: sanitize(formData.phoneNumber),

    questions_html: questionsHtml,

    date: new Date().toLocaleDateString(),

    form_type: 'Dynamic Lawsuit Landing Page',
  };

  return sendEmailWithLeadTimestamps(
    SERVICE_ID,
    DynamicLander_USER_TEMPLATE_ID,
    templateParams
  );
};

// Lead Prosper API function for Depo-Provera
// export const sendToLeadProsper = async ({formData}) => {
//   try {
//     const ipAddress = await getIPAddress();

//     // Map form data to Lead Prosper API format
//     const leadProsperData = {
//       lp_campaign_id: "30996",
//       lp_supplier_id: "96284",
//       lp_key: "goda5jnrux65q",
//       lp_action: "",
//       lp_subid1: "",
//       lp_subid2: "",
//       Source: "Connect2Attorney",
//       first_name: sanitize(formData.FirstName) || "",
//       last_name: sanitize(formData.LastName) || "",
//       email: sanitize(formData.email) || "",
//       number1: cleanPhoneNumber(formData.phoneNumber) || "",
//       street: "",
//       city: "",
//       zip: "",
//       state: sanitize(formData.state) || "",
//       other_cancer_type: "",
//       diagnosis_date: "",
//       Diagnosed_in_the_last_4_years: "",
//       Used_product_12_months_or_more_before_dx: "",
//       Does_the_Injured_Party_Have_an_Attorney: sanitize(formData['Are you currently represented by an attorney for this case?']) || "",
//       date_of_birth: "",
//       notes: "",
//       external_id: "",
//       ip_adress: ipAddress,
//       verification_id_2: "",
//       verification_id: formData.certId || "",
//       Visit_Date: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
//     };

//     const response = await fetch('https://api.leadprosper.io/direct_post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(leadProsperData)
//     });

//     const result = await response.json();
//     console.log('Lead Prosper API Response:', result);
//     return result;
//   } catch (error) {
//     // Log error but don't throw - we want to continue with email calls even if this fails
//     console.error('Failed to send to Lead Prosper API:', error);
//     return { status: 'ERROR', message: error.message };
//   }
// };

// ClaimFormInline (Car Accident Claim Form) functions
const CLAIM_FORM_ADMIN_TEMPLATE_ID = 'template_fr4evoh';
const CLAIM_FORM_USER_TEMPLATE_ID = 'template_2yh7dud';

export const ClaimFormSendAdminEmail = async (formData, trustedFormData = {}) => {
  const ipAddress = await getIPAddress();

  const templateParams = {
    name: sanitize(formData.name),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),
    involved: sanitize(formData.involved),
    injured: sanitize(formData.injured),
    fault: sanitize(formData.fault),
    attorney: sanitize(formData.attorney),
    period: sanitize(formData.period),
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    trustedFormCertUrl: trustedFormData.xxTrustedFormCertUrl || trustedFormData.certId || 'Not available',
    trustedFormPingUrl: trustedFormData.xxTrustedFormPingUrl || trustedFormData.pingUrl || 'Not available',
    trustedFormToken: trustedFormData.xxTrustedFormCertToken || trustedFormData.tokenUrl || 'Not available',
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, CLAIM_FORM_ADMIN_TEMPLATE_ID, templateParams);
};

export const ClaimFormSendUserEmail = async (formData) => {
  const templateParams = {
    name: sanitize(formData.name),
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),
    submissionDate: new Date().toLocaleString(),
    submissionDateCST: getCSTTimestamp(),
  };

  return sendEmailWithLeadTimestamps(SERVICE_ID, CLAIM_FORM_USER_TEMPLATE_ID, templateParams);
};

// Combined function that sends admin first, then user if admin succeeds
export const ClaimFormSendEmails = async (formData, trustedFormData = {}) => {
  try {
    // First, send admin email
    const adminResponse = await ClaimFormSendAdminEmail(formData, trustedFormData);

    // Only if admin email succeeds, send user email
    if (adminResponse && adminResponse.status === 200) {
      const userResponse = await ClaimFormSendUserEmail(formData);
      return {
        success: true,
        adminResponse,
        userResponse
      };
    } else {
      throw new Error('Admin email failed');
    }
  } catch (error) {
    console.error('Failed to send emails:', error);
    return {
      success: false,
      error: error.message || 'Failed to send emails'
    };
  }
};

