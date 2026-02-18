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
    allegationsTitle: "eligibility-title",
    compensationTitle: "compensation-title",
    realStoriesTitle: "realstories-title",
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
      title: "Dark and Lovely",
    },
    {
      title: "Ultra Sheen",
    },
    {
      title: "Revlon",
    },
    {
      title: "Just for Me",
    },
    {
      title: "Mizani",
    },
    {
      title: "Motions",
    },
    {
      title: "ORS Olive Oil Relaxer",
    },
    {
      title: "TCB Naturals",
    },
    {
      title: "Soft & Beautiful",
    },
  ],

  otherRisks: [
    {
      number: "01",
      title: "Cancer",
      description:
        "Studies link long-term exposure to chemicals in hair relaxers with uterine and ovarian cancers, raising concern for regular users. ",
    },
    {
      number: "02",
      title: " Kidney Injury ",
      description:
        "Certain ingredients in relaxers may strain kidney function over time, potentially leading to long-term damage. ",
    },
    {
      number: "03",
      title: " Respiratory Problems",
      description:
        "Inhaling fumes during application can cause short-term irritation and breathing difficulties, which may worsen with repeated exposure.  ",
    },
    {
      number: "04",
      title: " Immune Disruption ",
      description:
        "Regular contact with chemical compounds may interfere with normal immune system function, making the body more susceptible to illness.  ",
    },
    {
      number: "05",
      title: "Skin Infection",
      description:
        "Scalp irritation, burns, or chemical reactions can increase the likelihood of bacterial or fungal infections ",
    },
    {
      number: "06",
      title: "Hair Damage",
      description:
        "Hair relaxers can weaken strands, causing thinning, breakage, and overall scalp damage that affects hair growth. ",
    },
    {
      number: "07",
      title: "Reproductive Problems",
      description:
        "Long-term exposure to certain chemicals may impact fertility and disrupt hormonal balance, potentially affecting reproductive health. ",
    },
  ],

  compensation: [
    {
      title: "Medical Expenses",
      description:
        "Coverage for hospital bills, doctor visits, medications, and ongoing treatment related to liver damage.  ",
    },
    {
      title: "Lost Wages",
      description:
        "Compensation for income lost due to illness, hospital stays, or inability to work during recovery. . ",
    },
    {
      title: "Pain and Suffering",
      description:
        " Financial recognition for physical pain, emotional distress, and decreased quality of life. ",
    },
    {
      title: "Punitive Damages",
      description:
        "In some cases, additional compensation may be awarded to punish manufacturers for negligence",
    },
    {
      title: "Wrong Death Damages",
      description:
        "For loved ones if a user passed away due to hair relaxer-related cancer.  ",
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
    mainTitle: "What is the Hair Relaxer Cancer Lawsuit? ",
    mainParagraphs: [
      "Hair relaxers are widely used in the U.S., but recent studies have raised concerns about their potential link to cancer. Individuals who developed cancer after long-term use of hair relaxers may be entitled to compensation through a Hair Relaxer Cancer Lawsuit. ",
      "If you are considering seeking compensation for the harm caused, we can guide you through the legal process to help you obtain the maximum payout you deserve.",
      "A Hair Relaxer Cancer Lawsuit is a legal claim filed by individuals who believe that using chemical hair relaxers caused or contributed to their cancer. Lawsuits typically claim that manufacturers knew or should have known about the cancer risks associated with their products but failed to provide adequate warnings",
      "What is a Hair Relaxer?",
      "Hair relaxers are chemical treatments designed to straighten naturally curly or textured hair. They often contain strong ingredients such as lye (sodium hydroxide), guanidine hydroxide, or other chemical compounds that break down hair structure to achieve a straight appearance.  While effective for hair styling, prolonged exposure to these chemicals can irritate the scalp and, according to some studies, potentially increase the risk of certain cancers over time. Studies show that around 95% of self-identified adult Black women have used hair relaxers.  ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "You may be eligible to file a Hair Relaxer Cancer Lawsuit if:   ",

    allegationsParagraph:
      "Parents or legal guardians typically bring these claims on behalf of their affected children. ",

    healthRisksTitle:
      "Which Hair Relaxer Companies Are Facing Cancer Lawsuits?  ",
    healthRisksParagraph:
      "The hair relaxer lawsuits target multiple major brands that have produced products linked to uterine and ovarian cancer. Plaintiffs claim these companies failed to warn consumers about the risks associated with long-term use.",

    healthRisksSubtitle: "The brands named in the lawsuits include:  ",

    otherRisksTitle: "What are the Health Risks of Hair Relaxer?   ",

    otherRisksParagraph:
      "Hair relaxers contain chemicals that can cause serious health issues, especially with long-term use. Many users have reported damage to organs, skin, and overall health. ",
    otherRisksSubtitle: "The key health risks include: ",

    otherRisksSub2:
      "While these risks are serious, the lawsuits focus primarily on cancers caused by prolonged hair relaxer use. ",

    mdllitigationTitle:
      "How to Find the Right Hair Relaxer Cancer Attorney?   ",

    mdllitigationParagraph:
      "Finding the right attorney is crucial if you are considering filing a Hair Relaxer Cancer Lawsuit. The right lawyer can guide you through the complex legal process, help gather evidence, and increase your chances of receiving fair compensation. Here’s how to choose the best attorney for your case: ",

    mdllitigationSubtitle:
      "Choosing an experienced Zantac attorney is critical to building a strong case. The right attorney can: ",

    helpTitle: "NEC Baby Formula Lawyers: How to Find the Right Attorney? ",
    helpSubtitle: "The major problems associated with PowerPort include:  ",
    helpParagraph:
      "Choosing the right NEC baby formula lawsuit lawyer is one of the most important steps in your case. When looking for an NEC baby formula lawsuit attorney, consider: ",

    compensationTitle: "What Compensation Can You Seek?   ",
    compensationParagraph:
      "Victims of hair relaxer-related cancers face high medical costs, emotional distress, and lasting health problems. The compensation amount can range from $100,000 to $500,000, depending on the severity of health damage and the strength of evidence provided. ",
    compensationSubtitle: "Compensation may include:  ",

    compensationSub2:
      "While these are concerning, the major risk is necrotizing enterocolitis (NEC), a severe intestinal disease that can be fatal in premature babies. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Hair Relaxer Cancer Lawsuit with Connect2Attorney? ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Hair Relaxer cancer lawsuit against the responsible party, in just three simple steps: ",
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
export const HAIR_RELAXER_TOC = [
  {
    label: "What is the Hair Relaxer Cancer Lawsuit?",
    id: "main-title",
  },
  {
    label: "What are the Allegations Against Hair Relaxer?",
    id: "health-risks-title",
  },
  {
    label: "What are the Other Health Risks of Hair Relaxer?",
    id: "other-risks-title",
  },
  {
    label: "Who is Eligible to File a Hair Relaxer Lawsuit?",
    id: "eligibility-title",
  },
  {
    label: "What Compensation Can You Seek?",
    id: "compensation-title",
  },
  {
    label: "Real Stories Behind Lawsuit",
    id: "realstories-title",
  },
  {
    label: "How to File a Hair Relaxer Cancer Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Hair Relaxer Cancer Lawsuit Timeline",
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
            <TableOfContents items={HAIR_RELAXER_TOC} />
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
            </div>

            <h3
              id={content.sectionIds.healthRisksTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.healthRisksTitle}
            </h3>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.healthRisksParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.healthRisksSubtitle}
            </p>

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
                    {item.title}
                  </p>
                </div>
              ))}
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

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.allegationsParagraph}
              </p>
            </div>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
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
            </div>

            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
              <h2
                id={content.sectionIds.compensationTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                <span className="text-[#FCCB48]">
                  {content.pageContent.compensationTitle.split(" ")[0]}{" "}
                  {content.pageContent.compensationTitle.split(" ")[1]}{" "}
                </span>{" "}
                {content.pageContent.compensationTitle
                  .split(" ")
                  .slice(2)
                  .join(" ")}
              </h2>

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.compensationParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.compensationSubtitle}
              </p>

              <ul className="space-y-5 mb-2">
                {content.compensation.map((item, index) => (
                  <li key={index} className="flex flex-col gap-2">
                    {/* Description with yellow bullet */}
                    <div className="flex items-start gap-3">
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
                        <strong>{item.title}</strong> - {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
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
                <TableOfContents items={HAIR_RELAXER_TOC} />
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
