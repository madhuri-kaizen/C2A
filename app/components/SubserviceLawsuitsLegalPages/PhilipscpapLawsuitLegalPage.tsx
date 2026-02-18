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


  mainPoints: [
    {
      description: "Break down into inhalable particles",
    },
    {
      description: "Release toxic and potentially carcinogenic gases ",
    },
    {
      description:
        "Degrade faster when exposed to heat, humidity, or ozone cleaners ",
    },
  ],

  eligibilityPoints: [
    {
      description:
        "You used a recalled Philips CPAP machine or BiPAP machine  ",
    },
    {
      description:
        "You experienced respiratory symptoms, organ damage, or cancer after use ",
    },
    {
      description: "You required medical treatment linked to foam exposure  ",
    },
    {
      description:
        "You still possess proof of device use or medical diagnosis ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: " Skin Irritation",
      description:
        " Foam particles can cause rashes, redness, and irritation around the face and airways.   ",
    },
    {
      number: "02",
      title: " Carcinogenic Risk",
      description:
        "Some chemicals in the degraded foam are suspected to be carcinogenic, increasing long-term cancer risk.   ",
    },
    {
      number: "03",
      title: "Respiratory Infections",
      description:
        "Inhaled particles can lead to lung infections and other respiratory complications.   ",
    },
    {
      number: "04",
      title: " Asthma",
      description:
        "Exposure to foam debris may trigger or worsen asthma symptoms in susceptible individuals.   ",
    },
    {
      number: "05",
      title: " Inflammatory Response",
      description:
        "The body may react to inhaled particles with inflammation in the lungs and airways.    ",
    },
    {
      number: "06",
      title: " Headaches and Dizziness",
      description:
        "Users may experience chronic headaches, dizziness, and related symptoms due to exposure to toxic chemicals.   ",
    },
  ],

  otherRisks: [
    {
      description: "A-Series BiPAP A30",
    },
    {
      description: "A-Series BiPAP A40 (ventilator)",
    },
    {
      description: "A-Series BiPAP Hybrid A30",
    },
    {
      description: "A-Series BiPAP V30 Auto (ventilator)",
    },
    {
      description: "C-Series ASV (ventilator)",
    },
    {
      description: "C-Series S/T and AVAPS",
    },
    {
      description: "DreamStation",
    },
    {
      description: "DreamStation ASV",
    },
    {
      description: "DreamStation Go",
    },
    {
      description: "DreamStation ST, AVAPS",
    },
    {
      description: "Dorma 400",
    },
    {
      description: "Dorma 500",
    },
    {
      description: "E30",
    },
    {
      description: "Garbin Plus, Aeris, LifeVent (ventilator)",
    },
    {
      description: "OmniLab Advanced+",
    },
    {
      description: "REMstar SE Auto",
    },
    {
      description: "SystemOne ASV4",
    },
    {
      description: "SystemOne (Q-Series)",
    },
    {
      description: "Trilogy 100 (ventilator)",
    },
    {
      description: "Trilogy 200 (ventilator)",
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
      description: "Confirm whether your Philips CPAP machine qualifies    ",
    },
    {
      description: "Collect medical records and device documentation  ",
    },
    {
      description: "File claims within legal deadlines ",
    },
    {
      description: "Negotiate higher settlement payouts    ",
    },
    {
      description: "Represent you in federal court if necessary ",
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
      title: "Unit-Based Claims",
      description:
        "Eligible users may receive between $55 and $1,552 per recalled device, depending on device type and use.   ",
    },
    {
      title: "Injury-Related Claims",
      description:
        " Compensation will be distributed based on the severity and extent of medical injuries. ",
    },
    {
      title: "Medical Expenses",
      description:
        "Covers costs for treatments, hospital visits, medications, and device replacements.   ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Damages for physical discomfort, emotional distress, and reduced quality of life. ",
    },
    {
      title: "Future Medical Costs",
      description:
        "Financial support for anticipated ongoing care related to device-related health issues. ",
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
    mainTitle: "What is Philips CPAP and BiPAP Recall Lawsuit?  ",
    mainParagraphs: [
      "The Philips CPAP and BiPAP recall lawsuit involves thousands of patients who used recalled Philips CPAP machines, BiPAP machines, and ventilators that allegedly exposed them to toxic foam particles and harmful chemical gases. ",
      "If you or a loved one used a recalled Philips CPAP machine and later developed respiratory problems, cancer, or other injuries, you may be eligible to file a claim and seek compensation. ",
      "The Philips CPAP and BiPAP recall lawsuit centers on allegations that Philips knowingly sold defective sleep apnea devices containing sound-abatement foam that could break down and release dangerous particles and toxic chemicals into users’ airways.",
      "Thousands of personal injury claims have been consolidated into a federal multidistrict litigation (MDL). Plaintiffs seek compensation for medical expenses, lost wages, pain and suffering, and long-term health monitoring.",
      "Philips has agreed to a $1.1 billion settlement in the US to resolve all pending lawsuits, providing compensation to affected individuals for medical costs and other damages",
      "Explain Philips CPAP and BiPAP Recall  ",
      "CPAP and BiPAP devices are used to help patients maintain proper airflow and oxygen levels during sleep.",
      "In June 2021, Philips announced a massive recall of millions of Philips CPAP, BiPAP, and ventilator devices due to defective polyester-based polyurethane (PE-PUR) foam. This foam was intended to reduce noise but was found to: ",
      "The recall affected patients across the U.S. who relied on these devices nightly to treat sleep apnea and respiratory conditions. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may be eligible to file a Philips CPAP recall lawsuit if: ",
    allegationsParagraph:
      "Both patients and families of deceased users may qualify for compensation.  ",

    healthRisksTitle:
      "Philips CPAP/BiPAP Health Risks: Foam Degradation & Associated Injuries     ",
    healthRisksParagraph:
      "Philips' CPAP and BiPAP devices have been linked to several serious health risks due to the breakdown of the sound-dampening foam. Many users have reported ongoing discomfort, breathing problems, and other complications because of exposure to the defective material. ",

    healthRisksSubtitle:
      "Major health risks associated with Philips CPAP and BiPAP ",

    otherRisksTitle:
      "Devices Affected by the Philips Recall: CPAP, BiPAP & Ventilators   ",

    otherRisksPaaragraph:
      "The recall covers numerous Philips sleep and respiratory devices made between 2009 and April 26, 2001, and this includes:   ",

    otherRisksSubTitle:
      "Philips also recalled certain Trilogy Evo ventilators that were distributed from April 15, 2021, to May 24, 2021, with specific serial numbers.   ",

    mdllitigationTitle:
      "Philips CPAP and BiPAP Recall Lawsuit Update: Current Legal Developments      ",

    mdllitigationParagraph: [
      "As of January 2026, 621 injury-related cases involving recalled Philips CPAP machines remain pending in the federal multidistrict litigation, and in December 2025, 680 lawsuits involving sleep apnea devices remain pending in MDL No. 3014. ",
      "On April 29, 2024, Philips Respironics agreed to a $1.1 billion settlement to resolve CPAP-related lawsuits. Approximately $1.075 billion of the settlement is allocated to personal injury claims involving serious health complications or deaths allegedly caused by the devices. An additional $25 million is designated for medical monitoring of individuals who used the recalled machines and may face future health risks. The settlement is still subject to approval by a federal court. ",
      "Previously, in early September 2023, Philips proposed a separate $479 million settlement to resolve CPAP class-action lawsuits related to recalled devices. That agreement does not affect the ongoing federal MDL proceedings.",
    ],
    mdllitigationSubtitle: " Key updates include: ",

    updateTitle: "Finding the Right Lawyer for Your AFFF Lawsuit  ",
    updateParagraph:
      "Choosing an experienced AFFF lawsuit attorney is crucial for maximizing compensation. Look for lawyers who: ",

    updateSubtitle: "Documents to file lawsuit includes: ",

    settlementTitle:
      "Compensation & Settlements in Philips CPAP/BiPAP Cases   ",
    settlementParagraph:
      "Individuals affected by defective Philips CPAP and BiPAP devices may be entitled to financial compensation for the injuries and losses they have suffered. The company has established a $1.1 billion settlement fund to address health-related claims in the US. ",
    settlementSubtitle: "Potential compensation include:   ",

    helpTitle: "How a Philips CPAP and BiPAP Recall Lawyer Can Help?       ",
    helpSubtitle: "An experienced Philips CPAP recall attorney can:  ",

    helpParagraph:
      "Legal experts specializing in baby food autism lawsuits provide crucial support to parents seeking justice and safer products for all children. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Philips CPAP and BiPAP Lawsuit with Connect2Attorney?   ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Philips CPAP and BiPAP lawsuit against the responsible party, in just three simple steps: ",
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

export const PHILIPS_CPAP_TOC = [
  {
    label: "What is Philips CPAP and BiPAP Recall Lawsuit?",
    id: "main-title",
  },
  {
    label: "Philips CPAP/BiPAP Health Risks: Foam Degradation & Associated Injuries",
    id: "health-risks-title",
  },
  {
    label: "Devices Affected by the Philips Recall: CPAP, BiPAP & Ventilators",
    id: "other-risks-title",
  },
  {
    label: "Philips CPAP and BiPAP Recall Lawsuit Update: Current Legal Developments",
    id: "settlements-title",
  },
  {
    label: "How a Philips CPAP and BiPAP Recall Lawyer Can Help?",
    id: "mdllitigation-title",
  },
  {
    label: "Compensation & Settlements in Philips CPAP/BiPAP Cases",
    id: "compensation-title",
  },
  {
    label: "How to File a Philips CPAP and BiPAP Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Philips CPAP and BiPAP Lawsuit Timeline",
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
            <TableOfContents items={PHILIPS_CPAP_TOC} />
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

              <p>{content.pageContent.mainParagraphs[4]}</p>
              <br />

              <h3 className="font-bold">
                {content.pageContent.mainParagraphs[5]}
              </h3>

              <p>{content.pageContent.mainParagraphs[6]}</p>

              <p>{content.pageContent.mainParagraphs[7]}</p>
              <br />

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
              <br />

               <p>{content.pageContent.mainParagraphs[8]}</p>
              

              
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

                        
            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.otherRisksSubTitle}
            </p>
            <h2


              id={content.sectionIds.settlementsTitle}
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

            
            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph[2]}
            </p>
          

        
            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
              <h3
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.helpTitle.split(" ")[0]}{" "}
                {content.pageContent.helpTitle.split(" ")[1]}{" "}
                {content.pageContent.helpTitle.split(" ")[2]}{" "}
                {content.pageContent.helpTitle.split(" ")[3]}{" "}
                {content.pageContent.helpTitle.split(" ")[4]}{" "}
                {content.pageContent.helpTitle.split(" ")[5]}{" "}
                 {content.pageContent.helpTitle.split(" ")[6]}{" "}
                  {content.pageContent.helpTitle.split(" ")[7]}{" "}
                <span className="text-[#FCCB48]">
                  {content.pageContent.helpTitle.split(" ").slice(8).join(" ")}
                </span>
              </h3>

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.helpSubtitle}
              </p>
              <ul className="space-y-5 mb-2">
                {content.helpPoints.map((item, index) => (
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
                <TableOfContents items={PHILIPS_CPAP_TOC} />
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
