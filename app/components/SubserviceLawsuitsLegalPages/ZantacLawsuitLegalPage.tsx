"use client";
import React from "react";
// import Ozempicfreecasecard from "./Ozempicfreecasecard";
import TableOfContents from "../subservice_pages/TableOfContents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const content = {
sectionIds: {
  mainTitle: "main-title",

  healthRisksTitle: "health-risks-title",
  settlementsTitle: "settlements-title",
  mdllitigationTitle: "mdllitigation-title",
  compensationTitle: "compensation-title",
  realStoriesTitle: "realstories-title",
  stepsTitle: "steps-title",
},


  realStories: [
    {
      name: "Nancy Lopez:",
      story:
        " Nancy was diagnosed with breast cancer. She started taking Zantac at age 15 for acid reflux. She believes there is a link between the medication and her cancer. Nancy was diagnosed with breast cancer. She started taking Zantac at age 15 for acid reflux. She believes there is a link between the medication and her cancer. ",
    },
    {
      name: "Joseph Galimidi:",
      story:
        " He was diagnosed with male breast cancer. Galimidi also claims that Zantac affected other parts of his body. ",
    },
  ],

  eligibilityPoints: [
    {
      title: "Confirm Brand-Name Use:",
      description:
        " Only those who took brand-name Zantac may qualify. Gather prescriptions, pharmacy receipts, or product labels that show the brand.  ",
    },
    {
      title: "Verify a Cancer Diagnosis: ",
      description:
        "You must have been diagnosed with a type of cancer potentially linked to NDMA, such as bladder, stomach, liver, or pancreatic cancer. ",
    },
    {
      title: "Show a Clear Link to Zantac: ",
      description:
        "Your medical and usage history should support the connection between long-term Zantac use and the cancer diagnosis. ",
    },
    {
      title: "Check the Timeline of Use:",
      description:
        "Your use of Zantac should have occurred before the FDA recall in April 2020. Using Zantac continuously for years is more likely to support a case. ",
    },
    {
      title: "Review Statute of Limitations: ",
      description:
        " Each state has deadlines for filing a Zantac lawsuit. Missing this window could block your ability to seek compensation. ",
    },
  ],

  healthRisks: [
    {
      description: "Bladder Cancer ",
    },
    {
      description: "Stomach Cancer  ",
    },
    {
      description: "Esophageal Cancer  ",
    },
    {
      description: "Liver Cancer ",
    },
    {
      description: "Colorectal Cancer ",
    },
    {
      description: "Pancreatic Cancer ",
    },
  ],
  otherRisks: [
    {
      title: "Cardiovascular Problems",
      description:
        "Paraquat can cause low blood pressure and cardiovascular collapse. These effects often occur in severe poisoning cases.   ",
    },
    {
      title: "Respiratory Damage",
      description:
        "It leads to lung inflammation and pulmonary fibrosis. Respiratory failure is a common cause of death after exposure.  ",
    },
    {
      title: "Neurological Problems",
      description:
        "Linked to Parkinson’s disease and motor dysfunction. It damages dopamine-producing neurons in the brain.   ",
    },
    {
      title: "Kidney Failure",
      description:
        " Paraquat is toxic to the kidneys and can cause acute kidney failure. ",
    },
    {
      title: " Digestive Issues ",
      description:
        "Ingestion burns the mouth, throat, and stomach lining. Symptoms include pain, vomiting, and internal bleeding. ",
    },
  ],
  whoQualifies: [
    {
      description: "In-game currency (Robux) encouraging repeated purchases ",
    },
    {
      description:
        "Reward loops and leveling systems designed to keep users engaged ",
    },
    {
      description:
        "Social pressure from multiplayer interactions and virtual status ",
    },
    {
      description: "Continuous updates and events that promote daily logins ",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Covers hospital bills, treatments, medications, and ongoing care costs. ",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for income lost due to illness or time away from work. ",
    },
    {
      title: "Pain and Suffering",
      description:
        "For physical pain, mental anguish, and reduced quality of life.",
    },
    {
      title: "Punitive Damages",
      description:
        "Support for spouses or family members affected by the victim’s condition. ",
    },
    {
      title: "Other Related Costs",
      description:
        "For families who lost a loved one due to talcum powder–related cancer. ",
    },
  ],

  mdllitigationPoints: [
    {
      description: "Review your medical and prescription records  ",
    },
    {
      description: "Determine your eligibility for compensation ",
    },
    {
      description: "File and manage your lawsuit ",
    },
    {
      description: "Negotiate settlements or represent you in court  ",
    },
  ],

  helpPoints: [
    {
      description:
        "Confirm what mesh was used (brand/model) using operative records and device labels  ",
    },
    {
      description:
        "Screen for eligibility based on injuries, revision surgery history, and legal deadlines ",
    },
    {
      description:
        "Build evidence (medical records, timeline, expert review, damages documentation)  ",
    },
    {
      description:
        "File your claim correctly and keep it compliant with MDL/court requirements  ",
    },
    {
      description:
        "Negotiate compensation while protecting your rights through each litigation phase ",
    },
  ],

  mainPoints: [
    {
      description:
        "Extremely toxic when inhaled, ingested, or absorbed through the skin ",
    },
    {
      description:
        "Commonly used on crops like corn, soybeans, cotton, and wheat ",
    },
    {
      description: "Linked by studies to increased Parkinson’s disease risk ",
    },
  ],

  settlementsPoints: [
    {
      title: "Medical Expenses",
      description:
        "Overage for hospital bills, treatments, medications, and ongoing care.",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for income lost due to illness or inability to work. ",
    },
    {
      title: "Pain and Suffering",
      description: "Damages for physical pain and emotional distress.  ",
    },
    {
      title: "Wrongful Death",
      description:
        "Compensation for family members if a loved one died from Zantac-related cancer.  ",
    },
    {
      title: "Punitive Damages",
      description:
        "In some cases, additional penalties may be awarded to punish the manufacturer for negligence. .",
    },
  ],

  pageContent: {
    mainTitle: "What is Zantac Cancer Lawsuit? ",
    mainParagraphs: [
      "The Zantac lawsuit involves claims that the popular heartburn medication Zantac exposed users to dangerous levels of a probable human carcinogen. Thousands of people diagnosed with cancer after long-term Zantac use are now pursuing legal action against drug manufacturers. ",
      "If you or a loved one developed cancer after taking Zantac, you may be eligible to seek financial compensation through a Zantac cancer lawsuit",
      " The Zantac cancer lawsuit involves claims against the manufacturer, GSK and Sanofi, over the drug’s link to cancer caused by exposure to NDMA, a probable carcinogen.  This lawsuit centers on allegations that ranitidine products can degrade into NDMA, especially when exposed to heat or stored over time. In 2020, the FDA requested the removal of all ranitidine products from the U.S. market after independent testing confirmed unacceptable NDMA levels. Since then, affected individuals have filed lawsuits claiming manufacturers knew or should have known about these risks but failed to protect consumers.",
      "About Zantac",
      "Zantac is a brand name for ranitidine, a medication used to treat conditions such as heartburn and ulcers. It belongs to a class of drugs called histamine 2 blockers and works by reducing the amount of acid your stomach produces.   ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "Here's how you can determine your eligibility for a lawsuit:  ",

    allegationsParagraph:
      "If you or a loved one used brand-name Zantac and were later diagnosed with certain types of cancer, you may be eligible to seek compensation. Understanding the specific criteria for filing a lawsuit can help protect your rights and ensure you take timely action.  ",

    healthRisksTitle:
      "Zantac and Cancer Risk: What Research and Studies Reveal ",
    healthRisksParagraph: [
      "Studies have revealed that Zantac can break down into NDMA, especially when exposed to heat or stored over time. NDMA is classified as a probable human carcinogen and has been linked to several types of cancer",
      "Ongoing research continues to examine how NDMA exposure may increase cancer risk. These findings are a major foundation for current claims involving Zantac and cancer, and support allegations made in the Zantac lawsuit. ",
      "What are the Different Types of Cancers Caused by Zantac?   ",
    ],

    healthRiskSubtitle: "Studies show: ",

    otherRisksTitle:
      "Zantac Lawsuit Updates: Latest Court Rulings & Case Status   ",

    otherRisksParagraph:
      "The Zantac lawsuit has undergone major changes. In July 2025, the Delaware Supreme Court ruled that expert evidence linking Zantac to cancer must meet strict scientific standards. This affects about 75,000 cases. Earlier, GSK settled 80,000 claims for $2.2 billion in 2024. As of November 2025, around 1,800 federal cases are still active, with trials continuing in Illinois and California. If you got cancer after taking Zantac, it’s important to know your options.  ",

    mdllitigationTitle:
      "Finding the Right Zantac Lawyers & Attorneys for Your Case  ",

    mdllitigationParagraph:
      "At Connect 2 Attorney, we help you connect with qualified legal professionals who focus on pharmaceutical injury cases and understand the complexities of the Zantac lawsuit. ",

    mdllitigationSubtitle:
      "Choosing an experienced Zantac attorney is critical to building a strong case. The right attorney can: ",

    helpTitle: "How a Hernia Mesh Lawyer Can Help?  ",
    helpSubtitle: "A hernia mesh lawyer can help you: ",
    helpParagraph:
      "Most hernia mesh cases are handled on a contingency fee, meaning you typically pay nothing upfront. ",

    settlementsTitle:
      "Zantac Settlements & Compensation: What You Can Expect   ",
    settlementsParagraph:
      "Compensation in a Zantac cancer lawsuit depends on the severity of your injuries and the impact on your life. Compensation amounts typically range from $25,000 to $500,000, depending on the details of your case. ",
    settlementsSubtitle: "The types of compensation you may seek include:  ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle: "How to File a Zantac Cancer Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Zantac cancer lawsuit against the responsible party, in just three simple steps: ",
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
const ZANTAC_TOC = [
  { label: "What is Zantac Cancer Lawsuit?", id: "main-title" },
  {
    label: "Zantac and Cancer Risk: What Research and Studies Reveal",
    id: "health-risks-title",
  },
  {
    label: "Zantac Lawsuit Updates: Latest Court Rulings & Case Status",
    id: "settlements-title",
  },
  {
    label: "Finding the Right Zantac Lawyers & Attorneys for Your Case",
    id: "mdllitigation-title",
  },
  {
    label: "Zantac Settlements & Compensation: What You Can Expect",
    id: "compensation-title",
  },
  {
    label: "Real Stories Behind Lawsuit",
    id: "realstories-title",
  },
  {
    label: "How to File a Zantac Cancer Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Zantac Lawsuit Timeline",
    id: "timeline-section",
  },
  {
    label: "Get Legal Support from Connect2Attorney",
    id: "support",
  },
  { label: "FAQs", id: "faqs" },
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
            <TableOfContents items={ZANTAC_TOC} />
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

              <p>{content.pageContent.mainParagraphs[2]}</p>
              <br />

              <h3 className="font-bold">
                {content.pageContent.mainParagraphs[3]}
              </h3>

              <p>{content.pageContent.mainParagraphs[4]}</p>
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

              <p className="mb-4 font-urbanist  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
              <p className="mb-4 font-urbanist font-bold  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsSubtitle}
              </p>

              <ul className="space-y-5 mb-2">
                {content.eligibilityPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    {/* Text */}
                    <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      <strong>{item.title}</strong> {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mb-4 font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
            </div>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.healthRisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.healthRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRisksParagraph[0]}
              </p>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRisksParagraph[1]}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRiskSubtitle}
              </p>
              <div className="w-full mb-16">
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
                      <p
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
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <h2
              
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.otherRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.otherRisksParagraph}
              </p>

              <h2
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.mdllitigationTitle}
              </h2>
              <p className="mb-4 font-urbanist   text-[#425777] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
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
                    <p
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
                    </p>
                  </div>
                ))}
              </div>

              <p className="mb-4 font-urbanist  text-[#425777] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.mdllitigationParagraph}
              </p>

              <h2
                id={content.sectionIds.compensationTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.settlementsTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.settlementsParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.settlementsSubtitle}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
                {content.settlementsPoints.map((item, index) => (
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
                    {/* Title */}
                    <h4
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
                    </h4>

                    {/* Description as Bullet Points */}
                    <ul
                      className="
 
         
          space-y-2
          text-[#425777]
          font-urbanist
          text-[16px]
          sm:text-[17px]
          lg:text-[18px]
          font-medium
          leading-[27px]
        "
                    >
                      {Array.isArray(item.description) ? (
                        item.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))
                      ) : (
                        <li>{item.description}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
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
                <TableOfContents items={ZANTAC_TOC} />
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
