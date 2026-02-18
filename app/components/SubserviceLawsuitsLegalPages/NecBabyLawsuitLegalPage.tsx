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
    symptomsTitle: "symptoms-title",
    healthRisksTitle: "health-risks-title",
    otherRisksTitle: "other-risks-title",
    mdllitigationTitle: "mdllitigation-title",
    compensationTitle: "compensation-title",
    realStoriesTitle: "realstories-title",
    stepsTitle: "steps-title",
  },

  realStories: [
    {
      name: "Chance Dean: ",
      story:
        "The family of the deceased baby filed a lawsuit against Mead Johnson for failing to warn about the risk of NEC in premature babies. The jury awarded $60 million to the mother to compensate for her loss. ",
    },
    {
      name: "Willa Rheinecker:",
      story:
        " Baby Willa died from NEC four years ago, which was linked to baby formula. Her parents have filed a lawsuit against the manufacturer in Illinois.  ",
    },
  ],

  eligibilityPoints: [
    {
      description:
        "Your premature baby was diagnosed with NEC after being fed cow’s milk-based baby formula ",
    },
    {
      description:
        "Your child suffered serious injuries, required surgery, or developed long-term complications .",
    },
    {
      description: "Your baby passed away due to NEC  ",
    },
    {
      description:
        "You incurred medical expenses, emotional distress, or financial losses as a result ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Swelling or bloating of the abdomen ",
    },
    {
      number: "02",
      title: " Undigested food remaining in the stomach",
    },
    {
      number: "03",
      title: "Greenish fluid (bile) in the stomach Blood in the stool",
    },
    {
      number: "04",
      title: "Blood in the stool ",
    },
  ],

  healthRisks2: [
    {
      number: "01",
      title: "Irregular or paused breathing",
    },
    {
      number: "02",
      title: "Slow or abnormal heart rate",
    },
    {
      number: "03",
      title: " Extreme tiredness or low activity level l",
    },
  ],
  otherRisks: [
    {
      number: "01",
      title: "Gastroenteritis",
      description:
        "Infants may develop inflammation of the stomach and intestines, leading to frequent vomiting, diarrhea, dehydration, and discomfort. ",
    },
    {
      number: "02",
      title: " Respiratory Infections",
      description:
        "Exposure to certain formula components may weaken the immune system, increasing susceptibility to colds, flu, bronchitis, and other respiratory illnesses.  ",
    },
    {
      number: "03",
      title: "Obesity",
      description:
        "Studies suggest that formula-fed infants could face a higher risk of rapid or unhealthy weight gain, which may persist into childhood.  ",
    },
    {
      number: "04",
      title: "Diabetes ",
      description:
        " Some infants may have an increased risk of developing type 1 or type 2 diabetes later in life due to metabolic effects linked to formula ",
    },
    {
      number: "05",
      title: "Eczema",
      description:
        "Sensitive infants may experience skin inflammation, rashes, and allergic reactions, causing irritation and discomfort. ",
    },
    {
      number: "06",
      title: "Physical Health Concerns",
      description:
        "Long gaming sessions contribute to poor posture, eye strain, sleep disruption, and a sedentary lifestyle.",
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
      description: "Experience handling product liability or mass tort cases ",
    },
    {
      description: "A proven track record of settlements or verdicts ",
    },
    {
      description: "Access to medical and scientific experts ",
    },
    {
      description: "Clear communication and compassionate client support",
    },
    {
      description: "No upfront legal fees (contingency-based representation)",
    },
  ],

  settlementsPoints: [
    {
      title: "Medical Expenses",
      description:
        "Costs for hospitalization, surgeries, medications, and ongoing treatments. ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for physical pain and emotional distress caused by the infant’s illness. ",
    },
    {
      title: "Lost income",
      description:
        "Reimbursement for parents’ lost wages or reduced earning capacity due to caregiving.  ",
    },
    {
      title: "Long-Term Care",
      description:
        "Financial support for children who require lifelong medical attention.  ",
    },
    {
      title: "Other damages",
      description:
        " Any additional losses directly linked to the harm caused by the formula. ",
    },
  ],

  pageContent: {
    mainTitle: "What is the Baby Formula Lawsuit? ",
    mainParagraphs: [
      "The NEC Baby Formula Lawsuit involves claims that certain cow’s milk-based baby formulas increased the risk of necrotizing enterocolitis (NEC) in premature infants. As litigation grows across the U.S., affected parents are seeking accountability, financial compensation, and justice for their children’s injuries or wrongful deaths.",
      "If your child has suffered health complications after consuming infant formula from these manufacturers, we can help you pursue the compensation you deserve.   ",
      "The NEC Baby Formula Lawsuit centers on allegations that manufacturers of popular infant formulas, including products made for premature babies, knew or should have known that cow’s milk-based formulas significantly raise the risk of NEC. NEC is a severe gastrointestinal disease that can be fatal or cause lifelong complications. ",
      "Parents claim that despite scientific studies linking cow’s milk-based formulas to NEC, companies failed to warn doctors and consumers. As a result, families say they unknowingly fed these products to vulnerable, premature infants",
      "About NEC",
      "Necrotizing enterocolitis (NEC) is a serious intestinal disease that mainly affects premature and low-birth-weight infants. It causes inflammation and tissue death in the intestines and can lead to infections, organ failure, or death.",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may be eligible to file an NEC Baby Formula Lawsuit if:   ",

    allegationsParagraph:
      "Parents or legal guardians typically bring these claims on behalf of their affected children. ",

    healthRisksTitle: "What are the Symptoms of NEC?  ",
    healthRisksParagraph:
      "Necrotizing enterocolitis (NEC) can cause severe pain and distress in infants. Babies may face digestive problems, feeding difficulties, and serious systemic complications, requiring urgent medical attention.  ",

    healthRisksSubtitle: "Common digestive symptoms may include: ",

    heathRisksSub2: "Warning signs of infection from NEC may include: ",
    otherRisksTitle:
      "Baby Formula and NEC: Health Risks for Premature Infants  ",

    otherRisksParagraph:
      "Infants fed certain baby formulas may face health issues that cause pain, discomfort, and long-term complications. Parents have reported repeated hospital visits, infections, and chronic conditions that affect their child’s well-being.  ",
    otherRisksSubtitle:
      "While many formulas are safe, some have been linked to serious risks, including:  ",

    otherRisksSub2:
      "While these are concerning, the major risk is necrotizing enterocolitis (NEC), a severe intestinal disease that can be fatal in premature babies. ",
    mdllitigationTitle:
      "NEC Baby Formula Lawsuit Update: MDL Status & Latest News   ",

    mdllitigationParagraph:
      "As of January 2026, about 769 NEC baby formula lawsuits were pending in MDL No. 3026 before U.S. District Judge Rebecca Pallmeyer in the Northern District of Illinois. Although no settlements or jury verdicts have yet been reached within the federal MDL, notable verdicts have been issued in state courts. In March 2024, an Illinois jury awarded plaintiffs $60 million. Later, in July 2024, a Missouri jury returned a $495 million verdict in favor of families in an NEC baby formula case.",

    mdllitigationSubtitle:
      "Choosing an experienced Zantac attorney is critical to building a strong case. The right attorney can: ",

    helpTitle: "NEC Baby Formula Lawyers: How to Find the Right Attorney? ",
    helpSubtitle: "The major problems associated with PowerPort include:  ",
    helpParagraph:
      "Choosing the right NEC baby formula lawsuit lawyer is one of the most important steps in your case. When looking for an NEC baby formula lawsuit attorney, consider: ",

    compensationTitle: "NEC Baby Formula Settlements & Compensation Overview  ",
    compensationParagraph:
      "Depending on the severity of injuries, compensation in these lawsuits can range from $50,000 to $500,000. In some cases, like the Enfamil lawsuit verdict, awards have reached as high as $60 million. ",
    compensationSubtitle: "Potential compensation includes: ",

    compensationSub2:
      "While these are concerning, the major risk is necrotizing enterocolitis (NEC), a severe intestinal disease that can be fatal in premature babies. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a NEC Baby Formula Lawsuit with Connect2Attorney?  ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a NEC Baby Formula lawsuit against the responsible party, in just three simple steps:  ",
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
export const NEC_BABY_FORMULA_TOC = [
  {
    label: "What is the NEC Baby Formula Lawsuit?",
    id: "main-title",
  },
  {
    label: "What are the Symptoms of NEC?",
    id: "symptoms-title",
  },
  {
    label: "Baby Formula and NEC: Health Risks for Premature Infants",
    id: "health-risks-title",
  },
  {
    label: "NEC Baby Formula Lawsuit Update: MDL Status & Latest News",
    id: "other-risks-title",
  },
  {
    label: "NEC Baby Formula Lawyers: How to Find the Right Attorney?",
    id: "mdllitigation-title",
  },
  {
    label: "NEC Baby Formula Settlements & Compensation Overview",
    id: "compensation-title",
  },
  {
    label: "Real Stories Behind Lawsuit",
    id: "realstories-title",
  },
  {
    label: "How to File a Baby Formula Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Baby Formula Lawsuit Timeline",
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
            <TableOfContents items={NEC_BABY_FORMULA_TOC} />
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
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
            </div>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.symptomsTitle}
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

              <div className="space-y-4 sm:space-y-5 w-full mb-10">
                {content.healthRisks.map((item, index) => (
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
                      {item.number} - {item.title}
                    </h3>
                  </div>
                ))}
              </div>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.heathRisksSub2}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
                {content.healthRisks2.map((item, index) => (
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
                      {item.number} - {item.title}
                    </h4>
                  </div>
                ))}
              </div>

              <h2
                id={content.sectionIds.healthRisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.otherRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksSubtitle}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-10">
                {content.otherRisks.map((item, index) => (
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
                      {item.number} - {item.title}
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

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksSub2}
              </p>

              <h2
                id={content.sectionIds.otherRisksTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.mdllitigationTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.mdllitigationParagraph}
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

              <div className="w-full mb-16">
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
                <TableOfContents items={NEC_BABY_FORMULA_TOC} />
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
