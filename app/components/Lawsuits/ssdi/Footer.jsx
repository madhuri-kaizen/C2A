"use client";

import Link from "next/link";

const logo = "/logotitle.svg";
const phoneIcon = "/Form/phone1.svg";
export default function Footer() {
  return (
    <footer className="w-full bg-[#E8E9F0] py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[16px] sm:px-4">

        {/* TOP ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[20px]">

          {/* LOGO */}
          <img
            src={logo}
            alt="Connect2Attorney"
            className="w-[170px] sm:w-[260px] h-auto object-contain"
          />

          {/* CTA BUTTON */}
          <a
            href="tel:8882021350"
            className="flex items-center bg-[#F8D216] rounded-[165px] pt-[8px] pb-[8px] pl-[10px] pr-[25px]"
          >
            {/* ICON */}
            <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#1C2D8C] rounded-full">
              <img src={phoneIcon} alt="phone" className="w-[16px] h-[16px]" />
            </div>

            {/* TEXT */}
            <div className="ml-[10px] flex flex-col leading-none">
              <span className="text-[#162766] font-lato text-[10px] font-bold tracking-[0.6px] uppercase leading-[12px]">
                START YOUR CLAIM
              </span>
              <span className="text-[#162766] font-lato text-[18px] font-bold leading-[22px] mt-[2px]">
                Call Us Now
              </span>
            </div>
          </a>

        </div>

        {/* SPACE 40px */}
        <div className="h-[40px]" />

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white" />

        {/* SPACE 25px */}
        <div className="h-[25px]" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[10px]">

          {/* COPYRIGHT */}
          <p className="text-[#0A1F8F] font-lato text-[14px] sm:text-[15px] font-semibold text-center sm:text-left">
            © Copyright 2026 Connect2Attorney.
          </p>

          {/* LINKS */}
          <div className="flex items-center gap-[20px]">

            <Link
              href="/disclaimer"
              className="text-[#0A1F8F] font-lato text-[13px] sm:text-[13.5px] font-bold tracking-[0.1px]"
            >
              Disclaimer
            </Link>

            <Link
              href="/privacy-policy"
              className="text-[#0A1F8F] font-lato text-[13px] sm:text-[13.5px] font-bold tracking-[0.1px]"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
