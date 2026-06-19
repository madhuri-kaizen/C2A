
'use client'
import React, { useState, useEffect, useRef } from "react";

const logo  = "/logotitle.svg";
const successIcon = "/Form/success.png";
const tyBuildings = "/Form/tybuildings.png";
const tyBuildingsMobile = "/Form/tybuildingsmobile.png";
const heroBg = "/Form/bgd.png";
const mobileHeroBg = "/Form/bgdm.png";
import { DynamicLanderSendAdminEmail, DynamicLanderSendUserEmail } from '../emailService2';
import {
  buildAdvancedMatching,
  ensureMetaPixel,
  normalizeEmail,
  normalizePhone,
  isValidEmail,
  isValidPhoneDigits,
  trackEventWithUserData
} from '../utils/metaPixel';
import { LEAD_GENERATION_VERTICALS } from "./constant";

/**
 * DynamicLander Component with Full Backend Integration
 *
 * BACKEND FEATURES INTEGRATED:
 * - Meta Pixel tracking with advanced matching
 * - Google Analytics conversion tracking
 * - CRM submission
 * - Retell CRM submission
 * - EmailJS integration
 * - TrustedForm tracking
 * - Ad tracking parameters (gclid, gbraid, wbraid)
 */

const ThankYouPage = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div className="pt-10 flex justify-center">
        <img src={logo} alt="Connect to Attorney" className="h-9" />
      </div>

      <div className="mt-[90px] pb-[220px] flex flex-col items-center text-center px-6 z-10 relative">
        <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mb-6">
          <img src={successIcon} alt="Success" className="w-120 h-120" />
        </div>

        <h1 className="text-[26px] font-bold text-[#162766] mb-4">
          Thank you for sharing your story.
        </h1>

        <p className="text-[14px] leading-relaxed text-[#4B5563] max-w-[720px]">
          Based on your answers, you may qualify for compensation, and you deserve
          to be heard and represented. Next, an intake specialist from our team
          will contact you for a brief call to explain the next steps and share
          key details about this litigation and how it may apply to your situation.
        </p>

        <div className="mt-8 text-[13px] text-[#162766] flex gap-3">
          <a href="/Disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
            Disclaimer
          </a>
          <span>|</span>
          <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <img src={tyBuildings} alt="Buildings" className="w-full" />
      </div>
    </div>
  );
};

