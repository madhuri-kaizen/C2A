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
  hipReplacementTitle: "hip-replacement-title",
  ankleReplacementTitle: "ankle-replacement-title",
  mdllitigationTitle: "mdllitigation-title",
  compensationTitle: "compensation-title",
  realStoriesTitle: "realstories-title",
  stepsTitle: "steps-title",
},


  eligibilityPoints: [
    {
      description:
        "You received an Exactech knee replacement, hip replacement, ankle replacement, or joint replacement implant ",
    },
    {
      description: "Your implant was included in the recall list ",
    },
    {
      description:
        "You experienced pain, implant failure, or required revision surgery ",
    },
    {
      description: "Your doctor confirmed abnormal wear or loosening ",
    },
  ],

  healthRisks: [
    {
      description: "Chronic knee pain and stiffness ",
    },
    {
      description: "Swelling and instability ",
    },
    {
      description: "Reduced mobility ",
    },
    {
      description: "Loosening of the implant .",
    },
    {
      description: "Need for early revision surgery ",
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
      title: "Experience with drug injury cases:",
      description:
        "Look for lawyers with a proven track record in pharmaceutical litigation.",
    },
    {
      title: "Knowledge of Oxbryta lawsuits:",
      description:
        "Attorneys familiar with the drug’s side effects, FDA warnings, and recent settlements.",
    },
    {
      title: "Transparent communication:",
      description:
        "Clear guidance on fees, case timelines, and expected outcomes.",
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
        "Damages for chronic pain, emotional distress, and diminished quality of life resulting from implant complications.  ",
    },
    {
      title: "Lost wages",
      description:
        "Compensation for income loss due to time off work or reduced earning capacity caused by long-term disability.    ",
    },
    {
      title: "Revision Surgery Costs",
      description:
        "Coverage for additional procedures required to remove and replace the defective implant.    ",
    },
    {
      title: "Loss of Consortium",
      description:
        "Compensation for the emotional and relational strain experienced by spouses or family members. ",
    },
    {
      title: "Future Medical Care",
      description:
        "Financial support for expected medical needs, including future treatments stemming from the injury. ",
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
    mainTitle: "What is Exactech Implant Recall Lawsuit?",
    mainParagraphs: [
      "The Exactech recall has raised serious concerns for thousands of patients who received defective knee, hip, ankle, and other joint replacement implants. If you or a loved one experienced pain, implant failure, or revision surgery after receiving an Exactech device, you may be eligible to file an Exactech recall lawsuit and seek compensation for medical expenses, lost wages, and suffering. ",
      "The Exactech Implant Recall Lawsuit involves claims against Exactech, a medical device company, for allegedly defective knee, ankle, and hip replacement implants. The company recalled certain implants after discovering that faulty packaging allowed oxygen to damage the plastic parts, leading to early wear and device failure.",
      "Patients affected by the recalled implants have filed more than 1800 lawsuits against the manufacturers. They allege that the company failed to properly warn doctors and patients about these risks and continued distributing the devices despite known issues.",
      "What is the Exactech Recall?",
      "Exactech Inc. is a company that manufactures implants for the ankle, hip, knee, and other joints. These implants are used by patients to restore mobility and improve quality of life.  Recent reports have revealed that the polyethylene material in these implants may have been degraded due to faulty packaging. This oxidation can lead to implant failure and necessitate additional surgeries. Following these discoveries, numerous lawsuits have been filed by patients claiming injuries caused by the defective material. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may be eligible to file an Exactech recall lawsuit if: ",

    healthRisksTitle:
      "Exactech Knee Replacement Recall: Risks, Symptoms & Failures  ",
    healthRisksParagraph:
      "The Exactech knee replacement recall affects several knee systems linked to accelerated wear and early failure. Patients have reported: ",

    healthRisksSubtitle:
      "Knee replacement failures often lead to complex corrective surgeries and long recovery times, increasing both physical and financial burdens.  ",

    otherRisksTitle:
      "Exactech Hip Replacement Recall & Joint Replacement Injuries   ",

    otherRisksParagraph:
      "The Exactech hip replacement recall includes hip liners and components that degraded faster than expected. Common injuries include: ",

    otherRisksSubtitle:
      "In addition to hips, other joint replacement systems, such as shoulders and knees, were affected, placing many patients at risk of long-term complications. ",

    otherRisksSub2:
      "While these risks are serious, the lawsuits focus primarily on cancers caused by prolonged hair relaxer use. ",

    mdllitigationTitle:
      "Exactech Ankle Replacement & Other Affected Joint Implants  ",

    mdllitigationParagraph:
      "Because ankle replacements are more complex, failures often result in prolonged rehabilitation and permanent mobility issues.  ",

    mdllitigationSubtitle:
      "The recall also involves certain ankle replacement systems and less common joint implants. Ankle implant failures may cause: ",
    updateTitle: "Exactech Product Liability Lawsuit: Legal Rights & Options  ",
    updateSub1:
      "Manufacturers have a legal duty to design, test, and package medical devices safely. When defects cause harm, patients have the right to hold them accountable. ",

    updateSub2: "An experienced attorney can: ",
    updateParagraph:
      "An Exactech product liability lawsuit allows injured patients to pursue compensation for: ",
    helpTitle: "Oxbryta Lawyers: How to Find the Right Attorney?  ",
    helpSubtitle:
      "Choosing the right attorney is critical for a successful Oxbryta lawsuit. Here’s what to consider:   ",

    compensationTitle: "What Compensation Can You Seek?   ",
    compensationParagraph:
      "Victims of defective Exactech implants may be entitled to financial compensation for the physical, emotional, and financial hardships they’ve endured. The average settlement range is estimated between $50,000 and $300,000, though the exact amount depends on the severity of health complications. ",
    compensationSubtitle: "Compensation may include:   ",

    compensationSub2:
      "While these are concerning, the major risk is necrotizing enterocolitis (NEC), a severe intestinal disease that can be fatal in premature babies. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File an Exactech Implant Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing Exactech implant lawsuit against the responsible party, in just three simple steps:  ",
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

export const EXACTECH_TOC = [
  {
    label: "What is Exactech Recall Lawsuit?",
    id: "main-title",
  },
  {
    label: "Exactech Knee Replacement Recall: Risks, Symptoms & Failures",
    id: "health-risks-title",
  },
  {
    label: "Exactech Hip Replacement Recall & Joint Replacement Injuries",
    id: "hip-replacement-title",
  },
  {
    label: "Exactech Ankle Replacement & Other Affected Joint Implants",
    id: "ankle-replacement-title",
  },
  {
    label: "Exactech Product Liability Lawsuit: Legal Rights & Options",
    id: "mdllitigation-title",
  },
  {
    label: "What Compensation Can You Seek?",
    id: "compensation-title",
  },
  {
    label: "Real Stories Behind Lawsuit",
    id: "realstories-title",
  },
  {
    label: "How to File an Exactech Implant Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Exactech Implant Lawsuit Timeline",
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
            <TableOfContents items={EXACTECH_TOC} />
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

            <div className="space-y-4 sm:space-y-5 w-full mb-12">
              {content.healthRisks.map((item, index) => (
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

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.hipReplacementTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.otherRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksParagraph}
              </p>
              <br />

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

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksSubtitle}
              </p>
              <br />
              <h2
                id={content.sectionIds.ankleReplacementTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.mdllitigationTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.mdllitigationSubtitle}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-12">
                {content.mdllitigationPoints.map((item, index) => (
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

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.mdllitigationParagraph}
              </p>

              <h2
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.updateTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.updateParagraph}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-5">
                {content.updatePoints1.map((item, index) => (
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

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.updateSub1}
              </p>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.updateSub2}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-12">
                {content.updatePoints2.map((item, index) => (
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

              <div className="space-y-4 sm:space-y-5 w-full mb-10">
                {content.compensationPoints.map((item, index) => (
                  <div
                    key={index}
                    className="
                                                  flex
                                                  flex-col
                                                  items-start
                                                  gap-[10px]
                                                  self-stretch
                                                  p-[20px]
                                                  rounded-[10px]
                                                  bg-[#F0F2F4]
                                                "
                  >
                    <h3
                      className="
                                                    text-[#162766]
                                                    font-noto-serif
                                                    text-[20px]
                                                    sm:text-[22px]
                                                    lg:text-[24px]
                                                    font-medium
                                                    leading-normal
                                                  "
                    >
                      {item.title}
                    </h3>
                    {/* Description */}
                    <p
                      className="
                                                    text-[#425777]
                                                    font-urbanist
                                                    text-[16px]
                                                    sm:text-[17px]
                                                    lg:text-[18px]
                                                    font-medium
                                                    leading-[27px]
                                                    capitalize
                                                  "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-8 py-6 mb-5">
              {/* Section Title */}
              <h2
                id={content.sectionIds.realStoriesTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] font-medium mb-4"
              >
                {content.pageContent.realStoriesTitle}
              </h2>

              {/* Stories */}
              <ul className="space-y-4">
                {content.realStories.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Bullet */}
                    <span className="mt-[6px] text-[#162766] text-[16px]">
                      •
                    </span>

                    {/* Text */}
                    <p className="font-urbanist text-[#425777] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                      <strong className="font-semibold text-[#162766]">
                        {item.name}:
                      </strong>{" "}
                      {item.story}
                    </p>
                  </li>
                ))}
              </ul>
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
                <TableOfContents items={EXACTECH_TOC} />
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
