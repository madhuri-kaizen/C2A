import React from "react";
import Image from "next/image";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

const SitemapPage = () => {
  type BaseLink = {
    name: string;
    href: string;
    highlight?: boolean;
    active?: boolean;
    mobileOnly?: boolean;
    desktopOnly?: boolean;
  };

  const quickLinks: BaseLink[] = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Mass Tort", href: "/mass-tort" },
    { name: "Class Action", href: "/class-action" },
    { name: "Personal Injury", href: "/personal-injury" },
    { name: "Blog", href: "https://legalcaseinfo.com/" },
  ];

  const massTort: BaseLink[] = [
    {
      name: "AFFF Firefighting Foam Lawsuit",
      href: "/mass-tort/afff-firefighting-foam-lawsuit",
    },
    {
      name: "Bard PowerPort Lawsuit",
      href: "/mass-tort/bard-powerport-lawsuit",
    },
    {
      name: "Depo-Provera Lawsuit",
      href: "/mass-tort/depo-provera-lawsuit",
    },
    {
      name: "Elmiron Eye Damage Lawsuit",
      href: "/mass-tort/elmiron-lawsuit",
    },
    {
      name: "Exactech Recall Lawsuit",
      href: "/mass-tort/exactech-implant-recall-lawsuit",
    },
    {
      name: "Hair Relaxer Cancer Lawsuit",
      href: "/mass-tort/hair-relaxer-cancer-lawsuit",
    },
    {
      name: "Hernia Mesh Lawsuit",
      href: "/mass-tort/hernia-mesh-lawsuit",
    },
    {
      name: "Mesothelioma Lawsuit",
      href: "/mass-tort/mesothelioma-lawsuit",
    },
    {
      name: "NEC Baby Formula Lawsuit",
      href: "/mass-tort/nec-baby-formula-lawsuit",
    },
    {
      name: "Ozempic Lawsuit",
      href: "/mass-tort/ozempic-lawsuit",
    },
    {
      name: "Oxbryta Lawsuit",
      href: "/mass-tort/oxbryta-lawsuit",
    },
    {
      name: "Paraquat Parkinson’s Disease Lawsuit",
      href: "/mass-tort/paraquat-lawsuit/",
    },
    {
      name: "Paragard IUD Lawsuit",
      href: "/mass-tort/paragard-iud-lawsuit",
    },
    {
      name: "PFAS Exposure Lawsuit",
      href: "/mass-tort/pfas-forever-chemicals-lawsuit",
    },
    {
      name: "Philips CPAP and BiPAP Recall Lawsuit",
      href: "/mass-tort/philips-cpap-bipap-recall-lawsuit",
    },
    {
      name: "Roblox Addiction Lawsuit",
      href: "/mass-tort/roblox-addiction-lawsuit",
    },
    {
      name: "Roundup Cancer Lawsuit",
      href: "/mass-tort/roundup-lawsuit",
    },
    {
      name: "Social Media Addiction Lawsuit",
      href: "/mass-tort/social-media-addiction-lawsuit",
    },
    {
      name: "Suboxone Lawsuit",
      href: "/mass-tort/suboxone-tooth-decay-lawsuit",
    },
    {
      name: "Talcum Powder Lawsuit",
      href: "/mass-tort/talcum-powder-lawsuit",
    },
    {
      name: "Toxic Baby Food Autism Lawsuit",
      href: "/mass-tort/toxic-baby-food-autism-lawsuit",
    },
    {
      name: "Transvaginal Mesh Implant Lawsuit",
      href: "/mass-tort/transvaginal-mesh-implant-lawsuit",
    },
    {
      name: "Ultra-Processed Food Cancer Lawsuit",
      href: "/mass-tort/ultra-processed-food-lawsuit",
    },
    {
      name: "Video Game Addiction Lawsuit",
      href: "/mass-tort/video-game-addiction-lawsuit/",
    },
    {
      name: "Zantac Cancer Lawsuit",
      href: "/mass-tort/zantac-lawsuit/",
    },
  ];

  const classAction: BaseLink[] = [
    {
      name: "MacLaren Sexual Abuse Lawsuit",
      href: "/class-action/maclaren-hall-sex-abuse-lawsuit",
    },
    {
      name: "Tesla Autopilot Recall Lawsuit",
      href: "/class-action/tesla-autopilot-recall-lawsuit",
    },
  ];

  const personalInjury: BaseLink[] = [
    {
      name: "18-Wheeler Accident Lawsuit",
      href: "/personal-injury/18-wheeler-accident",
    },
    {
      name: "Motor Vehicle Accident Lawsuit",
      href: "/personal-injury/motor-vehicle-accident",
    },
    {
      name: "Rideshare Sexual Assault Lawsuit",
      href: "/personal-injury/rideshare-sexual-assault-lawsuit",
    },
    {
      name: "Sexual Abuse Lawsuit",
      href: "/personal-injury/sexual-abuse-lawsuit",
    },
    {
      name: "Slip and Fall Injury Lawsuit",
      href: "/personal-injury/slip-and-fall",
    },
  ];

  return (
    <div>
      <h1 className="font-noto-serif text-[#162766] text-[40px] md:text-[55px] ml-10">
        Sitemap
      </h1>

      <div className="w-full lg:flex lg:flex-col gap-8 md:gap-7 lg:gap-9 grid md:grid-cols-2 px-[60px] py-10">
        {/* Quick Links */}
        <div title="QUICK LINKS">
          <h3
            className="
    font-noto-serif
    text-[#F2C438]
    text-[20px]
    font-semibold
    leading-[30px]
    tracking-[1px]
    uppercase
    mb-4
  "
          >
            QUICK LINKS
          </h3>
          <div>
            <div className="flex md:flex-wrap flex-col lg:flex-row gap-x-6 gap-y-4">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`font-urbanist text-[16px] text-[#162766]
         ${link.highlight ? "text-[#F2C438] font-semibold" : "text-[#162766]"}
        `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mass Tort */}
        <div title="MASS TORT">
          <h3
            className="
    font-noto-serif
    text-[#F2C438]
    text-[20px]
    font-semibold
    leading-[30px]
    tracking-[1px]
    uppercase
    mb-4
  "
          >
            MASS TORT
          </h3>

          <div>
            <div className="flex md:flex-wrap flex-col lg:flex-row gap-x-6 gap-y-4">
              {massTort.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`font-urbanist text-[15px] transition  text-[#162766]
        `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Class Action */}
        <div title="CLASS ACTION">
          <h3
            className="
    font-noto-serif
    text-[#F2C438]
    text-[20px]
    font-semibold
    leading-[30px]
    tracking-[1px]
    uppercase
    mb-4
  "
          >
            CLASS ACTION
          </h3>
          <div>
            <div className="flex md:flex-wrap flex-col lg:flex-row gap-x-6 gap-y-4">
              {classAction.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`font-urbanist text-[15px] transition  text-[#162766]
        `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Injury */}
        <div title="PERSONAL INJURY">
          <h3
            className="
    font-noto-serif
    text-[#F2C438]
    text-[20px]
    font-semibold
    leading-[30px]
    tracking-[1px]
    uppercase
    mb-4
  "
          >
            PERSONAL INJURY
          </h3>
          <div>
            <div className="flex md:flex-wrap flex-col lg:flex-row gap-x-6 gap-y-4">
              {personalInjury.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`font-urbanist text-[15px] transition  text-[#162766]
          
        `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#162766]  rounded-3xl px-[24px] py-[40px] mx-[60px] ">
        <p className="text-white font-urbanist text-[24px] leading-[36px] text-center">
          An HTML sitemap is a webpage that lists all the pages of a website,
          usually in a hierarchical manner. It serves as a guide for visitors,
          helping them find the content they are looking for more easily. Unlike
          XML sitemaps, which are primarily designed for search engines, HTML
          sitemaps are user-friendly and accessible directly from the website.
        </p>
        <br />
        <p className="text-white font-urbanist text-[24px] leading-[36px] text-center">
          Overall, an HTML sitemap is a valuable tool for both users and search
          engines. It enhances user experience by providing an easy-to-navigate
          structure and improves SEO by helping search engines index and
          understand the site&apos;s content. Incorporating an HTML sitemap is a
          best practice for any website aiming to improve its SEO performance
          and user accessibility.
        </p>
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default SitemapPage;
