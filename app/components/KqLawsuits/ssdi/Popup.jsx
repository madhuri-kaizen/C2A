"use client";

import { useEffect, useState } from "react";
const popupImg = "/popup.png";
const phoneIcon = "/Form/phone1.svg";
const closeIcon = "/crosspopup.svg";
export default function Popup({ triggerFromSection }) {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // ⏱️ Auto trigger after 6 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setOpen(true);
        setHasOpened(true);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [hasOpened]);

  // 📍 Trigger when Hta section visible
  useEffect(() => {
    if (triggerFromSection && !hasOpened) {
      setOpen(true);
      setHasOpened(true);
    }
  }, [triggerFromSection, hasOpened]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#00085BCC]">

      {/* POPUP */}
      <div className="relative w-[90%] max-w-[700px] bg-[#EBEEFF] rounded-[10px] px-[20px] py-[30px] sm:p-[50px] flex flex-col items-center text-center">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-[22.5px] right-[22.5px]"
        >
          <img src={closeIcon} alt="close" className="w-[35px] h-[35px]" />
        </button>

        {/* IMAGE */}
        <img
          src={popupImg}
          alt="judge"
          className="w-[120px] sm:w-[160px] object-contain"
        />

        <div className="h-[20px]" />

        {/* HEADING */}
        <h2 className="font-lato text-[#0A1F8F] font-bold leading-[36px] sm:leading-[55px] text-[26px] sm:text-[40px]">
          
          {/* MOBILE */}
          <span className="sm:hidden">
            Don't Miss Your Window
          </span>

          {/* DESKTOP */}
          <span className="hidden sm:block">
            Get on a Quick Call <br />
            to Start Your Claim
          </span>

        </h2>

        <div className="h-[10px]" />

        {/* SUBTEXT */}
        <p className="font-lato text-[#404040] leading-[22px] sm:leading-[26px] text-[14px] sm:text-[16px]">

          {/* MOBILE */}
          <span className="sm:hidden">
            SSDI claims have strict deadlines. The longer you wait, the harder it gets.
          </span>

          {/* DESKTOP */}
          <span className="hidden sm:block">
            If you’re struggling with a disabling condition that prevents you from working, SSDI may be the help you need.
          </span>

        </p>

        <div className="h-[20px]" />

        {/* BUTTON DESKTOP */}
        <a
          href="tel:8882021350"
          className="hidden sm:flex items-center bg-[#F8D216] rounded-[165px] pt-[8px] pb-[8px] pl-[10px] pr-[20px]"
        >
          <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#1C2D8C] rounded-full">
            <img src={phoneIcon} alt="phone" className="w-[16px] h-[16px]" />
          </div>

          <span className="ml-[10px] text-[#162766] font-semibold text-[20px] tracking-[0.4px]">
          (888) 202-1350
          </span>
        </a>

        {/* BUTTON MOBILE */}
        <a
          href="tel:8882021350"
          className="sm:hidden flex items-center bg-[#F8D216] rounded-[165px] pt-[8px] pb-[8px] pl-[10px] pr-[20px]"
        >
          <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#1C2D8C] rounded-full">
            <img src={phoneIcon} alt="phone" className="w-[16px] h-[16px]" />
          </div>

          <div className="ml-[10px] flex flex-col items-start">
            <span className="text-[#162766] text-[10px] font-bold uppercase leading-[12px]">
              CALL NOW FOR A FREE
            </span>
            <span className="text-[#162766] text-[18px] font-bold leading-[22px]">
              (888) 202-1350
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}