const MobileThankYou = () => {
  return (
    <div className="lg:hidden relative w-full min-h-screen bg-white overflow-hidden">
      <div className="pt-10 flex justify-center">
        <img src={logo} className="h-8" />
      </div>

      <div className="mt-20 px-6 text-center relative z-10 pb-48">
        <div className="w-[88px] h-[88px] mx-auto mb-6 rounded-full bg-[#162766] flex items-center justify-center">
          <svg width="42" height="32" viewBox="0 0 42 32" fill="none">
            <path
              d="M2 18L14 30L40 2"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-[28px] font-bold text-[#162766] mb-4">
          Thank you for
          <br />
          sharing your story.
        </h2>

        <p className="text-[16px] leading-[22px] text-[#4B5563]">
          Based on your answers, you may qualify for compensation, and you deserve
          to be heard and represented. Next, an intake specialist from our team
          will contact you for a brief call to explain the next steps and share key
          details about this litigation and how it may apply to your situation.
        </p>

        <div className="mt-20 text-[13px] text-[#162766] flex justify-center gap-3">
          <a href="/Disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
            Disclaimer
          </a>
          <span>|</span>
          <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
            Privacy Policy
          </a>
        </div>
      </div>

      <img src={tyBuildingsMobile} className="absolute bottom-0 left-0 w-full" />
    </div>
  );
};

const DynamicLander = ({ templateData }) => {
  // Meta Pixel ID
  const META_PIXEL_ID = ""; //1384766283666943

  // Refs for tracking
  let initialLandingUrl = useRef(null);
  const adTrackingRef = useRef({
    gclid: null,
    gbraid: null,
    wbraid: null,
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ================= PARTIAL CAPTURE STATE =================
  const [leadId, setLeadId] = useState(null);
  const [earlySent, setEarlySent] = useState(false);

  const earlyLeadLock = useRef(false);
  const emailUpdateLock = useRef(false);
  const lastUpdatedEmailRef = useRef(null);

  const generateSessionId = () => {
    return `CR_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  };

  const [uniqueSessionId] = useState(generateSessionId);

  // Form state for desktop
  const [desktopFormData, setDesktopFormData] = useState({
    fullName: "",
    phone: "+1 ",
    email: "",
    consent: false,
  });

  // Form state for mobile
  const [mobileFormData, setMobileFormData] = useState({
    fullName: "",
    phone: "+1 ",
    email: "",
    consent: false,
  });

  // Error state
  const [desktopErrors, setDesktopErrors] = useState({});
  const [mobileErrors, setMobileErrors] = useState({});
  const [desktopTouched, setDesktopTouched] = useState({});
  const [mobileTouched, setMobileTouched] = useState({});

  // ================= STEPPER ARCHITECTURE =================

  const questions = templateData?.form_questions || [];

  // If more than 3 questions, activate stepper mode
  const isStepperForm = questions.length > 3;

  const QUESTIONS_PER_STEP = 3;

  const questionChunks = [];
  for (let i = 0; i < questions.length; i += QUESTIONS_PER_STEP) {
    questionChunks.push(questions.slice(i, i + QUESTIONS_PER_STEP));
  }

  // Step 1 = personal info, Step 2+ = question chunks
  const [desktopStep, setDesktopStep] = useState(1);
  const [mobileStep, setMobileStep] = useState(1);

  // Current chunk = step - 2 because step 1 is personal info
  const currentDesktopQuestionChunk =
  questionChunks[desktopStep - 1] || [];

  const currentMobileQuestionChunk =
  questionChunks[mobileStep - 1] || [];

  const totalQuestionSteps = questionChunks.length;

  // Last question step = personal info step (1) + all question chunks
  const isLastDesktopQuestionStep =
  desktopStep === totalQuestionSteps;

  const isLastMobileQuestionStep =
  mobileStep === totalQuestionSteps;

  const CRM_API_URL =
    "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

  // ========== BACKEND HELPER FUNCTIONS ==========

  const getSourceUrl = () => {
    if (typeof window === "undefined") return "Unknown";
    if (!initialLandingUrl.current) {
      initialLandingUrl.current = window.location.href;
    }
    return initialLandingUrl.current;
  };

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

  const normalizePhoneDigits = (phone) => {
    return phone.replace(/\D/g, "").slice(0, 10);
  };

  const formatPhoneInput = (value) => {
    let digits = value.replace(/\D/g, "");

    if (digits.length === 11 && digits.startsWith("1")) {
      digits = digits.slice(1);
    }

    digits = digits.slice(0, 10);

    let formatted = "";

    if (digits.length > 0) {
      formatted += `(${digits.substring(0, 3)}`;
    }

    if (digits.length >= 4) {
      formatted += `) ${digits.substring(3, 6)}`;
    }

    if (digits.length >= 7) {
      formatted += `-${digits.substring(6, 10)}`;
    }

    return formatted;
  };

  const getUSTimezone = (tz) => {
    if (!tz) return "unknown";

    if (
      tz.includes("New_York") ||
      tz.includes("Detroit") ||
      tz.includes("Indiana")
    ) return "ET";

    if (
      tz.includes("Chicago") ||
      tz.includes("Menominee")
    ) return "CT";

    if (
      tz.includes("Denver") ||
      tz.includes("Boise") ||
      tz.includes("Phoenix")
    ) return "MT";

    if (tz.includes("Los_Angeles")) return "PT";

    if (
      tz.includes("Anchorage") ||
      tz.includes("Juneau")
    ) return "AK";

    if (tz.includes("Honolulu")) return "HT";

    return "other";
  };

  const getTrustedFormData = () => {
    return new Promise((resolve) => {
      const certUrl =
        document.getElementById('xxTrustedFormCertUrl')?.value ||
        document.getElementById('xxTrustedFormCertUrl_mobile')?.value;

      const tokenUrl =
        document.getElementById('xxTrustedFormCertToken')?.value ||
        document.getElementById('xxTrustedFormCertToken_mobile')?.value;

      const pingUrl =
        document.getElementById('xxTrustedFormPingUrl')?.value ||
        document.getElementById('xxTrustedFormPingUrl_mobile')?.value;

      if (!certUrl) {
        setTimeout(() => {
          const retryCertUrl =
            document.getElementById('xxTrustedFormCertUrl')?.value ||
            document.getElementById('xxTrustedFormCertUrl_mobile')?.value;
          const retryTokenUrl =
            document.getElementById('xxTrustedFormCertToken')?.value ||
            document.getElementById('xxTrustedFormCertToken_mobile')?.value;
          const retryPingUrl =
            document.getElementById('xxTrustedFormPingUrl')?.value ||
            document.getElementById('xxTrustedFormPingUrl_mobile')?.value;

          resolve({
            certId: retryCertUrl,
            tokenUrl: retryTokenUrl,
            pingUrl: retryPingUrl,
          });
        }, 500);
      } else {
        resolve({
          certId: certUrl,
          tokenUrl: tokenUrl,
          pingUrl: pingUrl,
        });
      }
    });
  };

  const createEarlyLead = async ({ fullName, phone, email = "" }) => {
    const cleanName = fullName.trim();

    if (leadId || earlySent || earlyLeadLock.current) return leadId;
    if (!cleanName || phone.length !== 10) return null;

    earlyLeadLock.current = true;

    try {
      const trustedFormData = await getTrustedFormData();
      const ipAddress = await getIPAddress();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const body = {
        countryName: "USA",
        brandType: "Internal",
        brandName: "Project 6",
        websiteName: "Connect to Attorney",
        formPath: "/dynamic-lander",
        vertical: LEAD_GENERATION_VERTICALS.OZEMPIC,
        formname: "Dynamic Lander",
        isPartialSubmission: true,
        data: {
          name: cleanName,
          phone: `+1${phone}`,
          email,
          submissionDate: new Date().toISOString(),
          uniqueSessionId,
          pageSource: getSourceUrl(),
          trustedFormCertUrl: trustedFormData.certId,
          trustedFormPingUrl: trustedFormData.pingUrl,
          trustedFormToken: trustedFormData.tokenUrl,
          ipAddress,
          gclid: adTrackingRef.current.gclid,
          gbraid: adTrackingRef.current.gbraid,
          wbraid: adTrackingRef.current.wbraid,
          timezone,
        },
      };

      const res = await fetch(CRM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const json = await res.json();
      const nextLeadId = json.id;

      setLeadId(nextLeadId);
      setEarlySent(true);

      return nextLeadId;
    } catch (err) {
      console.error("Early Lead Failed:", err);
      earlyLeadLock.current = false;
      return null;
    }
  };

  const updateLeadEmail = async ({
    email,
    phone,
    fullName,
    currentLeadId = leadId,
  }) => {
    const cleanName = fullName.trim();

    if (
      !currentLeadId ||
      !cleanName ||
      phone.length !== 10 ||
      !validateEmail(email)
    ) {
      return;
    }

    if (emailUpdateLock.current || lastUpdatedEmailRef.current === email) {
      return;
    }

    emailUpdateLock.current = true;

    try {
      const trustedFormData = await getTrustedFormData();
      const ipAddress = await getIPAddress();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const body = {
        countryName: "USA",
        brandType: "Internal",
        brandName: "Project 6",
        websiteName: "Connect to Attorney",
        formname: "Dynamic Lander",
        isPartialSubmission: true,
        vertical: LEAD_GENERATION_VERTICALS.OZEMPIC,
        data: {
          name: cleanName,
          phone: `+1${phone}`,
          email,
          submissionDate: new Date().toISOString(),
          uniqueSessionId,
          pageSource: getSourceUrl(),
          trustedFormCertUrl: trustedFormData.certId,
          trustedFormPingUrl: trustedFormData.pingUrl,
          trustedFormToken: trustedFormData.tokenUrl,
          ipAddress,
          gclid: adTrackingRef.current.gclid,
          gbraid: adTrackingRef.current.gbraid,
          wbraid: adTrackingRef.current.wbraid,
          timezone,
        },
      };

      const res = await fetch(`${CRM_API_URL}/${currentLeadId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      lastUpdatedEmailRef.current = email;
    } catch (err) {
      console.error("Email update failed:", err);
    } finally {
      emailUpdateLock.current = false;
    }
  };

  const triggerEarlyLeadIfEligible = async (formData) => {
    const phone = normalizePhoneDigits(formData.phone);
    const fullName = formData.fullName.trim();

    if (!fullName || phone.length !== 10) {
      return null;
    }

    return createEarlyLead({
      fullName,
      phone,
      email: validateEmail(formData.email) ? formData.email : "",
    });
  };

  const syncEmailUpdateIfEligible = async (formData, currentLeadId = leadId) => {
    const phone = normalizePhoneDigits(formData.phone);
    const email = formData.email.trim();
    const fullName = formData.fullName.trim();

    if (!email || !validateEmail(email)) {
      return;
    }

    await updateLeadEmail({ email, phone, fullName, currentLeadId });
  };

  const ensureLeadForForm = async (formData) => {
    let currentLeadId = leadId;

    if (!currentLeadId) {
      currentLeadId = await triggerEarlyLeadIfEligible(formData);
    }

    if (!currentLeadId) {
      console.error("No leadId found");
      return null;
    }

    await syncEmailUpdateIfEligible(formData, currentLeadId);

    return currentLeadId;
  };

  // ========== DYNAMIC QUESTION PAYLOAD BUILDER ==========
  // Builds dynamic q1, q2, q3... and question1, question2... for unlimited questions
  const buildDynamicQuestionPayload = (formData) => {
    const data = {};
    questions.forEach((questionText, idx) => {
      const fieldName = `q${idx + 1}`;
      data[fieldName] = formData[fieldName] || "";
      data[`question${idx + 1}`] = questionText;
    });
    return data;
  };

  const submitFinalLead = async ({ currentLeadId, payload }) => {
    const trustedFormData = await getTrustedFormData();
    const ipAddress = await getIPAddress();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Build dynamic question data — supports unlimited questions
    const dynamicQuestionData = buildDynamicQuestionPayload(payload);

    const res = await fetch(`${CRM_API_URL}/${currentLeadId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        countryName: "USA",
        brandType: "Internal",
        brandName: "Project 6",
        websiteName: "Connect to Attorney",
        formname: "Dynamic Lander",
        finalSubmit: true,
        deleteFromWebsiteLogs: true,
        vertical: LEAD_GENERATION_VERTICALS.OZEMPIC,
        data: {
          name: payload.fullName,
          firstName: payload.fullName.split(' ')[0] || '',
          lastName: payload.fullName.split(' ').slice(1).join(' ') || '',
          phone: payload.phone,
          email: payload.email,
          // Dynamic question answers and labels — replaces hardcoded q1/q2/q3
          ...dynamicQuestionData,
          consent: payload.consent,
          submissionDate: new Date().toISOString(),
          uniqueSessionId,
          pageSource: getSourceUrl(),
          trustedFormCertUrl: trustedFormData.certId,
          trustedFormPingUrl: trustedFormData.pingUrl,
          trustedFormToken: trustedFormData.tokenUrl,
          ipAddress,
          gclid: adTrackingRef.current.gclid,
          gbraid: adTrackingRef.current.gbraid,
          wbraid: adTrackingRef.current.wbraid,
          timezone,
        },
      }),
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }
  };

  const sendToRetellCRM = async ({ payload }) => {
    try {
      const ipAddress = await getIPAddress();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const submittedAtUTC = new Date().toISOString();
      const usTimezone = getUSTimezone(timezone);

      // Build dynamic question data — supports unlimited questions
      const dynamicQuestionData = buildDynamicQuestionPayload(payload);

      const retellPayload = {
        countryName: 'USA',
        brandType: "Internal",
        brandName: 'Project 6',
        websiteName: 'Connect to Attorney',
        vertical: LEAD_GENERATION_VERTICALS.OZEMPIC,
        formPath: '/dynamic-lander',
        formname: 'Dynamic Lander',
        data: {
          submissionDate: new Date().toLocaleString(),
          fullName: payload.fullName,
          firstName: payload.fullName.split(' ')[0] || '',
          lastName: payload.fullName.split(' ').slice(1).join(' ') || '',
          phone: payload.phone,
          email: payload.email,
          consentGiven: payload.consent,
          // Legacy named fields preserved for backward compatibility
          hasNAION: payload.q1,
          hasUsedGLP1: payload.q2,
          hasAttorney: payload.q3,
          // Dynamic question answers and labels — supports unlimited questions
          ...dynamicQuestionData,
          timezone,
          usTimezone,
          submittedAtUTC,
          injuryType: "Ozempic / GLP-1 Vision Loss (NAION)",
          trustedFormCertUrl: payload.certId,
          trustedFormPingUrl: payload.pingUrl,
          trustedFormToken: payload.tokenUrl,
          ip_address: ipAddress,
          pageUrl: getSourceUrl(),
          gclid: payload.gclid,
          gbraid: payload.gbraid,
          wbraid: payload.wbraid,
        },
      };

      const res = await fetch(
        "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata/retell",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(retellPayload),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Retell CRM failed:", text);
      }
    } catch (err) {
      console.error("Retell CRM error:", err);
    }
  };

  // ========== VALIDATION FUNCTIONS ==========

  const validateEmail = (email) => {
    const normalizedEmail = normalizeEmail(email);
    return isValidEmail(normalizedEmail);
  };

  const validatePhone = (phone) => {
    const normalizedPhone = normalizePhone(phone, { defaultCountryCode: "1" });
    return isValidPhoneDigits(normalizedPhone);
  };

  // 1. Validate ONLY personal info fields (used by Continue button on step 1)
  const validatePersonalInfo = (formData) => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    return errors;
  };

  // 2. Validate ONLY the currently visible question chunk (used by Next button)
  const validateCurrentQuestionChunk = (formData, currentChunk, globalStartIndex) => {
    const errors = {};
    currentChunk.forEach((_, idx) => {
      const fieldName = `q${globalStartIndex + idx + 1}`;
      if (!formData[fieldName]) {
        errors[fieldName] = "Please answer this question";
      }
    });
    return errors;
  };

  // 3. Validate ALL fields (used only on final submit)
  const validateFullForm = (formData) => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Dynamically validate all question fields
    questions.forEach((_, idx) => {
      const fieldName = `q${idx + 1}`;
      if (!formData[fieldName]) {
        errors[fieldName] = "Please answer this question";
      }
    });

    if (!formData.consent) {
      errors.consent = "You must agree to the terms to continue";
    }

    return errors;
  };

  // ========== STEPPER NAVIGATION HANDLERS ==========

  // Desktop: Continue from personal info to first question chunk
  const handleDesktopContinue = async () => {
    const personalErrors =
    validatePersonalInfo(desktopFormData);

    const questionErrors =
    validateCurrentQuestionChunk(
        desktopFormData,
        currentDesktopQuestionChunk,
        0
    );

    const errors = {
    ...personalErrors,
    ...questionErrors,
    };

    setDesktopTouched((prev) => ({
      ...prev,
      fullName: true,
      phone: true,
      email: true,
    }));
    setDesktopErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Trigger early lead capture on Continue
      await triggerEarlyLeadIfEligible(desktopFormData);
      setDesktopStep(2);
    }
  };

  // Desktop: Next between question chunks
  const handleDesktopNext = () => {
    const globalStartIndex = (desktopStep - 2) * QUESTIONS_PER_STEP;
    const errors = validateCurrentQuestionChunk(
      desktopFormData,
      currentDesktopQuestionChunk,
      globalStartIndex
    );

    // Mark only the current chunk's fields as touched
    const touchedUpdate = {};
    currentDesktopQuestionChunk.forEach((_, idx) => {
      touchedUpdate[`q${globalStartIndex + idx + 1}`] = true;
    });

    setDesktopTouched((prev) => ({ ...prev, ...touchedUpdate }));
    setDesktopErrors(errors);

    if (Object.keys(errors).length === 0) {
      setDesktopStep((prev) => prev + 1);
    }
  };

  // Desktop: Previous — go back one step, clear errors
  const handleDesktopPrevious = () => {
    setDesktopErrors({});
    setDesktopStep((prev) => prev - 1);
  };

  // Mobile: Continue from personal info to first question chunk
  const handleMobileContinue = async () => {
    const personalErrors =
    validatePersonalInfo(mobileFormData);

    const questionErrors =
    validateCurrentQuestionChunk(
        mobileFormData,
        currentMobileQuestionChunk,
        0
    );

    const errors = {
    ...personalErrors,
    ...questionErrors,
    };

    setMobileTouched((prev) => ({
      ...prev,
      fullName: true,
      phone: true,
      email: true,
    }));
    setMobileErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Trigger early lead capture on Continue
      await triggerEarlyLeadIfEligible(mobileFormData);
      setMobileStep(2);
    }
  };

  // Mobile: Next between question chunks
  const handleMobileNext = () => {
    const globalStartIndex = (mobileStep - 2) * QUESTIONS_PER_STEP;
    const errors = validateCurrentQuestionChunk(
      mobileFormData,
      currentMobileQuestionChunk,
      globalStartIndex
    );

    // Mark only the current chunk's fields as touched
    const touchedUpdate = {};
    currentMobileQuestionChunk.forEach((_, idx) => {
      touchedUpdate[`q${globalStartIndex + idx + 1}`] = true;
    });

    setMobileTouched((prev) => ({ ...prev, ...touchedUpdate }));
    setMobileErrors(errors);

    if (Object.keys(errors).length === 0) {
      setMobileStep((prev) => prev + 1);
    }
  };

  // Mobile: Previous — go back one step, clear errors
  const handleMobilePrevious = () => {
    setMobileErrors({});
    setMobileStep((prev) => prev - 1);
  };

  // ========== FORM SUBMISSION HANDLERS ==========

  const handleDesktopSubmit = async (e) => {
    e.preventDefault();

    // Dynamically build all-touched state for all question fields
    const allTouched = {
      fullName: true,
      phone: true,
      email: true,
      consent: true,
    };
    questions.forEach((_, idx) => {
      allTouched[`q${idx + 1}`] = true;
    });
    setDesktopTouched(allTouched);

    // Use validateFullForm on final submit
    const newErrors = validateFullForm(desktopFormData);
    setDesktopErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const trustedFormData = await getTrustedFormData();

      // Build dynamic question labels for payload
      const dynamicQuestionLabels = {};
      questions.forEach((questionText, idx) => {
        dynamicQuestionLabels[`question${idx + 1}`] = questionText;
      });

      const payload = {
        ...desktopFormData,
        ...trustedFormData,
        ...dynamicQuestionLabels,
        gclid: adTrackingRef.current.gclid,
        gbraid: adTrackingRef.current.gbraid,
        wbraid: adTrackingRef.current.wbraid,
      };

      try {
        const currentLeadId = await ensureLeadForForm(desktopFormData);
        if (!currentLeadId) return;

        await submitFinalLead({ currentLeadId, payload });
        await sendToRetellCRM({ payload });

        Promise.all([
          DynamicLanderSendAdminEmail({ formData: payload }),
          DynamicLanderSendUserEmail({ formData: payload }),
        ]).catch((err) => {
          console.error("Email sending failed:", err);
        });

        setShowThankYou(true);

        const userData = buildAdvancedMatching({
          email: payload.email,
          phoneNumber: payload.phone,
        });
        trackEventWithUserData('CompleteRegistration', userData);

        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-32222222/dccxcvfDummy', //change later
            value: 1.0,
            currency: 'USD',
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    // Dynamically build all-touched state for all question fields
    const allTouched = {
      fullName: true,
      phone: true,
      email: true,
      consent: true,
    };
    questions.forEach((_, idx) => {
      allTouched[`q${idx + 1}`] = true;
    });
    setMobileTouched(allTouched);

    // Use validateFullForm on final submit
    const newErrors = validateFullForm(mobileFormData);
    setMobileErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const trustedFormData = await getTrustedFormData();

      // Build dynamic question labels for payload
      const dynamicQuestionLabels = {};
      questions.forEach((questionText, idx) => {
        dynamicQuestionLabels[`question${idx + 1}`] = questionText;
      });

      const payload = {
        ...mobileFormData,
        ...trustedFormData,
        ...dynamicQuestionLabels,
        gclid: adTrackingRef.current.gclid,
        gbraid: adTrackingRef.current.gbraid,
        wbraid: adTrackingRef.current.wbraid,
      };

      try {
        const currentLeadId = await ensureLeadForForm(mobileFormData);
        if (!currentLeadId) return;

        await submitFinalLead({ currentLeadId, payload });
        await sendToRetellCRM({ payload });

        Promise.all([
          DynamicLanderSendAdminEmail({ formData: payload }),
          DynamicLanderSendUserEmail({ formData: payload }),
        ]).catch((err) => {
          console.error("Email sending failed:", err);
        });

        setShowThankYou(true);

        const userData = buildAdvancedMatching({
          email: payload.email,
          phoneNumber: payload.phone,
        });
        trackEventWithUserData('CompleteRegistration', userData);

        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-322222/IzbXCNfAz_IbEJTf2eRCdummy', //change later
            value: 1.0,
            currency: 'USD',
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // ========== USEEFFECTS FOR TRACKING ==========

  useEffect(() => {
    ensureMetaPixel(META_PIXEL_ID);
    if (window.fbq) window.fbq("track", "PageView");
  }, []);

  useEffect(() => {
    if (showThankYou && window.fbq) {
      window.fbq('track', 'ThankYou');
    }
  }, [showThankYou]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    adTrackingRef.current = {
      gclid: params.get('gclid'),
      gbraid: params.get('gbraid'),
      wbraid: params.get('wbraid'),
    };
  }, []);

  useEffect(() => {
    if (document.getElementById('gtag-depo')) return;

    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-3222222'; //change later
    gtagScript.id = 'gtag-depo';

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-32222222');
    `;

    document.head.appendChild(gtagScript);
    document.head.appendChild(inlineScript);
  }, []);

  if (showThankYou) {
    return (
      <>
        <div className="hidden lg:block">
          <ThankYouPage />
        </div>
        <MobileThankYou />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:block">

        {/* ===== HEADER ===== */}
        <header className="w-full bg-white border-b border-gray-200">
          <div className="mx-auto px-20 py-3 flex items-center justify-between">
            <img
              src={logo}
              alt="Connect to Attorney"
              className="w-[215.833px] h-[25px] object-contain"
            />

            <a
              href="tel:18882021350"
              className="
                group
                flex items-center gap-3
                bg-[#162766]
                text-white
                px-3 py-2
                rounded-full
                font-semibold
                shadow-sm
                hover:bg-[#E5C414]
                hover:text-[#162766]
                transition-colors
              "
            >
              <span
                className="
                  flex items-center justify-center
                  w-6 h-6
                  bg-[#F8D216]
                  rounded-full
                  transition-colors duration-200
                  group-hover:bg-[#162766]
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V20A2 2 0 0 1 19.82 22
                    A19.86 19.86 0 0 1 2 4.18
                    A2 2 0 0 1 4 2H7.09
                    A2 2 0 0 1 9.09 3.72
                    C9.27 4.88 9.6 6.01 10.07 7.08
                    A2 2 0 0 1 9.62 9.21L8.21 10.62
                    A16 16 0 0 0 13.38 15.79L14.79 14.38
                    A2 2 0 0 1 16.92 13.93
                    C17.99 14.4 19.12 14.73 20.28 14.91
                    A2 2 0 0 1 22 16.92Z"
                    className="
                      fill-[#162766]
                      transition-colors duration-200
                      group-hover:fill-[#F8D216]
                    "
                  />
                </svg>
              </span>

              <span className="text-[14px] tracking-wide">
                (866) 376 0014
              </span>
            </a>
          </div>
        </header>

        {/* ===== HERO SECTION ===== */}
        <section
          className="w-full bg-[#0F2357] overflow-hidden min-h-[62vh]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
          }}
        >
          <div
            className="
              max-w-[1400px]
              mx-auto
              px-10
              grid
              grid-cols-[auto_auto]
              justify-center
              gap-40
              origin-top
            "
          >
            {/* ===== LEFT CONTENT ===== */}
            <div className="pt-0 mt-20 text-white flex justify-center">
              <div className="max-w-[720px]">
                <h1 className="text-[32px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[46px] leading-snug font-semibold mb-4">
                  {templateData?.hero_heading}{" "}
                  <span className="bg-[#162766] text-[#F8D216] px-3 py-[3px] rounded-md inline-block">
                    You May Qualify
                  </span>
                </h1>

                <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-relaxed tracking-wide text-white mb-4">
                  {templateData?.hero_paragraph}
                </p>

                <ul className="mt-6 space-y-4 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-white">
                  {templateData?.hero_bullets?.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#F8D216] text-[14px] leading-none">➜</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ===== RIGHT FORM ===== */}
            <div className="pt-10 pb-4 flex justify-center">
              <div className="bg-white text-[#162766] rounded-xl shadow-xl overflow-hidden w-full max-w-[720px]">
                <div className="w-full h-[4px] bg-[#F8D216]" />

                <div className="px-6 py-6">
                  <h2 className="font-lato text-[30px] font-extrabold leading-[27.5px] text-center text-[#162766] mb-4">
                    Get Your Free Case Review Today
                  </h2>

                  <form onSubmit={handleDesktopSubmit} className="space-y-4">
                    <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
                    <input type="hidden" id="xxTrustedFormCertToken" name="xxTrustedFormCertToken" />
                    <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" />

                    {/* ===================================================
                        DESKTOP STEP 1 — PERSONAL INFO
                        Visible when: not a stepper OR step === 1
                    =================================================== */}
                    {(!isStepperForm || desktopStep === 1) && (
                      <>
                        <div className="flex flex-col gap-1">
                          <label className="font-lato text-[#191B37] font-normal text-[15.8px] leading-[28px]">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={desktopFormData.fullName}
                            onChange={async (e) => {
                              const nextFormData = {
                                ...desktopFormData,
                                fullName: e.target.value,
                              };
                              setDesktopFormData(nextFormData);
                              const currentLeadId = await triggerEarlyLeadIfEligible(nextFormData);
                              if (currentLeadId) {
                                await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                              }
                            }}
                            className={`w-full border rounded-md px-3 py-2 text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] ${
                              desktopTouched.fullName && desktopErrors.fullName
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#D7DBEA]"
                            }`}
                          />
                          {desktopTouched.fullName && desktopErrors.fullName && (
                            <span className="text-[11px] text-red-500">{desktopErrors.fullName}</span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex flex-col gap-1">
                            <label className="font-lato text-[#191B37] font-normal text-[15.8px] leading-[28px]">
                              Phone Number
                            </label>

                            <div
                              className={`
                                flex items-center border rounded-md px-3 py-2 transition
                                ${
                                  desktopTouched.phone && desktopErrors.phone
                                    ? "border-red-500 focus-within:border-red-500"
                                    : "border-[#D7DBEA] focus-within:border-[#162766]"
                                }
                              `}
                            >
                              <span className="flex items-center gap-1 text-[13px] font-medium text-[#162766] pr-2 border-r border-[#E5E7EB] mr-2">
                                +1
                              </span>

                              <input
                                type="text"
                                placeholder="(555) 123-4567"
                                value={desktopFormData.phone.replace("+1 ", "")}
                                inputMode="numeric"
                                autoComplete="tel"
                                onChange={async (e) => {
                                  const rawDigits = e.target.value.replace(/\D/g, "");
                                  const formatted = formatPhoneInput(rawDigits);
                                  const nextFormData = {
                                    ...desktopFormData,
                                    phone: formatted,
                                  };
                                  setDesktopFormData(nextFormData);
                                  const currentLeadId = await triggerEarlyLeadIfEligible(nextFormData);
                                  if (currentLeadId) {
                                    await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                                  }
                                }}
                                maxLength={14}
                                className="w-full outline-none text-[13px] placeholder:text-gray-400 bg-transparent"
                              />
                            </div>

                            {desktopTouched.phone && desktopErrors.phone && (
                              <span className="text-[11px] text-red-500">{desktopErrors.phone}</span>
                            )}
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="font-lato text-[#191B37] font-normal text-[15.8px] leading-[28px]">
                              Email
                            </label>
                            <input
                              type="email"
                              placeholder="e.g. john.smith@mail.com"
                              value={desktopFormData.email}
                              onChange={async (e) => {
                                const nextFormData = {
                                  ...desktopFormData,
                                  email: e.target.value,
                                };
                                setDesktopFormData(nextFormData);
                                const currentLeadId =
                                  (await triggerEarlyLeadIfEligible(nextFormData)) || leadId;
                                if (currentLeadId) {
                                  await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                                }
                              }}
                              className={`w-full border rounded-md px-3 py-2 text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] ${
                                desktopTouched.email && desktopErrors.email
                                  ? "border-red-500 focus:border-red-500"
                                  : "border-[#D7DBEA]"
                              }`}
                            />
                            {desktopTouched.email && desktopErrors.email && (
                              <span className="text-[11px] text-red-500">{desktopErrors.email}</span>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {/* ===================================================
                        DESKTOP QUESTION STEPS
                        Visible when: not a stepper (show all) OR step >= 2 (show current chunk)
                    =================================================== */}
                    {(
                      <>
                        {(isStepperForm
                          ? currentDesktopQuestionChunk
                          : questions
                        )?.map((question, idx) => {
                          // Global index ensures q4, q5... never collide with q1, q2, q3 from previous chunks
                          const globalQuestionIndex = isStepperForm
                            ? ((desktopStep - 1) * QUESTIONS_PER_STEP) + idx
                            : idx;

                          const fieldName = `q${globalQuestionIndex + 1}`;

                          return (
                            <div key={fieldName} className="space-y-1">
                              <p className="font-lato text-[#191B37] text-[15.8px] font-normal leading-[28px]">
                                <span className="font-bold">Q{globalQuestionIndex + 1}.</span>{" "}
                                {question}
                              </p>

                              <div className="grid grid-cols-2 gap-3">
                                {["Yes", "No"].map((opt) => (
                                  <label
                                    key={opt}
                                    className="
                                      flex items-center gap-2
                                      px-3 py-3
                                      rounded-md
                                      border border-[#D7DBEA]
                                      cursor-pointer
                                      has-[:checked]:bg-[#E1E4F0]
                                    "
                                  >
                                    <input
                                      type="radio"
                                      name={fieldName}
                                      value={opt}
                                      checked={desktopFormData[fieldName] === opt}
                                      onChange={(e) => {
                                        setDesktopFormData({
                                          ...desktopFormData,
                                          [fieldName]: e.target.value,
                                        });
                                      }}
                                      className="peer hidden"
                                    />

                                    <span
                                      className="
                                        w-4 h-4
                                        rounded-full
                                        border border-[#162766]
                                        flex items-center justify-center
                                        peer-checked:border-[#162766]
                                        peer-checked:bg-[#162766]
                                        [&>svg]:hidden
                                        peer-checked:[&>svg]:block
                                      "
                                    >
                                      <svg
                                        width="8"
                                        height="6"
                                        viewBox="0 0 9 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M8.07764 0.551758C8.14631 0.48331 8.25808 0.483174 8.32666 0.551758C8.39519 0.620347 8.39509 0.732131 8.32666 0.800781L3.44775 5.67773C3.37274 5.75272 3.27061 5.79492 3.16455 5.79492C3.05859 5.79491 2.95731 5.7526 2.88232 5.67773L0.550293 3.3457C0.482781 3.27815 0.483011 3.16828 0.550293 3.10059C0.617975 3.0329 0.72774 3.0329 0.79541 3.10059L2.80811 5.11426L3.16162 5.46777L8.07764 0.551758Z"
                                          fill="#F8D216"
                                          stroke="#F8D216"
                                          strokeWidth="0.5"
                                        />
                                      </svg>
                                    </span>

                                    <span className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-medium">
                                      {opt}
                                    </span>
                                  </label>
                                ))}
                              </div>

                              {desktopTouched[fieldName] && desktopErrors[fieldName] && (
                                <span className="text-[11px] text-red-500">
                                  {desktopErrors[fieldName]}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </>
                    )}

                    {/* ===================================================
                        DESKTOP CONSENT
                        Visible when: not a stepper OR on the last question step
                    =================================================== */}
                    {(!isStepperForm || isLastDesktopQuestionStep) && (
                      <div>
                        <label className="flex items-start gap-2 font-lato text-[11px] leading-[15px] text-[#4E5069] font-normal">
                          <input
                            type="checkbox"
                            checked={desktopFormData.consent}
                            onChange={(e) => {
                              setDesktopFormData({ ...desktopFormData, consent: e.target.checked });
                            }}
                            className="mt-[2px] accent-[#162766]"
                          />
                          <span>
                            I agree to the{" "}
                            <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="/Disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                              Disclaimer
                            </a>{" "}
                            and give my express written
                            and give my express written
                            consent, affiliates and/or lawyer to contact you at the number provided
                            above, even if this number is a wireless number or if I am presently
                            listed on a Do Not Call list. I understand that I may be contacted by
                            telephone, email, text message, ai call from ai agents or mail regarding case options and that I
                            may be called using automatic dialing equipment. Message and data rates
                            may apply. My consent does not require purchase. This is Legal
                            advertising.
                          </span>
                        </label>
                        {desktopTouched.consent && desktopErrors.consent && (
                          <span className="text-[11px] text-red-500 block mt-1">
                            {desktopErrors.consent}
                          </span>
                        )}
                      </div>
                    )}

                    {/* ===================================================
                        DESKTOP STEPPER NAVIGATION BUTTONS
                        Only rendered in stepper mode (isStepperForm === true)
                    =================================================== */}

                    {/* CONTINUE — Step 1 only */}
                    {isStepperForm && desktopStep === 1 && (
                      <button
                        type="button"
                        onClick={handleDesktopContinue}
                        className="
                          w-full
                          flex items-center justify-center
                          h-[56.5px]
                          bg-[#162766]
                          hover:bg-[#0F1D4D]
                          transition-colors
                          rounded-lg
                          text-white
                          text-[18px]
                          font-bold
                          tracking-[2px]
                          uppercase
                        "
                      >
                        Continue
                      </button>
                    )}

                    {/* PREVIOUS + NEXT ROW — Question steps only */}
                    {isStepperForm && desktopStep > 1 && (
                      <div className="flex gap-3">
                        {/* PREVIOUS */}
                        <button
                          type="button"
                          onClick={handleDesktopPrevious}
                          className="
                            flex-1
                            flex items-center justify-center
                            h-[56.5px]
                            border-2 border-[#162766]
                            text-[#162766]
                            bg-white
                            hover:bg-[#162766]
                            hover:text-white
                            transition-colors
                            rounded-lg
                            text-[16px]
                            font-bold
                            tracking-[2px]
                            uppercase
                          "
                        >
                          Previous
                        </button>

                        {/* NEXT — Only on non-last question steps */}
                        {!isLastDesktopQuestionStep && (
                          <button
                            type="button"
                            onClick={handleDesktopNext}
                            className="
                              flex-1
                              flex items-center justify-center
                              h-[56.5px]
                              bg-[#162766]
                              hover:bg-[#0F1D4D]
                              transition-colors
                              rounded-lg
                              text-white
                              text-[18px]
                              font-bold
                              tracking-[2px]
                              uppercase
                            "
                          >
                            Next
                          </button>
                        )}
                      </div>
                    )}

                    {/* ===================================================
                        DESKTOP SUBMIT BUTTON
                        Visible when: not a stepper OR on the last question step
                    =================================================== */}
                    {(!isStepperForm || isLastDesktopQuestionStep) && (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex flex-col justify-center items-center h-[56.5px] px-[38.25px] pt-[19.25px] pb-[20.25px] bg-[#F8D216] hover:bg-[#E5C414] transition-colors font-['Segoe_UI'] text-[18px] font-bold leading-[16px] tracking-[2.25px] uppercase text-[#162766] rounded-lg ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-[#162766] border-t-transparent rounded-full animate-spin"></div>
                            <span>SUBMITTING...</span>
                          </>
                        ) : (
                          'REVIEW MY CASE'
                        )}
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== UNDERSTANDING SECTION ===== */}
        <section className="w-full bg-white py-20">
          <div className="max-w-[1400px] mx-auto px-10 font-jakarta text-[#162766]">

            {/* ===== SECTION 1 ===== */}
            <h2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-semibold mb-3">
              {templateData?.section1_heading}
            </h2>

            <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

            <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-relaxed text-[#5A627A] mb-5 max-w-[820px]">
              {templateData?.section1_paragraph}
            </p>

            <ul className="space-y-4 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] font-semibold text-[#162766] mb-12">
              {templateData?.section1_bullets?.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#162766]" />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* ===== SECTION 2 ===== */}
            <h3 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-semibold mb-3">
              {templateData?.section2_heading}
            </h3>

            <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

            <div className="space-y-6 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-relaxed text-[#5A627A] max-w-[820px] mb-12">
              {templateData?.section2_paragraphs?.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* ===== SECTION 3 ===== */}
            <h3 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-semibold mb-3">
              {templateData?.section3_heading}
            </h3>

            <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

            <ul className="space-y-5 font-semibold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[#162766]">
              {templateData?.section3_bullets?.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#162766]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <section className="w-full bg-[#162B6F] py-10">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="font-lato text-white text-center text-[41px] font-bold leading-[48px]">
              {templateData?.footer_cta_heading}
            </h2>

            <div className="w-[44px] h-[3px] bg-[#F4C430] mt-4 mb-6" />

            <p className="font-lato text-white text-center text-[41px] font-normal leading-[48px] mb-8">
              Contact our legal partners today.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-7 mx-auto flex items-center justify-center w-[350px] h-[56.5px] px-[38.25px] pt-[19.25px] pb-[20.25px] bg-[#F8D216] hover:bg-[#E5C414] transition-colors rounded-[10px] font-['Segoe_UI'] text-[18px] font-bold leading-[16px] tracking-[2.25px] uppercase text-[#162766]"
            >
              GET HELP NOW
            </button>
          </div>
        </section>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div
        className="lg:hidden w-full"
        style={{
          backgroundImage: `url(${mobileHeroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        {/* ===== MOBILE HEADER ===== */}
        <div className="flex items-center justify-between px-4 py-3 bg-white">
          <img
            src={logo}
            alt="Connect to Attorney"
            className="w-[215.833px] h-[25px] object-contain"
          />
          {/*
          
            href="tel:18882021350"
            className="
              flex items-center gap-2
              bg-[#162766]
              text-white
              px-4 py-2
              rounded-full
              font-semibold
              text-[13px]
            "
          >
            <span className="w-7 h-7 bg-[#F8D216] rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 16.92V20A2 2 0 0 1 19.82 22
                  A19.86 19.86 0 0 1 2 4.18
                  A2 2 0 0 1 4 2H7.09
                  A2 2 0 0 1 9.09 3.72
                  C9.27 4.88 9.6 6.01 10.07 7.08
                  A2 2 0 0 1 9.62 9.21L8.21 10.62
                  A16 16 0 0 0 13.38 15.79L14.79 14.38
                  A2 2 0 0 1 16.92 13.93
                  C17.99 14.4 19.12 14.73 20.28 14.91
                  A2 2 0 0 1 22 16.92Z"
                  fill="#162766"
                />
              </svg>
            </span>
            Call Now
          </a>
          */}
        </div>

        {/* ===== MOBILE HERO TEXT ===== */}
        <div className="px-4 pt-12 pb-16 text-white">
          <h1 className="text-[24px] leading-[40px] font-semibold mb-4 md:text-[32px] md:leading-[44px]">
            {templateData?.hero_heading}
            {"  "}{"  "}
            <span className="bg-[#162766] text-[#F8D216] ml-1 px-2 py-2 leading-none rounded-md inline-block">
              You May Qualify
            </span>
          </h1>
        </div>
      </div>

      {/* ===== MOBILE FORM ===== */}
      <div className="lg:hidden bg-white px-4 pt-[-20px] pb-10">
        <div className="bg-white rounded-[16px] overflow-hidden px-4 pt-3 pb-6">

          <h2 className="font-lato text-[#162766] text-center text-[22px] font-extrabold leading-[32px] mb-4">
            Get Your Free Case Review Today
          </h2>

          <form onSubmit={handleMobileSubmit} className="space-y-4">
            <input type="hidden" id="xxTrustedFormCertUrl_mobile" name="xxTrustedFormCertUrl" />
            <input type="hidden" id="xxTrustedFormCertToken_mobile" name="xxTrustedFormCertToken" />
            <input type="hidden" id="xxTrustedFormPingUrl_mobile" name="xxTrustedFormPingUrl" />

            {/* ===================================================
                MOBILE STEP 1 — PERSONAL INFO
                Visible when: not a stepper OR step === 1
            =================================================== */}
            {(!isStepperForm || mobileStep === 1) && (
              <>
                <div>
                  <label className="font-lato text-[#191B37] text-[15.8px] font-normal leading-[28px]">
                    Full name
                  </label>
                  <input
                    value={mobileFormData.fullName}
                    onChange={async (e) => {
                      const nextFormData = {
                        ...mobileFormData,
                        fullName: e.target.value,
                      };
                      setMobileFormData(nextFormData);
                      const currentLeadId = await triggerEarlyLeadIfEligible(nextFormData);
                      if (currentLeadId) {
                        await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                      }
                    }}
                    className={`mt-1 w-full border rounded-md px-3 py-2 text-[14px] ${
                      mobileTouched.fullName && mobileErrors.fullName
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#D7DBEA]"
                    }`}
                    placeholder="John Smith"
                  />
                  {mobileTouched.fullName && mobileErrors.fullName && (
                    <span className="text-[11px] text-red-500">{mobileErrors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="font-lato text-[#191B37] text-[15.8px] font-normal leading-[28px]">
                    Phone Number
                  </label>
                  <div className="mt-1 flex items-center border rounded-md px-3 py-2 border-[#D7DBEA] focus-within:border-[#162766] focus-within:ring-2 focus-within:ring-[#162766]/20">
                    <span className="flex items-center text-[14px] font-semibold text-[#162766] pr-2 border-r border-[#E5E7EB] mr-2">
                      +1
                    </span>

                    <input
                      type="text"
                      placeholder="(555) 123-4567"
                      value={mobileFormData.phone.replace("+1 ", "")}
                      inputMode="numeric"
                      autoComplete="tel"
                      onChange={async (e) => {
                        const rawDigits = e.target.value.replace(/\D/g, "");
                        const formatted = formatPhoneInput(rawDigits);
                        const nextFormData = {
                          ...mobileFormData,
                          phone: formatted,
                        };
                        setMobileFormData(nextFormData);
                        const currentLeadId = await triggerEarlyLeadIfEligible(nextFormData);
                        if (currentLeadId) {
                          await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                        }
                      }}
                      maxLength={14}
                      className="w-full outline-none text-[14px] placeholder:text-gray-400/80 bg-transparent"
                    />
                  </div>
                  {mobileTouched.phone && mobileErrors.phone && (
                    <span className="text-[11px] text-red-500">{mobileErrors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="font-lato text-[#191B37] text-[15.8px] font-normal leading-[28px]">
                    Email
                  </label>
                  <input
                    type="email"
                    value={mobileFormData.email}
                    onChange={async (e) => {
                      const nextFormData = {
                        ...mobileFormData,
                        email: e.target.value,
                      };
                      setMobileFormData(nextFormData);
                      const currentLeadId =
                        (await triggerEarlyLeadIfEligible(nextFormData)) || leadId;
                      if (currentLeadId) {
                        await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                      }
                    }}
                    className={`mt-1 w-full border rounded-md px-3 py-2 text-[14px] ${
                      mobileTouched.email && mobileErrors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#D7DBEA]"
                    }`}
                    placeholder="e.g. john.smith@mail.com"
                  />
                  {mobileTouched.email && mobileErrors.email && (
                    <span className="text-[11px] text-red-500">{mobileErrors.email}</span>
                  )}
                </div>
              </>
            )}

            {/* ===================================================
                MOBILE QUESTION STEPS
                Visible when: not a stepper (show all) OR step >= 2 (show current chunk)
            =================================================== */}
            {(
              <>
                {(isStepperForm
                  ? currentMobileQuestionChunk
                  : questions
                )?.map((question, idx) => {
                  // Global index ensures q4, q5... never collide with q1, q2, q3 from previous chunks
                  const globalQuestionIndex = isStepperForm
                    ? ((mobileStep - 1) * QUESTIONS_PER_STEP) + idx
                    : idx;

                  const fieldName = `q${globalQuestionIndex + 1}`;

                  return (
                    <div key={fieldName}>
                      <p className="font-lato text-[#191B37] text-[15.8px] font-normal leading-[28px] mb-2">
                        <span className="font-bold">Q{globalQuestionIndex + 1}.</span>{" "}
                        {question}
                      </p>

                      <div className="flex gap-3">
                        {["Yes", "No"].map((opt) => (
                          <label
                            key={opt}
                            className="flex-1 flex items-center gap-2 px-3 py-2 border rounded-md border-[#D7DBEA] cursor-pointer has-[:checked]:bg-[#E1E4F0]"
                          >
                            <input
                              type="radio"
                              name={`mobile-${fieldName}`}
                              value={opt}
                              checked={mobileFormData[fieldName] === opt}
                              onChange={(e) => {
                                setMobileFormData({
                                  ...mobileFormData,
                                  [fieldName]: e.target.value,
                                });
                              }}
                              className="peer hidden"
                            />

                            <span
                              className="
                                w-4 h-4
                                rounded-full
                                border border-[#162766]
                                flex items-center justify-center
                                peer-checked:border-[#162766]
                                peer-checked:bg-[#162766]
                                [&>svg]:hidden
                                peer-checked:[&>svg]:block
                              "
                            >
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 9 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.07764 0.551758C8.14631 0.48331 8.25808 0.483174 8.32666 0.551758C8.39519 0.620347 8.39509 0.732131 8.32666 0.800781L3.44775 5.67773C3.37274 5.75272 3.27061 5.79492 3.16455 5.79492C3.05859 5.79491 2.95731 5.7526 2.88232 5.67773L0.550293 3.3457C0.482781 3.27815 0.483011 3.16828 0.550293 3.10059C0.617975 3.0329 0.72774 3.0329 0.79541 3.10059L2.80811 5.11426L3.16162 5.46777L8.07764 0.551758Z"
                                  fill="#F8D216"
                                  stroke="#F8D216"
                                  strokeWidth="0.5"
                                />
                              </svg>
                            </span>

                            <span className="text-[13px]">{opt}</span>
                          </label>
                        ))}
                      </div>

                      {mobileTouched[fieldName] && mobileErrors[fieldName] && (
                        <span className="text-[11px] text-red-500">
                          {mobileErrors[fieldName]}
                        </span>
                      )}
                    </div>
                  );
                })}
              </>
            )}

            {/* ===================================================
                MOBILE CONSENT
                Visible when: not a stepper OR on the last question step
            =================================================== */}
            {(!isStepperForm || isLastMobileQuestionStep) && (
              <div>
                <label className="flex items-start gap-2 font-lato text-[#4E5069] text-[11px] font-normal leading-[15px]">
                  <input
                    type="checkbox"
                    checked={mobileFormData.consent}
                    onChange={(e) => {
                      setMobileFormData({ ...mobileFormData, consent: e.target.checked });
                    }}
                    className="mt-0.5 accent-[#162766]"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/Disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                      Disclaimer
                    </a>{" "}
                    and give my express written
                    consent, affiliates and/or lawyer to contact you at the number provided above,
                    even if this number is a wireless number or if I am presently listed on a Do Not
                    Call list. I understand that I may be contacted by telephone, email, text message,
                    ai call from ai agents or mail regarding case options and that I may be called using automatic dialing
                    equipment. Message and data rates may apply. My consent does not require purchase.
                    This is Legal advertising rates may apply. My consent does not require purchase.
                    This is Legal advertising
                  </span>
                </label>
                {mobileTouched.consent && mobileErrors.consent && (
                  <span className="text-[11px] text-red-500 block mt-1">
                    {mobileErrors.consent}
                  </span>
                )}
              </div>
            )}

            {/* ===================================================
                MOBILE STEPPER NAVIGATION BUTTONS
                Only rendered in stepper mode (isStepperForm === true)
            =================================================== */}

            {/* CONTINUE — Step 1 only */}
            {isStepperForm && mobileStep === 1 && (
              <button
                type="button"
                onClick={handleMobileContinue}
                className="
                  w-full
                  flex items-center justify-center
                  h-[56.5px]
                  bg-[#162766]
                  hover:bg-[#0F1D4D]
                  transition-colors
                  rounded-lg
                  text-white
                  text-[18px]
                  font-bold
                  tracking-[2px]
                  uppercase
                "
              >
                Continue
              </button>
            )}

            {/* PREVIOUS + NEXT ROW — Question steps only */}
            {isStepperForm && mobileStep > 1 && (
              <div className="flex gap-3">
                {/* PREVIOUS */}
                <button
                  type="button"
                  onClick={handleMobilePrevious}
                  className="
                    flex-1
                    flex items-center justify-center
                    h-[56.5px]
                    border-2 border-[#162766]
                    text-[#162766]
                    bg-white
                    hover:bg-[#162766]
                    hover:text-white
                    transition-colors
                    rounded-lg
                    text-[16px]
                    font-bold
                    tracking-[2px]
                    uppercase
                  "
                >
                  Previous
                </button>

                {/* NEXT — Only on non-last question steps */}
                {!isLastMobileQuestionStep && (
                  <button
                    type="button"
                    onClick={handleMobileNext}
                    className="
                      flex-1
                      flex items-center justify-center
                      h-[56.5px]
                      bg-[#162766]
                      hover:bg-[#0F1D4D]
                      transition-colors
                      rounded-lg
                      text-white
                      text-[18px]
                      font-bold
                      tracking-[2px]
                      uppercase
                    "
                  >
                    Next
                  </button>
                )}
              </div>
            )}

            {/* ===================================================
                MOBILE SUBMIT BUTTON
                Visible when: not a stepper OR on the last question step
            =================================================== */}
            {(!isStepperForm || isLastMobileQuestionStep) && (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 h-[56.5px] px-[38.25px] bg-[#F8D216] hover:bg-[#E5C414] transition-colors rounded-[10px] font-['Segoe_UI'] text-[18px] font-bold leading-[16px] tracking-[2.25px] uppercase text-[#162766] ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#162766] border-t-transparent rounded-full animate-spin"></div>
                    <span>SUBMITTING...</span>
                  </>
                ) : (
                  'REVIEW MY CASE'
                )}
              </button>
            )}
          </form>
        </div>
      </div>

      {/* ================= MOBILE UNDERSTANDING SECTION ================= */}
      <div className="lg:hidden w-full bg-[#162766]">
        <div className="max-w-[720px] px-4 py-10 text-white font-jakarta">
          <p className="text-[16px] leading-[1.7] text-white/90 mb-6">
            {templateData?.hero_paragraph}
          </p>

          <ul className="space-y-7 font-normal text-[14px]">
            {templateData?.hero_bullets?.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#F8D216] text-[14px] leading-none">➜</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= MOBILE ELABORATION ================= */}
      <section className="lg:hidden w-full bg-white py-10">
        <div className="px-4 font-jakarta text-[#162766]">

          {/* ===== SECTION 1 ===== */}
          <h2 className="text-[24px] font-bold mb-2">
            {templateData?.section1_heading}
          </h2>

          <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

          <p className="text-[16px] leading-[1.7] text-[#5A627A] mb-4">
            {templateData?.section1_paragraph}
          </p>

          <ul className="space-y-5 font-semibold text-[16px] mb-8">
            {templateData?.section1_bullets?.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#162766]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* ===== SECTION 2 ===== */}
          <h3 className="text-[24px] font-bold mb-4 leading-snug">
            {templateData?.section2_heading}
          </h3>

          <div className="w-full h-px bg-[#E6E9F2] mb-3 font-jakarta" />

          <div className="space-y-4 text-[16px] leading-[1.7] text-[#5A627A] mt-4 mb-8">
            {templateData?.section2_paragraphs?.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* ===== SECTION 3 ===== */}
          <h3 className="text-[24px] font-bold mb-4 font-jakarta">
            {templateData?.section3_heading}
          </h3>

          <div className="w-full h-px bg-[#E6E9F2] mb-3 font-jakarta" />

          <ul className="space-y-3 font-semibold text-[16px]">
            {templateData?.section3_bullets?.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#162766]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= MOBILE FOOTER CTA ================= */}
      <section className="lg:hidden w-full bg-[#162B6F] py-10">
        <div className="px-5 text-center">
          <h2 className="text-[26px] leading-[30px] font-semibold text-white mb-3">
            {templateData?.footer_cta_heading}
          </h2>

          <div className="w-[32px] h-[2px] bg-[#F8D216] mx-auto mb-4" />

          <p className="font-lato text-white text-center text-[17.9px] font-normal leading-[32px] mb-7">
            Contact our legal partners today.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              w-full
              h-[46px]
              bg-[#F9D51C]
              text-[#0E1E4D]
              text-[16px]
              font-extrabold
              tracking-widest
              rounded-[8px]
            "
          >
            GET HELP NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default DynamicLander;
