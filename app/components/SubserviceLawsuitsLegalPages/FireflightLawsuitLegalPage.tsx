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

  settlementsTitle: "settlements-title",

  mdllitigationTitle: "mdllitigation-title",

  compensationTitle: "compensation-title",

  stepsTitle: "steps-title",
},


  eligibilityPoints: [
    {
      description:
        "Firefighters regularly using AFFF foam in training or emergencies  ",
    },
    {
      description:
        "Military personnel exposed to PFAS-contaminated water or foam  ",
    },
    {
      description:
        "Industrial workers handling AFFF foam at chemical plants or airports ",
    },
    {
      description: "Residents near sites contaminated by AFFF foam  ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Cancers",
      description:
        " Increased risk of kidney, testicular, bladder, and other cancers due to toxic chemical exposure.    ",
    },
    {
      number: "02",
      title: " Hormonal Disruption",
      description:
        "Chemicals in AFFF can interfere with thyroid function and hormone regulation.  ",
    },
    {
      number: "03",
      title: "Fertility Problems",
      description: "Exposure may reduce fertility in both men and women.  ",
    },
    {
      number: "04",
      title: " Immunity Affects",
      description:
        "Long-term contact can weaken the immune system, making the body more susceptible to illness.    ",
    },
    {
      number: "05",
      title: " Gastrointestinal Issues",
      description:
        "Chronic exposure has been linked to nausea, diarrhea, and more.   ",
    },
    {
      number: "06",
      title: " Liver Damage",
      description:
        "The foam’s chemicals can impair liver function, leading to long-term organ complications.  ",
    },
  ],

  otherRisks: [
    {
      description:
        "Firefighting training exercises where foam is frequently used ",
    },
    {
      description:
        "Airports and military bases with fire suppression systems   ",
    },
    {
      description: "Industrial facilities using AFFF for fire safety  ",
    },
    {
      description:
        "Contaminated water sources near foam storage or usage areas  ",
    },
  ],

  mdllitigationPoints: [
    {
      title: "Massive MDL growth",
      description:
        "The AFFF multidistrict litigation (MDL No. 2873) centralized in federal court in South Carolina now includes 15,200+ active personal‑injury claims brought by firefighters, military personnel, industrial workers, and affected communities alleging PFAS exposure harms.   ",
    },
    {
      title: "Bellwether trial changes",
      description:
        "A bellwether trial that had been scheduled for October 2025 was postponed, allowing more cases to be filed and standardized for trial preparation. The court continues to adjust the schedule for expert testimony and causation evidence before setting new trial dates.   ",
    },
    {
      title: "Science and discovery focus",
      description:
        "In mid‑2025, the court held a Science Day session to strengthen the scientific foundations for linking PFAS exposure to illnesses like thyroid and liver cancer, which will influence admissibility of expert evidence.  ",
    },
    {
      title: "Public‑water system settlements",
      description:
        "Although individual personal‑injury settlements are still in progress, large deals with public water systems have already been finalized, including a 3M water supplier settlement worth over $10 billion and other multi‑hundred‑million‑dollar agreements with DuPont/Chemours. These don’t directly compensate individual claimants but shape the broader litigation landscape.   ",
    },
    {
      title: "Ongoing filings and momentum",
      description:
        "Filings continue steadily as new personal injury claims are added to the MDL. Plaintiffs’ attorneys are focused on completing case proofs and expert disclosure ahead of future settlement talks or trial settings. ",
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
      description:
        "Look for lawyers with experience in product liability and food safety lawsuits.  ",
    },
    {
      description:
        "Verify their track record with similar health-related claims.  ",
    },
    {
      description:
        "Schedule consultations to discuss your case and potential legal strategy.   ",
    },
    {
      description:
        "Ensure the attorney provides clear guidance on timelines, costs, and evidence collection.  ",
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
        "Coverage for past, current, and future treatment related to AFFF exposure. ",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for income lost due to illness or inability to work.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Damages for physical discomfort, emotional distress, and reduced quality of life.   ",
    },
    {
      title: "Disability Benefits",
      description:
        "For permanent or long-term impairments caused by exposure. ",
    },
    {
      title: "Wrongful Death Claims",
      description:
        "If a loved one passed away due to illnesses linked to AFFF exposure.  ",
    },
    {
      title: "Environmental and Cleanup Costs",
      description:
        "In some cases, reimbursement for property or environmental damage. ",
    },
  ],

  realStories: [
    {
      name: "Bryce Martinez: ",
      story:
        " A U.S. District Court dismissed his lawsuit for failing to link specific food products to his type 2 diabetes and nonalcoholic fatty liver disease. ",
    },
  ],

  pageContent: {
    mainTitle: "What is AFFF Firefighting Foam Lawsuit?  ",
    mainParagraphs: [
      "If you or a loved one has been exposed to AFFF (Aqueous Film-Forming Foam), you may be eligible to pursue compensation. The AFFF firefighting foam lawsuit addresses health risks linked to PFAS chemicals found in these foams, commonly used by firefighters, military personnel, and industrial workers. ",
      "The AFFF firefighting foam lawsuit is a series of legal claims brought against manufacturers of firefighting foam containing PFAS (per- and polyfluoroalkyl substances). These lawsuits allege that companies failed to warn users about the chemical’s long-term health risks, including cancer and other serious illnesses.",
      "Litigation typically involves claims of personal injury, occupational exposure, and environmental contamination, allowing affected individuals to seek financial compensation for medical bills, lost wages, and pain and suffering. ",
      "What is AFFF Firefighting Foam?",
      "AFFF (Aqueous Film-Forming Foam) is a chemical firefighting agent used to suppress flammable liquid fires quickly. Its effectiveness in extinguishing oil and fuel fires made it standard in airports, military bases, and industrial sites. ",
      "However, AFFF contains PFAS chemicals, which are highly persistent in the environment and human body, often called forever chemicals. Long-term exposure has been linked to serious health conditions, prompting lawsuits against manufacturers. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "Individuals eligible to file an AFFF lawsuit often include: ",
    allegationsParagraph:
      "Even if exposure occurred years ago, individuals may still be able to pursue claims, depending on the statute of limitations in their state  ",

    healthRisksTitle:
      "Health Risks from AFFF Firefighting Foam & PFAS Exposure    ",
    healthRisksParagraph:
      "Exposure to AFFF firefighting foam has been linked to serious and lasting health problems, affecting both physical well-being and daily life. Victims often face long-term medical treatment and ongoing health challenges. ",

    healthRisksSubtitle: "Health risks of AFFF firefighting foam:    ",

    otherRisksTitle:
      "Common Sources of AFFF Exposure: Firefighters and Industrial Sites  ",

    otherRisksSubTitle: "AFFF exposure is common in:  ",

    mdllitigationTitle: "AFFF Lawsuit Updates: Current Legal Proceedings    ",

    mdllitigationParagraph:
      "Since the ultra-processed food lawsuits are still in their early stages, there is no clear estimate of potential compensation. Courts are yet to determine how liability, damages, or settlements will be handled. ",
    mdllitigationSubtitle: " Possible forms of compensation may include:   ",

    updateTitle: "Finding the Right Lawyer for Your AFFF Lawsuit  ",
    updateParagraph:
      "Choosing an experienced AFFF lawsuit attorney is crucial for maximizing compensation. Look for lawyers who: ",

    updateSubtitle: "Documents to file lawsuit includes: ",

    settlementTitle:
      "Settlements & Compensation in AFFF Firefighting Foam Cases ",
    settlementParagraph:
      "Exposure to AFFF firefighting foam can lead to serious health complications and financial strain due to medical bills, lost wages, and emotional stress. Many affected individuals wonder what types of compensation they may be entitled to. ",
    settlementSubtitle: "Types of compensation you can seek: ",

    helpTitle:
      "Ultra-Processed Food Lawyers: How to Find the Right Attorney?    ",
    helpSubtitle:
      "Finding the right ultra-processed food lawsuit attorney is crucial for building a strong case. Consider the following:    ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a AFFF Firefighting Foam Lawsuit with Connect2Attorney?   ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a AFFF firefighting foam lawsuit against the responsible party, in just three simple steps:   ",
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

export const AFFF_TOC = [
  {
    label: "What is AFFF Firefighting Foam Lawsuit?",
    id: "main-title",
  },
  {
    label: "Health Risks from AFFF Firefighting Foam & PFAS Exposure",
    id: "health-risks-title",
  },
  {
    label: "Common Sources of AFFF Exposure: Firefighters and Industrial Sites",
    id: "other-risks-title",
  },
  {
    label: "AFFF Lawsuit Updates: Current Legal Proceedings",
    id: "settlements-title",
  },
  {
    label: "Finding the Right Lawyer for Your AFFF Lawsuit",
    id: "mdllitigation-title",
  },
  {
    label: "Settlements & Compensation in AFFF Firefighting Foam Cases",
    id: "compensation-title",
  },
  {
    label: "How to File an AFFF Firefighting Foam Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "AFFF Firefighting Foam Lawsuit Timeline",
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
            <TableOfContents items={AFFF_TOC} />
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

              <h3 className="font-bold">
                {content.pageContent.mainParagraphs[3]}
              </h3>

              <p>{content.pageContent.mainParagraphs[4]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[5]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[6]}</p>
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
              {content.pageContent.otherRisksTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
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
              id={content.sectionIds.settlementsTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.mdllitigationTitle}
            </h2>

            <div className="space-y-4 w-full mb-16">
              {content.mdllitigationPoints.map((item, index) => (
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
              id={content.sectionIds.mdllitigationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.updateTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.updateParagraph}
            </p>

            <div className="space-y-4 sm:space-y-5 w-full mb-12">
              {content.updatePoints.map((item, index) => (
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
                <TableOfContents items={AFFF_TOC} />
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
