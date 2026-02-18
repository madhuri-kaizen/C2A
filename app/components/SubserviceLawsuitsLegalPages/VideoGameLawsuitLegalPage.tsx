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
  typesTitle: "types-title",
  healthRisksTitle: "health-risks-title",
  mdllitigationTitle: "mdl-litigation-title",
  realStoriesTitle: "real-title",
  stepsTitle: "steps-title",
  helpTitle: "help-title",   
},


  realStories: [
    {
      name: "Cynthia Jimenez:",
      story:
        "She filed a lawsuit on behalf of her grandchild, suing video game companies such as Epic Games, Roblox, Microsoft, Google, and Nintendo for causing addiction. ",
    },
    {
      name: "Elizabeth Jones:",
      story:
        "She and her son claim that his video game use led to addiction. Jones seeks to hold the game developers accountable for the depression and withdrawal symptoms her son experienced.",
    },
  ],

  eligibilityPoints: [
    {
      description:
        "Gamers experiencing severe gaming addiction symptoms affecting daily functioning  ",
    },
    {
      description: "Parents of minors suffering from compulsive gaming ",
    },
    {
      description:
        "Individuals who have incurred financial, emotional, or physical harm linked to game mechanics designed to be addictive ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Mental Health Problems",
      description:
        "Addiction can lead to anxiety, depression, irritability, and emotional withdrawal from real-life relationships. ",
    },
    {
      number: "02",
      title: " Cognitive Effects",
      description:
        "Extended gaming may impair attention, memory, and decision-making, affecting learning and daily problem-solving.   ",
    },
    {
      number: "03",
      title: "Social Isolation",
      description:
        "Players may withdraw from family, friends, and social activities, weakening support networks. ",
    },
    {
      number: "04",
      title: "Financial Issues",
      description:
        " In-game purchases and microtransactions can lead to unexpected or excessive spending. ",
    },
    {
      number: "05",
      title: " Academic and Work Challenges",
      description:
        "Time spent gaming can reduce focus and performance in school or at work, leading to lower productivity.  ",
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
      title: "Medical Expenses ",
      description:
        "Covers therapy, counseling, or other treatment related to addiction and mental health effects. ",
    },
    {
      title: "Lost Wages or Educational Impact ",
      description:
        "Reimbursement for income lost due to impaired work performance or educational setbacks. ",
    },
    {
      title: "Emotional and Psychological Damages ",
      description:
        "Compensation for stress, anxiety, depression, or family disruption caused by excessive gaming. ",
    },
    {
      title: "Financial Losses ",
      description:
        "Recovery for money spent on microtransactions, in-game purchases, or other gaming-related expenses. ",
    },
    {
      title: "Punitive Damages",
      description:
        "Additional financial penalties may be awarded if the court finds that developers intentionally designed games to be addictive. ",
    },
  ],

  otherRisksPoints: [
    {
      title: "Mental Health Problems ",
      description:
        "Addiction can lead to anxiety, depression, irritability, and emotional withdrawal from real-life relationships. ",
    },
    {
      title: "Cognitive Effects",
      description:
        "Extended gaming may impair attention, memory, and decision-making, affecting learning and daily problem-solving.  ",
    },
    {
      title: "Social Isolation ",
      description:
        "Players may withdraw from family, friends, and social activities, weakening support networks.  ",
    },
    {
      title: "Financial Issues ",
      description:
        "In-game purchases and microtransactions can lead to unexpected or excessive spending. ",
    },
    {
      title: "Academic and Work Challenges ",
      description:
        "Time spent gaming can reduce focus and performance in school or at work, leading to lower productivity.  ",
    },
    {
      title: "Physical Health Concerns",
      description:
        "Long gaming sessions contribute to poor posture, eye strain, sleep disruption, and a sedentary lifestyle.  ",
    },
  ],

  currentPoints: [
    {
      title: "Snap Settlement ",
      description:
        "Snap Inc. settled a lawsuit before trial over alleged addictive features in Snapchat, avoiding a jury decision. ",
    },
    {
      title: "MDL & Bellwether Trials ",
      description:
        "Hundreds of lawsuits against Facebook, Instagram, TikTok, Snapchat, and YouTube are consolidated into multi‑district litigation, with initial bellwether trials scheduled in 2025–2026. ",
    },
    {
      title: "Court Approvals for Expert Evidence ",
      description:
        "Judges are allowing expert testimony on mental health and addiction, strengthening plaintiffs’ claims. ",
    },
    {
      title: "State & Local Actions ",
      description:
        "Governments, including New York City and several tribal nations, have filed lawsuits over youth mental health harms linked to social media use. ",
    },
    {
      title: "Section 230 Challenges ",
      description:
        "Courts are scrutinizing platform protections under Section 230, potentially expanding liability for addictive design features. ",
    },
    {
      title: "Rising Case Numbers ",
      description:
        "More plaintiffs continue to file claims, increasing pressure on social media companies to address alleged harms. ",
    },
  ],

  typePoints: [
    {
      description:
        "Loot boxes and in-game purchases designed to encourage repeated spending ",
    },
    {
      description: "Mobile games with reward loops or push notifications ",
    },
    {
      description:
        "Massively multiplayer online role-playing games (MMORPGs) with social pressures to play extensively ",
    },
    {
      description:
        "Competitive eSports titles with ranking systems that encourage excessive play ",
    },
  ],

  helpPoints: [
    {
      description:
        "Specialize in product liability, personal injury, or consumer protection cases  ",
    },
    {
      description:
        "Have experience with video game addiction lawsuit claims   ",
    },
    {
      description:
        "Understand gaming addiction, mental health impacts, and the mechanics of games  ",
    },

    {
      description: "Offer free consultations to review potential claims ",
    },
  ],

  mainPoints: [
    {
      description:
        "Spending excessive time scrolling feeds on Facebook, Instagram, or TikTok  ",
    },
    {
      description:
        "Experiencing withdrawal or anxiety when disconnected from social media",
    },
    {
      description: "Neglecting personal, academic, or work responsibilities  ",
    },
    {
      description:
        "Difficulty controlling online activity despite negative consequences",
    },
  ],

  settlementsPoints: [
    {
      title: "Medical and Therapy Expenses",
      description:
        "Covers costs for mental health treatment, counseling, rehabilitation, and other related care. ",
    },
    {
      title: "Lost Income or Educational Impact",
      description:
        "Addresses lost wages, diminished work performance, or disruptions to schooling and future opportunities.  ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensates for emotional distress, anxiety, depression, and the long-term psychological impact. ",
    },
    {
      title: "Loss of Quality of Life",
      description:
        "For the reduced ability to engage in normal social, academic, or family activities. ",
    },
    {
      title: "Punitive Damages",
      description:
        "In some cases, additional compensation may be awarded to punish companies for harmful or negligent practices. ",
    },
  ],

  pageContent: {
    mainTitle: "What is a Video Game Addiction Lawsuit?",
    mainParagraphs: [
      "Video games were originally created as a form of entertainment for children, but over time they have raised concerns about addiction and mental health. Some games are designed to keep players engaged for long periods, which critics say can lead to cognitive issues. ",
      "Recently, lawsuits have been filed against major developers such as Roblox, Epic Games, Microsoft, and Discord. These cases claim that certain games were intentionally made addictive, causing harm to players. ",
      "Families affected by video game addiction may be eligible to file claims to seek compensation for the damage caused. We will help you fight for the compensation you deserve. ",
      "The video game lawsuit addresses legal claims filed by individuals or families affected by excessive gaming that has led to serious mental health issues, social impairment, or other damages. As research increasingly links gaming addiction to cognitive, emotional, and behavioral problems, victims are seeking legal recourse against game developers, publishers, or platforms that may have designed games to encourage addictive behaviors.",
      "This lawsuit explores whether certain game features like loot boxes, microtransactions, or reward loops can be considered negligent or harmful, giving rise to gaming addiction lawsuit claims.",
      "About Video Game Addiction",
      "Video game addiction is a recognized mental health condition where individuals spend excessive amounts of time playing games despite negative consequences. It often interferes with work, school, relationships, and daily life. According to medical studies, excessive gaming can trigger anxiety, depression, and other serious mental health issues. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "Those eligible to join a video game lawsuit typically include:  ",

    allegationsParagraph:
      "Eligibility may vary depending on the state and the specific legal claims being pursued.  ",

    typeTitle: "Types of Games Linked to Addiction Claims  ",
    typeSubtitle:
      "Not all games are equally linked to gaming addiction, but lawsuits often focus on titles with: ",

    typeParagraph:
      "These types of games may be scrutinized in video game addiction lawsuit claims due to their potential to exploit psychological triggers. ",

    healthRisksTitle: "What are the Risks of Video Game Addiction? ",

    healthRisksSubtitle: "The risks include:  ",
    healthRisksParagraph:
      "Video game addiction can affect many aspects of a person’s life beyond health. Excessive gaming can interfere with work, school, and personal relationships, while also causing financial stress and social isolation.  ",

    otherRisksTitle:
      "Video Game & Gaming Addiction: Symptoms and Mental Health Risks ",
    otherRisksParagraph:
      "Video game addiction can affect many aspects of a person’s life beyond health. Excessive gaming can interfere with work, school, and personal relationships, while also causing financial stress and social isolation.",

    otherRisksSubtitle: "The risks include: ",
    mdllitigationTitle:
      "Video Game Lawsuit Payouts: What Victims May Receive  ",

    mdllitigationParagraph:
      "Video game addiction lawsuits seek compensation for mental, emotional, financial, and social harm caused by addictive games. Depending on the severity of the addiction and losses suffered, payouts can range from $50,000 to as high as $2 million. Potential",

    mdllitigationSubtitle: "compensation may include:  ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    helpTitle:
      "Video Game Addiction Lawyers: How to Find the Right Attorney   ",
    helpSubtitle: "Look for attorneys who: ",
    helpParagraph:
      "Choosing the right lawyer is crucial for pursuing a gaming addiction lawsuit.  ",

    stepsTitle:
      "How to File a Video Game Addiction Lawsuit with Connect2Attorney?    ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Video Game Addiction lawsuit against the responsible party, in just three simple steps: ",
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
  { label: "What is a Video Game Addiction Lawsuit?", id: "main-title" },
  { label: "Types of Games Linked to Addiction Claims", id: "types-title" },
  { label: "What are the Risks of Video Game Addiction?", id: "health-risks-title" },
  { label: "Video Game Addiction Lawyers: How to Find the Right Attorney", id: "help-title" },
  { label: "Video Game Lawsuit Payouts: What Victims May Receive", id: "mdl-litigation-title" },
  { label: "Real Stories Behind Lawsuit", id: "real-title" },
  { label: "How to File a Video Game Addiction Lawsuit with Connect2Attorney?", id: "steps-title" },
   {
    label: "Video Game Addiction Lawsuit Timeline  ",
    id: "timeline-section",
  },
  {
    label:"Get Legal Support from Connect2Attorney ",
    id:"support"
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
            </div>

            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
              <h3
                
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
                    <p className="font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mb-4 font-urbanist   text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
            </div>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.typesTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.typeTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.typeSubtitle}
              </p>

              <div className="space-y-4 sm:space-y-5 w-full mb-5">
                {content.typePoints.map((item, index) => (
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
                    {/* Description */}
                    <p
                      className="
                                    text-[#162766]
                                    font-noto-serif
                                    text-[16px]
                                    sm:text-[17px]
                                    lg:text-[24px]
                                    font-medium
                                    leading-[27px]
                                    
                                  "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.typeParagraph}
              </p>

              <h2
                id={content.sectionIds.healthRisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize  mb-4"
              >
                {content.pageContent.healthRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRisksParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.healthRisksSubtitle}
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

              <h2 className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4">
                {content.pageContent.otherRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.otherRisksParagraph}
              </p>

              <h3 className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.otherRisksSubtitle}
              </h3>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
                {content.otherRisksPoints.map((item, index) => (
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

              <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
                <h3
                  id={content.sectionIds.helpTitle}
                  className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
                >
                  <span>{content.pageContent.helpTitle.split("Find")[0]}</span>
                  <span className="text-[#FCCB48]">
                    {"Find" + content.pageContent.helpTitle.split("Find")[1]}
                  </span>
                </h3>

                <p className="mb-4 font-urbanist   text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                  {content.pageContent.helpParagraph}
                </p>
                <p className="mb-4 font-urbanist font-bold  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                  {content.pageContent.helpSubtitle}
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
                      <p className="font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
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
