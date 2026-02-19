import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Merriweather,
  Poppins,
  Playfair_Display,
  Urbanist,
  Noto_Serif,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import EnquiryButton from "./components/EnquiryButton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connect2Attorney",
  description: "Connect2Attorney - Your Trusted Legal Connection",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5F9TG6BZ');
            `,
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3N2D23T3ZR"
          strategy="afterInteractive"
          async
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3N2D23T3ZR');
    `,
          }}
        />
      </head>
      <body
        className={`
    ${geistSans.variable}
    ${geistMono.variable}
    ${inter.variable}
    ${merriweather.variable}
    ${poppins.variable}
    ${playfair.variable}
    ${urbanist.variable}
    ${notoSerif.variable} 
    ${workSans.variable}  
    antialiased
  `}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5F9TG6BZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          id="trustedform-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!(window && window.__PRERENDER_INJECTED)) {
                (function () {
                  var tf = document.createElement("script");
                  tf.type = "text/javascript";
                  tf.async = false;
                  tf.src =
                    (document.location.protocol === "https:" ? "https" : "http") +
                    "://api.trustedform.com/trustedform.js" +
                    "?field=xxTrustedFormCertUrl" +
                    "&ping_field=xxTrustedFormPingUrl" +
                    "&token_field=xxTrustedFormCertToken" +
                    "&l=" +
                    new Date().getTime() +
                    Math.random();
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(tf, s);
                })();
              }
            `,
          }}
        />
        <Navbar />
        <EnquiryButton />

        {children}

        {/*  TrustedForm NoScript Fallback */}
        <noscript>
          <img
            src="https://api.trustedform.com/ns.gif"
            alt="TrustedForm verification"
          />
        </noscript>
      </body>
    </html>
  );
}
