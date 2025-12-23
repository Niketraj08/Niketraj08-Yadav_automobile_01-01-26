import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowUp, FiCheck, FiX } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // null, 'success', 'error'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear any previous status when user starts typing
    if (subscriptionStatus) {
      setSubscriptionStatus(null);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubscriptionStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setSubscriptionStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the email to your newsletter service
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate success (you can replace this with actual API integration)
      console.log('Newsletter subscription:', email);

      setSubscriptionStatus('success');
      setEmail('');

      // Clear success message after 5 seconds
      setTimeout(() => setSubscriptionStatus(null), 5000);

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Company Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/ASC_logo_-removebg-preview.png"
                alt="AstraCognix Solutions Pvt. Ltd."
                className="h-12 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              AstraCognix Solutions
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into
              digital reality through innovative software development, AI integration, and cloud solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaGithub, href: "#", label: "GitHub" },
                { icon: FaInstagram, href: "https://www.instagram.com/astracognix?igsh=MXZxbHZkc2hodDVlNg%3D%3D", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              {[
                { to: "/#home", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Link
              to="/services"
              className="text-lg font-semibold mb-6 text-white hover:text-primary transition-colors duration-300 inline-block"
            >
              Our Services
            </Link>
            <div className="space-y-3">
              {[
                { name: "Custom Software Development", path: "/services/custom-software-development" },
                { name: "Mobile App Development", path: "/services/mobile-app-development" },
                { name: "Web Development", path: "/services/web-development-company" },
                { name: "AI/ML Solutions", path: "/services" }, // fallback to main services page
                { name: "Cloud & DevOps", path: "/services" }, // fallback to main services page
                { name: "Digital Marketing", path: "/services/digital-marketing" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" }
              ].map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMail className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-300 text-sm">Email Us</p>
                  <a
                    href="mailto:astracognixsolutions@gmail.com"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    astracognixsolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-300 text-sm">Call Us</p>
                  <a
                    href="tel:+916202808498"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    +91-62028-08498
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-300 text-sm">Location</p>
                  <p className="text-white">Bhubaneswar, Odisha 752054</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white">Stay Updated</h5>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="newsletter-email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email"
                    disabled={isSubmitting}
                    className={`flex-1 px-3 py-2 bg-slate-800 border rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                      subscriptionStatus === 'error'
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:border-primary focus:ring-primary'
                    }`}
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                      isSubmitting
                        ? 'bg-slate-600 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </>
                    ) : subscriptionStatus === 'success' ? (
                      <>
                        <FiCheck className="text-green-400" size={16} />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </motion.button>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {subscriptionStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-green-400 text-xs"
                    >
                      <FiCheck size={14} />
                      <span>Successfully subscribed! Check your email for confirmation.</span>
                    </motion.div>
                  )}

                  {subscriptionStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-red-400 text-xs"
                    >
                      <FiX size={14} />
                      <span>Please enter a valid email address.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-slate-700/50">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} AstraCognix Solutions Pvt. Ltd. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-primary/25 z-50"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

