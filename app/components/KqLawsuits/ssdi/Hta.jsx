"use client";

const bldman = "/bldman.png";
export default function Hta() {
  return (
    <section className="w-full bg-[#FFFFFF] sm:bg-transparent pt-[0px] pb-[60px] sm:pt-[20px] sm:pb-[80px]">
      <div className="max-w-[1200px] mx-auto px-[16px] sm:px-4 flex flex-col sm:flex-row items-start gap-[30px] sm:gap-[60px]">

        {/* LEFT CONTENT */}
        <div className="w-full sm:w-[50%]">

          {/* HEADING */}
          <h2 className="font-lato text-[#0A1F8F] text-[26px] leading-[36px] sm:text-[35px] sm:leading-[45px] font-bold">
            How to Apply for <br />
            SSDI with Connect 2 Attorney?
          </h2>

          {/* SPACE */}
          <div className="h-[20px]" />

          {/* MOBILE IMAGE */}
          <div className="sm:hidden">
            <img
              src={bldman}
              alt="law consultation"
              className="w-full h-auto object-cover rounded-[16px]"
            />
          </div>

          {/* SPACE */}
          <div className="h-[20px]" />

          {/* BULLETS */}
          <div className="sm:max-w-[520px]">
            <ul className="space-y-[20px] list-disc pl-[18px]">

              <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
                <span className="font-bold">Get in Touch:</span>{" "}
                Schedule a free consultation with our SSDI attorneys to discuss your case and determine your eligibility.
              </li>

              <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
                <span className="font-bold">Submit Your Application:</span>{" "}
                We take care of all the paperwork, ensuring it’s complete and submitted on time to avoid any delays.
              </li>

              <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
                <span className="font-bold">Follow-Up & Appeals:</span>{" "}
                If your application is denied, we’ll handle the appeal process, giving you the best chance to win your case.
              </li>

              <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
                <span className="font-bold">Get Your Benefits:</span>{" "}
                Once approved, you’ll begin receiving the SSDI benefits that can provide the support you and your family need.
              </li>

            </ul>
          </div>

        </div>

        {/* RIGHT IMAGE (desktop only) */}
        <div className="hidden sm:flex w-[50%] justify-center">
          <img
            src={bldman}
            alt="law consultation"
            className="w-full h-auto object-cover rounded-[16px]"
          />
        </div>

      </div>
    </section>
  );
}