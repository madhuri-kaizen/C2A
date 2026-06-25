'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Logo  = "/logotitle.svg";
const phoneIcon = "/phone.svg";
const ShieldLock = "/shield-lock.svg";
import {
  SSDIRIGSendUserEmail,
} from "../../emailService2";
import {
  ensureMetaPixel,
} from  "../../utils/metaPixel";

export default function SSDIRIG() {
  const resetFullForm = () => {
    setFormData({
      first_name: "",
      last_name: "",
      callerid: "",
      email: "",
      source_url: "",
      trusted_form_cert_url: "",
    });

    setIsSubmitting(false);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ipAddress, setIpAddress] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    callerid: "",
    email: "",
    source_url: "",
    trusted_form_cert_url: "",
  });

  const CRM_API_URL =
    "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";
  const RINGBA_ENRICH_URL =
    "https://display.ringba.com/enrich/2972765621298660795?callerid=<<E.164-CALLER-NUMBER>>";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "callerid") {
      const digits = value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

      setFormData({
        ...formData,
        callerid: digits ? `+1${digits}` : "",
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
    if (!formData.first_name.trim()) return "First name is required";
    if (!formData.last_name.trim()) return "Last name is required";
    if (!formData.callerid.trim()) return "Caller ID is required";
    if (!formData.email.trim()) return "Email address is required";
    if (!formData.source_url.trim()) return "Source URL is required";
    if (!formData.trusted_form_cert_url.trim()) return "Trusted Form Cert URL is required";

    const callerIdRegex = /^\+1\d{10}$/;
    if (!callerIdRegex.test(formData.callerid)) {
      return "Enter a valid 10 digit caller ID";
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
    if (window.fbq) {
      window.fbq("track", "CompleteRegistration");
    }
  }, []);
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
  const buildRingbaEnrichUrl = (payload) => {
    const url = new URL(
      RINGBA_ENRICH_URL.replace(
        "<<E.164-CALLER-NUMBER>>",
        encodeURIComponent(payload.callerid)
      )
    );

    url.searchParams.set("first_name", payload.first_name);
    url.searchParams.set("last_name", payload.last_name);
    url.searchParams.set("email", payload.email);
    url.searchParams.set("source_url", payload.source_url);
    url.searchParams.set("trusted_form_cert_url", payload.trusted_form_cert_url);

    return url.toString();
  };
  const sendRingbaEnrichment = async (payload) => {
    try {
      await fetch(buildRingbaEnrichUrl(payload), {
        method: "POST",
        mode: "no-cors",
      });
    } catch (error) {
      console.warn("Ringba enrichment request failed:", error);
    }
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
    const sourceUrl = formData.source_url.trim();
    const pageSource = window.location.href;
    const trustedFormCertUrl =
      formData.trusted_form_cert_url.trim() || trustedFormData.certId || "";

    const payload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      fullName: `${formData.first_name.trim()} ${formData.last_name.trim()}`,
      firstName: formData.first_name.trim(),
      lastName: formData.last_name.trim(),
      callerid: formData.callerid.trim(),
      caller_id: formData.callerid.trim(),
      phone: formData.callerid.trim(),
      phoneNumber: formData.callerid.trim(),
      email: formData.email.trim(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      localTime: new Date().toString(),
      ip_address: submittedIpAddress,
      ipAddress: submittedIpAddress,
      source_url: sourceUrl,
      sourceUrl,
      pageSource,
      page_source: pageSource,
      trusted_form_cert_url: trustedFormCertUrl,
      trustedFormCertUrl,
      certId: trustedFormCertUrl,
      pingUrl: trustedFormData.pingUrl,
      tokenUrl: trustedFormData.tokenUrl,
      trustedFormPingUrl: trustedFormData.pingUrl,
      trustedFormToken: trustedFormData.tokenUrl,
      submissionDate: cstSubmissionDate,
      submissionDateCST: cstSubmissionDate,
      form_type: "SSDI RIG Landing Page",
    };

    try {
      await sendRingbaEnrichment(payload);

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
          formname: "SSDI RIG Landing Page",
          vertical: "SSDI",
          formPath: window.location.pathname,
          finalSubmit: true,

          data: {
            name: payload.fullName,
            fullName: payload.fullName,
            first_name: payload.first_name,
            last_name: payload.last_name,
            firstName: payload.first_name,
            lastName: payload.last_name,
            callerid: payload.callerid,
            caller_id: payload.caller_id,
            phone: payload.phone,
            phoneNumber: payload.phoneNumber,
            email: payload.email,
            timezone: payload.timezone,
            localTime: payload.localTime,
            source_url: payload.source_url,
            sourceUrl: payload.sourceUrl,
            page_source: payload.page_source,
            trusted_form_cert_url: payload.trusted_form_cert_url,
            trustedFormCertUrl: payload.trustedFormCertUrl,
            trustedFormPingUrl: payload.trustedFormPingUrl,
            trustedFormToken: payload.trustedFormToken,
            certId: payload.certId,
            pingUrl: payload.pingUrl,
            tokenUrl: payload.tokenUrl,
            ipAddress: payload.ipAddress,
            ip_address: payload.ip_address,

            pageSource: payload.pageSource,
            submissionDate: payload.submissionDate,
            submissionDateCST: payload.submissionDateCST,
            form_type: payload.form_type,
          },
        }),
      });

      if (!crmResponse.ok) {
        const errorText = await crmResponse.text();
        console.warn("CRM saved but returned error:", crmResponse.status, errorText);
      }

      await SSDIRIGSendUserEmail({ formData: payload });

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
      {/* <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" />
      <input type="hidden" id="xxTrustedFormCertToken" name="xxTrustedFormCertToken" />
      <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" /> */}

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
              href="tel:+13213420195"
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
                  (321) 342-0195
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
              href="tel:+13213420195"
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
                  (321) 342-0195
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

      <main className="flex-1 text-center px-5 pt-10 sm:pt-14 pb-16">
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
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none"
              />

              <input
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none"
              />
            </div>

            <input
              name="callerid"
              type="tel"
              placeholder="Caller ID"
              value={formData.callerid}
              onChange={handleInputChange}
              maxLength={12}
              inputMode="numeric"
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-3"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-3"
            />
            <input
              name="source_url"
              type="text"
              placeholder="Source URL"
              value={formData.source_url}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-3"
            />
            <input
              name="trusted_form_cert_url"
              type="text"
              placeholder="Trusted Form Cert URL"
              value={formData.trusted_form_cert_url}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-[#1A2B4F] rounded-md px-3 text-[12px] outline-none mb-4"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mx-auto block bg-[#0A1F8F] text-white font-bold text-[13px] px-10 py-4 rounded-lg disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Get My Case Reviewed "}
            </button>

            <p className="mt-5 text-[#263956] text-[9px] leading-[14px]">
              By clicking the “Get My Case Reviewed” button, I certify that I am
              at least eighteen (18) years of age and agree to be contacted by
              phone, SMS, email, automated technology, or prerecorded voice
              messages regarding my case review.
            </p>
          </form>
      </main>

      <footer className="mt-auto bg-[#071654] text-white px-5 sm:px-10 py-8 text-[11px] sm:text-xs leading-relaxed">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5">
          {/* <div className="text-[#FFF] font-[Arial] text-[13.869px] font-bold leading-normal flex items-center gap-2">
            <span>
              <img
                src={ShieldLock}
                alt="Shield Lock"
                className="w-5 h-5 object-contain"
              />
            </span>

            USA Best Benefits
          </div> */}

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
          Connect2Attorney.com is continually updated to ensure current information about medications and medical devices and associated side effects is provided to the public. The information on the site is meant to complement a doctor or healthcare professional’s advice and should not be used in place of medical advice. It is important to note that most, if not all, drugs or medical devices discussed on Connect2Attorney.com are FDA approved.
        </p>
        <p className="text-white font-[400] text-[11px] sm:text-xs leading-[18px] font-[Arial] mb-4">
          Content found on Connect2Attorney.com should not be taken as medical advice and site visitors are encouraged to speak with a medical professional for medical treatment, information and recommendations. Furthermore, site visitors should not discontinue use of a drug or medical device without first seeking the advice of medical professional.
        </p>
        <p className="text-white font-[400] text-[11px] sm:text-xs leading-[18px] font-[Arial] mb-5">
          Additionally, the legal information on Connect2Attorney.com should not be taken as legal advice, as the content on the site is meant to provide general legal information and is not intended to provide information about a specific visitor’s situation. The information on Connect2Attorney.com is not an offer to create an attorney-client relationship or perform legal services. Visitors should not act or refrain from acting due to information found on this site without the guidance of a qualified and licensed attorney.
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
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>

            <h3 className="text-[#0A1F8F] text-[24px] font-bold mb-2">
              Thank You!
            </h3>

            <p className="text-[#555] text-[15px] leading-6 mb-5">
              Your information has been submitted successfully.
              <br />
              Our team will get back to you soon.
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
