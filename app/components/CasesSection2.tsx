"use client";

import React from "react";
import { CaseCardCompact, CaseCardExpanded } from "./CaseCard";
import MobileCaseCard from "./MobileCaseCard";
import { useState } from "react";
// Define the data interface
interface CaseItem {
  id: number;
  title: string;
  image: string;
  url: string;
}

// Full list of cases to match the "24 Mass Tort Battles" visualization
const casesData: CaseItem[] = [
  {
    id: 1,
    title: "Ozempic\nLawsuit",
    image: "/sectionimg1.svg",
    url: "/mass-tort/ozempic-lawsuit",
  },
  {
    id: 2,
    title: "Mesothelioma\nLawsuit",
    image: "/sectionimg2.svg",
    url: "/mass-tort/mesotheliomaa-lawsuit",
  },
  {
    id: 3,
    title: "Roundup Cancer\nLawsuit",
    image: "/sectionimg3.svg",
    url: "/mass-tort/roundup-lawsuit",
  },
  {
    id: 4,
    title: "Talcum Powder\nLawsuit",
    image: "/sectionimg4.svg",
    url: "/mass-tort/talcum-powder-lawsuit",
  },

  {
    id: 5,
    title: "Depo-Provera\nLawsuit",
    image: "/depoo.png",
    url: "/mass-tort/depo-provera-lawsuit",
  },

  {
    id: 6,
    title: "Paraquat\nParkinson's Lawsuit",
    image: "/paraquat.svg",
    url: "/mass-tort/paraquat-lawsuit",
  },
  {
    id: 7,
    title: "Zantac Cancer\nLawsuit",
    image: "/zantac.svg",
    url: "/mass-tort/zantac-lawsuit",
  },

  {
    id: 8,
    title: "Bard PowerPort\nLawsuit",
    image: "/bard.svg",
    url: "/mass-tort/bard-powerport-lawsuit",
  },
  {
    id: 9,
    title: "NEC Baby\nFormula Lawsuit",
    image: "/nec.svg",
    url: "/mass-tort/nec-baby-formula-lawsuit",
  },

  {
    id: 10,
    title: "Hair Relaxer\nCancer Lawsuit",
    image: "/hairelaxer.svg",
    url: "/mass-tort/hair-relaxer-cancer-lawsuit",
  },
  {
    id: 11,
    title: "Suboxone\nLawsuit",
    image: "/suboxone.svg",
    url: "/mass-tort/suboxone-tooth-decay-lawsuit",
  },
  {
    id: 12,
    title: "Oxybryta Liver\nInjury Lawsuit",
    image: "/oxbryta.svg",
    url: "/mass-tort/oxbryta-lawsuit",
  },
  {
    id: 13,
    title: "Exactech Knee\nAnkle Lawsuit",
    image: "/exactech.svg",
    url: "/mass-tort/exactech-implant-recall-lawsuit",
  },
  {
    id: 14,
    title: "Elmiron Eye Damage\nLawsuit",
    image: "/elimiron.svg",
    url: "/mass-tort/elmiron-lawsuit",
  },
  {
    id: 15,
    title: "Paragard IUD\nBreakage Lawsuit",
    image: "/paragard.svg",
    url: "/mass-tort/paragard-iud-lawsuit",
  },
  {
    id: 16,
    title: "Ultra-Processed Food\n Cancer Lawsuit",
    image: "/ultrafood.svg",
    url: "/mass-tort/ultra-processed-food-lawsuit",
  },
  {
    id: 17,
    title: "Video Game Addiction Lawsuit",
    image: "/videogame.svg",
    url: "/mass-tort/ video-game-addiction-lawsuit",
  },
  {
    id: 18,
    title: "Social Media Addiction Lawsuit",
    image: "/socialmedia.svg",
    url: "/mass-tort/social-media-addiction-lawsuit",
  },

  {
    id: 19,
    title: "Roblox Addiction Lawsuit",
    image: "/roblox.svg",
    url: "/mass-tort/roblox-addiction-lawsuit",
  },
  {
    id: 20,
    title: "PFAS (Forever Chemicals) Exposure Lawsuit",
    image: "/pfas.svg",
    url: "/mass-tort/pfas-forever-chemicals-lawsuit",
  },
  {
    id: 21,
    title: "AFFF Firefighting Foam Lawsuit",
    image: "/afff.svg",
    url: "/mass-tort/afff-firefighting-foam-lawsuitt",
  },
  {
    id: 22,
    title: "Toxic Baby Food Autism Lawsuit",
    image: "/toxicbaby.svg",
    url: "/mass-tort/toxic-baby-food-autism-lawsuit",
  },
  {
    id: 23,
    title: "Philips CPAP and BiPAP Recall Lawsuit",
    image: "/philips.svg",
    url: "/mass-tort/philips-cpap-bipap-recall-lawsuit",
  },
  {
    id: 24,
    title: "Transvaginal Mesh Implant Lawsuit",
    image: "/transvaginal.svg",
    url: "/mass-tort/transvaginal-mesh-implant-lawsuit",
  },
];
const mobilecasesData: CaseItem[] = [
  {
    id: 1,
    title: "Ozempic\nLawsuit",
    image: "/Ozempicardmobile.svg",
    url: "/mass-tort/ozempic-lawsuit",
  },
  {
    id: 2,
    title: "Mesothelioma\nLawsuit",
    image: "/Mesotheliomacarddmobile.svg",
    url: "/mass-tort/mesotheliomaa-lawsuit",
  },
  {
    id: 3,
    title: "Roundup Cancer\nLawsuit",
    image: "/roundupmobile.svg",
    url: "/mass-tort/roundup-lawsuit",
  },
  {
    id: 4,
    title: "Talcum Powder\nLawsuit",
    image: "/Talcumcardmobile.svg",
    url: "/mass-tort/talcum-powder-lawsuit",
  },

  {
    id: 5,
    title: "Depo-Provera\nLawsuit",
    image: "/depomobile.svg",
    url: "/mass-tort/depo-provera-lawsuit",
  },

  {
    id: 6,
    title: "Paraquat\nParkinson's Lawsuit",
    image: "/paraquatmob.svg",
    url: "/mass-tort/paraquat-lawsuit",
  },
  {
    id: 7,
    title: "Zantac Cancer\nLawsuit",
    image: "/zantacmob.svg",
    url: "/mass-tort/zantac-lawsuit",
  },

  {
    id: 8,
    title: "Bard PowerPort\nLawsuit",
    image: "/bardmob.svg",
    url: "/mass-tort/bard-powerport-lawsuit",
  },
  {
    id: 9,
    title: "NEC Baby\nFormula Lawsuit",
    image: "/necmob.svg",
    url: "/mass-tort/nec-baby-formula-lawsuit",
  },

  {
    id: 10,
    title: "Hair Relaxer\nCancer Lawsuit",
    image: "/hairmob.svg",
    url: "/mass-tort/hair-relaxer-cancer-lawsuit",
  },
  {
    id: 11,
    title: "Suboxone\nLawsuit",
    image: "/suboxonemob.svg",
    url: "/mass-tort/suboxone-tooth-decay-lawsuit",
  },
  {
    id: 12,
    title: "Oxybryta Liver\nInjury Lawsuit",
    image: "/oxbrytamob.svg",
    url: "/mass-tort/oxbryta-lawsuit",
  },
  {
    id: 13,
    title: "Exactech Knee\nAnkle Lawsuit",
    image: "/exactechmob.svg",
    url: "/mass-tort/exactech-implant-recall-lawsuit",
  },
  {
    id: 14,
    title: "Elmiron Eye Damage\nLawsuit",
    image: "/elmironmob.svg",
    url: "/mass-tort/elmiron-lawsuit",
  },
  {
    id: 15,
    title: "Paragard IUD\nBreakage Lawsuit",
    image: "/paragardmob.svg",
    url: "/mass-tort/paragard-iud-lawsuit",
  },
  {
    id: 16,
    title: "Ultra-Processed Food\n Cancer Lawsuit",
    image: "/ultramob.svg",
    url: "/mass-tort/ultra-processed-food-lawsuit",
  },
  {
    id: 17,
    title: "Video Game Addiction Lawsuit",
    image: "/videogamemob.svg",
    url: "/mass-tort/video-game-addiction-lawsuit",
  },
  {
    id: 18,
    title: "Social Media Addiction Lawsuit",
    image: "/socialmob.svg",
    url: "/mass-tort/social-media-addiction-lawsuit",
  },
  {
    id: 19,
    title: "PFAS (Forever Chemicals) Exposure Lawsuit",
    image: "/pfasmob.svg",
    url: "/mass-tort/pfas-forever-chemicals-lawsuit",
  },
  {
    id: 20,
    title: "AFFF Firefighting Foam Lawsuit",
    image: "/afffmob.svg",
    url: "/mass-tort/afff-firefighting-foam-lawsuit",
  },
  {
    id: 21,
    title: "Toxic Baby Food Autism Lawsuit",
    image: "/toxicmob.svg",
    url: "/mass-tort/toxic-baby-food-autism-lawsuit",
  },
  {
    id: 22,
    title: "Philips CPAP and BiPAP Recall Lawsuit",
    image: "/philipsmob.svg",
    url: "/mass-tort/philips-cpap-bipap-recall-lawsuit",
  },
  {
    id: 23,
    title: "Transvaginal Mesh Implant Lawsuit",
    image: "/transvaginalmob.svg",
    url: "/mass-tort/transvaginal-mesh-implant-lawsuit",
  },
   {
    id: 24,
    title: "Roblox Addiction Lawsuit",
    image: "/robloxmob.svg",
    url: "/mass-tort/roblox-addiction-lawsuit",
  },
];

