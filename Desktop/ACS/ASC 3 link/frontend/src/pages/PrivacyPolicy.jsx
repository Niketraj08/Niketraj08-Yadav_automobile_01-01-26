import { motion } from "framer-motion";
import { FiShield, FiEye, FiLock, FiUserCheck, FiFileText, FiMail } from "react-icons/fi";

function PrivacyPolicy() {
  const sections = [
    {
      icon: FiShield,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, company details",
        "Technical Information: IP address, browser type, device information, usage data",
        "Communication Data: Messages, inquiries, and feedback you send to us",
        "Cookie Data: Information collected through cookies and similar technologies"
      ]
    },
    {
      icon: FiEye,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To communicate with you about our services",
        "To send you updates, newsletters, and marketing communications (with consent)",
        "To improve our website and services based on usage patterns",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: FiLock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmission is encrypted using SSL/TLS protocols",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates are performed on our systems"
      ]
    },
    {
      icon: FiUserCheck,
      title: "Your Rights",
      content: [
        "Right to access the personal information we hold about you",
        "Right to rectify inaccurate or incomplete information",
        "Right to erasure of your personal data (subject to legal requirements)",
        "Right to data portability",
        "Right to object to or restrict processing of your data"
      ]
    }
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
            <FiShield className="mx-auto text-6xl text-primary mb-6" />
            <h1 className="text-4xl font-bold md:text-6xl mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use,
              and protect your personal information.
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
              AstraCognix Solutions Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              By using our website or services, you agree to the collection and use of information in accordance
              with this policy. If you do not agree with our policies and practices, please do not use our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary rounded-lg">
                    <section.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <FiFileText className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FiMail className="mx-auto text-4xl text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-xl text-slate-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="bg-slate-800 p-6 rounded-lg inline-block">
              <p className="text-lg mb-2">Email: <a href="mailto:privacy@astracognix.com" className="text-primary hover:text-primary/80">privacy@astracognix.com</a></p>
              <p className="text-lg">Phone: <a href="tel:+916202808498" className="text-primary hover:text-primary/80">+91-62028-08498</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Additional Information</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <h3 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h3>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h3 className="text-xl font-semibold mb-4">Third-Party Services</h3>
              <p className="mb-6">
                Our website may contain links to third-party websites or services that are not owned or controlled
                by us. We have no control over and assume no responsibility for the content, privacy policies,
                or practices of any third-party websites or services.
              </p>

              <h3 className="text-xl font-semibold mb-4">Children's Privacy</h3>
              <p className="mb-6">
                Our services are not intended for children under 13. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected personal
                information from a child under 13, we will take steps to remove such information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
