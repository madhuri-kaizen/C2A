"use client";

import SSDINavbar from "./ssdi/Navbar";
import Hero from "./ssdi/HeroTest";
import Dyq from "./ssdi/Dyq";
import Hta from "./ssdi/Hta";
import Fas from "./ssdi/Fas";
import Wcb from "./ssdi/Wcb";
import Gst from "./ssdi/Gst";
import Faq from "./ssdi/Faq";
import Footer from "./ssdi/Footer";
import Popup from "./ssdi/Popup";

import { useEffect, useState } from "react";

import {
  ensureMetaPixel,
  trackEventWithUserData,
} from "../utils/metaPixel";

export default function SSDILawsuit() {
  const META_PIXEL_ID = "";//
  const [htaVisible, setHtaVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("hta-section");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHtaVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-white">

      {/* POPUP (must be inside component) */}
      {/* <Popup triggerFromSection={htaVisible} /> */}

      <SSDINavbar />
      <Hero />
      <Dyq />

      {/* Hta wrapped for observer */}
      <div id="hta-section">
        <Hta />
      </div>

      <Fas />
      <Wcb />
      <Gst />
      <Faq />
      <Footer />

    </main>
  );
}