"use client";
import { useEffect, useState } from "react";

type VideoProps = {
  className?: string;
  style?: React.CSSProperties;
};

type DeviceType = "mobile" | "tablet" | "desktop-compact" | "desktop-expanded";

function getDevice(w: number): DeviceType {
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  if (w < 1280) return "desktop-compact";
  return "desktop-expanded";
}

// ─────────────────────────────────────────────
// Detects screen size on mount + on resize
// But only triggers re-render when the CATEGORY changes
// e.g. 1400px → 1500px = no change (both desktop-expanded)
// e.g. 1200px → 1300px = change (compact → expanded) ✅
// ─────────────────────────────────────────────
function useDeviceType() {
  const [device, setDevice] = useState<DeviceType | null>(null);

  useEffect(() => {
    // Set immediately on mount
    setDevice(getDevice(window.innerWidth));

    let lastDevice = getDevice(window.innerWidth);

    const handleResize = () => {
      const next = getDevice(window.innerWidth);
      // Only update state if the CATEGORY changed — avoids unnecessary re-renders
      if (next !== lastDevice) {
        lastDevice = next;
        setDevice(next);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}

// ─────────────────────────────────────────────
// MOBILE HERO
// ─────────────────────────────────────────────
export function MobileHeroVideo({ className, style }: VideoProps) {
  const device = useDeviceType();
  if (device !== "mobile") return null;

  return (
    <video
      autoPlay loop muted playsInline preload="auto"
      className={className ?? "absolute inset-0 w-full h-full object-cover"}
      style={style}
    >
      <source src="/herovideo.mp4" type="video/mp4" />
    </video>
  );
}

// ─────────────────────────────────────────────
// TABLET HERO
// ─────────────────────────────────────────────
export function TabletHeroVideo({ className, style }: VideoProps) {
  const device = useDeviceType();
  if (device !== "tablet") return null;

  return (
    <video
      autoPlay loop muted playsInline preload="auto"
      className={className ?? "absolute inset-0 w-full h-full object-cover"}
      style={style}
    >
      <source src="/herovideo.mp4" type="video/mp4" />
    </video>
  );
}

// ─────────────────────────────────────────────
// DESKTOP COMPACT  (lg, 1024–1279px)
// ─────────────────────────────────────────────
export function DesktopCompactVideo({ className, style }: VideoProps) {
  const device = useDeviceType();
  if (device !== "desktop-compact") return null;

  return (
    <video
      autoPlay loop muted playsInline preload="auto"
      className={className ?? "absolute inset-0 w-full h-full object-contain"}
      style={style}
    >
      <source src="/1920x860.mp4" type="video/mp4" />
    </video>
  );
}

// ─────────────────────────────────────────────
// DESKTOP EXPANDED LG  →  1280x503.mp4
// Lives inside DesktopLandingHeroExpanded (covers lg + xl+)
// ─────────────────────────────────────────────
export function DesktopExpandedVideoLG({ className, style }: VideoProps) {
  const device = useDeviceType();
  // Renders on desktop-compact (lg, shown) AND desktop-expanded (xl, hidden via CSS)
  if (device !== "desktop-compact" && device !== "desktop-expanded") return null;

  return (
    <video
      autoPlay loop muted playsInline preload="auto"
      className={className ?? "absolute inset-0 w-full h-full object-contain block lg:block xl:hidden"}
      style={style}
    >
      <source src="/1280x503.mp4" type="video/mp4" />
    </video>
  );
}

// ─────────────────────────────────────────────
// DESKTOP EXPANDED XL  →  1920x860.mp4
// ─────────────────────────────────────────────
export function DesktopExpandedVideoXL({ className, style }: VideoProps) {
  const device = useDeviceType();
  if (device !== "desktop-expanded") return null;

  return (
    <video
      autoPlay loop muted playsInline preload="auto"
      className={className ?? "absolute inset-0 w-full h-full object-cover hidden xl:block"}
      style={style}
    >
      <source src="/1920x860.mp4" type="video/mp4" />
    </video>
  );
}
