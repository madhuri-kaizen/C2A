"use client";
import React from "react";
// import Ozempicfreecasecard from "./Ozempicfreecasecard";
import TableOfContents from "../subservice_pages/TableOfContents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { title } from "process";

export const content = {
  sectionIds: {
    mainTitle: "main-title",
    healthRisksTitle: "health-risks-title",
    otherRisksTitle: "other-title",
    mdllitigationTitle: "mdllitigation-title",
    compensationTitle: "compensation-title",
    stepsTitle: "steps-title",
  },

  eligibilityPoints: [
    {
      description: "You took Elmiron for several months or years  ",
    },
    {
      description:
        "You were diagnosed with pigmentary maculopathy or other retinal damage  ",
    },
    {
      description:
        "You now experience blurred vision, dark spots, or vision loss ",
    },
    {
      description: "An eye specialist linked your condition to Elmiron use ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Digestive Problems",
      description:
        "Some users report stomach pain, diarrhea, or other gastrointestinal discomfort that can affect daily life. ",
    },
    {
      number: "02",
      title: "Skin Allergies",
      description:
        "Certain patients develop rashes, itching, or other allergic reactions, which may require medical treatment. ",
    },
    {
      number: "03",
      title: "Nausea",
      description:
        "Persistent nausea is a common complaint, sometimes interfering with appetite and nutrition. ",
    },
    {
      number: "04",
      title: " Liver Abnormalities",
      description:
        "Rare cases show changes in liver function, highlighting the need for regular monitoring. ",
    },
    {
      number: "05",
      title: "Dizziness",
      description:
        "Lightheadedness or balance issues can occur, impacting mobility and overall wellbeing. ",
    },
  ],

  otherRisks: [
    {
      description: "Hip pain and grinding sensations ",
    },
    {
      description: "Bone loss around the implant ",
    },
    {
      description: "Inflammation and tissue damage ",
    },
    {
      description: "Implant dislocation or loosening ",
    },
  ],

  mdllitigationPoints: [
    {
      description: "Difficulty walking or standing ",
    },
    {
      description: "Joint instability   ",
    },
    {
      description: "Chronic swelling and stiffness  ",
    },
    {
      description: "Repeat surgeries to remove or replace the device  ",
    },
  ],

  updatePoints1: [
    {
      description: "Medical bills and revision surgery costs ",
    },
    {
      description: "Physical therapy and rehabilitation ",
    },
    {
      description: "Lost income and reduced earning capacity ",
    },
    {
      description: "Pain, suffering, and loss of quality of life ",
    },
  ],

  updatePoints2: [
    {
      description: "Review your medical records and implant details ",
    },
    {
      description: "Confirm whether your device was recalled ",
    },
    {
      description: "File your claim within the legal deadline ",
    },
    {
      description: "Seek maximum compensation through settlement or trial ",
    },
  ],

  helpPoints: [
    {
      description: "Experience with drug injury and mass tort cases ",
    },
    {
      description: "A strong track record in MDL litigation ",
    },
    {
      description: "Free case evaluations and contingency-based fees ",
    },
    {
      description: "Access to medical experts specializing in eye injuries ",
    },
  ],

  compensationPoints: [
    {
      title: "Medical Expenses",
      description:
        "Reimbursement for surgeries, hospital stays, medications, physical therapy, and ongoing treatment.   ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Damages for physical discomfort, emotional distress, and permanent vision loss.",
    },
    {
      title: "Lost wages",
      description:
        "Compensation for lost income or reduced earning ability caused by vision impairment.    ",
    },
    {
      title: "Revision Surgery Costs",
      description:
        "Coverage for additional procedures required to remove and replace the defective implant.    ",
    },
    {
      title: "Loss of Quality of Life",
      description:
        "For reduced independence and inability to perform normal daily activities.  ",
    },
    {
      title: "Future Medical Costs",
      description:
        "Coverage for future treatments, therapy, or assistive care related to eye damage.",
    },
  ],

  realStories: [
    {
      name: "SGene Davis: ",
      story:
        "He received a knee implant that failed, causing him significant pain and suffering. Davis filed a personal injury lawsuit against Exactech, alleging the company failed to warn about the defective product. ",
    },
    {
      name: "Cynthia Camp:",
      story:
        "She underwent a hip replacement that failed due to a damaged implant. The defect caused severe complications, leaving her completely disabled. ",
    },
  ],

  pageContent: {
    mainTitle: "What is Elmiron Eye Damage Lawsuit? ",
    mainParagraphs: [
      "Recent studies have linked long-term use of Elmiron to pigmentary maculopathy, a condition that can cause significant vision loss. As a result, thousands of patients across the United States have filed Elmiron lawsuits against the drug’s manufacturer, alleging failure to warn about the risk of retinal injury. ",
      "If you or a loved one has experienced vision issues after taking Elmiron, you may be eligible for compensation. We can help you seek justice for the pain you suffered. ",
      "The Elmiron lawsuit centers on allegations that Elmiron (pentosan polysulfate sodium), prescribed to treat interstitial cystitis, can cause toxic damage to the retina with prolonged use. Plaintiffs claim the manufacturer knew or should have known about the risk of eye injury but failed to provide adequate warnings to doctors and patients.",
      "Around 2,000 lawsuits have been consolidated into a multidistrict litigation (MDL) against the manufacturer, Janssen Pharmaceuticals.",
      "What is Elmiron?",
      "Elmiron is an oral prescription drug approved to treat interstitial cystitis (painful bladder syndrome). It has been widely prescribed for decades to relieve bladder pain and urinary discomfort. ",
      "For many years, Elmiron was believed to be safe for long-term use. However, recent medical studies linked extended exposure to retinal toxicity and pigmentary maculopathy, a serious eye condition that can worsen even after stopping the medication. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may qualify for an Elmiron eye damage lawsuit if: ",

    allegationsParagraph:
      "A qualified Elmiron lawsuit attorney can review your medical records and prescription history to determine eligibility. ",

    healthRisksTitle: "Elmiron Side Effects and Vision Loss Risk Explained ",
    healthRisksParagraph:
      "Studies have indicated that the drug may cause a range of other health issues beyond eye damage. Long-term use has been linked to both mild and serious side effects, affecting multiple systems in the body and significantly impacting quality of life.  ",

    healthRisksSubtitle: "Other health risks of Elmiron   ",

    mdllitigationTitle:
      "Elmiron Lawsuit Update: MDL Status & Latest Court Developments    ",

    mdllitigationParagraph:
      "As of January 2026, 706 Elmiron lawsuits remain active in the multidistrict litigation pending before Judge Brian R. Martinotti in the U.S. District Court for the District of New Jersey. In total, 1,988 Elmiron cases have been filed, and settlement negotiations are anticipated in MDL No. 2973 as the litigation continues.   ",

    helpTitle: "Elmiron Lawyers: How to Find the Right Attorney?   ",
    helpSubtitle:
      "Choosing the right attorney is critical in complex pharmaceutical litigation. Look for:  ",

    compensationTitle: "Elmiron Settlements & Compensation Overview   ",
    compensationParagraph:
      "Patients who developed vision problems after using Elmiron may be eligible for compensation ranging from $20,000 to $300,000, depending on the severity of their injuries. The lawsuits seek to hold Janssen Pharmaceuticals accountable for failing to warn about the risk of vision damage. ",
    compensationSubtitle: "Compensation you may seek:   ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Elmiron Eye Damage Lawsuit with Connect2Attorney?  ",
    stepsParagraph:
      "Connect2Attorney helps you through the process of filing a Elmiron eye damage lawsuit against the responsible party, in just three simple steps:  ",
  },

  ctaContent: {
    title: "Were You Affected? ",
    description: "You may be entitled to compensation. ",
    buttonText: "Get a Free Case Review",
  },

  steps: [
    {
      step: 1,
      title: "Submit a Free Case Review",
      description:
        "Share details about your situation so we can understand your claim.",
    },
    {
      step: 2,
      title: "Confirm Eligibility",
      description:
        "Our legal team will review your case and let you know if you qualify.",
    },
    {
      step: 3,
      title: "Sign Agreement",
      description:
        "If eligible, sign a legal agreement. Your attorney will handle all legal formalities.",
    },
  ],
};

export const ELMIRON_TOC = [
  {
    label: "What is Elmiron Eye Damage Lawsuit?",
    id: "main-title",
  },
  {
    label: "Elmiron Side Effects and Vision Loss Risk Explained",
    id: "health-risks-title",
  },
  {
    label: "Elmiron Lawsuit Update: MDL Status & Latest Court Developments",
    id: "other-title",
  },
  {
    label: "Elmiron Lawyers: How to Find the Right Attorney?",
    id: "mdllitigation-title",
  },
  {
    label: "Elmiron Settlements & Compensation Overview",
    id: "compensation-title",
  },
  {
    label: "How to File a Elmiron Eye Damage Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Elmiron Eye Damage Lawsuit Timeline",
    id: "timeline-section",
  },
  {
    label: "Get Legal Support from Connect2Attorney",
    id: "support",
  },
  {
    label: "FAQs",
    id: "faqs",
  },
];

const LawsuitsLegalPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  const mobileTocWrapperRef = useRef<HTMLDivElement | null>(null);
  const mobileTocInnerRef = useRef<HTMLDivElement | null>(null);

  const [isMobileTocFixed, setIsMobileTocFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current || !ctaRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const ctaHeight = ctaRef.current.offsetHeight;
      const topOffset = 92; // matches top-23

      // start sticky
      setIsFixed(wrapperRect.top <= topOffset);

      // stop at bottom
      setIsAtBottom(wrapperRect.bottom <= ctaHeight + topOffset);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!mobileTocWrapperRef.current) return;

      // Only for tablet + mobile
      if (window.innerWidth >= 1024) return;

      const NAVBAR_HEIGHT = 60;
      const rect = mobileTocWrapperRef.current.getBoundingClientRect();

      // Stick when TOC reaches navbar
      setIsMobileTocFixed(rect.top <= NAVBAR_HEIGHT);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNextSection = () => {
    const el = document.getElementById("stepper-form");
    if (!el) return;

    const yOffset = -80; // header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <div
      ref={wrapperRef}
      className="
        bg-white
        relative
        mx-auto
        max-w-[1440px]
        2xl:max-w-[1600px]
        px-4
        sm:px-6
        lg:px-3
        2xl:px-20
      "
    >
      {" "}
      {/* Custom Bullet Styling */}
      <style>{`
        .custom-bullet li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .custom-bullet li::before {
          content: "•";
          color: #1a237e;
          font-weight: bold;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -0.6rem;
        }
      `}</style>
      {/* Page Container */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-2 lg:py-12">
        {/* ==================== SECTION 1: Ozempic Lawsuit ==================== */}

        <div ref={mobileTocWrapperRef} className="lg:hidden relative mb-10">
          {/* Spacer to prevent content jump */}
          {isMobileTocFixed && <div className="h-[60px]" />}

          <div
            ref={mobileTocInnerRef}
            className={
              isMobileTocFixed
                ? "fixed left-0 right-0 z-40 px-5 md:px-10 lg:px-0 bg-white"
                : "relative"
            }
            style={isMobileTocFixed ? { top: 60 } : undefined}
          >
            <TableOfContents items={ELMIRON_TOC} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content Column */}
          <div className="flex-1 max-w-[946px]">
            <h2
              id={content.sectionIds.mainTitle}
              className="font-noto-serif font-normal capitalize text-[#162766] text-[30px] md:text-[40px] leading-[36px] mb-6"
            >
              {content.pageContent.mainTitle}
            </h2>
            <div className="mb-5 font-urbanist font-medium text-[#425777] text-[16px] lg:text-[18px] leading-[30px] space-y-1 ">
              <p>{content.pageContent.mainParagraphs[0]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[1]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[2]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[3]}</p>
              <br />

              <h3 className="font-bold">
                {content.pageContent.mainParagraphs[4]}
              </h3>

              <p>{content.pageContent.mainParagraphs[5]}</p>

              <p>{content.pageContent.mainParagraphs[6]}</p>
              <br />
            </div>

            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
              <h3 className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4">
                <span className="text-[#FCCB48]">
                  {content.pageContent.allegationsTitle.split(" ")[0]}{" "}
                  {content.pageContent.allegationsTitle.split(" ")[1]}{" "}
                  {content.pageContent.allegationsTitle.split(" ")[2]}
                </span>{" "}
                {content.pageContent.allegationsTitle
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </h3>

              <p className="mb-4 font-urbanist font-bold  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsSubtitle}
              </p>
              <ul className="space-y-5 mb-2">
                {content.eligibilityPoints.map((item, index) => (
                  <li key={index} className="flex flex-col gap-2">
                    {/* Description list */}
                    <div className="flex flex-col gap-2">
                      {Array.isArray(item.description) ? (
                        item.description.map((desc, i) => (
                          <div key={i} className="flex items-start gap-3">
                            {/* Yellow Bullet */}
                            <span className="mt-[6px] flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <ellipse
                                  cx="6.83621"
                                  cy="6.9697"
                                  rx="6.83621"
                                  ry="6.9697"
                                  fill="#F2C438"
                                />
                              </svg>
                            </span>

                            {/* Description */}
                            <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                              {desc}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-start gap-3">
                          <span className="mt-[6px] flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <ellipse
                                cx="6.83621"
                                cy="6.9697"
                                rx="6.83621"
                                ry="6.9697"
                                fill="#F2C438"
                              />
                            </svg>
                          </span>

                          <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
            </div>

            <h2
              id={content.sectionIds.healthRisksTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.healthRisksTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.healthRisksParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.healthRisksSubtitle}
            </p>

            <div className="space-y-4 w-full mb-16">
              {content.healthRisks.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                >
                  {/* Title + Number */}
                  <h3 className="font-noto-serif text-[#162766] text-[20px] sm:text-[24px] font-medium leading-normal mb-2">
                    {item.number} - {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <h2
              id={content.sectionIds.otherRisksTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.mdllitigationTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph}
            </p>

            <h2
              id={content.sectionIds.mdllitigationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.helpTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.helpSubtitle}
            </p>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
       
              <div className="space-y-4 sm:space-y-5 w-full mb-12">
                {content.helpPoints.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {/* Bullet */}
                    <span className="mt-[6px] flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <ellipse
                          cx="6.83621"
                          cy="6.9697"
                          rx="6.83621"
                          ry="6.9697"
                          fill="#162766"
                        />
                      </svg>
                    </span>

                    {/* Description */}
                    <h3
                      className="
                                      text-[#425777]
                                      font-urbanist
                                      text-[16px]
                                      sm:text-[17px]
                                      lg:text-[18px]
                                      font-bold
                                      leading-[27px]
                                      capitalize
                                    "
                    >
                      {item.description}
                    </h3>
                  </div>
                ))}
              </div>

              <br />
              <h2
                id={content.sectionIds.compensationTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.compensationTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.compensationParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.compensationSubtitle}
              </p>
              <div className="space-y-4 w-full mb-16">
                {content.compensationPoints.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                  >
                    {/* Title + Number */}
                    <h3 className="font-noto-serif text-[#162766] text-[20px] sm:text-[24px] font-medium leading-normal mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== STEPS SECTION ==================== */}
            <div className="mb-15 md:mb-10 lg:mb-10">
              <h2
                id={content.sectionIds.stepsTitle}
                className="font-noto-serif font-normal text-[#162766] text-[30px] md:text-[40px] capitalize mb-4"
              >
                {content.pageContent.stepsTitle}
              </h2>

              <p className="mb-8 font-urbanist font-medium text-[#425777] text-[18px] leading-[27px]">
                {content.pageContent.stepsParagraph}
              </p>

              <StepsComponent />
            </div>
          </div>

          {/* Right Sidebar - CTA Card and Content Table */}
          <aside className="hidden lg:block w-[350px]">
            <div
              ref={ctaRef}
              className={`w-[350px]
              ${
                isAtBottom
                  ? "absolute bottom-12"
                  : isFixed
                    ? "fixed top-23"
                    : "relative"
              }`}
            >
              <div className="bg-[#162766] rounded-lg shadow-xl">
                {/* <div className="h-48">
                  <Image
                    src="/americanlawcourt.svg"
                    alt="Courthouse"
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </div> */}

                <div className="p-6 text-white">
                  <h3 className="font-noto-serif font-medium text-white  text-center text-[26px] leading-normal capitalize mb-3">
                    {content.ctaContent.title}
                  </h3>

                  <p className="text-[#F9F9F9] font-urbanist font-medium text-center text-[16px] leading-normal mb-6">
                    {content.ctaContent.description}
                  </p>

                  <button
                    onClick={scrollToNextSection}
                    className="w-full bg-[#fccb48] hover:bg-[#eebb20] text-[#162766] font-poppins font-semibold text-[16px] leading-normal tracking-[0.32px] uppercase text-center py-3 px-4 rounded transition-colors duration-200 cursor-pointer"
                  >
                    {content.ctaContent.buttonText}
                  </button>
                </div>
              </div>
              <div className="mb-8">
                <TableOfContents items={ELMIRON_TOC} />
              </div>
            </div>
          </aside>
          {/* Content Table */}
        </div>
      </div>
    </div>
  );
};

const StepsComponent = () => {
  const steps = [
    {
      step: 1,
      title: "Submit a Free Case Review",
      description:
        "Share details about your situation so we can understand your claim.",
    },
    {
      step: 2,
      title: "Confirm Eligibility",
      description:
        "Our legal team will review your case and let you know if you qualify.",
    },
    {
      step: 3,
      title: "Sign Agreement",
      description:
        "If eligible, sign a legal agreement. Your attorney will handle all legal formalities.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      {steps.map((item) => (
        <div
          key={item.step}
          className="
            bg-[#f4f6f8]
            rounded-xl
            p-5 md:p-4 xl:p-6
            flex
            flex-col
            min-h-[200px]
          "
        >
          {/* TOP ROW: BADGE + TITLE */}
          <div className="flex items-start gap-4">
            {/* STEP BADGE (Figma Perfect) */}
            <div
              className="
                inline-flex
                aspect-square
                h-[63.058px]
                px-[11.741px]
                pt-[9px]
                pb-[8.058px]
                justify-center
                items-center
                rounded-[10px]
                border
                border-white
                bg-[#162766]
                shadow-[0_7.564px_11.346px_-2.269px_rgba(0,0,0,0.10)]
              "
            >
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-white font-urbanist text-[18px] font-semibold leading-[20px]">
                  Step
                </span>
                <span className="text-white font-urbanist text-[20px] font-bold leading-[24px]">
                  {item.step}
                </span>
              </div>
            </div>

            {/* TITLE */}
            <h3
              className="
                font-urbanist
                font-bold
                text-[#162766]
                text-[18px]
                leading-[24px]
                mt-[4px]
              "
            >
              {item.title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              font-urbanist
              font-normal
              text-[#162766]
              text-[16px]
              leading-[22px]
            "
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LawsuitsLegalPage;
