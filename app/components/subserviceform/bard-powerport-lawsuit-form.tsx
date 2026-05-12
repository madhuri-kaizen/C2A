"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { sendWithEmailJS } from "./emailJsService";
import { usePathname } from "next/navigation";
import { getVerticalFromCurrentPath } from '../common/common';

const CRM_API_URL = "https://crm-internal-backend-ayb9fqawg8b6bjen.canadacentral-01.azurewebsites.net/api/submitformdata";
const CAGSYS_API_URL = "/api/cagsys"; // Using Next.js proxy

const EMAILJS_ENABLED = true;

/* ---------------- Config ---------------- */

// Allowed states from the image
const ALLOWED_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID",
  "IL", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE",
  "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

// Free ZIP to State API (Zippopotam.us)
const fetchStateFromZip = async (zip: string): Promise<string | null> => {
  try {
    const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.places && data.places.length > 0) {
      const stateAbbr = data.places[0]["state abbreviation"];
      return stateAbbr || null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching state from zip:", error);
    return null;
  }
};

const getIPAddress = async (): Promise<string> => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch {
    return "Unavailable";
  }
};

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6)
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
};

const normalizePhone = (input: string) => {
  return input.replace(/\D/g, "").slice(0, 10);
};

const formatEmail = (input: string): string => {
  if (!input) return "";
  let cleaned = String(input).trim().toLowerCase();
  cleaned = cleaned.replace(/[^\w@.\-+]/g, "");
  const atIndex = cleaned.indexOf("@");
  if (atIndex !== -1) {
    const beforeAt = cleaned.substring(0, atIndex);
    const afterAt = cleaned.substring(atIndex + 1).replace(/@/g, "");
    cleaned = beforeAt + "@" + afterAt;
  }
  return cleaned;
};

const validateEmail = (input: string) => {
  if (!input) return { isValid: false, reason: "empty" };
  const email = String(input).trim().toLowerCase();

  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) return { isValid: false, reason: "invalid" };

  const [localPart, domainPart] = email.split("@");
  if (!localPart || localPart.length === 0) return { isValid: false, reason: "invalid" };
  if (localPart.includes("..")) return { isValid: false, reason: "invalid" };
  if (localPart.startsWith(".") || localPart.endsWith(".")) return { isValid: false, reason: "invalid" };
  if (!/^[a-zA-Z0-9._-]+$/.test(localPart)) return { isValid: false, reason: "invalid" };
  if (!domainPart || domainPart.length === 0) return { isValid: false, reason: "invalid" };
  if (domainPart.includes("..")) return { isValid: false, reason: "invalid" };
  if (domainPart.startsWith(".") || domainPart.endsWith(".") || domainPart.startsWith("-") || domainPart.endsWith("-")) return { isValid: false, reason: "invalid" };
  if (!domainPart.includes(".")) return { isValid: false, reason: "invalid" };
  if (!/^[a-zA-Z0-9.-]+$/.test(domainPart)) return { isValid: false, reason: "invalid" };
  const domainParts = domainPart.split(".");
  for (const part of domainParts) {
    if (!part || part.length === 0) return { isValid: false, reason: "invalid" };
    if (part.startsWith("-") || part.endsWith("-")) return { isValid: false, reason: "invalid" };
    if (!/^[a-zA-Z0-9-]+$/.test(part)) return { isValid: false, reason: "invalid" };
  }
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return { isValid: false, reason: "invalid" };
  return { isValid: true, reason: null };
};

/* ---------------- Custom Checkbox Component ---------------- */
const checkboxClass = `
  mt-[2px]
  w-[16px] h-[16px]
  min-w-[16px] min-h-[16px]
  max-w-[16px] max-h-[16px]
  rounded-[5px]
  border border-[#162766]
  bg-white
  appearance-none
  cursor-pointer
  relative
  flex-shrink-0
  checked:bg-[#F2C438]
  checked:border-[#F2C438]
  focus:outline-none
  focus:ring-0
  focus:ring-offset-0
  after:content-['']
  after:absolute
  after:hidden
  after:left-[4px]
  after:top-[1px]
  after:w-[5px]
  after:h-[9px]
  after:border-white
  after:border-r-[2px]
  after:border-b-[2px]
  after:rotate-45
  checked:after:block
`;

