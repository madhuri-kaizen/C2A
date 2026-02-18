"use client";

import type { ReactNode } from "react";
import LawsuitsHeroCard from "@/app/components/subservice_pages/LawsuitsHeroCard";
import TimeLineCard from "@/app/components/subservice_pages/TimeLineCard";
import FaqSection from "@/app/components/FaqSection";
import ContactCard from "@/app/components/ContactCard";
import Footer from "@/app/components/Footer";
import SupportCard from "@/app/components/subservice_pages/SupportCard";

import OzempicLawsuitsLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/OzempicLawsuitsLegalPage";
import MesoLawsuitsLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/MesoLawsuitsLegalPage";
import DepoLawsuitsLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/DepoLawsuitsLegalPage";
import RoundupLawsuitsLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/RoundupLawsuitsLegalPage";
import TalcumLawsuitsLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/TalcumLawsuitsLegalPage";
import RobloxAddictionLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/RobloxAddictionLegalPage";
import HerniaMeshLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/HerniaMeshLegalPage";
import SocialMediaLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/SocialMediaLawsuitLegalPage";
import ParaquatLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/ParaquatLawsuitLegalPage";
import ZantacLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/ZantacLawsuitLegalPage";
import VideoGameLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/VideoGameLawsuitLegalPage";
import BardPowerPortLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/BardPowerPortLawsuitLegalPage";
import NecBabyLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/NecBabyLawsuitLegalPage";
import HairRelaxerLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/HairRelaxerLawsuitLegalPage";
import SuboxoneLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/SuboxoneLawsuitLegalPage";
import OxbrytaLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/OxbrytaLawsuitLegalPage";
import ExactechLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/ExactechLawsuitLegalPage";
import ElmironLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/ElmironLawsuitLegalPage";
import ParagardLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/ParagardLawsuitLegalPage";
import UltraFoodLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/UltraFoodLawsuitLegalPage";
import FireflightLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/FireflightLawsuitLegalPage";
import ToxicBabyLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/ToxicBabyLawsuitLegalPage";
import PhilipscpapLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/PhilipscpapLawsuitLegalPage";
import TransvaginalLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/TransvaginalLawsuitLegalPage";
import PfasLawsuitLegalPage from "@/app/components/SubserviceLawsuitsLegalPages/PfasLawsuitLegalPage";

import { ozempicTimelineData } from "@/app/components/timelines/ozempicTimelineData";
import type { TimelineData } from "@/app/components/timelineTypes";
import { depoTimelineData } from "@/app/components/timelines/depoTimelineData";
import { mesotheliomaTimelineData } from "@/app/components/timelines/mesotheliomaTimelineData";
import { talcumTimelineData } from "@/app/components/timelines/talcumTimelineData";
import { roundupTimelineData } from "@/app/components/timelines/roundupTimelineData";
import { robloxTimelineData } from "@/app/components/timelines/robloxTimelineData";
import { socialTimelineData } from "@/app/components/timelines/socialTimelineData";
import { videogameTimelineData } from "@/app/components/timelines/videogameTimelineData";
import { paraquatTimelineData } from "@/app/components/timelines/paraquatTimelineData";
import { zantacTimelineData } from "@/app/components/timelines/zantacTimelineData";
import { bardTimelineData } from "@/app/components/timelines/bardTimelineData";
import { necbabyTimelineData } from "@/app/components/timelines/necbabyTimelineData";
import { hairrelaxerTimelineData } from "@/app/components/timelines/hairrelaxerTimelineData";
import { suboxoneTimelineData } from "@/app/components/timelines/suboxoneTimelineData";
import { oxbrytaTimelineData } from "@/app/components/timelines/oxbrytaTimelineData";
import { exactechTimelineData } from "@/app/components/timelines/exactechTimelineData";
import { elmironTimelineData } from "@/app/components/timelines/elmironTimelineData";
import { paragardTimelineData } from "@/app/components/timelines/paragardTimelineData";
import { ultraTimelineData } from "@/app/components/timelines/ultraTimelineData";
import { fireflightTimelineData } from "@/app/components/timelines/fireflightTimelineData";
import { toxicbabyTimelineData } from "@/app/components/timelines/toxicbabyTimelineData";
import { philipsTimelineData } from "@/app/components/timelines/philipsTimelineData";
import { transvaginalTimelineData } from "@/app/components/timelines/transvaginalTimelineData";
import { pfasTimelineData } from "@/app/components/timelines/pfasTimelineData";

type MassTortSlug =
  | "ozempic-lawsuit"
  | "mesothelioma-lawsuit"
  | "depo-provera-lawsuit"
  | "roundup-lawsuit"
  | "talcum-powder-lawsuit"
  | "roblox-addiction-lawsuit"
  | "hernia-mesh-lawsuit"
  | "social-media-addiction-lawsuit"
  | "video-game-addiction-lawsuit"
  | "paraquat-lawsuit"
  | "zantac-lawsuit"
  | "bard-powerport-lawsuit"
  | "nec-baby-formula-lawsuit"
  | "hair-relaxer-cancer-lawsuit"
  | "suboxone-tooth-decay-lawsuit"
  | "oxbryta-lawsuit"
  | "exactech-implant-recall-lawsuit"
  | "elmiron-lawsuit"
  | "paragard-iud-lawsuit"
  | "ultra-processed-food-lawsuit"
  | "afff-firefighting-foam-lawsuit"
  | "toxic-baby-food-autism-lawsuit"
  | "philips-cpap-bipap-recall-lawsuit"
  | "transvaginal-mesh-implant-lawsuit"
  | "pfas-forever-chemicals-lawsuit";

