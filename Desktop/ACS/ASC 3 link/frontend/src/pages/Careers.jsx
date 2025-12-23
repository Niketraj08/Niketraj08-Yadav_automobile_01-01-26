import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMapPin, FiClock, FiDollarSign, FiUsers, FiBriefcase, FiArrowRight, FiCheck } from "react-icons/fi";

function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-1 years / Freshers welcome",
      department: "Engineering",
      description: "Start your career in frontend development! Learn and apply modern web technologies to create beautiful user interfaces. Perfect for fresh graduates and coding bootcamp graduates.",
      requirements: [
        "Basic knowledge of HTML, CSS, and JavaScript",
        "Understanding of programming fundamentals",
        "Eagerness to learn and passion for web development",
        "Basic computer science knowledge (preferred)"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Mentorship program", "Learning resources", "Career growth opportunities"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Engineering",
      description: "Create stunning user interfaces and experiences using modern frontend technologies. Work on real projects and collaborate with senior developers to deliver exceptional web applications.",
      requirements: [
        "0-2 years of frontend development experience",
        "Knowledge of HTML, CSS, JavaScript, and React",
        "Understanding of responsive design principles",
        "Basic knowledge of version control (Git)"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Learning allowance", "Team outings", "Performance bonuses"]
    },
    {
      id: 3,
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Engineering",
      description: "Build robust backend systems and APIs for modern web applications. Learn server-side development, databases, and API design in a supportive environment perfect for career starters.",
      requirements: [
        "0-2 years of backend development experience",
        "Basic knowledge of Node.js, Python, or Java",
        "Understanding of databases (SQL/NoSQL)",
        "Basic knowledge of REST APIs"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Learning allowance", "Certification support", "Career advancement"]
    },
    {
      id: 4,
      title: "Junior Frontend Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-1 years / Freshers welcome",
      department: "Engineering",
      description: "Begin your journey in frontend development with hands-on experience! Work on exciting projects while learning from experienced mentors. Ideal for recent graduates looking to build their career in tech.",
      requirements: [
        "Basic understanding of HTML, CSS, JavaScript",
        "Familiarity with any programming language",
        "Strong problem-solving skills",
        "Willingness to learn and adapt quickly"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Mentorship program", "Skill development workshops", "Growth opportunities"]
    },
    {
      id: 5,
      title: "Angular Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Engineering",
      description: "Build dynamic and scalable web applications using Angular framework. Learn modern frontend architectures and deliver high-performance user experiences.",
      requirements: [
        "Basic knowledge of JavaScript and TypeScript",
        "Understanding of Angular fundamentals",
        "Eagerness to learn modern web development",
        "Basic knowledge of HTML and CSS"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Angular training", "Tech conferences", "Career growth"]
    },
    {
      id: 6,
      title: "Python Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Engineering",
      description: "Develop robust backend systems and data processing applications using Python. Learn frameworks like Django, Flask, and work with databases.",
      requirements: [
        "Basic knowledge of Python programming",
        "Understanding of data structures",
        "Interest in backend development",
        "Basic knowledge of databases"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Python certifications", "Learning resources", "Project variety"]
    },
    {
      id: 7,
      title: "React Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Engineering",
      description: "Create interactive and responsive user interfaces using React. Build modern web applications with component-based architecture.",
      requirements: [
        "Basic knowledge of JavaScript and React",
        "Understanding of modern web development",
        "Interest in frontend technologies",
        "Basic knowledge of HTML and CSS"
      ],
      benefits: ["Health insurance", "Flexible work hours", "React workshops", "Open source opportunities", "Innovation focus"]
    },
    {
      id: 8,
      title: "Android App Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Engineering",
      description: "Develop native Android applications using Kotlin and Java. Create mobile experiences that users love, from concept to Google Play deployment.",
      requirements: [
        "Basic knowledge of Java or Kotlin",
        "Understanding of mobile app development",
        "Interest in Android platform",
        "Basic programming concepts"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Mobile device allowance", "App store bonuses", "Cross-platform learning"]
    },
    {
      id: 9,
      title: "iOS App Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Engineering",
      description: "Build native iOS applications using Swift. Create polished mobile experiences for iPhone and iPad users with Apple's design guidelines.",
      requirements: [
        "Basic knowledge of Swift programming",
        "Understanding of iOS development",
        "Interest in Apple ecosystem",
        "Basic programming fundamentals"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Apple device allowance", "App store bonuses", "Premium user experience focus"]
    },
    {
      id: 10,
      title: "UI/UX Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Design",
      description: "Design and develop user interfaces that are both beautiful and functional. Create wireframes, prototypes, and implement pixel-perfect designs.",
      requirements: [
        "Basic knowledge of design principles",
        "Interest in UI/UX tools (Figma, Adobe XD)",
        "Understanding of user research",
        "Basic knowledge of HTML/CSS"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Design tools access", "Creative workshops", "Portfolio development"]
    },
    {
      id: 11,
      title: "SEO Specialist",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Marketing",
      description: "Optimize websites for search engines and improve online visibility. Learn keyword research, on-page optimization, and performance analysis.",
      requirements: [
        "Understanding of SEO fundamentals",
        "Interest in digital marketing",
        "Basic analytical skills",
        "Knowledge of web technologies"
      ],
      benefits: ["Health insurance", "Flexible work hours", "SEO tools access", "Certification support", "Digital marketing exposure"]
    },
    {
      id: 12,
      title: "Email Marketing Specialist",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Marketing",
      description: "Create and manage email marketing campaigns. Learn newsletter design, automation sequences, and campaign performance analysis.",
      requirements: [
        "Interest in email marketing",
        "Basic design and copywriting skills",
        "Understanding of marketing automation",
        "Analytical mindset"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Marketing tools access", "Campaign bonuses", "Communication skills development"]
    },
    {
      id: 13,
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Marketing",
      description: "Drive digital marketing campaigns across multiple channels. Learn SEO, SEM, social media, and content marketing strategies.",
      requirements: [
        "Interest in digital marketing",
        "Understanding of social media platforms",
        "Basic analytical skills",
        "Creative thinking ability"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Marketing certifications", "Performance incentives", "Multi-channel exposure"]
    },
    {
      id: 14,
      title: "Social Media Manager",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Marketing",
      description: "Manage social media presence and create engaging content. Learn social media strategies, content creation, and community growth.",
      requirements: [
        "Understanding of social media platforms",
        "Content creation interest",
        "Strong communication skills",
        "Creative mindset"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Creative tools access", "Community engagement bonuses", "Brand management experience"]
    },
    {
      id: 15,
      title: "Content Writer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "₹2-3 LPA",
      experience: "0-2 years / Freshers welcome",
      department: "Content & Marketing",
      description: "Create engaging and SEO-optimized content for websites, blogs, and marketing materials. Learn content strategy and digital storytelling.",
      requirements: [
        "Strong writing and communication skills",
        "Understanding of SEO content principles",
        "Research and analytical skills",
        "Creative thinking ability"
      ],
      benefits: ["Health insurance", "Flexible work hours", "Writing workshops", "Content publishing bonuses", "Creative expression"]
    }
  ];

  const stats = [
    { value: "3+", label: "Team Members", icon: <FiUsers className="h-6 w-6" /> },
    { value: "15+", label: "Open Positions", icon: <FiBriefcase className="h-6 w-6" /> },
    { value: "Remote", label: "Work Culture", icon: <FiMapPin className="h-6 w-6" /> },
    { value: "Innovation", label: "Company Values", icon: <FiCheck className="h-6 w-6" /> }
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
            <h1 className="text-4xl font-bold md:text-5xl mb-4">Join Our Team</h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
              Shape the future of technology with us. We're looking for passionate individuals
              who want to make a difference in the world of software development.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="#openings"
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-500 hover:scale-110 hover:rotate-1 border-2 border-white/30 hover:border-transparent text-white hover:text-white hover:shadow-lg hover:shadow-orange-500/25"
                style={{
                  backgroundColor: 'transparent',
                  ':hover': {
                    background: 'linear-gradient(135deg, #FF6B35, #F7931E)',
                    boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
                  }
                }}
              >
                View Openings
              </Link>
              <Link
                to="#why-join"
                className="border-2 border-white/30 hover:border-transparent px-6 py-3 rounded-lg font-semibold transition-all duration-500 hover:scale-110 hover:-rotate-1 text-white hover:text-white hover:shadow-lg hover:shadow-cyan-500/25"
                style={{
                  backgroundColor: 'transparent',
                  ':hover': {
                    background: 'linear-gradient(135deg, #06B6D4, #0891B2)',
                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
                  }
                }}
              >
                Why AstraCognix?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Current Openings</h2>
            <p className="text-lg text-slate-600">
              Explore exciting career opportunities and grow with us
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                  rotateX: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  rotateX: -2,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-primary/30 transform-gpu"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <motion.h3
                          className="text-xl font-bold text-slate-900 mb-1 cursor-pointer"
                          whileHover={{
                            color: "#8B5CF6",
                            scale: 1.02,
                            textShadow: "0 2px 8px rgba(139, 92, 246, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {job.title}
                        </motion.h3>
                        <p className="text-slate-600 mb-2">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <FiBriefcase className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiMapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiClock className="h-4 w-4" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiDollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <motion.span
                        className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200"
                        whileHover={{
                          scale: 1.1,
                          background: "linear-gradient(to right, #10b981, #14b8a6)",
                          color: "#ffffff",
                          borderColor: "transparent",
                          boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)"
                        }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        {job.department}
                      </motion.span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Requirements</h4>
                        <motion.ul
                          className="space-y-2"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3
                              }
                            }
                          }}
                        >
                          {job.requirements.map((req, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-600"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                              }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                              >
                                <FiCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              {req}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Benefits</h4>
                        <motion.ul
                          className="space-y-2"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.5
                              }
                            }
                          }}
                        >
                          {job.benefits.map((benefit, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-600"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                              }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: -10 }}
                                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                              >
                                <FiCheck className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              </motion.div>
                              {benefit}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>

                    <Link
                      to={`/apply?job=${job.id}`}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:rotate-1 text-white transform-gpu"
                      style={{
                        background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                        boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3), 0 4px 10px rgba(139, 92, 246, 0.2)',
                        ':hover': {
                          background: 'linear-gradient(135deg, #7C3AED, #9333EA)',
                          boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4), 0 8px 20px rgba(139, 92, 246, 0.3), 0 0 20px rgba(168, 85, 247, 0.5)'
                        }
                      }}
                    >
                      Apply Now <FiArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section id="why-join" className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Join AstraCognix?</h2>
            <p className="text-lg text-slate-200">
              We're more than just a workplace – we're a community of innovators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Culture",
                description: "Work on cutting-edge technologies and contribute to projects that make a real impact."
              },
              {
                title: "Growth Opportunities",
                description: "Continuous learning, mentorship programs, and career development support."
              },
              {
                title: "Work-Life Balance",
                description: "Flexible work arrangements, remote options, and a supportive team environment."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Application Process</h2>
            <p className="text-lg text-slate-600">Simple steps to join our team</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", description: "Submit your application with resume and portfolio" },
              { step: "02", title: "Review", description: "Our team reviews your application and qualifications" },
              { step: "03", title: "Interview", description: "Technical and cultural fit interviews" },
              { step: "04", title: "Join", description: "Welcome to the AstraCognix family!" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
