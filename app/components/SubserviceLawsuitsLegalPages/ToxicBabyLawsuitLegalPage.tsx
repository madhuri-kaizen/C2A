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
  realStoriesTitle: "realstories-title",
  stepsTitle: "steps-title",
},


  eligibilityPoints: [
    {
      description: "Proof of purchase of contaminated baby food products   ",
    },
    {
      description: "Evidence of exposure to baby food heavy metals  ",
    },
    {
      description:
        "Medical diagnosis of conditions such as autism, ADHD, or other developmental delays  ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: " Neurodevelopmental Disorders",
      description:
        " Heavy metals can disrupt normal brain and nervous system development, increasing the risk of learning disabilities.   ",
    },
    {
      number: "02",
      title: " Gastrointestinal Issue",
      description:
        "Contaminated baby food may cause persistent digestive problems, including nausea, vomiting, and abdominal pain.   ",
    },
    {
      number: "03",
      title: "Cancer",
      description:
        "Long-term exposure to toxic elements like arsenic and cadmium has been associated with cancers affecting the bladder, liver, and other organs.   ",
    },
    {
      number: "04",
      title: " Cardiovascular Problem",
      description:
        "Heavy metals may damage blood vessels and interfere with heart function, contributing to high blood pressure.   ",
    },
    {
      number: "05",
      title: " Delayed Development",
      description:
        "Linked to poor memory and brain function due to oxidative stress and nutrient imbalance.   ",
    },
    {
      number: "06",
      title: " Brain Damage",
      description:
        "Lead and mercury exposure can cause irreversible brain damage, resulting in memory loss and reduced IQ.   ",
    },
  ],

  otherRisks: [
    {
      title: "Autism spectrum disorders (ASD)",
      description:
        "Families claim that early exposure to lead, arsenic, and mercury may disrupt neural pathways involved in communication, behavior, and social development.  ",
    },
    {
      title: "Attention-deficit hyperactivity disorder (ADHD)",
      description:
        "Heavy metal exposure has been associated with attention problems, impulsivity, and difficulty concentrating in young children.  ",
    },
    {
      title: "Delayed cognitive and motor skill development",
      description:
        "Children may experience speech delays, learning difficulties, poor coordination, and slower intellectual growth.   ",
    },
    {
      title: "Other neurological and developmental issues",
      description:
        "Including behavioral disorders, memory impairment, sensory processing problems, and reduced IQ.   ",
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
      description: "Evaluate your child’s exposure and medical history   ",
    },
    {
      description: "Represent your claim in court or settlement negotiations  ",
    },
    {
      description: "Gather evidence of heavy metals in baby food .   ",
    },
    {
      description: "Ensure compliance with filing deadlines in the MDL   ",
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
        "Reimbursement for hospital bills, therapy, medications, and ongoing treatments related to autism.  ",
    },
    {
      title: "Lost Future Earnings",
      description:
        "Recovery for potential income the child may lose in adulthood due to developmental delays. ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for emotional distress, anxiety, and reduced quality of life.    ",
    },
    {
      title: "Special Needs and Care Costs",
      description:
        "Funds to cover long-term care, educational support, therapy, and adaptive services.  ",
    },
    {
      title: "Punitive Damages",
      description:
        "In some cases, courts may award additional damages to punish manufacturers for exposing children to harmful substances.",
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
    mainTitle: "What is a Toxic Baby Food Autism Lawsuit?  ",
    mainParagraphs: [
      "Ensure your child’s safety with the baby food autism lawsuit. Studies have found that many baby food products contain toxic heavy metals. Exposure to these contaminants may increase the risk of autism spectrum disorder (ASD) and other neurological problems in children.",
      "Parents whose children developed ASD after consuming contaminated baby food may be eligible to file a lawsuit and seek compensation.   ",
      "The baby food autism lawsuit involves legal claims against leading baby food manufacturers accused of selling products contaminated with heavy metals in baby food, including arsenic, lead, and mercury. Parents allege that long-term exposure to these toxic substances has contributed to developmental disorders such as autism, ADHD, and other neurological conditions in children. ",
      "This litigation seeks compensation for families affected by contaminated baby food and aims to hold manufacturers accountable for failing to ensure safe products. ",
      "About Toxic Baby Food ",
      "“Toxic baby food” refers to commercially available infant foods that contain unsafe levels of metals, such as lead, arsenic, cadmium, and mercury in baby food, often exceeding limits recommended by health authorities. Heavy metals can accumulate over time, even in small amounts, potentially affecting a child’s neurological development. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "Parents or legal guardians of children diagnosed with neurological conditions allegedly linked to toxic baby foods may be eligible to file a claim. Typically, eligibility depends on: ",
    allegationsParagraph:
      "A qualified lawyer can help assess if your child’s case meets the criteria for filing a baby food autism lawsuit.  ",

    healthRisksTitle:
      "Baby Food Heavy Metals: Arsenic, Lead, Mercury & Developmental Risks    ",
    healthRisksParagraph:
      "Contaminated baby food poses health risks beyond ASD. Exposure to toxic heavy metals during infancy can interfere with growth, organ function, and brain development, leading to long-term medical and developmental challenges.",

    healthRisksSubtitle: "Below are some of the major health conditions: ",

    otherRisksTitle:
      "Autism, ADHD & Other Health Conditions Allegedly Linked to Toxic Baby Foods   ",

    otherRisksPaaragraph:
      "Parents pursuing a baby food autism lawsuit claim that exposure to toxic baby food may contribute to: ",

    otherRisksSubTitle: "Key allegations include:  ",

    mdllitigationTitle:
      "Toxic Baby Food Lawsuit Update: MDL Status & Recent Legal Developments     ",

    mdllitigationParagraph:
      "The toxic baby food MDL remains active as new claims continue to be consolidated against major manufacturers accused of selling products containing heavy metals in baby food. Courts and regulators are increasingly focused on product safety and corporate accountability. ",
    mdllitigationSubtitle: " Key updates include: ",

    updateTitle: "Finding the Right Lawyer for Your AFFF Lawsuit  ",
    updateParagraph:
      "Choosing an experienced AFFF lawsuit attorney is crucial for maximizing compensation. Look for lawyers who: ",

    updateSubtitle: "Documents to file lawsuit includes: ",

    settlementTitle:
      "Compensation & Settlement Considerations in Baby Food Cases  ",
    settlementParagraph:
      "Families affected by toxic baby food may face significant medical expenses, emotional stress, and long-term care needs. Lawsuits aim to help parents recover damages for the harm caused to their children and hold manufacturers accountable. ",
    settlementSubtitle: "Compensation may include:  ",

    helpTitle: "How a Lawyer Can Help with Your Toxic Baby Food Claim?     ",
    helpSubtitle: "A knowledgeable lawyer can: ",

    helpParagraph:
      "Legal experts specializing in baby food autism lawsuits provide crucial support to parents seeking justice and safer products for all children. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Toxic Baby Food Autism Lawsuit with Connect2Attorney?  ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a toxic baby food autism lawsuit against the responsible party, in just three simple steps:   ",
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

export const TOXIC_BABY_FOOD_TOC = [
  {
    label: "What is the Toxic Baby Food Lawsuit?",
    id: "main-title",
  },
  {
    label:
      "Baby Food Heavy Metals: Arsenic, Lead, Mercury & Developmental Risks",
    id: "health-risks-title",
  },
  {
    label:
      "Autism, ADHD & Other Health Conditions Allegedly Linked to Toxic Baby Foods",
    id: "other-risks-title",
  },
  {
    label:
      "Toxic Baby Food Lawsuit Update: MDL Status & Recent Legal Developments",
    id: "settlements-title",
  },
  {
    label: "How a Lawyer Can Help with Your Toxic Baby Food Claim?",
    id: "mdllitigation-title",
  },
  {
    label: "Compensation & Settlement Considerations in Baby Food Cases",
    id: "compensation-title",
  },
  {
    label: "Real Stories Behind Lawsuit",
    id: "realstories-title",
  },
  {
    label:
      "How to File a Toxic Baby Food Autism Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Toxic Baby Food Autism Lawsuit Timeline",
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
            <TableOfContents items={TOXIC_BABY_FOOD_TOC} />
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
              {content.pageContent.otherRisksPaaragraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.otherRisksSubTitle}
            </p>

            <div className="space-y-4 w-full mb-16">
              {content.otherRisks.map((item, index) => (
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
              id={content.sectionIds.settlementsTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.mdllitigationTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationSubtitle}
            </p>

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

            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
              <h3 id= {content.sectionIds.mdllitigationTitle} className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4">
                {content.pageContent.helpTitle.split(" ")[0]}{" "}
                {content.pageContent.helpTitle.split(" ")[1]}{" "}
                {content.pageContent.helpTitle.split(" ")[2]}{" "}
                {content.pageContent.helpTitle.split(" ")[3]}{" "}
                {content.pageContent.helpTitle.split(" ")[4]}{" "}
                {content.pageContent.helpTitle.split(" ")[5]}{" "}
                <span className="text-[#FCCB48]">
                  {content.pageContent.helpTitle.split(" ").slice(6).join(" ")}
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

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.helpParagraph}
              </p>
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

              <div className="bg-[#F4F6F8] rounded-lg px-4 sm:px-8 py-6">
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
                <TableOfContents items={TOXIC_BABY_FOOD_TOC} />
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