/* ================= PAGE TITLES ================= */
const HERO_TITLES: Record<MassTortSlug, string> = {
  "ozempic-lawsuit":
    "Ozempic Lawsuit: Side Effects, Updates & How to File a Claim",

  "mesothelioma-lawsuit":
    "Mesothelioma Lawsuit: Asbestos Exposure Claims & Compensation Guide",

  "depo-provera-lawsuit":
    "Depo Provera Lawsuit: Depo Shot Lawsuit & Brain Tumor Claims Explained",

  "roundup-lawsuit":
    "Roundup Cancer Lawsuit: Weed Killer Lawsuit, Settlement & Legal Claims",

  "talcum-powder-lawsuit":
    "Talcum Powder Lawsuit: Baby Powder Cancer Claims & Legal Updates",

  "roblox-addiction-lawsuit":
    "Roblox Addiction Lawsuit: Claims, Payouts & Mental Health Risks ",

  "hernia-mesh-lawsuit":
    "Hernia Mesh Lawsuit: Injury Claims, Settlements & Legal Updates",

  "social-media-addiction-lawsuit":
    "Social Media Addiction Lawsuit: Claims, Mental Health Risks & Legal Updates ",

  "video-game-addiction-lawsuit":
    "Video Game Addiction Lawsuit: Claims, Payouts & Mental Health Impacts ",

  "paraquat-lawsuit":
    "Paraquat Parkinson’s Disease Lawsuit: Claims, Settlements & Legal Help ",

  "zantac-lawsuit":
    "Zantac Cancer Lawsuit: Claims, Settlement Payouts & Legal Updates ",

  "bard-powerport-lawsuit":
    "Bard PowerPort Lawsuit: Claims, Side Effects & Legal Options ",

  "nec-baby-formula-lawsuit":
    "NEC Baby Formula Lawsuit: Claims, Settlements & Legal Updates ",

  "hair-relaxer-cancer-lawsuit":
    "Hair Relaxer Cancer Lawsuit: Compensation & Updates ",

  "suboxone-tooth-decay-lawsuit":
    "Suboxone Lawsuit: Tooth Decay Claims, Settlements & Legal Updates ",

  "oxbryta-lawsuit":
    "Oxbryta Liver Injury Lawsuit: Claims, Side Effects & Legal Updates ",

  "exactech-implant-recall-lawsuit":
    "Exactech Recall Lawsuit: Knee, Hip & Joint Replacement Claims for Patients  ",

  "elmiron-lawsuit":
    "Elmiron Eye Damage Lawsuit: Vision Loss Claims & Legal Updates ",

  "paragard-iud-lawsuit":
    "Paragard IUD Breakage Lawsuit: Injury Claims, Side Effects & Legal Updates ",

  "ultra-processed-food-lawsuit":
    "Ultra-Processed Food Cancer Lawsuit: Health Risks, Claims & Legal Updates ",

  "afff-firefighting-foam-lawsuit":
    "AFFF Firefighting Foam Lawsuit: PFAS Exposure & Legal Claims ",

  "toxic-baby-food-autism-lawsuit":
    "Toxic Baby Food Autism Lawsuit: Heavy Metals Exposure & Neurological Injury Claims ",

  "philips-cpap-bipap-recall-lawsuit":
    "Philips CPAP and BiPAP Recall Lawsuit: Injury Claims & Legal Updates ",

  "transvaginal-mesh-implant-lawsuit":
    "Transvaginal Mesh Implant Lawsuit: Injury Claims, Settlements & Legal Updates ",

  "pfas-forever-chemicals-lawsuit":
    "PFAS Exposure Lawsuit: Legal Claims and Health Risks from Forever Chemicals ",
};
/* ================= FAQ DATA ================= */
const FAQ_BY_SLUG: Record<
  MassTortSlug,
  { question: string; answer: string }[]
