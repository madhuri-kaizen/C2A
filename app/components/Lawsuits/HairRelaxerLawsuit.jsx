'use client'
import React, { useState, useEffect, useRef } from "react";

const logo  = "/logotitle.svg";
const buildingsBg = "/Form/buildingsbg.png";
const intakeIcon = "/Form/casereview.png";
const eligibilityIcon = "/Form/compensation.png";
const attorneyIcon = "/Form/legal.png";
const handshakeImage = "/Form/handshake.png";
const successIcon = "/Form/success.png";
const tyBuildings = "/Form/tybuildings.png";
const tyBuildingsMobile = "/Form/tybuildingsmobile.png";
const callIcon = "/Form/call.png";
import {
  HairRelaxerLawsuitSendAdminEmail,
  HairRelaxerLawsuitSendUserEmail,
} from "../emailService2";
import {
  buildAdvancedMatching,
  ensureMetaPixel,
  normalizeEmail,
  normalizePhone,
  isValidEmail,
  isValidPhoneDigits,
  trackEventWithUserData,
} from "../utils/metaPixel";
import { LEAD_GENERATION_VERTICALS } from "./constant";

/**
 * HairRelaxerLawsuit Component with Full Backend Integration
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

        <p className="text-[14px] leading-relaxed text-[#4B5563]  max-w-[720px]">
          Based on your answers, you may qualify for compensation, and you
          deserve to be heard and represented. Next, an intake specialist from
          our team will contact you for a brief call to explain the next steps
          and share key details about this litigation and how it may apply to
          your situation.
        </p>

        <div className="mt-8 text-[13px] text-[#162766] flex gap-3">
          <a
            href="/Disclaimer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 font-bold"
          >
            Disclaimer
          </a>
          <span>|</span>
          <a
            href="/PrivacyPolicy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 font-bold"
          >
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
    <div className=" lg:hidden relative w-full min-h-screen bg-white overflow-hidden">
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
          Based on your answers, you may qualify for compensation, and you
          deserve to be heard and represented. Next, an intake specialist from
          our team will contact you for a brief call to explain the next steps
          and share key details about this litigation and how it may apply to
          your situation.
        </p>

        <div className="mt-20 text-[13px] text-[#162766] flex justify-center gap-3">
          <a
            href="/Disclaimer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 font-bold"
          >
            Disclaimer
          </a>
          <span>|</span>
          <a
            href="/PrivacyPolicy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 font-bold"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <img
        src={tyBuildingsMobile}
        className="absolute bottom-0 left-0 w-full"
      />
    </div>
  );
};

const HairRelaxerLawsuit = () => {
  // Meta Pixel ID
  const META_PIXEL_ID = "910202878555266"; //last one : 1409965080153428

  // Refs for tracking
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
    q1: "",
    q2: "",
    q3: "",
    consent: false,
  });

  // Form state for mobile
  const [mobileFormData, setMobileFormData] = useState({
    fullName: "",
    phone: "+1 ",
    email: "",
    q1: "",
    q2: "",
    q3: "",
    consent: false,
  });

  // Error state
  const [desktopErrors, setDesktopErrors] = useState({});
  const [mobileErrors, setMobileErrors] = useState({});
  const [desktopTouched, setDesktopTouched] = useState({});
  const [mobileTouched, setMobileTouched] = useState({});

  // ========== BACKEND HELPER FUNCTIONS ==========

  const CRM_API_URL =
    "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

  const getSourceUrl = () => {
    if (typeof window === "undefined") return "Unknown";
  return window.location.href;
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

    // Remove leading 1 only if pasted country code
    if (digits.length === 11 && digits.startsWith("1")) {
      digits = digits.slice(1);
    }

    // Limit to 10 digits
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

    // Eastern
    if (
      tz.includes("New_York") ||
      tz.includes("Detroit") ||
      tz.includes("Indiana")
    )
      return "ET";

    // Central
    if (tz.includes("Chicago") || tz.includes("Menominee")) return "CT";

    // Mountain
    if (tz.includes("Denver") || tz.includes("Boise") || tz.includes("Phoenix"))
      return "MT";

    // Pacific
    if (tz.includes("Los_Angeles")) return "PT";

    // Alaska
    if (tz.includes("Anchorage") || tz.includes("Juneau")) return "AK";

    // Hawaii
    if (tz.includes("Honolulu")) return "HT";

    return "other";
  };

  const getTrustedFormData = () => {
    return new Promise((resolve) => {
      // Check both desktop and mobile forms
      const certUrl =
        document.getElementById("xxTrustedFormCertUrl")?.value ||
        document.getElementById("xxTrustedFormCertUrl_mobile")?.value;

      const tokenUrl =
        document.getElementById("xxTrustedFormCertToken")?.value ||
        document.getElementById("xxTrustedFormCertToken_mobile")?.value;

      const pingUrl =
        document.getElementById("xxTrustedFormPingUrl")?.value ||
        document.getElementById("xxTrustedFormPingUrl_mobile")?.value;

      if (!certUrl) {
        setTimeout(() => {
          const retryCertUrl =
            document.getElementById("xxTrustedFormCertUrl")?.value ||
            document.getElementById("xxTrustedFormCertUrl_mobile")?.value;
          const retryTokenUrl =
            document.getElementById("xxTrustedFormCertToken")?.value ||
            document.getElementById("xxTrustedFormCertToken_mobile")?.value;
          const retryPingUrl =
            document.getElementById("xxTrustedFormPingUrl")?.value ||
            document.getElementById("xxTrustedFormPingUrl_mobile")?.value;

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
        formPath: "/hair-relaxer-lawsuit-a",
        vertical: LEAD_GENERATION_VERTICALS.HAIR_RELAXER,
        formname: "Hair Relaxer Lawsuit Form A",
        isPartialSubmission: true,

        data: {
          name: cleanName,
          phone: `+1${phone}`,
          email,

          submissionDate: new Date().toISOString(),

          uniqueSessionId,
          pageSource: getSourceUrl(),

          // ✅ TRUSTED FORM
          trustedFormCertUrl: trustedFormData.certId,
          trustedFormPingUrl: trustedFormData.pingUrl,
          trustedFormToken: trustedFormData.tokenUrl,

          // ✅ IP
          ipAddress,

          // ✅ TRACKING
          gclid: adTrackingRef.current.gclid,
          gbraid: adTrackingRef.current.gbraid,
          wbraid: adTrackingRef.current.wbraid,

          // ✅ TIME
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
        formname: "Hair Relaxer Lawsuit Form A",
        isPartialSubmission: true,
        vertical: LEAD_GENERATION_VERTICALS.HAIR_RELAXER,
        data: {
          name: cleanName,
          phone: `+1${phone}`,
          email,

          submissionDate: new Date().toISOString(),

          uniqueSessionId,
          pageSource: getSourceUrl(),

          // ✅ TRUSTED FORM
          trustedFormCertUrl: trustedFormData.certId,
          trustedFormPingUrl: trustedFormData.pingUrl,
          trustedFormToken: trustedFormData.tokenUrl,

          // ✅ IP
          ipAddress,

          // ✅ TRACKING
          gclid: adTrackingRef.current.gclid,
          gbraid: adTrackingRef.current.gbraid,
          wbraid: adTrackingRef.current.wbraid,

          // ✅ TIME
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

  const syncEmailUpdateIfEligible = async (
    formData,
    currentLeadId = leadId,
  ) => {
    const phone = normalizePhoneDigits(formData.phone);
    const email = formData.email.trim();
    const fullName = formData.fullName.trim();

    if (!email || !validateEmail(email)) {
      return;
    }

    await updateLeadEmail({
      email,
      phone,
      fullName,
      currentLeadId,
    });
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

  const submitFinalLead = async ({ currentLeadId, payload }) => {
    const trustedFormData = await getTrustedFormData();
    const ipAddress = await getIPAddress();

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const res = await fetch(`${CRM_API_URL}/${currentLeadId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        countryName: "USA",
        brandType: "Internal",
        brandName: "Project 6",
        websiteName: "Connect to Attorney",
        formname: "Hair Relaxer Lawsuit Form A",
        finalSubmit: true,
        deleteFromWebsiteLogs: true,
        vertical: LEAD_GENERATION_VERTICALS.HAIR_RELAXER,
        data: {
          name: payload.fullName,

          firstName: payload.fullName.split(" ")[0] || "",
          lastName: payload.fullName.split(" ").slice(1).join(" ") || "",

          phone: payload.phone,
          email: payload.email,

          q1: payload.q1,
          q2: payload.q2,
          q3: payload.q3,

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

  // const saveToCRM = async ({ payload }) => {
  //   try {
  //     const ipAddress = await getIPAddress();
  //     const response = await fetch('https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         countryName: 'USA',
  //         brandType: "Internal",
  //         brandName: 'Project 6',
  //         websiteName: 'Connect to Attorney',
  //         vertical: 'Hair Relaxer Lawsuit',
  //         formPath: '/hair-relaxer-lawsuit-a',
  //         formname: 'Hair Relaxer Lawsuit Form',
  //         data: {
  //           submissionDate: new Date().toLocaleString(),
  //           name: payload.fullName,
  //           firstName: payload.fullName.split(' ')[0] || '',
  //           lastName: payload.fullName.split(' ').slice(1).join(' ') || '',
  //           email: payload.email,
  //           phone: payload.phone,
  //           q1: payload.q1,
  //           q2: payload.q2,
  //           q3: payload.q3,
  //           injuryType: "Brain Tumor / Meningioma",
  //           trustedFormCertUrl: payload.certId,
  //           trustedFormPingUrl: payload.pingUrl,
  //           trustedFormToken: payload.tokenUrl,
  //           ip_address: ipAddress,
  //           page_source: getSourceUrl(),
  //           gclid: payload.gclid,
  //           gbraid: payload.gbraid,
  //           wbraid: payload.wbraid,
  //         }
  //       })
  //     });
  //     return response.ok;
  //   } catch (e) {
  //     console.error('CRM submission error:', e);
  //     return false;
  //   }
  // };

  const sendToRetellCRM = async ({ payload }) => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const submittedAtUTC = new Date().toISOString();
      const usTimezone = getUSTimezone(timezone);
      const ipAddress = await getIPAddress();

      const retellPayload = {
        countryName: "USA",
        brandType: "Internal",
        brandName: "Project 6",
        websiteName: "Connect to Attorney",
        vertical: LEAD_GENERATION_VERTICALS.HAIR_RELAXER,
        formname: "Hair Relaxer Lawsuit Form A",
        formPath: "/hair-relaxer-lawsuit-a",
        data: {
          submissionDate: new Date().toLocaleString(),
          fullName: payload.fullName,
          firstName: payload.fullName.split(" ")[0] || "",
          lastName: payload.fullName.split(" ").slice(1).join(" ") || "",
          phone: payload.phone,
          email: payload.email,
          consentGiven: payload.consent,
          hasDiagnosis: payload.q1,
          hasUsedDepoProvera: payload.q2,
          hasAttorney: payload.q3,
          injuryType: "Brain Tumor / Meningioma",
          trustedFormCertUrl: payload.certId,
          trustedFormPingUrl: payload.pingUrl,
          trustedFormToken: payload.tokenUrl,
          ipAddress,
          pageUrl: getSourceUrl(),
          gclid: payload.gclid,
          gbraid: payload.gbraid,
          wbraid: payload.wbraid,
          timezone,
          usTimezone,
          submittedAtUTC,
        },
      };

      const res = await fetch(
        "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata/retell",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(retellPayload),
        },
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

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.q1) {
      newErrors.q1 = "Please answer this question";
    }

    if (!formData.q2) {
      newErrors.q2 = "Please answer this question";
    }

    if (!formData.q3) {
      newErrors.q3 = "Please answer this question";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms to continue";
    }

    return newErrors;
  };

  // ========== FORM SUBMISSION HANDLERS ==========

  // const handleDesktopSubmit = async (e) => {
  //   e.preventDefault();

  //   setDesktopTouched({
  //     fullName: true,
  //     phone: true,
  //     email: true,
  //     q1: true,
  //     q2: true,
  //     q3: true,
  //     consent: true,
  //   });

  //   const newErrors = validateForm(desktopFormData);
  //   setDesktopErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     setIsSubmitting(true);

  //     const trustedFormData = await getTrustedFormData();

  //     const payload = {
  //       ...desktopFormData,
  //       ...trustedFormData,
  //       gclid: adTrackingRef.current.gclid,
  //       gbraid: adTrackingRef.current.gbraid,
  //       wbraid: adTrackingRef.current.wbraid,
  //     };

  //     try {
  //       const sentToCrm = await saveToCRM({ payload });
  //       sendToRetellCRM({ payload });

  //       Promise.all([
  //         HairRelaxerLawsuitSendAdminEmail({ formData: payload }),
  //         HairRelaxerLawsuitSendUserEmail({ formData: payload })
  //       ]).catch(err => {
  //         console.error("Email sending failed:", err);
  //       });

  //       if (sentToCrm) {
  //         setShowThankYou(true);

  //         // Track Lead event with advanced matching
  //         const userData = buildAdvancedMatching({
  //           email: payload.email,
  //           phoneNumber: payload.phone
  //         });
  //         trackEventWithUserData('CompleteRegistration', userData);

  //         // Google Ads conversion tracking
  //         if (window.gtag) {
  //           window.gtag('event', 'conversion', {
  //             send_to: 'AW-17927925652/dummy', //change it later
  //             value: 1.0,
  //             currency: 'USD'
  //           });
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error submitting form:', error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };

  // const handleMobileSubmit = async (e) => {
  //   e.preventDefault();

  //   setMobileTouched({
  //     fullName: true,
  //     phone: true,
  //     email: true,
  //     q1: true,
  //     q2: true,
  //     q3: true,
  //     consent: true,
  //   });

  //   const newErrors = validateForm(mobileFormData);
  //   setMobileErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     setIsSubmitting(true);

  //     const trustedFormData = await getTrustedFormData();

  //     const payload = {
  //       ...mobileFormData,
  //       ...trustedFormData,
  //       gclid: adTrackingRef.current.gclid,
  //       gbraid: adTrackingRef.current.gbraid,
  //       wbraid: adTrackingRef.current.wbraid,
  //     };

  //     try {
  //       const sentToCrm = await saveToCRM({ payload });
  //       sendToRetellCRM({ payload });

  //       Promise.all([
  //         HairRelaxerLawsuitSendAdminEmail({ formData: payload }),
  //         HairRelaxerLawsuitSendUserEmail({ formData: payload })
  //       ]).catch(err => {
  //         console.error("Email sending failed:", err);
  //       });

  //       if (sentToCrm) {
  //         setShowThankYou(true);

  //         // Track Lead event with advanced matching
  //         const userData = buildAdvancedMatching({
  //           email: payload.email,
  //           phoneNumber: payload.phone
  //         });
  //         trackEventWithUserData('CompleteRegistration', userData);

  //         // Google Ads conversion tracking
  //         if (window.gtag) {
  //           window.gtag('event', 'conversion', {
  //             send_to: 'AW-17927925652/dummy', //change later
  //             value: 1.0,
  //             currency: 'USD'
  //           });
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error submitting form:', error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };

  //Form submission only retell active
  const handleDesktopSubmit = async (e) => {
    e.preventDefault();

    setDesktopTouched({
      fullName: true,
      phone: true,
      email: true,
      q1: true,
      q2: true,
      q3: true,
      consent: true,
    });

    const newErrors = validateForm(desktopFormData);
    setDesktopErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const trustedFormData = await getTrustedFormData();

      const payload = {
        ...desktopFormData,
        ...trustedFormData,
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
          HairRelaxerLawsuitSendAdminEmail({ formData: payload }),
          HairRelaxerLawsuitSendUserEmail({ formData: payload }),
        ]).catch((err) => {
          console.error("Email sending failed:", err);
        });

        setShowThankYou(true);

        // Track Lead event with advanced matching
        const userData = buildAdvancedMatching({
          email: payload.email,
          phoneNumber: payload.phone,
        });
        trackEventWithUserData("CompleteRegistration", userData);

        // Google Ads conversion tracking
        if (window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-17927925652/dummy", //change it later
            value: 1.0,
            currency: "USD",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    setMobileTouched({
      fullName: true,
      phone: true,
      email: true,
      q1: true,
      q2: true,
      q3: true,
      consent: true,
    });

    const newErrors = validateForm(mobileFormData);
    setMobileErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const trustedFormData = await getTrustedFormData();

      const payload = {
        ...mobileFormData,
        ...trustedFormData,
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
          HairRelaxerLawsuitSendAdminEmail({ formData: payload }),
          HairRelaxerLawsuitSendUserEmail({ formData: payload }),
        ]).catch((err) => {
          console.error("Email sending failed:", err);
        });

        setShowThankYou(true);

        // Track Lead event with advanced matching
        const userData = buildAdvancedMatching({
          email: payload.email,
          phoneNumber: payload.phone,
        });
        trackEventWithUserData("CompleteRegistration", userData);

        // Google Ads conversion tracking
        if (window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-17927925652/dummy", //change later
            value: 1.0,
            currency: "USD",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // ========== USEEFFECTS FOR TRACKING ==========

  // Initialize Meta Pixel
  useEffect(() => {
    ensureMetaPixel(META_PIXEL_ID);
    if (window.fbq) window.fbq("track", "PageView");
  }, []);

  useEffect(() => {
    if (showThankYou && window.fbq) {
      window.fbq("track", "ThankYou");
    }
  }, [showThankYou]);

  // Capture ad tracking parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    adTrackingRef.current = {
      gclid: params.get("gclid"),
      gbraid: params.get("gbraid"),
      wbraid: params.get("wbraid"),
    };
  }, []);

  //Microsoft clarity
  useEffect(() => {
    if (window.clarity) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.clarity.ms/tag/vmaqjd73tc"; // Depo Provera ID

    document.head.appendChild(script);

    window.clarity =
      window.clarity ||
      function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };
  }, []);

  // Initialize Google Tag Manager
  useEffect(() => {
    if (document.getElementById("gtag-depo")) return;

    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-17927925652"; //change later
    gtagScript.id = "gtag-depo";

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17927925652');
    `;

    document.head.appendChild(gtagScript);
    document.head.appendChild(inlineScript);
  }, []);

  if (showThankYou) {
    return (
      <>
        <div className="hidden  lg:block">
          <ThankYouPage />
        </div>
        <MobileThankYou />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* TrustedForm Hidden Fields */}
      {/* <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
      <input type="hidden" id="xxTrustedFormCertToken" name="xxTrustedFormCertToken" />
      <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" /> */}

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden  lg:block">
        {/* ===== HEADER ===== */}
        <header className="w-full bg-white border-b border-gray-200">
          <div className=" mx-auto px-20 py-4 flex items-center justify-between">
             <img
  src={logo}
  alt="Connect to Attorney"
  className="w-[215.833px] h-[25px] object-contain"
