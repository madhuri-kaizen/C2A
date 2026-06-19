"use client";

const wcbImg = "/wcb.png";
export default function Wcb() {
  return (
    <section className="w-full bg-[#E8E9F0] py-[60px] sm:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[16px] sm:px-4 flex flex-col sm:flex-row items-center sm:items-start gap-[40px] sm:gap-[60px]">

        {/* LEFT IMAGE */}
        <div className="w-full sm:w-[50%] flex justify-center">
          <img
            src={wcbImg}
            alt="why choose us"
            className="w-full h-auto object-cover rounded-[16px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full sm:w-[50%]">

          {/* HEADING */}
          <h2 className="font-lato text-[#0A1F8F] text-[26px] leading-[36px] sm:text-[35px] sm:leading-[45px] font-bold">
            Why Choose Connect to Attorney <br />
            for Your SSDI Claim?
          </h2>

          {/* SPACE */}
          <div className="h-[20px]" />

          {/* SUBTEXT */}
          <p className="font-lato text-[#404040] text-[15px] sm:text-[16px] leading-[25px] sm:leading-[28px]">
            At Connect to Attorney, we make the SSDI process simple, fast, & effective so that you can focus on your health and well-being.
          </p>

          {/* SPACE */}
          <div className="h-[20px]" />

          {/* BULLETS */}
          <div className="sm:max-w-[520px]">
            <ul className="space-y-[16px] list-disc pl-[18px]">

              <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
                <span className="font-bold">Expert Legal Guidance:</span>{" "}
                We handle the paperwork, filings, and legal steps for your SSDI claim.
              </li>

              <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
                <span className="font-bold">Maximize Your Chances:</span>{" "}
                We help strengthen your claim & reduce common application mistakes.
              </li>

              <li className="font-lato text-[#404040] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px]">
                <span className="font-bold">Less Stress for You:</span>{" "}
                We simplify the process so you can focus on your health.
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}