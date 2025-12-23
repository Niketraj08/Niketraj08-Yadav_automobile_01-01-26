import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiUpload, FiBriefcase } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

function JobApplication() {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('job');

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: jobId || "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    noticePeriod: "",
    portfolioUrl: "",
    linkedinUrl: "",
    whyInterested: "",
    skills: "",
    resumeLink: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobPositions = [
    { id: "senior-full-stack", title: "Senior Full Stack Developer" },
    { id: "frontend-dev", title: "Frontend Developer" },
    { id: "backend-dev", title: "Backend Developer" },
    { id: "ui-ux-designer", title: "UI/UX Designer" },
    { id: "devops-engineer", title: "DevOps Engineer" },
    { id: "mobile-dev", title: "Mobile App Developer (React Native)" },
    { id: "data-scientist", title: "Data Scientist" },
    { id: "product-manager", title: "Product Manager" },
    { id: "qa-engineer", title: "QA Engineer" },
    { id: "technical-writer", title: "Technical Content Writer" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'a9f047c2-1aa2-4f4c-b16f-8041fd53df7a');
    formDataToSend.append('name', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('current_company', formData.currentCompany || 'N/A');
    formDataToSend.append('expected_salary', formData.expectedSalary || 'N/A');
    formDataToSend.append('notice_period', formData.noticePeriod || 'N/A');
    formDataToSend.append('portfolio_url', formData.portfolioUrl || 'N/A');
    formDataToSend.append('linkedin_url', formData.linkedinUrl || 'N/A');
    formDataToSend.append('why_interested', formData.whyInterested);
    formDataToSend.append('skills', formData.skills);
    formDataToSend.append('access_key', '5b795b50-8566-4804-a6d3-e5ea3010533f');
    formDataToSend.append('resume_link', formData.resumeLink || 'N/A');
    formDataToSend.append('subject', `Job Application: ${formData.position} - ${formData.fullName}`);
    formDataToSend.append('from_name', 'AstraCognix Job Application');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="flex min-h-screen items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
            >
              <FiCheck className="h-8 w-8 text-green-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-900">Application Submitted!</h2>
            <p className="mt-3 text-slate-600">
              Thank you for your interest in joining AstraCognix. We'll review your application and get back to you within 3-5 business days.
            </p>
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white shadow-lg hover:bg-primary/90"
            >
              Back to Careers
            </motion.a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <FiBriefcase className="h-12 w-12 text-primary" />
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Join Our Team</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Apply for a Position</h1>
            <p className="mt-4 text-lg text-slate-200">
              Take the next step in your career with AstraCognix.
              We're excited to learn about your experience and aspirations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-slate-50 p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Job Application</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="job-fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="job-fullName"
                    name="fullName"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="job-email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="job-email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="job-phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="job-phone"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="job-position" className="block text-sm font-medium text-slate-700 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="job-position"
                    name="position"
                    autoComplete="organization-title"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a position</option>
                    {jobPositions.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="job-experience" className="block text-sm font-medium text-slate-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="job-experience"
                    name="experience"
                    autoComplete="organization-title"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="7+">7+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="job-expectedSalary" className="block text-sm font-medium text-slate-700 mb-2">
                    Expected Salary (LPA)
                  </label>
                  <input
                    type="number"
                    id="job-expectedSalary"
                    name="expectedSalary"
                    autoComplete="off"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="e.g., 10"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="job-currentCompany" className="block text-sm font-medium text-slate-700 mb-2">
                    Current Company
                  </label>
                  <input
                    type="text"
                    id="job-currentCompany"
                    name="currentCompany"
                    autoComplete="organization"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Current company name"
                  />
                </div>

                <div>
                  <label htmlFor="job-noticePeriod" className="block text-sm font-medium text-slate-700 mb-2">
                    Notice Period
                  </label>
                  <select
                    id="job-noticePeriod"
                    name="noticePeriod"
                    autoComplete="off"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select notice period</option>
                    <option value="immediate">Immediate</option>
                    <option value="15-days">15 days</option>
                    <option value="30-days">30 days</option>
                    <option value="60-days">60 days</option>
                    <option value="90-days">90 days</option>
                    <option value="negotiable">Negotiable</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="job-portfolioUrl" className="block text-sm font-medium text-slate-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    id="job-portfolioUrl"
                    name="portfolioUrl"
                    autoComplete="url"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div>
                  <label htmlFor="job-linkedinUrl" className="block text-sm font-medium text-slate-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="job-linkedinUrl"
                    name="linkedinUrl"
                    autoComplete="url"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="job-resumeLink" className="block text-sm font-medium text-slate-700 mb-2">
                  Resume Link (Google Drive) *
                </label>
                <input
                  type="url"
                  id="job-resumeLink"
                  name="resumeLink"
                  autoComplete="url"
                  required
                  value={formData.resumeLink}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="https://drive.google.com/file/d/..."
                />
                <p className="mt-2 text-sm text-slate-500">Please share your resume via Google Drive link. Make sure the link is accessible.</p>
              </div>

              <div>
                <label htmlFor="job-skills" className="block text-sm font-medium text-slate-700 mb-2">
                  Technical Skills *
                </label>
                <textarea
                  id="job-skills"
                  name="skills"
                  autoComplete="off"
                  required
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g., React, Node.js, Python, AWS, etc."
                />
              </div>

              <div>
                <label htmlFor="job-whyInterested" className="block text-sm font-medium text-slate-700 mb-2">
                  Why are you interested in this position? *
                </label>
                <textarea
                  id="job-whyInterested"
                  name="whyInterested"
                  autoComplete="off"
                  required
                  value={formData.whyInterested}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your motivation and what you hope to achieve"
                />
              </div>


              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-500 hover:scale-110 hover:translate-y-[-2px] hover:shadow-xl text-white hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                  boxShadow: '0 8px 25px rgba(6, 182, 212, 0.3), 0 4px 10px rgba(14, 165, 233, 0.2)',
                  ':hover': {
                    background: 'linear-gradient(135deg, #7C3AED, #9333EA)',
                    boxShadow: '0 15px 35px rgba(6, 182, 212, 0.4), 0 5px 15px rgba(14, 165, 233, 0.25)'
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FiSend className="h-5 w-5" />
                    Submit Application
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default JobApplication;
