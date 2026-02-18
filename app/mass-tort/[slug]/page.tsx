import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MassTortClient from "./MassTortClient";

type PageProps = {
  params: Promise<{
    slug: MassTortSlug;
  }>;
};

type MassTortSlug = (typeof VALID_SLUGS)[number];

export const VALID_SLUGS = [
  "ozempic-lawsuit",
  "mesothelioma-lawsuit",
  "depo-provera-lawsuit",
  "roundup-lawsuit",
  "talcum-powder-lawsuit",
  "roblox-addiction-lawsuit",
  "hernia-mesh-lawsuit",
  "social-media-addiction-lawsuit",
  "video-game-addiction-lawsuit",
  "paraquat-lawsuit",
  "zantac-lawsuit",
  "bard-powerport-lawsuit",
  "nec-baby-formula-lawsuit",
  "hair-relaxer-cancer-lawsuit",
  "suboxone-tooth-decay-lawsuit",
  "oxbryta-lawsuit",
  "exactech-implant-recall-lawsuit",
  "elmiron-lawsuit",
  "paragard-iud-lawsuit",
  "ultra-processed-food-lawsuit",
  "afff-firefighting-foam-lawsuit",
  "toxic-baby-food-autism-lawsuit",
  "philips-cpap-bipap-recall-lawsuit",
  "transvaginal-mesh-implant-lawsuit",
  "pfas-forever-chemicals-lawsuit",
] as const;

export default async function Page({ params }: PageProps) {
  const { slug } = await params; //  REQUIRED

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  return <MassTortClient slug={slug as MassTortSlug} />;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params; //  REQUIRED

  const titleMap: Record<string, string> = {
    "ozempic-lawsuit": "Ozempic Lawsuit – Side Effects, Claims & Legal Help",
    "mesothelioma-lawsuit":
      "Mesothelioma Lawsuit – Asbestos Exposure & Compensation",
    "depo-provera-lawsuit": "Depo Provera Lawsuit – Brain Tumor Claims",
    "roundup-lawsuit": "Roundup Lawsuit – Cancer Claims & Settlements",
    "talcum-powder-lawsuit": "Talcum Powder Lawsuit – Ovarian Cancer Claims",
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

  if (!titleMap[slug]) {
    return {
      title: "Mass Tort Lawsuits",
      alternates: {
        canonical: "https://connect2attorney.com/mass-tort",
      },
    };
  }

  return {
    title: titleMap[slug],
    alternates: {
      canonical: `https://connect2attorney.com/mass-tort/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }));
}
