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
    allegationsTitle: "allegations-title",
    healthRisksTitle: "health-risks-title",
    helpTitle: "help-title",
    mdllitigationTitle: "mdl-litigation-title",
    currentTitle:"current-title",
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
        "Individuals who experienced significant mental health impacts due to social media use ",
    },
    {
      description:
        "Parents of minors affected by addictive social media behavior ",
    },
    {
      description:
        "Users who can demonstrate awareness by the platform of potential harms ",
    },
  ],

  healthRisks: [
    {
      description: "Anxiety and panic disorders ",
    },
    {
      description: "Depression and low self-esteem ",
    },
    {
      description: "Sleep disturbances and fatigue ",
    },
    {
      description: "Social withdrawal or isolation ",
    },
  ],
  otherRisks: [
    {
      number: "01",
      title: "Poor Sleep Quality",
      description:
        "Constant notifications and late-night scrolling can disrupt sleep patterns, leading to fatigue and reduced focus. ",
    },
    {
      number: "02",
      title: "Depression",
      description:
        "Negative content and excessive screen time can contribute to feelings of sadness and hopelessness.  ",
    },
    {
      number: "03",
      title: "Anxiety",
      description:
        "Pressure to stay connected and respond immediately to messages or posts can heighten stress and anxiety levels.  ",
    },
    {
      number: "04",
      title: "Cyber Bullying",
      description:
        " Frequent online interaction increases exposure to harassment, bullying, or harmful comments, which can affect self-esteem. ",
    },
    {
      number: "05",
      title: " Affects Academic Performance",
      description:
        "Time spent on social media can reduce focus on studies, leading to lower grades and missed deadlines. ",
    },
    {
      number: "06",
      title: "Impact on Social Skills",
      description:
        "Overreliance on online communication may weaken face-to-face interaction skills and real-life relationship building. ",
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
      title: "Facebook ",
      description:
        "Algorithms encourage endless scrolling and constant notifications, making it hard for users to disconnect. Critics argue that the platform prioritizes user engagement over well-being, making it difficult for users to disconnect and leading to anxiety, sleep disruption, and social withdrawal. ",
    },
    {
      title: "Instagram ",
      description:
        "Features like “likes” and follower counts can foster body image concerns and compulsive checking. Experts link these features to depression, low self-esteem, and social comparison, particularly among teens and young adults. ",
    },
    {
      title: "TikTok ",
      description:
        "Short-form videos and personalized feeds create content loops that keep users engaged for long periods. Reports suggest prolonged usage can impact attention span, sleep, and emotional regulation.",
    },
    {
      title: "Snapchat ",
      description:
        "Snap streaks and constant messaging notifications promote frequent checking and prolonged use. The platform’s gamified features can create compulsive behavior and heightened anxiety, particularly among younger users. ",
    },
    {
      title: "YouTube",
      description:
        "YouTube’s autoplay feature and recommendation algorithm are designed to keep viewers watching for long periods. Users can easily spend hours consuming content, which may lead to disrupted sleep, reduced productivity, and exposure to potentially harmful or extreme content. ",
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

  helpPoints: [
    {
      description: "Specialize in digital or technology-related lawsuits ",
    },
    {
      description: "Have experience with mental health impact claims  ",
    },
    {
      description: "Offer free consultations and case evaluations   ",
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
    mainTitle: "What is Social Media Addiction Lawsuit?",
    mainParagraphs: [
      "Social media is a platform for sharing and connecting. There are 310 million social media users in the United States, representing 93% of the population. These platforms offer communication and entertainment; excessive use can lead to addiction, affecting mental health and daily life. Social media addiction lawsuits have been filed against social media companies, claiming their platforms caused psychological harm.",
      "Has you or a loved one been a victim of social media addiction? You can be eligible to demand compensation",
      "The social media addiction lawsuit is a growing wave of legal action in the United States targeting major social media platforms like Facebook, Instagram, and TikTok. These lawsuits claim that platforms deliberately designed features to promote social media addiction, leading to serious mental health issues among users, including anxiety, depression, and other psychological disorders.",
      "Plaintiffs argue that social media companies prioritized engagement and profit over user well-being, knowingly exposing users, especially teens and young adults, to addictive patterns of use.",
      "About Social Media Addiction",
      "Social media addiction occurs when individuals develop compulsive behaviors related to using social media platforms. Common signs include:",
      "Studies show that addictive features, such as infinite scrolling, push notifications, and “like” systems, are linked to heightened stress, depression, and reduced sleep quality. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "Not everyone may qualify for a social media lawsuit, but typical plaintiffs include:  ",

    allegationsParagraph:
      "A qualified social media addiction lawyer can help assess your eligibility and guide you through the filing process. ",

    healthRisksTitle: "Social Media Addiction: Effects on Mental Health  ",

    healthRisksSubtitle:
      "Social media addiction is more than just a habit; it can have profound mental health consequences, such as: ",
    healthRisksParagraph:
      "Platforms like Facebook, Instagram, and TikTok have been accused of promoting addictive features that exacerbate these effects, particularly in younger users. ",

    otherRisksTitle: "What are the Other Risks of Social Media Addiction? ",
    otherRisksParagraph:
      "Social media addiction can affect many areas of a user’s life beyond mental health. Excessive use can disrupt daily routines, damage relationships, and reduce productivity. Users may experience both psychological and social consequences because of prolonged engagement. ",

    otherRisksSubtitle: "The risks include: ",
    mdllitigationTitle:
      "Popular Platforms Linked to Social Media Addiction Claims  ",

    mdllitigationParagraph:
      "The social media addiction lawsuit primarily targets major platforms that have shaped how millions of Americans interact online. Legal claims suggest these companies implemented features that intentionally encourage prolonged use, contributing to serious mental health issues. ",

    mdllitigationSubtitle: "Key platforms involved include: ",

    currentTitle: "Social Media Lawsuit Updates: Current Legal Developments ",

    currentParagraph:
      "The social media lawsuit continues to evolve, targeting platforms alleged to cause addiction and mental health issues. ",

    currentSubtitle: "Key updates include: ",

    helpTitle:
      "Social Media Addiction Lawyers: How to Find the Right Attorney?  ",
    helpSubtitle: "A hernia mesh lawyer can help you: ",
    helpParagraph:
      "Finding an experienced social media addiction lawyer is essential to pursue your case effectively. Consider attorneys who:  ",

    settlementsTitle: "What Compensation Can You Seek?  ",
    settlementsParagraph:
      "If you or your child has suffered harm due to social media addiction, you may be eligible to pursue financial compensation. It can cover emotional distress, mental health struggles, and related financial costs. Compensation can include: ",

    stepsTitle:
      "How to File a Social Media Addiction Lawsuit with Connect2Attorney?   ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Social Media Addiction lawsuit against the responsible party in just three simple steps: ",
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
  { label: "What is Social Media Addiction Lawsuit?  ", id: "main-title" },
  { label: "Who is Eligible to File a Claim?", id: "allegations-title" },
  {
    label: "Social Media Addiction: Effects on Mental Health   ",
    id: "health-risks-title",
  },
  {
    label: "Popular Platforms Linked to Social Media Addiction Claims    ",
    id: "mdl-litigation-title",
  },
  {
    label:"Social Media Lawsuit Updates: Current Legal Developments   ",
    id:"current-title",
  },
  {
    label:"What Compensation Can You Seek? ",
    id:"settlements-title",
  },
  {
    label:"How to File a Social Media Addiction Lawsuit with Connect2Attorney?  ",
    id:"steps-title",
  },
  {
    label: "Social Media Addiction Lawsuit Timeline  ",
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
              <p>{content.pageContent.mainParagraphs[5]}</p>
              <br />

              <ul
                className="  list-disc
          pl-5
          space-y-2
          text-[#425777]
          font-urbanist
          text-[16px]
          sm:text-[17px]
          lg:text-[18px]
          font-medium
          leading-[27px] mb-5"
              >
                {content.mainPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Text */}
                     <span className=" text-[#162766] text-[16px]">
                                    •
                                  </span>
                    <p className="font-urbanist text-[#425777] text-[16px] sm:text-[18px] font-medium leading-[24px] sm:leading-[27px]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <p>{content.pageContent.mainParagraphs[6]}</p>
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
                id={content.sectionIds.healthRisksTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.healthRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
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
                                    capitalize
                                  "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <h2
             
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.otherRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.otherRisksParagraph}
              </p>

              <h3 className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.otherRisksSubtitle}
              </h3>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
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

              <h2
                id={content.sectionIds.currentTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.currentTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.currentParagraph}
              </p>

              <h3 className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
                {content.pageContent.currentSubtitle}
              </h3>

              <div className="space-y-4 sm:space-y-5 w-full mb-16">
                {content.currentPoints.map((item, index) => (
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

              <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
                <h3
                  id={content.sectionIds.allegationsTitle}
                  className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
                >
                  <span className="text-[#FCCB48]">
                    {content.pageContent.helpTitle.split(" ")[0]}{" "}
                    {content.pageContent.helpTitle.split(" ")[1]}{" "}
                    {content.pageContent.helpTitle.split(" ")[2]}
                  </span>{" "}
                  {content.pageContent.helpTitle.split(" ").slice(3).join(" ")}
                </h3>
                <p className="mb-4 font-urbanist   text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                  {content.pageContent.helpSubtitle}
                </p>

                <ul className="space-y-5 mb-2">
                  {content.helpPoints.map((item, index) => (
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

    
              {/* Section Title */}
              <h2
                id={content.sectionIds.settlementsTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.settlementsTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
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
