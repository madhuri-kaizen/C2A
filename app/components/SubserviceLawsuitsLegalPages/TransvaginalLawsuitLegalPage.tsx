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

  timelineSection: "timeline-section",

  supportSection: "support",

  faqsSection: "faqs",
},


  mainPoints: [
    {
      description:
        "Pelvic Organ Prolapse (POP) – when organs such as the bladder or uterus drop from their normal position. ",
    },
    {
      description:
        "Stress Urinary Incontinence (SUI) – involuntary urine leakage due to weakened pelvic muscles. ",
    },
  ],

  eligibilityPoints: [
    {
      description:
        "Implantation of a transvaginal mesh device for POP or SUI.   ",
    },
    {
      description:
        "Experiencing mesh-related injuries like pain, infections, organ perforation, or mesh erosion.  ",
    },
    {
      description:
        "Proof of medical treatment or additional surgeries due to mesh complications. Proof of medical treatment or additional surgeries due to mesh complications.  ",
    },
    {
      description:
        "The implant was produced by a company named in lawsuits, such as Boston Scientific, Johnson & Johnson (Ethicon), or American Medical Systems (AMS).    ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: "Bowel Dysfunction",
      description:
        "Problems with bowel control or difficulty passing stool due to mesh complications.",
    },
    {
      number: "02",
      title: "Mesh Erosion",
      description:
        "The mesh can wear through surrounding tissue, sometimes entering the bladder, rectum, or vaginal canal.",
    },
    {
      number: "03",
      title: "Chronic Pelvic Pain",
      description:
        "Persistent pain in the lower abdomen or pelvic region, often worsening over time.",
    },
    {
      number: "04",
      title: "Pain During Intercourse",
      description:
        "Scar tissue or mesh placement may cause discomfort during sexual activity.",
    },
    {
      number: "05",
      title: "Infections and Discharge",
      description:
        "Bacterial infections are common and may lead to unusual vaginal discharge or fever.",
    },
    {
      number: "06",
      title: "Vaginal Scarring or Shrinkage",
      description:
        "The implanted mesh can cause tissue to contract, leading to tightness, scarring, or narrowing of the vaginal canal.",
    },
  ],

  otherRisks: [
    {
      title: "Johnson & Johnson (Ethicon)",
      description:
        "Ethicon manufactured widely used mesh products such as Gynecare Prolift, Prosima, and TVT slings. Lawsuits claim the company failed to disclose risks like mesh erosion, chronic pain, and organ damage. Ethicon later discontinued many vaginal mesh products in the U.S.",
    },
    {
      title: "Boston Scientific",
      description:
        "Boston Scientific produced devices including the Uphold, Advantage, and Obtryx sling systems. The company faced numerous lawsuits alleging defective design and inadequate warnings and has paid substantial settlements.",
    },
    {
      title: "C.R. Bard",
      description:
        "Bard’s Avaulta mesh systems were linked to severe complications. Plaintiffs alleged that Bard failed to properly test its products and concealed known risks, leading to large settlement agreements.",
    },
    {
      title: "American Medical Systems (AMS)",
      description:
        "AMS, a division of Endo International, manufactured sling systems such as Monarc, BioArc, and MiniArc. The company resolved thousands of claims through global settlements.",
    },
    {
      title: "Coloplast",
      description:
        "Coloplast sold mesh products and sling systems used for prolapse and incontinence. Although involved in fewer cases, the company reached settlements with women injured by its mesh implants.",
    },
  ],

  mdllitigationPoints: [
    {
      title: "January 2026",
      description:
        "The MDL includes 389 pending cases and 399 total filings, reflecting steady litigation activity. ",
    },
    {
      title: "December 2025 Surge",
      description:
        "A wave of new lawsuits nearly doubled the number of pending cases. ",
    },
    {
      title: "Trial Delay",
      description:
        "A key bellwether trial has been postponed and is now scheduled for June 2026. ",
    },
    {
      title: "State Investigation",
      description:
        "Texas Attorney General Ken Paxton has launched an official investigation into heavy metal levels in baby food. ",
    },
    {
      title: "New Autism Claim",
      description:
        "A recent lawsuit alleges a child developed autism spectrum disorder after exposure to toxic baby food. ",
    },
  ],
  helpPoints: [
    {
      description: "Evaluating your eligibility for filing a claim",
    },
    {
      description: "Gathering medical records and evidence of injuries",
    },
    {
      description: "Filing claims in federal MDL or state courts",
    },
    {
      description: "Negotiating settlements to maximize compensation",
    },
    {
      description: "Representing you in court if your case goes to trial",
    },
  ],

  updatePoints: [
    {
      description: "Defective design and manufacturing  ",
    },
    {
      description: "Failure to warn about serious complications ",
    },
    {
      description: "Misleading marketing that minimized known risks  ",
    },
    {
      description:
        "Downplaying long-term injuries, including erosion, infection, nerve damage, and the need for revision surgeries  ",
    },
  ],
  compensationPoints: [
    {
      title: "Medical Expenses",
      description:
        "Covers hospital visits, surgeries, medications, physical therapy, and future medical care.",
    },
    {
      title: "Lost Wages",
      description:
        "Reimburses income lost during recovery and accounts for reduced earning capacity due to ongoing health issues.",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for physical discomfort, emotional distress, and diminished quality of life.",
    },
    {
      title: "Additional Surgeries",
      description:
        "Covers the costs of corrective procedures required to fix mesh-related injuries.",
    },
    {
      title: "Punitive Damages",
      description:
        "In rare cases, punitive damages are awarded to penalize manufacturers for negligent behavior.",
    },
  ],

  realStories: [
    {
      name: "Regina Stepherson:  ",
      story:
        " She suffered a prolapse of the wall between the rectum and the vagina. Her bladder was supported with a transvaginal mesh. Following the surgery, she experienced constant pain, difficulty walking, weight loss, and nausea. ",
    },
    {
        name:"Katrina Spradley:",
        story:" Katrina received a transvaginal mesh implant to treat urinary incontinence. After the procedure, she developed symptoms including pain, bleeding, and discomfort during sexual activity."
    }
  ],

  pageContent: {
    mainTitle: "What is a Transvaginal Mesh Implant Lawsuit?  ",
    mainParagraphs: [
      "The Transvaginal Mesh Implant Lawsuit has become one of the most significant product liability cases in the United States, offering women legal recourse for injuries caused by defective pelvic mesh devices. ",
      "If you or a loved one suffered harm after a mesh implant, you may be eligible to file a lawsuit. We will help you seek compensation for medical costs, lost wages, and suffering.",
      "The transvaginal mesh lawsuit involves women who have suffered injuries from pelvic mesh implants used to treat pelvic organ prolapse (POP) and stress urinary incontinence (SUI). Many plaintiffs allege that the mesh devices were defectively designed, poorly manufactured, or inadequately tested, leading to severe health complications.",
      "Federal courts have consolidated thousands of these cases into multidistrict litigation (MDL) to streamline the legal process and ensure consistent rulings. Women filing claims may seek compensation for medical expenses, pain and suffering, lost wages, and more. ",
      "What is Transvaginal Mesh?  ",
      "Transvaginal mesh is a medical device implanted surgically to support weakened pelvic tissues.These implants were designed to treat conditions like",
      "While intended to improve quality of life, many patients experienced severe mesh complications, prompting mass litigation across the U.S. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle:
      "Women who have experienced serious complications from transvaginal mesh may be eligible to file a claim if they meet criteria such as: ",
    allegationsParagraph:
      "Consulting a transvaginal mesh lawyer is crucial to evaluate your case and determine eligibility.   ",

    healthRisksTitle:
      "Transvaginal Mesh Side Effects & Complications Explained      ",
    healthRisksParagraph:
      "Transvaginal mesh implants can lead to a range of serious health risks that affect both physical and emotional well-being. Understanding these risks is crucial for those considering a lawsuit or seeking medical care after mesh implantation. ",

    healthRisksSubtitle:
      "Common health risks associated with transvaginal mesh implants include:  ",

    otherRisksTitle:
      "Devices and Manufacturers Involved in the Mesh Litigation    ",

    otherRisksPaaragraph:
      "The transvaginal mesh litigation has involved several major medical device manufacturers accused of selling defective pelvic mesh products and failing to warn patients and doctors about serious risks. Thousands of lawsuits allege that these companies aggressively marketed mesh implants for pelvic organ prolapse (POP) and stress urinary incontinence (SUI) despite known safety concerns.  ",

    otherRisksSubTitle:
      "Key Manufacturers Named in Transvaginal Mesh Lawsuits .   ",

    mdllitigationTitle:
      "Transvaginal Mesh Lawsuit Update: MDL Status & Current Developments      ",

    mdllitigationParagraph: [
      "There are currently no active transvaginal mesh or pelvic repair MDLs. In the past, seven MDLs were created for transvaginal mesh lawsuits, all handled by U.S. District Judge Joseph R. Goodwin in the Southern District of West Virginia. The last two MDLs closed in 2021. Overall, more than 107,000 cases were filed, and over 75,000 were resolved through the MDL process. ",
      "As of January 2026, most transvaginal mesh lawsuits have been settled or otherwise resolved. All seven original multidistrict litigations (MDLs) are now closed. Judge Joseph Goodwin oversaw much of the litigation involving more than 100,000 claims and has since sent any remaining unresolved cases that were not part of settlements back to their respective state courts. ",
    ],
    mdllitigationSubtitle: " Key updates include: ",

    updateTitle: "Common Allegations Against Mesh Manufacturers   ",
    updateParagraph:
      "Choosing an experienced AFFF lawsuit attorney is crucial for maximizing compensation. Look for lawyers who: ",

    updateSubtitle:
      "The MDL involved claims against the mesh manufacturers, Cook Medical, Inc., and Neomedic as well.   ",

    settlementTitle: "Transvaginal Mesh Settlements & Compensation Overview   ",
    settlementParagraph:
      "Complications from transvaginal mesh implants can cause severe physical pain, emotional distress, and financial hardship. Filing a lawsuit allows victims to seek compensation for these burdens and hold manufacturers accountable for their negligence.",
    settlementSubtitle:
      "You may be entitled to seek the following types of compensation:   ",

    helpTitle: "How a Transvaginal Mesh Lawyer Can Help?        ",
    helpSubtitle:
      "A mesh implant lawyer can guide you through every step of the legal process, including:   ",

    helpParagraph:
      "Legal experts specializing in baby food autism lawsuits provide crucial support to parents seeking justice and safer products for all children. ",

    realStoriesTitle: "Real Stories Behind Lawsuit ",

    stepsTitle:
      "How to File a Transvaginal Mesh Implant Lawsuit with Connect2Attorney?     ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Transvaginal mesh lawsuit against the responsible party, in just three simple steps:  ",
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

export const TRANSVAGINAL_MESH_TOC = [
  {
    label: "What is the Transvaginal Mesh Implant Lawsuit?",
    id: "main-title",
  },
  {
    label: "Transvaginal Mesh Side Effects & Complications Explained",
    id: "health-risks-title",
  },
  {
    label: "Devices and Manufacturers Involved in the Mesh Litigation",
    id: "other-risks-title",
  },
  {
    label: "Transvaginal Mesh Lawsuit Update: MDL Status & Current Developments",
    id: "settlements-title",
  },
  {
    label: "How a Transvaginal Mesh Lawyer Can Help?",
    id: "mdllitigation-title",
  },
  {
    label: "Transvaginal Mesh Settlements & Compensation Overview",
    id: "compensation-title",
  },
  {
    label: "Real Stories Behind Lawsuit",
    id: "realstories-title",
  },
  {
    label: "How to File a Transvaginal Mesh Implant Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },
  {
    label: "Transvaginal Mesh Implant Lawsuit Timeline",
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
            <TableOfContents items={TRANSVAGINAL_MESH_TOC} />
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

              <ul className="list-disc pl-6 space-y-2">
                {content.mainPoints.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-start gap-3">
                      <p className="font-urbanist text-[#425777] font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
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

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
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
                            <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-bold leading-[24px] sm:leading-[27px]">
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
              id={content.sectionIds.otherRisksTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.otherRisksTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.otherRisksPaaragraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.otherRisksSubTitle}
            </p>

            <div className="space-y-4 w-full mb-16">
              {content.otherRisks.map((item, index) => (
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

            <h2
              id={content.sectionIds.settlementsTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.mdllitigationTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph[0]}
            </p>

             <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph[1]}
            </p>

           

    
            <div className="bg-[#162766] text-[#FFF] rounded-xl p-4 sm:p-6 w-full  mb-12">
              <h3
                id={content.sectionIds.mdllitigationTitle}
                className="font-noto-serif font-normal capitalize text-[#FFF] text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[42px] lg:leading-[50px] mb-4"
              >
                {content.pageContent.helpTitle.split(" ")[0]}{" "}
                {content.pageContent.helpTitle.split(" ")[1]}{" "}
                {content.pageContent.helpTitle.split(" ")[2]}{" "}
                {content.pageContent.helpTitle.split(" ")[3]}{" "}
                {content.pageContent.helpTitle.split(" ")[4]}{" "}
            
                <span className="text-[#FCCB48]">
                  {content.pageContent.helpTitle.split(" ").slice(5).join(" ")}
                </span>
              </h3>

              <p className="mb-4 font-urbanist font-normal  text-[#F9F9F9] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]">
                {content.pageContent.helpSubtitle}
              </p>
              <ul className="space-y-5 mb-2">
                {content.helpPoints.map((item, index) => (
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
                            <p className="font-urbanist text-[#F9F9F9] text-[16px] sm:text-[18px] font-bold leading-[24px] sm:leading-[27px]">
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
              id={content.sectionIds.compensationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.settlementTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.settlementParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.settlementSubtitle}
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
                <TableOfContents items={TRANSVAGINAL_MESH_TOC} />
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