/* ---------------- Custom Captcha Component - COMMENTED OUT ----------------
interface CustomCaptchaProps {
  onCaptchaChange?: (value: boolean) => void;
  resetTrigger?: boolean;
  disabled?: boolean;
}

const CustomCaptcha: React.FC<CustomCaptchaProps> = ({
  onCaptchaChange,
  resetTrigger,
  disabled = false,
}) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState<number[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isSpeakingRef = useRef(false);
  const speechSynthRef = useRef<SpeechSynthesis | null>(null);

  const generateCaptcha = () => {
    if (isSpeakingRef.current) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      isSpeakingRef.current = false;
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const offsets: number[] = [];
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      offsets.push(parseFloat((Math.random() * 10 - 5).toFixed(2)));
    }
    setCaptchaText(result);
    setCharOffsets(offsets);
    setUserInput("");
    setIsValid(false);
    onCaptchaChange?.(false);
  };

  useEffect(() => {
    generateCaptcha();
    speechSynthRef.current = window.speechSynthesis;
    return () => {
      if (speechSynthRef.current && isSpeakingRef.current) {
        speechSynthRef.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (resetTrigger) generateCaptcha();
  }, [resetTrigger]);

  useEffect(() => {
    const timer = setInterval(() => generateCaptcha(), 60000);
    return () => {
      clearInterval(timer);
      if (speechSynthRef.current && isSpeakingRef.current) {
        speechSynthRef.current.cancel();
      }
    };
  }, []);

  const speakCaptcha = () => {
    if (!("speechSynthesis" in window) || !captchaText) return;
    window.speechSynthesis.cancel();
    isSpeakingRef.current = true;
    setIsSpeaking(true);
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice: SpeechSynthesisVoice | null = null;
    if (voices.length > 0) {
      selectedVoice = voices.find((voice) => voice.lang === "en-US") || voices[0];
    }
    let currentIndex = 0;
    const speakNextChar = () => {
      if (currentIndex < captchaText.length && isSpeakingRef.current) {
        const char = captchaText[currentIndex];
        const utterance = new SpeechSynthesisUtterance(char);
        utterance.rate = 0.5;
        utterance.pitch = 0.9;
        utterance.volume = 1.0;
        utterance.lang = "en-US";
        if (selectedVoice) utterance.voice = selectedVoice;
        utterance.onend = () => {
          currentIndex++;
          if (currentIndex < captchaText.length && isSpeakingRef.current) {
            setTimeout(speakNextChar, 200);
          } else {
            isSpeakingRef.current = false;
            setIsSpeaking(false);
          }
        };
        utterance.onerror = () => {
          isSpeakingRef.current = false;
          setIsSpeaking(false);
        };
        window.speechSynthesis.speak(utterance);
      } else {
        isSpeakingRef.current = false;
        setIsSpeaking(false);
      }
    };
    speakNextChar();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value.toLowerCase() === captchaText.toLowerCase();
    setIsValid(valid);
    onCaptchaChange?.(valid);
  };

  const handleAudioToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAudioEnabled(e.target.checked);
    if (!e.target.checked && isSpeakingRef.current) {
      window.speechSynthesis.cancel();
      isSpeakingRef.current = false;
      setIsSpeaking(false);
    }
  };

  return (
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <div className="bg-gray-100 px-3 py-2 rounded font-mono text-[14px] tracking-wider select-none relative overflow-hidden min-w-[120px]">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `repeating-linear-gradient(0deg, #ccc, #ccc 1px, transparent 1px, transparent 5px)`, backgroundSize: "100% 10px", backgroundPosition: "0 50%" }} />
          <div className="relative z-10 flex justify-center">
            {captchaText.split("").map((char, index) => (
              <span key={index} style={{ transform: `translateY(${charOffsets[index] || 0}px)`, display: "inline-block", textShadow: "1px 1px 1px rgba(0,0,0,0.25)" }} className="mx-[1px]">
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-1">
          <button type="button" onClick={generateCaptcha} disabled={disabled} className={`w-8 h-8 text-[13px] text-gray-600 border border-gray-300 rounded flex items-center justify-center ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"}`} title="Refresh CAPTCHA">↻</button>
          {audioEnabled && (
            <button type="button" onClick={speakCaptcha} disabled={disabled || isSpeaking} className={`w-8 h-8 text-[13px] border border-gray-300 rounded flex items-center justify-center ${disabled || isSpeaking ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"}`} title={isSpeaking ? "Speaking..." : "Listen to CAPTCHA"}> 🔊 </button>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input type="checkbox" id="enableAudio" checked={audioEnabled} onChange={handleAudioToggle} disabled={disabled} className="w-3.5 h-3.5" />
        <label htmlFor="enableAudio" className={`text-[11px] ${disabled ? "text-gray-400" : "text-gray-600"}`}>Enable audio</label>
      </div>
      <div className="mt-2">
        <input type="text" value={userInput} onChange={handleInputChange} disabled={disabled} placeholder="Enter CAPTCHA" className={`w-full h-[36px] px-3 text-[13px] border rounded-md focus:outline-none focus:ring-1 ${disabled ? "bg-gray-100 cursor-not-allowed border-gray-300" : userInput !== "" && !isValid ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`} />
        {userInput !== "" && !isValid && !disabled && <p className="text-red-500 text-[11px] mt-1">CAPTCHA does not match.</p>}
        {isValid && !disabled && <p className="text-green-500 text-[11px] mt-1">✓ Verified</p>}
      </div>
    </div>
  );
};
*/