> = {
  "ozempic-lawsuit": [
    {
      question: "What is the Ozempic lawsuit about?",
      answer:
        "The Ozempic lawsuit involves claims that the drug caused serious gastrointestinal injuries, such as gastroparesis, and that the manufacturer failed to provide adequate warnings.",
    },
    {
      question: "Who can file an Ozempic lawsuit?",
      answer:
        "Individuals who used Ozempic and experienced severe digestive issues, required medical treatment, or suffered long-term health problems may be eligible to file a claim.",
    },
    {
      question: "What are the problems caused by Ozempic?",
      answer:
        "Reported problems include gastroparesis (stomach paralysis), nausea, vomiting, intestinal blockage, and other painful stomach conditions.",
    },
    {
      question: "What kind of compensation can I recover?",
      answer:
        "Eligible plaintiffs may recover compensation for medical bills, lost income, pain and suffering, and other damages caused by Ozempic-related injuries.",
    },
    {
      question: "How do I start an Ozempic claim?",
      answer:
        "You can start by contacting an experienced Ozempic lawyer for a free case review. They can evaluate your eligibility, gather medical records, and guide you through the lawsuit process.",
    },
  ],

  "mesothelioma-lawsuit": [
    {
      question: "Can you file a wrongful death mesothelioma lawsuit?",
      answer:
        "Yes. If a loved one passed away from mesothelioma, family members may file a claim for funeral costs, lost support, and other damages.",
    },
    {
      question: "How long does it take to settle a mesothelioma lawsuit?",
      answer:
        "Most cases settle within 6 to 18 months, but timelines vary based on the case and court schedule.",
    },
    {
      question: "How do you prove mesothelioma in a lawsuit?",
      answer:
        "You need medical records, a confirmed diagnosis, and evidence of asbestos exposure linked to a job, product, or location.",
    },
    {
      question: "How should I file a mesothelioma claim?",
      answer:
        "Start by contacting an experienced attorney. They will guide you through eligibility, paperwork, and the legal process.",
    },
    {
      question: "Who can be held responsible for asbestos exposure?",
      answer:
        "Companies that made or used asbestos products, employers, or property owners may be legally responsible.",
    },
    {
      question: "Can you still file a claim if exposure happened decades ago?",
      answer:
        "Yes. Mesothelioma often appears years later, and most states allow claims if they are filed within the legal time limit after diagnosis.",
    },
  ],

  "depo-provera-lawsuit": [
    {
      question: "Who is eligible to file a Depo Provera lawsuit?",
      answer:
        "You may be eligible if you used Depo-Provera (the depo shot) and were later diagnosed with a brain tumor such as meningioma, especially if you were not warned about this risk before using the drug.",
    },
    {
      question: "What health conditions are linked to Depo-Provera lawsuits?",
      answer:
        "Most Depo Provera lawsuits focus on meningioma, a type of brain tumor. Claims may involve symptoms such as severe headaches, vision problems, seizures, or the need for surgery or long-term medical care.",
    },
    {
      question: "What legal claims are being filed in Depo Provera cases?",
      answer:
        "Claims generally allege failure to warn, inadequate safety disclosures, and negligent marketing. Plaintiffs argue that manufacturers did not properly inform patients about known or potential brain tumor risks.",
    },
    {
      question: "What compensation may be available in a Depo Provera lawsuit?",
      answer:
        "Compensation may include medical expenses, lost income, pain and suffering, future treatment costs, and other damages related to the injury. The amount depends on the severity of the condition and individual case details.",
    },
    {
      question: "How do I start a Depo Provera lawsuit claim?",
      answer:
        "The first step is to speak with a qualified attorney who can review your medical history and Depo-Provera use. A lawyer can help determine eligibility, file the claim, and guide you through the legal process.",
    },
  ],

  "talcum-powder-lawsuit": [
    {
      question: "Which companies are named in talcum powder lawsuits?",
      answer:
        "Johnson & Johnson is the primary company named, along with some of its subsidiaries and suppliers.",
    },
    {
      question: "Which cancers are linked to talcum powder?",
      answer:
        "Ovarian cancer and mesothelioma are the main cancers linked to talcum powder exposure.",
    },
    {
      question: "What is the current status of talcum powder lawsuits?",
      answer:
        "Thousands of cases are ongoing, with many settlements reached, but no official admission of guilt by the company.",
    },
    {
      question: "What evidence is needed to file a talcum powder lawsuit?",
      answer:
        "You need proof of product use, a cancer diagnosis linked to talcum exposure, and medical records supporting the connection.",
    },
    {
      question:
        "Can family members file a wrongful death talcum powder lawsuit?",
      answer:
        "Yes, surviving family members can file wrongful death claims if their loved one died from talcum-related cancer.",
    },
  ],
  "roundup-lawsuit": [
    {
      question: "What cancers qualify for Roundup lawsuits?",
      answer:
        "Most cases involve non-Hodgkin’s lymphoma, but some related blood cancers like leukemia may also qualify.",
    },
    {
      question: "What is the average settlement for a Roundup case?",
      answer:
        "Settlements typically range from $5,000 to $250,000, depending on the severity of the case.",
    },
    {
      question: "What proof do you need for a Roundup lawsuit?",
      answer:
        "You’ll need a medical diagnosis and evidence linking your condition to Roundup exposure.",
    },
    {
      question: "How long does it take to get a settlement for Roundup?",
      answer:
        "Most cases take several months to a few years, depending on the court process and case complexity.",
    },
    {
      question: "How to prove exposure to Roundup?",
      answer:
        "Proof may include work records, receipts, personal use history, or witness statements.",
    },
  ],
  "roblox-addiction-lawsuit": [
    {
      question: "What is a Roblox addiction lawsuit?",
      answer:
        "It is a legal claim against Roblox for allegedly causing addictive behavior and related emotional or psychological harm to users.",
    },
    {
      question: "Who can file a Roblox addiction lawsuit?",
      answer:
        "Minors who experienced harm or their parents can file claims seeking compensation for emotional, mental, or social impacts.",
    },
    {
      question: "What are the allegations against Roblox?",
      answer:
        "The platform is accused of encouraging excessive play, failing to protect minors, and contributing to mental health issues.",
    },
    {
      question: "What other risks does Roblox pose?",
      answer:
        "Users may face exposure to inappropriate content, online predators, excessive screen time, financial loss, and privacy concerns.",
    },
    {
      question: "What compensation can be recovered?",
      answer:
        "Payouts can cover therapy costs, emotional harm, academic disruption, and loss of quality of life.",
    },
    {
      question: "What evidence is needed to file a lawsuit?",
      answer:
        "Evidence may include medical records, therapy reports, device activity, gameplay history, and expert evaluations linking harm to Roblox use.",
    },
  ],
  "hernia-mesh-lawsuit": [
    {
      question: "How much compensation can I get for a hernia mesh lawsuit?",
      answer:
        "Compensation depends on the severity of your complications, whether you required revision or removal surgery, your medical expenses, lost wages, and the long-term impact on your quality of life. Severe cases involving infection, bowel obstruction, organ damage, or multiple surgeries typically result in higher case values.",
    },
    {
      question: "What year was the hernia mesh recall?",
      answer:
        "There is no single year for a hernia mesh recall. Different manufacturers have recalled or withdrawn specific mesh products at various times. If you are unsure which product was used in your surgery, your operative report or hospital records can usually confirm the brand and model.",
    },
    {
      question: "Has anyone received a large payout in a hernia mesh lawsuit?",
      answer:
        "Yes, some cases have resulted in substantial verdicts or settlements, particularly where strong evidence showed serious complications such as organ injury, obstruction, infection, or multiple revision surgeries. However, outcomes vary significantly, and past results do not guarantee future compensation.",
    },
    {
      question: "How do I know which hernia mesh brand was used in my surgery?",
      answer:
        "Your surgical records, including the operative report, implant sticker, or hospital device log, typically list the manufacturer and product name. If you do not have access to these documents, an attorney can often assist in obtaining them.",
    },
    {
      question: "How long do I have to file a hernia mesh lawsuit?",
      answer:
        "The deadline to file a claim varies by state and often depends on when you first discovered—or reasonably should have discovered—that your injuries may be linked to the mesh. If you are experiencing ongoing complications or require revision surgery, it is important to evaluate your eligibility as soon as possible.",
    },
  ],
  "social-media-addiction-lawsuit": [
    {
      question: "How do I sue social media platforms for addiction?",
      answer:
        "You will need to work with a law firm experienced in technology, product liability, or mass tort litigation. An attorney can help demonstrate how a platform’s design, algorithm, or features directly contributed to addiction and resulting mental or psychological harm.",
    },
    {
      question: "Who can file a social media addiction lawsuit?",
      answer:
        "Teens, young adults, or parents of minors who have experienced mental health issues, academic decline, behavioral changes, or emotional distress linked to excessive social media use may be eligible to file a claim.",
    },
    {
      question: "What evidence is needed for a social media addiction case?",
      answer:
        "Evidence may include medical or therapy records, psychological evaluations, documented screen-time data, platform usage history, messages, and expert testimony connecting excessive use to mental health harm.",
    },
    {
      question: "Which platforms are being sued?",
      answer:
        "Major platforms such as Instagram, TikTok, Facebook, Snapchat, and YouTube have faced lawsuits alleging that their algorithms and engagement features promote addictive behavior and contribute to mental health issues among young users.",
    },
    {
      question:
        "How much compensation can I expect from a social media addiction lawsuit?",
      answer:
        "Compensation depends on the severity of harm and long-term impact. Settlements may range from $10,000 to $300,000, with higher amounts possible in cases involving significant psychological injury, hospitalization, or lasting emotional damage.",
    },
  ],
  "video-game-addiction-lawsuit": [
    {
      question: "What evidence is needed for a video game addiction lawsuit?",
      answer:
        "Medical records, psychological evaluations, and documented proof of prolonged gameplay demonstrating harm are key pieces of evidence in a video game addiction lawsuit.",
    },
    {
      question: "Who can file a video game addiction lawsuit?",
      answer:
        "Affected individuals, minors through their parents or legal guardians, and families impacted by gaming addiction may file claims seeking compensation.",
    },
    {
      question: "Which companies are being targeted in these lawsuits?",
      answer:
        "Developers and platform operators such as Roblox, Epic Games, Microsoft, and Discord are commonly named in lawsuits alleging addictive game design and harmful engagement features.",
    },
    {
      question: "What compensation can plaintiffs seek?",
      answer:
        "Plaintiffs may seek compensation for medical expenses, therapy costs, lost wages, emotional distress, financial losses, and in some cases, punitive damages.",
    },
    {
      question: "Are children eligible to file claims?",
      answer:
        "Yes. Parents or legal guardians may file a lawsuit on behalf of minors who have been affected by addictive video game design.",
    },
    {
      question: "How much compensation could a plaintiff potentially receive?",
      answer:
        "Settlements or verdicts may range from $50,000 to $2 million or more, depending on the severity of the addiction, documented harm, and long-term impact.",
    },
  ],
  "paraquat-lawsuit": [
    {
      question: "How long does Parkinson’s appear after Paraquat exposure?",
      answer:
        "Parkinson’s symptoms may develop years or even decades after prolonged or repeated exposure to Paraquat. The condition often progresses gradually, making early symptoms easy to overlook.",
    },
    {
      question: "Which organs are affected after Paraquat poisoning?",
      answer:
        "Paraquat poisoning primarily affects the lungs, kidneys, liver, and brain. In severe cases, it can lead to respiratory failure, organ damage, and long-term neurological complications.",
    },
    {
      question: "What factors influence Paraquat lawsuit settlement amounts?",
      answer:
        "Settlement amounts depend on the severity of Parkinson’s disease, the length and intensity of Paraquat exposure, medical expenses, lost wages, and the strength of medical and occupational evidence linking the exposure to the illness.",
    },
    {
      question: "How does an attorney help in a Paraquat lawsuit?",
      answer:
        "An experienced attorney evaluates your eligibility, gathers medical and employment records, works with medical experts, and negotiates aggressively to pursue fair compensation for your injuries.",
    },
    {
      question: "Can family members file a Paraquat lawsuit?",
      answer:
        "Yes. If a loved one passed away due to Paraquat-related health complications, eligible family members may file a wrongful death claim seeking compensation for medical costs, funeral expenses, and loss of support.",
    },
  ],
  "zantac-lawsuit": [
    {
      question: "What is the average payout for a Zantac lawsuit?",
      answer:
        "Zantac lawsuit payouts vary widely depending on the facts of each case. Settlements and verdicts may range from $25,000 to $500,000 or more based on the type of cancer, severity of illness, medical expenses, lost income, and strength of supporting evidence.",
    },
    {
      question: "What proof is needed to file a Zantac lawsuit?",
      answer:
        "You generally need proof of brand-name Zantac (ranitidine) use, a qualifying cancer diagnosis, and medical records linking the diagnosis to NDMA exposure. Pharmacy records, receipts, and physician documentation may help support your claim.",
    },
    {
      question: "Which cancers are linked to Zantac?",
      answer:
        "Cancers commonly alleged in Zantac lawsuits include bladder cancer, stomach cancer, liver cancer, pancreatic cancer, esophageal cancer, and colorectal cancer. Eligibility depends on medical evidence and individual circumstances.",
    },
    {
      question: "How long do I have to file a Zantac lawsuit?",
      answer:
        "The deadline to file a Zantac lawsuit varies by state. In most states, the statute of limitations ranges from two to six years from the date of diagnosis or when you reasonably discovered the connection between Zantac and your injury.",
    },
    {
      question: "Can family members file a wrongful death claim for Zantac?",
      answer:
        "Yes. If a loved one passed away due to cancer allegedly linked to Zantac, surviving family members may be eligible to file a wrongful death lawsuit seeking compensation for funeral costs, loss of financial support, and emotional damages.",
    },
  ],
  "bard-powerport-lawsuit": [
    {
      question: "What is the average payout for a Bard PowerPort lawsuit?",
      answer:
        "Payouts vary depending on the severity of complications, medical treatment required, and long-term impact. Settlements and verdicts may range from $10,000 to $300,000 or more in cases involving serious injury, infection, or device failure.",
    },
    {
      question: "How long does it take to settle a Bard PowerPort lawsuit?",
      answer:
        "Settlement timelines vary based on the complexity of the case, medical evidence, and court proceedings. Some cases resolve in several months, while others may take a few years to reach settlement or verdict.",
    },
    {
      question: "What proof is needed to file a Bard PowerPort lawsuit?",
      answer:
        "Key evidence includes medical records showing Bard PowerPort implantation, documentation of complications or device failure, imaging reports, physician notes, and proof linking the injuries to the device.",
    },
    {
      question: "Who can file a Bard PowerPort lawsuit?",
      answer:
        "Patients who had a Bard PowerPort implanted and later experienced complications such as infection, catheter fracture, migration, blood clots, or other serious health issues may be eligible to file a claim.",
    },
    {
      question:
        "Can I file a Bard PowerPort lawsuit if the device was implanted years ago?",
      answer:
        "Yes. You may still be eligible to file if your injuries were discovered later and fall within your state's statute of limitations. The filing deadline often depends on when the injury was diagnosed or linked to the device.",
    },
    {
      question: "Do I need a lawyer to file a Bard PowerPort lawsuit?",
      answer:
        "While not legally required, working with an experienced mass tort attorney can help gather evidence, handle legal procedures, and maximize your potential compensation.",
    },
  ],
  "nec-baby-formula-lawsuit": [
    {
      question: "Who qualifies for a NEC baby formula lawsuit?",
      answer:
        "Parents or legal guardians of premature infants who developed necrotizing enterocolitis (NEC) or related health complications after consuming cow’s milk-based baby formula such as Similac or Enfamil may be eligible to file a lawsuit.",
    },
    {
      question: "What proof is needed to file a NEC baby formula lawsuit?",
      answer:
        "Evidence typically includes medical records, hospital documentation, doctor diagnoses confirming NEC, feeding records showing formula use, and bills related to treatment and ongoing care.",
    },
    {
      question: "Which companies are being sued in NEC baby formula cases?",
      answer:
        "Major manufacturers such as Abbott Laboratories (Similac) and Mead Johnson (Enfamil) are commonly named in NEC baby formula lawsuits for allegedly failing to warn about increased risks in premature infants.",
    },
    {
      question: "How long do I have to file a NEC baby formula lawsuit?",
      answer:
        "The deadline varies by state and usually begins from the date the injury was discovered or diagnosed. An experienced attorney can help determine the specific filing deadline for your case.",
    },
    {
      question: "Can I file a lawsuit if my child recovered from NEC?",
      answer:
        "Yes. Even if your child recovered, you may still be eligible to seek compensation for medical expenses, pain and suffering, long-term health monitoring, and other related damages.",
    },
  ],

  "hair-relaxer-cancer-lawsuit": [
    {
      question: "What is the Hair Relaxer Cancer Lawsuit about?",
      answer:
        "The Hair Relaxer Cancer Lawsuit involves claims that long-term use of chemical hair relaxer products caused serious health conditions, including uterine cancer, ovarian cancer, and other hormone-related cancers. Plaintiffs allege that manufacturers failed to warn consumers about these risks.",
    },
    {
      question: "Who can file a hair relaxer cancer lawsuit?",
      answer:
        "Individuals who regularly used chemical hair relaxers and were later diagnosed with uterine cancer, ovarian cancer, or other related conditions may be eligible to file a lawsuit. Eligibility depends on medical history, product usage, and supporting documentation.",
    },
    {
      question: "Which brands are included in the lawsuit?",
      answer:
        "Several major brands have been named in hair relaxer lawsuits, including Dark & Lovely, Revlon, Just for Me, ORS Olive Oil Relaxer, Motions, and other chemical hair straightening products alleged to contain harmful ingredients.",
    },
    {
      question: "How much compensation can victims receive?",
      answer:
        "Compensation amounts vary based on the severity of illness, medical costs, lost wages, and overall impact on quality of life. Settlements and verdicts may range from $100,000 to $500,000 or more in severe cases.",
    },
    {
      question: "Is there a time limit to file a hair relaxer lawsuit?",
      answer:
        "Yes. The statute of limitations varies by state but typically ranges from two to three years from the date of diagnosis or when you discovered the connection between hair relaxer use and your illness. It is important to consult an attorney as soon as possible to protect your rights.",
    },
  ],

  "suboxone-tooth-decay-lawsuit": [
    {
      question:
        "How much compensation can you receive from a Suboxone tooth decay lawsuit?",
      answer:
        "Compensation amounts vary based on the severity of dental injuries, treatment costs, and supporting evidence. Settlements may range from $15,000 to $150,000 or more in cases involving significant tooth loss, infections, or long-term dental damage.",
    },
    {
      question: "Who is eligible to file a Suboxone tooth decay lawsuit?",
      answer:
        "Individuals who used Suboxone and developed severe tooth decay, tooth loss, gum disease, or other dental complications may qualify. In some cases, family members may also file claims on behalf of deceased patients.",
    },
    {
      question: "What proof is required for a Suboxone lawsuit?",
      answer:
        "Key evidence includes dental records, medical records, proof of Suboxone use such as prescriptions or pharmacy records, and documentation linking the dental damage to the medication.",
    },
    {
      question: "Which company is being sued in Suboxone tooth decay lawsuits?",
      answer:
        "Indivior Inc., the manufacturer of Suboxone, is the primary defendant. Lawsuits allege the company failed to adequately warn patients and healthcare providers about the risk of severe dental damage.",
    },
    {
      question: "How long does it take to settle a Suboxone lawsuit?",
      answer:
        "Settlement timelines vary depending on case complexity, court proceedings, and negotiations. Some cases may resolve in several months, while others may take a few years, especially if included in multidistrict litigation.",
    },
  ],

  "oxbryta-lawsuit": [
    {
      question: "What is Oxbryta?",
      answer:
        "Oxbryta is a prescription medication used to treat sickle cell disease. It works by improving the ability of red blood cells to carry oxygen and reducing complications related to sickle cell anemia.",
    },
    {
      question: "What are the risks of taking Oxbryta?",
      answer:
        "Reported risks of Oxbryta include liver injury, severe pain crises, worsening anemia symptoms, and potential complications affecting the kidneys and heart. Some patients may require additional medical treatment due to these side effects.",
    },
    {
      question: "Who can file an Oxbryta lawsuit?",
      answer:
        "Patients who suffered liver damage, severe complications, or other serious side effects after using Oxbryta may be eligible to file a lawsuit. Families of individuals who experienced severe harm or death may also qualify for wrongful death claims.",
    },
    {
      question: "Are Oxbryta lawsuits ongoing?",
      answer:
        "Yes. Oxbryta lawsuits are currently in the early stages, and additional claims are expected as more patients come forward and medical evidence continues to develop.",
    },
    {
      question: "What compensation can be sought in an Oxbryta lawsuit?",
      answer:
        "Compensation may include medical expenses, lost wages, ongoing treatment costs, pain and suffering, and in some cases punitive damages depending on the severity of injuries and supporting evidence.",
    },
  ],

  "exactech-implant-recall-lawsuit": [
    {
      question: "What is the Exactech implant recall?",
      answer:
        "The Exactech implant recall involves defective knee, ankle, and hip replacement devices that may wear out prematurely due to faulty packaging. This defect can lead to implant failure and serious complications for patients.",
    },
    {
      question: "How do I know if my implant was recalled?",
      answer:
        "You can verify whether your implant was recalled by checking your surgical records, consulting your orthopedic surgeon, or reviewing the official Exactech recall list. An attorney can also help confirm eligibility.",
    },
    {
      question: "What problems can recalled Exactech implants cause?",
      answer:
        "Patients have reported complications such as chronic pain, swelling, limited mobility, implant loosening, bone damage, and the need for revision surgery to replace the defective implant.",
    },
    {
      question: "Do I need an attorney to file an Exactech implant claim?",
      answer:
        "While not legally required, working with an attorney experienced in medical device lawsuits can help you gather evidence, file your claim properly, and pursue fair compensation.",
    },
    {
      question: "How much compensation can I receive from an Exactech lawsuit?",
      answer:
        "Settlement amounts vary depending on the severity of injuries, revision surgery needs, medical expenses, and long-term impact. Compensation may range from $50,000 to $300,000 or more in severe cases.",
    },
  ],
  "elmiron-lawsuit": [
    {
      question: "Is Elmiron a high-risk medicine?",
      answer:
        "Yes. Long-term use of Elmiron has been linked to serious eye damage, including pigmentary maculopathy, which can cause permanent vision problems.",
    },
    {
      question: "Who can file an Elmiron lawsuit?",
      answer:
        "Individuals who used Elmiron and later developed vision problems, eye disease, or pigmentary maculopathy may be eligible to file a lawsuit seeking compensation.",
    },
    {
      question: "What type of eye damage does Elmiron cause?",
      answer:
        "Elmiron has been linked to pigmentary maculopathy, a condition that can cause blurred vision, difficulty reading, dark spots, impaired night vision, and permanent vision loss.",
    },
    {
      question: "How much compensation can I receive?",
      answer:
        "Settlement amounts vary depending on the severity of the injury, medical expenses, and long-term impact. Compensation may range from $20,000 to $300,000 or more in severe cases.",
    },
    {
      question: "Do I need proof to file an Elmiron claim?",
      answer:
        "Yes. Medical records showing Elmiron use, eye examinations, diagnosis of pigmentary maculopathy or related vision damage, and supporting physician documentation are typically required.",
    },
  ],

  "paragard-iud-lawsuit": [
    {
      question: "What is the Paragard IUD controversy?",
      answer:
        "The controversy involves claims that the device can break during removal, causing pain, internal injuries, and the need for surgery.",
    },
    {
      question: "How do I know my eligibility for a Paragard IUD lawsuit?",
      answer:
        "You may be eligible if your IUD broke or caused complications, and you have medical records linking the device to your injuries.",
    },
    {
      question: "What happens if Paragard IUD breaks?",
      answer:
        "Breakage can lead to internal injuries, infections, bleeding, and often requires surgical removal of fragments.",
    },
    {
      question: "Can I file a lawsuit if my IUD broke before 10 years?",
      answer:
        "Yes, early breakage does not affect eligibility as long as the device causes injury or complications.",
    },
    {
      question: "What compensation can I receive for Paragard injuries?",
      answer:
        "Compensation may range from $10,000 to $400,000 depending on the severity of injuries and financial impact.",
    },
  ],

  "ultra-processed-food-lawsuit": [
    {
      question: "Is ultra-processed food directly linked to cancer?",
      answer:
        "Current research shows a strong association between ultra-processed food consumption and increased cancer risk, but direct causation has not been conclusively proven. Studies indicate that individuals who regularly consume these foods may face higher risks of certain cancers and chronic diseases.",
    },
    {
      question: "Who can sue over ultra-processed food-related illnesses?",
      answer:
        "Individuals diagnosed with serious health conditions such as cancer, diabetes, liver disease, or metabolic disorders potentially linked to long-term consumption of ultra-processed foods may be eligible to file a lawsuit. Eligibility depends on medical evidence and consumption history.",
    },
    {
      question: "Can children be included in ultra-processed food lawsuits?",
      answer:
        "Yes. Parents or legal guardians can file lawsuits on behalf of minors who developed health problems allegedly linked to heavy exposure to ultra-processed foods, especially if those products were aggressively marketed to children.",
    },
    {
      question:
        "What evidence is needed to file an ultra-processed food lawsuit?",
      answer:
        "Plaintiffs typically need medical records confirming their known medical condition, documentation showing long-term consumption of ultra-processed foods, and expert evidence linking their illness to dietary exposure.",
    },
    {
      question:
        "Are all food companies being targeted in ultra-processed food lawsuits?",
      answer:
        "Lawsuits primarily target major food manufacturers and corporations accused of producing and marketing ultra-processed foods while allegedly failing to properly warn consumers about potential health risks.",
    },
  ],

  "afff-firefighting-foam-lawsuit": [
    {
      question: "Who is eligible for an AFFF firefighter foam lawsuit?",
      answer:
        "Military personnel, firefighters, airport staff, industrial workers, and contractors who were exposed to AFFF firefighting foam and later developed related health conditions may be eligible to file a claim.",
    },
    {
      question: "What health issues are linked to AFFF exposure?",
      answer:
        "Exposure to AFFF has been linked to various cancers, thyroid disorders, liver damage, kidney disease, and other serious long-term health complications caused by PFAS chemicals.",
    },
    {
      question: "How do I prove exposure to AFFF?",
      answer:
        "Proof may include medical records, military or employment records, workplace incident reports, environmental testing results, and other documentation showing exposure and related health impacts.",
    },
    {
      question: "Can civilians file a lawsuit for AFFF exposure?",
      answer:
        "Yes, civilians such as residents living near military bases, airports, or industrial sites where AFFF was used may be eligible if they can demonstrate exposure and resulting health problems.",
    },
    {
      question: "Is there a time limit to file an AFFF lawsuit?",
      answer:
        "Yes, each state has a statute of limitations that determines how long you have to file a claim. The timeline usually begins when you are diagnosed or discover the connection between your illness and AFFF exposure.",
    },
  ],
  "toxic-baby-food-autism-lawsuit": [
    {
      question: "What is a Toxic Baby Food Autism Lawsuit?",
      answer:
        "It is a legal claim filed by parents alleging that toxic heavy metals in baby food caused autism or other serious health problems in their child.",
    },
    {
      question: "Who can file a toxic baby food lawsuit?",
      answer:
        "Parents or legal guardians of children diagnosed with autism, neurodevelopmental disorders, or related conditions after consuming contaminated baby food may be eligible to file a claim.",
    },
    {
      question: "Which companies are being sued in toxic baby food lawsuits?",
      answer:
        "Major manufacturers named in lawsuits include Beech-Nut Nutrition Company, Gerber Products Company, and Hain Celestial Group, among others accused of selling contaminated baby food.",
    },
    {
      question: "What health risks are linked to toxic baby food exposure?",
      answer:
        "Exposure to toxic heavy metals such as lead, arsenic, mercury, and cadmium has been linked to autism, developmental delays, brain damage, learning disabilities, and other neurological and health complications.",
    },
    {
      question:
        "What compensation can families receive from a toxic baby food lawsuit?",
      answer:
        "Families may seek compensation for medical expenses, therapy costs, special education, pain and suffering, future care needs, lost earning potential, and other damages related to the child’s condition.",
    },
    {
      question: "How do I start a toxic baby food lawsuit?",
      answer:
        "You can begin by contacting an experienced attorney who will review your child’s medical history, confirm eligibility, gather evidence, and guide you through the legal process.",
    },
  ],
  "philips-cpap-bipap-recall-lawsuit": [
    {
      question: "What is the Philips CPAP and BiPAP recall about?",
      answer:
        "The Philips CPAP and BiPAP recall involves certain devices that contained polyester-based polyurethane (PE-PUR) foam, which could break down over time and release harmful particles or toxic chemicals into the air pathway.",
    },
    {
      question: "Who is eligible to file a Philips CPAP lawsuit?",
      answer:
        "Individuals who used a recalled Philips CPAP, BiPAP, or ventilator device and later experienced respiratory problems, cancer, or other health complications may be eligible to file a lawsuit.",
    },
    {
      question:
        "What health problems are linked to recalled Philips CPAP devices?",
      answer:
        "Reported health problems include respiratory irritation, inflammation, asthma flare-ups, chronic cough, headaches, dizziness, organ damage, and in some cases, cancer linked to toxic foam exposure.",
    },
    {
      question:
        "How much compensation can I receive from a Philips CPAP lawsuit?",
      answer:
        "Compensation varies based on injury severity, medical expenses, and long-term health impact. Philips has set aside over $1.1 billion for settlements, and individual payouts may range from thousands to significant amounts depending on each case.",
    },
    {
      question: "Do I need proof of injury to file a Philips CPAP lawsuit?",
      answer:
        "Yes. Medical records, proof of device use, diagnosis reports, and physician documentation linking your health condition to the recalled Philips device can help support your claim.",
    },
  ],
  "transvaginal-mesh-implant-lawsuit": [
    {
      question:
        "What evidence is needed for a transvaginal mesh implant lawsuit?",
      answer:
        "Medical records, surgical reports, doctor statements, and documentation of symptoms and complications are important to support your transvaginal mesh lawsuit claim.",
    },
    {
      question:
        "What is the average payout for a transvaginal mesh implant lawsuit?",
      answer:
        "Settlement amounts vary depending on injury severity and medical costs. Many transvaginal mesh lawsuit settlements range from $150,000 to $400,000 or more in serious cases.",
    },
    {
      question: "Can I file a lawsuit if my mesh implant was placed years ago?",
      answer:
        "Yes. You may still be eligible to file a lawsuit if you are within your state’s statute of limitations, which often begins when you discover the injury or complication.",
    },
    {
      question: "What injuries qualify for a transvaginal mesh lawsuit?",
      answer:
        "Eligible injuries may include chronic pelvic pain, mesh erosion, infections, organ perforation, urinary problems, pain during intercourse, and complications requiring revision surgery.",
    },
    {
      question:
        "What compensation can I receive from a transvaginal mesh lawsuit?",
      answer:
        "Compensation may include medical expenses, lost wages, pain and suffering, emotional distress, and costs related to revision or corrective surgeries.",
    },
  ],
  "pfas-forever-chemicals-lawsuit": [
    {
      question: "What is PFAS exposure?",
      answer:
        "PFAS exposure occurs when toxic per- and polyfluoroalkyl substances enter the body through contaminated water, soil, food, or consumer products, potentially leading to serious health risks.",
    },
    {
      question: "Who can file a PFAS lawsuit?",
      answer:
        "Individuals diagnosed with illnesses linked to PFAS exposure, residents of contaminated areas, workers exposed on the job, and families of affected victims may be eligible to file a lawsuit.",
    },
    {
      question: "Which companies are being sued for PFAS contamination?",
      answer:
        "Major defendants include manufacturers such as 3M, DuPont, Tyco, BASF, and other companies involved in producing or distributing PFAS-containing products.",
    },
    {
      question: "What health problems are linked to PFAS exposure?",
      answer:
        "PFAS exposure has been associated with kidney cancer, testicular cancer, liver damage, thyroid disease, fertility problems, immune system disorders, and other serious health conditions.",
    },
    {
      question: "Can I receive compensation for PFAS exposure?",
      answer:
        "Yes. Victims may be eligible for compensation covering medical expenses, lost income, pain and suffering, property damage, and other related losses.",
    },
  ],
};

