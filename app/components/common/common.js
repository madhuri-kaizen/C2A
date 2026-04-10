const ROUTE_VERTICAL_MAP = [
  // Exact / high priority mappings
  { match: /tesla-autopilot/, value: "tesla-autopilot-recall" },
  { match: /bard-powerport|powerport/, value: "bard-powerport" },
  { match: /pfas/, value: "pfas" },
  { match: /oxbryta/, value: "oxbryta" },
  { match: /afff/, value: "afff" },
  { match: /paraquat/, value: "paraquat" },
  { match: /suboxone/, value: "suboxone" },

  // Core verticals
  { match: /ozempic/, value: "ozempic" },
  { match: /talcum/, value: "talcum powder" },
  { match: /depo-provera|depoprovera/, value: "depoprovera" },
  { match: /hernia-mesh|transvaginal-mesh/, value: "hernia-mesh" },
  { match: /hair-relaxer/, value: "hair-relaxer" },
  { match: /roundup/, value: "roundup" },

  // Addiction / behavior
  { match: /social-media/, value: "social-media-addiction" },
  { match: /video-game/, value: "roblox-addiction" },
  { match: /roblox/, value: "roblox-addiction" },

  // Injury
  { match: /motor-vehicle/, value: "motor-vehicle-accidents" },
  { match: /rideshare/, value: "rideshare" },

  // Baby / toxic
  { match: /toxic-baby-food|baby-food/, value: "toxic-baby-food" },
  { match: /nec/, value: "nec" },

  // Other
  { match: /ultra/, value: "ultra-processed-food" },
  { match: /mesothelioma|meso/, value: "mesothelioma" },
  { match: /sexual-abuse/, value: "sexual-abuse" },

  // Optional / future
  { match: /dupixent/, value: "dupixent" },
  { match: /ssdi/, value: "SSDI" },
];

export const getVerticalFromCurrentPath = () => {
  if (typeof window === "undefined") return null;

  const path = window.location.pathname.toLowerCase();

  for (const { match, value } of ROUTE_VERTICAL_MAP) {
    if (match.test(path)) {
      return value;
    }
  }

  return null;
};