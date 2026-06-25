'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Logo  = "/logotitle.svg";
const phoneIcon = "/phone.svg";
const ShieldLock = "/shield-lock.svg";
import {
  SSDIEKQSendAdminEmail,
  SSDIEKQSendUserEmail,
} from "../../emailService2";
import {
  ensureMetaPixel,
} from  "../../utils/metaPixel";

const steps = [
  {
    title:
      "Has a physical or mental health condition kept you from working for 12 months or longer?",
    options: ["Yes", "No"],
    disqualifyOn: "No",
  },
  {
    title: "Are you between the age of 55 - 63?",
    options: ["Yes", "No"],
    disqualifyOn: "No",
  },
  {
    title: "Are you working right now?",
    options: ["Yes", "No"],
    disqualifyOn: "Yes",
  },
  {
    title: "Have you earned a pay-check in the last 5 years (since 2021)?",
    options: ["Yes", "No"],
    disqualifyOn: "No",
  },
  {
    title: "Are you a U.S. citizen?",
    options: ["Yes", "No"],
    disqualifyOn: "No",
  },
  {
    title: "Have you been a legal permanent resident since August 22, 1994?",
    options: ["Yes", "No"],
    disqualifyOn: "No",
  },
  {
    title: "Which best describes your marital status?",
    options: ["Single", "Married", "Widowed", "Divorced"],
  },
  {
    title: "Who shares your home with you?",
    options: [
      "Alone",
      "With my spouse and/or children",
      "Other family",
      "Friends",
    ],
  },
  {
    title: "Do you help pay the household bills?",
    options: ["Yes", "No"],
  },
  {
    title:
      "Do you have an agreement to pay back your living expenses even if you aren't approved for benefits?",
    options: ["Yes", "No"],
    disqualifyOn: "Yes",
  },
  {
    title: "How are you covering your day-to-day expenses?",
    options: [
      "Friends",
      "Family",
      "Government Assistance",
      "My Savings",
      "Long Term Disability",
      "Retirement / Pension",
      "VA Benefits",
    ],
  },
  {
    title: "Do you receive more than $2,000 a month in VA benefits?",
    options: ["Yes", "No"],
    disqualifyOn: "Yes",
  },
  {
    title: "How many vehicles do you own?",
    options: ["One", "More than one", "None"],
  },
  {
    title: "Do you own your home?",
    options: [
      "Yes, and I currently live in it",
      "Yes, I live in it and own another property",
      "No",
    ],
  },
  {
    title: "When did you last see a doctor about your health condition?",
    options: [
      "In 2026",
      "In 2025, but I have an upcoming 2026 appointment",
      "Prior to 2025",
      "Never",
    ],
    disqualifyOn: ["Never", "Prior to 2025"],
  },
  {
    title: "Have you already applied for Social Security Disability?",
    options: ["Yes", "No"],
    disqualifyOn: "No",
  },
  {
    title: "Are you currently receiving social security benefits?",
    options: ["Yes", "No"],
    disqualifyOn: "Yes",
  },
  {
    title: "Is an attorney already handling your case?",
    options: ["Yes", "No"],
    disqualifyOn: "Yes",
  },
  {
    title: "Want a disability attorney to fight your case for free until you win?",
    options: ["Yes", "No"],
    disqualifyOn: "No",
  },
];