/* ---------------- Main Form Component ---------------- */
export default function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    portAcath: "", // "Yes" or "No"
  });
  const [state, setState] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consentChecked, setConsentChecked] = useState(false);
  // CAPTCHA removed - always considered verified
  // const [captchaVerified, setCaptchaVerified] = useState(false);
  // const [captchaResetTrigger, setCaptchaResetTrigger] = useState(false);
  const [showFullConsent, setShowFullConsent] = useState(false);
  const [leadId, setLeadId] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  
  // TrustedForm states
  const [certId, setCertId] = useState<string>("");
  const [pingUrl, setPingUrl] = useState<string>("");
  const [tokenUrl, setTokenUrl] = useState<string>("");

  const pathname = usePathname();

  // Fetch IP on mount
  useEffect(() => {
    getIPAddress().then(setIpAddress);
  }, []);

  // TrustedForm script injection
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.trustedform.com/trustedform.js";
    script.async = true;
    script.type = "text/javascript";
    script.setAttribute("data-type", "hidden");
    script.setAttribute("data-auto-populate", "true");
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  // TrustedForm field observer
  useEffect(() => {
    let observerInstance: MutationObserver | null = null;
    let timeoutId: number | null = null;
    const initializeTrustedFormObserver = () => {
      try {
        observerInstance = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "value") {
              const targetNode = mutation.target as HTMLElement | null;
              const el = targetNode as HTMLInputElement | null;
              if (el && el.name === "xxTrustedFormCertUrl" && el.value) setCertId(el.value);
              if (el && el.name === "xxTrustedFormPingUrl" && el.value) setPingUrl(el.value);
              if (el && el.name === "xxTrustedFormCertToken" && el.value) setTokenUrl(el.value);
            }
          });
        });
        timeoutId = window.setTimeout(() => {
          const trustedFormFields = document.querySelectorAll('[name="xxTrustedFormCertUrl"], [name="xxTrustedFormPingUrl"], [name="xxTrustedFormCertToken"]');
          trustedFormFields.forEach((field) => {
            const el = field as HTMLInputElement;
            if (el && observerInstance) {
              observerInstance.observe(el, { attributes: true, attributeFilter: ["value"] });
              if (el.value) {
                if (el.name === "xxTrustedFormCertUrl") setCertId(el.value);
                if (el.name === "xxTrustedFormPingUrl") setPingUrl(el.value);
                if (el.name === "xxTrustedFormCertToken") setTokenUrl(el.value);
              }
            }
          });
        }, 1000);
      } catch (error) { console.warn("TrustedForm observer error:", error); }
    };
    initializeTrustedFormObserver();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observerInstance) observerInstance.disconnect();
    };
  }, []);

  // Fetch state from zip code when zip changes (5 digits)
  useEffect(() => {
    const fetchState = async () => {
      if (form.zip && form.zip.length === 5 && /^\d{5}$/.test(form.zip)) {
        const stateAbbr = await fetchStateFromZip(form.zip);
        if (stateAbbr && ALLOWED_STATES.includes(stateAbbr)) {
          setState(stateAbbr);
          setErrors(prev => ({ ...prev, zip: "" }));
        } else if (stateAbbr && !ALLOWED_STATES.includes(stateAbbr)) {
          setState("");
          setErrors(prev => ({ ...prev, zip: "State not in allowed list" }));
        } else {
          setState("");
          setErrors(prev => ({ ...prev, zip: "Invalid zip code" }));
        }
      } else if (form.zip && form.zip.length > 0 && form.zip.length !== 5) {
        setState("");
        setErrors(prev => ({ ...prev, zip: "Zip code must be 5 digits" }));
      } else {
        setState("");
        setErrors(prev => ({ ...prev, zip: "" }));
      }
    };
    fetchState();
  }, [form.zip]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    else if (form.firstName.trim().length < 2) newErrors.firstName = "First name must be at least 2 characters";
    
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    else if (form.lastName.trim().length < 2) newErrors.lastName = "Last name must be at least 2 characters";
    
    const phoneDigits = normalizePhone(form.phone);
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (phoneDigits.length !== 10) newErrors.phone = "Please enter a valid 10-digit phone number";
    
    const emailValid = validateEmail(form.email);
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!emailValid.isValid) newErrors.email = "Please enter a valid email address";
    
    if (!form.zip.trim()) newErrors.zip = "Zip code is required";
    else if (form.zip.length !== 5) newErrors.zip = "Please enter a valid 5-digit zip code";
    else if (!state) newErrors.zip = "Invalid zip code or state not supported";
    
    if (!form.portAcath) newErrors.portAcath = "Please select Yes or No";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "firstName") {
      const cleaned = value.replace(/\s{2,}/g, " ").replace(/[^a-zA-Z\s'-]/g, "");
      setForm(prev => ({ ...prev, firstName: cleaned }));
    } else if (field === "lastName") {
      const cleaned = value.replace(/\s{2,}/g, " ").replace(/[^a-zA-Z\s'-]/g, "");
      setForm(prev => ({ ...prev, lastName: cleaned }));
    } else if (field === "phone") {
      const formatted = formatPhone(value);
      setForm(prev => ({ ...prev, phone: formatted }));
    } else if (field === "email") {
      const formatted = formatEmail(value);
      setForm(prev => ({ ...prev, email: formatted }));
    } else if (field === "zip") {
      const cleaned = value.replace(/\D/g, "").slice(0, 5);
      setForm(prev => ({ ...prev, zip: cleaned }));
    } else if (field === "portAcath") {
      setForm(prev => ({ ...prev, portAcath: value }));
      if (errors.portAcath) setErrors(prev => ({ ...prev, portAcath: "" }));
    }
  };

  const generateUniqueSessionId = () => `CR_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
  const uniqueSessionId = useRef(generateUniqueSessionId());

  // Submit to Cagsys API - ONLY REQUIRED FIELDS
  const submitToCagsys = async (phoneDigits: string) => {
    const cagsysPayload = new URLSearchParams();
    cagsysPayload.append("fname", form.firstName);
    cagsysPayload.append("lname", form.lastName);
    cagsysPayload.append("phone", phoneDigits);
    cagsysPayload.append("state", state);
    cagsysPayload.append("email", form.email);
    cagsysPayload.append("IPAddress", ipAddress);
    cagsysPayload.append("PortACath", form.portAcath === "Yes" ? "Yes" : "No");

    const response = await fetch(CAGSYS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: cagsysPayload.toString(),
    });

    if (!response.ok) {
      throw new Error(`Cagsys submission failed: ${response.status}`);
    }
    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!consentChecked) {
      setErrors(prev => ({ ...prev, consent: "Please agree to the Privacy Policy" }));
      return;
    }
    // CAPTCHA check removed - always pass
    // if (!captchaVerified) {
    //   setErrors(prev => ({ ...prev, captcha: "Please complete CAPTCHA verification" }));
    //   return;
    // }
    
    setIsSubmitting(true);
    
    try {
      const phoneDigits = normalizePhone(form.phone);
      
      // Prepare payload for CRM
      const crmPayload = {
        countryName: "USA",
        brandType: "Internal",
        brandName: "C2A",
        websiteName: "Connect 2 Attorney",
        formname: "Bard PowerPort Lawsuit Form",
        vertical: getVerticalFromCurrentPath(),
        finalSubmit: true,
        data: {
          name: `${form.firstName} ${form.lastName}`,
          phone: `+1${phoneDigits}`,
          email: form.email,
          state: state,
          zip: form.zip,
          ipAddress: ipAddress,
          PortACath: form.portAcath === "Yes" ? "Yes" : "No",
          submissionDate: new Date().toISOString(),
          trustedFormCertUrl: certId || "",
          trustedFormToken: tokenUrl || "",
          trustedFormPingUrl: pingUrl || "",
          pageSource: window.location.href,
          uniqueSessionId: uniqueSessionId.current,
        }
      };

      // Submit to BOTH APIs in parallel
      const [crmResponse, cagsysResponse] = await Promise.allSettled([
        // CRM API
        leadId 
          ? fetch(`${CRM_API_URL}/${leadId}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(crmPayload),
            })
          : fetch(CRM_API_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(crmPayload),
            }),
        // Cagsys API
        submitToCagsys(phoneDigits)
      ]);

      // Handle CRM response
      if (crmResponse.status === "fulfilled" && crmResponse.value.ok) {
        const result = await crmResponse.value.json();
        if (result.id) setLeadId(result.id);
      } else if (crmResponse.status === "rejected") {
        console.error("CRM submission failed:", crmResponse.reason);
      } else if (crmResponse.status === "fulfilled" && !crmResponse.value.ok) {
        console.error("CRM submission failed with status:", crmResponse.value.status);
      }

      // Handle Cagsys response
      if (cagsysResponse.status === "rejected") {
        console.error("Cagsys submission failed:", cagsysResponse.reason);
      } else if (cagsysResponse.status === "fulfilled" && !cagsysResponse.value.ok) {
        console.error("Cagsys submission failed with status:", cagsysResponse.value.status);
      }

      // Send email via EmailJS (best effort)
      try {
        await sendWithEmailJS(crmPayload);
      } catch (emailErr) {
        console.warn("EmailJS failed (data still saved):", emailErr);
      }

      // Show success state
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setErrors(prev => ({ ...prev, submit: "Something went wrong. Please try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full">
        <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <img src="/bgshape.svg" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <img src="/success_check.svg" alt="Submission successful" className="w-20 h-20 mb-3" />
              <h2 className="font-urbanist text-[#162766] font-medium text-lg sm:text-xl md:text-2xl leading-tight mb-2">Thank You!</h2>
              <p className="font-urbanist text-[#6E6E6E] font-medium text-[14px] leading-normal text-center max-w-[280px]">
                We've received your request regarding the Bard PowerPort Lawsuit and will begin processing it shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Toaster position="top-right" />
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Hidden TrustedForm fields */}
          <input type="hidden" name="xxTrustedFormCertUrl" />
          <input type="hidden" name="xxTrustedFormCertToken" />
          <input type="hidden" name="xxTrustedFormPingUrl" />
          
          <div className="p-5">
            <div className="mb-5 text-center">
              <h1 className="text-[#162766] font-urbanist text-[24px] font-bold leading-[32px]">It's easy to get started</h1>
              <p className="text-[#6E6E6E] font-urbanist text-[13px] font-medium mt-2">
                Provide a few details about your case and our team will take it from here.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <InputField
                label="First Name *"
                value={form.firstName}
                error={errors.firstName}
                onChange={(v) => handleInputChange("firstName", v)}
                placeholder="Enter your first name"
              />
              <InputField
                label="Last Name *"
                value={form.lastName}
                error={errors.lastName}
                onChange={(v) => handleInputChange("lastName", v)}
                placeholder="Enter your last name"
              />
              <InputField
                label="Phone Number *"
                value={form.phone}
                error={errors.phone}
                onChange={(v) => handleInputChange("phone", v)}
                placeholder="(555) 555-5555"
                type="tel"
              />
              <InputField
                label="Email Address *"
                value={form.email}
                error={errors.email}
                onChange={(v) => handleInputChange("email", v)}
                placeholder="email@example.com"
                type="email"
              />
              <InputField
                label="Zip Code *"
                value={form.zip}
                error={errors.zip}
                onChange={(v) => handleInputChange("zip", v)}
                placeholder="Enter 5-digit zip code"
                maxLength={5}
              />
              {state && !errors.zip && (
                <div className="text-[12px] text-green-600 -mt-2">State: {state}</div>
              )}

              {/* Port-a-Cath Question */}
              <div className="mt-2">
                <label className="block text-[#303030] font-medium text-[14px] mb-2">
                  Have you or a loved one had a Port-a-Cath implanted for cancer treatment, chemotherapy or immunotherapy, that broke or caused an infection? You may be entitled to compensation. *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="portAcath"
                      value="Yes"
                      checked={form.portAcath === "Yes"}
                      onChange={(e) => handleInputChange("portAcath", e.target.value)}
                      className="w-4 h-4 accent-[#FCCB48]"
                    />
                    <span className="text-[14px]">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="portAcath"
                      value="No"
                      checked={form.portAcath === "No"}
                      onChange={(e) => handleInputChange("portAcath", e.target.value)}
                      className="w-4 h-4 accent-[#FCCB48]"
                    />
                    <span className="text-[14px]">No</span>
                  </label>
                </div>
                {errors.portAcath && <p className="text-red-500 text-[11px] mt-1">{errors.portAcath}</p>}
              </div>

              {/* Consent */}
              <div className="pt-4">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => {
                      setConsentChecked(e.target.checked);
                      if (e.target.checked && errors.consent) setErrors(prev => ({ ...prev, consent: "" }));
                    }}
                    className={checkboxClass}
                  />
                  <div className="text-[#808080] text-[12px] leading-relaxed">
                    <span>
                      I agree to the{" "}
                      <span className="text-[#162766] font-semibold underline cursor-pointer">
                        <a href="/privacy-policy" target="_blank">Privacy Policy &amp; Disclaimer</a>
                      </span>{" "}
                      and give my express written consent.
                    </span>
                    {!showFullConsent && (
                      <button type="button" onClick={() => setShowFullConsent(true)} className="ml-2 text-[#162766] font-semibold underline cursor-pointer">Read more</button>
                    )}
                    {showFullConsent && (
                      <>
                        <span> I expressly consent to receive communications from affiliated attorneys at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is legal advertising.</span>
                        <button type="button" onClick={() => setShowFullConsent(false)} className="ml-2 text-[#162766] font-semibold underline cursor-pointer">Show less</button>
                      </>
                    )}
                  </div>
                </label>
                {errors.consent && <p className="text-red-500 text-[11px]">{errors.consent}</p>}

                {/* CAPTCHA Section - COMPLETELY REMOVED */}
              </div>
            </div>
          </div>

          <div className="p-4 bg-white">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-[48px] rounded-lg font-semibold transition-all text-[16px] ${isSubmitting ? "bg-gray-300 cursor-not-allowed text-gray-600" : "bg-[#FCCB48] text-[#162766] hover:brightness-105 cursor-pointer"}`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {errors.submit && <p className="text-red-500 text-[12px] text-center mt-2">{errors.submit}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  maxLength?: number;
}

function InputField({ label, value, error, onChange, placeholder, type = "text", maxLength }: InputFieldProps) {
  return (
    <div>
      <label className="block text-[#303030] font-medium text-[13px] mb-1">{label}</label>
      <input
        type={type}
        className={`w-full h-[44px] px-3 rounded-[8px] border ${error ? "border-red-400" : "border-[#E2E4EA]"} bg-white font-poppins text-[14px] font-medium text-[#303030] placeholder:text-[#303030] placeholder:opacity-60 focus:outline-none focus:border-[#162766] transition`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
      />
      {error && <p className="text-red-500 text-[10px] mt-1">{error}</p>}
    </div>
  );
}