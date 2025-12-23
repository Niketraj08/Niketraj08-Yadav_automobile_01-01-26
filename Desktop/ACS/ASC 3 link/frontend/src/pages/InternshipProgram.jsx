import { motion } from "framer-motion";
import { FiCode, FiUsers, FiTrendingUp, FiAward, FiCalendar, FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";
import { whyUs } from "../data/siteContent.js";

function InternshipProgram() {
  const programFeatures = [
    {
      icon: <FiCode className="h-8 w-8" />,
      title: "Hands-on Development",
      description: "Work on real-world projects using cutting-edge technologies like React, Node.js, Python, and cloud platforms."
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Mentorship Program",
      description: "Get guidance from experienced developers and learn industry best practices throughout your internship."
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: "Skill Development",
      description: "Enhance your technical skills through workshops, code reviews, and participation in agile development processes."
    },
    {
      icon: <FiAward className="h-8 w-8" />,
      title: "Certificate & Recognition",
      description: "Receive a completion certificate and letter of recommendation upon successful completion of the program."
    }
  ];

  const programDetails = [
    {
      phase: "Week 1-2",
      title: "Orientation & Training",
      description: "Introduction to company culture, tools, and technologies. Basic training on development workflows."
    },
    {
      phase: "Week 3-6",
      title: "Project Development",
      description: "Work on assigned projects under mentor supervision. Learn through hands-on coding and problem-solving."
    },
    {
      phase: "Week 7-8",
      title: "Advanced Projects",
      description: "Take on more complex tasks and contribute to live projects. Participate in code reviews and team meetings."
    }
  ];

  const eligibilityCriteria = [
    "Currently pursuing Bachelor's or Master's degree in Computer Science, IT, or related fields",
    "Knowledge of at least one programming language (JavaScript, Python, Java, C++, etc.)",
    "Strong problem-solving skills and eagerness to learn",
    "Good communication skills and ability to work in a team",
    "Minimum commitment of 6-8 weeks"
  ];

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
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Internship Program</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Shape Your Future in Tech</h1>
            <p className="mt-4 text-lg text-slate-200">
              Our comprehensive internship program is designed to provide you with real-world experience,
              mentorship, and the skills needed to excel in the technology industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Program Overview</h2>
            <p className="mt-4 text-lg text-slate-600">
              A structured 8-week program that combines learning, development, and professional growth
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-2xl bg-slate-50 p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Program Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">
              A structured approach to learning and development over 8 weeks
            </p>
          </motion.div>

          <div className="space-y-8">
            {programDetails.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                  <FiCalendar className="h-6 w-6" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">{phase.title}</h3>
                  </div>
                  <p className="text-slate-600">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Eligibility Criteria</h2>
            <p className="mt-4 text-lg text-slate-600">
              Who can apply for our internship program
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <FiTarget className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Internship Program */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Internship Program</h2>
            <p className="mt-4 text-lg text-slate-600">
              Experience excellence in every aspect of your internship journey
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-slate-200 mb-8">
              Join AstraCognix and gain valuable experience in the tech industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/internship/apply"
                className="rounded-full bg-primary px-8 py-4 text-white shadow-lg hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/internship/benefits"
                className="rounded-full border border-white/30 px-8 py-4 text-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
              <Link
                to="/internship/verify-certificate"
                className="rounded-full border border-white/30 px-8 py-4 text-white hover:bg-white/10 transition-colors"
              >
                Verify Certificate
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default InternshipProgram;