export default function SSDIEKQ() {
  const resetFullForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      state: "",
      phone: "",
      bestContactDateTime: "",
      termsAccepted: false,
      email: "",
    });

    setAnswers({});
    setStep(0);
    setShowFinalForm(false);
    setIsSubmitting(false);
    setDisqualified(false);
  };

  const buildQuestionFields = () => {
    const questionFields = {};

    Object.entries(answers).forEach(([question, answer]) => {
      questionFields[question] = answer;
    });

    return questionFields;
  };

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFinalForm, setShowFinalForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [disqualified, setDisqualified] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    state: "",
    phone: "",
    bestContactDateTime: "",
    email: "",
    termsAccepted: false,
  });

  const CRM_API_URL =
    "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";

  const progress = showFinalForm
    ? 100
    : Math.round(((step + 1) / steps.length) * 100);

  const handleDisqualification = () => {
    setDisqualified(true);
    setShowThankYouModal(true);
    // Reset form to first question
    setAnswers({});
    setStep(0);
    setShowFinalForm(false);
  };

  const handleAnswer = (answer) => {
    const currentStep = steps[step];
    const updatedAnswers = {
      ...answers,
      [currentStep.title]: answer,
    };

    setAnswers(updatedAnswers);

    // Check for disqualification
    if (currentStep.disqualifyOn) {
      const isDisqualified = Array.isArray(currentStep.disqualifyOn)
        ? currentStep.disqualifyOn.includes(answer)
        : currentStep.disqualifyOn === answer;

      if (isDisqualified) {
        handleDisqualification();
        return;
      }
    }

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShowFinalForm(true);
    }
  };

  const handleBack = () => {
    if (showFinalForm) {
      setShowFinalForm(false);
      return;
    }

    if (step > 0) {
      setStep(step - 1);
    }
  };

  const buildResponses = () => {
    return steps.map((item) => ({
      question: item.title,
      answer: answers[item.title] || "N/A",
    }));
  };

  const buildAnswersText = () => {
    return buildResponses()
      .map((item) => `${item.question} : ${item.answer}`)
      .join("\n\n");
  };

  const buildEmailQuestionParams = () => {
    const questionParams = {};

    steps.forEach((item, index) => {
      questionParams[`question_${index + 1}`] = answers[item.title] || "N/A";
    });

    return questionParams;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
      return;
    }
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

      setFormData({
        ...formData,
        phone: `+1${digits}`,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const META_PIXEL_ID = "1712265779803116";
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!formData.email.trim()) return "Email address is required";
    if (!formData.state.trim()) return "State is required";
    if (!formData.bestContactDateTime.trim()) return "Best contact date and time is required";
    if (!formData.termsAccepted) return "You must accept the terms and conditions";

    const phoneRegex = /^\+1\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      return "Enter a valid 10 digit phone number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Enter a valid email address";
    }

    return "";
  };

  useEffect(() => {
    ensureMetaPixel(META_PIXEL_ID);

    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, []);

  const getIPAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip || "";
    } catch (error) {
      console.error("Failed to capture IP address:", error);
      return "";
    }
  };

  useEffect(() => {
    const captureIpAddress = async () => {
      setIpAddress(await getIPAddress());
    };

    captureIpAddress();
  }, []);

  useEffect(() => {
    if (showFinalForm && window.fbq) {
      window.fbq("track", "CompleteRegistration");
    }
  }, [showFinalForm]);

  useEffect(() => {
    if (showThankYouModal && window.fbq) {
      window.fbq("track", "ThankYou");
    }
  }, [showThankYouModal]);

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

  const getTrustedFormFieldValue = (fieldName) => {
    return (
      document.getElementById(fieldName)?.value ||
      document.querySelector(`input[name="${fieldName}"]`)?.value ||
      ""
    );
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const getMinDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

    return now.toISOString().slice(0, 16);
  };

  const getTrustedFormData = () => {
    return new Promise((resolve) => {
      const readTrustedFormData = () => ({
        certId: getTrustedFormFieldValue("xxTrustedFormCertUrl"),
        tokenUrl: getTrustedFormFieldValue("xxTrustedFormCertToken"),
        pingUrl: getTrustedFormFieldValue("xxTrustedFormPingUrl"),
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

  const handleFinalSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    setIsSubmitting(true);

    const trustedFormData = await getTrustedFormData();
    const submittedIpAddress = ipAddress || await getIPAddress();
    if (!ipAddress && submittedIpAddress) {
      setIpAddress(submittedIpAddress);
    }

    console.log("TrustedForm Data:", trustedFormData);
    const cstSubmissionDate = getCSTDateTime();
    const payload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      fullName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      state: formData.state.trim(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      localTime: new Date().toString(),
      responses: buildResponses(),
      answersText: buildAnswersText(),
      bestContactDateTime: convertToCST(formData.bestContactDateTime),
      consentgiven: formData.termsAccepted,
      ip_address: submittedIpAddress,
      ...buildEmailQuestionParams(),
      certId: trustedFormData.certId,
      pingUrl: trustedFormData.pingUrl,
      tokenUrl: trustedFormData.tokenUrl,
    };

    try {
      const crmResponse = await fetch(CRM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          countryName: "USA",
          brandType: "Internal",
          brandName: "Project 6",
          websiteName: "Connect2Attorney",
          formname: "SSDI EKQ Landing Page",
          vertical: "SSDI",
          formPath: window.location.pathname,
          finalSubmit: true,

          data: {
            name: payload.fullName,
            firstName: payload.firstName,
            lastName: payload.lastName,
            state: payload.state,
            fullName: payload.fullName,
            email: payload.email,
            phone: payload.phone,
            bestContactDateTime: payload.bestContactDateTime,
            consentgiven: payload.consentgiven,
            ipAddress: payload.ip_address,
            ip_address: payload.ip_address,
            ...buildQuestionFields(),

            trustedFormCertUrl: payload.certId,
            trustedFormPingUrl: payload.pingUrl,
            trustedFormToken: payload.tokenUrl,

            pageSource: window.location.href,
            submissionDate: cstSubmissionDate,
            submissionDateCST: cstSubmissionDate,
          },
        }),
      });

      if (!crmResponse.ok) {
        const errorText = await crmResponse.text();
        console.warn("CRM saved but returned error:", crmResponse.status, errorText);
      }

      // Only send emails for qualified leads
      await Promise.all([
        SSDIEKQSendAdminEmail({ formData: payload }),
        SSDIEKQSendUserEmail({ formData: payload }),
      ]);

      setShowThankYouModal(true);

      resetFullForm();
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#07177F]">
      <div className="bg-[#EDC14A] text-white text-center text-[10px] sm:text-xs font-bold py-1">
        This is NOT a government website
      </div>

      <header className="border-b border-gray-200 px-5 sm:px-10 py-5">
        {/* MOBILE */}
        <div className="sm:hidden">
          {/* Row 1 */}
          <div className="flex items-center justify-between">
            <img
              src={Logo}
              alt="Connect2Attorney"
              className="w-[180px] sm:w-[216px] h-auto object-contain"
            />

            <div className="flex items-center gap-2 text-xs font-[700] text-[#1B5E20]">
              <img
                src={ShieldLock}
                alt="Shield Lock"
                className="w-5 h-5 object-contain"
              />
              <span>Secure Form</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-4 flex justify-center">
            <a
              href="tel:8882021350"
              className="flex items-center h-[52px] pl-[10px] pr-[20px] rounded-[165px] bg-[#0A1F8F]"
            >
              <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#F8D216] rounded-full">
                <img
                  src={phoneIcon}
                  alt="phone"
                  className="w-[16px] h-[16px]"
                />
              </div>

              <div className="ml-[12px] flex flex-col justify-center">
                <span className="font-lato text-[#F8D216] text-[9px] font-black tracking-[3px] uppercase leading-[10px]">
                  CALL US NOW
                </span>

                <span className="font-lato text-white text-[16px] font-semibold leading-[20px]">
                  (888) 202-1350
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:grid sm:grid-cols-3 items-center">
          <div className="flex justify-start">
            <img
              src={Logo}
              alt="Connect2Attorney"
              className="w-[180px] sm:w-[216px] h-auto object-contain"
            />
          </div>

          <div className="flex justify-center">
            <a
              href="tel:8882021350"
              className="flex items-center h-[56px] pl-[10px] pr-[25px] rounded-[165px] bg-[#0A1F8F]"
            >
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#F8D216] rounded-full">
                <img
                  src={phoneIcon}
                  alt="phone"
                  className="w-[18px] h-[18px]"
                />
              </div>

              <div className="ml-[14px] flex flex-col justify-center">
                <span className="font-lato text-[#F8D216] text-[10px] font-black tracking-[5px] uppercase leading-[12px]">
                  CALL US NOW
                </span>

                <span className="font-lato text-white text-[18px] font-semibold tracking-[1px] leading-[22px] mt-[2px]">
                  (888) 202-1350
                </span>
              </div>
            </a>
          </div>

          <div className="flex justify-end items-center gap-2 text-sm font-[700] text-[#1B5E20]">
            <img
              src={ShieldLock}
              alt="Shield Lock"
              className="w-5 h-5 object-contain"
            />
            <span>Secure Form</span>
          </div>
        </div>
      </header>

      <div className="w-[90%] max-w-[760px] mx-auto mt-6">
        <div className="flex justify-between items-center text-xs sm:text-sm font-bold mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full h-2.5 bg-[#E9ECF8] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#07177F] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <main className="flex-1 text-center px-5 pt-6 sm:pt-6 pb-14 min-h-[420px]">
        {!showFinalForm ? (
          <>
            <h1 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] font-normal text-[#0A1F8F] leading-tight">
              Disability Benefits Qualification
            </h1>

            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] text-[#333]">
              Take 30 seconds to see if you qualify for disability benefits.
            </p>

            <div className="max-w-[680px] mx-auto mt-6 sm:mt-7">
              <h2 className="px-2 text-center font-[Arial] text-[18px] font-bold leading-[23px] text-[#0A1F8F]">
                {steps[step].title}
              </h2>

              <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {steps[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="w-full min-h-[48px] bg-[#07177F] text-white rounded-md text-sm font-bold hover:bg-[#1027a5] transition active:scale-[0.98] px-3 py-3"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-6 text-sm font-bold underline text-[#07177F]"
                >
                  Back
                </button>
              )}
            </div>
          </>
        ) : (
          <form
            onSubmit={handleFinalSubmit}
            className="max-w-[585px] mx-auto text-left"
          >
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
            <h2 className="text-center text-[#07177F] text-[18px] font-bold mb-1">
              Complete your profile & see your results:
            </h2>

            <p className="text-center text-[#6B88B2] text-[11px] mb-5">
              Fill in your details below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none"
              />

              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none"
              />
            </div>

            <input
              name="phone"
              type="tel"
              placeholder="+1 Phone Number"
              value={formData.phone || "+1"}
              onChange={handleInputChange}
              maxLength={12}
              inputMode="numeric"
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-3"
            />
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-3 bg-white"
            >
              <option value="">Select Your State</option>

              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-4"
            />
            <label className="block mb-2 text-[12px] font-semibold text-[#07177F]">
              Best Date & Time to Contact You
            </label>
            <input
              type="datetime-local"
              name="bestContactDateTime"
              value={formData.bestContactDateTime}
              onChange={handleInputChange}
              onClick={(e) => e.target.showPicker?.()}
              min={getMinDateTime()}
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-4"
            />
            <div className="flex items-start w-full md:w-auto mt-2 mb-4">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="mt-1 mr-3 flex-shrink-0"
              />

              <label
                htmlFor="termsAccepted"
                className="text-sm text-gray-700"
              >
                I agree to the{" "}
                <a
                  href="/PrivacyPolicy"
                  className="text-[#EDC14A] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/Disclaimer"
                  className="text-[#EDC14A] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disclaimer
                </a>{" "}
                and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mx-auto block bg-[#0A1F8F] text-white font-bold text-[13px] px-10 py-4 rounded-lg disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Get My Case Reviewed "}
            </button>

            <button
              type="button"
              onClick={handleBack}
              className="mx-auto block mt-4 text-sm font-bold underline text-[#07177F]"
            >
              Back
            </button>
          </form>
        )}
      </main>

      <footer className="mt-auto bg-[#071654] text-white px-5 sm:px-10 py-8 text-[11px] sm:text-xs leading-relaxed">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5">
          <div className="text-[11px] sm:text-xs text-white">
            🔒 256-BIT SSL SECURED
          </div>
        </div>
        <div className="border-[0.2px] border-[#EDC14A] opacity-50 mb-5"></div>
        <p className="text-white font-[400] text-[11px] sm:text-xs leading-[18px] font-[Arial] mb-4">
          Connect2Attorney.com is a website dedicated to serving the public as an
          informational resource, providing accurate content about various
          medical treatments and associated side effects. Connect2Attorney.com also
          connects users with its legal partners, who can evaluate whether an
          individual has a legal case as a result of side effects or
          complications caused by a medical treatment.
        </p>

        <p className="text-white font-[400] text-[11px] sm:text-xs leading-[18px] font-[Arial] mb-4">
          Connect2Attorney.com is not affiliated with any pharmaceutical companies or
          drug manufacturers and does not accept advertising or host online
          advertisements.
        </p>

        <p className="text-white text-[11px] sm:text-xs leading-[18px] font-[Arial] font-normal mb-4">
          <span className="font-bold">Consent to Contact</span>
          <br />
          By submitting this form, you consent to be contacted by a Connect2Attorney
          representative or a representative from the appropriate service
          provider. Any information provided to Connect2Attorney.com will be shared
          with the service provider.
        </p>
        <p className="text-white text-[11px] sm:text-xs leading-[18px] font-[Arial] font-normal mb-4">
          <span>
            Updated with Latest Information
          </span>
          <br />
          Connect2Attorney.com is continually updated to ensure current information about medications and medical devices and associated side effects is provided to the public. The information on the site is meant to complement a doctor or healthcare professional&apos;s advice and should not be used in place of medical advice. It is important to note that most, if not all, drugs or medical devices discussed on Connect2Attorney.com are FDA approved.
        </p>
        <p className="text-white font-[400] text-[11px] sm:text-xs leading-[18px] font-[Arial] mb-4">
          Content found on Connect2Attorney.com should not be taken as medical advice and site visitors are encouraged to speak with a medical professional for medical treatment, information and recommendations. Furthermore, site visitors should not discontinue use of a drug or medical device without first seeking the advice of medical professional.
        </p>
        <p className="text-white font-[400] text-[11px] sm:text-xs leading-[18px] font-[Arial] mb-5">
          Additionally, the legal information on Connect2Attorney.com should not be taken as legal advice, as the content on the site is meant to provide general legal information and is not intended to provide information about a specific visitor&apos;s situation. The information on Connect2Attorney.com is not an offer to create an attorney-client relationship or perform legal services. Visitors should not act or refrain from acting due to information found on this site without the guidance of a qualified and licensed attorney.
        </p>
        <div className="border-[0.2px] border-[#EDC14A] opacity-50"></div>
        <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-white">
          <p className="text-white font-[400] text-[11px] sm:text-xs font-[Arial] mb-4">
            © 2017–2026 Connect2Attorney.com. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/disclaimer" className="text-white font-[400] text-[11px] sm:text-xs font-[Arial]">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="text-white font-[400] text-[11px] sm:text-xs font-[Arial]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {showThankYouModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <div className="bg-white rounded-xl max-w-md w-full p-6 text-center shadow-2xl">
      {!disqualified && (
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          ✓
        </div>
      )}

      <h3 className="text-[#0A1F8F] text-[24px] font-bold mb-2">
        {disqualified ? "Oops!" : "Thank You!"}
      </h3>

      <p className="text-[#555] text-[15px] leading-6 mb-5">
        {disqualified
          ? "Unfortunately, based on your responses, you may not be eligible for this benefit at this time."
          : "Your information has been submitted successfully. Our team will get back to you soon."}
      </p>

      <button
        onClick={() => setShowThankYouModal(false)}
        className="bg-[#0A1F8F] text-white px-8 py-3 rounded-lg font-bold"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}
