import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      // Class Action Hub
      {
        source: "/other-class-action",
        destination: "/class-action",
        permanent: true,
      },
      // Contact
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },

      // Mesothelioma
      {
        source: "/mesothelioma-lawsuit-attorney",
        destination: "/mass-tort/mesothelioma-lawsuit",
        permanent: true,
      },
      // Roundup
      {
        source: "/mass-tort/roundup-lawsuit-attorney",
        destination: "/mass-tort/roundup-lawsuit",
        permanent: true,
      },

      // Tesla
      {
        source: "/other-class-action/tesla-recall",
        destination: "/class-action/tesla-autopilot-recall-lawsuit",
        permanent: true,
      },

      // MacLaren Hall
      {
        source: "/other-class-action/maclaren-hall-sex-abuse",
        destination: "/class-action/maclaren-hall-sex-abuse-lawsuit",
        permanent: true,
      },

      // Motor Vehicle
      {
        source: "/personal-injury/auto-injury-lawyers",
        destination: "/personal-injury/motor-vehicle-accident",
        permanent: true,
      },

      // Slip and Fall
      {
        source: "/personal-injury/slip-and-fall-lawyer",
        destination: "/personal-injury/slip-and-fall",
        permanent: true,
      },

      // Truck Accident
      {
        source: "/personal-injury/truck-accident-lawsuit",
        destination: "/personal-injury/18-wheeler-accident",
        permanent: true,
      },
      // Rideshare Sexual Assault
      {
        source: "/other-class-action/rideshare-sexual-lawsuit",
        destination: "/personal-injury/rideshare-sexual-assault-lawsuit",
        permanent: true,
      },


      // Hernia Mesh Class Action
      {
        source: "/mass-tort/hernia-mesh-class-action-lawsuit",
        destination: "/mass-tort/hernia-mesh-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/hernia-mesh-class-action-lawsuit",
        destination: "/mass-tort/hernia-mesh-lawsuit",
        permanent: true,
      },
      {
        source: "/mass-tort/paraquat-litigation",
        destination: "/mass-tort/paraquat-lawsuit",
        permanent: true,
      },
      {
        source: "/mass-tort/video-game-addiction",
        destination: "/mass-tort/video-game-addiction-lawsuit",
        permanent: true,
      },
      {
        source: "/mass-tort/social-media-addiction",
        destination: "/mass-tort/social-media-addiction-lawsuit",
        permanent: true,
      },
      {
        source: "/mass-tort/bard-powerport-lawsuit-ats",
        destination: "/mass-tort/bard-powerport-lawsuit",
        permanent: true,
      },
      {
        source: "/mass-tort/nec-baby-food-lawsuit",
        destination: "/mass-tort/nec-baby-formula-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/hair-relaxer",
        destination: "/mass-tort/hair-relaxer-cancer-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/exactech",
        destination: "/mass-tort/exactech-implant-recall-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/paragard-iud-lawsuits",
        destination: "/mass-tort/paragard-iud-lawsuit",
        permanent: true,
      },


      {
        source: "/mass-tort/ultra-processed-foods-lawsuit",
        destination: "/mass-tort/ultra-processed-food-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/toxic-baby-food-lawsuit",
        destination: "/mass-tort/toxic-baby-food-autism-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/transvaginal-mesh-lawsuit",
        destination: "/mass-tort/transvaginal-mesh-implant-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/philips-cpap-lawsuit",
        destination: "/mass-tort/philips-cpap-bipap-recall-lawsuit",
        permanent: true,
      },

      {
        source: "/mass-tort/pfas-water-contamination-lawsuit",
        destination: "/mass-tort/pfas-forever-chemicals-lawsuit",
        permanent: true,
      },

    ];
  },
};

export default nextConfig;
