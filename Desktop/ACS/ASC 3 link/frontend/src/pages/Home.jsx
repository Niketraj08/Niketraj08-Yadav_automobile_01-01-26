import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiCode, FiSmartphone, FiGlobe, FiTrendingUp, FiUsers, FiAward, FiStar, FiBriefcase } from "react-icons/fi";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";
import HowWeWork from "../components/HowWeWork.jsx";
import TechStack from "../components/TechStack.jsx";
import Contact from "../components/Contact.jsx";
import { services } from "../data/siteContent.js";

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <HowWeWork />
      <TechStack />
      <Contact />
    </main>
  );
}

export default Home;

