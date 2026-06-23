"use client";

import { useState, useRef, useEffect } from "react";

const phoneIcon = "/Form/phone1.svg";
const qsp = "/Form/qsp.svg";
const nuf = "/Form/nuf.svg";
const mb = "/Form/mb.svg";
const logo = "/logotitle.svg";
const successIcon = "/Form/success.png";
const tyBuildings = "/Form/tybuildings.png";
const tyBuildingsMobile = "/Form/tybuildingsmobile.png";
import {
  SSDISendAdminEmail,
  SSDISendUserEmail,
} from "../../../components/emailService2";

import {
  ensureMetaPixel,
  buildAdvancedMatching,
  trackSingleEventWithUserData,
} from "../../utils/metaPixel";

const CRM_API_URL =
  "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

const META_PIXEL_ID = "1032101569241484";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

// REQUIRED ANSWERS FOR ELIGIBILITY
// If ANY of these don't match exactly -> Show Oops, NO email
const requiredAnswers = {
  q1: "Yes",    // Are you between the ages of 55 and 63?
  q2: "No",     // Are you currently working?
  q3: "Yes",    // Has a physical or mental health condition kept you from working for 12 months or longer?
  q4: "Yes",    // Have you worked at least 5 of the last 10 years?
  q5: "No",     // Are you currently receiving Social Security Disability benefits?
  q6: "No",     // Is an attorney already handling your case?
  // q7 has NO requirement - can be Yes or No (Are you a U.S. citizen?)
};

const ThankYouPage = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div className="pt-10 flex justify-center">
        <img src={logo} alt="Connect2Attorney" className="h-6" />
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
        <img src={logo} className="h-6" alt="logo" />
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
          will contact you for a brief call to explain the next steps and share
          key details about this litigation and how it may apply to your situation.
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

      <img src={tyBuildingsMobile} className="absolute bottom-0 left-0 w-full" alt="buildings" />
    </div>
  );
};

const OopsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 text-center shadow-2xl">
        <h3 className="text-[#162766] text-[24px] font-bold mb-2">
          Oops!
        </h3>

        <p className="text-[#555] text-[15px] leading-6 mb-5">
          Unfortunately, based on your responses, you may not be eligible for this benefit at this time.
        </p>

        <button
          onClick={onClose}
          className="bg-[#162766] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0f1a4d] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Hero() {
  const pageViewTracked = useRef(false);
  const submissionInProgress = useRef(false);
  const completeRegistrationTracked = useRef(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showOopsModal, setShowOopsModal] = useState(false);
  const [disqualified, setDisqualified] = useState(false);
  const [ipAddress, setIpAddress] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    bestContactDateTime: "",
    q1: "", // Are you between the ages of 55 and 63?
    q2: "", // Are you currently working?
    q3: "", // Has a physical or mental health condition kept you from working for 12 months or longer?
    q4: "", // Have you worked at least 5 of the last 10 years?
    q5: "", // Are you currently receiving Social Security Disability benefits?
    q6: "", // Is an attorney already handling your case?
    q7: "", // Are you a U.S. citizen?
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (window.fbq) {
      window.fbq("set", "autoConfig", false, META_PIXEL_ID);
    }

    ensureMetaPixel(META_PIXEL_ID);

    if (!pageViewTracked.current && window.fbq) {
      pageViewTracked.current = true;
      window.fbq("track", "PageView");
    }
  }, []);

  useEffect(() => {
    if (showThankYou && !disqualified && window.fbq) {
      window.fbq("track", "ThankYou");
    }
  }, [showThankYou, disqualified]);

  useEffect(() => {
    const captureIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip || "");
      } catch (error) {
        console.error("Failed to capture IP address:", error);
      }
    };

    captureIpAddress();
  }, []);

  useEffect(() => {
    document.getElementById("trustedform-script")?.remove();

    const tf = document.createElement("script");
    tf.type = "text/javascript";
    tf.async = true;
    tf.id = "trustedform-script";
    tf.src =
      "https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&token_field=xxTrustedFormCertToken";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(tf, s);
  }, []);

  const getSourceUrl = () => {
    if (typeof window === "undefined") return "Unknown";
  return window.location.href;
  };

  const getTrustedFormData = () => {
    return new Promise((resolve) => {
      const readTrustedFormData = () => ({
        certId: document.getElementById("xxTrustedFormCertUrl")?.value || "",
        tokenUrl: document.getElementById("xxTrustedFormCertToken")?.value || "",
        pingUrl: document.getElementById("xxTrustedFormPingUrl")?.value || "",
      });

      const firstRead = readTrustedFormData();

      if (firstRead.certId) {
        resolve(firstRead);
        return;
      }

      let attempts = 0;
      const timer = setInterval(() => {
        attempts += 1;

        const trustedFormData = readTrustedFormData();

        if (trustedFormData.certId || attempts >= 10) {
          clearInterval(timer);
          resolve({
            certId: trustedFormData.certId || "",
            tokenUrl: trustedFormData.tokenUrl || "",
            pingUrl: trustedFormData.pingUrl || "",
          });
        }
      }, 300);
    });
  };

  const getCSTDateTime = () => {
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

  const convertToCST = (dateTime) => {
    if (!dateTime) return "";

    return (
      new Date(dateTime).toLocaleString("en-US", {
        timeZone: "America/Chicago",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }) + " CST"
    );
  };

  const getMinDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  const formatPhoneInput = (value) => {
    const input = value.replace(/\D/g, "").slice(0, 10);
    let formatted = "";

    if (input.length > 0) formatted = `(${input.substring(0, 3)}`;
    if (input.length > 3) formatted += `) ${input.substring(3, 6)}`;
    if (input.length > 6) formatted += `-${input.substring(6, 10)}`;

    return formatted;
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return phone.replace(/\D/g, "").length === 10;
  };

  // Original Questions
  const questions = [
    {
      name: "q1",
      q: "Are you between the ages of 55 and 63?",
      options: ["Yes", "No"],
    },
    {
      name: "q2",
      q: "Are you currently working?",
      options: ["Yes", "No"],
    },
    {
      name: "q3",
      q: "Has a physical or mental health condition kept you from working for 12 months or longer?",
      options: ["Yes", "No"],
    },
    {
      name: "q4",
      q: "Have you worked at least 5 of the last 10 years?",
      options: ["Yes", "No", "Not sure"],
    },
    {
      name: "q5",
      q: "Are you currently receiving Social Security Disability benefits?",
      options: ["Yes", "No"],
    },
    {
      name: "q6",
      q: "Is an attorney already handling your case?",
      options: ["Yes", "No"],
    },
    {
      name: "q7",
      q: "Are you a U.S. citizen?",
      options: ["Yes", "No"],
    },
  ];

  // Check if user is qualified (all required answers match exactly)
  const isUserQualified = (data) => {
    // Check q1 through q6 against required answers
    for (let i = 1; i <= 6; i++) {
      const questionKey = `q${i}`;
      const userAnswer = data[questionKey];
      const requiredAnswer = requiredAnswers[questionKey];
      
      // If answer doesn't match required answer -> NOT qualified
      if (userAnswer !== requiredAnswer) {
        console.log(`Not qualified on ${questionKey}: Expected "${requiredAnswer}", got "${userAnswer}"`);
        return false;
      }
    }
    // q7 (US citizen) can be Yes or No, so no check needed
    return true;
  };

  const validateForm = () => {
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
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.bestContactDateTime.trim()) {
      newErrors.bestContactDateTime = "Best contact date and time is required";
    }

    questions.forEach((item) => {
      if (!formData[item.name]) {
        newErrors[item.name] = "Please answer this question";
      }
    });

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms to continue";
    }

    return newErrors;
  };

  const submitToCRM = async (payload) => {
    const body = {
      countryName: "USA",
      brandType: "Internal",
      brandName: "Project 6",
      websiteName: "Connect 2 Attorney",
      formPath: "/ssdi-a-kq",
      vertical: "SSDI",
      formname: "SSDI Eligibility Landing Page A KQ",
      finalSubmit: true,
      deleteFromWebsiteLogs: true,

      data: {
        name: payload.fullName,
        firstName: payload.fullName.split(" ")[0] || "",
        lastName: payload.fullName.split(" ").slice(1).join(" ") || "",
        fullName: payload.fullName,
        phone: payload.phone,
        email: payload.email,
        state: payload.state,
        bestContactDateTime: payload.bestContactDateTime,
        ageBetween55And63: payload.q1,
        currentlyWorking: payload.q2,
        healthCondition12Months: payload.q3,
        workedAtLeast5OfLast10Years: payload.q4,
        receivingSocialSecurityDisabilityBenefits: payload.q5,
        attorneyHandlingCase: payload.q6,
        usCitizen: payload.q7,
        consent: payload.consent,
        submissionDate: payload.submissionDate,
        submissionDateCST: payload.submissionDate,
        localTime: payload.localTime,
        timezone: payload.timezone,
        ipAddress: payload.ip_address,
        pageSource: payload.pageSource,
        trustedFormCertUrl: payload.certId,
        trustedFormPingUrl: payload.pingUrl,
        trustedFormToken: payload.tokenUrl,
        gclid: payload.gclid,
        gbraid: payload.gbraid,
        wbraid: payload.wbraid,
      },
    };

    const response = await fetch(CRM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submissionInProgress.current) return;

    setTouched({
      fullName: true,
      phone: true,
      email: true,
      state: true,
      bestContactDateTime: true,
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
      q7: true,
      consent: true,
    });

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      console.log("Form validation failed");
      return;
    }

    // CRITICAL: Check if user is qualified BEFORE any submission
    const qualified = isUserQualified(formData);
    
    if (!qualified) {
      console.log("User is NOT qualified - Showing Oops modal - NO emails will be sent");
      setDisqualified(true);
      setShowOopsModal(true);
      // IMPORTANT: Stop execution here - NO CRM submission, NO emails
      return;
    }

    console.log("User IS qualified - Proceeding with form submission and emails");

    submissionInProgress.current = true;
    setIsSubmitting(true);

    const trustedFormData = await getTrustedFormData();

    const params =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();

    const cstSubmissionDate = getCSTDateTime();

    const payload = {
      ...formData,
      fullName: formData.fullName.trim(),
      phone: `+1${formData.phone.replace(/\D/g, "")}`,
      email: formData.email.trim(),
      state: formData.state,
      bestContactDateTime: convertToCST(formData.bestContactDateTime),
      consent: formData.consent,
      certId: trustedFormData.certId,
      tokenUrl: trustedFormData.tokenUrl,
      pingUrl: trustedFormData.pingUrl,
      gclid: params.get("gclid") || "",
      gbraid: params.get("gbraid") || "",
      wbraid: params.get("wbraid") || "",
      submissionDate: cstSubmissionDate,
      localTime: new Date().toString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ip_address: ipAddress,
      pageSource: getSourceUrl(),
      formname: "SSDI Eligibility Landing Page A KQ",
      receivingSocialSecurityDisabilityBenefits: formData.q5,
      attorneyHandlingCase: formData.q6,
      usCitizen: formData.q7,
    };

    try {
      // Submit to CRM
      await submitToCRM(payload);
      console.log("CRM submission successful");

      const userData = buildAdvancedMatching({
        email: payload.email,
        phoneNumber: payload.phone,
      });

      if (!completeRegistrationTracked.current) {
        completeRegistrationTracked.current = true;
        trackSingleEventWithUserData(
          META_PIXEL_ID,
          "CompleteRegistration",
          userData
        );
      }

      // Send emails ONLY if qualified (which we already confirmed)
      await Promise.all([
        SSDISendAdminEmail({ formData: payload }),
        SSDISendUserEmail({ formData: payload }),
      ]);
      console.log("Emails sent successfully");

      setShowThankYou(true);

    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      state: "",
      bestContactDateTime: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      consent: false,
    });
    setErrors({});
    setTouched({});
    setDisqualified(false);
  };

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
    <section className="w-full bg-[#1C2D8C] py-[60px] sm:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[16px] sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <h1 className="font-lato font-bold text-[30px] leading-[45px] sm:text-[55px] sm:leading-[80px]">
            <span className="text-[#F8D216]">Check Now</span>
            <span className="text-white"> If You Qualify for Your </span>
            <br />
            <span className="text-white">SSDI Benefits</span>
          </h1>

          <div className="h-[20px] sm:h-[25px]" />
          
          <div className="h-[10px]" />

          <div className="flex justify-between lg:justify-start gap-[12px] sm:gap-[20px] w-full">
            {[
              [qsp, "Quick and", "Simple Process"],
              [nuf, "No", "Upfront Fees"],
              [mb, "Maximized", "Benefits"],
            ].map(([icon, line1, line2], index) => (
              <div
                key={index}
                className="relative overflow-hidden w-[31%] sm:w-[180px] px-[10px] py-[16px] sm:p-[20px] rounded-[12px] flex flex-col items-center text-center bg-[rgba(255,255,255,0.06)] backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              >
                <img
                  src={icon}
                  alt="icon"
                  className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] mb-[10px]"
                />

                <p className="text-white font-lato text-[13px] sm:text-[20px] font-bold leading-[18px] sm:leading-[26px]">
                  {line1} <br /> {line2}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white text-[#162766] rounded-xl shadow-xl overflow-hidden w-full">
          <div className="w-full h-[4px] bg-[#F8D216]" />

          <div className="px-5 sm:px-6 py-6">
            <h2 className="font-lato text-[24px] sm:text-[30px] font-extrabold leading-[32px] text-center text-[#162766] mb-4">
              Fill Out the Form to Check Your SSDI Eligibility
            </h2>

            <form id="ssdi-form" onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
              <input type="hidden" id="xxTrustedFormCertToken" name="xxTrustedFormCertToken" />
              <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" />

              <div>
                <label className="font-lato text-[#191B37] text-[15.8px] leading-[28px]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={`w-full border rounded-md px-3 py-2 text-[15px] ${
                    touched.fullName && errors.fullName
                      ? "border-red-500"
                      : "border-[#D7DBEA]"
                  }`}
                />

                {touched.fullName && errors.fullName && (
                  <span className="text-[11px] text-red-500">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-lato text-[#191B37] text-[15.8px] leading-[28px]">
                    Phone Number
                  </label>

                  <div
                    className={`flex items-center border rounded-md px-3 py-2 ${
                      touched.phone && errors.phone
                        ? "border-red-500"
                        : "border-[#D7DBEA]"
                    }`}
                  >
                    <span className="text-[13px] font-medium text-[#162766] pr-2 border-r border-[#E5E7EB] mr-2">
                      +1
                    </span>

                    <input
                      type="text"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      inputMode="numeric"
                      maxLength={14}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: formatPhoneInput(e.target.value),
                        })
                      }
                      className="w-full outline-none text-[14px] bg-transparent"
                    />
                  </div>

                  {touched.phone && errors.phone && (
                    <span className="text-[11px] text-red-500">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label className="font-lato text-[#191B37] text-[15.8px] leading-[28px]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="e.g. john.smith@mail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full border rounded-md px-3 py-2 text-[15px] ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-[#D7DBEA]"
                    }`}
                  />

                  {touched.email && errors.email && (
                    <span className="text-[11px] text-red-500">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="font-lato text-[#191B37] text-[15.8px] leading-[28px]">
                  State
                </label>

                <select
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  className={`w-full border rounded-md px-3 py-2 text-[15px] bg-white ${
                    touched.state && errors.state
                      ? "border-red-500"
                      : "border-[#D7DBEA]"
                  }`}
                >
                  <option value="">Select Your State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                {touched.state && errors.state && (
                  <span className="text-[11px] text-red-500">
                    {errors.state}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-2 font-lato text-[#191B37] text-[15.8px] leading-[28px]">
                  Best Date & Time to Contact You
                </label>
                <input
                  type="datetime-local"
                  name="bestContactDateTime"
                  value={formData.bestContactDateTime}
                  onChange={(e) =>
                    setFormData({ ...formData, bestContactDateTime: e.target.value })
                  }
                  onClick={(e) => e.target.showPicker?.()}
                  min={getMinDateTime()}
                  className={`w-full border rounded-md px-3 py-2 text-[15px] ${
                    touched.bestContactDateTime && errors.bestContactDateTime
                      ? "border-red-500"
                      : "border-[#D7DBEA]"
                  }`}
                />

                {touched.bestContactDateTime && errors.bestContactDateTime && (
                  <span className="text-[11px] text-red-500">
                    {errors.bestContactDateTime}
                  </span>
                )}
              </div>

              {/* Questions Section - Original Questions */}
              {questions.map(({ q, name, options }) => (
                <div key={name}>
                  <p className="font-lato text-[#191B37] text-[15.8px] leading-[28px]">
                    {q}
                  </p>

                  <div
                    className={`grid gap-3 ${
                      options.length === 3 ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {options.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 px-3 py-3 rounded-md border border-[#D7DBEA] cursor-pointer has-[:checked]:bg-[#E1E4F0]"
                      >
                        <input
                          type="radio"
                          name={name}
                          value={opt}
                          checked={formData[name] === opt}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [name]: e.target.value,
                            })
                          }
                          className="peer hidden"
                        />

                        <span className="w-4 h-4 rounded-full border border-[#162766] peer-checked:bg-[#162766]" />

                        <span className="text-[14px] sm:text-[15px] font-medium">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>

                  {touched[name] && errors[name] && (
                    <span className="text-[11px] text-red-500">
                      {errors[name]}
                    </span>
                  )}
                </div>
              ))}

              <div>
                <label className="flex items-start gap-2 font-lato text-[11px] leading-[15px] text-[#4E5069]">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consent: e.target.checked,
                      })
                    }
                    className="mt-[2px] accent-[#162766]"
                  />

                  <span>
                    I agree to the{" "}
                    <a
                      href="/PrivacyPolicy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-800"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/Disclaimer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-800"
                    >
                      Disclaimer
                    </a>{" "}
                    and give my express written consent to be contacted by
                    telephone, email, text message, AI call from AI agents or
                    mail regarding case options. Message and data rates may
                    apply. This is Legal advertising.
                  </span>
                </label>

                {touched.consent && errors.consent && (
                  <span className="text-[11px] text-red-500 block mt-1">
                    {errors.consent}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-[56.5px] bg-[#F8D216] hover:bg-[#E5C414] transition-colors font-['Segoe_UI'] text-[16px] sm:text-[18px] font-bold tracking-[2px] uppercase text-[#162766] rounded-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "SUBMITTING..." : "CHECK MY ELIGIBILITY"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showOopsModal && (
        <OopsModal
          onClose={() => {
            setShowOopsModal(false);
            resetForm();
          }}
        />
      )}
    </section>
  );
}
