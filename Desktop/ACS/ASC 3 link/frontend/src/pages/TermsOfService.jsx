import { motion } from "framer-motion";
import { FiFileText, FiAlertTriangle, FiCheckCircle, FiXCircle, FiInfo, FiMail } from "react-icons/fi";

function TermsOfService() {
  const sections = [
    {
      icon: FiFileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using AstraCognix Solutions' website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our service."
      ]
    },
    {
      icon: FiCheckCircle,
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on AstraCognix Solutions' website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to decompile or reverse engineer any software contained on the website"
      ]
    },
    {
      icon: FiAlertTriangle,
      title: "Disclaimer",
      content: [
        "The materials on AstraCognix Solutions' website are provided on an 'as is' basis.",
        "AstraCognix Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, AstraCognix Solutions does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
      ]
    },
    {
      icon: FiXCircle,
      title: "Limitations",
      content: [
        "In no event shall AstraCognix Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AstraCognix Solutions' website.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
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
            <FiFileText className="mx-auto text-6xl text-primary mb-6" />
            <h1 className="text-4xl font-bold md:text-6xl mb-6">Terms of Service</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Please read these terms and conditions carefully before using our services.
              By using our website, you agree to be bound by these terms.
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
              These Terms of Service ("Terms") govern your use of the website and services provided by
              AstraCognix Solutions Pvt. Ltd. ("Company," "we," "our," or "us"). By accessing or using our
              website and services, you agree to be bound by these Terms.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              If you disagree with any part of these terms, then you may not access the service.
              These Terms apply to all visitors, users, and others who access or use our service.
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
                <div className="space-y-3">
                  {section.content.map((item, idx) => (
                    <p key={idx} className="text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Additional Terms</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FiInfo className="text-primary" />
                  User Accounts
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  When you create an account with us, you must provide information that is accurate,
                  complete, and current at all times. You are responsible for safeguarding the password
                  and for all activities that occur under your account.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FiCheckCircle className="text-primary" />
                  Intellectual Property
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  The service and its original content, features, and functionality are and will remain
                  the exclusive property of AstraCognix Solutions and its licensors. The service is protected
                  by copyright, trademark, and other laws.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FiAlertTriangle className="text-primary" />
                  Termination
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability,
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FiFileText className="text-primary" />
                  Governing Law
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of India, without regard to
                  its conflict of law provisions. Our failure to enforce any right or provision of these
                  Terms will not be considered a waiver of those rights.
                </p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Questions About Terms?</h2>
            <p className="text-xl text-slate-300 mb-8">
              If you have any questions about these Terms of Service,
              please contact us:
            </p>
            <div className="bg-slate-800 p-6 rounded-lg inline-block">
              <p className="text-lg mb-2">Email: <a href="mailto:legal@astracognix.com" className="text-primary hover:text-primary/80">legal@astracognix.com</a></p>
              <p className="text-lg">Phone: <a href="tel:+916202808498" className="text-primary hover:text-primary/80">+91-62028-08498</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changes Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Changes to Terms</h2>
            <div className="prose prose-lg max-w-none text-slate-700 text-center">
              <p className="mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                If a revision is material, we will try to provide at least 30 days' notice prior to any new
                terms taking effect.
              </p>
              <p className="mb-6">
                What constitutes a material change will be determined at our sole discretion. By continuing
                to access or use our service after those revisions become effective, you agree to be bound
                by the revised terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
