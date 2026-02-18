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

    mdllitigationTitle: "mdllitigation-title",

    compensationTitle: "compensation-title",

    documentsTitle: "documents-title",

    stepsTitle: "steps-title",
  },

  eligibilityPoints: [
    {
      description: "Your Paragard IUD broke during removal ",
    },
    {
      description: "A fragment remained inside your uterus ",
    },
    {
      description:
        "You required surgery (such as hysteroscopy or hysterectomy) ",
    },
    {
      description:
        "You experienced infertility, internal injuries, or chronic pain  ",
    },
  ],

  healthRisks: [
    {
      number: "01",
      title: " Uterine Perforation",
      description:
        "The device may puncture the uterus during insertion, leading to internal damage.  ",
    },
    {
      number: "02",
      title: "Excessive Bleeding and Cramps",
      description:
        "Some users experience heavier periods and more painful cramping.",
    },
    {
      number: "03",
      title: "Infection",
      description:
        "Improper insertion or retained fragments can cause serious uterine or abdominal infections. ",
    },
    {
      number: "04",
      title: " Infertility",
      description:
        "Scarring or damage from the device can affect future fertility in some women.  ",
    },
    {
      number: "05",
      title: " Allergic Reaction",
      description:
        "Rarely, sensitivity to copper can cause inflammation or allergic symptoms. ",
    },
  ],

  otherRisks: [
    {
      description: "Hip pain and grinding sensations ",
    },
    {
      description: "Bone loss around the implant ",
    },
    {
      description: "Inflammation and tissue damage ",
    },
    {
      description: "Implant dislocation or loosening ",
    },
  ],

  mdllitigationPoints: [
    {
      description: "Difficulty walking or standing ",
    },
    {
      description: "Joint instability   ",
    },
    {
      description: "Chronic swelling and stiffness  ",
    },
    {
      description: "Repeat surgeries to remove or replace the device  ",
    },
  ],

  updatePoints1: [
    {
      description: "Medical bills and revision surgery costs ",
    },
    {
      description: "Physical therapy and rehabilitation ",
    },
    {
      description: "Lost income and reduced earning capacity ",
    },
    {
      description: "Pain, suffering, and loss of quality of life ",
    },
  ],

  updatePoints2: [
    {
      description: "Review your medical records and implant details ",
    },
    {
      description: "Confirm whether your device was recalled ",
    },
    {
      description: "File your claim within the legal deadline ",
    },
    {
      description: "Seek maximum compensation through settlement or trial ",
    },
  ],

  helpPoints: [
    {
      description: "Has experience handling defective medical device cases ",
    },
    {
      description: "Is familiar with MDL and mass tort litigation  ",
    },
    {
      description: "Offers free consultations and works on contingency  ",
    },
    {
      description: "Has a proven track record in product liability claims ",
    },
  ],

  updatePoints: [
    {
      number: "01",
      title: "Medical Records",
      description:
        "Documentation of Paragard insertion, removal, and any complications or surgeries. ",
    },
    {
      number: "02",
      title: " Proof of Device Use",
      description:
        "Records confirming the brand, model, and duration of Paragard use. .",
    },
    {
      number: "03",
      title: " Proof of Use",
      description:
        "You can provide medical records confirming Paragard use and related complications. ",
    },
    {
      number: "04",
      title: " Injury Reports",
      description:
        "Notes from doctors detailing injuries such as breakage, infections, or internal damage.",
    },
    {
      number: "05",
      title: " Billing Statements",
      description:
        "Receipts and invoices for medical treatments, surgeries, and related expenses. ",
    },
    {
      number: "06",
      title: "Personal Statements",
      description:
        "Descriptions of pain, suffering, or lifestyle impact caused by the device. ",
    },
    {
      number: "07",
      title: " Expert Opinions",
      description:
        "Medical expert evaluations linking injuries directly to Paragard usage. ",
    },
  ],
  compensationPoints: [
    {
      title: "Medical Expenses",
      description:
        "Covers surgeries, hospital stays, medications, and follow-up care.   ",
    },
    {
      title: "Pain and Suffering",
      description:
        "Compensation for physical pain, emotional distress, and trauma.",
    },
    {
      title: "Lost wages",
      description:
        "Reimbursement for time off work or loss of earning capacity.   ",
    },
    {
      title: "Loss of Quality of Life",
      description:
        "For long-term limitations or reduced ability to perform daily activities.   ",
    },
    {
      title: "Future Medical Costs",
      description:
        "Anticipated costs for ongoing treatment or corrective procedures. .",
    },
  ],

  realStories: [
    {
      name: "SGene Davis: ",
      story:
        "He received a knee implant that failed, causing him significant pain and suffering. Davis filed a personal injury lawsuit against Exactech, alleging the company failed to warn about the defective product. ",
    },
    {
      name: "Cynthia Camp:",
      story:
        "She underwent a hip replacement that failed due to a damaged implant. The defect caused severe complications, leaving her completely disabled. ",
    },
  ],

  pageContent: {
    mainTitle: "What is Paragard IUD Breakage Lawsuit? ",
    mainParagraphs: [
      "Thousands of women across the United States have reported serious injuries after their Paragard IUD broke during removal. These incidents have led to a growing number of Paragard IUD lawsuits, claiming the device was defectively designed and that patients were not properly warned about the risks. ",
      "If you have suffered complications from a broken Paragard IUD, you may be eligible to take legal action. We will help you seek compensation for your injuries. ",
      "The Paragard IUD breakage lawsuit involves claims against the manufacturer alleging that the copper intrauterine device can fracture during removal, leaving pieces inside the uterus. These retained fragments often require invasive surgery and may cause long-term reproductive harm. ",
      "Plaintiffs in the Paragard lawsuit argue that the device has a design defect and that the manufacturer failed to adequately warn doctors and patients about the risk of breakage. More than 3,000 lawsuits have been brought against the manufacturers, Teva Pharmaceutical and CooperSurgical.  ",
      "About Paragard IUD",
      "Paragard IUD is a hormone-free, copper-based intrauterine device used for long-term birth control. It is approved for up to 10 years of use and is marketed as a safe, reversible contraceptive option. While effective at preventing pregnancy, Paragard has been linked to serious complications during removal, particularly when the device’s arms snap off inside the uterus. These risks were not fully disclosed to many patients before implantation. ",
    ],

    allegationsTitle: "Who is Eligible to File a Claim? ",

    allegationsSubtitle: "You may qualify to file a Paragard IUD lawsuit if: ",

    allegationsParagraph:
      "A qualified Elmiron lawsuit attorney can review your medical records and prescription history to determine eligibility. ",

    healthRisksTitle:
      "Paragard IUD Breakage Injuries & Side Effects Explained  ",
    healthRisksParagraph:
      "While Paragard is considered an effective birth control device, some women have experienced side effects that can cause pain, infection, or long-term health issues. These risks may appear during use or removal of the device and often require medical attention. ",

    healthRisksSubtitle: "Other health risks linked to Paragard    ",

    mdllitigationTitle:
      "Has a proven track record in product liability claims    ",

    mdllitigationParagraph:
      "Women injured by a broken Paragard IUD may face serious medical expenses, pain, and emotional distress. Compensation is intended to cover ongoing treatment and the impact on daily life. Settlements typically range from $10,000 to $400,000, depending on the severity of the injuries. ",
    mdllitigationSubtitle: " You may get compensation that includes:  ",

    updateTitle: "What Documents Do You Require to File a Lawsuit? ",
    updateParagraph:
      "Filing a Paragard IUD lawsuit requires clear documentation linking your injuries to the device. Proper records help establish the cause of harm, support your claims for compensation, and ensure the lawsuit proceeds smoothly.  ",

    updateSubtitle: "Documents to file lawsuit includes: ",
    helpTitle: "Paragard IUD Lawyers: How to Find the Right Attorney?    ",
    helpSubtitle:
      "Choosing the right lawyer is critical for a successful paragard lawsuit. Look for an attorney who:   ",

    stepsTitle:
      "How to File a Paragard IUD Breakage Lawsuit with Connect2Attorney?  ",
    stepsParagraph:
      "Connect2Attorney guides you through the process of filing a Paragard IUD breakage lawsuit against the responsible party, in just three simple steps:   ",
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

export const PARAGARD_TOC = [
  { label: "What is Paragard IUD Breakage Lawsuit?", id: "main-title" },

  {
    label: "Paragard IUD Breakage Injuries & Side Effects Explained",
    id: "health-risks-title",
  },

  {
    label: "Paragard IUD Lawyers: How to Find the Right Attorney?",
    id: "mdllitigation-title",
  },

  {
    label: "Paragard IUD Settlement & Compensation Overview",
    id: "compensation-title",
  },

  {
    label: "What Documents Do You Require to File a Lawsuit?",
    id: "documents-title",
  },

  {
    label: "How to File a Paragard IUD Breakage Lawsuit with Connect2Attorney?",
    id: "steps-title",
  },

  {
    label: "Paragard IUD Breakage Lawsuit Timeline",
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
            <TableOfContents items={PARAGARD_TOC} />
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
              id={content.sectionIds.mdllitigationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.helpTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
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
                                      font-bold
                                      leading-[27px]
                                      capitalize
                                    "
                  >
                    {item.description}
                  </h3>
                </div>
              ))}
            </div>

            <h2
              id={content.sectionIds.compensationTitle}
              className="font-noto-serif font-normal text-[#162766] text-[28px] sm:text-[34px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] capitalize mb-4"
            >
              {content.pageContent.mdllitigationTitle}
            </h2>

            <p className="mb-4 font-urbanist font-normal text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationParagraph}
            </p>

            <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[27px]">
              {content.pageContent.mdllitigationSubtitle}
            </p>

            {/* ==================== HEALTH RISKS SECTION ==================== */}
            <div className="mb-16">
              <h2
                id={content.sectionIds.documentsTitle}
                className="font-noto-serif text-[#162766] text-[20px] sm:text-[22px] lg:text-[40px] font-medium mb-2"
              >
                {content.pageContent.updateTitle}
              </h2>

              <p className="mb-4 font-urbanist text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.updateParagraph}
              </p>

              <p className="mb-4 font-urbanist font-bold text-[#425777] text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[30px]">
                {content.pageContent.updateSubtitle}
              </p>
              <div className="space-y-4 w-full mb-16">
                {content.updatePoints.map((item, index) => (
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
                <TableOfContents items={PARAGARD_TOC} />
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
