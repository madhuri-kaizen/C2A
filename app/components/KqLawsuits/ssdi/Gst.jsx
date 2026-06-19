"use client";

const gstImg = "/gst.png";
const gstImgMobile = "/gstm.png";
const phoneIcon = "/Form/phone1.svg";
export default function Gst() {
  return (
    <section className="w-full py-[60px] lg:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[16px] lg:px-4">

        {/* BLUE CONTAINER */}
        <div className="relative flex flex-col lg:flex-row items-center gap-[30px] bg-[#0A1F8F] rounded-[10px] px-[20px] pt-[30px] pb-[0px] lg:px-[60px] lg:py-[40px] overflow-hidden">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[55%] text-center lg:text-left relative z-10">

            <h2 className="font-lato text-white text-[26px] leading-[36px] lg:text-[40px] lg:leading-[55px] font-bold">
              Get Started Today: Call Us <br className="hidden lg:block" />
              for a Free Consultation!
            </h2>

            <div className="h-[16px]" />

            <p className="font-inter text-white text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-medium">
              Trusted Legal Help is Just One Call Away
            </p>

            <div className="h-[30px] lg:h-[40px]" />

            {/* CTA BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="tel:8882021350"
                className="inline-flex items-center bg-[#F8D216] rounded-[165px] pt-[8px] pb-[8px] pl-[10px] pr-[20px]"
              >
                <div className="w-[36px] h-[36px] flex items-center justify-center bg-[#1C2D8C] rounded-full">
                  <img src={phoneIcon} alt="phone" className="w-[16px] h-[16px]" />
                </div>

                <div className="ml-[10px] flex flex-col">
                  <span className="text-[#162766] font-lato text-[10px] font-bold tracking-[0.6px] uppercase">
                    START YOUR CLAIM
                  </span>
                  <span className="text-[#162766] font-lato text-[18px] font-bold mt-[2px] whitespace-nowrap">
                    Get on a Quick Call
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* DESKTOP IMAGE (FIXED SCALING) */}
          <div className="hidden lg:block absolute bottom-0 right-0 pointer-events-none">
            <img
              src={gstImg}
              alt="team"
              className="
                object-contain
                h-[220px]        /* 1024–1279 (fix overlap) */
                xl:h-[260px]     /* medium desktop */
                2xl:h-[300px]    /* full desktop */
              "
            />
          </div>

          {/* MOBILE + TABLET IMAGE */}
          <div className="lg:hidden relative w-full mt-[10px]">
            <img
              src={gstImgMobile}
              alt="team"
              className="w-[calc(100%+40px)] max-w-none -ml-[20px] object-contain block -mb-[2px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}