'use client'
import React, { useState, useEffect, useRef } from "react";

const logo = "/Footerlogo.svg";
const tylogo  = "/logotitle.svg";
const successIcon = "/Form/success.png";
const tyBuildings = "/Form/tybuildings.png";
const tyBuildingsMobile = "/Form/tybuildingsmobile.png";
const bgC = "/Form/bghair.png";
const womanLawyerC = "/Form/womanlawyerc.png";
const symptomsarentsmall = "/Form/symptomsarentsmall.png";
const dollarbag = "/Form/dollarbag.png";
const statistics = "/Form/statistics.png";
const faqArrow = "/Form/faqarrow.svg";
const faqArrowD = "/Form/faqarrowdown.svg";
const hairC = "/Form/hairrelaxerc.png";
import { HairRelaxerLawsuitSendAdminEmail, HairRelaxerLawsuitSendUserEmail } from '../emailService2';
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
 * DepoProveraLawsuit Component with Full Backend Integration
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
        <img src={tylogo} alt="  Connect to Attorney" className="h-9" />
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
        <img src={tylogo} className="h-8" />
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

const HairRelaxerLawsuitC = () => {
  // Meta Pixel ID
  const META_PIXEL_ID = "1217490687212410"; //1438362637700504 input pixel id 
  
  // Refs for tracking
  const adTrackingRef = useRef({
    gclid: null,
    gbraid: null,
    wbraid: null,
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [faqOpen, setFaqOpen] = useState({
  fee: true,
  records: false,
  support: false,
});
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
const toggleFaq = (key) =>
  setFaqOpen((prev) => ({ ...prev, [key]: !prev[key] }));


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
      websiteName: "  Connect to Attorney",
      formPath: "/hair-relaxer-lawsuit-c",
      vertical: LEAD_GENERATION_VERTICALS.HAIR_RELAXER,
      formname: "Hair Relaxer Lawsuit Lander C",
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
      websiteName: "  Connect to Attorney",
      formname: "Hair Relaxer Lawsuit Lander C",
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
        websiteName: "  Connect to Attorney",
formname: "Hair Relaxer Lawsuit Lander C",
                finalSubmit: true,
        deleteFromWebsiteLogs:true,
        vertical: LEAD_GENERATION_VERTICALS.HAIR_RELAXER,
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
  //         websiteName: '  Connect to Attorney',
  //         vertical: 'Hair Relaxer Lawsuit',
  //         formPath: '/hair-relaxer-lawsuit-c',
  //         formname: 'Hair Relaxer Lawsuit lander C',
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
  //           injuryType: "Hair relaxer based",
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
        countryName: 'USA',
        brandType: "Internal",
        brandName: 'Project 6',
        websiteName: '  Connect to Attorney',
        vertical: LEAD_GENERATION_VERTICALS.HAIR_RELAXER,
        formPath: '/hair-relaxer-lawsuit-c',
        formname: 'Hair Relaxer Lawsuit Form C',
        data: {
          submissionDate: new Date().toLocaleString(),
          fullName: payload.fullName,
          firstName: payload.fullName.split(' ')[0] || '',
          lastName: payload.fullName.split(' ').slice(1).join(' ') || '',
          phone: payload.phone,
          email: payload.email,
          consentGiven: payload.consent,
          hasDiagnosis: payload.q1,
          hasUsedHairRelaxer: payload.q2,
          hasAttorney: payload.q3,
          timezone,
          usTimezone,
          submittedAtUTC,
          injuryType: "Hair Relaxer based Cancer",
          trustedFormCertUrl: payload.certId,
          trustedFormPingUrl: payload.pingUrl,
          trustedFormToken: payload.tokenUrl,
          ip_address: ipAddress,
          pageUrl: getSourceUrl(),
          gclid: payload.gclid,
          gbraid: payload.gbraid,
          wbraid: payload.wbraid,
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
             const currentLeadId = await ensureLeadForForm(mobileFormData);
        if (!currentLeadId) return;

        await submitFinalLead({ currentLeadId, payload });
        await sendToRetellCRM({ payload });
        
        Promise.all([
          HairRelaxerLawsuitSendAdminEmail({ formData: payload }),
          HairRelaxerLawsuitSendUserEmail({ formData: payload })
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
             const currentLeadId = await ensureLeadForForm(desktopFormData);
        if (!currentLeadId) return;

        await submitFinalLead({ currentLeadId, payload });
        await sendToRetellCRM({ payload });
        
        Promise.all([
          HairRelaxerLawsuitSendAdminEmail({ formData: payload }),
          HairRelaxerLawsuitSendUserEmail({ formData: payload })
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
        <header className="w-full bg-[#162766]  ">
       <div className="mx-auto px-20 py-3 flex items-center justify-between">
            <img
  src={logo}
  alt="Connect to Attorney"
  className="w-[215.833px] h-[25px] object-contain"
/>

             <a
                href="tel:18882021350"
                className="
                    flex items-center gap-3
                    bg-[#F8D216]
                    text-[#162766]
                    px-3 py-2
                    rounded-[8px]
                    font-semibold
                    shadow-sm
                    hover:bg-[#E5C414]
                    transition-colors
                    
                "
                >
                <span
                    className="
                    flex items-center justify-center
                    w-6 h-6
                    bg-[#162766]
                    rounded-[10px]
                    "
                >
                    <svg
                    width="18"
                    height="18"
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
                        fill="#F8D216"
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
            className="w-full overflow-hidden min-h-[62vh]"
            style={{
                backgroundImage: `url(${bgC})`, // ← use your attached image import
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
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
            <div className="pt-0 pb-5 mt-20 text-white flex justify-center">

              <div className="text-lefttext-left">
 <h1
  className="
    font-lato
    text-[#F8F9FA]
    text-[36px]
    sm:text-[40px]
    md:text-[46px]
    lg:text-[50px]
    xl:text-[53.9px]
    leading-[44px]
    sm:leading-[50px]
    md:leading-[56px]
    lg:leading-[60px]
    xl:leading-[64.83px]
    mb-4
    [text-shadow:5px_5px_20px_rgba(0,0,0,0.40)]
  "
>                  <span className="font-normal">Hair Relaxer Cancer <br /> Lawsuit:</span>
                  
                    <span className="font-semibold"> See If You <br /> Qualify</span>
                </h1>

                <p
  className="
    max-w-[420px]
    font-lato
    text-[#F8F9FA]
    text-[16px]
    sm:text-[18px]
    md:text-[20px]
    lg:text-[22px]
    xl:text-[24px]
    leading-[24px]
    sm:leading-[28px]
    md:leading-[30px]
    lg:leading-[33px]
    xl:leading-[36px]
    font-normal
    mb-4
    [text-shadow:5px_5px_20px_rgba(0,0,0,0.40)]
  "
>
                  If you’re a woman with naturally textured/curly hair & used chemical hair relaxers for years, then later developed uterine cancer, ovarian cancer, or endometrial cancer (diagnosed 2010 or later), you may qualify for compensation. Time limits apply; check eligibility now.  
                </p>

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
 ${
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
 ${
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

                    {/* Q1 - Dropdown */}
                    <div className="space-y-1">
                      <label className="  font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
">
                <span className="font-bold">        Q1. </span> Have you been diagnosed with any of the following?
                      </label>
                      <select
                        value={desktopFormData.q1}
                        onChange={(e) =>
                          setDesktopFormData({ ...desktopFormData, q1: e.target.value })
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
                        <option value="Endometrial cancer">Endometrial cancer</option>
                        <option value="Other">Other</option>
                      </select>
                      {desktopTouched.q1 && desktopErrors.q1 && (
                        <span className="text-[11px] text-red-500">{desktopErrors.q1}</span>
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
        <section className="relative w-full min-h-[520px] pt-10 overflow-hidden">
          {/* ===== RIGHT HALF IMAGE (FULL HEIGHT) ===== */}

          {/* ===== RIGHT HALF IMAGE (FIXED SIZE) ===== */}
          <div className="absolute top-0 right-0 h-full w-1/2 flex items-start justify-start bg-[#EBEEFF]">
            <img
              src={womanLawyerC}
              alt="Woman Lawyer"
              className="
      w-[652px]
      h-full
      aspect-[163/160]
      object-cover
    "
            />
          </div>

          {/* ===== LEFT HALF BACKGROUND ===== */}
          <div className="absolute top-0 left-0 h-full w-1/2 bg-[#EBEEFF] " />

          {/* ===== CONTENT LAYER ===== */}
          <div className="relative max-w-[1400px] mx-auto px-10 h-full">
            <div className="grid grid-cols-2 h-full items-center">
              {/* LEFT CONTENT */}
              <div className="max-w-[640px] text-[#162766] pb-10">
                <h2 className="text-[#162766] font-lato text-[40px] font-normal leading-[57.6px] mb-4">
                                      A beauty routine shouldn't <br />come with a 
{" "}
                  <span className="font-bold">cancer diagnosis.</span>
                </h2>
                <div className="pr-10">
                  <p className="text-[#162766] font-lato text-[24px] font-medium leading-[36px] mb-4 max-w-[640px]">
                                        For many women, chemical relaxers were more than a product; they were part of a long-term routine, often starting at a young age. But lawsuits allege that certain hair relaxers may have exposed users to harmful chemicals, including formaldehyde or phthalates, and that long-term use may be linked to uterine, ovarian, and endometrial cancers.  

                  </p>

                  <p className="font-lato text-[#162766] text-[16px] font-normal leading-[24px] mb-4 max-w-[420px]">
                                        If you’ve been diagnosed, you shouldn’t have to guess whether your history qualifies. Our screening is built around strict criteria, so you can quickly learn whether you may have a case.  

                  </p>

                  <p className="font-roboto text-[#162766] text-[16px] font-bold leading-[24px]">
                    If your diagnosis changed your life, a quick eligibility check can protect your options. 
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN IS EMPTY BY DESIGN */}
              <div />
            </div>
          </div>

          {/* ===== CTA OVER IMAGE ===== */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
                absolute
                bottom-0
                right-0
                bg-[#1B2B6B]
                text-white
                text-[14px]
                font-semibold
                px-6
                py-3
                rounded-tl-md
                hover:bg-[#162766]
                transition-colors
                "
          >
            See If You Qualify
          </button>
        </section>


        {/* ===== 3 CARDS SECTION ===== */}
        <section className="w-full bg-white">
            {/* ===== YELLOW TOP LINE ===== */}
            <div className="w-full h-[8px] bg-[#F8D216]" />

            {/* ===== CONTENT ===== */}
            <div className="py-16">
                <div className="max-w-[1200px] mx-auto px-10">
                <div className="grid grid-cols-3 gap-8">

                    {/* CARD 1 */}
                    <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                    <div className="bg-[#162766] px-6 py-8 min-h-[130px] flex items-center justify-between">

                        <h3 className="font-lato text-[#FFF] text-[24px] font-bold leading-[36px]">
                        IT WAS "NORMAL" <br /> UNTIL IT WASN'T
                        </h3>
                        <img src={symptomsarentsmall} alt="" className="w-12 h-12" />
                    </div>

                    <div className="px-6 py-6 font-lato text-[#162766] text-[16px] font-normal leading-[24px]">
                       Many women used relaxers for years without being warned about long-term risk. A cancer diagnosis can bring fear, confusion, and a flood of questions.
                    </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                    <div className="bg-[#162766] px-6 py-8 min-h-[130px] flex items-center justify-between">
                        <h3 className="font-lato text-[#FFF] text-[24px] font-bold leading-[36px]">
                        TREATMENT GETS <br /> EXPENSIVE FAST
                        </h3>
                        <img src={dollarbag} alt="" className="w-12 h-12" />
                    </div>

                    <div className="px-6 py-6 font-lato text-[#162766] text-[16px] font-normal leading-[24px]">
                        Surgeries, chemo, follow-ups, missed work, and long-term care can add up quickly. Compensation may help reduce the burden you didn’t choose.  
                    </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                    <div className="bg-[#1B2B6B] px-6 py-8 min-h-[130px] flex items-center justify-between">
                        <h3 className="font-lato text-[#FFF] text-[24px] font-bold leading-[36px]">
                        QUALIFYING <br /> RULES ARE STRICT
                        </h3>
                        <img src={symptomsarentsmall} alt="" className="w-12 h-12" />
                    </div>

                    <div className="px-6 py-6 font-lato text-[#162766] text-[16px] font-normal leading-[24px]">
                        Many cases require specific factors, such as diagnosis year, age, usage history, and product brand. A fast screening helps confirm if you meet the criteria.
                    </div>
                    </div>

                </div>
                </div>
            </div>
        </section>


        {/* ===== Chart section ===== */}
        <section className="relative w-full bg-white pb-24 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-10">
                <div className="grid grid-cols-2 gap-20 items-center">
                
                {/* ===== LEFT IMAGE ===== */}
                <div className="flex justify-center">
                    <img
                    src={statistics}
                    alt="Depo-Provera Statistics"
                    className="max-w-[360px] w-full h-auto"
                    />
                </div>

                {/* ===== RIGHT CONTENT ===== */}
                <div className="text-[#162766]">
                    <h2 className="font-lato text-[#162766] text-[24px] font-bold leading-[36px] mb-5">

                    Qualifying Criteria for Hair Relaxer Cancer Lawsuits 
                    </h2>

                     <ul className="space-y-4 font-lato text-[#162766] text-[16px] font-normal leading-[24px] list-disc pl-5  max-w-[720px]">                    <li>
                        You are someone with naturally textured or curly hair  
                    </li>
                    <li>
                        Diagnosed 2010 or later with uterine, ovarian, or endometrial cancer  
                    </li>
                    <li>
                        Used hair relaxers at least 4 continuous years before diagnosis 
                    </li>
                    <li>
                        Used relaxers 4+ times per year during your highest-use period  
                    </li>
                    <li>
                        Diagnosis occurred within 10 years of your last relaxer use  
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            {/* ===== CTA BUTTON (BOTTOM RIGHT OF SECTION) ===== */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                absolute
                bottom-0
                right-0
                bg-[#1B2B6B]
                text-white
                text-[14px]
                font-semibold
                px-6
                py-3
                rounded-tl-md
                hover:bg-[#162766]
                transition-colors
                "
            >
                See If You Qualify
            </button>
        </section>


        {/* ===== ELABORATION SECTION ===== */}
        <section className="relative w-full min-h-[880px] pt-16 overflow-hidden">
          {/* ===== TOP YELLOW LINE ===== */}
          <div className="absolute top-0 left-0 w-full h-[8px] bg-[#F8D216] z-20" />

          {/* ===== BOTTOM YELLOW LINE ===== */}

          {/* ===== RIGHT HALF IMAGE (FULL HEIGHT) ===== */}
          <div className="absolute top-0 right-0 h-full w-1/2 flex items-start justify-start bg-[#EBEEFF]">
            <img
              src={hairC}
              alt="womanHoldingBottle"
              className="
      w-[652px]
      h-full
      aspect-[163/160]
      object-cover
    "
            />
          </div>

          {/* ===== LEFT HALF BACKGROUND ===== */}

          <div className="absolute top-0 left-0 h-full w-1/2 bg-[#EBEEFF]" />

          {/* ===== CONTENT LAYER ===== */}
          <div className="relative max-w-[1400px] mx-auto px-10 h-full z-10">
            <div className="grid grid-cols-2 h-full items-center">
              {/* LEFT CONTENT */}
              <div className="max-w-[640px] text-[#1B2B6B] pb-10">
                <h2 className="font-lato text-[#162766] text-[40px] font-normal leading-normal mb-4">
                  You deserve answers{" "} and legal
                    support that{" "}
                  <span className="font-semibold">
                    respect your story.
                  </span>
                </h2>
                <div className="pr-10">
                  <p className="font-lato text-[#162766] text-[18px] font-medium leading-normal mb-4 max-w-[500px]">
                    <br />
                                         A cancer diagnosis changes everything: your body, your confidence, your family life, your future plans. If hair relaxers were part of your routine for years, you deserve to know whether you may qualify for a claim.  ConnecttoAttorney helps connect eligible individuals with attorneys who review hair relaxer cancer cases. We keep the process private, simple, and focused on your criteria. 

                  </p>

                  <p className="font-lato text-[#162766] text-[16px] font-normal leading-[24px] mb-6">
                    <br />
                    <span className="font-semibold">
                      WHAT COMPENSATION MAY COVER
                    </span>{" "}
                    <span className="font-normal">
                          You may be able to seek compensation for medical bills, 
                         treatment costs, lost wages, reduced earning capacity, 
                         and pain and suffering. 
                    </span>
                  </p>

                  <p className="font-lato text-[#162766] text-[16px] font-normal leading-[24px] mb-6">
                    <span className="font-semibold">WHY THESE CASES EXIST</span>{" "}
                    Lawsuits allege certain products contained harmful chemicals and users were not adequately warned about long-term risks. 
                  </p>

                  <p className="font-lato text-[#162766] text-[16px] font-normal leading-[24px] mb-6">
                    <span className="font-semibold">CONFIDENTIAL AND SIMPLE</span> We
                    Answer a few questions. If you meet the criteria, you may be connected for a free case review. 
                  </p>

                  <p className="text-[16px] font-lato leading-[1.7] text-[#162766]">
                    <span className="font-semibold">NO UPFRONT FEES</span> Most
                    Many cases are handled on contingency, meaning you typically pay nothing unless compensation is recovered.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN EMPTY BY DESIGN */}
              <div />
            </div>
          </div>

          {/* ===== CTA OVER IMAGE ===== */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
                absolute
                bottom-0
                right-0
                bg-[#1B2B6B]
                text-white
                text-[14px]
                font-semibold
                px-6
                pt-2
                pb-3
                rounded-tl-md
                hover:bg-[#162766]
                transition-colors
                z-20
                "
          >
            See If You Qualify
          </button>
          <div className="absolute bottom-0 left-0 w-full h-[8px] bg-[#F8D216] z-20" />
        </section>


        {/* === blue bg text section */}
        <section className="w-full bg-[#162B6F] py-20">
            <div className="max-w-[1200px] mx-auto px-10">
                <div className="grid grid-cols-2 gap-24 items-center">

                {/* LEFT CONTENT */}
                <div className="text-white text-center flex flex-col items-center">
                     <h2 className="font-lato text-[#F8F9FA] text-[40px] font-bold leading-normal text-center mb-6">
                    <span className="font-semibold">Hair relaxer</span> cancer claims may <br />
                     be <span className="font-semibold"> time sensitive</span>
                    </h2>

                    {/* Centered divider line */}
                    <div className="w-[220px] h-[3px] bg-[#F8F9FA]/40 mb-6" />

                    <p className="font-lato text-[#F8F9FA] text-[24px] font-normal leading-[36px] text-center max-w-[420px]">

                    If you meet the strict criteria, acting sooner can protect your eligibility.  
                    </p>
                </div>

                {/* RIGHT CONTENT */}
                <div className="text-white text-[18px] text-center mx-auto font-lato font-medium leading-[1.7] max-w-[480px]">
                    Hair relaxer lawsuits typically focus on long-term exposure and documented diagnoses like uterine, ovarian, or endometrial cancer. If your diagnosis occurred within 10 years of last use and you can identify the brand, your claim may be stronger.  
                </div>

                </div>
            </div>
        </section>


        {/* ===== FAQ SECTION ===== */}
        <section className="relative w-full overflow-hidden">
            <div className="grid grid-cols-[1.15fr_0.85fr] min-h-[640px]">

                {/* LEFT (WHITE) */}
                <div className="bg-white px-10 py-16">
    <div className="max-w-[600px] ml-auto mr-10">                    <h2 className="text-[30px] leading-tight font-normal text-[#1B2B6B] mb-8">
                    <span className="font-semibold">We’ll help you</span> check eligibility, <br />
                    <span className="font-semibold">step by step.</span>
                    </h2>

                    <p className=" font-lato text-[#162766] text-[24px] font-medium leading-[28.8px] mb-6  ">
                    You don’t need to understand legal language to take action. Our screening is designed to match the actual criteria that law firms require, so you don’t waste time.  
                    </p>

                    {/* FAQ */}
                    <div className="border border-[#E2E6F3] rounded-lg overflow-hidden">

                      {/* No Win No Fee */}
                      <button
                        onClick={() => toggleFaq("fee")}
                        className={`w-full px-5 py-4 flex justify-between items-center 
  font-lato text-left text-[16px] font-normal leading-[19.2px]
  transition-colors duration-300

                        ${faqOpen.fee ? "bg-[#162766] text-white" : "bg-[#F5F7FF] text-[#1B2B6B]"}`}
                      >
                        No Win, No Fee
                        <img
                          src={faqOpen.fee ? faqArrow : faqArrowD}
                          alt="toggle"
                          className="w-4 h-4 transition-all duration-300"
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-400 ease-in-out
                        ${faqOpen.fee ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="px-5 py-4 text-[16px] font-lato leading-[1.6] bg-white">
                            Many attorneys handle these cases on contingency. That means you typically pay nothing upfront and only pay if compensation is recovered.
                        </div>
                      </div>

                      {/* Medical Records */}
                      <button
                        onClick={() => toggleFaq("records")}
                        className={`w-full px-5 py-4 flex justify-between items-center 
  font-lato text-left text-[16px] font-normal leading-[19.2px]
  transition-colors duration-300
 border-t border-[#E2E6F3]
                        ${faqOpen.records ? "bg-[#162766] text-white" : "bg-[#F5F7FF] text-[#1B2B6B]"}`}
                      >
                        Brand + Usage Review
                        <img
                          src={faqOpen.records ? faqArrow : faqArrowD}
                          alt="toggle"
                          className="w-4 h-4 transition-all duration-300"
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-400 ease-in-out
                        ${faqOpen.records ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="px-5 py-4 text-[16px] font-lato leading-[1.6] text-[#3E4A6B] bg-white">
                          Your brand history and usage pattern matter. If you can name the relaxer brand (or product), it can help confirm eligibility.
                        </div>
                      </div>

                      {/* Support */}
                      <button
                        onClick={() => toggleFaq("support")}
                        className={`w-full px-5 py-4 flex justify-between items-center 
  font-lato text-left text-[16px] font-normal leading-[19.2px]
  transition-colors duration-300
 border-t border-[#E2E6F3]
                        ${faqOpen.support ? "bg-[#162766] text-white" : "bg-[#F5F7FF] text-[#1B2B6B]"}`}
                      >
                        Protect Your Deadline
                        <img
                          src={faqOpen.support ? faqArrow : faqArrowD}
                          alt="toggle"
                          className="w-4 h-4 transition-all duration-300"
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-400 ease-in-out
                        ${faqOpen.support ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="px-5 py-4 text-[16px] font-lato leading-[1.6] text-[#3E4A6B] bg-white">
                          Claims may be limited by state filing deadlines, especially for deceased cases. Screening early helps protect your options.
                        </div>
                      </div>

                    </div>

                </div>
                </div>

                {/* RIGHT (LAVENDER) */}
    <div className="bg-[#EBEEFF] px-10 py-16 flex items-center  ">                <div className=" max-w-[600px]">
                   <h3
  className="
    font-lato
    text-[40px]
    font-normal
    leading-normal
    text-[#162766]
    mb-6
  "
>
                    Why do people choose  ConnecttoAttorney? 
                    </h3>

                    <ul className="space-y-4 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-[#162766] list-disc pl-5  max-w-[720px]">
                    <li>
                        We make the first step simple and confidential.     
                    </li>
                    <li>
                        Under 1 minute eligibility check  
                    </li>
                    <li>
                        Private screening and secure info handling     
                    </li>
                    <li>
                        Free case review if you appear eligible    
                    </li>
                    <li>
                        No obligation to move forward     
                    </li>
                    </ul>

                   <p
  className="
    font-lato
    text-[16px]
    font-normal
    leading-[24px]
    text-[#162766]
  "
>
                     <br />If you’ve been diagnosed with a meningioma after Depo-Provera use, you deserve to know your options.   
                    </p>
                </div>
                </div>
            </div>

            {/* CTA */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute bottom-0 right-0 bg-[#1B2B6B] text-white text-[14px] font-semibold px-6 pt-2 pb-3 rounded-tl-md hover:bg-[#162766]"
            >
                See If You Qualify
            </button>

            {/* Bottom Yellow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F8D216]" />
        </section>


        {/* ===== FOOTER ===== */}
        <section className="w-full bg-[#162B6F] py-10">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="font-lato
    text-white
    text-center
    text-[41px]
    font-bold
    leading-[48px]
">
              Ready To Get a Free Hair Relaxer Case Review?
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

      {/* ================= MOBILE HERO ================= */}
    <div
    className=" lg:hidden w-full min-h-[320px] bg-cover bg-center relative"
    style={{
        backgroundImage: `url(${bgC})`,
    }}
    >
    {/* ===== Top Overlay ===== */}
    <div className="absolute inset-0 bg-black/35" />

    {/* ===== HEADER ===== */}
    <div className="relative z-10 flex items-center justify-between px-4 py-3 bg-[#162766]">
    <img
  src={logo}
  alt="Connect to Attorney"
  className="w-[215.833px] h-[25px] object-contain"
/>

    {/* Hamburger */}
     {/* <button
        onClick={() => setShowCallPopup((prev) => !prev)}
        className="flex flex-col gap-[5px]"
    >
        <span className="w-6 h-[2px] bg-white rounded" />
        <span className="w-6 h-[2px] bg-white rounded" />
        <span className="w-6 h-[2px] bg-white rounded" />
    </button> */}
    </div>


    {/* ===== CALL SLIDE DROPDOWN ===== */}
    <div
        className={`
        absolute top-[56px] right-4
        bg-[#162766]
        text-white
        text-[14px]
        px-5 py-3
        rounded-lg
        shadow-xl
        transition-all duration-300 ease-out
        ${
            showCallPopup
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }
        `}
    >
        <a href="tel:18882021350" className="font-semibold">
         (866) 376 0014
        </a>
    </div>

    {/* ===== HERO CONTENT ===== */}
    <div className="relative z-10 px-4 pt-12 pb-14 text-white">
         <h1
  className="
    font-lato
    text-[#F8F9FA]
    text-[30px]
    leading-[40px]
    font-normal
    mb-4
    text-shadow-[5px_5px_20px_rgba(0,0,0,0.40)]
  "
>

        Hair Relaxer Cancer <br />
        Lawsuit: <span className="font-bold"> See If You Qualify
        
        </span>
        </h1>

        <p
  className="
    font-lato
    text-[#F8F9FA]
    text-[16.6px]
    leading-[24.88px]
    font-normal
    max-w-[420px]
    text-shadow-[5px_5px_20px_rgba(0,0,0,0.40)]
  "
>

        If you’re a woman with naturally textured/curly hair and used chemical hair relaxers for years, then later developed uterine cancer, ovarian cancer, or endometrial cancer (diagnosed 2010 or later), you may qualify for compensation. Time limits apply; check eligibility now.  
        </p>
    </div>
    </div>


      {/* ===== MOBILE FORM ===== */}
      <div className=" lg:hidden bg-white px-4 pb-10">
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
  <label className=" font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
">
    Phone Number
  </label>
  <div
    className="mt-1 flex items-center border rounded-md px-3 py-2 border-[#D7DBEA] focus-within:border-[#162766] focus-within:ring-2 focus-within:ring-[#162766]/20">

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
    <input type="text" placeholder="(555) 123-4567" value={mobileFormData.phone.replace("+1 ", "")}

    inputMode=" numeric" autoComplete="tel" onChange={async (e)=> {

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

            {/* Q1 - Dropdown */}
            <div>
              <label className="   font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
 mb-2 block">
            <span className="font-bold">
 Q1. </span>   Have you been diagnosed with any of the following?
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
                <span className="text-[11px] text-red-500">{mobileErrors.q1}</span>
              )}
            </div>

            {/* Q2 and Q3 - Radio Buttons */}
            {[
              "Have you used chemical hair relaxer products?",
              "Are you currently working with an attorney regarding this matter?",
            ].map((q, i) => (
              <div key={i}>
                <p className="   font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
 mb-2">
           <span className="font-bold">       Q{i + 2}. </span> {q}
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
                          setMobileFormData({ ...mobileFormData, [`q${i + 2}`]: e.target.value });
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
                  <span className="text-[11px] text-red-500">{mobileErrors[`q${i + 2}`]}</span>
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

      {/* ================= MOBILE UNDERSTANDING ================= */}
      <section className=" lg:hidden w-full bg-[#EBEEFF] pt-10 overflow-hidden relative">

            {/* ===== TEXT CONTENT ===== */}
            <div className="px-5 text-[#1B2B6B]">
                <h2
  className="
    font-lato
    text-[#162766]
    text-[30px]
    leading-[40px]
    font-normal
    mb-4
  "
>

                A beauty routine shouldn't 
                <br />
                come with a <span className="font-bold">cancer <br /> diagnosis.</span>
                </h2>

                <p className="text-[18px] font-lato leading-[22px] text-[#162766] mb-4">
                For many women, chemical relaxers were more than a product; they were part of a long-term routine, often starting at a young age. But lawsuits allege that certain hair relaxers may have exposed users to harmful chemicals, including formaldehyde or phthalates, and that long-term use may be linked to uterine, ovarian, and endometrial cancers.  
                </p>

                <p className="text-[16px] font-lato leading-[22px] text-[#162766] mb-6">
                If you’ve faced symptoms like persistent headaches, vision changes, seizures, memory issues, or needed brain surgery, you deserve answers and a path forward. 
                </p>

                <p className="text-[16px] font-lato font-semibold mb-8">
                If your diagnosis changed your life, a quick eligibility check can protect your options.  
                </p>

                
            </div>

            {/* ===== FULL-WIDTH IMAGE ===== */}
            <div className="relative">
                <img
                src={womanLawyerC}
                alt="Attorney consultation"
                className="w-full object-cover rounded-t-[24px]"
                />

                {/* CTA */}
                <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                    absolute
                    bottom-0
                    right-0
                    bg-[#1B2B6B]
                    text-white
                    text-[13px]
                    font-semibold
                    px-5
                    py-2.5
                    rounded-tl-md
                    shadow-lg
                    hover:bg-[#162766]
                    transition-colors
                "
                >
                See If You Qualify
                </button>
            </div>
      </section>



      {/* ================= MOBILE 3 CARDS ================= */}
      <section className=" lg:hidden w-full bg-white">

            {/* ===== YELLOW TOP LINE ===== */}
            <div className="w-full h-[6px] bg-[#F8D216]" />

            {/* ===== CARDS ===== */}
            <div className="px-4 py-10 space-y-8">

                {/* CARD 1 */}
                <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* HEADER */}
                <div className="bg-[#162766] px-5 py-8 min-h-[120px] flex items-center justify-between">
                   <h3
  className="
    font-roboto
    text-white
    text-[21.6px]
    leading-[32.35px]
    font-bold
    uppercase
  "
>
                    IT WAS "NORMAL"
                    <br />
                    UNTIL IT WASN'T 
                    </h3>
                    <img src={symptomsarentsmall} alt="" className="w-11 h-11" />
                </div>

                {/* BODY */}
                <div className="px-5 py-7 font-roboto text-[16px] font-lato leading-[1.65] font-medium text-[#162766]/80">
                    Many women used relaxers for years without being warned about long-term risk. A cancer diagnosis can bring fear, confusion, and a flood of questions.
                </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="bg-[#162766] px-5 py-8 min-h-[120px] flex items-center justify-between">
                   <h3
  className="
    font-roboto
    text-white
    text-[21.6px]
    leading-[32.35px]
    font-bold
    uppercase
  "
>
                    TREATMENT GETS
                    <br />
                    EXPENSIVE FAST
                    </h3>
                    <img src={dollarbag} alt="" className="w-11 h-11" />
                </div>

                <div
  className="
    px-5
    py-7
    font-roboto
    text-[16px]
    leading-[24px]
    font-normal
    text-[#162766]
  "
>

                    Surgeries, chemo, follow-ups, missed work, and long-term care can add up quickly. Compensation may help reduce the burden you didn’t choose.  
                </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="bg-[#1B2B6B] px-5 py-8 min-h-[120px] flex items-center justify-between">
                   <h3
  className="
    font-roboto
    text-white
    text-[21.6px]
    leading-[32.35px]
    font-bold
    uppercase
  "
>
                    QUALIFYING RULES
                    <br />
                    ARE STRICT
                    </h3>
                    <img src={symptomsarentsmall} alt="" className="w-11 h-11" />
                </div>

                <div className="px-5 py-7 text-[16px] font-roboto leading-[1.65] font-medium text-[#162766]/80">
                    Many cases require specific factors, such as diagnosis year, age, usage history, & product brand. A fast screening helps confirm if you meet the criteria.
                </div>
                </div>

            </div>
      </section>


      {/* ================= MOBILE CHART ================= */}
      <section className=" lg:hidden relative w-full bg-white px-4 pt-10 pb-20 overflow-hidden">

            {/* ===== IMAGE ===== */}
            <div className="flex justify-center mb-6">
                <img
                src={statistics}
                alt="Depo-Provera statistics"
                className="w-[310px] h-auto"
                />
            </div>

            {/* ===== HEADING (CENTERED) ===== */}
            <h2 className="text-[24px] leading-[26px] font-roboto font-bold text-[#162766] mx-4 mb-6 text-center">
                Qualifying Criteria for Hair Relaxer Cancer Lawsuits  
            </h2>

            {/* ===== BULLETS (CENTERED BLOCK) ===== */}
            <div className="flex justify-center">
                 <ul className="space-y-4 font-lato text-[#162766] text-[16px] font-normal leading-[24px] list-disc pl-5  max-w-[720px]">                    <li>
                        You are someone with naturally textured or curly hair . 
                    </li>
                    <li>
                        Diagnosed 2010 or later with uterine, ovarian, or endometrial cancer  
                    </li>
                    <li>
                        You were 59 or younger at the time of diagnosis  
                    </li>
                    <li>
                        Used hair relaxers at least 4 continuous years before diagnosis  
                    </li>
                    </ul>
            </div>

            {/* ===== CTA ===== */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                absolute
                bottom-0
                right-0
                bg-[#1B2B6B]
                text-white
                text-[13px]
                font-semibold
                px-5
                py-3
                rounded-tl-md
                hover:bg-[#162766]
                transition-colors
                "
            >
                See If You Qualify
            </button>

      </section>



      {/* ================= MOBILE ELABORATION ================= */}
      <section className=" lg:hidden relative w-full bg-[#EBEEFF] overflow-hidden">

            {/* ===== TOP YELLOW LINE ===== */}
            <div className="w-full h-[8px] bg-[#F8D216]" />

            {/* ===== TEXT CONTENT ===== */}
            <div className="px-5 pt-8 pb-6 text-[#162766]">
                <h2 className="text-[30px] font-lato leading-tight font-normal mb-6">
                You <span className="font-semibold"> deserve answers</span> and <br />
                legal support that <span className="font-semibold">respect <br />
                your story.</span>
                
                </h2>

                <p
  className="
    font-lato
    text-[#162766]
    text-[18px]
    font-medium
    leading-normal
    mb-8
  "
>
                A cancer diagnosis changes everything: your body, your confidence, your family life, your future plans. If hair relaxers were part of your routine for years, you deserve to know whether you may qualify for a claim.  ConnecttoAttorney helps connect eligible individuals with attorneys who review hair relaxer cancer cases. We keep the process private, simple, and focused on your criteria.  
                </p>

                <p className="text-[16px] font-lato leading-[22px] mb-6">
                <span className="font-semibold">FINANCIAL COMPENSATION</span>{" "}
                Meningioma diagnosis can bring major costs such as MRIs, specialist visits, surgery, medication, time off work, and long-term monitoring. If Depo-Provera played a role, you may be able to seek compensation for medical expenses, lost wages, pain and suffering, and future care. 
                </p>

                <p className="text-[16px] font-lato leading-[22px] mb-6">
                <span className="font-semibold">ACCOUNTABILITY</span>{" "}
                Lawsuits allege women were not fully warned about potential risks tied to long-term Depo use. If you were left in the dark, you deserve answers and accountability from the companies responsible.
                </p>

                <p className="text-[16px] font-lato leading-[22px] mb-6">
                <span className="font-semibold">SUPPORT & GUIDANCE</span>{" "}
                We keep the process simple. From your first eligibility check to the next steps, you’ll get clear direction without confusing legal jargon or pressure. 
                </p>

                <p className="text-[16px] font-lato leading-[22px] mb-6">
                <span className="font-semibold">NO COST TO START</span>{" "}
                Most Depo-Provera cases are handled on a contingency basis, meaning no upfront fees, and you typically don’t pay unless your case results in compensation. 
                </p>
            </div>

            {/* ===== IMAGE (FULL WIDTH) ===== */}
            <div className="relative w-full">
                <img
                src={hairC}
                alt="Woman applying hair relaxer"
                className="w-full object-cover"
                />

                {/* ===== CTA OVER IMAGE ===== */}
                <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                    absolute
                    bottom-0
                    right-0
                    bg-[#1B2B6B]
                    text-white
                    text-[13px]
                    font-semibold
                    px-5
                    py-3
                    rounded-tl-md
                    hover:bg-[#162766]
                    transition-colors
                "
                >
                See If You Qualify
                </button>
            </div>

            {/* ===== BOTTOM YELLOW LINE ===== */}
            <div className="w-full h-[6px] bg-[#F8D216]" />

      </section>

      {/*===== MOBILE BLUE BG TEXT SECTION ====== */}
      <section className=" lg:hidden w-full bg-[#162766] px-5 py-14 text-center">

            {/* ===== HEADING ===== */}
            <h2 className="text-[28px] font-lato leading-[32px] font-semibold text-white mb-4">
                Hair relaxer <span className="font-normal">cancer claims <br /> may be </span> time sensitive
            </h2>

            {/* ===== DIVIDER LINE ===== */}
            <div className="w-[240px] h-[4px] bg-white/40 mx-auto mb-5" />

            {/* ===== SHORT BLURB ===== */}
            <p className="text-[18px] font-lato leading-[24px] text-white mb-10">
                If you meet the strict criteria, acting sooner can protect your eligibility.  
            </p>

            {/* ===== MAIN PARAGRAPH ===== */}
            <p className="text-[16px] font-lato leading-[26px] text-white max-w-[320px] mx-auto">
                Lawsuits involving Depo-Provera allege that women were not adequately warned about a potential increased risk of meningioma brain tumors with extended use. If you’ve been diagnosed, especially if you require surgery or ongoing treatment, getting a case review can help you understand whether you may qualify for compensation. 
            </p>

      </section>

      {/* ===== MOBILE FAQ SECTION ===== */}
      <section className=" lg:hidden relative w-full bg-white px-5 pt-10 pb-20 overflow-hidden">

            {/* ===== HEADING ===== */}
            <h2 className="text-[30px] font-lato leading-tight font-normal text-[#162766] mb-4">
                <span className="font-semibold">We’ll help you check eligibility, step by step.</span>
            </h2>

            {/* ===== INTRO PARAGRAPH ===== */}
            <p className="text-[16px] font-lato font-normal leading-[22px] text-[#162766] mt-8 mb-8">
                You don’t need to understand legal language to take action. Our screening is designed to match the actual criteria that law firms require, so you don’t waste time.  
            </p>

            

            {/* ===== FAQ ===== */}
            <div className="border border-[#E2E6F3] rounded-lg overflow-hidden ">

                {/* No Win, No Fee */}
                <button
                onClick={() => toggleFaq("fee")}
                className={`w-full px-4 py-3 flex font-lato justify-between items-center text-left text-[16px] font-semibold
                    ${faqOpen.fee ? "bg-[#162766] text-white" : "bg-[#EBEEFF] text-[#162766]"}`}
                >
                No Win, No Fees
                <span className={`transition-transform ${faqOpen.fee ? "rotate-180" : ""}`}>
                    ▾
                </span>
                </button>

                <div
                className={`overflow-hidden transition-all duration-300 ${
                    faqOpen.fee ? "max-h-[200px]" : "max-h-0"
                }`}
                >
                <div className="px-4 py-3 text-[16px] font-lato leading-[21px] text-[#162766] bg-white">
                    Many attorneys handle these cases on contingency. That means you typically pay nothing upfront and only pay if compensation is recovered.
                </div>
                </div>

                {/* Medical Record Review */}
                <button
                onClick={() => toggleFaq("records")}
                className="w-full px-4 py-3 flex justify-between font-lato items-center text-left text-[16px] font-medium bg-[#EBEEFF] text-[#162766] border-t border-[#E2E6F3]"
                >
                Medical Record Review
                <span className={`transition-transform ${faqOpen.records ? "rotate-180" : ""}`}>
                    ▾
                </span>
                </button>

                <div
                className={`overflow-hidden transition-all duration-300 ${
                    faqOpen.records ? "max-h-[200px]" : "max-h-0"
                }`}
                >
                <div className="px-4 py-3 text-[16px] font-lato leading-[21px] text-[#162766] bg-white">
                    Your brand history and usage pattern matter. If you can name the relaxer brand (or product), it can help confirm eligibility.
                </div>
                </div>

                {/* Personal Support */}
                <button
                onClick={() => toggleFaq("support")}
                className="w-full px-4 py-3 flex justify-between font-lato items-center text-left text-[16px] font-medium bg-[#EBEEFF] text-[#162766] border-t border-[#E2E6F3]"
                >
                Protect Your Deadline
                <span className={`transition-transform ${faqOpen.support ? "rotate-180" : ""}`}>
                    ▾
                </span>
                </button>

                <div
                className={`overflow-hidden transition-all duration-300 ${
                    faqOpen.support ? "max-h-[200px]" : "max-h-0"
                }`}
                >
                <div className="px-4 py-3 text-[16px] font-lato leading-[21px] text-[#3E4A6B] bg-white">
                    Claims may be limited by state filing deadlines, especially for deceased cases. Screening early helps protect your options.
                </div>
                </div>

            </div>
            {/* ===== SUPPORT INFO BLOCK (ATTACHED TO FAQ) ===== */}
            <div className="bg-[#EBEEFF] px-4 py-6 mb-6 rounded-b-lg text-[#162766]">

            <h3 className="text-[20px] font-lato leading-[26px] font-semibold mb-5">
               Why do people choose  ConnecttoAttorney? 
            </h3>


            <ul className="space-y-4 text-[16px] font-lato leading-[1.7] text-[#162766] list-disc pl-5  max-w-[720px] mb-6">
                    <li>
                        We make the first step simple and confidential.   
                    </li>
                    <li>
                        Under 1 minute eligibility check  
                    </li>
                    <li>
                        Private screening and secure info handling  
                    </li>
                    <li>
                        Free case review if you appear eligible  
                    </li>
                    <li>
                        No obligation to move forward  
                    </li>
            </ul>

            <p className="text-[16px] font-lato leading-[22px] mb-4">
                If you’ve been diagnosed with a meningioma after Depo-Provera use, you deserve to know your options.  
            </p>

            </div>


            {/* ===== CTA ===== */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                absolute
                bottom-0
                right-0
                bg-[#1B2B6B]
                text-white
                text-[13px]
                font-semibold
                px-5
                py-3
                rounded-tl-md
                hover:bg-[#162766]
                transition-colors
                "
            >
                See If You Qualify
            </button>

      </section>

      {/* ================= MOBILE FOOTER CTA ================= */}
      <section className=" lg:hidden relative w-full bg-[#162B6F] py-10">

            {/* ===== TOP YELLOW LINE ===== */}
            <div className="absolute top-0 left-0 w-full h-[8px] bg-[#F8D216]" />

            <div className="px-5 text-center">
                <h2 className="text-[24px] font-lato leading-[28px] font-medium text-white mb-3">
                Ready To Get a Free Hair<br />
                 Relaxer Case Review?
                </h2>

                <div className="w-[32px] h-[2px] bg-[#F8D216] mx-auto mb-4" />

                <p className="text-[16px] font-lato leading-[22px] text-white/90 mb-7">
                Contact our legal partners today.
                </p>

                <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="
                    w-full
                    h-[46px]
                    bg-[#F9D51C]
                    text-[#0E1E4D]
                    text-[14px]
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

export default HairRelaxerLawsuitC;