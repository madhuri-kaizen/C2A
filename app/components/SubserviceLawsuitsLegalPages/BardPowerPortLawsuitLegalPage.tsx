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

    otherRisksTitle: "other-title",

    mdllitigationTitle: "mdllitigation-title",

    compensationTitle: "compensation-title",

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
      title: "Patients with a Bard PowerPort implant:",
      description:
        " Individuals who have received the device and experienced complications may be eligible.",
    },
    {
      title: "Documented medical complications: ",
      description:
        "Injuries like infections, thrombosis, device failure, or cancer linked to the device are considered valid claims.",
    },
    {
      title: "Legal timeframe compliance : ",
      description:
        "Claims must be filed within the statute of limitations in your state. A qualified bard powerport lawsuit attorney can guide you on deadlines and filing requirements ",
    },
  ],

  healthRisks: [
    {
      title: "Blood Clots:",
      description:
        "Blockages in veins that can restrict blood flow and cause life-threatening complications. ",
    },
    {
      title: "Infection:",
      description:
        "Bacteria entering the bloodstream through damaged or fractured device parts.   ",
    },
    {
      title: "Organ Puncture: ",
      description:
        "Device fragments may pierce internal organs, causing internal bleeding and severe pain  ",
    },
    {
      title: "Vascular Damage: ",
      description:
        "Injury to blood vessels from device movement or breakage.  ",
    },
    {
      title: "Severe Pain:",
      description:
        " Persistent pain at or near the implant site due to inflammation or internal injury.",
    },
    {
      title: "Cardiac Tamponade:",
      description:
        "A rare but critical condition where leaking fluid or fragments compress the heart, impairing its function ",
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
      title: "Proven experience in medical device or mass tort cases",
      description:
        "Attorneys familiar with MDLs and product liability lawsuits are better equipped to handle complex litigation.",
    },
    {
      title: "A history of successful settlements or verdicts",
      description:
        "A strong track record shows the ability to negotiate fair compensation or win cases at trial.  ",
    },
    {
      title: "Clear communication and no upfront fees",
      description:
        "Most Bard PowerPort lawyers work on a contingency basis, meaning you pay nothing unless your case is successful. ",
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
      description: "Costs for surgeries, hospital stays, and ongoing care.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for physical and emotional distress caused by device failure. . ",
    },
    {
      title: "Lost income",
      description: "Wages lost due to recovery time or inability to work.   ",
    },
    {
      title: "Permanent disability",
      description:
        "Payments for long-term or permanent impairment resulting from complications.  ",
    },
    {
      title: "Other damages",
      description:
        "Any additional financial or personal losses linked to the device failure. .",
    },
  ],

  pageContent: {
    mainTitle: "What is Bard PowerPort Lawsuit? ",
    mainParagraphs: [
      "If you or a loved one experienced complications from a Bard PowerPort, you may be entitled to compensation. The Bard PowerPort lawsuit addresses claims against the manufacturer for medical complications, including cancer and other serious side effects. Learn more about your legal options, eligibility, and the latest updates in this evolving litigation. ",
      "The Bard PowerPort lawsuit is a series of legal claims filed by patients who suffered adverse effects after receiving a Bard PowerPort, a medical device implanted to deliver medications directly into veins. Patients allege the device caused injuries such as infections, thrombosis, and, in some cases, cancer. ",
      "Plaintiffs allege that the PowerPort can crack, fracture, or migrate in the bloodstream, leading to infections, blood clots, and organ damage. The lawsuits also claim that Bard was aware of these risks but failed to warn doctors and patients about the potential dangers.",
      "About Bard PowerPort",
      "The Bard PowerPort is a medical device implanted beneath the skin to provide easy access to veins for treatments such as chemotherapy and blood transfusions. Because it is placed under the skin, it can remain in place for extended treatment periods.  ",
      "The device is made from barium sulfate and polyurethane, materials that have been alleged to break down and enter the bloodstream, potentially leading to serious health complications. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "Eligibility for a Bard PowerPort lawsuit typically includes:  ",

    allegationsParagraph:
      "If you or a loved one used brand-name Zantac and were later diagnosed with certain types of cancer, you may be eligible to seek compensation. Understanding the specific criteria for filing a lawsuit can help protect your rights and ensure you take timely action.  ",

    healthRisksTitle:
      "Bard PowerPort Side Effects and Health Risks Explained   ",
    healthRisksParagraph:
      "Patients have reported serious health issues caused by the Bard PowerPort breaking down or disintegrating inside the body. When the device fragments move through the bloodstream, it can lead to severe internal injuries and even bloodstream poisoning. The major problems associated with PowerPort include: ",

    otherRisksTitle: "Bard PowerPort Lawsuit Update ",

    otherRisksParagraph: [
      "The Bard PowerPort lawsuit update reveals that more than 1,500 cases have been consolidated into a Multidistrict Litigation (MDL) in the United States against C.R. Bard to streamline proceedings and improve efficiency. ",
      "Bard PowerPort Lawsuit MDL Status & Latest News ",
      "As of January 2026, over 2,545 Bard PowerPort lawsuits are pending, with the first bellwether trial set for April 21, 2026, in the District of Arizona under Judge David G. Campbell. The MDL has grown from 1,500 to nearly 2,000 cases, including 336 new filings in November 2025. The lawsuits claim Bard PowerPort devices are defectively designed, causing fractures, migration, and serious injuries that may require emergency surgery. Litigation is expected to continue expanding through 2027.  ",
    ],

    mdllitigationTitle:
      "Finding the Right Zantac Lawyers & Attorneys for Your Case  ",

    mdllitigationParagraph:
      "At Connect 2 Attorney, we help you connect with qualified legal professionals who focus on pharmaceutical injury cases and understand the complexities of the Zantac lawsuit. ",

    mdllitigationSubtitle:
      "Choosing an experienced Zantac attorney is critical to building a strong case. The right attorney can: ",

    helpTitle: "Bard PowerPort Lawyers: How to Find the Right Attorney? ",
    helpSubtitle: "The major problems associated with PowerPort include:  ",
    helpParagraph:
      "An experienced Bard PowerPort lawsuit attorney understands medical device litigation and knows how to build strong claims against large manufacturers. When selecting a lawyer, look for:  ",

    compensationTitle: "What Compensation Can You Seek? ",
    compensationParagraph:
      "Patients harmed by a Bard PowerPort may face intense physical pain, repeated medical procedures, and lasting emotional distress. Depending on the severity of your injuries, ongoing litigation suggests that compensation can range from $10,000 to $300,000.  ",
    compensationSubtitle: "Potential recoveries may include: ",

    stepsTitle: "How to File a Bard PowerPort Lawsuit with Connect2Attorney?",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Bard PowerPort lawsuit against the responsible party, in just three simple steps: ",
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
export const BARD_POWERPORT_TOC = [
  { label: "What is Bard PowerPort Lawsuit?", id: "main-title" },

  {
    label: "Bard PowerPort Side Effects and Health Risks Explained",
    id: "health-risks-title",
  },

  {
    label: "Bard PowerPort Lawsuit Update",
    id: "other-title",
  },

  {
    label: "Bard PowerPort Lawyers: How to Find the Right Attorney?",
    id: "mdllitigation-title",
  },

  {
    label: "Bard PowerPort Settlements & Compensation Overview",
    id: "compensation-title",
  },

  {
    label: "How to File a Bard PowerPort Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },

  {
    label: "Bard PowerPort Lawsuit Timeline",
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
            <TableOfContents items={BARD_POWERPORT_TOC} />
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
                    <h4 className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      <strong>{item.title}</strong> {item.description}
                    </h4>
                  </li>
                ))}
              </ul>
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
                {content.pageContent.healthRisksParagraph}
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
          
          leading-[27px]
          capitalize
        "
                      >
                        <span>
                          <strong>{item.title}</strong>
                        </span>{" "}
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <h2
                id={content.sectionIds.otherRisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.otherRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksParagraph[0]}
              </p>
              <br />

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.otherRisksParagraph[1]}
              </p>
              <br />

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px] mb-12">
                {content.pageContent.otherRisksParagraph[2]}
              </p>

              <h2
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.helpTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.helpParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.helpSubtitle}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
                {content.helpPoints.map((item, index) => (
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

            <h2
              id={content.sectionIds.compensationTitle}
              className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
            >
              {content.pageContent.compensationTitle}
            </h2>

            <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.compensationParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.compensationSubtitle}
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
                <TableOfContents items={BARD_POWERPORT_TOC} />
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
