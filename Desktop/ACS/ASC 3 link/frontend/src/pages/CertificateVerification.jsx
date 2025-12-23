import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCheckCircle, FiXCircle, FiAward, FiCalendar, FiUser, FiMail, FiDownload } from "react-icons/fi";

function CertificateVerification() {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock certificate data - in a real app, this would come from an API
  const mockCertificates = {
    "ACS2024001": {
      id: "ACS2024001",
      internName: "Niket Raj",
      program: "Web Development",
      completionDate: "2024-12-15",
      status: "valid",
      email: "niketrajkvs@email.com",

      duration: "4 weeks",
      grade: "Excellent"
    },
    "ACS2024002": {
      id: "ACS2024002",
      internName: "Ananya Gupta",
      program: "Frontend Development",
      completionDate: "2024-11-30",
      status: "valid",
      email: "ananya.gupta@email.com",
      mentor: "Vikram Rao",
      duration: "6 weeks",
      grade: "Outstanding"
    },
    "ACS2024003": {
      id: "ACS2024003",
      internName: "Arjun Patel",
      program: "Backend Development",
      completionDate: "2024-10-20",
      status: "valid",
      email: "arjun.patel@email.com",
      
      duration: "8 weeks",
      grade: "Good"
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setIsLoading(true);
    setVerificationResult(null);

    // Simulate API call delay
    setTimeout(() => {
      const result = mockCertificates[certificateId.trim().toUpperCase()];
      if (result) {
        setVerificationResult({ ...result, found: true });
      } else {
        setVerificationResult({ found: false, message: "Certificate not found. Please check the ID and try again." });
      }
      setIsLoading(false);
    }, 1500);
  };

  const resetVerification = () => {
    setCertificateId("");
    setVerificationResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <FiAward className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Certificate Verification</h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Verify the authenticity of AstraCognix internship certificates.
              Enter the certificate ID to check validity and view certificate details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Verify Certificate</h2>
              <p className="text-slate-600">
                Enter the certificate ID found on your internship certificate
              </p>
            </div>

            <form onSubmit={handleVerification} className="space-y-6">
              <div>
                <label htmlFor="certificate-id" className="block text-sm font-medium text-slate-700 mb-2">
                  Certificate ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="certificate-id"
                    name="certificateId"
                    autoComplete="off"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                    placeholder="e.g., ACS2024001"
                    className="w-full pl-4 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary uppercase font-mono text-sm"
                    required
                  />
                  <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Certificate IDs are case-insensitive and typically start with "ACS"
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || !certificateId.trim()}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <FiSearch className="h-5 w-5" />
                    Verify Certificate
                  </>
                )}
              </button>
            </form>

            {/* Verification Result */}
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 p-6 rounded-lg border"
              >
                {verificationResult.found ? (
                  <div className="border-l-4 border-green-500 bg-green-50">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 ${verificationResult.status === 'valid' ? 'text-green-500' : 'text-red-500'}`}>
                        {verificationResult.status === 'valid' ? (
                          <FiCheckCircle className="h-8 w-8" />
                        ) : (
                          <FiXCircle className="h-8 w-8" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">
                            Certificate Verified
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            VALID
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <FiUser className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-600">{verificationResult.internName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiAward className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-600">{verificationResult.program}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiCalendar className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-600">
                              Completed: {new Date(verificationResult.completionDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiMail className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-600">{verificationResult.email}</span>
                          </div>
                        </div>

                        <div className="bg-white p-3 rounded border mb-4">
                          <div className="text-sm text-slate-600">
                            <strong>Mentor:</strong> {verificationResult.mentor} |
                            <strong> Duration:</strong> {verificationResult.duration} |
                            <strong> Grade:</strong> {verificationResult.grade}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          {verificationResult.id === 'ACS2024001' ? (
                            <a
                              href="https://www.canva.com/design/DAG8JQzMWTU/I6iAY4Fiaz5zVF_FdDuPqg/view?utm_content=DAG8JQzMWTU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcca3b82954"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                              <FiDownload className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                              <span className="relative z-10">View Certificate</span>
                              <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                            </a>

                            // add second person cartificate 
                          ) : verificationResult.id === 'ACS2024002' ? (
                            <a
                              href="https://www.canva.com/design/YOUR_CANVA_LINK_HERE"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                              <FiDownload className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                              <span className="relative z-10">View Certificate</span>
                              <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                            </a>
                  //end
// start 3 person 
                          ) : verificationResult.id === 'ACS2024003' ? (
                            <a
                              href="https://www.canva.com/design/YOUR_CANVA_LINK_HERE"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                              <FiDownload className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                              <span className="relative z-10">View Certificate</span>
                              <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                            </a>

                            // end 

                          ) : (
                            <button
                              onClick={() => alert('Certificate viewing will be available soon. Contact support for assistance.')}
                              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                              <FiDownload className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                              <span className="relative z-10">View Certificate</span>
                              <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FiXCircle className="h-6 w-6 text-red-500" />
                      <div>
                        <h3 className="font-semibold text-red-800">Certificate Not Found</h3>
                        <p className="text-sm text-red-600 mt-1">{verificationResult.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center mt-6">
                  <button
                    onClick={resetVerification}
                    className="text-primary hover:text-primary/80 font-medium text-sm"
                  >
                    Verify Another Certificate
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">How to Verify</h2>
            <p className="text-slate-600 mt-4">
              Follow these simple steps to verify an AstraCognix internship certificate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Locate Certificate ID",
                description: "Find the certificate ID on the bottom right corner of your certificate. It typically starts with 'ACS' followed by numbers."
              },
              {
                step: "02",
                title: "Enter ID",
                description: "Type or paste the certificate ID in the verification field above. The ID is case-insensitive."
              },
              {
                step: "03",
                title: "Verify Details",
                description: "Click verify to check authenticity. Valid certificates will show intern details, completion date, and mentor information."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-slate-200 mb-8">
              If you have any questions about certificate verification or need assistance,
              please contact our support team.
            </p>
            <a
              href="mailto:astracognix@gmail.com"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <FiMail className="mr-2 h-5 w-5" />
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CertificateVerification;
