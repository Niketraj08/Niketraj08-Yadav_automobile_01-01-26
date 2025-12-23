import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiDatabase, FiSmartphone, FiGlobe, FiCloud, FiBarChart, FiMapPin, FiClock, FiDollarSign, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

function CurrentOpenings() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const openings = [
    {
      id: 1,
      title: "Full Stack Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      description: "Work on complete web applications from frontend to backend. Learn the full development lifecycle, database design, and deployment strategies.",
      icon: <FiGlobe className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 2,
      title: "Frontend Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git"],
      description: "Create modern, responsive user interfaces using React and modern frontend technologies. Learn state management, component architecture, and UI/UX best practices.",
      icon: <FiCode className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 3,
      title: "Backend Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Node.js", "Python", "MongoDB", "REST APIs", "Express"],
      description: "Develop robust backend services and APIs. Learn about database design, server architecture, authentication, and API development best practices.",
      icon: <FiDatabase className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 4,
      title: "App Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["React Native", "Flutter", "JavaScript", "Mobile UI/UX", "Firebase"],
      description: "Create cross-platform mobile applications for iOS and Android. Gain experience in mobile development frameworks, app deployment, and mobile-first design.",
      icon: <FiSmartphone className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 5,
      title: "MERN Stack Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
      description: "Build full-stack applications using the MERN stack. Learn modern JavaScript development, API integration, and real-time applications.",
      icon: <FiGlobe className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 6,
      title: "MEAN Stack Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["MongoDB", "Express", "Angular", "Node.js", "TypeScript"],
      description: "Develop applications using the MEAN stack with Angular. Learn TypeScript, component-based architecture, and enterprise-level application development.",
      icon: <FiGlobe className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 7,
      title: "Data Science Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Python", "Pandas", "NumPy", "SQL", "Data Visualization"],
      description: "Analyze data sets and extract meaningful insights. Learn data preprocessing, statistical analysis, and basic machine learning algorithms.",
      icon: <FiBarChart className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 8,
      title: "Machine Learning Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Jupyter"],
      description: "Work on machine learning projects and AI applications. Learn model training, evaluation, and deployment of ML solutions.",
      icon: <FiBarChart className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 9,
      title: "UI/UX Design Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
      description: "Design intuitive user interfaces and experiences. Learn design principles, user research methodologies, and modern design tools.",
      icon: <FiCode className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 10,
      title: "Other Specializations Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Problem Solving", "Learning Ability", "Communication", "Teamwork"],
      description: "Explore emerging technologies and special projects. Work on innovative solutions and gain experience in various tech domains.",
      icon: <FiCloud className="h-6 w-6" />,
      isActive: true
    },
    {
      id: 11,
      title: "Blockchain Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Cryptography"],
      description: "Dive into blockchain technology and decentralized applications. Learn about smart contracts, cryptocurrency, and Web3 development.",
      icon: <FiGlobe className="h-6 w-6" />,
      isActive: false
    },
    {
      id: 12,
      title: "Cybersecurity Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Assessment", "Security Tools"],
      description: "Learn cybersecurity fundamentals and ethical hacking techniques. Work on security assessments and implement best security practices.",
      icon: <FiCloud className="h-6 w-6" />,
      isActive: false
    },
    {
      id: 13,
      title: "DevOps Engineering Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Terraform"],
      description: "Master modern DevOps practices and cloud infrastructure. Learn containerization, automation, and scalable deployment strategies.",
      icon: <FiCloud className="h-6 w-6" />,
      isActive: false
    },
    {
      id: 14,
      title: "AI/ML Research Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "TensorFlow", "PyTorch"],
      description: "Research and develop cutting-edge AI solutions. Work on advanced machine learning models and artificial intelligence applications.",
      icon: <FiBarChart className="h-6 w-6" />,
      isActive: false
    },
    {
      id: 15,
      title: "Game Development Intern",
      type: "Full-time",
      duration: "1 month",
      location: "Remote Only",
      skills: ["Unity", "Unreal Engine", "C#", "3D Modeling", "Game Physics"],
      description: "Create interactive games and experiences. Learn game development frameworks, 3D graphics, and game design principles.",
      icon: <FiCode className="h-6 w-6" />,
      isActive: false
    }
  ];

  const stats = [
    { label: "Active Positions", value: "10", icon: <FiCode className="h-5 w-5" /> },
    { label: "Coming Soon", value: "5", icon: <FiClock className="h-5 w-5" /> },
    { label: "Total Domains", value: "15+", icon: <FiGlobe className="h-5 w-5" /> },
    { label: "Locations", value: "Remote Only", icon: <FiMapPin className="h-5 w-5" /> },
    // { label: "Stipend", value: "₹1000/project", icon: <FiDollarSign className="h-5 w-5" /> },
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
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Current Openings</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Join Our Team</h1>
            <p className="mt-4 text-lg text-slate-200">
              Explore exciting internship opportunities and kickstart your career in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings List */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Available Positions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Choose from our diverse range of internship opportunities
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openings.map((opening, index) => (
              <motion.div
                key={opening.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`rounded-2xl border p-6 shadow-lg hover:shadow-xl transition-all ${
                  opening.isActive
                    ? 'border-slate-200 bg-white hover:border-primary/20'
                    : 'border-slate-100 bg-slate-50 opacity-75'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                    opening.isActive ? 'bg-primary/10 text-primary' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {opening.icon}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    opening.isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {opening.isActive ? 'Active' : 'Coming Soon'}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">{opening.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiClock className="h-4 w-4" />
                    <span>{opening.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiMapPin className="h-4 w-4" />
                    <span>{opening.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 text-sm">{opening.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opening.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {opening.isActive && (
                  <Link
                    to="/internship/apply"
                    className="w-full inline-block text-center rounded-lg bg-primary px-4 py-2 text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Apply Now
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Application Process</h2>
            <p className="mt-4 text-lg text-slate-600">
              Simple steps to join our internship program
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Submit your application with resume and details through our online form."
              },
              {
                step: "02",
                title: "Technical Assessment",
                description: "Complete a coding challenge or technical assessment based on your profile."
              },
              {
                step: "03",
                title: "Offer Letter ",
                description: "Receive your offer letter and start your internship."
              },
              {
                step: "04",
                title: "Start Your Internship",
                description: "Begin your internship journey and gain valuable experience in your chosen domain."
              }

            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg text-slate-200 mb-8">
              Don't miss out on this opportunity to gain valuable experience and skills
            </p>
            <Link
              to="/internship/apply"
              className="rounded-full bg-primary px-8 py-4 text-white shadow-lg hover:bg-primary/90 transition-colors"
            >
              Start Your Application
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about our internship program
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Who is eligible to apply for internships?",
                answer: "Students from any branch of engineering/computer science and final year students are eligible. Fresh graduates are also welcome to apply."
              },
              {
                question: "Is the internship remote or on-site?",
                answer: "All our internships are remote-only, allowing you to work from anywhere while maintaining flexibility and work-life balance."
              },
              {
                question: "What is the duration of the internship?",
                answer: "Our standard internship duration is 1 month, but we offer flexible options based on your availability and project requirements."
              },
              {
                question: "Do I need prior experience to apply?",
                answer: "While prior experience is helpful, it's not mandatory. We look for passion, willingness to learn, and basic knowledge of your chosen domain."
              },
              {
                question: "Will I receive a certificate upon completion?",
                answer: "Yes, all interns who successfully complete their internship will receive a completion certificate and a letter of recommendation."
              },
              {
                question: "What kind of projects will I work on?",
                answer: "You'll work on real-world projects that match your chosen domain, gaining practical experience and building your portfolio."
              },
              {
                question: "Is there any stipend provided?",
                answer: "We offer performance-based stipends for exceptional interns. Details will be discussed during the selection process."
              },
              {
                question: "How long does the selection process take?",
                answer: "The entire selection process typically takes 3-5 business days from application submission to final offer."
              },
              {
                question: "Can I apply for multiple domains?",
                answer: "Yes, you can apply for multiple domains by submitting separate applications for each domain you're interested in."
              },
              {
                question: "What tools and technologies will I learn?",
                answer: "You'll learn industry-standard tools and technologies relevant to your chosen domain, with hands-on guidance from our mentors."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <FiChevronDown className="h-5 w-5 text-slate-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentOpenings;
