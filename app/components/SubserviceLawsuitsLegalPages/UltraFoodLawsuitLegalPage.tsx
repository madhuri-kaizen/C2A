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
      description:
        "Have been diagnosed with cancer after regularly consuming ultra-processed foods.  ",
    },
    {
      description:
        "Can show that your diet included high amounts of these foods over a long period.  ",
    },
    {
      description:
        "Believe that the food manufacturers failed to provide adequate warnings about the potential health risks. ",
    },
    {
      description:
        "You experienced infertility, internal injuries, or chronic pain  ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: " Type 2 Diabetes",
      description:
        "Frequent spikes in blood sugar from refined carbs and sugars lead to insulin resistance.   ",
    },
    {
      number: "02",
      title: "Obesity",
      description:
        "High in calories but low in nutrients, these foods promote overeating and weight gain. ",
    },
    {
      number: "03",
      title: "Cardiovascular Diseases",
      description:
        "Unhealthy fats and additives increase cholesterol and inflammation, harming heart health. ",
    },
    {
      number: "04",
      title: "  Inflammatory Conditions",
      description:
        "Preservatives and emulsifiers can trigger long-term body inflammation.   ",
    },
    {
      number: "05",
      title: " Cognitive Decline",
      description:
        "Linked to poor memory and brain function due to oxidative stress and nutrient imbalance.  ",
    },
    {
      number: "06",
      title: " Hypertension",
      description:
        "High sodium content raises blood pressure and strains the heart. ",
    },
  ],

  otherRisks: [
    {
      description: "Packaged snacks like chips and cookies ",
    },
    {
      description: "Sugary beverages and sodas  ",
    },
    {
      description:
        "Processed meats such as hot dogs, sausages, and deli meats  ",
    },
    {
      description: "Instant noodles and ready-to-eat meals ",
    },
    {
      description:
        "Breakfast cereals with high sugar and artificial additives ",
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
      number: "01",
      title: "Medical Records",
      description:
        "Documentation of Paragard insertion, removal, and any complications or surgeries. ",
    },
    {
      number: "02",
      title: " Proof of Device Use",
      description:
        "Records confirming the brand, model, and duration of Paragard use. .",
    },
    {
      number: "03",
      title: " Proof of Use",
      description:
        "You can provide medical records confirming Paragard use and related complications. ",
    },
    {
      number: "04",
      title: " Injury Reports",
      description:
        "Notes from doctors detailing injuries such as breakage, infections, or internal damage.",
    },
    {
      number: "05",
      title: " Billing Statements",
      description:
        "Receipts and invoices for medical treatments, surgeries, and related expenses. ",
    },
    {
      number: "06",
      title: "Personal Statements",
      description:
        "Descriptions of pain, suffering, or lifestyle impact caused by the device. ",
    },
    {
      number: "07",
      title: " Expert Opinions",
      description:
        "Medical expert evaluations linking injuries directly to Paragard usage. ",
    },
  ],
  compensationPoints: [
    {
      title: "Medical Expenses",
      description:
        "Coverage for past and future treatment costs related to illnesses allegedly caused by ultra-processed food consumption.   ",
    },
    {
      title: "Lost Wages and Earning Capacity",
      description:
        "Compensation for income lost due to illness or reduced ability to work. ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Financial relief for physical pain, emotional distress, and reduced quality of life.    ",
    },
    {
      title: "Punitive Damages",
      description:
        "If companies are found to have knowingly endangered consumers, courts may impose additional penalties.  ",
    },
    {
      title: "Wrongful Death Claims",
      description:
        "Families of individuals who died due to related health conditions may pursue claims for loss of support. ",
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
    mainTitle: "What is the Ultra-Processed Food Cancer Lawsuit?  ",
    mainParagraphs: [
      "If you or a loved one has developed cancer after consuming ultra-processed foods, you may be eligible to take legal action. The Ultra-Processed Food Lawsuit seeks to hold food manufacturers accountable for the health risks linked to these products.",
      "In the US, nearly 55% of daily calories come from these foods. Recent studies suggest that consuming ultra-processed foods may increase the risk of cancers, including pancreatic and colorectal, due to harmful additives and chemical byproducts.",
      "The Ultra-Processed Food Lawsuit is a series of legal claims filed against food companies whose products contain high levels of preservatives, artificial additives, and other harmful ingredients. Plaintiffs allege that prolonged consumption of ultra-processed foods may increase the risk of cancer, and that companies failed to warn consumers about these dangers. ",
      "This lawsuit is gaining attention across the United States as more studies highlight the potential health risks associated with these products. ",
      "What is Ultra-Processed Food Cancer?",
      "Ultra-processed foods are products that undergo multiple industrial processes and contain additives like flavor enhancers, colorings, and preservatives. Research suggests that frequent consumption of these foods may be linked to various cancers, including colorectal, breast, and stomach cancers.",
      "While not all ultra-processed foods cause cancer, studies indicate that diets heavily reliant on these products can contribute to long-term health risks. ",
    ],

    allegationsTitle: "Who Can File an Ultra-Processed Food Cancer Lawsuit? ",

    allegationsSubtitle:
      "You may be eligible to file an ultra-processed food lawsuit if you:  ",

    allegationsParagraph:
      "Consulting an ultra-processed food lawsuit attorney can help determine your eligibility and guide you through the legal process.  ",

    healthRisksTitle:
      "Ultra-Processed Foods and Cancer Risk: What Studies Show?    ",
    healthRisksParagraph:
      "Ultra-processed foods are linked not just to cancer but also to several chronic diseases. Their high sugar, fat, and sodium content, along with additives, disrupts normal metabolism and body function. ",

    healthRisksSubtitle: "Other health concerns include:    ",

    otherRisksTitle: "Common Ultra-Processed Foods Linked to Cancer Concerns  ",

    otherRisksSubTitle:
      "Some ultra-processed foods frequently linked to cancer risk include: ",

    mdllitigationTitle:
      "Ultra-Processed Food Settlements & Compensation Overview     ",

    mdllitigationParagraph:
      "Since the ultra-processed food lawsuits are still in their early stages, there is no clear estimate of potential compensation. Courts are yet to determine how liability, damages, or settlements will be handled. ",
    mdllitigationSubtitle: " Possible forms of compensation may include:   ",

    updateTitle:
      "Ultra-Processed Food Lawsuit Update: Current Legal Developments  ",
    updateParagraph:
      "San Francisco has filed the first lawsuit accusing food companies of deceptive marketing of ultra-processed foods, while the new Trump administration nutrition guidelines are also targeting these products. Together, these actions reflect growing legal and regulatory scrutiny of ultra-processed foods in the United States. ",

    updateSubtitle: "Documents to file lawsuit includes: ",
    helpTitle:
      "Ultra-Processed Food Lawyers: How to Find the Right Attorney?    ",
    helpSubtitle:
      "Finding the right ultra-processed food lawsuit attorney is crucial for building a strong case. Consider the following:    ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Ultra-Processed Food Cancer with Connect2Attorney?   ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Ultra Processed Food lawsuit against the responsible party, in just three simple steps:  ",
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

export const ULTRA_PROCESSED_FOOD_TOC = [
  {
    label: "What is the Ultra-Processed Food Cancer Lawsuit?",
    id: "main-title",
  },
  {
    label: "Ultra-Processed Foods and Cancer Risk: What Studies Show?",
    id: "health-risks-title",
  },
  {
    label: "Common Ultra-Processed Foods Linked to Cancer Concerns",
    id: "other-risks-title",
  },
  {
    label: "Ultra-Processed Food Lawsuit Update: Current Legal Developments",
    id: "settlements-title",
  },
  {
    label: "Ultra-Processed Food Lawyers: How to Find the Right Attorney?",
    id: "mdllitigation-title",
  },
  {
    label: "Ultra-Processed Food Settlements & Compensation Overview",
    id: "compensation-title",
  },
  {
    label: "Real Stories Behind Lawsuit",
    id: "realstories-title",
  },
  {
    label:
      "How to File an Ultra-Processed Food Cancer Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Ultra-Processed Food Cancer Lawsuit Timeline",
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
            <TableOfContents items={ULTRA_PROCESSED_FOOD_TOC} />
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
              id={content.sectionIds.settlementsTitle}
              className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
            >
              {content.pageContent.updateTitle}
            </h2>

            <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
              {content.pageContent.updateParagraph}
            </p>

            <h2
              id={content.sectionIds.otherRisksTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.otherRisksTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.otherRisksSubTitle}
            </p>

            <div className="space-y-4 w-full mb-16">
              {content.otherRisks.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F4F6F8] rounded-lg px-4 sm:px-6 py-5"
                >
                  {/* Description */}
                  <p className="font-noto-serif text-[#162766] text-[16px] lg:text-[24px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <h2
              id={content.sectionIds.mdllitigationTitle}
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
              {content.pageContent.mdllitigationTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationSubtitle}
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
                <TableOfContents items={ULTRA_PROCESSED_FOOD_TOC} />
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