export default function MassTortClient({ slug }: { slug: MassTortSlug }) {
  if (!slug) return null;
  //   const { slug } = useParams<{ slug: string }>();
  const heroTitle: ReactNode = HERO_TITLES[slug] ?? (
    <>
      Mass Tort
      <br />
      Lawsuits
    </>
  );
  //console.log("MassTort slug:", slug);
  const TIMELINE_BY_SLUG: Partial<
    Record<MassTortSlug, { title: string; data: TimelineData }>
  > = {
    "ozempic-lawsuit": {
      title: "Ozempic Lawsuit Timeline",
      data: ozempicTimelineData,
    },
    "depo-provera-lawsuit": {
      title: "Depo Provera Lawsuit Timeline",
      data: depoTimelineData,
    },

    "roundup-lawsuit": {
      title: "Roundup Lawsuit Timeline",
      data: roundupTimelineData,
    },

    "talcum-powder-lawsuit": {
      title: "Talcum Powder Lawsuit Timeline",
      data: talcumTimelineData,
    },
    "roblox-addiction-lawsuit": {
      title: "Roblox Addiction Lawsuit Timeline",
      data: robloxTimelineData,
    },
    "social-media-addiction-lawsuit": {
      title: "Social Media Addiction Lawsuit Timeline",
      data: socialTimelineData,
    },

    "video-game-addiction-lawsuit": {
      title: "Video Game Addiction Lawsuit Timeline",
      data: videogameTimelineData,
    },
    "paraquat-lawsuit": {
      title: "Paraquat Parkinson's Lawsuit Timeline",
      data: paraquatTimelineData,
    },

    "zantac-lawsuit": {
      title: "Zantac Cancer Lawsuit Timeline",
      data: zantacTimelineData,
    },
    "bard-powerport-lawsuit": {
      title: "Bard PowerPort Lawsuit Timeline",
      data: bardTimelineData,
    },
    "nec-baby-formula-lawsuit": {
      title: "Baby Formula Lawsuit Timeline",
      data: necbabyTimelineData,
    },

    "hair-relaxer-cancer-lawsuit": {
      title: "Hair Relaxer Cancer Lawsuit Timeline",
      data: hairrelaxerTimelineData,
    },

    "suboxone-tooth-decay-lawsuit": {
      title: "Suboxone Tooth Decay Lawsuit Timeline",
      data: suboxoneTimelineData,
    },

    "oxbryta-lawsuit": {
      title: "Oxbryta Liver Injury Lawsuit Timeline  ",
      data: oxbrytaTimelineData,
    },

    "exactech-implant-recall-lawsuit": {
      title: "Exactech Implant Lawsuit Timeline  ",
      data: exactechTimelineData,
    },

    "elmiron-lawsuit": {
      title: "Elmiron Eye Damage Lawsuit Timeline  ",
      data: elmironTimelineData,
    },

    "paragard-iud-lawsuit": {
      title: "Paragard IUD Breakage Lawsuit Timeline  ",
      data: paragardTimelineData,
    },
    "ultra-processed-food-lawsuit": {
      title: "Ultra-Processed Food Cancer Lawsuit Timeline  ",
      data: ultraTimelineData,
    },
    "afff-firefighting-foam-lawsuit": {
      title: "AFFF Firefighting Foam Lawsuit Timeline  ",
      data: fireflightTimelineData,
    },
    "toxic-baby-food-autism-lawsuit": {
      title: "Toxic Baby Food Autism Lawsuit Timeline  ",
      data: toxicbabyTimelineData,
    },
    "philips-cpap-bipap-recall-lawsuit": {
      title: "Philips CPAP and BiPAP Lawsuit Lawsuit Timeline  ",
      data: philipsTimelineData,
    },
    "transvaginal-mesh-implant-lawsuit": {
      title: "Transvaginal Mesh Implant Lawsuit Timeline  ",
      data: transvaginalTimelineData,
    },
    "pfas-forever-chemicals-lawsuit": {
      title: "PFAS Exposure Lawsuit Timeline  ",
      data: pfasTimelineData,
    },
  };

  const faqData = FAQ_BY_SLUG[slug] ?? [
    {
      question: "How much does it cost to start a case?",
      answer: "We work on a contingency basis. You pay nothing unless we win.",
    },
  ];
  /* ================= HERO IMAGES ================= */
  const HERO_IMAGE_BY_SLUG: Record<MassTortSlug, string> = {
    "ozempic-lawsuit": "/ozempic_bg_dark_new.png",
    "mesothelioma-lawsuit": "/meso_bg_dark.png",
    "depo-provera-lawsuit": "/depo_bg_dark.png",
    "roundup-lawsuit": "/roundup_bg_dark.png",
    "talcum-powder-lawsuit": "/talc_bg_dark.png",
    "roblox-addiction-lawsuit": "/roblox_bg_dark.png",
    "hernia-mesh-lawsuit": "/hernia_bg_dark.png",
    "social-media-addiction-lawsuit": "/social_bg_dark.png",
    "video-game-addiction-lawsuit": "/video_bg_dark.png",
    "paraquat-lawsuit": "/paraquat_bg_dark.png",
    "zantac-lawsuit": "/zantac_bg_dark.png",
    "bard-powerport-lawsuit": "/bardpowerport_bg_dark.png",
    "nec-baby-formula-lawsuit": "/necbaby_bg_dark.png",
    "hair-relaxer-cancer-lawsuit": "/Hairrelaxer_bg_dark.png",
    "suboxone-tooth-decay-lawsuit": "/suboxone_bg_dark.png",
    "oxbryta-lawsuit": "/Oxbryta_bg_dark.png",
    "exactech-implant-recall-lawsuit": "/exactech_bg_dark.png",
    "elmiron-lawsuit": "/elmiron_bg_dark.png",
    "paragard-iud-lawsuit": "/paragard_bg_dark.png",
    "ultra-processed-food-lawsuit": "/ultra_bg_dark.png",
    "afff-firefighting-foam-lawsuit": "/afff_bg_dark.png",
    "toxic-baby-food-autism-lawsuit": "/toxic_bg_dark.png",
    "philips-cpap-bipap-recall-lawsuit": "/phlips_bg_dark.png",
    "transvaginal-mesh-implant-lawsuit": "/transvaginal_bg_dark.png",
    "pfas-forever-chemicals-lawsuit": "/pfas_bg_dark.png",
  };

  const LEGAL_PAGE_BY_SLUG: Record<MassTortSlug, ReactNode> = {
    "ozempic-lawsuit": <OzempicLawsuitsLegalPage />,
    "mesothelioma-lawsuit": <MesoLawsuitsLegalPage />,
    "depo-provera-lawsuit": <DepoLawsuitsLegalPage />,
    "roundup-lawsuit": <RoundupLawsuitsLegalPage />,
    "talcum-powder-lawsuit": <TalcumLawsuitsLegalPage />,
    "roblox-addiction-lawsuit": <RobloxAddictionLegalPage />,
    "hernia-mesh-lawsuit": <HerniaMeshLegalPage />,
    "social-media-addiction-lawsuit": <SocialMediaLawsuitLegalPage />,
    "video-game-addiction-lawsuit": <VideoGameLawsuitLegalPage />,
    "paraquat-lawsuit": <ParaquatLawsuitLegalPage />,
    "zantac-lawsuit": <ZantacLawsuitLegalPage />,
    "bard-powerport-lawsuit": <BardPowerPortLawsuitLegalPage />,
    "nec-baby-formula-lawsuit": <NecBabyLawsuitLegalPage />,
    "hair-relaxer-cancer-lawsuit": <HairRelaxerLawsuitLegalPage />,
    "suboxone-tooth-decay-lawsuit": <SuboxoneLawsuitLegalPage />,
    "oxbryta-lawsuit": <OxbrytaLawsuitLegalPage />,
    "exactech-implant-recall-lawsuit": <ExactechLawsuitLegalPage />,
    "elmiron-lawsuit": <ElmironLawsuitLegalPage />,
    "paragard-iud-lawsuit": <ParagardLawsuitLegalPage />,
    "ultra-processed-food-lawsuit": <UltraFoodLawsuitLegalPage />,
    "afff-firefighting-foam-lawsuit": <FireflightLawsuitLegalPage />,
    "toxic-baby-food-autism-lawsuit": <ToxicBabyLawsuitLegalPage />,
    "philips-cpap-bipap-recall-lawsuit": <PhilipscpapLawsuitLegalPage />,
    "transvaginal-mesh-implant-lawsuit": <TransvaginalLawsuitLegalPage />,
    "pfas-forever-chemicals-lawsuit": <PfasLawsuitLegalPage />,
  };

  const timelineConfig = TIMELINE_BY_SLUG[slug];
  const heroImage = HERO_IMAGE_BY_SLUG[slug] ?? "/default_hero_bg.png";

  const SUPPORT_BY_SLUG: Record<
    MassTortSlug,
    { title: string; description: string }
  > = {
    "ozempic-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If Ozempic caused serious harm to your health, Connect2Attorney can help you:",
    },

    "mesothelioma-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to face a mesothelioma challenge. If asbestos exposure caused your illness, Connect2Attorney can help you:",
    },

    "depo-provera-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to face this challenge alone. If Depo-Provera caused serious harm to your health, Connect2Attorney is here to help you:",
    },

    "roundup-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If Roundup has caused you cancer or any other health problem, Connect2Attorney can help you:",
    },

    "talcum-powder-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight. If talcum powder has caused you ovarian cancer or any other health problem, Connect2Attorney can help you:",
    },

    "roblox-addiction-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If Roblox addiction caused you any harm, Connect2Attorney can help you: ",
    },
    "hernia-mesh-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If hernia mesh complications caused you harm, Connect2Attorney can help you:",
    },

    "social-media-addiction-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight. If social media addiction has caused you harm, Connect2Attorney can help you: ",
    },
    "video-game-addiction-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If video game addiction has caused serious harm, Connect2Attorney can help you:",
    },

    "paraquat-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "Don’t delay in starting your fight for justice. If Paraquat has caused you Parkinson’s disease or other health issues, Connect2Attorney is here to help you: ",
    },

    "zantac-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight. If Zantac has caused you cancer or any other health problem, Connect2Attorney can help you: ",
    },
    "bard-powerport-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If BardPowerPort has caused you any health problem, Connect2Attorney can help you: ",
    },
    "nec-baby-formula-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight against injustice. If baby formula has caused your infant to develop NEC, Connect2Attorney can help you:  ",
    },
    "hair-relaxer-cancer-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If a hair relaxer has caused you cancer, Connect2Attorney can help you: ",
    },
    "suboxone-tooth-decay-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You do not have to fight this battle alone. If Suboxone has caused your tooth decay, Connect2Attorney can help you: ",
    },

    "oxbryta-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You’re not alone in this fight. If Oxbryta has caused you liver injury or any other health problem, Connect2Attorney can help you:  ",
    },

    "exactech-implant-recall-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You’re not alone in this fight. If Oxbryta has caused you liver injury or any other health problem, Connect2Attorney can help you:  ",
    },

    "elmiron-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight. If Elmiron has caused damage to your eyes, Connect2Attorney can help you: ",
    },

    "paragard-iud-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight against injustice. If Paragard IUD breakage has caused you personal injury, Connect2Attorney can help you:  ",
    },

    "ultra-processed-food-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You are not alone in this fight. If ultra-processed food has caused you cancer, Connect2Attorney can help you:  ",
    },
    "afff-firefighting-foam-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If AFFF firefighting foam has caused you cancer or any other health problem, Connect2Attorney can help you: ",
    },
    "toxic-baby-food-autism-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If your child developed ASD after consuming baby food, Connect2Attorney can help you:  ",
    },
    "philips-cpap-bipap-recall-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If your child developed ASD after consuming baby food, Connect2Attorney can help you:  ",
    },
    "transvaginal-mesh-implant-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If your child developed ASD after consuming baby food, Connect2Attorney can help you:  ",
    },
    "pfas-forever-chemicals-lawsuit": {
      title: "Get Legal Support from Connect2Attorney",
      description:
        "You don’t have to fight this battle alone. If your child developed ASD after consuming baby food, Connect2Attorney can help you:  ",
    },
  };

  const supportData = SUPPORT_BY_SLUG[slug];

  return (
    <main className="min-h-screen">
      <LawsuitsHeroCard heroTitle={heroTitle} heroImage={heroImage} />

      {LEGAL_PAGE_BY_SLUG[slug] ?? null}

      {timelineConfig && (
        <TimeLineCard
          title={timelineConfig.title}
          timelineData={timelineConfig.data}
        />
      )}

      {supportData && (
        <SupportCard
          title={supportData.title}
          description={supportData.description}
        />
      )}

      <FaqSection faqData={faqData} />
      <ContactCard />
      <Footer />
    </main>
  );
}
