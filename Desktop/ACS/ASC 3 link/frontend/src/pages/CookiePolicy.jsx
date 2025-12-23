import { motion } from "framer-motion";
import { FiSettings, FiEye, FiShield, FiToggleLeft, FiMail } from "react-icons/fi";
import { FaCookieBite } from "react-icons/fa";

function CookiePolicy() {
  const cookieTypes = [
    {
      icon: FaCookieBite,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      purpose: "Enable core functionality like security, network management, and accessibility.",
      duration: "Session or persistent (varies)"
    },
    {
      icon: FiSettings,
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      purpose: "Remember choices you make and provide enhanced features.",
      duration: "Usually 1 year"
    },
    {
      icon: FiEye,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      purpose: "Collect information about usage to improve our services.",
      duration: "Usually 2 years"
    },
    {
      icon: FiShield,
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant advertisements.",
      purpose: "Deliver personalized advertising and measure campaign effectiveness.",
      duration: "Usually 1-2 years"
    }
  ];

  const manageCookies = [
    "Click on the cookie settings link in our website footer",
    "Use your browser settings to control cookies",
    "Opt out through third-party tools and platforms",
    "Contact us directly to manage your preferences"
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FaCookieBite className="mx-auto text-6xl text-primary mb-6" />
            <h1 className="text-4xl font-bold md:text-6xl mb-6">Cookie Policy</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              This Cookie Policy explains how AstraCognix Solutions uses cookies and similar technologies
              to recognize you when you visit our website.
            </p>
            <div className="text-sm text-slate-300">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-slate-700 leading-relaxed mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit
              our website. They allow us to remember your preferences and improve your browsing experience.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              By using our website, you consent to the use of cookies in accordance with this Cookie Policy.
              If you do not agree to the use of cookies, please disable them in your browser settings or refrain
              from using our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Types of Cookies We Use</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We use different types of cookies for various purposes. You can control and manage
              these cookies through your browser settings.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <cookie.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cookie.title}</h3>
                </div>
                <p className="text-slate-700 mb-3">{cookie.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-900">Purpose:</span>
                    <span className="text-slate-700">{cookie.purpose}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-900">Duration:</span>
                    <span className="text-slate-700">{cookie.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <FiToggleLeft className="mx-auto text-4xl text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Managing Your Cookies</h2>
              <p className="text-lg text-slate-600">
                You have several options to control and manage cookies on our website:
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {manageCookies.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-slate-700">{method}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third-party Cookies */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Third-Party Cookies</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="mb-6">
                Some cookies on our website are set by third-party services that appear on our pages.
                We have no control over these cookies, and they are subject to the respective third
                party's privacy policy.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Examples of Third-Party Services:</h3>
                <ul className="space-y-2">
                  <li>• Google Analytics (website analytics)</li>
                  <li>• Social media platforms (sharing buttons)</li>
                  <li>• Payment processors (if applicable)</li>
                  <li>• Live chat services (customer support)</li>
                </ul>
              </div>

              <p className="mb-6">
                We recommend reviewing the privacy policies of these third-party services to understand
                how they use cookies and how you can control them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Consent */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FiShield className="mx-auto text-4xl text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Your Cookie Consent</h2>
            <p className="text-xl text-slate-300 mb-8">
              By continuing to use our website, you consent to our use of cookies as described in this policy.
              You can withdraw your consent at any time by adjusting your browser settings or contacting us.
            </p>

            <div className="bg-slate-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Cookie Preferences</h3>
              <p className="text-slate-300 mb-4">
                You can manage your cookie preferences through the cookie banner that appears when you first visit our website,
                or by using the settings link in our website footer.
              </p>
              <button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Manage Cookie Settings
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FiMail className="mx-auto text-4xl text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-xl text-slate-600 mb-8">
              If you have any questions about our use of cookies or this Cookie Policy,
              please contact us:
            </p>
            <div className="bg-white p-6 rounded-lg inline-block shadow-md">
              <p className="text-lg mb-2">Email: <a href="mailto:privacy@astracognix.com" className="text-primary hover:text-primary/80">privacy@astracognix.com</a></p>
              <p className="text-lg">Phone: <a href="tel:+916202808498" className="text-primary hover:text-primary/80">+91-62028-08498</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Policy Updates</h2>
            <div className="prose prose-lg max-w-none text-slate-700 text-center">
              <p className="mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or
                for other operational, legal, or regulatory reasons. We will notify you of any material
                changes by updating the "Last updated" date at the top of this policy.
              </p>
              <p className="mb-6">
                We encourage you to review this Cookie Policy periodically to stay informed about our
                cookie practices and your options.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CookiePolicy;
