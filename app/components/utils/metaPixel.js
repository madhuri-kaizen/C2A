/**
 * Meta Pixel helper with manual Advanced Matching support.
 * 
 * This module provides utilities for implementing Meta Pixel advanced matching
 * according to Meta's specifications and privacy requirements.
 * 
 * Documentation: https://developers.facebook.com/docs/meta-pixel/advanced/advanced-matching/
 * 
 * DATA FORMATTING REQUIREMENTS:
 * - Email: Must be lowercase, unhashed (Meta will hash automatically using SHA-256)
 * - Phone: Must be digits only, including country code (E.164 format, max 15 digits)
 * 
 * PRIVACY & COMPLIANCE:
 * - All user data is normalized and validated before transmission
 * - Email addresses are automatically lowercased per Meta requirements
 * - Phone numbers are normalized to include country code (default: +1 for US)
 * - Data validation ensures only properly formatted data is sent to Meta
 * - Implementation complies with Meta's data policy requirements
 * 
 * @module metaPixel
 */

/* eslint-disable no-useless-escape */

/**
 * Normalizes email address for Meta Pixel advanced matching.
 * 
 * Requirements:
 * - Email must be lowercase (Meta requirement)
 * - Unhashed (Meta will hash automatically using SHA-256)
 * - Trimmed of whitespace
 * 
 * @param {string} email - The email address to normalize
 * @returns {string} Normalized lowercase email or empty string
 */
export function normalizeEmail(email) {
  if (!email) return "";
  return String(email).trim().toLowerCase();
}

export function isValidEmail(email) {
  if (!email) return false;
  // Simple sanity check (Meta will normalize/hash on their side).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Normalizes phone number for Meta Pixel advanced matching.
 * 
 * Requirements:
 * - Must be digits only (no formatting characters)
 * - Must include country code (E.164 format)
 * - Maximum 15 digits (E.164 standard)
 * - Default country code is "1" (US) for 10-digit numbers
 * 
 * @param {string} phone - The phone number to normalize
 * @param {object} options - Normalization options
 * @param {string} options.defaultCountryCode - Country code to prepend for 10-digit numbers (default: "1")
 * @returns {string} Normalized phone number with country code or empty string
 */
export function normalizePhone(phone, { defaultCountryCode = "1" } = {}) {
  if (!phone) return "";
  let digits = String(phone).trim().replace(/\D/g, "");
  if (!digits) return "";

  // If user enters a US 10-digit number, prefix country code by default.
  if (digits.length === 10 && defaultCountryCode) {
    digits = `${defaultCountryCode}${digits}`;
  }
  return digits;
}

export function isValidPhoneDigits(phoneDigits) {
  if (!phoneDigits) return false;
  // Meta expects digits only incl. country code; typical E.164 max is 15 digits.
  if (!/^\d+$/.test(phoneDigits)) return false;
  return phoneDigits.length >= 10 && phoneDigits.length <= 15;
}

/**
 * Builds advanced matching user data object for Meta Pixel.
 * 
 * This function normalizes and validates email and phone data according to Meta's requirements.
 * Only valid data is included in the returned object.
 * 
 * Data Mapping:
 * - em: Email address (lowercase, unhashed)
 * - ph: Phone number (digits only with country code)
 * 
 * @param {object} params - User data parameters
 * @param {string} params.email - User email address
 * @param {string} params.phoneNumber - User phone number (preferred parameter name)
 * @param {string} params.phone - User phone number (alternative parameter name)
 * @returns {object} User data object with valid em and/or ph fields
 */
export function buildAdvancedMatching({ email, phoneNumber, phone } = {}) {
  const em = normalizeEmail(email);
  const ph = normalizePhone(phoneNumber ?? phone);

  const userData = {};
  if (isValidEmail(em)) userData.em = em;
  if (isValidPhoneDigits(ph)) userData.ph = ph;
  return userData;
}

export function ensureMetaPixel(pixelId, advancedMatching) {
  if (typeof window === "undefined") return;
  if (!pixelId) return;

  // Prevent fbq('init') from being called more than once per pixel ID
  // This handles React StrictMode double-invocation and any re-renders
  if (!window.__fbqInitialized) window.__fbqInitialized = {};
  if (window.__fbqInitialized[pixelId]) return;
  window.__fbqInitialized[pixelId] = true;

  // index.html already loads the fbevents.js stub, so window.fbq exists
  // We only inject the script if somehow it doesn't exist
  if (!window.fbq) {
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  }

  const hasUserData =
    advancedMatching &&
    typeof advancedMatching === "object" &&
    Object.keys(advancedMatching).length > 0;

  if (hasUserData) {
    window.fbq("init", pixelId, advancedMatching);
  } else {
    window.fbq("init", pixelId);
  }
}

/**
 * Track a Meta Pixel event with advanced matching user data.
 * This is the recommended way to pass user data after pixel initialization.
 * @param {string} eventName - The event name (e.g., 'Lead', 'Purchase', 'CompleteRegistration')
 * @param {object} userData - Advanced matching data object (from buildAdvancedMatching)
 * @param {object} eventData - Optional additional event parameters
 */
export function trackEventWithUserData(eventName, userData = {}, eventData = {}) {
  if (typeof window === "undefined" || !window.fbq) return;
  
  const hasUserData = userData && typeof userData === "object" && Object.keys(userData).length > 0;
  
  if (hasUserData) {
    // Pass user_data in the event tracking call
    // Format: fbq('track', 'EventName', { user_data: { em: 'email', ph: 'phone' } })
    window.fbq("track", eventName, {
      ...eventData,
      user_data: userData
    });
  } else {
    window.fbq("track", eventName, eventData);
  }
}

export function trackSingleEventWithUserData(pixelId, eventName, userData = {}, eventData = {}) {
  if (typeof window === "undefined" || !window.fbq || !pixelId) return;

  const hasUserData =
    userData && typeof userData === "object" && Object.keys(userData).length > 0;

  window.fbq("trackSingle", pixelId, eventName, {
    ...eventData,
    ...(hasUserData ? { user_data: userData } : {}),
  });
}
