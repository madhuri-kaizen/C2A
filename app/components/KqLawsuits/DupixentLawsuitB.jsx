'use client'
import React, { useState, useEffect, useRef } from "react";const logo = "/logotitle.svg";
const handshakeImage = "/Form/handshake.png";
const successIcon = "/Form/success.png";
const tyBuildings = "/Form/tybuildings.png";
const tyBuildingsMobile = "/Form/tybuildingsmobile.png";
const callIcon = "/Form/call.png";
const womanDepo = "/Form/womanmandepo.png";
const tensedWoman = "/Form/tensedwoman.png";
const handshakeImageB = "/Form/handshakeb.png";
const wavesImage = "/Form/waves.png";
const caseNoteIcon = "/Form/casenote.png";
const attorneyCallIcon = "/Form/attorneycall.png";
const compensationIcon = "/Form/compensationdollar.png";
const wavesMobile = "/Form/wavesmobile.png";
const expand = "/Form/expandupix.svg";
const collapse = "/Form/collapsedupix.svg";
const womanLawyerC = "/Form/dupixentmanwoman.png";
const haveYou = "/Form/haveyoubeen.png";
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

const DupixentLawsuitB = () => {
    const [openIndex, setOpenIndex] = useState(0);
    // Meta Pixel ID
    const META_PIXEL_ID = "1262326571997577"; //1409965080153428 input pixel id 
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
        const input = value.replace(/\D/g, "").slice(0, 10);
        let formatted = "";

        if (input.length > 0) {
            formatted = `(${input.substring(0, 3)}`;
            if (input.length > 3) {
                formatted += `) ${input.substring(3, 6)}`;
            }
            if (input.length > 6) {
                formatted += `-${input.substring(6, 10)}`;
            }
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
                websiteName: "Connect 2 Attorney",
                formPath: "/dupixent-lawsuit-b-kq",
                vertical: LEAD_GENERATION_VERTICALS.DUPIXENT,
                formname: "Dupixent Lawsuit B Lander KQ",
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
                websiteName: "Connect 2 Attorney",
                formname: "Dupixent Lawsuit B Lander KQ",
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
                    websiteName: "Connect 2 Attorney",
                    formname: "Dupixent Lawsuit B Lander KQ",
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
    //         websiteName: 'Connect 2 Attorney',
    //         vertical: 'Dupixent & Brain Tumor Lawsuit',
    //         formPath: '/Dupixent-lawsuit-b',
    //         formname: 'Dupixent Lawsuit lander B',
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
                websiteName: "Connect 2 Attorney",
                vertical: LEAD_GENERATION_VERTICALS.DUPIXENT,
                formname: "Dupixent Lawsuit B Lander KQ",
                formPath: '/dupixent-lawsuit-b-kq',
                data: {
                    submissionDate: new Date().toLocaleString(),
                    fullName: payload.fullName,
                    firstName: payload.fullName.split(' ')[0] || '',
                    lastName: payload.fullName.split(' ').slice(1).join(' ') || '',
                    phone: payload.phone,
                    email: payload.email,
                    consentGiven: payload.consent,
                    hasDiagnosis: payload.q1,
                    hasUsedDepoProvera: payload.q2,
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

    //form submission handlers only retell
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
                        <img src={logo} alt="Connect to Attorney" className="h-7" />

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
                    className="w-full bg-[#0F2357] overflow-hidden min-h-[62vh]"
                    style={{

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
                        <div className="pt-0 pb-5 mt-10 text-white flex justify-center">
                             <div className="">
                                <h1 className="text-[36px] leading-tight font-bold mb-4">
                                    Dupixent Lawsuit: <span className="text-[#F8D216]">Were You Diagnosed </span>
                                    with Lymphoma? See If You Qualify
                                </h1>

                                <p className="text-[18px] text-gray-300 mb-4 leading-relaxed tracking-wide">
                                    If you or a loved one used Dupixent and were later diagnosed with serious conditions like Dupixent T-cell lymphoma or other complications, you may be eligible to file a Dupixent lawsuit and pursue financial compensation. Connect 2 Attorney helps you understand your legal options and connects you with experienced attorneys handling Dupixent Lymphoma lawsuit claims.
                                    <br />
                                    <br />
                                    <span className="font-bold">Why choose Connect 2 Attorney for your Dupixent lawsuit? </span>
                                    <br />
                                    <br />
                                    ✅ Fast and confidential case review <br />
                                    ✅ Access to attorneys experienced in Dupixent claims <br />
                                    ✅ No upfront costs to check eligibility <br />
                                    ✅ Simple process designed for patients and families <br /> <br />
                                </p>



                                <div className="w-full flex justify-left">
                                    <img
                                        src={womanDepo}
                                        alt="womanDepo"
                                        className="w-full max-w-[340px] rounded-[10px] object-cover"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* ===== RIGHT FORM ===== */}
                        <div className="pt-10 pb-4 flex justify-center">
                            <div className=" bg-white text-[#162766] rounded-xl shadow-xl overflow-hidden w-full  max-w-[720px]">
                                <div className="w-full h-[4px] bg-[#F8D216]" />

                                <div className=" px-6 py-6">
                                    <h2 className="font-poppins text-[24px] font-bold leading-4 text-center mb-4">
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
                                                q: "Q2.  Did you or your loved ones CTCL diagnosis come AFTER you started taking Dupixent?",
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
                <section className="w-full bg-[#FAF8E9] py-10">
                    <div className=" max-w-[1400px] mx-auto px-10 grid grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-[35px] leading-[45px] font-semibold text-[#162766] mb-4">
                                Understanding Dupixent,
                                <br />
                                Lymphoma Risks, and the Dupixent Lawsuit
                            </h2>

                            <p className="text-[18px] leading-[28px] text-[#4B5563] mb-6  max-w-[720px]">
                                Dupixent is prescribed in the US for various conditions, including allergic fungal rhinosinusitis, atopic dermatitis, and bullous pemphigoids.  While it has helped many patients, emerging reports and legal claims are raising concerns about potential links to serious health issues, including Dupixent T-cell lymphoma.
                            </p>

                            <p className="text-[18px] leading-[28px] text-[#4B5563] mb-6  max-w-[720px]">
                                Dupixent lawsuits are being filed, alleging that manufacturers may have failed to fully warn about the related risks. At Be With Law, we help you understand whether your experience may qualify and connect you with attorneys who can guide you in your next steps.
                            </p>


                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full flex justify-end">
                            <img
                                src={womanLawyerC}
                                alt="tensedWoman"
                                 className="
w-[547px]
h-[530px]
rounded-[5px]
object-cover
"
                            />
                        </div>
                    </div>
                </section>


                {/* ===== QUALIFY SECTION ===== */}
                <section className="w-full bg-white py-12">
                     <div    className="max-w-[1400px] mx-auto px-20 grid grid-cols-2 gap-14 items-center">

                        {/* LEFT IMAGE */}
                        <div className="w-full flex justify-start">
                            <img
                                src={haveYou}
                                alt="Handshake"
                                 className="
w-[547px]
h-[530px]
rounded-[5px]
object-cover
"

                            />
                        </div>


                        {/* RIGHT CONTENT */}
                        <div>
                            <h2 className="text-[35px] sd:text-[24px] md:text-[24px] leading-[45px] font-semibold text-[#162766] mb-4">
                                Dupixent Lawsuit Eligibility Requirements for Compensation
                            </h2>

                            <p className="
    font-lato
    text-[#404040]
    text-[18px]
    font-normal
    leading-[28px]
mb-4


">
                                To qualify for a Dupixent lawsuit, you generally need to meet certain criteria. Connect 2 Attorney helps simplify this process, so you can quickly understand where you stand. <br /><br />

                                You may qualify if:
                            </p>
                            <ul className="space-y-3 text-[16px] leading-[24px] text-[#4B5563]  max-w-[720px] mb-6">

                                <li className="flex items-start gap-3">
                                    <span className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#4B5563] flex-shrink-0"></span>
                                    <p>
                                        <strong>Minimum Usage Requirement: </strong>
                                        You were prescribed Dupixent and used the medication for at least one month as part of your treatment.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#4B5563] flex-shrink-0"></span>
                                    <p>
                                        <strong>Diagnosis after Dupixent use: </strong>
                                        You were diagnosed with lymphoma, including Dupixent T-cell lymphoma, or another serious condition after using Dupixent.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#4B5563] flex-shrink-0"></span>
                                    <p>
                                        <strong>Documented Dupixent usage: </strong>
                                        You were prescribed Dupixent for allergic fungal rhinosinusitis, atopic dermatitis, and bullous pemphigoid, and have proof of use.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#4B5563] flex-shrink-0"></span>
                                    <p>
                                        <strong>Within legal time limits: </strong>
                                        Your claim falls within your state’s statute of limitations and is still eligible to be filed.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#4B5563] flex-shrink-0"></span>
                                    <p>
                                        <strong>Not currently represented: </strong>
                                        You are not already working with another attorney for this specific Dupixent-related claim.
                                    </p>
                                </li>

                            </ul>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                                    className="
                flex
w-[350px]
h-[56.5px]
px-[38.25px]
pt-[19.25px]
pb-[20.25px]
justify-center
items-center

rounded-[10px]

bg-[#F8D216]
hover:bg-[#E5C414]

font-['Segoe_UI']
text-[#162766]
text-[18px]
font-bold
leading-[16px]
tracking-[2.25px]
uppercase

transition-colors

                    "
                            >
                                SEE IF YOU QUALIFY
                            </button>
                        </div>

                    </div>
                </section>


                {/* ===== WAVE SECTION ===== */}
               <section 
   className="
    relative
    w-full
    bg-white
    overflow-hidden
    mb-5
    aspect-[1955/614]   
    max-h-[614px]
    ">                    {/* Waves background */}
                    <img
                        src={wavesImage}
                        alt="Decorative waves"
                           className="absolute
            inset-0
            w-full
            h-full
            " />
 

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-[820px] px-6 text-center">
                            <h2 className="text-[55px] leading-[36px] font-bold text-[#162766] mb-9">
                                Check Your Eligibility Today
                            </h2>

                            <p className="text-[18px] leading-[22px] text-[#162766] font-semibold mb-6 max-w-[620px] mx-auto">
                                Don’t wait. Your legal rights may be time sensitive. <br /><br />

                                Complete a quick, confidential form to see if you qualify for a Dupixent lawsuit. Our network of experienced attorneys will review your case at no cost and help you understand your options.
                            </p>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className="
                   w-full
    max-w-[350px]
    h-[56px]

    px-8
    py-4

    rounded-[10px]

    bg-[#162766]
    hover:bg-[#0F1E4D]

    text-white
    text-[16px]
    lg:text-[17px]
    xl:text-[18px]

    font-bold
    tracking-[2px]
    uppercase

    transition-colors
"
                            >
                                FREE ELIGIBILITY CHECK
                            </button>
                        </div>
                    </div>
                </section>

                {/* ===== CARDS SECTION ===== */}
                <section className="w-full bg-white py-16">
                    <div className="max-w-[1040px] mx-auto px-10">
                        <div className="grid grid-cols-3 gap-8 justify-items-center">

                            {/* Card 1 */}
                            <div className="w-full max-w-[280px] bg-[#E8E9F0] rounded-[16px] px-6 py-8 text-center">
                                <img
                                    src={caseNoteIcon}
                                    alt="Case Review"
                                    className="w-[56px] h-[56px] mx-auto mb-4"
                                />
                                <h3 className="text-[28px] font-semibold text-[#162766] mb-2">
                                    Case Review
                                </h3>
                                <p className="text-[18px] leading-[20px] text-[#5A627A]">
                                    Share your details, including your diagnosis and Dupixent use. We’ll assess whether you may qualify for a Dupixent Lymphoma lawsuit.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="w-full max-w-[280px] bg-[#E8E9F0] rounded-[16px] px-6 py-8 text-center">
                                <img
                                    src={attorneyCallIcon}
                                    alt="Attorney Connection"
                                    className="w-[56px] h-[56px] mx-auto mb-4"
                                />
                                <h3 className="text-[28px]  leading-[38px] font-semibold text-[#162766] mb-2">
                                    Attorney Connection
                                </h3>
                                <p className="text-[18px] leading-[20px] text-[#5A627A]">
                                    If eligible, we connect you with experienced attorneys handling Dupixent side effects cancer claims.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="w-full max-w-[280px] bg-[#E8E9F0] rounded-[16px] px-6 py-8 text-center">
                                <img
                                    src={compensationIcon}
                                    alt="Compensation Pursuit"
                                    className="w-[56px] h-[56px] mx-auto mb-4"
                                />
                                <h3 className="text-[28px] leading-[38px] font-semibold text-[#162766] mb-2">
                                    Compensation Pursuit
                                </h3>
                                <p className="text-[18px] leading-[20px] text-[#5A627A]">
                                    Your attorney files your case and fights for maximum recovery.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="w-full  py-[80px]">
                    <div className=" max-w-[1400px] mx-auto">

                        {/* HEADING */}
                        <h2 className="text-[#162766] text-[40px] leading-[40px] font-semibold mb-[32px]">
                            Frequently Asked Questions
                        </h2>

                        {/* FAQ LIST */}
                        <div className="flex flex-col gap-[16px]">

                            {[
                                {
                                    question: "Why are people filing a Dupixent lawsuit?",
                                    answer:
                                        "Patients are filing a Dupixent lawsuit after developing serious health conditions they believe may be linked to the drug, including lymphoma and other immune-related complications. ",
                                },
                                {
                                    question: "What symptoms should I watch after using Dupixent? ",
                                    answer: "Symptoms like swollen lymph nodes, persistent fatigue, skin changes, or unexplained illness may require medical attention and could be relevant in a Dupixent lymphoma lawsuit. ",
                                },
                                {
                                    question: "Do I need a confirmed cancer diagnosis to file a claim? ",
                                    answer: "Most claims involve a confirmed diagnosis, such as lymphoma, but eligibility can depend on your symptoms, medical history, and how Dupixent affected your health. ",
                                },
                                {
                                    question: "How do I know if my condition is related to Dupixent? ",
                                    answer: "A medical review and legal evaluation can help determine if there may be a connection between your condition and potential Dupixent side effects cancer risks. ",
                                },
                                {
                                    question: "What types of cases are being investigated? ",
                                    answer: "Cases involving Dupixent T-cell lymphoma, immune system complications, and other serious health conditions are currently being reviewed in legal claims. ",
                                },
                                {
                                    question: "Will I have to go to court for a Dupixent lawsuit?",
                                    answer: "Not always. Many drug-related cases are resolved through settlements, though each case is different and handled individually. ",
                                },
                                {
                                    question: "How long does a Dupixent lawsuit take? ",
                                    answer: "Timelines vary depending on the complexity of the case, but legal claims can take months or longer depending on investigations and negotiations.",
                                },
                                {
                                    question: "What documents will I need to get started? ",
                                    answer: "Basic documents include prescription history, medical records, and details about your diagnosis after using Dupixent.",
                                },
                                {
                                    question: "Can family members file a claim on behalf of a loved one? ",
                                    answer: "Yes, in certain cases, family members may be able to pursue a claim if a loved one was seriously affected or passed away due to complications. ",
                                },
                                {
                                    question: "What makes Connect 2 Attorney different from other legal services? ",
                                    answer: "Connect 2 Attorney focuses on simplifying the process, offering free case reviews, and connecting you with attorneys experienced in Dupixent compensation claims.",
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
                                                <p className="text-[#757575] text-[20px] leading-[20px] font-medium">
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
                <section className="w-full bg-[#162B6F] py-10">
                    <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
                        <h2 className="text-[41px] leading-[48px] font-semibold text-white">
                            Ready To Get a Free Dupixent Case Review?
                        </h2>

                        <div className="w-[44px] h-[3px] bg-[#F4C430] mt-4 mb-6" />

                        <p className="text-[41px] leading-[28px] text-white/90 mb-8">
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
                    <img src={logo} alt="Connect to Attorney" className="h-7" />

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
                    <h1 className="text-[25px] leading-[28px] font-semibold mb-4">
                        Dupixent Lawsuit:
                        <br />
                        <span className="text-[#F8D216]">Were You Diagnosed</span>
                        <br />
                        with Lymphoma? See If You Qualify
                    </h1>

                    <p className="text-[16px] leading-[22px] mb-6">
                        If you or a loved one used Dupixent and were later diagnosed with serious conditions like Dupixent T-cell lymphoma or other complications, you may be eligible to file a Dupixent lawsuit and pursue financial compensation. Connect 2 Attorney helps you understand your legal options and connects you with experienced attorneys handling Dupixent Lymphoma lawsuit claims.
                    </p>


                </div>
            </div>

            {/* ===== MOBILE FORM ===== */}
            <div className=" lg:hidden bg-white px-4 -mt-6 pb-10">
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
                            " Did you or your loved ones CTCL diagnosis come AFTER you started taking Dupixent?",
                            "Are you currently represented by an attorney for this claim?",
                        ].map((q, i) => (
                            <div key={i}>
                                <p className="   font-lato
    text-[#191B37]
    text-[15.8px]
    font-normal
    leading-[28px]
 mb-2">
                                    Q{i + 1}. {q}
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
            <section className=" lg:hidden w-full bg-[#FAF8E9] px-4 py-10">
                <div className="max-w-[360px] mx-auto">

                    {/* Image */}
                    <div className="mb-6">
                        <img
                            src={womanDepo}
                            alt="Woman holding Dupixent vial"
                            className="w-full rounded-[16px] object-cover"
                        />
                    </div>

                    {/* Heading */}
                    <h2 className="text-[28px] leading-[38px] font-bold text-[#162766] mb-4">
                        Understanding Dupixent,
                        Lymphoma Risks, and the Dupixent Lawsuit
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-[16px] leading-[28px] text-[#4B5563] mb-4">
                        Dupixent is prescribed in the US for various conditions, including allergic fungal rhinosinusitis, atopic dermatitis, and bullous pemphigoids.  While it has helped many patients, emerging reports and legal claims are raising concerns about potential links to serious health issues, including Dupixent T-cell lymphoma.
                    </p>

                    <p className="text-[16px] leading-[28px] text-[#4B5563] mb-4">
                        Dupixent lawsuits are being filed, alleging that manufacturers may have failed to fully warn about the related risks. At Be With Law, we help you understand whether your experience may qualify and connect you with attorneys who can guide you in your next steps.
                    </p>



                </div>
            </section>


            {/* ================= MOBILE ELIGIBILITY ================= */}
            <section className=" lg:hidden w-full bg-white px-4 py-10">
                <div className="max-w-[360px] mx-auto">

                    {/* Image */}
                    <div className="mb-6">
                        <img
                            src={haveYou}
                            alt="Handshake"
                            className="w-full rounded-[16px] object-cover"
                        />
                    </div>

                    {/* Heading */}
                    <h2 className="text-[28px] leading-[32px] font-semibold text-[#162766] mb-3">
                        Dupixent Lawsuit
                        <br />
                        Eligibility Requirements

                        for Compensation
                    </h2>

                    {/* Intro text */}
                    <p className="text-[16px] leading-[22px] text-[#4B5563] mb-4">
                        To qualify for a Dupixent lawsuit, you generally need to meet certain criteria. Connect 2 Attorney helps simplify this process, so you can quickly understand where you stand.
                        <br /><br />
                        You may qualify if:
                    </p>

                    {/* Eligibility list */}
                    <div className="space-y-3 text-[16px] leading-[22px] text-[#4B5563] mb-6">
                        <p>
                            <strong>Minimum Usage Requirement: </strong>You were prescribed Dupixent and used the medication for at least one month as part of your treatment.
                        </p>

                        <p>
                            <strong>Diagnosis after Dupixent use :</strong>You were diagnosed with lymphoma, including Dupixent T-cell lymphoma, or another serious condition after using Dupixent.
                        </p>

                        <p>
                            <strong>Documented Dupixent usage: </strong>You were prescribed Dupixent for allergic fungal rhinosinusitis, atopic dermatitis, and bullous pemphigoid, and have proof of use.
                        </p>

                        <p>
                            <strong>Within legal time limits: </strong>Your claim falls within your state’s statute of limitations and is still eligible to be filed.
                        </p>

                        <p>
                            <strong>Not currently represented : </strong>You are not already working with another attorney for this specific Dupixent-related claim.
                        </p>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="
               flex
    w-full
    flex-col
    justify-center
    items-center

    px-[38.25px]
    pt-[19.25px]
    pb-[20.25px]

    rounded-[10px]
    bg-[#F8D216]
    hover:bg-[#E5C414]
    transition-colors

    font-['Segoe_UI']
    text-[#162766]
    text-[18px]
    font-bold
    leading-[16px]
    tracking-[2.25px]
    uppercase
    text-center
            "
                    >
                        SEE IF YOU QUALIFY
                    </button>

                </div>
            </section>

            {/* ================= MOBILE ELIGIBILITY CTA ================= */}
            <section className=" lg:hidden relative w-full bg-white overflow-hidden">
                {/* Waves background */}
                <img
                    src={wavesMobile}
                    alt=""
                    className="w-full block"
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <h2 className="text-[28px] leading-[28px] font-bold text-[#162766] mb-10">
                        Check Your Eligibility Today
                    </h2>

                    <p className="text-[16px] leading-[24px] font-normal text-[#162766] max-w-[320px] mb-5">
                        Don’t wait. Your legal rights may be time sensitive.
                        <br /><br />
                        Complete a quick, confidential form to see if you qualify for a Dupixent lawsuit. Our network of experienced attorneys will review your case at no cost and help you understand your options.
                    </p>

                    <button
                        className="
            flex
    w-full
    max-w-[350px]
    h-[56.5px]

    md:h-[64px]

    py-[3.891px]
    flex-col
    justify-center
    items-center
    gap-[5.559px]

    rounded-[10px]
    bg-[#162766]

    font-lato
    text-white

    text-[18px]
    md:text-[20px]

    font-bold
    leading-[20px]
    tracking-[0.36px]
    text-center

    mx-auto


            "
                    >
                        FREE ELIGIBILITY CHECK
                    </button>
                </div>
            </section>

            {/* ================= MOBILE STEPS ================= */}
            <section className=" lg:hidden w-full bg-white px-5 py-10">
                <div className="flex flex-col gap-6">

                    {/* Card 1 */}
                    <div className="bg-[#E8E9F0] rounded-[20px] px-6 py-10 text-center">
                        <img
                            src={caseNoteIcon}
                            alt="Case Review"
                            className="
  mx-auto
  mb-4
  w-[93px]
  h-[92px]
  aspect-[93/92]
"
                        />
            <h3
  className="
    font-lato
    text-[#162766]
    text-center
    text-[25.7px]
    font-extrabold
    leading-[35.516px]
    mb-2
  "
>
                            Case Review
                        </h3>
             <p
  className="
    font-lato
    text-[#162766]
    text-center
    text-[17.2px]
    font-normal
    leading-normal
  "
>
                            Share your details, including your diagnosis and Dupixent use. We’ll assess whether you may qualify for a Dupixent Lymphoma lawsuit.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#E8E9F0] rounded-[20px] px-6 py-8 text-center">
                        <img
                            src={attorneyCallIcon}
                            alt="Attorney Connection"
                            className="
  mx-auto
  mb-4
  w-[93px]
  h-[92px]
  aspect-[93/92]
"
                        />
            <h3
  className="
    font-lato
    text-[#162766]
    text-center
    text-[25.7px]
    font-extrabold
    leading-[35.516px]
    mb-2
  "
>
                            Attorney Connection
                        </h3>
             <p
  className="
    font-lato
    text-[#162766]
    text-center
    text-[17.2px]
    font-normal
    leading-normal
  "
>
                            If eligible, we connect you with experienced attorneys handling Dupixent side effects cancer claims.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#E8E9F0] rounded-[20px] px-6 py-8 text-center">
                        <img
                            src={compensationIcon}
                            alt="Compensation Pursuit"
                            className="
  mx-auto
  mb-4
  w-[93px]
  h-[92px]
  aspect-[93/92]
"
                        />
            <h3
  className="
    font-lato
    text-[#162766]
    text-center
    text-[25.7px]
    font-extrabold
    leading-[35.516px]
    mb-2
  "
>
                            Compensation Pursuit
                        </h3>
             <p
  className="
    font-lato
    text-[#162766]
    text-center
    text-[17.2px]
    font-normal
    leading-normal
  "
>
                            Your attorney files your case and fights for maximum recovery.
                        </p>
                    </div>

                </div>
            </section>
            <section className="w-full  py-[60px] block  lg:hidden md:py-[80px]">
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
                                question: "Why are people filing a Dupixent lawsuit?",
                                answer:
                                    "Patients are filing a Dupixent lawsuit after developing serious health conditions they believe may be linked to the drug, including lymphoma and other immune-related complications. ",
                            },
                            {
                                question: "What symptoms should I watch after using Dupixent? ",
                                answer: "Symptoms like swollen lymph nodes, persistent fatigue, skin changes, or unexplained illness may require medical attention and could be relevant in a Dupixent lymphoma lawsuit. ",
                            },
                            {
                                question: "Do I need a confirmed cancer diagnosis to file a claim? ",
                                answer: "Most claims involve a confirmed diagnosis, such as lymphoma, but eligibility can depend on your symptoms, medical history, and how Dupixent affected your health. ",
                            },
                            {
                                question: "How do I know if my condition is related to Dupixent? ",
                                answer: "A medical review and legal evaluation can help determine if there may be a connection between your condition and potential Dupixent side effects cancer risks. ",
                            },
                            {
                                question: "What types of cases are being investigated? ",
                                answer: "Cases involving Dupixent T-cell lymphoma, immune system complications, and other serious health conditions are currently being reviewed in legal claims. ",
                            },
                            {
                                question: "Will I have to go to court for a Dupixent lawsuit?",
                                answer: "Not always. Many drug-related cases are resolved through settlements, though each case is different and handled individually. ",
                            },
                            {
                                question: "How long does a Dupixent lawsuit take? ",
                                answer: "Timelines vary depending on the complexity of the case, but legal claims can take months or longer depending on investigations and negotiations.",
                            },
                            {
                                question: "What documents will I need to get started? ",
                                answer: "Basic documents include prescription history, medical records, and details about your diagnosis after using Dupixent.",
                            },
                            {
                                question: "Can family members file a claim on behalf of a loved one? ",
                                answer: "Yes, in certain cases, family members may be able to pursue a claim if a loved one was seriously affected or passed away due to complications. ",
                            },
                            {
                                question: "What makes Connect 2 Attorney different from other legal services? ",
                                answer: "Connect 2 Attorney focuses on simplifying the process, offering free case reviews, and connecting you with attorneys experienced in Dupixent compensation claims.",
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
                        Ready To Get a Free <br />
                        Dupixent Case Review?
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

export default DupixentLawsuitB;