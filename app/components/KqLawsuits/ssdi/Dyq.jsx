"use client";

const wheelchairImg = "/wheelchairman.png";
const wheelchairImgMobile = "/wheelchairmanm.png";
const phoneIcon = "/Form/phone1.svg";
export default function Dyq() {
  const handleScrollToForm = (e) => {
    e.preventDefault();

    const element = document.getElementById("ssdi-form");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] sm:bg-transparent py-[60px] sm:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[16px] sm:px-4 flex flex-col sm:flex-row items-start gap-[30px] sm:gap-[60px]">

        {/* LEFT IMAGE (desktop only) */}
        <div className="hidden sm:flex sm:w-[48%] justify-center">
          <img
            src={wheelchairImg}
            alt="wheelchair man"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full sm:w-[52%]">

          {/* HEADING */}
          <h2 className="font-lato text-[#0A1F8F] text-[26px] leading-[36px] sm:text-[35px] sm:leading-[45px] font-bold">
            Do You Qualify <br className="sm:hidden" />
            for SSDI Benefits?
          </h2>

          {/* SPACE */}
          <div className="h-[16px] sm:h-[20px]" />

          {/* SUBTEXT */}
          <p className="font-lato text-[#404040] text-[15px] leading-[25px] sm:text-[18px] sm:leading-[28px]">
            If you’re struggling with a disabling condition that prevents you from working, SSDI may be the help you need.
          </p>

          {/* MOBILE IMAGE */}
          <div className="mt-[20px] sm:hidden">
            <img
              src={wheelchairImgMobile}
              alt="wheelchair man"
              className="w-full rounded-[16px] object-cover"
            />
          </div>

          {/* SPACE */}
          <div className="h-[20px]" />

          {/* SUBHEADING */}
          <h3 className="font-lato text-[#404040] text-[15px] sm:text-[18px] font-bold">
            Eligibility Checklist
          </h3>

          {/* SPACE */}
          <div className="h-[12px] sm:h-[10px]" />

          {/* BULLETS (default style like Figma) */}
          <ul className="list-disc pl-[18px] space-y-[12px]">
            <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium">
              You have a disability that prevents you from working for at least 12 months or is expected to be fatal.
            </li>

            <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium">
              You’ve worked long enough to qualify through Social Security, typically in jobs that paid Social Security taxes.
            </li>

            <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium">
              You are under 65, and your disability stops you from performing basic work tasks.
            </li>
          </ul>

          {/* SPACE */}
          <div className="h-[30px]" />

          {/* CTA BUTTON */}
          <div className="flex sm:block justify-center">
            <a
              href="/"
              onClick={handleScrollToForm}
              className="inline-flex items-center bg-[#F8D216] rounded-[165px] pt-[8px] pb-[8px] pl-[10px] pr-[20px] cursor-pointer"
            >
              <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center bg-[#1C2D8C] rounded-full">
                <img
                  src={phoneIcon}
                  alt="phone"
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                />
              </div>

              <div className="ml-[10px] flex flex-col items-start justify-center">
                <span className="text-[#162766] font-lato text-[9px] sm:text-[10px] font-bold tracking-[0.6px] uppercase leading-[12px]">
                  START YOUR CLAIM
                </span>

                <span className="text-[#162766] font-lato text-[16px] sm:text-[18px] font-bold leading-[20px] sm:leading-[22px] mt-[2px] whitespace-nowrap">
                  CONTACT US
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}