import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/internship/program", label: "Internship", hasDropdown: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/e-learning", label: "E-Learning" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const serviceItems = [
  {
    label: "Custom Software Development",
    to: "/services/custom-software-development",
    children: [
      { label: "CRM & ERP Solutions", to: "/services/crm-erp-solutions" },
      { label: "System Integration Solutions", to: "/services/system-integration" },
      { label: "Software Consulting Solutions", to: "/services/software-consulting" },
      { label: "Fleet Management Solutions", to: "/services/fleet-management" },
      { label: "Custom CRM Development", to: "/services/custom-crm-development" },
      { label: "Real-time Tracking Systems", to: "/services/real-time-tracking" },
    ],
  },
  {
    label: "Mobile App Development",
    to: "/services/mobile-app-development",
    children: [
      { label: "Android App Development Company", to: "/services/android-app-development" },
      { label: "iOS App Development Company", to: "/services/ios-app-development" },
      { label: "Flutter App Development Company", to: "/services/flutter-app-development" },
    ],
  },
  {
    label: "Web Development Company",
    to: "/services/web-development-company",
    children: [
      { label: "AngularJS Development ", to: "/services/angularjs-development" },
     
    ],
  },
 
  { label: "Ecommerce Development", to: "/services/ecommerce-development" },
  { label: "UI/UX Designing", to: "/services/ui-ux-design" },
  {
    label: "Digital Marketing Services",
    to: "/services/digital-marketing",
    children: [
      { label: "SEO Services", to: "/services/seo-services-company" },
      { label: "Content Marketing Services", to: "/services/content-marketing-services" },
      { label: "Social Media Marketing", to: "/services/social-media-marketing" },
      { label: "Digital Marketing Consulting", to: "/services/digital-marketing-consulting" },
      { label: "Social Media Optimization", to: "/services/social-media-optimization" },
    ],
  },

  { label: "Support & Maintenance Services", to: "/services/support-and-maintenance" },

];

