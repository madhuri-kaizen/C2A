import MassTortHero from "../components/MassTortHero";
import MassTortCard from "../components/MassTortCard";
import CasesSection2 from "../components/CasesSection2";
import MassTortInfo from "../components/MassTortInfo";
// import LegalBanner from "../components/LegalBanner";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import MassTortLegalPage from "../components/MassTortLegalPage";
const faqData = [
  {
    question: "What affects my settlement amounts?",
    answer:
      "Your settlement depends on how serious your injury is, your medical bills, lost income, and how your life has been impacted.",
  },
  {
    question: "Is there a standard payout for mass tort cases?",
    answer:
      "No, there isn’t a fixed amount. Each person’s payout is based on their unique injuries and circumstances.",
  },
  {
    question: "Can I get a settlement if my injury is minor?",
    answer:
      "Yes, you can still get a settlement. The amount may be lower, but you may still be entitled to compensation.",
  },
  {
    question: "How are punitive damages decided?",
    answer:
      "Punitive damages are awarded when the company or person acted in a reckless or harmful way. A judge or jury decides the amount.",
  },
  {
    question: "When will I know the estimated value of my case?",
    answer:
      "You’ll usually get an estimate after your attorney reviews your medical records, injury details, and how the harm has affected your life.",
  },
];


export const metadata = {
  title: "Mass Tort",
  alternates: {
    canonical: "https://connect2attorney.com/mass-tort",
  },
};


export default function MassTortPage() {
  return (
    <main className="min-h-screen">
      <MassTortHero />
      <MassTortCard />
      <CasesSection2 />
      <MassTortLegalPage />
      <MassTortInfo />
      <FaqSection faqData={faqData} />;
      <ContactCard />
      <Footer />
    </main>
  );
}
