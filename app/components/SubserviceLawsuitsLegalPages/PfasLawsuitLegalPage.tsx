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

    otherRisksTitle: "other-risks-title",

    lawsuitUpdateTitle: "lawsuit-update-title",

    lawyerHelpTitle: "lawyer-help-title",

    compensationTitle: "compensation-title",

    stepsTitle: "steps-title",
  },

  mainPoints: [
    {
      description: "Extremely persistent in soil and water ",
    },
    {
      description: "Accumulate in the bloodstream over time ",
    },
    {
      description: "Linked to serious long-term health risks ",
    },
  ],

  eligibilityPoints: [
    {
      description: "Lived near a contaminated water source or military base   ",
    },
    {
      description: "Drank or used water containing elevated PFAS levels ",
    },
    {
      description: "Worked in facilities using PFAS chemicals  ",
    },
    {
      description: "Developed illnesses linked to PFAS exposure ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Cancers",
      description:
        "Studies link PFAS to several types of cancer, including kidney, testicular, and liver cancers.",
    },
    {
      number: "02",
      title: "Liver Damage",
      description:
        "Exposure can impair liver function, leading to elevated enzymes and long-term organ issues.",
    },
    {
      number: "03",
      title: "Fertility Issues",
      description:
        "PFAS may disrupt reproductive health, reducing fertility in both men and women.",
    },
    {
      number: "04",
      title: "Thyroid Disease",
      description: "These chemicals can interfere with hormone regulation.",
    },
    {
      number: "05",
      title: "Obesity",
      description:
        "Research suggests PFAS exposure may contribute to weight gain and metabolic disorders.",
    },
    {
      number: "06",
      title: "Renal Failure",
      description:
        "Long-term exposure is associated with decreased kidney function and an increased risk of renal failure.",
    },
  ],

  otherRisks: [
    {
      description: "Contaminated drinking water",
    },
    {
      description: "Some household cleaning products",
    },
    {
      description: "Certain makeup, moisturizers, and personal care products",
    },
    {
      description: "Firefighting foam near airports and military sites",
    },
    {
      description: "Nonstick cookware and food wrappers",
    },
    {
      description: "Waterproof clothing and carpets",
    },
    {
      description: "Industrial waste and landfill runoff",
    },
  ],

  mdllitigationPoints: [
    {
      title: "January 2026",
      description:
        "The MDL includes 389 pending cases and 399 total filings, reflecting steady litigation activity. ",
    },
    {
      title: "December 2025 Surge",
      description:
        "A wave of new lawsuits nearly doubled the number of pending cases. ",
    },
    {
      title: "Trial Delay",
      description:
        "A key bellwether trial has been postponed and is now scheduled for June 2026. ",
    },
    {
      title: "State Investigation",
      description:
        "Texas Attorney General Ken Paxton has launched an official investigation into heavy metal levels in baby food. ",
    },
    {
      title: "New Autism Claim",
      description:
        "A recent lawsuit alleges a child developed autism spectrum disorder after exposure to toxic baby food. ",
    },
  ],

  helpPoints: [
    {
      description: "Investigate your exposure history    ",
    },
    {
      description: "Collect medical and environmental evidence  ",
    },
    {
      description: "Track PFAS lawsuit news and filing deadlines  ",
    },
    {
      description: "Negotiate settlements or represent you in court s    ",
    },
  ],

  updatePoints: [
    {
      description: "Specialize in chemical exposure and PFAS litigation ",
    },
    {
      description: "Have a proven track record in MDL or class-action cases .",
    },
    {
      description: "Offer free consultations and contingency-based fees  ",
    },
    {
      description: "Provide guidance on documentation and medical evidence ",
    },
  ],
  compensationPoints: [
    {
      title: "Medical Expenses",
      description:
        "Reimbursement for hospital visits, medications, ongoing treatments, and long-term care related to PFAS-related illnesses.",
    },
    {
      title: "Lost Wages and Income",
      description:
        "Compensation for time missed from work or reduced earning capacity due to health complications.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Financial relief for physical pain, emotional distress, and diminished quality of life caused by exposure.",
    },
    {
      title: "Wrongful Death Benefits",
      description:
        "Support for families who lost loved ones due to PFAS-related illnesses.",
    },
    {
      title: "Property and Environmental Damage",
      description:
        "Compensation for contaminated water supplies, property devaluation, or relocation costs due to exposure.",
    },
  ],

  realStories: [
    {
      name: "Cantabrana Family:  ",
      story:
        " Noah Cantabrana’s family alleges that companies knowingly sold baby foods containing dangerous levels of toxic heavy metals, which led to ASD and ADHD.  ",
    },
  ],

  pageContent: {
    mainTitle: "What is the PFAS (Forever Chemicals) Exposure Lawsuit  ",
    mainParagraphs: [
      "PFAS exposure lawsuits are rapidly expanding across the United States as individuals and communities seek accountability for contamination linked to “forever chemicals.” These lawsuits focus on health risks, polluted drinking water, and long-term environmental damage caused by PFAS chemicals",
      "Our attorneys have decades of experience fighting for victims affected by PFAS exposure, and we can help you get the maximum payout for your pain and suffering. ",
      "The PFAS exposure lawsuit involves claims against manufacturers and distributors of PFAS chemicals for contaminating water supplies, consumer products, and the environment. Plaintiffs allege that companies knew about the dangers but failed to warn the public.",
      "These cases often target industrial giants accused of releasing PFAS into groundwater, rivers, and municipal drinking water systems. Many claims are now consolidated in federal court through multidistrict litigation (MDL) to streamline proceedings and settlements",
      "What is PFAS?",
      "PFAS stands for per- and polyfluoroalkyl substances, a large group of synthetic chemicals used since the 1940s. Known as “forever chemicals,” PFAS do not break down easily in the environment or the human body.",
      "They are commonly found in nonstick cookware, food packaging, stain-resistant fabrics, firefighting foam, and even some PFAS water filter systems that fail to remove them completely. ",

      "Key facts about PFAS chemicals: ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may be eligible to file a Philips CPAP recall lawsuit if: ",
    allegationsParagraph:
      "Families, municipalities, and water providers may also qualify for claims related to cleanup costs and medical monitoring.  ",

    healthRisksTitle:
      "Health Risks Associated with PFAS (Forever Chemicals) Exposure     ",
    healthRisksParagraph:
      "PFAS exposure poses serious threats to human health due to the chemicals’ persistence in the body and the environment. Even low levels of these substances can accumulate over time, leading to chronic illnesses and long-term medical complications.  ",
    healthRisksSubtitle: "Key health risks of PFAS exposure:  ",

    otherRisksTitle: "Common Sources of PFAS Exposure in Daily Life     ",

    otherRisksPaaragraph:
      "Many people first discover contamination through local water testing or PFAS lawsuit news reports.   ",

    otherRisksSubTitle:
      "PFAS exposure often occurs through everyday activities and products, such as:    ",

    mdllitigationTitle:
      "PFAS Lawsuit Update: Current Legal Proceedings and MDL Status        ",

    mdllitigationParagraph: [
      "The PFAS litigation, often referred to as the AFFF litigation, has grown into one of the largest environmental mass tort actions in U.S. history.  ",
      "As of January 2026, the MDL includes 15,213 PFAS lawsuits filed by a broad group of plaintiffs, including public water utilities, military service members, and individuals exposed to AFFF. The cases have already resulted in major settlements, with individual compensation typically ranging from $75,000 to $500,000 based on injury severity and related factors. Through consolidated pretrial proceedings and bellwether trials, particularly those involving kidney cancer claims, the MDL seeks to evaluate case strength and pave the way for potential global settlements across the remaining claims. ",
    ],
    mdllitigationSubtitle: " Key updates include: ",

    updateTitle: "Finding the Right Lawyer for Your AFFF Lawsuit  ",
    updateParagraph:
      "Choosing an experienced AFFF lawsuit attorney is crucial for maximizing compensation. Look for lawyers who: ",

    updateSubtitle: "Documents to file lawsuit includes: ",

    settlementTitle:
      "PFAS Settlements and Compensation: What Victims Can Expect?    ",
    settlementParagraph:
      "The compensation in PFAS lawsuits varies depending on the severity of injuries, duration of exposure, and the impact on daily life. On average, payouts range from $50,000 to $500,000, reflecting the extent of harm suffered by affected individuals. ",

    settlementSubtitle:
      "You may be able to seek compensation in the following areas:    ",

    helpTitle: "How a PFAS Lawyer Can Help with Your Claim?        ",
    helpSubtitle: "An experienced PFAS lawyer can: ",

    helpParagraph:
      "Legal experts specializing in baby food autism lawsuits provide crucial support to parents seeking justice and safer products for all children. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle: "How to File a PFAS Exposure Lawsuit with Connect2Attorney?  ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a PFAS exposure lawsuit against the responsible party, in just three simple steps:",
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

export const PFAS_TOC = [
  {
    label: "What is the PFAS (Forever Chemicals) Exposure Lawsuit?",
    id: "main-title",
  },
  {
    label: "Health Risks Associated with PFAS (Forever Chemicals) Exposure",
    id: "health-risks-title",
  },
  {
    label: "Common Sources of PFAS Exposure in Daily Life",
    id: "other-risks-title",
  },
  {
    label: "PFAS Lawsuit Update: Current Legal Proceedings and MDL Status",
    id: "lawsuit-update-title",
  },
  {
    label: "How a PFAS Lawyer Can Help with Your Claim?",
    id: "lawyer-help-title",
  },
  {
    label: "PFAS Settlements and Compensation: What Victims Can Expect?",
    id: "compensation-title",
  },
  {
    label: "How to File a PFAS Exposure Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "PFAS Exposure Lawsuit Timeline",
    id: "timeline-section",
  },
  {
    label: "Get Legal Support from Connect2Attorney",
    id: "support",
  },
  {
    label: "FAQ",
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
            <TableOfContents items={PFAS_TOC} />
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
              <br />

              <p>{content.pageContent.mainParagraphs[6]}</p>
              <br />

              <p className="font-bold">
                {content.pageContent.mainParagraphs[7]}
              </p>

              <ul className="list-disc pl-6 space-y-2">
                {content.mainPoints.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-start gap-3">
                      <p className="font-urbanist text-[#425777] font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
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

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
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
                            <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-bold leading-[24px] sm:leading-[27px]">
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
                    {item.title}
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
              {content.pageContent.otherRisksTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.otherRisksPaaragraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.otherRisksSubTitle}
            </p>

            <div className="space-y-4 sm:space-y-5 w-full mb-12">
              {content.otherRisks.map((item, index) => (
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
            <h2
              id={content.sectionIds.lawsuitUpdateTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.mdllitigationTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph[0]}
            </p>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph[1]}
            </p>

            <h2
              id={content.sectionIds.lawyerHelpTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.helpTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.helpSubtitle}
            </p>

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

            <h2
              id={content.sectionIds.compensationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.settlementTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.settlementParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.settlementSubtitle}
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
                <TableOfContents items={PFAS_TOC} />
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