const internshipItems = [
  { label: "Apply for Internship", to: "/internship/apply" },
  { label: "Internship Program", to: "/internship/program" },
  { label: "Current Openings", to: "/internship/openings" },
  { label: "Internship Benefits", to: "/internship/benefits" },
  { label: "Success Stories", to: "/internship/stories" },
  { label: "Verify Certificate", to: "/internship/verify-certificate" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [mobileOpenService, setMobileOpenService] = useState(false);
  const [showInternshipDropdown, setShowInternshipDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all ${isScrolled ? "bg-slate-800 shadow-lg" : "bg-slate-800/95 backdrop-blur-sm"}`}
      style={{ position: 'fixed' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/ASC_logo_-removebg-preview.png" 
            alt="AstraCognix Solutions Pvt. Ltd." 
            className="object-contain"
            style={{ width: '188px', height: '45.6px' }}
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              link.label === "Services" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Link to={link.to} className="flex items-center gap-1 hover:text-primary transition-all duration-200 group">
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {link.label}
                      </span>
                      <motion.div
                        animate={{ rotate: showDropdown ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="group-hover:text-primary transition-colors duration-200"
                      >
                        <FiChevronDown />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.96, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -15, scale: 0.96, filter: "blur(4px)" }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                        className="absolute left-0 mt-3 w-[900px] rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl z-[101] backdrop-blur-sm"
                      >
                        <motion.div
                          className="grid grid-cols-3 gap-3"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.04,
                                delayChildren: 0.05
                              }
                            }
                          }}
                        >
                          {serviceItems.map((item, index) =>
                            item.children ? (
                              <motion.div
                                key={item.label}
                                variants={{
                                  hidden: { opacity: 0, y: 15, scale: 0.9 },
                                  visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                      type: "spring",
                                      stiffness: 200,
                                      damping: 20
                                    }
                                  }
                                }}
                                className="rounded-lg bg-slate-50 p-3 transition-all duration-300 hover:bg-slate-100 hover:shadow-lg border border-transparent hover:border-primary/20"
                                onMouseEnter={() => setHoveredService(item.label)}
                                onMouseLeave={() => setHoveredService(null)}
                                whileHover={{
                                  scale: 1.03,
                                  y: -3,
                                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                                }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                              >
                                <Link
                                  to={item.to}
                                  className="flex items-center justify-between text-sm font-semibold text-slate-900 hover:text-primary transition-all duration-200 group"
                                >
                                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    {item.label}
                                  </span>
                                  <motion.div
                                    animate={{ rotate: hoveredService === item.label ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="text-slate-500 group-hover:text-primary"
                                  >
                                    <FiChevronDown />
                                  </motion.div>
                                </Link>
                                <AnimatePresence mode="wait">
                                  {hoveredService === item.label && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0, y: -10 }}
                                      animate={{ opacity: 1, height: "auto", y: 0 }}
                                      exit={{ opacity: 0, height: 0, y: -10 }}
                                      transition={{
                                        duration: 0.3,
                                        ease: [0.4, 0, 0.2, 1],
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25
                                      }}
                                      className="mt-2 space-y-1 overflow-hidden"
                                    >
                                      {item.children.map((child, childIndex) => (
                                        <motion.div
                                          key={child.to}
                                          initial={{ opacity: 0, x: -15, scale: 0.95 }}
                                          animate={{ opacity: 1, x: 0, scale: 1 }}
                                          transition={{
                                            delay: childIndex * 0.06,
                                            duration: 0.25,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20
                                          }}
                                        >
                                          <motion.div
                                            whileHover={{ x: 4, scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <Link
                                              to={child.to}
                                              className="block text-xs text-slate-700 hover:text-primary transition-all duration-200 py-1.5 px-2.5 rounded-md hover:bg-white hover:shadow-sm border-l-2 border-transparent hover:border-primary"
                                            >
                                              {child.label}
                                            </Link>
                                          </motion.div>
                                        </motion.div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            ) : (
                              <motion.div
                                key={item.to}
                                variants={{
                                  hidden: { opacity: 0, y: 15, scale: 0.9 },
                                  visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                      type: "spring",
                                      stiffness: 200,
                                      damping: 20
                                    }
                                  }
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <Link
                                  to={item.to}
                                  className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary transition-all duration-200 hover:shadow-md border border-transparent hover:border-primary/20"
                                >
                                  {item.label}
                                </Link>
                              </motion.div>
                            ),
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.label === "Internship" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setShowInternshipDropdown(true)}
                  onMouseLeave={() => setShowInternshipDropdown(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Link to={link.to} className="flex items-center gap-1 hover:text-primary transition-all duration-200 group">
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {link.label}
                      </span>
                      <motion.div
                        animate={{ rotate: showInternshipDropdown ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="group-hover:text-primary transition-colors duration-200"
                      >
                        <FiChevronDown />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <AnimatePresence>
                    {showInternshipDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.96, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -15, scale: 0.96, filter: "blur(4px)" }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                        className="absolute left-0 mt-3 w-64 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl z-[101] backdrop-blur-sm"
                      >
                        <motion.div
                          className="space-y-2"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.04,
                                delayChildren: 0.05
                              }
                            }
                          }}
                        >
                          {internshipItems.map((item, index) => (
                            <motion.div
                              key={item.to}
                              variants={{
                                hidden: { opacity: 0, x: -15, scale: 0.9 },
                                visible: {
                                  opacity: 1,
                                  x: 0,
                                  scale: 1,
                                  transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20
                                  }
                                }
                              }}
                              whileHover={{
                                x: 5,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Link
                                to={item.to}
                                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary transition-all duration-200 hover:shadow-md border border-transparent hover:border-primary/20"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : null
            ) : (
              <Link key={link.to} to={link.to} className="hover:text-primary">
                {link.label}
              </Link>
            ),
          )}
          <Link
            to="/get-quote"
            className="rounded-full bg-primary px-4 py-2 text-white shadow-md hover:bg-primary/90"
          >
            Get a Quote
          </Link>
        </nav>
        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="mx-4 rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 shadow-card md:hidden z-[102]"
          >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              link.label === "Services" ? (
                <div key={link.to} className="border-b border-slate-700 pb-2">
                  <div className="flex items-center justify-between py-2 text-sm font-semibold text-white">
                    <Link to={link.to} onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services"
                      onClick={() => setShowDropdown((s) => !s)}
                    >
                      <FiChevronDown className={showDropdown ? "rotate-180 transition" : "transition"} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.4, 0, 0.2, 1],
                          staggerChildren: 0.03
                        }}
                        className="mt-1 space-y-1"
                      >
                        {serviceItems.map((item, index) =>
                          item.children ? (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03, duration: 0.2 }}
                              className="rounded-lg border border-slate-700 p-2 bg-slate-700/30"
                            >
                              <motion.button
                                type="button"
                                onClick={() => setMobileOpenService((s) => (s === item.label ? false : item.label))}
                                className="flex w-full items-center justify-between text-left text-sm font-semibold text-white"
                                whileTap={{ scale: 0.98 }}
                              >
                                {item.label}
                                <motion.div
                                  animate={{ rotate: mobileOpenService === item.label ? 180 : 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                  <FiChevronDown />
                                </motion.div>
                              </motion.button>
                              <AnimatePresence>
                                {mobileOpenService === item.label && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0, y: -10 }}
                                    animate={{ opacity: 1, height: "auto", y: 0 }}
                                    exit={{ opacity: 0, height: 0, y: -10 }}
                                    transition={{
                                      duration: 0.25,
                                      ease: [0.4, 0, 0.2, 1],
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 25
                                    }}
                                    className="mt-1 space-y-1 overflow-hidden"
                                  >
                                    {item.children.map((child, childIndex) => (
                                      <motion.div
                                        key={child.to}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: childIndex * 0.05,
                                          duration: 0.2
                                        }}
                                      >
                                        <Link
                                          to={child.to}
                                          onClick={() => setOpen(false)}
                                          className="block text-xs text-slate-300 hover:text-primary transition-all duration-200 py-1.5 px-2 rounded-md hover:bg-slate-700/50"
                                        >
                                          {child.label}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ) : (
                            <motion.div
                              key={item.to}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03, duration: 0.2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-slate-700 transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          ),
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.label === "Internship" ? (
                <div key={link.to} className="border-b border-slate-700 pb-2">
                  <div className="flex items-center justify-between py-2 text-sm font-semibold text-white">
                    <Link to={link.to} onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle internship options"
                      onClick={() => setShowInternshipDropdown((s) => !s)}
                    >
                      <FiChevronDown className={showInternshipDropdown ? "rotate-180 transition" : "transition"} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {showInternshipDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.4, 0, 0.2, 1],
                          staggerChildren: 0.03
                        }}
                        className="mt-1 space-y-1"
                      >
                        {internshipItems.map((item, index) => (
                          <motion.div
                            key={item.to}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03, duration: 0.2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-slate-700 transition-all duration-200"
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : null
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="block border-b border-slate-700 py-2 text-sm font-semibold text-white last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            to="/get-quote"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-4 py-2 text-center text-white shadow-md"
          >
            Get a Quote
          </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

