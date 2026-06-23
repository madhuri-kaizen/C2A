'use client'
import React, { useState, useEffect, useRef } from "react";

const logo  = "/logotitle.svg";
const successIcon = "/Form/success.png";
const tyBuildings = "/Form/tybuildings.png";
const tyBuildingsMobile = "/Form/tybuildingsmobile.png";
const heroBg = "/Form/bgd.png";
const mobileHeroBg = "/Form/bgdm.png";
const faqArrow = "/Form/faqarrow.svg";
const faqArrowD = "/Form/faqarrowdown.svg";
const expand = "/Form/expandupix.svg";
const collapse = "/Form/collapsedupix.svg";
import { DupixentLawsuitSendAdminEmail, DupixentLawsuitSendUserEmail } from '../emailService2';
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
 * DupixentLawsuit Component with Full Backend Integration
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
        <img src={logo} alt="Connect2Attorney" className="h-9" />
      </div>

      <div className="mt-[90px] pb-[220px] flex flex-col items-center text-center px-6 z-10 relative">
        <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mb-6">
          <img src={successIcon} alt="Success" className="w-120 h-120" />
        </div>

        <h1 className="text-[26px] font-bold text-[#162766] mb-4">
          Thank you for sharing your story.
        </h1>

        <p className="text-[14px] leading-relaxed text-[#4B5563]  max-w-[720px]">
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

