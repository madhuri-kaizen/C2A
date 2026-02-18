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
  eligibilityTitle: "eligibility-title",
  settlementsTitle: "settlements-title",
  mdllitigationTitle: "mdllitigation-title",
  compensationTitle: "compensation-title",
  stepsTitle: "steps-title",
},


  realStories: [
    {
      name: "Kiara Burroughs: ",
      story:
        "She filed a lawsuit against Strength of Nature and L’Oréal, claiming that years of using hair relaxers caused her to develop fibroids. ",
    },
    {
      name: "Jenny Mitchell:",
      story:
        " She began using hair relaxers in the third grade and later developed uterine cancer, despite having no family history of the disease. Mitchell is now suing five manufacturers, including L’Oréal USA.  ",
    },
  ],

  eligibilityPoints: [
    {
      title: "1. You Used Hair Relaxers Regularly ",
      description: [
        "Frequent application over several years ",
        "Use of multiple types or brands of relaxers ",
      ],
    },
    {
      title: "2. You Used Hair Relaxers Regularly ",
      description: [
        "Diagnosis of hormone-related or other cancers linked to hair relaxers ",
        "Medical records confirming the diagnosis ",
      ],
    },
    {
      title: "3. You Can Show a Connection ",
      description: [
        "Evidence linking your cancer to chemical exposure ",
        "Supporting documentation such as purchase receipts, product labels, or physician statements ",
      ],
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: " Dental Problems",
      description:
        "Suboxone use has been linked to rapid tooth decay, cavities, and enamel erosion, often progressing faster than normal. ",
    },
    {
      number: "02",
      title: " Gum Disease ",
      description:
        "Users may experience swollen, bleeding, or receding gums, increasing the risk of periodontal disease.  ",
    },
    {
      number: "03",
      title: " Dry Mouth",
      description:
        "Persistent dry mouth is common and can worsen dental problems by reducing saliva that protects teeth  ",
    },
    {
      number: "04",
      title: " Digestive Issues ",
      description:
        "Some individuals report nausea, constipation, or stomach discomfort while taking Suboxone.  ",
    },
    {
      number: "05",
      title: " Liver Strain",
      description:
        "Prolonged use may elevate liver enzymes and impact overall liver function, requiring monitoring. ",
    },
    {
      number: "06",
      title: "Cognitive Effects",
      description:
        "Users sometimes experience drowsiness, dizziness, or difficulty concentrating, which can affect daily functioning.  ",
    },
  ],
  otherRisks: [
    {
      number: "01",
      title: " Patients Who Used Suboxone",
      description: "Individuals prescribed Suboxone for opioid use disorder.  ",
    },
    {
      number: "02",
      title: " Experienced Dental Damage ",
      description:
        "Those who developed cavities, enamel erosion, or gum disease linked to Suboxone use.  ",
    },
    {
      number: "03",
      title: " Long-Term Users",
      description:
        "Patients who used the medication over an extended period and suffered lasting dental problems.  ",
    },
    {
      number: "04",
      title: "Financially Impacted ",
      description:
        "Those who incurred significant dental treatment costs due to the medication.   ",
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
      description: "Handle pharmaceutical injury litigation ",
    },
    {
      description: "Have experience with MDL and mass tort cases ",
    },
    {
      description: "Offer free case evaluations and contingency fees  ",
    },
  ],

  settlementsPoints: [
    {
      title: "Medical Expenses",
      description:
        "Reimbursement for dental treatments, surgeries, and medications required to address tooth decay and gum disease. ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for physical pain, emotional distress, and reduced quality of life caused by dental issues.  ",
    },
    {
      title: "Lost wages",
      description:
        "Coverage for income lost due to dental procedures or inability to work.   ",
    },
    {
      title: "Out-of-Pocket Costs",
      description:
        "Costs of preventive care, dental appliances, or other related expenses not covered by insurance.  ",
    },
    {
      title: "Punitive damages",
      description:
        "In some cases, courts may award additional damages to punish negligent conduct by the manufacturer.  ",
    },
  ],

  pageContent: {
    mainTitle: "What is the Suboxone Tooth Decay Lawsuit? ",
    mainParagraphs: [
      "The Suboxone Lawsuit brings attention to reports of dental complications linked to the use of Suboxone for opioid dependence treatment. Individuals have raised questions about the medication’s impact on oral health and the information provided to patients regarding potential risks. ",
      "The Suboxone tooth decay lawsuit centers on allegations that Suboxone products caused rapid dental deterioration, including cavities, enamel erosion, gum disease, and tooth loss. Plaintiffs claim the drug’s acidic formulation and prolonged contact with teeth contributed to severe damage, while warnings were insufficient or delayed.  ",
      "Many cases are now being coordinated in federal court as part of a broader Suboxone class action lawsuit and MDL process.",
      "What is Suboxone? ",
      "Suboxone is a prescription medication used to treat opioid dependence. It contains buprenorphine and naloxone and is commonly prescribed as a dissolving film or tablet placed under the tongue or against the cheek. ",
      "While Suboxone helps manage opioid addiction, growing evidence suggests that long-term use may significantly increase the risk of dental decay, especially when proper warnings and oral care guidance were not provided. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may be eligible to file a Hair Relaxer Cancer Lawsuit if:   ",

    allegationsParagraph:
      "Parents or legal guardians typically bring these claims on behalf of their affected children. ",

    healthRisksTitle: "What are the Other Health Risks of Suboxone?   ",
    healthRisksParagraph:
      "Long-term use of Suboxone can affect more than just teeth. Many patients report additional health problems that impact daily life and well-being. Understanding these risks is important for anyone considering legal action. ",

    healthRisksSubtitle: "Other reported health risks of Suboxone include:  ",

    otherRisksTitle:
      "Can I Still Apply for the Suboxone Lawsuit? Eligibility & Deadline   ",

    otherRisksParagraph:
      "Many Suboxone users have suffered serious dental problems, which can be painful and expensive to treat. Eligibility to file a Suboxone tooth decay lawsuit generally includes:   ",

    otherRisksSubtitle: "The key health risks include: ",

    otherRisksSub2:
      "While these risks are serious, the lawsuits focus primarily on cancers caused by prolonged hair relaxer use. ",

    mdllitigationTitle: "Suboxone Lawsuit Update: Class Action & MDL Status   ",

    mdllitigationParagraph: [
      "After suffering severe dental injuries from the Suboxone films, individuals are filing Suboxone lawsuits against Indivior, Inc.  ",
      "The Suboxone lawsuits have been grouped into MDL 3092 Suboxone (Buprenorphine/Naloxone) Film Products Liability Litigation and are being handled in federal court in the Northern District of Ohio. As of January 2026, approximately 1,854 cases are active in this coordinated proceeding under the supervision of Judge J. Philip Calabrese. While the litigation remains in its early phases, hundreds of claims have already been filed, and new Suboxone lawsuits continue to be added. ",
    ],

    mdllitigationSubtitle:
      "Choosing an experienced Zantac attorney is critical to building a strong case. The right attorney can: ",

    helpTitle: "Suboxone Lawyers: How to Find the Right Attorney? ",
    helpSubtitle:
      "Choosing the right Suboxone lawyers is essential for maximizing compensation. Look for attorneys who:   ",
    helpParagraph:
      "An experienced lawyer can review your records, confirm eligibility, track the suboxone lawsuit update, and file your claim before the suboxone lawsuit deadline expires. ",

    compensationTitle: "Suboxone Settlement & Lawsuit Payout Per Person   ",
    compensationParagraph:
      "Compensation in Suboxone tooth decay lawsuits can range from $15,000 to $150,000, depending on the severity of dental damage, duration of use, and proof of financial loss. The compensation will cover: ",
    compensationSubtitle: "Compensation may include:  ",

    compensationSub2:
      "While these are concerning, the major risk is necrotizing enterocolitis (NEC), a severe intestinal disease that can be fatal in premature babies. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Suboxone Tooth Decay Lawsuit with Connect2Attorney? ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Suboxone tooth decay lawsuit against the manufacturer, in just three simple steps:  ",
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
export const SUBOXONE_TOC = [
  {
    label: "What is the Suboxone Tooth Decay Lawsuit?",
    id: "main-title",
  },

  {
    label: "Suboxone and Severe Tooth Decay: Other Health Risks Explained",
    id: "health-risks-title",
  },

  {
    label: "Can I Still Apply for the Suboxone Lawsuit? Eligibility & Deadline",
    id: "eligibility-title",
  },

  {
    label: "Suboxone Lawsuit Update: Class Action & MDL Status",
    id: "settlements-title",
  },

  {
    label: "Suboxone Lawyers: How to Find the Right Attorney?",
    id: "mdllitigation-title",
  },

  {
    label: "Suboxone Settlement & Lawsuit Payout Per Person",
    id: "compensation-title",
  },

  {
    label: "How to File a Suboxone Tooth Decay Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },

  {
    label: "Suboxone Tooth Decay Lawsuit Timeline",
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
;

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
            <TableOfContents items={SUBOXONE_TOC} />
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

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.eligibilityTitle}
                className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
              >
                {content.pageContent.otherRisksTitle}
              </h2>

              <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.otherRisksParagraph}
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

              <h2
                id={content.sectionIds.settlementsTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.mdllitigationTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.mdllitigationParagraph[0]}
              </p>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.mdllitigationParagraph[1]}
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

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.healthRisksParagraph}
              </p>
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
                <TableOfContents items={SUBOXONE_TOC} />
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
