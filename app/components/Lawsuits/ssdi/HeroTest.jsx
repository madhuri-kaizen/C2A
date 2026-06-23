"use client";

import { useState, useRef, useEffect } from "react";

const phoneIcon = "/Form/phone1.svg";
const qsp = "/Form/qsp.svg";
const nuf = "/Form/nuf.svg";
const mb = "/Form/mb.svg";
const logo  = "/logotitle.svg";
const successIcon = "/Form/success.png";
const tyBuildings = "/Form/tybuildings.png";
const tyBuildingsMobile = "/Form/tybuildingsmobile.png";
import {
  SSDISendAdminEmail,
  SSDISendUserEmail,
} from "../../emailService2";

import {
  ensureMetaPixel,
  buildAdvancedMatching,
  trackEventWithUserData,
} from  "../../utils/metaPixel";

const CRM_API_URL =
  "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

const META_PIXEL_ID = ""; //1293225752464496

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

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

 const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  state: "",
  q1: "Yes",      // Between 50 and 65
  q2: "No",       // Not currently receiving SSDI
  q3: "Yes",      // Worked 5 of last 10 years
  q4: "No",       // Not currently working
  q5: "No",       // Not represented by attorney
  q6: "Yes",      // Under doctor's treatment
  q7: "Yes",      // Located in the US
  consent: true,
});

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

    useEffect(() => {
    ensureMetaPixel(META_PIXEL_ID);

    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, []);

    useEffect(() => {
    if (showThankYou && window.fbq) {
      window.fbq("track", "ThankYou");
    }
  }, [showThankYou]);

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

  const getTrustedFormData = () => {
    return new Promise((resolve) => {
      const certUrl = document.getElementById("xxTrustedFormCertUrl")?.value;
      const tokenUrl = document.getElementById("xxTrustedFormCertToken")?.value;
      const pingUrl = document.getElementById("xxTrustedFormPingUrl")?.value;

      resolve({
        certId: certUrl || "",
        tokenUrl: tokenUrl || "",
        pingUrl: pingUrl || "",
      });
    });
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

  const questions = [
    {
      name: "q1",
      q: "Are you between the ages of 50 and 65?",
      options: ["Yes", "No"],
    },
    {
      name: "q2",
      q: "Are you currently receiving Social Security Disability benefits?",
      options: ["Yes", "No"],
    },
    {
      name: "q3",
      q: "Have you worked at least 5 of the last 10 years?",
      options: ["Yes", "No", "Not sure"],
    },
    {
      name: "q4",
      q: "Are you currently working?",
      options: ["Yes", "No"],
    },
    {
      name: "q5",
      q: "Are you already represented by an attorney?",
      options: ["Yes", "No"],
    },
    {
      name: "q6",
      q: "Are you currently under doctor’s treatment?",
      options: ["Yes", "No"],
    },
    {
      name: "q7",
      q: "Are you located in the United States?",
      options: ["Yes", "No"],
    },
  ];

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
    const ipAddress = await getIPAddress();

    const body = {
      countryName: "USA",
      brandType: "Internal",
      brandName: "Project 6",
      websiteName: "Connect2Attorney",
      formPath: "/ssdi-a",
      vertical: "SSDI",
      formname: "SSDI Eligibility Landing Page A",
      finalSubmit: true,
      deleteFromWebsiteLogs: true,
useSynthflow: true,
      data: {
        name: payload.fullName,
        firstName: payload.fullName.split(" ")[0] || "",
        lastName: payload.fullName.split(" ").slice(1).join(" ") || "",

        phone: payload.phone,
        email: payload.email,
        state: payload.state,

        q1: payload.q1,
        q2: payload.q2,
        q3: payload.q3,
        q4: payload.q4,
        q5: payload.q5,
        q6: payload.q6,
        q7: payload.q7,

        ageBetween50And62: payload.q1,
        receivingSocialSecurityDisabilityBenefits: payload.q2,
        workedAtLeast5OfLast10Years: payload.q3,
        currentlyWorking: payload.q4,
        alreadyRepresentedByAttorney: payload.q5,
        underDoctorsTreatment: payload.q6,
        locatedInUnitedStates: payload.q7,

        consent: payload.consent,

        submissionDate: new Date().toISOString(),
        pageSource: getSourceUrl(),

        trustedFormCertUrl: payload.certId,
        trustedFormPingUrl: payload.pingUrl,
        trustedFormToken: payload.tokenUrl,

        ipAddress,

        gclid: payload.gclid,
        gbraid: payload.gbraid,
        wbraid: payload.wbraid,

        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
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

    setTouched({
      fullName: true,
      phone: true,
      email: true,
      state: true,
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

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    const trustedFormData = await getTrustedFormData();

    const params =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();

    const payload = {
      ...formData,

      phone: `${formData.phone.replace(/\D/g, "")}`,

      certId: trustedFormData.certId,
      tokenUrl: trustedFormData.tokenUrl,
      pingUrl: trustedFormData.pingUrl,

      gclid: params.get("gclid") || "",
      gbraid: params.get("gbraid") || "",
      wbraid: params.get("wbraid") || "",

      submissionDate: new Date().toISOString(),
      pageSource: getSourceUrl(),
      formname: "SSDI Eligibility Landing Page",
    };

    try {
      await submitToCRM(payload);

      await Promise.all([
        SSDISendAdminEmail({ formData: payload }),
        SSDISendUserEmail({ formData: payload }),
      ]);

      setShowThankYou(true);

      const userData = buildAdvancedMatching({
        email: payload.email,
        phoneNumber: payload.phone,
      });

      trackEventWithUserData(
        "CompleteRegistration",
        userData
      );

    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            <span className="text-white">SSDI Benefits with </span>
            <span className="text-[#F8D216]">Expert Legal Help</span>
          </h1>

          <div className="h-[20px] sm:h-[25px]" />

          <p className="max-w-[900px] font-inter text-[15px] leading-[25px] sm:text-[18px] sm:leading-[28px] text-white">
            Don’t let paperwork, delays, or confusion stop you from getting the
            Social Security Disability Insurance (SSDI) benefits you’re entitled
            to. Our experienced attorneys will guide you through every step of
            the process & fight for your approval.
          </p>

          <div className="h-[35px]" />

         

          <div className="h-[50px]" />

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

            <form  id="ssdi-form" onSubmit={handleSubmit} className="space-y-4">
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

                <input
                  type="text"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  className={`w-full border rounded-md px-3 py-2 text-[15px] ${
                    touched.state && errors.state
                      ? "border-red-500"
                      : "border-[#D7DBEA]"
                  }`}
                />

                {touched.state && errors.state && (
                  <span className="text-[11px] text-red-500">
                    {errors.state}
                  </span>
                )}
              </div>

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
    </section>
  );
}