import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CookieConsent from "./components/CookieConsent.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import FAQChatbot from "./components/FAQChatbot.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import Services from "./pages/Services.jsx";
import ELearning from "./pages/ELearning.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MobileAppDevelopment from "./pages/MobileAppDevelopment.jsx";
import ServiceSubPage from "./pages/ServiceSubPage.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import ServiceRouter from "./pages/ServiceRouter.jsx";
import ApplyForInternship from "./pages/ApplyForInternship.jsx";
import InternshipProgram from "./pages/InternshipProgram.jsx";
import CurrentOpenings from "./pages/CurrentOpenings.jsx";
import InternshipBenefits from "./pages/InternshipBenefits.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import Careers from "./pages/Careers.jsx";
import JobApplication from "./pages/JobApplication.jsx";
import CertificateVerification from "./pages/CertificateVerification.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import GetQuote from "./pages/GetQuote.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const target = event.target.closest("a[href^='#']");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          event.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-white text-slate-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceRouter />} />
        <Route path="/e-learning" element={<ELearning />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply" element={<JobApplication />} />
        <Route path="/internship/apply" element={<ApplyForInternship />} />
        <Route path="/internship/program" element={<InternshipProgram />} />
        <Route path="/internship/openings" element={<CurrentOpenings />} />
        <Route path="/internship/benefits" element={<InternshipBenefits />} />
        <Route path="/internship/stories" element={<SuccessStories />} />
        <Route path="/internship/verify-certificate" element={<CertificateVerification />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
      <Footer />
      <CookieConsent />
      <WhatsAppFloat />
      <FAQChatbot />
    </div>
  );
}

export default App;