/>

            <div className="flex items-center gap-4 text-[#162766]">
              <span className="text-[11px] text-[#7A869E] leading-tight text-right">
                For the fastest service, <br />
                <span className="text-sm font-bold uppercase text-[#162766]">
                  CALL NOW
                </span>
              </span>

              <span className="text-[#9AA4BF] text-lg">|</span>

              <span className="text-lg font-bold"> (866) 376 0014</span>
            </div>
          </div>
        </header>

        {/* ===== HERO SECTION ===== */}
        <section
          className="w-full bg-[#0F2357] overflow-hidden min-h-[62vh]"
          style={{
            backgroundImage: `url(${buildingsBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
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
py-20
            "
          >
            {/* ===== LEFT CONTENT ===== */}
              <div className="pt-20 pb-5 mt-20 text-white flex justify-center">
                <div className=" max-w-[720px]">
                  <h1
                    className="
    font-lato
      text-white
      text-[32px]
      sm:text-[34px]
      md:text-[38px]
      lg:text-[44px]
      xl:text-[48px]
      2xl:text-[52px]
      font-bold
      leading-normal
      mb-4"
                  >
                    Hair Relaxer Lawsuit: Take
                  
                    Action If You've Been
                  
                    Diagnosed With Uterine,
                  
                    Ovarian, or Endometrial
                  
                    Cancer
                  </h1>

                  <p
                    className="
  font-inter
      text-white
      font-normal

      text-[14px]
      sm:text-[15px]
      md:text-[16px]
      lg:text-[17px]
      xl:text-[18px]
      2xl:text-[19.8px]

      leading-[36px]
      mb-4

  "
                  >
                    If you or a loved one were diagnosed in 2010 or later with
                    uterine cancer, ovarian cancer, or endometrial cancer after
                    using chemical hair relaxers, you may be entitled to
                    compensation.  Connect to Attorney helps connect eligible individuals
                    with experienced attorneys who focus on hair relaxer cancer
                    claims and can guide you through the next steps.
                  </p>

                  <p
                    className="
        font-lato
      text-white
      text-[20px]
      font-bold
      leading-[22.5px]
      cursor-pointer

  "
                  >
                    Get Your Free Case Review Today, Act Now to Protect Your
                    Rights!
                  </p>
                </div>
              </div>

            {/* ===== RIGHT FORM ===== */}
            <div className="pt-10 pb-4 flex justify-center">
              <div className=" bg-white text-[#162766] rounded-xl shadow-xl overflow-hidden w-full  max-w-[720px]">
                <div className="w-full h-[4px] bg-[#F8D216]" />

                <div className=" px-6 py-6">
                  <h2
                    className="      font-lato
    text-[30px]
    font-extrabold
    leading-[27.5px]
    text-center
    text-[#162766]
    mb-4


"
                  >
                    Get Your Free Case Review Today
                  </h2>

                  <form onSubmit={handleDesktopSubmit} className="space-y-4">
                    <input
                      type="hidden"
                      id="xxTrustedFormCertUrl"
                      name="xxTrustedFormCertUrl"
                    />
                    <input
                      type="hidden"
                      id="xxTrustedFormCertToken"
                      name="xxTrustedFormCertToken"
                    />
                    <input
                      type="hidden"
                      id="xxTrustedFormPingUrl"
                      name="xxTrustedFormPingUrl"
                    />
                    <div className="flex flex-col gap-1">
                      <label
                        className="      font-lato
    text-[#191B37]
    font-normal

    text-[15.8px]
    leading-[28px]
"
                      >
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

                          const currentLeadId =
                            await triggerEarlyLeadIfEligible(nextFormData);

                          if (currentLeadId) {
                            await syncEmailUpdateIfEligible(
                              nextFormData,
                              currentLeadId,
                            );
                          }
                        }}
                        className={` w-full border rounded-md px-3 py-2 
text-[14px]
sm:text-[15px]
md:text-[15px]
lg:text-[16px]
 ${
   desktopTouched.fullName && desktopErrors.fullName
     ? "border-red-500 focus:border-red-500"
     : "border-[#D7DBEA]"
 }`}
                      />
                      {desktopTouched.fullName && desktopErrors.fullName && (
                        <span className="text-[11px] text-red-500">
                          {desktopErrors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label
                          className="      font-lato
    text-[#191B37]
    font-normal

    text-[15.8px]
    leading-[28px]
"
                        >
                          Phone Number
                        </label>

                        <div
                          className={`
    flex items-center
    border rounded-md
    px-3 py-2
    transition
    ${
      desktopTouched.phone && desktopErrors.phone
        ? "border-red-500 focus-within:border-red-500"
        : "border-[#D7DBEA] focus-within:border-[#162766]"
    }
  `}
                        >
                          {/* Country Prefix */}
                          <span
                            className="
      flex items-center
      gap-1
      text-[13px]
      font-medium
      text-[#162766]
      pr-2
      border-r
      border-[#E5E7EB]
      mr-2
    "
                          >
                            +1
                          </span>

                          {/* Phone Input */}
                          <input
                            type="text"
                            placeholder="(555) 123-4567"
                            value={desktopFormData.phone.replace("+1 ", "")}
                            inputMode="numeric"
                            autoComplete="tel"
                            onChange={async (e) => {
                              const rawDigits = e.target.value.replace(
                                /\D/g,
                                "",
                              );

                              const formatted = formatPhoneInput(rawDigits);

                              const nextFormData = {
                                ...desktopFormData,
                                phone: formatted,
                              };

                              setDesktopFormData(nextFormData);

                              const currentLeadId =
                                await triggerEarlyLeadIfEligible(nextFormData);

                              if (currentLeadId) {
                                await syncEmailUpdateIfEligible(
                                  nextFormData,
                                  currentLeadId,
                                );
                              }
                            }}
                            maxLength={14}
                            className="
        w-full
        outline-none
        text-[13px]
        placeholder:text-gray-400
        bg-transparent
      "
                          />
                        </div>

                        {desktopTouched.phone && desktopErrors.phone && (
                          <span className="text-[11px] text-red-500">
                            {desktopErrors.phone}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1">
                        <label
                          className="      font-lato
    text-[#191B37]
    font-normal

    text-[15.8px]
    leading-[28px]
"
                        >
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

                            await syncEmailUpdateIfEligible(nextFormData);
                          }}
                          className={` w-full border rounded-md px-3 py-2 
text-[14px]
sm:text-[15px]
md:text-[15px]
lg:text-[16px]
 ${
   desktopTouched.email && desktopErrors.email
     ? "border-red-500 focus:border-red-500"
     : "border-[#D7DBEA]"
 }`}
                        />
                        {desktopTouched.email && desktopErrors.email && (
                          <span className="text-[11px] text-red-500">
                            {desktopErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Q1 - Dropdown */}
                    <div className="space-y-1">
                      <label
                         className="  font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
"
                      >
                     <span className="font-bold">Q1.</span>    Have you been diagnosed with any of the following?
                      </label>
                      <select
                        value={desktopFormData.q1}
                        onChange={(e) =>
                          setDesktopFormData({
                            ...desktopFormData,
                            q1: e.target.value,
                          })
                        }
                        className={`w-full border rounded-md px-3 py-3 text-[13px] ${
                          desktopTouched.q1 && desktopErrors.q1
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#D7DBEA]"
                        }`}
                      >
                        <option value="">Please select an option</option>
                        <option value="Uterine cancer">Uterine cancer</option>
                        <option value="Ovarian cancer">Ovarian cancer</option>
                        <option value="Endometrial cancer">
                          Endometrial cancer
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      {desktopTouched.q1 && desktopErrors.q1 && (
                        <span className="text-[11px] text-red-500">
                          {desktopErrors.q1}
                        </span>
                      )}
                    </div>

                    {/* Q2 and Q3 - Radio Buttons */}
                    {[
  {
    q: "Q2. Have you used chemical hair relaxer products?",
    name: "q2",
  },
  {
    q: "Q3. Are you currently working with an attorney regarding this matter?",
    name: "q3",
  },
].map(({ q, name }) => {

  // Split Q number from rest of text
  const [qNumber, ...qTextParts] = q.split(" ");
  const qText = qTextParts.join(" ");

  return (
    <div key={name} className="space-y-1">
      
      {/* Question — Only Q# Bold */}
      <p
        className="
          font-lato
          text-[#191B37]
          text-[15.8px]
          font-normal
          leading-[28px]
        "
      >
        <span className="font-bold">
          {qNumber}
        </span>{" "}
        {qText}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {["Yes", "No"].map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-2 px-3 py-3 rounded-md border border-[#D7DBEA] cursor-pointer has-[:checked]:bg-[#E1E4F0]"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={desktopFormData[name] === opt}
              onChange={(e) => {
                setDesktopFormData({
                  ...desktopFormData,
                  [name]: e.target.value,
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

            <span
              className="
                text-[14px]
                sm:text-[15px]
                md:text-[15px]
                lg:text-[16px]
                font-medium
              "
            >
              {opt}
            </span>

          </label>
        ))}
      </div>

      {desktopTouched[name] && desktopErrors[name] && (
        <span className="text-[11px] text-red-500">
          {desktopErrors[name]}
        </span>
      )}

    </div>
  );
})}

                    <div>
                      <label
                        className=" flex items-start gap-2
    font-lato
    text-[11px]
    leading-[15px]
    text-[#4E5069]
    font-normal"
                      >
                        <input
                          type="checkbox"
                          checked={desktopFormData.consent}
                          onChange={(e) => {
                            setDesktopFormData({
                              ...desktopFormData,
                              consent: e.target.checked,
                            });
                          }}
                          className="mt-[2px] accent-[#162766]"
                        />
                        <span>
                          I agree to the{" "}
                          <a
                            href="/PrivacyPolicy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-800 font-bold"
                          >
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a
                            href="/Disclaimer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-800 font-bold"
                          >
                            Disclaimer
                          </a>{" "}
                          and give my express written and give my express
                          written consent, affiliates and/or lawyer to contact
                          you at the number provided above, even if this number
                          is a wireless number or if I am presently listed on a
                          Do Not Call list. I understand that I may be contacted
                          by telephone, email, text message, ai call from ai
                          agents or mail regarding case options and that I may
                          be called using automatic dialing equipment. Message
                          and data rates may apply. My consent does not require
                          purchase. This is Legal advertising.
                        </span>
                      </label>
                      {desktopTouched.consent && desktopErrors.consent && (
                        <span className="text-[11px] text-red-500 block mt-1">
                          {desktopErrors.consent}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full
    flex flex-col
    justify-center items-center
    h-[56.5px]
    px-[38.25px]
    pt-[19.25px]
    pb-[20.25px]
bg-[#F8D216]
    hover:bg-[#E5C414]
    transition-colors

    font-['Segoe_UI']
    text-[18px]
    font-bold
    leading-[16px]
    tracking-[2.25px]
    uppercase
    text-[#162766]
    rounded-lg ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#162766] border-t-transparent rounded-full animate-spin"></div>
                          <span>SUBMITTING...</span>
                        </>
                      ) : (
                        "REVIEW MY CASE"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT HAPPENS SECTION ===== */}
        <section className="w-full bg-white py-10">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2
              className="
     font-lato
    text-center
    text-[#162766]
    text-[41px]
    font-bold
    leading-[48px]

"
            >
              What Happens When You Contact <br />
               Connect to Attorney?
            </h2>

            <div className="w-[48px] h-[3px] bg-[#F8D216] mx-auto mt-3 mb-6 rounded-full" />

            <p
              className="font-lato
    text-center
    text-[#4B5563]
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[620px]
    mx-auto
"
            >
              When you reach out to  Connect to Attorney for a hair relaxer <br />{" "}
              cancer lawsuit review, the process is simple and fast:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10">
              <div className="flex flex-col items-center">
                <img
                  src={intakeIcon}
                  className="w-[64px]
    h-[64px]
    aspect-square
    object-contain
    mb-4"
                />
                <h3
                  className="    font-lato
    text-[#162766]
    text-center
    text-[30px]
    font-bold
    leading-[40px]
    mb-2
"
                >
                  Quick & Confidential <br /> Intake
                </h3>
                <p
                  className="font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[260px]
    mx-auto"
                >
                  Complete a short, secure form focused on your use of hair
                  relaxers and cancer diagnosis.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={eligibilityIcon}
                  className="w-[64px]
    h-[64px]
    aspect-square
    object-contain
    mb-4"
                />
                <h3
                  className="    font-lato
    text-[#162766]
    text-center
    text-[30px]
    font-bold
    leading-[40px]
    mb-2
"
                >
                  Eligibility <br /> Review
                </h3>
                <p
                  className="font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[260px]
    mx-auto"
                >
                  Your details are carefully evaluated to determine if it meets
                  the criteria for a hair relaxer lawsuit.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={attorneyIcon}
                  className="w-[64px]
    h-[64px]
    aspect-square
    object-contain
    mb-4"
                />
                <h3
                  className="    font-lato
    text-[#162766]
    text-center
    text-[30px]
    font-bold
    leading-[40px]
    mb-2
"
                >
                  Attorney Connection <br /> & Guidance
                </h3>
                <p
                  className="font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[260px]
    mx-auto"
                >
                  If eligible, you are connected with a qualified attorney to
                  discuss your rights and next steps.
                </p>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="    mt-7
    w-[350px]
    h-[56.5px]
    px-[38.25px]
    pt-[19.25px]
    pb-[20.25px]
    bg-[#F8D216]
    hover:bg-[#E5C414]
    transition-colors
    rounded-[10px]

    font-['Segoe_UI']
    text-[18px]
    font-bold
    leading-[16px]
    tracking-[2.25px]
    uppercase
    text-[#162766]

"
            >
              GET STARTED
            </button>
          </div>
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <section className="w-full bg-[#EBEEFF] py-10 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6">
            <h2
              className=" text-center 
text-[28px]
sm:text-[30px]
md:text-[32px]
lg:text-[36px]
xl:text-[40px]
2xl:text-[44px]
font-semibold
text-[#162766]
mb-7
  "
            >
              Hear from people, we have helped
            </h2>

            <div className="relative">
              <div
                className="
                  flex gap-8
                  overflow-x-auto
                  scroll-smooth
                  pb-4
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                "
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {[
                  {
                    text: " Connect to Attorney reviewed my case with care, focusing on my diagnosis date, age, product history, and brand, then connected me to an attorney confidently and quickly.",
                    name: "Tamara L.",
                  },
                  {
                    text: "After my cancer diagnosis, I felt lost.  Connect to Attorney reviewed relaxer history, confirmed I qualified, and connected me with a lawyer who explained each step.",
                    name: "Angela B.",
                  },
                  {
                    text: "After years of relaxer use, my diagnosis shocked me.  Connect to Attorney made intake fast, clarified eligibility, and helped me take the first step toward accountability.",
                    name: "Monique S.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="
                      flex-shrink-0
                      w-[540px]
                      bg-transparent
                      border border-white
                      px-5 py-8
                      shadow-[inset_6px_6px_10px_rgba(255,255,255,0.55),inset_-6px_-6px_12px_rgba(15,35,87,0.05)]
                    "
                  >
                    <p
                      className="text-[15px]
sm:text-[16px]
md:text-[17px]
lg:text-[18px]
xl:text-[19px]
2xl:text-[20px]
font-semibold
  leading-relaxed text-[#162766] text-center mb-6"
                    >
                      "{item.text}"
                    </p>

                    <div className="w-[26px] h-[2px] bg-[#F8D216] mx-auto mb-3" />

                    <p
                      className="font-lato
    text-[#162766]
    text-center
    text-[22px]
    font-bold
    leading-[30.8px]
"
                    >
                      {item.name}
                    </p>

                    <p
                      className="font-lato
    text-[#162766]
    text-center
    text-[18px]
    font-normal
    italic
    leading-[20px]
    tracking-[0.9px]
"
                    >
                      Patient
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY TRUST SECTION ===== */}
        <section className="w-full bg-white py-14">
          <div className="max-w-[1200px] mx-auto px-6  grid grid-cols-2 gap-16 items-stretch">
            <div>
              <h2
                className="     font-lato
    text-[#162766]
    text-left
    text-[41px]
    font-bold
    leading-[48px]

 "
              >
                Why Trust  Connect to Attorney?
              </h2>

              <div className="w-[44px] h-[3px] bg-[#F4C430] mt-4 mb-6 mx-auto" />

              <p
                className="    font-lato
    text-[#162766]
    text-center
    text-[23px]
    font-normal
    leading-[40px]
    max-w-[540px]
    mx-auto
    mb-3
"
              >
                 Connect to Attorney focuses on helping people affected by dangerous or
                harmful products connect with legal professionals who understand
                complex litigation like the hair relaxer lawsuit.
              </p>

              <ul
                className="font-lato
    text-[#404040]
    text-[16px]
    font-normal
    leading-[28px]
    space-y-2
    max-w-[560px]
"
              >
                <li className="flex gap-3">
                  <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#555555]" />
                  <span>
                    We use clear, criteria-based screening focused on hair
                    relaxer-caused cancer claims.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#555555]" />
                  <span>
                    We protect your information through secure and confidential
                    case reviews.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#555555]" />
                  <span>
                    We connect qualified individuals with attorneys in
                    pharmaceutical injury litigation.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#555555]" />
                  <span>
                    There is no cost to check your eligibility and no obligation
                    to move forward.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#555555]" />
                  <span>
                    We guide you only if your case meets the lawsuit
                    requirements, avoiding unnecessary calls or delays.
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full h-full flex justify-end">
              <img
                src={handshakeImage}
                alt="Handshake"
                className="w-full h-full max-w-[540px] rounded-[20px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <section className="w-full bg-[#162B6F] py-10">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
            <h2
              className="font-lato
    text-white
    text-center
    text-[41px]
    font-bold
    leading-[48px]
"
            >
              Ready To Get a Free Hair Relaxer Case Review?
            </h2>

            <div className="w-[44px] h-[3px] bg-[#F4C430] mt-4 mb-6" />

            <p
              className="font-lato
    text-white
    text-center
    text-[41px]
    font-normal
    leading-[48px]
    mb-8
"
            >
              Contact our legal partners today.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="    mt-7
    mx-auto

    flex items-center justify-center

    w-[350px]
    h-[56.5px]

    px-[38.25px]
    pt-[19.25px]
    pb-[20.25px]

    bg-[#F8D216]
    hover:bg-[#E5C414]
    transition-colors

    rounded-[10px]

    font-['Segoe_UI']
    text-[18px]
    font-bold
    leading-[16px]
    tracking-[2.25px]
    uppercase
    text-[#162766]
"
            >
              GET HELP NOW
            </button>
          </div>
        </section>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className=" lg:hidden w-full bg-[#0F2357]">
        <div className="flex items-center justify-between px-4 py-3 bg-white">
          <img
  src={logo}
  alt="Connect to Attorney"
  className="w-[215.833px] h-[25px] object-contain"
/>

          <div className="relative">
            <img
              src={callIcon}
              alt="Call"
              className="w-9 h-9 cursor-pointer"
              onClick={() => setShowCallPopup((prev) => !prev)}
            />

            {showCallPopup && (
              <div
                className="
                  absolute
                  right-0
                  top-12
                  bg-[#162766]
                  text-white
                  text-[13px]
                  px-4
                  py-2
                  rounded-lg
                  shadow-lg
                  whitespace-nowrap
                  z-50
                "
              >
                (866) 376 0014
              </div>
            )}
          </div>
        </div>

        <div className="px-4 pt-10 pb-14 text-white">
          <h1
            className="font-lato
    text-white
    text-[28px]
    font-bold
    leading-[40px]
    mb-4
"
          >
            Hair Relaxer Lawsuit:
            <br />
            Take Action If You've BEen
            <br />
            Diagnosed With Uterine,
            <br />
            Ovarian, or Endometrial
            <br />
            Cancer
          </h1>

          <p
            className="font-lato
    text-white
    text-[18.9px]
    font-normal
    leading-[25px]
    mb-6
"
          >
            If you or a loved one were diagnosed in 2010 or later with uterine
            cancer, ovarian cancer, or endometrial cancer after using chemical
            hair relaxers, you may be entitled to compensation.  Connect to Attorney
            helps connect eligible individuals with experienced attorneys who
            focus on hair relaxer cancer claims and can guide you through the
            next steps.
          </p>

          <p
            className="
    font-lato
    text-white
    text-[20px]
    font-bold
    leading-[30px]
    tracking-[0.6px]
  "
          >
            Get Your Free Case Review Today, Act Now to Protect Your Rights!
          </p>
        </div>
      </div>

       {/* ===== MOBILE FORM ===== */}
      <div className=" lg:hidden bg-white   -mt-6 pb-10">
        <div className="bg-white rounded-[16px]  overflow-hidden px-4 py-6">
          <h2
            className="font-lato
    text-[#162766]
    text-center
    text-[22px]
    font-extrabold
    leading-[32px]
    mb-4
"
          >
            Get Your Free Case Review Today
          </h2>

          <form onSubmit={handleMobileSubmit} className="space-y-4">
            <input
              type="hidden"
              id="xxTrustedFormCertUrl_mobile"
              name="xxTrustedFormCertUrl"
            />
            <input
              type="hidden"
              id="xxTrustedFormCertToken_mobile"
              name="xxTrustedFormCertToken"
            />
            <input
              type="hidden"
              id="xxTrustedFormPingUrl_mobile"
              name="xxTrustedFormPingUrl"
            />
            <div>
              <label
                className=" font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
"
              >
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

                  const currentLeadId =
                    await triggerEarlyLeadIfEligible(nextFormData);

                  if (currentLeadId) {
                    await syncEmailUpdateIfEligible(
                      nextFormData,
                      currentLeadId,
                    );
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
                <span className="text-[11px] text-red-500">
                  {mobileErrors.fullName}
                </span>
              )}
            </div>

            <div>
              <label
                className=" font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
"
              >
                Phone Number
              </label>
              <div className="mt-1 flex items-center border rounded-md px-3 py-2 border-[#D7DBEA] focus-within:border-[#162766] focus-within:ring-2 focus-within:ring-[#162766]/20">
                {/* +1 Prefix */}
                <span
                  className="
    flex items-center
    text-[14px]
    font-semibold
    text-[#162766]
    pr-2
    border-r
    border-[#E5E7EB]
    mr-2
  "
                >
                  +1
                </span>

                {/* Phone Input */}
                <input
                  type="text"
                  placeholder="(555) 123-4567"
                  value={mobileFormData.phone.replace("+1 ", "")}
                  inputMode=" numeric"
                  autoComplete="tel"
                  onChange={async (e) => {
                    const rawDigits = e.target.value.replace(/\D/g, "");

                    const formatted = formatPhoneInput(rawDigits);

                    const nextFormData = {
                      ...mobileFormData,
                      phone: formatted,
                    };

                    setMobileFormData(nextFormData);

                    const currentLeadId =
                      await triggerEarlyLeadIfEligible(nextFormData);

                    if (currentLeadId) {
                      await syncEmailUpdateIfEligible(
                        nextFormData,
                        currentLeadId,
                      );
                    }
                  }}
                  maxLength={14}
                  className="
    w-full
    outline-none
    text-[14px]
    placeholder:text-gray-400/80
    bg-transparent
    "
                />
              </div>
              {mobileTouched.phone && mobileErrors.phone && (
                <span className="text-[11px] text-red-500">
                  {mobileErrors.phone}
                </span>
              )}
            </div>

            <div>
              <label
                className=" font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
"
              >
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

                  await syncEmailUpdateIfEligible(nextFormData);
                }}
                className={`mt-1 w-full border rounded-md px-3 py-2 text-[14px] ${
                  mobileTouched.email && mobileErrors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#D7DBEA]"
                }`}
                placeholder="e.g. john.smith@mail.com"
              />
              {mobileTouched.email && mobileErrors.email && (
                <span className="text-[11px] text-red-500">
                  {mobileErrors.email}
                </span>
              )}
            </div>

            <div>
              <label
                className="   font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
 mb-2 block"
              >
                     <span className="font-bold">Q1.</span>    . Have you been diagnosed with any of the following?
              </label>
              <select
                value={mobileFormData.q1}
                onChange={(e) =>
                  setMobileFormData({ ...mobileFormData, q1: e.target.value })
                }
                className={`w-full border rounded-md px-3 py-3 text-[13px] ${
                  mobileTouched.q1 && mobileErrors.q1
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#D7DBEA]"
                }`}
              >
                <option value="">Please select an option</option>
                <option value="Uterine cancer">Uterine cancer</option>
                <option value="Ovarian cancer">Ovarian cancer</option>
                <option value="Endometrial cancer">Endometrial cancer</option>
                <option value="Other">Other</option>
              </select>
              {mobileTouched.q1 && mobileErrors.q1 && (
                <span className="text-[11px] text-red-500">
                  {mobileErrors.q1}
                </span>
              )}
            </div>

            {[
              "Have you used chemical hair relaxer products?",
              "Are you currently working with an attorney regarding this matter?",
            ].map((q, i) => (
              <div key={i}>
                <p
                  className="   font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
 mb-2"
                >
            <span className="font-bold">Q{i + 2}. </span>      {q}
                </p>
                <div className="flex gap-3">
                  {["Yes", "No"].map((opt) => (
                    <label
                      key={opt}
                      className="flex-1 flex items-center gap-2 px-3 py-2 border rounded-md border-[#D7DBEA] cursor-pointer has-[:checked]:bg-[#E1E4F0]"
                    >
                      <input
                        type="radio"
                        name={`mq${i + 2}`}
                        value={opt}
                        checked={mobileFormData[`q${i + 2}`] === opt}
                        onChange={(e) => {
                          setMobileFormData({
                            ...mobileFormData,
                            [`q${i + 2}`]: e.target.value,
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
                {mobileTouched[`q${i + 2}`] && mobileErrors[`q${i + 2}`] && (
                  <span className="text-[11px] text-red-500">
                    {mobileErrors[`q${i + 2}`]}
                  </span>
                )}
              </div>
            ))}

            <div>
              <label
                className="
    flex items-start gap-2
    font-lato
    text-[#4E5069]
    text-[11px]
    font-normal
    leading-[15px]
  "
              >
                <input
                  type="checkbox"
                  checked={mobileFormData.consent}
                  onChange={(e) => {
                    setMobileFormData({
                      ...mobileFormData,
                      consent: e.target.checked,
                    });
                  }}
                  className="mt-0.5 accent-[#162766]"
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="/PrivacyPolicy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800 font-bold"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/Disclaimer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800 font-bold"
                  >
                    Disclaimer
                  </a>{" "}
                  and give my express written consent, affiliates and/or lawyer
                  to contact you at the number provided above, even if this
                  number is a wireless number or if I am presently listed on a
                  Do Not Call list. I understand that I may be contacted by
                  telephone, email, text message, ai call from ai agents or mail
                  regarding case options and that I may be called using
                  automatic dialing equipment. Message and data rates may apply.
                  My consent does not require purchase. This is Legal
                  advertising rates may apply. My consent does not require
                  purchase. This is Legal advertising
                </span>
              </label>
              {mobileTouched.consent && mobileErrors.consent && (
                <span className="text-[11px] text-red-500 block mt-1">
                  {mobileErrors.consent}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`   w-full
  flex items-center justify-center gap-2
  h-[56.5px]
  px-[38.25px]
  bg-[#F8D216]
  hover:bg-[#E5C414]
  transition-colors

  rounded-[10px]

  font-['Segoe_UI']
  text-[18px]
  font-bold
  leading-[16px]
  tracking-[2.25px]
  uppercase
  text-[#162766]
 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#162766] border-t-transparent rounded-full animate-spin"></div>
                  <span>SUBMITTING...</span>
                </>
              ) : (
                "REVIEW MY CASE"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* ================= MOBILE WHAT HAPPENS ================= */}
      <section className=" lg:hidden w-full bg-white">
        <div className="w-full h-[25px] bg-[#162766]" />

        <div className="px-5 py-10 text-center">
          <h2
            className="
    font-lato
    text-[#162766]
    text-center
    text-[28px]
    font-bold
    leading-[32px]
  "
          >
            What Happens <br /> When You Contact <br />  Connect to Attorney?
          </h2>

          <div className="w-[40px] h-[3px] bg-[#F8D216] mx-auto mt-3 mb-4" />

          <p
            className="
    font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[300px]
    mx-auto
    mb-10
  "
          >
            {" "}
            When you reach out to  Connect to Attorney for a hair relaxer cancer lawsuit
            review, the process is simple and fast:
          </p>

          <div className="flex flex-col items-center mb-10">
            <img
              src={intakeIcon}
              className="
    w-[64px]
    h-[64px]
    aspect-square
    object-contain
    mb-4
    mx-auto
  "
            />
            <h3
              className="
    font-lato
    text-[#162766]
    text-center
    text-[24px]
    font-bold
    leading-[28px]
    mb-2
  "
            >
              Quick & Confidential Intake
            </h3>
            <p
              className="
    font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[260px]
    mx-auto
  "
            >
              Complete a short, secure form focused on your use of hair relaxers
              and cancer diagnosis.
            </p>
          </div>

          <div className="flex flex-col items-center mb-10">
            <img
              src={eligibilityIcon}
              className="
    w-[64px]
    h-[64px]
    aspect-square
    object-contain
    mb-4
    mx-auto
  "
            />
            <h3 className="text-[16px] font-semibold text-[#162766] mb-2">
              Eligibility Review
            </h3>
            <p
              className="
    font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[260px]
    mx-auto
  "
            >
              Your details are carefully evaluated to determine if it meets the
              criteria for a hair relaxer lawsuit.
            </p>
          </div>

          <div className="flex flex-col items-center mb-12">
            <img
              src={attorneyIcon}
              className="
    w-[64px]
    h-[64px]
    aspect-square
    object-contain
    mb-4
    mx-auto
  "
            />
            <h3
              className="
    font-lato
    text-[#162766]
    text-center
    text-[24px]
    font-bold
    leading-[28px]
    mb-2
  "
            >
              Attorney Connection & Guidance
            </h3>
            <p
              className="
    font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    max-w-[260px]
    mx-auto
  "
            >
              If eligible, you are connected with a qualified attorney to
              discuss your rights and next steps.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
  flex
  w-full
  max-w-[358px]
  h-[56.5px]
  px-[38.25px]
  py-[20.25px]
  justify-center
  items-center
  mx-auto
  rounded-[10px]
  border-[2px]
  border-[#F8D216]
  bg-[#F8D216]
  text-[#162766]
  text-center
  font-bold
  text-[18px]
  leading-[16px]
  tracking-[2.25px]
  uppercase
  font-['Segoe_UI']
  hover:brightness-95
  transition
  "
          >
            GET STARTED
          </button>
        </div>
      </section>

      {/* ================= MOBILE TESTIMONIALS ================= */}
      <section className=" lg:hidden w-full bg-[#EBEEFF] py-10">
        <div className="px-5">
          <h2
            className="
    font-lato
    text-[#162766]
    text-center
    text-[28px]
    font-bold
    leading-[32px]
    mb-8
  "
          >
            {" "}
            Hear from people, <br />
            we have helped
          </h2>

          <div
            className="
              bg-transparent
              border border-white
              px-5 py-7
              mb-6
              shadow-[inset_6px_6px_10px_rgba(255,255,255,0.55),inset_-6px_-6px_12px_rgba(15,35,87,0.05)]
            "
          >
            <p
              className="
    font-lato
    text-[#162766]
    text-center
    text-[16px]
    font-normal
    leading-[26px]
    mb-5
  "
            >
               Connect to Attorney reviewed my case with care, focusing on my diagnosis
              date, age, product history, and brand, then connected me to an
              attorney confidently and quickly.
            </p>

            <div className="w-[24px] h-[2px] bg-[#F8D216] mx-auto mb-3" />

            <p
              className="font-lato
    text-[#162766]
    text-center
    text-[18px]
    font-bold
    leading-[24px]
"
            >
              Tamara L.
            </p>
            <p
              className="font-[Georgia]
    text-[#162766]
    text-center
    text-[16px]
    italic
    font-normal
    leading-[20px]
    tracking-[0.9px]
"
            >
              patient
            </p>
          </div>

          <div
            className="
              bg-transparent
              border border-white
              px-5 py-7
              mb-6
              shadow-[inset_6px_6px_10px_rgba(255,255,255,0.55),inset_-6px_-6px_12px_rgba(15,35,87,0.05)]
            "
          >
            <p
              className="
    font-lato
    text-[#162766]
    text-center
    text-[16px]
    font-normal
    leading-[26px]
    mb-5
  "
            >
              After my cancer diagnosis, I felt lost.  Connect to Attorney reviewed
              relaxer history, confirmed I qualified, and connected me with a
              lawyer who explained each step.
            </p>

            <div className="w-[24px] h-[2px] bg-[#F8D216] mx-auto mb-3" />

            <p
              className="font-lato
    text-[#162766]
    text-center
    text-[18px]
    font-bold
    leading-[24px]
"
            >
              Angela B.
            </p>
            <p
              className="font-[Georgia]
    text-[#162766]
    text-center
    text-[16px]
    italic
    font-normal
    leading-[20px]
    tracking-[0.9px]
"
            >
              patient
            </p>
          </div>

          <div
            className="
              bg-transparent
              border border-white
              px-5 py-7
              shadow-[inset_6px_6px_10px_rgba(255,255,255,0.55),inset_-6px_-6px_12px_rgba(15,35,87,0.05)]
            "
          >
            <p
              className="
    font-lato
    text-[#162766]
    text-center
    text-[16px]
    font-normal
    leading-[26px]
    mb-5
  "
            >
              After years of relaxer use, my diagnosis shocked me.  Connect to Attorney
              made intake fast, clarified eligibility, and helped me take the
              first step toward accountability.
            </p>

            <div className="w-[24px] h-[2px] bg-[#F8D216] mx-auto mb-3" />

            <p
              className="font-lato
    text-[#162766]
    text-center
    text-[18px]
    font-bold
    leading-[24px]
"
            >
              Monique S.
            </p>
            <p
              className="font-[Georgia]
    text-[#162766]
    text-center
    text-[16px]
    italic
    font-normal
    leading-[20px]
    tracking-[0.9px]
"
            >
              patient
            </p>
          </div>
        </div>
      </section>

      {/* ================= MOBILE WHY TRUST ================= */}
      <section className=" lg:hidden w-full bg-white py-10">
        <div className="px-5">
          <h2
            className="font-lato
    text-[#162766]
    text-center
    text-[28px]
    font-bold
    leading-[32px]
    mb-3
"
          >
            Why Trust <br />
             Connect to Attorney?
          </h2>

          <div className="w-[32px] h-[2px] bg-[#F8D216] mx-auto mb-5" />

          <div className="mb-6">
            <img
              src={handshakeImage}
              alt="Handshake"
              className="w-full rounded-[14px] object-cover"
            />
          </div>

          <p
            className="
    font-lato
    text-[#404040]
    text-center
    text-[18px]
    font-normal
    leading-[28px]
    mb-5
  "
          >
            {" "}
             Connect to Attorney focuses on helping people affected by dangerous or
            harmful products connect with legal professionals who understand
            complex litigation like the hair relaxer lawsuit.
          </p>

          <div className="w-full h-[1px] bg-[#E5E7EB] mb-5" />

          <ul
            className="
    font-lato
    text-[#404040]
    text-[18px]
    font-normal
    leading-[32px]
    space-y-4
  "
          >
            {" "}
            <li className="flex gap-3">
              <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-[#4B5563]" />
              <span>
                We use clear, criteria-based screening focused on hair
                relaxer-caused cancer claims.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-[#4B5563]" />
              <span>
                We protect your information through secure and confidential case
                reviews.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-[#4B5563]" />
              <span>
                We connect qualified individuals with attorneys in
                pharmaceutical injury litigation.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-[#4B5563]" />
              <span>
                There is no cost to check your eligibility and no obligation to
                move forward.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-[8px] w-[5px] h-[5px] rounded-full bg-[#4B5563]" />
              <span>
                We guide you only if your case meets the lawsuit requirements,
                avoiding unnecessary calls or delays.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= MOBILE FINAL CTA ================= */}
      <section className=" lg:hidden w-full bg-[#162B6F] py-10">
        <div className="px-5 text-center">
          <h2
            className="
    font-lato
    text-white
    text-center
    text-[28px]
    font-normal
    leading-[32px]
    mb-3
  "
          >
            Ready To Get a Free Hair <br />
            Relaxer Case Review?
          </h2>

          <div className="w-[32px] h-[2px] bg-[#F8D216] mx-auto mb-4" />

          <p
            className="
    font-lato
    text-white
    text-center
    text-[17.9px]
    font-normal
    leading-[32px]
    mb-7
  "
          >
            Contact our legal partners today.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
    w-full

    flex items-center justify-center

    h-[56.5px]
    px-[38.25px]

    bg-[#F8D216]
    border-[2px] border-[#F8D216]

    rounded-[10px]

    font-['Segoe_UI']
    text-[18px]
    font-bold
    leading-[16px]
    tracking-[2.25px]
    uppercase
    text-[#162766]

    hover:bg-[#E5C414]
    transition-colors
  "
          >
            GET HELP NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default HairRelaxerLawsuit;