const CasesSection2: React.FC = () => {
  const totalCases = casesData.length;
  const INITIAL_COUNT = 6;
const [showAllMobile, setShowAllMobile] = useState(false);

const visibleMobileCases = showAllMobile
  ? mobilecasesData
  : mobilecasesData.slice(0, INITIAL_COUNT);


  return (
    <>
      {/* ================= MOBILE SECTION ================= */}
      <section className="block md:hidden bg-[#fff] py-12 px-4 font-sans ">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-12 text-left">
            <h2
              className="font-noto-serif font-normal capitalize text-[#fcc030] mb-2"
              style={{
                fontSize: "clamp(28px, 6vw, 60px)",
                lineHeight: "clamp(36px, 7vw, 70px)",
              }}
            >
              {totalCases} Mass Tort{" "}
              <span className="text-[#162766]"> Battles ,</span>
            </h2>

            <h2
              className="font-noto-serif font-normal capitalize text-[#162766]>"
              style={{
                fontSize: "clamp(28px, 6vw, 60px)",
                lineHeight: "clamp(36px, 7vw, 70px)",
              }}
            >
              One Trusted Ally.
            </h2>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full">
            {visibleMobileCases.map((item) => (
              <MobileCaseCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-16 flex justify-center pb-8">
            <button onClick={() => setShowAllMobile(!showAllMobile)}

              className="
                bg-[#fcc030]
                text-[#162766]
                px-10 py-4
                rounded-full
                font-urbanist
                text-[18px]
                font-semibold
                hover:bg-white
                transition-all
                duration-300
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-1
                w-full
              "
            >
              See All Services
            </button>
          </div>
        </div>
      </section>

      {/* ================= DESKTOP / TABLET SECTION ================= */}
      <section
        className="hidden md:block  py-16 px-6 lg:px-12 font-sans   md:bg-[url('/bgfolderstruturenew.svg')]
    md:bg-no-repeat
    md:bg-cover
    md:bg-left-top"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="lg:ml-18 md:text-right lg:text-left mb-16 text-left">
            <h2
              className="font-noto-serif font-normal capitalize text-[#fcc030] mb-2"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "clamp(44px, 6vw, 70px)",
              }}
            >
              {totalCases} Mass Tort Battles,
            </h2>

            <h2
              className="font-noto-serif font-normal capitalize text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "clamp(44px, 6vw, 70px)",
              }}
            >
              One Trusted Ally.
            </h2>
          </div>

          {/* Desktop / Tablet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:mt-40 lg:mt-0">
            {casesData.map((item) => (
              <CaseCardCompact
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CasesSection2;