const DupixentLawsuitC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  // Meta Pixel ID
  const META_PIXEL_ID = "1040563962473716"; // input pixel id 
  const [leadId, setLeadId] = useState(null);
  const [earlySent, setEarlySent] = useState(false);

  const earlyLeadLock = useRef(false);
  const emailUpdateLock = useRef(false);
  const lastUpdatedEmailRef = useRef(null);

  const generateSessionId = () => {
    return `CR_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  };

  const [uniqueSessionId] = useState(generateSessionId);
  // Refs for tracking
  const adTrackingRef = useRef({
    gclid: null,
    gbraid: null,
    wbraid: null,
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  const CRM_API_URL =
    "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

  // ========== BACKEND HELPER FUNCTIONS ==========

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
    ) return "ET";

    // Central
    if (
      tz.includes("Chicago") ||
      tz.includes("Menominee")
    ) return "CT";

    // Mountain
    if (
      tz.includes("Denver") ||
      tz.includes("Boise") ||
      tz.includes("Phoenix")
    ) return "MT";

    // Pacific
    if (tz.includes("Los_Angeles")) return "PT";

    // Alaska
    if (
      tz.includes("Anchorage") ||
      tz.includes("Juneau")
    ) return "AK";

    // Hawaii
    if (tz.includes("Honolulu")) return "HT";

    return "other";
  };

  const getTrustedFormData = () => {
    return new Promise((resolve) => {
      // Check both desktop and mobile forms
      const certUrl = document.getElementById('xxTrustedFormCertUrl')?.value ||
        document.getElementById('xxTrustedFormCertUrl_mobile')?.value;

      const tokenUrl = document.getElementById('xxTrustedFormCertToken')?.value ||
        document.getElementById('xxTrustedFormCertToken_mobile')?.value;

      const pingUrl = document.getElementById('xxTrustedFormPingUrl')?.value ||
        document.getElementById('xxTrustedFormPingUrl_mobile')?.value;

      if (!certUrl) {
        setTimeout(() => {
          const retryCertUrl = document.getElementById('xxTrustedFormCertUrl')?.value ||
            document.getElementById('xxTrustedFormCertUrl_mobile')?.value;
          const retryTokenUrl = document.getElementById('xxTrustedFormCertToken')?.value ||
            document.getElementById('xxTrustedFormCertToken_mobile')?.value;
          const retryPingUrl = document.getElementById('xxTrustedFormPingUrl')?.value ||
            document.getElementById('xxTrustedFormPingUrl_mobile')?.value;

          resolve({
            certId: retryCertUrl,
            tokenUrl: retryTokenUrl,
            pingUrl: retryPingUrl
          });
        }, 500);
      } else {
        resolve({
          certId: certUrl,
          tokenUrl: tokenUrl,
          pingUrl: pingUrl
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
        websiteName: "Connect2Attorney",
        formPath: "dupixent-lawsuit-c",
        vertical: LEAD_GENERATION_VERTICALS.DUPIXENT,
        formname: "Dupixent Lawsuit C Lander",
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
    currentLeadId = leadId
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

    if (
      emailUpdateLock.current ||
      lastUpdatedEmailRef.current === email
    ) {
      return;
    }

    emailUpdateLock.current = true;

    try {
      const trustedFormData = await getTrustedFormData();
      const ipAddress = await getIPAddress();

      const timezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone;

      const body = {
        countryName: "USA",
        brandType: "Internal",
        brandName: "Project 6",
        websiteName: "Connect2Attorney",
        formname: "Dupixent Lawsuit Lander C",
        isPartialSubmission: true,
                vertical: LEAD_GENERATION_VERTICALS.DUPIXENT,

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

      const res = await fetch(
        `${CRM_API_URL}/${currentLeadId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

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

  const submitFinalLead = async ({
    currentLeadId,
    payload
  }) => {

    const trustedFormData = await getTrustedFormData();
    const ipAddress = await getIPAddress();

    const timezone =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    const res = await fetch(
      `${CRM_API_URL}/${currentLeadId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          countryName: "USA",
          brandType: "Internal",
          brandName: "Project 6",
          websiteName: "Connect2Attorney",
          formname: "Dupixent Lawsuit Lander C",
                  finalSubmit: true,
        deleteFromWebsiteLogs:true,
          vertical: LEAD_GENERATION_VERTICALS.DUPIXENT,

          data: {

            name: payload.fullName,

            firstName: payload.fullName.split(' ')[0] || '',
            lastName: payload.fullName.split(' ').slice(1).join(' ') || '',

            phone: payload.phone,
            email: payload.email,

            q1: payload.q1,
            q2: payload.q2,
            q3: payload.q3,

            consent: payload.consent,

            submissionDate: new Date().toISOString(),

            uniqueSessionId,

            pageSource: getSourceUrl(),

            trustedFormCertUrl:
              trustedFormData.certId,

            trustedFormPingUrl:
              trustedFormData.pingUrl,

            trustedFormToken:
              trustedFormData.tokenUrl,

            ipAddress,

            gclid:
              adTrackingRef.current.gclid,

            gbraid:
              adTrackingRef.current.gbraid,

            wbraid:
              adTrackingRef.current.wbraid,

            timezone,
          },
        }),
      }
    );

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
  //         websiteName: 'Connect2Attorney',
  //         vertical: 'Depo-Provera & Brain Tumor Lawsuit',
  //         formPath: '/depo-provera-lawsuit-c',
  //         formname: 'Depo-Provera Lawsuit lander C',
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
      const ipAddress = await getIPAddress();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const submittedAtUTC = new Date().toISOString();
      const usTimezone = getUSTimezone(timezone);

      const retellPayload = {
        countryName: "USA",
        brandType: "Internal",
        brandName: "Project 6",
        websiteName: "Connect2Attorney",
        vertical: LEAD_GENERATION_VERTICALS.DUPIXENT,
        formname: "Dupixent Lawsuit Lander Form C",
        formPath: '/dupixent-lawsuit-c',
        data: {
          submissionDate: new Date().toLocaleString(),
          fullName: payload.fullName,
          firstName: payload.fullName.split(' ')[0] || '',
          lastName: payload.fullName.split(' ').slice(1).join(' ') || '',
          phone: payload.phone,
          email: payload.email,
          consentGiven: payload.consent,
          hasDiagnosis: payload.q1,
          CTCLdiagnosisAfterTakingDupixent: payload.q2,
          hasAttorney: payload.q3,
          injuryType: "Cancer",
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
        }
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
  //         DupixentLawsuitSendAdminEmail({ formData: payload }),
  //         DupixentLawsuitSendUserEmail({ formData: payload })
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
  //             send_to: 'AW-32222222/dccxcvfDummy', //change later
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
  //         DupixentLawsuitSendAdminEmail({ formData: payload }),
  //         DupixentLawsuitSendUserEmail({ formData: payload })
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
  //             send_to: 'AW-322222/IzbXCNfAz_IbEJTf2eRCdummy', //change later
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

  //form retell only
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
          DupixentLawsuitSendAdminEmail({ formData: payload }),
          DupixentLawsuitSendUserEmail({ formData: payload })
        ]).catch(err => {
          console.error("Email sending failed:", err);
        });


        setShowThankYou(true);

        // Track Lead event with advanced matching
        const userData = buildAdvancedMatching({
          email: payload.email,
          phoneNumber: payload.phone
        });
        trackEventWithUserData('CompleteRegistration', userData);

        // Google Ads conversion tracking
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-32222222/dccxcvfDummy', //change later
            value: 1.0,
            currency: 'USD'
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
          DupixentLawsuitSendAdminEmail({ formData: payload }),
          DupixentLawsuitSendUserEmail({ formData: payload })
        ]).catch(err => {
          console.error("Email sending failed:", err);
        });


        setShowThankYou(true);

        // Track Lead event with advanced matching
        const userData = buildAdvancedMatching({
          email: payload.email,
          phoneNumber: payload.phone
        });
        trackEventWithUserData('CompleteRegistration', userData);

        // Google Ads conversion tracking
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-322222/IzbXCNfAz_IbEJTf2eRCdummy', //change later
            value: 1.0,
            currency: 'USD'
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

  // Initialize Meta Pixel
  useEffect(() => {
    ensureMetaPixel(META_PIXEL_ID);
    if (window.fbq) window.fbq("track", "PageView");
  }, []);

  useEffect(() => {
    if (showThankYou && window.fbq) {
      window.fbq('track', 'ThankYou');
    }
  }, [showThankYou]);

  // Capture ad tracking parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    adTrackingRef.current = {
      gclid: params.get('gclid'),
      gbraid: params.get('gbraid'),
      wbraid: params.get('wbraid'),
    };
  }, []);

  // Initialize Google Tag Manager
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
          <div className="mx-auto px-20 py-3 flex items-center justify-between">
            <img
  src={logo}
  alt="Connect2Attorney"
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
                     (888) 202 1350
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
py-20
            "
          >
            {/* ===== LEFT CONTENT ===== */}
            <div className="pt-0 mt-20 text-white flex justify-center">
              <div className=" max-w-[720px]">
                <h1 className="text-[30px] font-[Quicksand] leading-[45px] font-semibold mb-4">
                  Dupixent Lawsuit: What to Know Before <span className="bg-[#162766] text-[#F8D216] px-3 py-[3px] rounded-md inline-block">
                    Filing a Claim
                  </span>

                </h1>

                <p className="text-[16px] text-white mb-4 font-[Quicksand] leading-[28px] tracking-wide">
                  If you or a loved one developed serious health complications after using Dupixent, you may have legal options. A quick case review can help determine whether your condition may be connected and whether you may be eligible for Dupixent compensation.
                </p>

                <ul className="mt-6 space-y-4 font-[Quicksand] leading-[24px] text-[16px] text-white">
                  <li className="flex items-start gap-3">
                    <span className="text-[#F8D216]  text-[18px] leading-none">➜</span>
                    <span>
                      Diagnosed with lymphoma or immune-related conditions after Dupixent use
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                                       <span className=" text-[#F8D216] text-[14px] leading-none">➜</span>

                    <span>
                      Used Dupixent at any point, including short-term or long-term treatment
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                                       <span className=" text-[#F8D216] text-[14px] leading-none">➜</span>

                    <span>
                      Filing deadlines may apply; check eligibility now before time runs out
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== RIGHT FORM ===== */}
            <div className="pt-10 pb-4 flex justify-center">
              <div className=" bg-white text-[#162766] rounded-xl shadow-xl overflow-hidden w-full  max-w-[720px]">
                <div className="w-full h-[4px] bg-[#F8D216]" />

                <div className=" px-6 py-6">
                  <h2 className="      font-lato
    text-[30px]
    font-extrabold
    leading-[27.5px]
    text-center
    text-[#162766]
    mb-4


">
                    Get Your Free Case Review Today
                  </h2>

                  <form onSubmit={handleDesktopSubmit} className="space-y-4">
                    <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
                    <input type="hidden" id="xxTrustedFormCertToken" name="xxTrustedFormCertToken" />
                    <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" />
                    <div className="flex flex-col gap-1">
                      <label className="      font-lato
    text-[#191B37]
    font-normal

    text-[15.8px]
    leading-[28px]
">Full Name</label>
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
                        className={` w-full border rounded-md px-3 py-2 
text-[14px]
sm:text-[15px]
md:text-[15px]
lg:text-[16px]
 ${desktopTouched.fullName && desktopErrors.fullName
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
  <label className="      font-lato
    text-[#191B37]
    font-normal

    text-[15.8px]
    leading-[28px]
">
    Phone Number
  </label>

  <div className={`
    flex items-center
    border rounded-md
    px-3 py-2
    transition
    ${desktopTouched.phone && desktopErrors.phone
      ? "border-red-500 focus-within:border-red-500"
      : "border-[#D7DBEA] focus-within:border-[#162766]"
    }
  `}>

    {/* Country Prefix */}
    <span className="
      flex items-center
      gap-1
      text-[13px]
      font-medium
      text-[#162766]
      pr-2
      border-r
      border-[#E5E7EB]
      mr-2
    ">
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

        const rawDigits =
          e.target.value.replace(/\D/g, "");

        const formatted =
          formatPhoneInput(rawDigits);

        const nextFormData = {
          ...desktopFormData,
          phone: formatted,
        };

        setDesktopFormData(nextFormData);

        const currentLeadId =
          await triggerEarlyLeadIfEligible(
            nextFormData
          );

        if (currentLeadId) {
          await syncEmailUpdateIfEligible(
            nextFormData,
            currentLeadId
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
                        <label className="      font-lato
    text-[#191B37]
    font-normal

    text-[15.8px]
    leading-[28px]
">Email</label>
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

                            const currentLeadId = (await triggerEarlyLeadIfEligible(nextFormData)) || leadId;
                            if (currentLeadId) {
                              await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                            }
                          }}
                          className={` w-full border rounded-md px-3 py-2 
text-[14px]
sm:text-[15px]
md:text-[15px]
lg:text-[16px]
 ${desktopTouched.email && desktopErrors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#D7DBEA]"
                            }`}
                        />
                        {desktopTouched.email && desktopErrors.email && (
                          <span className="text-[11px] text-red-500">{desktopErrors.email}</span>
                        )}
                      </div>
                    </div>

                    {[
                      { q: "Q1. Were you or your loved one been diagnosed with Cutaneous T-Cell Lymphoma (CTCL)?", name: "q1" },
                      {
                        q: "Q2. Did you or your loved ones CTCL diagnosis come AFTER you started taking Dupixent?",
                        name: "q2",
                      },
                      {
                        q: "Q3. Are you currently represented by an attorney for this claim?",
                        name: "q3",
                      },
                    ].map(({ q, name }) => (
                      <div key={name} className="space-y-1">
                        <p className="  font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
">{q}</p>
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
                                  setDesktopFormData({ ...desktopFormData, [name]: e.target.value });
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
                              <span className=" text-[14px]
sm:text-[15px]
md:text-[15px]
lg:text-[16px]
font-medium
">{opt}</span>
                            </label>
                          ))}
                        </div>
                        {desktopTouched[name] && desktopErrors[name] && (
                          <span className="text-[11px] text-red-500">{desktopErrors[name]}</span>
                        )}
                      </div>
                    ))}

                    <div>
                      <label className=" flex items-start gap-2
    font-lato
    text-[11px]
    leading-[15px]
    text-[#4E5069]
    font-normal">
                        <input
                          type="checkbox"
                          checked={desktopFormData.consent}
                          onChange={(e) => {
                            setDesktopFormData({ ...desktopFormData, consent: e.target.checked });
                          }}
                          className="mt-[2px] accent-[#162766]"
                        />
                        <span>
                          I agree to the <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                            Privacy Policy
                          </a>{' '} and{" "}
                          <a href="/Disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                            Disclaimer
                          </a>{' '} and give my express written
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
    rounded-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== UNDERSTANDING SECTION ===== */}
        <section className="w-full bg-white pt-[60px] pb-[60px]">
          <div className=" max-w-[1400px]
  mx-auto
  px-10
  font-jakarta
  text-[#162766]
">

            {/* ===== SECTION 1 ===== */}
            <h2 className="text-[24px] leading-[34px] font-[Quicksand] font-bold mb-3">
              Dupixent Lawsuit Claims: What You May Be Entitled To
            </h2>

            <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

            <p className="text-[16px] font-[Quicksand] leading-[28px] text-[#162766] mb-5 max-w-[820px]">
              If you qualify for a Dupixent lawsuit, your claim may seek compensation for the real-life impact of your diagnosis: financial, physical, and emotional. Many cases involving Dupixent lymphoma lawsuit claims commonly include:
            </p>

            <div className="space-y-4 leading-[28px] font-[Quicksand] text-[16px] font-normal text-[#162766] mb-12">

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Medical expenses (diagnosis, oncology care, medications, follow-ups)
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Hospitalization and treatment-related costs
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Lost wages or reduced earning ability
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Pain, suffering, and long-term health complications
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Out-of-pocket expenses (travel, therapy, ongoing care)
                </p>
              </div>

            </div>

            {/* ===== SECTION 2 ===== */}
            <h3 className="text-[24px] leading-[34px] font-[Quicksand] font-bold mb-3">
              Dupixent Lawsuit Claims Focus on What Patients Were Told
            </h3>

            <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

            <div className="space-y-6 text-[16px] font-[Quicksand] leading-[1.7] text-[#162766] max-w-[820px] mb-12">

              <div className="flex gap-3">
                <span className="text-[18px] leading-[1.7] shrink-0">•</span>
                <p>
                  Many patients say they used Dupixent without being clearly warned about a possible connection to serious complications, including Dupixent T-cell lymphoma and other immune-related conditions.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[1.7] shrink-0">•</span>
                <p>
                  Legal reviews look closely at what patients were told before and during treatment, including whether safety warnings fully addressed the risk of Dupixent side effects cancer and other long-term health concerns.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[1.7] shrink-0">•</span>
                <p>
                  Eligibility may also depend on medical history, timing, and documented Dupixent use. Your diagnosis must typically come after treatment, with records supporting a possible link between Dupixent and the condition.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[1.7] shrink-0">•</span>
                <p>
                  Filing deadlines vary by state, but a quick confidential case review can help confirm whether you may qualify to pursue a Dupixent lawsuit before time runs out.
                </p>
              </div>

            </div>

            {/* ===== SECTION 3 ===== */}
            <h3 className="text-[24px] font-[Quicksand] font-semibold mb-3">
              Symptoms Linked to Dupixent-Related Complications
            </h3>

            <p className="text-[16px] font-[Quicksand] leading-[28px] text-[#162766] mb-4">
              If you’ve used Dupixent, it’s important to recognize symptoms that may indicate serious underlying conditions, including lymphoma. <strong>Common warning signs may include:</strong>
            </p>

            <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

            <div className="space-y-5 font-normal leading-[28px] font-[Quicksand] text-[16px] text-[#162766]">

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Persistent swelling of lymph nodes
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Unexplained weight loss or fatigue
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Skin rashes or worsening skin conditions
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Night sweats or fever without infection
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>
                  Changes in immune response or recurring illness
                </p>
              </div>

            </div>

          </div>
        </section>




        {/*FAQ LONG */}
        <section className="w-full bg-[#FFFFFF] font-[Quicksand]  pb-[60px] ">
          <div className=" max-w-[1400px] mx-auto md:px-[32px] xl:px-0">

            {/* HEADING */}
            <h2 className="text-[#162766] font-[Quicksand] text-[40px] leading-[40px] font-semibold mb-[32px]">
              Frequently Asked Questions
            </h2>

            {/* FAQ LIST */}
            <div className="flex flex-col gap-[16px]">

              {[
                {
                  question: "How do I know if my diagnosis is serious enough to take legal action?",
                  answer:
                    "If your condition requires medical treatment, impacts your daily life, or has led to long-term health issues, it may be worth exploring a Dupixent lawsuit.",
                },
                {
                  question: "What if my doctor never mentioned any serious risks?",
                  answer:
                    "Many patients share this concern. If you were not clearly informed about potential complications, it may be relevant to your case.",
                },
                {
                  question: "Can I still qualify if I used Dupixent for eczema or asthma?",
                  answer:
                    "Yes, Dupixent is commonly prescribed for multiple conditions, and eligibility is based on your diagnosis after use, not the original condition it was prescribed for.",
                },
                {
                  question: "What if my symptoms started gradually and not immediately?",
                  answer:
                    "That’s common. Some conditions linked to Dupixent side effects may develop over time, making delayed symptoms important in legal evaluations.",
                },
                {
                  question: "Do I need proof that Dupixent directly caused my illness?",
                  answer:
                    "You don’t need to prove it on your own. Legal teams review your medical records and history to assess whether a connection may exist.",
                },
                {
                  question: "What if I was using other medications along with Dupixent?",
                  answer:
                    "That doesn’t automatically disqualify you. Each case is reviewed individually to understand all possible contributing factors.",
                },
                {
                  question: "Can I file a claim if I’m still undergoing treatment?",
                  answer:
                    "Yes, many people begin the process while continuing treatment. In fact, ongoing care can help document the extent of your condition.",
                },
                {
                  question: "Will filing a lawsuit affect my current medical care?",
                  answer:
                    "No, pursuing a legal claim does not interfere with your treatment or relationship with your healthcare provider.",
                },
                {
                  question: "What if I’m unsure about the exact dates of my Dupixent use?",
                  answer:
                    "That’s okay. Prescription records and pharmacy data can often help reconstruct your treatment timeline.",
                },
                {
                  question: "Is it too early to take action if investigations are still ongoing?",
                  answer:
                    "Not necessarily. Early action can help preserve your rights, especially since filing deadlines may apply depending on your state.",
                },
              ].map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-[7.5px] border ${isOpen
                        ? "bg-[#F3F4F9] border-transparent"
                        : "bg-transparent border-[#0A1F8F33]"
                      }`}
                  >
                    {/* QUESTION */}
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                      className="w-full flex justify-between items-center px-[20px] py-[18px] text-left"
                    >
                      <span className="text-[#162766] text-[24px] leading-[24px] font-semibold">
                        {faq.question}
                      </span>

                      <img
                        src={isOpen ? collapse : expand}
                        alt="toggle"
                        className="w-[18px] h-[18px] flex-shrink-0"
                      />
                    </button>

                    {/* ANSWER */}
                    {isOpen && (
                      <div className="px-[20px] pb-[20px]">
                        <p className="text-[#757575] text-[20px] font-[lato] leading-[20px] font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        </section>


        {/* ===== FOOTER ===== */}
        <section className="w-full bg-[#0E1C48] py-10">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="font-lato
    text-white
    text-center
    text-[41px]
    font-bold
    leading-[48px]
">
              Ready to Start Your Dupixent Lawsuit Claim?
            </h2>

            <div className="w-[44px] h-[3px] bg-[#F4C430] mt-4 mb-6" />

            <p className="font-lato
    text-white
    text-center
    text-[41px]
    font-normal
    leading-[48px]
    mb-8
">
              Start with a free, confidential case review today
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
      <div
        className=" lg:hidden w-full"
        style={{
          backgroundImage: `url(${mobileHeroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        {/* ===== MOBILE HEADER ===== */}
        <div className="flex items-center justify-between px-4 py-3 bg-white">
          <img src={logo} alt="Connect2Attorney" className="h-7" />

          {/* <a
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
                <svg
                width="14"
                height="14"
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
                    fill="#162766"
                />
                </svg>
            </span>
            Call Now
            </a> */}
        </div>

        {/* ===== MOBILE HERO TEXT ===== */}
        <div className="px-4 pt-12 pb-16 text-white">
          <h1 className="text-[20px] leading-[30px] font-[Quicksand] font-bold mb-4">
            Dupixent Lawsuit: What to Know Before  {"  "}{"  "}
            <span className="bg-[#162766] text-[#F8D216] ml-1 px-2 py-2 leading-none rounded-md inline-block">
              Filing a Claim
            </span>
          </h1>


        </div>
      </div>


       {/* ===== MOBILE FORM ===== */}
      <div className=" lg:hidden bg-white   -mt-6 pb-10">
        <div className="bg-white rounded-[16px]  overflow-hidden px-4 py-6">

          <h2 className="font-lato
    text-[#162766]
    text-center
    text-[22px]
    font-extrabold
    leading-[32px]
    mb-4
">
            Get Your Free Case Review Today
          </h2>

          <form onSubmit={handleMobileSubmit} className="space-y-4">
            <input type="hidden" id="xxTrustedFormCertUrl_mobile" name="xxTrustedFormCertUrl" />
            <input type="hidden" id="xxTrustedFormCertToken_mobile" name="xxTrustedFormCertToken" />
            <input type="hidden" id="xxTrustedFormPingUrl_mobile" name="xxTrustedFormPingUrl" />
            <div>
              <label className=" font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
">Full name</label>
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
                className={`mt-1 w-full border rounded-md px-3 py-2 text-[14px] ${mobileTouched.fullName && mobileErrors.fullName
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
              <label className=" font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
">
                Phone Number
              </label>
              <div className="mt-1 flex items-center border rounded-md px-3 py-2 border-[#D7DBEA] focus-within:border-[#162766] focus-within:ring-2 focus-within:ring-[#162766]/20">

  {/* +1 Prefix */}
  <span className="
    flex items-center
    text-[14px]
    font-semibold
    text-[#162766]
    pr-2
    border-r
    border-[#E5E7EB]
    mr-2
  ">
    +1
  </span>

  {/* Phone Input */}
  <input
    type="text"
    placeholder="(555) 123-4567"

    value={mobileFormData.phone.replace("+1 ", "")}

    inputMode="numeric"
    autoComplete="tel"

    onChange={async (e) => {

      const rawDigits =
        e.target.value.replace(/\D/g, "");

      const formatted =
        formatPhoneInput(rawDigits);

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
          currentLeadId
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
              <label className=" font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
">Email</label>
              <input
                type="email"
                value={mobileFormData.email}
                onChange={async (e) => {
                  const nextFormData = {
                    ...mobileFormData,
                    email: e.target.value,
                  };

                  setMobileFormData(nextFormData);

                  const currentLeadId = (await triggerEarlyLeadIfEligible(nextFormData)) || leadId;
                  if (currentLeadId) {
                    await syncEmailUpdateIfEligible(nextFormData, currentLeadId);
                  }
                }}
                className={`mt-1 w-full border rounded-md px-3 py-2 text-[14px] ${mobileTouched.email && mobileErrors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#D7DBEA]"
                  }`}
                placeholder="e.g. john.smith@mail.com"
              />
              {mobileTouched.email && mobileErrors.email && (
                <span className="text-[11px] text-red-500">{mobileErrors.email}</span>
              )}
            </div>

            {[
              "Were you or your loved one been diagnosed with Cutaneous T-Cell Lymphoma (CTCL)?",
              "Did you or your loved ones CTCL diagnosis come AFTER you started taking Dupixent?",
              "Are you currently represented by an attorney for this claim?",
            ].map((q, i) => (
              <div key={i}>
                <p className="  font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
 mb-2">
               <span className="font-bold">Q {i + 1}. </span>{q}
                </p>
                <div className="flex gap-3">
                  {["Yes", "No"].map((opt) => (
                    <label
                      key={opt}
                      className="flex-1 flex items-center gap-2 px-3 py-2 border rounded-md border-[#D7DBEA] cursor-pointer has-[:checked]:bg-[#E1E4F0]"
                    >
                      <input
                        type="radio"
                        name={`mq${i}`}
                        value={opt}
                        checked={mobileFormData[`q${i + 1}`] === opt}
                        onChange={(e) => {
                          setMobileFormData({ ...mobileFormData, [`q${i + 1}`]: e.target.value });
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
                {mobileTouched[`q${i + 1}`] && mobileErrors[`q${i + 1}`] && (
                  <span className="text-[11px] text-red-500">{mobileErrors[`q${i + 1}`]}</span>
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
                    setMobileFormData({ ...mobileFormData, consent: e.target.checked });
                  }}
                  className="mt-0.5 accent-[#162766]"
                />
                <span>
                  I agree to the <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                    Privacy Policy
                  </a>{' '} and{" "}
                  <a href="/Disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 font-bold">
                    Disclaimer
                  </a>{' '} and give my express written
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
 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
          </form>
        </div>
      </div>

      {/* ================= MOBILE UNDERSTANDING DEPO ================= */}
      <div className=" lg:hidden w-full bg-[#162766]">
        <div className=" max-w-[720px] px-4 py-10 text-white font-jakarta">
          <p className="text-[16px] font-[Quicksand] leading-[28px] text-white/90 mb-6">
            If you or a loved one developed serious health complications after using Dupixent, you may have legal options. A quick case review can help determine whether your condition may be connected and whether you may be eligible for Dupixent compensation.
          </p>

          <ul className="space-y-7 font-normal text-[16px] leading-[28px] font-[Quicksand]">
            <li className="flex items-start gap-3">
                                 <span className=" text-[#F8D216] text-[14px] leading-none">➜</span>

              <span>
                Diagnosed with lymphoma or immune-related conditions after Dupixent use
              </span>
            </li>

            <li className="flex items-start gap-3">
                                 <span className=" text-[#F8D216] text-[14px] leading-none">➜</span>

              <span>
                Used Dupixent at any point, including short-term or long-term treatment
              </span>
            </li>

            <li className="flex items-start gap-3">
                                 <span className=" text-[#F8D216] text-[14px] leading-none">➜</span>

              <span>
                Filing deadlines may apply; check eligibility now before time runs out
              </span>
            </li>
          </ul>
        </div>
      </div>



      {/* ================= MOBILE ELABORATION ================= */}
      <section className=" lg:hidden w-full bg-white py-10">
        <div className="px-4 font-jakarta text-[#162766]">

          {/* ===== SECTION 1 ===== */}
          <h2 className="text-[24px] leading-[32px] font-[Quicksand] font-bold mb-2">
            Dupixent Lawsuit Claims: What You May Be Entitled To
          </h2>

          <div className="w-full h-0.5 bg-[#e7e9ec] mb-4" />

          <p className="text-[16px] font-normal font-[Quicksand] leading-[28px] text-[#162766] mb-4">
            If you qualify for a Dupixent lawsuit, your claim may seek compensation for the real-life impact of your diagnosis: financial, physical, and emotional. Many cases involving Dupixent lymphoma lawsuit claims commonly include:
          </p>

          <div className="space-y-5 font-normal font-[Quicksand] leading-[28px] text-[16px] mb-8">

            {[
              "Medical expenses (diagnosis, oncology care, medications, follow-ups)",
              "Hospitalization and treatment-related costs",
              "Lost wages or reduced earning ability",
              "Pain, suffering, and long-term health complications",
              "Out-of-pocket expenses (travel, therapy, ongoing care)",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>{item}</p>
              </div>
            ))}

          </div>

          {/* ===== SECTION 2 ===== */}
          <h3 className="text-[22px] leading-[32px] font-[Quicksand] font-bold mb-4">
            Dupixent Lawsuit Claims Focus on What Patients Were Told
          </h3>

          <div className="w-full h-px bg-[#E6E9F2] mb-3" />

          <div className="space-y-5 font-normal font-[Quicksand] leading-[28px] text-[16px] mb-8">

            {[
              "Many patients say they used Dupixent without being clearly warned about a possible connection to serious complications, including Dupixent T-cell lymphoma and other immune-related conditions.",
              "Legal reviews look closely at what patients were told before and during treatment, including whether safety warnings fully addressed the risk of Dupixent side effects cancer and other long-term health concerns.",
              "Eligibility may also depend on medical history, timing, and documented Dupixent use. Your diagnosis must typically come after treatment, with records supporting a possible link between Dupixent and the condition.",
              "Filing deadlines vary by state, but a quick confidential case review can help confirm whether you may qualify to pursue a Dupixent lawsuit before time runs out.",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>{item}</p>
              </div>
            ))}

          </div>

          {/* ===== SECTION 3 ===== */}
          <h3 className="text-[22px] leading-[32px] font-[Quicksand] font-bold mb-4">
            Symptoms Linked to Dupixent-Related Complications
          </h3>

          <p className="text-[16px] leading-[28px] font-[Quicksand] text-[#162766] mb-3">
            If you’ve used Dupixent, it’s important to recognize symptoms that may indicate serious underlying conditions, including lymphoma. <strong>Common warning signs may include: </strong>
          </p>

          <div className="w-full h-px bg-[#E6E9F2] mb-3" />

          <div className="space-y-4 font-normal leading-[28px] font-[Quicksand] text-[16px]">

            {[
              "Persistent or worsening headaches",
              "Vision changes",
              "Seizures",
              "Memory or concentration issues",
              "Balance problems or dizziness",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-[18px] leading-[28px] shrink-0">•</span>
                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>



      <section className="w-full bg-[#FFFFFF] py-[60px] font-[QuickSand] block  lg:hidden md:py-[10px]">
        <div className=" max-w-[1400px] mx-auto px-[16px] md:px-0">

          {/* HEADING */}
          <h2 className="
            text-[#162766]
            font-semibold
            text-[28px] leading-[28px]
            md:text-[40px] md:leading-[40px]
            mb-[24px] md:mb-[32px]
          ">
            Frequently Asked Questions
          </h2>

          {/* FAQ LIST */}
          <div className="flex flex-col gap-[12px] md:gap-[16px]">

            {[
              {
                question: "How do I know if my diagnosis is serious enough to take legal action?",
                answer:
                  "If your condition requires medical treatment, impacts your daily life, or has led to long-term health issues, it may be worth exploring a Dupixent lawsuit.",
              },
              {
                question: "What if my doctor never mentioned any serious risks?",
                answer:
                  "Many patients share this concern. If you were not clearly informed about potential complications, it may be relevant to your case.",
              },
              {
                question: "Can I still qualify if I used Dupixent for eczema or asthma?",
                answer:
                  "Yes, Dupixent is commonly prescribed for multiple conditions, and eligibility is based on your diagnosis after use, not the original condition it was prescribed for.",
              },
              {
                question: "What if my symptoms started gradually and not immediately?",
                answer:
                  "That’s common. Some conditions linked to Dupixent side effects may develop over time, making delayed symptoms important in legal evaluations.",
              },
              {
                question: "Do I need proof that Dupixent directly caused my illness?",
                answer:
                  "You don’t need to prove it on your own. Legal teams review your medical records and history to assess whether a connection may exist.",
              },
              {
                question: "What if I was using other medications along with Dupixent?",
                answer:
                  "That doesn’t automatically disqualify you. Each case is reviewed individually to understand all possible contributing factors.",
              },
              {
                question: "Can I file a claim if I’m still undergoing treatment?",
                answer:
                  "Yes, many people begin the process while continuing treatment. In fact, ongoing care can help document the extent of your condition.",
              },
              {
                question: "Will filing a lawsuit affect my current medical care?",
                answer:
                  "No, pursuing a legal claim does not interfere with your treatment or relationship with your healthcare provider.",
              },
              {
                question: "What if I’m unsure about the exact dates of my Dupixent use?",
                answer:
                  "That’s okay. Prescription records and pharmacy data can often help reconstruct your treatment timeline.",
              },
              {
                question: "Is it too early to take action if investigations are still ongoing?",
                answer:
                  "Not necessarily. Early action can help preserve your rights, especially since filing deadlines may apply depending on your state.",
              },
            ].map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-[7.5px] border ${isOpen
                      ? "bg-[#F3F4F9] border-transparent"
                      : "bg-transparent border-[#0A1F8F33]"
                    }`}
                >
                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="
                      w-full flex justify-between items-center text-left
                      px-[16px] md:px-[20px]
                      py-[14px] md:py-[18px]
                    "
                  >
                    <span className="
                      text-[#162766]
                      font-semibold
                      text-[18px] leading-[18px]
                      md:text-[24px] md:leading-[24px]
                      pr-[10px]
                    ">
                      {faq.question}
                    </span>

                    {/* ICON */}
                    <img
                      src={isOpen ? collapse : expand}
                      alt="toggle"
                      className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] flex-shrink-0"
                    />
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div className="
                      px-[16px] md:px-[20px]
                      pb-[16px] md:pb-[20px]
                    ">
                      <p className="
                        text-[#757575]
                        font-medium
                        text-[16px] leading-[20px]
                        md:text-[20px] md:leading-[20px]
                      ">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>



      {/* ================= MOBILE FOOTER CTA ================= */}
      <section className=" lg:hidden w-full bg-[#0E1C48] py-10">
        <div className="px-5 text-center">
          <h2 className="text-[28px] leading-[32px] font-normal text-white mb-3">
            Ready to Start Your Dupixent Lawsuit Claim?
          </h2>

          <div className="w-[32px] h-[2px] bg-[#F8D216] mx-auto mb-4" />

          <p className="text-[17.9px] font-[Quicksand] leading-[32px] text-white/90 mb-7">
            Start with a free, confidential case review today
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              w-full
              h-[46px]
              bg-[#F9D51C]
              text-[#0E1E4D]
              text-[16px]
              font-medium
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

export default DupixentLawsuitC;