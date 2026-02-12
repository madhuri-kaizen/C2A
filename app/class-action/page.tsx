import ClassActionHero from "../components/ClassActionHero";
import ClassActionCard from "../components/ClassActionCard";
import LawsuitSection from "../components/LawsuitSection";
import ClassActionLegalPage from "../components/ClassActionLegalPage";
import MassTortInfo from "../components/MassTortInfo";
import FaqSection from "../components/FaqSection";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
const faqData = [
  {
    question: "How do I know if I qualify for a class action lawsuit?",
    answer:
      "You may qualify if you were harmed in the same way as a group of other people by a company, product, or service.",
  },
  {
    question: "Can I join a class action if my loss is small?",
    answer:
      "Yes. Even if your loss is small, you can join because class actions help many people with similar problems.",
  },
  {
    question: "Do I have to pay to join a class action?",
    answer:
      "No. You don’t pay anything unless the attorney wins the case and you receive money.",
  },
  {
    question: "How is compensation decided in class action lawsuits?",
    answer:
      "Once a case settles, the total amount is divided among all qualifying members. Payouts depend on the size of the group and the extent of each member’s losses.",
  },
  {
    question: "How much money can I get from a class action?",
    answer:
      "It depends on the case and how many people join. Sometimes the individual payout is smaller, but participating in a class action helps hold companies accountable for wrongdoing.",
  },
];


export const metadata = {
  title: "Class Action",
  alternates: {
    canonical: "https://connect2attorney.com/class-action",
  },
};

export default function ClassActionPage() {
  return (
    <main className="min-h-screen">
      <ClassActionHero />
      <ClassActionCard />
      <LawsuitSection />
      <ClassActionLegalPage />
      <MassTortInfo />
      <FaqSection faqData={faqData} />;
      <ContactCard />
      <Footer />
    </main>
  );
}

