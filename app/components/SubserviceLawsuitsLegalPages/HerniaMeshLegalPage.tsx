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
    allegationsTitle: "allegations-title",
    healthRisksTitle: "health-risks-title",
    helpTitle: "help-title",
    mdllitigationTitle: "mdl-litigation-title",
    findRightTitle: "find-right-title",
    settlementsTitle: "settlements-title",
    stepsTitle: "steps-title",
  },

  realStories: [
    {
      name: "Mae Moore",
      story:
        "The family of Mae Moore sued Johnson & Johnson following her death from mesothelioma. The jury awarded $966 million to the family as compensation for their loss. ",
    },
    {
      name: "Darlene Coker",
      story:
        "Coker was diagnosed with mesothelioma, which she alleged was caused by her long-term use of Johnson & Johnson’s talcum powder. .",
    },
  ],

  eligibilityPoints: [
    {
      description:
        "Your initial hernia repair involving mesh was performed on or after January 1, 2006. ",
    },
    {
      description:
        "You developed serious complications more than 30 days after surgery, such as adhesions, hernia recurrence, bowel/intestinal blockage, mesh migration, organ perforation, or infection. ",
    },
    {
      description:
        "You required a revision hernia repair or additional surgery due to mesh-related complications. ",
    },
    {
      description:
        "A doctor recommended surgery to address complications, but you cannot undergo the procedure because of other medical conditions.  ",
    },
  ],

  healthRisks: [
    {
      title: "Severe Infection & Abscess  ",
      description:
        "Mesh-related infections may become persistent, resistant to antibiotics, or spread to surrounding tissue, sometimes requiring drainage, hospitalization, or surgical removal of the implant. ",
    },
    {
      title: "Chronic Pain & Nerve Injury",
      description:
        "Patients report burning, stabbing, or constant pain that interferes with walking, working, sleeping, or daily movement, especially when the mesh contracts, scars in, or irritates nerves. ",
    },
    {
      title: "Mesh Migration, Shrinkage & Adhesions  ",
      description:
        "In some cases, mesh may shift from where it was placed, fold, shrink, or adhere to nearby organs. This can trigger inflammation, restricted movement, and severe abdominal discomfort. ",
    },
    {
      title: "Bowel Obstruction, Perforation & Fistulas  ",
      description:
        "When mesh erodes into tissue or attaches to organs, it can contribute to intestinal blockages or perforations, serious events that may require emergency surgery. ",
    },
    {
      title: "Hernia Recurrence & Revision Surgery  ",
      description:
        "A recurring hernia after mesh repair can mean additional procedures, longer recovery, and increased risk of complications, especially if mesh must be removed and replaced. ",
    },
    {
      title: "Seromas ",
      description:
        "Fluid-filled pockets can form around the surgical site and may require drainage or treatment. ",
    },
  ],
  otherRisks: [
    {
      number: "01",
      title: "Exposure to Inappropriate Content",
      description:
        "Users may encounter violent, sexual, or otherwise harmful material despite moderation efforts.  ",
    },
    {
      number: "02",
      title: "Online Predators",
      description:
        "Children may be targeted by strangers using the platform’s social features to communicate and manipulate. ",
    },
    {
      number: "03",
      title: "Excessive Screen Time",
      description:
        "Extended gameplay can disrupt sleep, physical activity, and academic performance.  ",
    },
    {
      number: "04",
      title: "Financial Risks",
      description:
        " In-game purchases can add to unanticipated costs for families. ",
    },
    {
      number: "05",
      title: " Privacy Concern",
      description:
        "Personal information and activity data may be collected and misused without clear disclosure. ",
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

  mainPoints: [
    {
      description: "Obsessive gameplay",
    },
    {
      description: "Withdrawal symptoms when not playing",
    },
    {
      description: "Neglect of school, sleep, or family life ",
    },
    {
      description:
        "Emotional dependence on in-game rewards and social interaction",
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
      title: "C.R. Bard / Becton Dickinson (MDL 2846) ",
      description: [
        "More than 23,700 cases are pending in federal court in Ohio. ",
        "After multiple bellwether trials, including a $4.8 million plaintiff verdict (2022) and a $500,000 verdict (2023), a broader settlement framework is being finalized to resolve most remaining claims. ",
      ],
    },
    {
      title: "Covidien (MDL 3029) ",
      description: [
        "Roughly 2,260 cases are pending involving Parietex and Symbotex mesh products. ",
        "Bellwether trials are scheduled for 2026 to help shape settlement ranges and case valuation. ",
      ],
    },
    {
      title: "Atrium (MDL 2753) ",
      description:
        "300+ cases remain pending, focusing on C-Qur mesh allegations. ",
    },
    {
      title: "Ethicon (Physiomesh) ",
      description: [
        "Earlier claims were largely resolved through confidential settlements or dismissals. ",
        "The MDL currently shows 0 cases pending, indicating the federal docket has been cleared, even though the broader litigation history remains relevant.  ",
      ],
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

  settlementsPoints: [
    {
      title: "Medical Expenses",
      description:
        "Surgery bills, hospital stays, imaging, prescriptions, specialist care, and future treatment",
    },
    {
      title: "Lost Wages",
      description: "Missed work, reduced earning capacity, job disruption ",
    },
    {
      title: "Pain and Suffering",
      description: "Chronic pain, emotional distress, loss of normal activity",
    },
    {
      title: "Future Care Costs",
      description: "Ongoing treatment, rehabilitation, long-term complications",
    },
    {
      title: "Out-of-Pocket Costs",
      description: "Travel for care, home support, medical devices",
    },
    {
      title: "Punitive Damages (in some cases)",
      description:
        "When conduct is proven especially reckless under applicable law ",
    },
  ],

  pageContent: {
    mainTitle: "What is the Hernia Mesh Lawsuit?",
    mainParagraphs: [
      "Hernia mesh lawsuits are legal claims filed by patients who say a hernia mesh implant was defectively designed, poorly manufactured, or did not come with adequate warnings about serious risks. Many lawsuits allege the mesh could shrink, stiffen, tear, migrate, or trigger chronic inflammation, leading to complications that require emergency care or repeat surgery. These cases are typically filed as product liability claims against major manufacturers.",
      "If your hernia mesh implant had complications and led to a revision/removal surgery, you may be eligible to file a hernia mesh lawsuit and pursue compensation. Start a free, confidential case review to see if you qualify in minutes. ",
      "What is Hernia Mesh? ",
      "Hernia mesh is a surgical implant used to reinforce weakened tissue during hernia repair (often inguinal or ventral/incisional hernias). It’s commonly made from synthetic materials (like polypropylene) or composite materials, and it may be placed through open surgery or laparoscopic repair. ",
      "For many people, mesh works as intended. But when a mesh fails or the body reacts poorly, patients can face complications that don’t resolve without additional medical intervention. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle: "Eligibility usually depends on: ",

    healthRisksTitle: "Hernia Mesh Side Effects & Complications Explained   ",
    healthRisksParagraph:
      "Some discomfort after hernia repair can be normal. But ongoing pain, repeated infections, or worsening symptoms may signal a mesh complication that needs immediate evaluation. Common complications reported in hernia mesh claims include: ",

    mdllitigationTitle:
      "Hernia Mesh Lawsuit Update: MDL Status & Current Developments   ",

    mdllitigationParagraph:
      "As of February 2026, there are more than 26,000 hernia mesh lawsuits consolidated in federal Multidistrict Litigation (MDL), largely centered on mesh products made by Bard, Covidien, and Atrium. Many of these cases are moving closer to broader settlement discussions. C.R. Bard is working through settlement efforts for a large portion of its docket, while Covidien cases are advancing toward bellwether trials in 2026, with allegations tied to polypropylene mesh injuries such as chronic pain and organ damage. ",

    mdllitigationSubtitle: "MDL Status and Key Developments  ",

    helpTitle: "How a Hernia Mesh Lawyer Can Help?  ",
    helpSubtitle: "A hernia mesh lawyer can help you: ",
    helpParagraph:
      "Most hernia mesh cases are handled on a contingency fee, meaning you typically pay nothing upfront. ",

    settlementsTitle: "Hernia Mesh Settlements & Compensation Overview  ",
    settlementsParagraph: "If eligible, compensation may include: ",

    stepsTitle: "How to File a Hernia Mesh Lawsuit with Connect2Attorney? ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a hernia mesh lawsuit against the responsible party in just three simple steps: ",
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
const TALCUM_TOC = [
  { label: "What is the Hernia Mesh Lawsuit?   ", id: "main-title" },
  { label: "Who is Eligible to File a Claim?", id: "allegations-title" },
  {
    label: "Hernia Mesh Side Effects & Complications Explained",
    id: "health-risks-title",
  },
  {
    label: "Hernia Mesh Lawsuit Update: MDL Status & Current Developments   ",
    id: "mdl-litigation-title",
  },
  {
    label: "How a Hernia Mesh Lawyer Can Help?",
    id: "help-title",
  },
  {
    label: "Hernia Mesh Settlements & Compensation Overview",
    id: "settlements-title",
  },
  {
    label: "How to File a Hernia Mesh Lawsuit with Connect2Attorney?    ",
    id: "steps-title",
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
            <TableOfContents items={TALCUM_TOC} />
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

              <h3 className=" font-bold">
                {content.pageContent.mainParagraphs[2]}
              </h3>
              <p>{content.pageContent.mainParagraphs[3]}</p>
              <br />

              <p>{content.pageContent.mainParagraphs[4]}</p>
              <br />
            </div>

            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
              <h3
                id={content.sectionIds.allegationsTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
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
              <p className="mb-4 font-urbanist   text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsSubtitle}
              </p>

              <ul className="space-y-5 mb-2">
                {content.whoQualifies.map((item, index) => (
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
              <div className="space-y-4 sm:space-y-5 w-full mb-16">
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

              <h2
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.mdllitigationTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.mdllitigationParagraph}
              </p>

              <h3 className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.mdllitigationSubtitle}
              </h3>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
                {content.mdllitigationPoints.map((item, index) => (
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
          list-disc
          pl-5
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

              <h2
                id={content.sectionIds.helpTitle}
                className="font-noto-serif font-normal capitalize text-[#162766] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.helpTitle}
              </h2>
              <p className="mb-4 font-urbanist   text-[#425777] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
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
                {content.pageContent.helpParagraph}
              </p>

              {/* Section Title */}
              <h2
                id={content.sectionIds.settlementsTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.settlementsTitle}
              </h2>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.settlementsParagraph}
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
                <TableOfContents items={TALCUM_TOC} />
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
