import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck } from "react-icons/fi";

function ApplyForInternship() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    domain: "",
    yearOfStudy: "",
    skills: "",
    experience: "",
    whyInterested: "",
    availability: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    formDataToSend.append('college', formData.college);
    formDataToSend.append('branch', formData.branch);
    formDataToSend.append('domain', formData.domain);
    formDataToSend.append('year_of_study', formData.yearOfStudy);
    formDataToSend.append('skills', formData.skills);
    formDataToSend.append('experience', formData.experience || 'None');
    formDataToSend.append('why_interested', formData.whyInterested);
    formDataToSend.append('access_key', '5b795b50-8566-4804-a6d3-e5ea3010533f');
    formDataToSend.append('availability', formData.availability);
    formDataToSend.append('subject', 'New Internship Application from ' + formData.fullName);
    formDataToSend.append('from_name', 'AstraCognix Internship Application');

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
            <h2 className="text-2xl font-bold text-slate-900">Application Confirmed!</h2>
            <p className="mt-3 text-slate-600">
              Your internship application has been successfully submitted and confirmed. Thank you for your interest in joining AstraCognix. We'll review your application and get back to you within 3-5 business days.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white shadow-lg hover:bg-primary/90"
            >
              Back to Home
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
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Join Our Team</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Apply for Internship</h1>
            <p className="mt-4 text-lg text-slate-200">
              Kickstart your career in technology with hands-on experience at AstraCognix Solutions.
              Join our innovative team and work on real-world projects.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Internship Application</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="internship-fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="internship-fullName"
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
                  <label htmlFor="internship-email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="internship-email"
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

              <div>
                <label htmlFor="internship-phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="internship-phone"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="internship-college" className="block text-sm font-medium text-slate-700 mb-2">
                    College/University *
                  </label>
                  <input
                    type="text"
                    id="internship-college"
                    name="college"
                    autoComplete="organization"
                    required
                    value={formData.college}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your college name"
                  />
                </div>

                <div>
                  <label htmlFor="internship-branch" className="block text-sm font-medium text-slate-700 mb-2">
                    Branch/Specialization *
                  </label>
                  <select
                    id="internship-branch"
                    name="branch"
                    autoComplete="off"
                    required
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select your branch</option>
                    <option value="computer-science">Computer Science and Engineering </option>
                    <option value="computer-science">Computer Science and Engineering (AI/ML)</option>
                    <option value="computer-science">Computer Science and Engineering ( data science)</option>
                    <option value="information-technology">Information Technology and Engineering</option>
                    <option value="electronics">Electronics and Communication Engineering</option>
                    <option value="electrical">Electrical and Electronics Engineering</option>
                    <option value="mechanical">Mechanical Engineering</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="other">Other Engineering</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="internship-domain" className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Domain *
                </label>
                <select
                  id="internship-domain"
                  name="domain"
                  autoComplete="off"
                  required
                  value={formData.domain}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select your preferred domain</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="backend">Java Programming</option>
                  <option value="backend">Python Programming</option>
                  <option value="backend">C Programming</option>
                  <option value="backend">C++ Programming</option>
                  <option value="app-dev">App Development</option>
                  <option value="mern-dev">MERN Stack Development</option>
                  <option value="mean-dev">MEAN Stack Development</option>
                  {/* <option value="data-science">Data Science</option> */}
                  <option value="machine-learning">Machine Learning</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="internship-yearOfStudy" className="block text-sm font-medium text-slate-700 mb-2">
                    Year of Study *
                  </label>
                  <select
                    id="internship-yearOfStudy"
                    name="yearOfStudy"
                    autoComplete="off"
                    required
                    value={formData.yearOfStudy}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="graduated">Graduated</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="internship-availability" className="block text-sm font-medium text-slate-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="internship-availability"
                    name="availability"
                    autoComplete="off"
                    required
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">1 month </option>
                    <option value="part-time">2 months </option>
                    {/* <option value="weekends">1 months (part time)</option>
                    <option value="flexible">2 months (Part time)</option> */}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="internship-skills" className="block text-sm font-medium text-slate-700 mb-2">
                  Technical Skills *
                </label>
                <textarea
                  id="internship-skills"
                  name="skills"
                  autoComplete="off"
                  required
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g., JavaScript, React, Python, Java, C++, etc."
                />
              </div>

              <div>
                <label htmlFor="internship-experience" className="block text-sm font-medium text-slate-700 mb-2">
                  Previous Experience (if any)
                </label>
                <textarea
                  id="internship-experience"
                  name="experience"
                  autoComplete="off"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Describe any relevant projects, internships, or coursework"
                />
              </div>

              <div>
                <label htmlFor="internship-whyInterested" className="block text-sm font-medium text-slate-700 mb-2">
                  Why are you interested in interning at AstraCognix? *
                </label>
                <textarea
                  id="internship-whyInterested"
                  name="whyInterested"
                  autoComplete="off"
                  required
                  value={formData.whyInterested}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your motivation and what you hope to learn"
                />
              </div>


              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-primary px-6 py-4 text-white shadow-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

export default ApplyForInternship;
