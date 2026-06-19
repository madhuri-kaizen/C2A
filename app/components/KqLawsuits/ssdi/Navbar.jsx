"use client";

const logo = "/logotitle.svg";
const phoneIcon = "/Form/phone.svg";
export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-[20px] sm:px-[60px] py-[12px]">

        {/* LEFT LOGO */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Connect to Attorney"
            className="h-[18px] sm:h-[22px] w-auto object-contain"
          />
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden sm:flex">
          <a
            href="tel:8882021350"
            className="flex items-center h-[48px] pl-[8px] pr-[20px] rounded-[165px] bg-[#0A1F8F]"
          >
            {/* ICON */}
            <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#F8D216] rounded-full">
              <img
                src={phoneIcon}
                alt="phone"
                className="w-[16px] h-[16px]"
              />
            </div>

            {/* TEXT */}
            <div className="ml-[14px] flex flex-col justify-center">
              <span className="font-lato text-[#F8D216] text-[10px] font-black tracking-[5px] uppercase leading-[12px]">
                CALL US NOW
              </span>
              <span className="font-lato text-white text-[16px] font-semibold tracking-[1px] leading-[20px] mt-[2px]">
                (888) 202-1350
              </span>
            </div>
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <a
          href="tel:8882021350"
          className="sm:hidden flex items-center bg-[#0A1F8F] rounded-[165px] pl-[8px] pr-[14px] py-[6px]"
        >
          {/* ICON */}
          <div className="w-[28px] h-[28px] flex items-center justify-center bg-[#F8D216] rounded-full">
            <img
              src={phoneIcon}
              alt="phone"
              className="w-[14px] h-[14px]"
            />
          </div>

          {/* TEXT */}
          <span className="ml-[8px] font-lato text-white text-[14px] font-semibold tracking-[0.625px] whitespace-nowrap">
            Call us Now
          </span>
        </a>

      </div>
    </header>
  );
}
