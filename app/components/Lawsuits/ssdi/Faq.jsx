"use client";

import { useState } from "react";
const expandIcon = "/exp.svg";
const collapseIcon = "/col.svg";
const faqs = [
  {
    question: "How long does it take to get SSDI benefits?",
    answer:
      "The process can take several months, depending on the complexity of your case and whether your application is approved or denied. With Connect to Attorney helping you, we’ll aim to reduce delays and streamline the process.",
  },
  {
    question: "What are the chances of getting approved for SSDI?",
    answer:
      "Your chances of approval depend on your condition, work history, and how accurately your application is submitted. With our legal expertise, your application has the best chance of approval on the first attempt.",
  },
  {
    question: "What happens if my SSDI application is denied?",
    answer:
      "If your application is denied, don’t worry. Connect to Attorney will help you appeal the decision and continue fighting for the benefits you deserve. ",
  },
  {
    question: "How do I know if I qualify for SSDI?",
    answer:
      "We can help assess your situation during a free consultation. Simply call or schedule an appointment with us, and we’ll determine if you meet the SSDI requirements. ",
  },
  {
    question: "Can I apply for SSDI benefits if I’ve never worked?",
    answer:
      "In some cases, individuals who have not worked may still be eligible for SSDI benefits through a spouse’s or parent’s work history. We’ll guide you through the eligibility check. ",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full pb-[120px] sm:pb-[160px]">
      <div className="max-w-[1200px] mx-auto px-[16px] sm:px-4">

        {/* HEADING */}
        <h2 className="font-lato text-[#0A1F8F] text-[28px] sm:text-[35px] leading-[38px] sm:leading-[45px] font-bold">
          Frequently asked questions
        </h2>

        {/* SPACE */}
        <div className="h-[30px]" />

        {/* FAQ LIST */}
        <div className="flex flex-col gap-[20px]">

          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`rounded-[7.5px] border transition-all duration-300 cursor-pointer
                ${isActive
                  ? "bg-[#F3F4F9] border-white"
                  : "bg-white border-[#F0E7F4]"
                }`}
                onClick={() => toggle(index)}
              >

                <div className="px-[20px] sm:px-[30px] py-[16px] sm:py-[20px] flex flex-col">

                  {/* QUESTION ROW */}
                  <div className="flex items-center justify-between gap-[10px]">

                    <h3 className="font-lato text-[#0A1F8F] text-[18px] sm:text-[24px] font-semibold">
                      {faq.question}
                    </h3>

                    <img
                      src={isActive ? collapseIcon : expandIcon}
                      alt="toggle"
                      className="w-[18px] h-[18px] shrink-0"
                    />

                  </div>

                  {/* ANSWER */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isActive ? "max-h-[300px] mt-[10px]" : "max-h-0"}`}
                  >
                    <p className="font-lato text-[#404040] text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] font-medium">
                      {faq.answer}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}