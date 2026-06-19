import Header from "./components/Header";
import Hero from "./components/Hero";
import Qualidade from "./components/Qualidade";
import QuemSomos from "./components/QuemSomos";
import Catalog from "./components/Catalog";
import BudgetCalculator from "./components/BudgetCalculator";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-rlg-text-gray antialiased selection:bg-rlg-yellow/30 selection:text-rlg-dark-blue">
      {/* Sticky Top Header Navigation */}
      <Header />

      <main>
        {/* Dynamic High-Impact Hero Cover */}
        <Hero />

        {/* Brand Properties & Quality Control Showcase */}
        <Qualidade />

        {/* Story Growth and Partnership Narrative */}
        <QuemSomos />

        {/* Comprehensive Products list and Interactive Details */}
        <Catalog />

        {/* Live Cardboard Size and pricing Estimator */}
        <BudgetCalculator />

        {/* Satisfied Clients Interactive Feedbacks carousel */}
        <Testimonials />

        {/* Instantly searchable and collapsible FAQs Accordion */}
        <FAQ />

        {/* Contact information details list with quick WhatsApp submit */}
        <Contact />
      </main>

      {/* Footer Branding elements trust badges and CNPJ */}
      <Footer />

      {/* Floating Messenger trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
