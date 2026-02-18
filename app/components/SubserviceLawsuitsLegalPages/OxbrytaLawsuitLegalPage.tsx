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
    mdllitigationTitle: "mdllitigation-title",
    compensationTitle: "compensation-title",
    stepsTitle: "steps-title",
  },

  eligibilityPoints: [
    {
      title: "1. Have a documented liver injury ",
      description: [
        "Diagnosed with liver damage after starting Oxbryta  ",
        "Hospitalization or medical treatment required due to liver complications ",
      ],
    },
    {
      title: "2. Used Oxbryta for sickle cell disease ",
      description: ["Prescription records showing use of the drug  "],
    },
    {
      title: "3. Experienced significant side effects ",
      description: [
        "Elevated liver enzymes, jaundice, or other liver-related conditions  ",
      ],
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Vaso-Occlusive Crises (VOCs)",
      description:
        "Some patients experience severe and sudden pain episodes caused by blocked blood flow in the vessels.",
    },
    {
      number: "02",
      title: "Increased Risk of Death",
      description:
        "Studies suggest higher mortality rates among certain patients taking Oxbryta compared to those not using the medication.",
    },
    {
      number: "03",
      title: "Kidney Complications",
      description:
        "Prolonged use has been linked to kidney stress and potential long-term kidney damage, requiring ongoing medical monitoring.",
    },
    {
      number: "04",
      title: "Cardiovascular Issues",
      description:
        "Some patients have reported increased heart strain and cardiovascular complications during treatment with Oxbryta.",
    },
    {
      number: "05",
      title: "Gastrointestinal Problems",
      description:
        "Commonly reported side effects include nausea, vomiting, abdominal pain, and other digestive system discomfort.",
    },
    {
      number: "06",
      title: "Allergic Reactions",
      description:
        "Some individuals may experience serious allergic reactions such as rash, swelling, breathing difficulty, or hypersensitivity.",
    },
  ],

  mdllitigationPoints: [
    {
      description:
        "Look for experience in hair relaxer or product liability cases ",
    },
    {
      description: "Check client reviews and references  ",
    },
    {
      description: "Evaluate communication and support ",
    },
    {
      description: "Consider fee structures  ",
    },
    {
      description: "Schedule a free consultation ",
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

  settlementsPoints: [
    {
      title: "Medical Expenses",
      description:
        "Coverage for hospital bills, doctor visits, medications, and ongoing treatment related to liver damage.  ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for income loss due to illness, hospital stays, or inability to work during recovery.   ",
    },
    {
      title: "Lost wages",
      description:
        "Financial recognition for physical pain, emotional distress, and decreased quality of life.    ",
    },
    {
      title: "Legal Costs",
      description:
        " Reimbursement for attorney fees and court-related expenses incurred while pursuing the lawsuit.   ",
    },
    {
      title: "Punitive damages",
      description:
        "In some cases, courts may award additional compensation to punish the manufacturer for negligence or deceptive practices.  ",
    },
  ],

  pageContent: {
    mainTitle: "What is Oxbryta Liver Injury Lawsuit?",
    mainParagraphs: [
      "Recent studies have shown that people taking Oxbryta experienced higher rates of pain episodes called vaso-occlusive crises (VOCs) compared to those who did not take the drug. It has also been linked to liver injuries with long-term use.  ",
      "If you have suffered an injury caused by Oxbryta and plan to sue Pfizer for your pain, we are here to help you fight for the compensation you deserve. ",
      "The Oxbryta Liver Injury Lawsuit involves legal claims brought by patients who suffered liver damage after using Oxbryta, a drug developed to treat sickle cell anemia. These lawsuits allege that Pfizer failed to properly warn patients and doctors about the risk of liver injury and other serious side effects linked to the medication.",
      "The litigation is still in the early stages, and there are currently no official reports on how many lawsuits have been filed against the manufacturer. ",
      "What is Oxbryta? ",
      "Oxbryta (voxelotor) is a medication approved to treat sickle cell disease in adults and children over 12. It works by increasing hemoglobin’s oxygen-carrying capacity, helping reduce the symptoms of sickle cell disease, such as fatigue and anemia",
      "While Oxbryta has improved quality of life for many patients, post-marketing reports have raised concerns about potential liver damage in some individuals. These reports have triggered lawsuits from affected patients.",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may be eligible to file a Hair Relaxer Cancer Lawsuit if:   ",

    allegationsParagraph:
      "While Oxbryta is designed to help patients with sickle cell anemia, many users have reported serious complications beyond liver injury. Patients claim the drug caused unexpected hospitalizations, severe pain episodes, and long-term health problems.    ",

    healthRisksTitle: "Oxbryta Side Effects and Liver Damage Risk Explained  ",
    healthRisksParagraph:
      "Long-term use of Suboxone can affect more than just teeth. Many patients report additional health problems that impact daily life and well-being. Understanding these risks is important for anyone considering legal action. ",

    healthRisksSubtitle:
      "The main other health risks associated with Oxbryta include: ",

    otherRisksTitle:
      "Oxbryta Lawsuit Update: FDA Warnings, Recalls & Case Status  ",

    otherRisksParagraph: [
      "On September 25, 2024, the FDA issued a warning advising doctors to stop prescribing Oxbryta and recommending that patients speak with their healthcare providers about discontinuing the drug. This warning was followed by a voluntary recall after clinical trials revealed an increased risk of vaso-occlusive crises and death. In December 2025, the European Medicines Agency (EMA) confirmed the recall, concluding that the risks of Oxbryta outweighed its benefits for sickle cell patients based on new data showing higher rates of crises and deaths, particularly in children. ",
      "The Oxbryta lawsuits are still in the early stages, with at least 18 cases currently pending in federal and state courts. The claims allege that Pfizer failed to properly evaluate the drug’s safety and placed profits above patient well-being. A federal judge has set the first Oxbryta wrongful death case for trial on September 13, 2027.",
    ],

    otherRisksSubtitle: "The key health risks include: ",

    otherRisksSub2:
      "While these risks are serious, the lawsuits focus primarily on cancers caused by prolonged hair relaxer use. ",

    mdllitigationTitle: "Suboxone Lawsuit Update: Class Action & MDL Status   ",

    mdllitigationParagraph: [
      "After suffering severe dental injuries from the Suboxone films, individuals are filing Suboxone lawsuits against Indivior, Inc.  ",
      "The Suboxone lawsuits have been grouped into MDL 3092 Suboxone (Buprenorphine/Naloxone) Film Products Liability Litigation and are being handled in federal court in the Northern District of Ohio. As of January 2026, approximately 1,854 cases are active in this coordinated proceeding under the supervision of Judge J. Philip Calabrese. While the litigation remains in its early phases, hundreds of claims have already been filed, and new Suboxone lawsuits continue to be added. ",
    ],

    helpTitle: "Oxbryta Lawyers: How to Find the Right Attorney?  ",
    helpSubtitle:
      "Choosing the right attorney is critical for a successful Oxbryta lawsuit. Here’s what to consider:   ",

    compensationTitle: "Oxbryta Settlements & Compensation Overview   ",
    compensationParagraph:
      "Oxbryta liver injury lawsuits are still in the early stages, making it difficult to predict the exact compensation. However, based on similar pharmaceutical cases, settlements or awards could range from $20,000 to $1 million, depending on the severity of injuries.",
    compensationSubtitle: " Potential types of compensation include:  ",

    compensationSub2:
      "While these are concerning, the major risk is necrotizing enterocolitis (NEC), a severe intestinal disease that can be fatal in premature babies. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Oxbryta Liver Injury Lawsuit with Connect2Attorney?   ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Oxbryta liver injury lawsuit against the responsible party, in just three simple steps:  ",
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

export const OXBRYTA_TOC = [
  {
    label: "Oxbryta Liver Injury Lawsuit Explained",
    id: "main-title",
  },
  {
    label: "Oxbryta Side Effects and Liver Damage Risk Explained",
    id: "health-risks-title",
  },
  {
    label: "Oxbryta Lawsuit Update: FDA Warnings, Recalls & Case Status",
    id: "other-risks-title",
  },
  {
    label: "Oxbryta Lawyers: How to Find the Right Attorney?",
    id: "mdllitigation-title",
  },
  {
    label: "Oxbryta Settlements & Compensation Overview",
    id: "compensation-title",
  },
  {
    label: "How to File a Oxbryta Liver Injury Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Oxbryta Liver Injury Lawsuit Timeline",
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
            <TableOfContents items={OXBRYTA_TOC} />
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

              <p>{content.pageContent.mainParagraphs[6]}</p>
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
                  <li key={index} className="flex flex-col gap-2">
                    {/* Title */}
                    <h4 className="font-urbanist font-bold text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                      {item.title}
                    </h4>

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

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
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
              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksParagraph[1]}
              </p>

              <h2
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.helpTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
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
                                      
                                      leading-[27px]
                                      capitalize
                                    "
                    >
                      <span>
                        <strong>{item.title} :</strong>
                      </span>
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

              <div className="space-y-4 sm:space-y-5 w-full mb-10">
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
                <TableOfContents items={OXBRYTA_TOC} />
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
