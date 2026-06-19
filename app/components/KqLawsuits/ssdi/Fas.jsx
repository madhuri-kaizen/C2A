"use client";

export default function Fas() {
  return (
    <section className="w-full pb-[60px] sm:pb-[80px]">
      <div className="max-w-[1200px] mx-auto px-[16px] sm:px-4">

        {/* HEADING */}
        <h2 className="font-lato text-[#0A1F8F] text-[28px] leading-[38px] sm:text-[35px] sm:leading-[45px] font-bold">
          Fast and Simple SSDI Application
        </h2>

        {/* SPACE */}
        <div className="h-[20px]" />

        {/* SUBHEADING */}
        <p className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
          We take the guesswork out of the SSDI process. With Connect 2 Attorney, you will receive:
        </p>

        {/* SPACE */}
        <div className="h-[25px]" />

        {/* CARDS */}
        <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[24px]">

          {/* CARD 1 */}
          <div className="flex-1 rounded-[10px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
            
            {/* TOP */}
            <div className="bg-[#0A1F8F] p-[20px] sm:p-[30px]">
              <h3 className="font-lato text-white text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] font-bold">
                No-hassle application
              </h3>
            </div>

            {/* BOTTOM */}
            <div className="bg-white p-[20px] sm:p-[30px]">
              <p className="font-lato text-[#0A1F8F] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
                We fill out all forms, gather evidence, and submit everything to Social Security for you.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="flex-1 rounded-[10px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
            
            <div className="bg-[#0A1F8F] p-[20px] sm:p-[30px]">
              <h3 className="font-lato text-white text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] font-bold">
                Faster results
              </h3>
            </div>

            <div className="bg-white p-[20px] sm:p-[30px]">
              <p className="font-lato text-[#0A1F8F] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
                Our expertise and experience help speed up the process, allowing you to get the benefits you deserve as quickly as possible.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="flex-1 rounded-[10px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
            
            <div className="bg-[#0A1F8F] p-[20px] sm:p-[30px]">
              <h3 className="font-lato text-white text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] font-bold">
                Ongoing support
              </h3>
            </div>

            <div className="bg-white p-[20px] sm:p-[30px]">
              <p className="font-lato text-[#0A1F8F] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
                We’re here for you if anything goes wrong or if you need to appeal a denied claim.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}