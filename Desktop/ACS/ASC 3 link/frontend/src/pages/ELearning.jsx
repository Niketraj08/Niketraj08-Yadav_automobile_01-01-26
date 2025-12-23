import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBook, FiUsers, FiAward, FiClock, FiStar, FiPlay, FiCheck, FiCode, FiX, FiSmartphone } from "react-icons/fi";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  course: "",
  experience: "",
  goals: "",
  paymentMethod: "form",
  transactionId: "",
  paymentAmount: "",
  botcheck: "",
};

function ELearning() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const getCoursePrice = (courseSlug) => {
    const coursePrices = {
      "full-stack-web": "199",
      "mobile-app": "179",
      "data-science": "239",
      "ui-ux": "119",
      "python": "99",
      "javascript-advanced": "111",
      "react": "119",
      "nodejs": "131",
      "database": "103",
      "machine-learning": "319",
      "cybersecurity": "139",
      "cloud-aws": "179",
      "devops-docker": "219",
      "blockchain": "199",
      "data-analytics": "159",
      "mobile-ui-ux": "119"
    };
    return coursePrices[courseSlug] || "0";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d7559736-92a8-47b2-905f-3e8636130c0a",
          name: form.name,
          email: form.email,
          phone: form.phone,
          course: form.course,
          experience: form.experience,
          goals: form.goals,
          payment_method: form.paymentMethod,
          transaction_id: form.transactionId,
          payment_amount: form.paymentAmount,
          course_price: getCoursePrice(form.course),
          botcheck: form.botcheck || "",
          from_name: "AstraCognix E-Learning Enrollment",
          subject: form.paymentMethod === "form"
            ? "New E-Learning Course Enrollment Request"
            : `New E-Learning Payment Enrollment - ${form.paymentMethod.toUpperCase()}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

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
            <h1 className="text-4xl font-bold md:text-6xl mb-6">
              Master Technology with
              <span className="text-primary"> AstraCognix</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Accelerate your career with our comprehensive e-learning platform.
              Learn from industry experts and gain practical skills in software development,
              data science, and digital technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#courses"
                className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                Explore Courses <FiBook className="h-5 w-5" />
              </Link>
              <Link
                to="#enroll"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Students Enrolled", icon: "👥" },
              { value: "25+", label: "Expert Instructors", icon: "👨‍🏫" },
              { value: "17+", label: "Courses Available", icon: "📚" },
              { value: "95%", label: "Completion Rate", icon: "🎯" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Learning Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive courses designed to take you from beginner to professional
              in your chosen technology field.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Web Development",
                duration: "6 months",
                level: "Beginner to Advanced",
                students: "150+ enrolled",
                image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
                originalPrice: "₹49,999",
                offerPrice: "₹199",
                discount: "80%",
                alternativePrice: "₹149",
                icon: <FiBook className="h-6 w-6" />,
                features: ["HTML, CSS, JavaScript", "React & Node.js", "Database Design", "API Development", "Deployment & DevOps"],
              },
              {
                title: "Mobile App Development",
                duration: "5 months",
                level: "Intermediate",
                students: "120+ enrolled",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
                originalPrice: "₹44,999",
                offerPrice: "₹179",
                discount: "80%",
                alternativePrice: "₹134",
                icon: <FiPlay className="h-6 w-6" />,
                features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications", "Offline Functionality"],
              },
              {
                title: "Data Science & AI",
                duration: "7 months",
                level: "Advanced",
                students: "80+ enrolled",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
                originalPrice: "₹59,999",
                offerPrice: "₹239",
                discount: "80%",
                alternativePrice: "₹179",
                icon: <FiAward className="h-6 w-6" />,
                features: ["Python Programming", "Machine Learning", "Data Visualization", "Deep Learning", "AI Ethics"],
              },
              {
                title: "UI/UX Design Fundamentals",
                duration: "3 months",
                level: "Beginner",
                students: "200+ enrolled",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
                originalPrice: "₹29,999",
                offerPrice: "₹119",
                discount: "80%",
                alternativePrice: "₹89",
                icon: <FiUsers className="h-6 w-6" />,
                features: ["Design Principles", "Figma & Adobe XD", "User Research", "Prototyping", "Design Systems"],
              },
              {
                title: "Python Programming",
                duration: "4 months",
                level: "Beginner to Intermediate",
                students: "180+ enrolled",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
                originalPrice: "₹24,999",
                offerPrice: "₹99",
                discount: "80%",
                alternativePrice: "₹74",
                icon: <FiCode className="h-6 w-6" />,
                features: ["Python Basics", "Data Structures", "OOP Concepts", "File Handling", "Libraries & Frameworks"],
              },
              {
                title: "Advanced JavaScript",
                duration: "3 months",
                level: "Intermediate",
                students: "150+ enrolled",
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
                originalPrice: "₹27,999",
                offerPrice: "₹111",
                discount: "80%",
                alternativePrice: "₹83",
                icon: <FiPlay className="h-6 w-6" />,
                features: ["ES6+ Features", "Async Programming", "DOM Manipulation", "APIs & AJAX", "Testing & Debugging"],
              },
              {
                title: "React.js Development",
                duration: "3 months",
                level: "Intermediate",
                students: "160+ enrolled",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
                originalPrice: "₹29,999",
                offerPrice: "₹119",
                discount: "80%",
                alternativePrice: "₹89",
                icon: <FiStar className="h-6 w-6" />,
                features: ["React Components", "State Management", "Hooks & Context", "Routing", "Performance Optimization"],
              },
              {
                title: "Node.js Backend Development",
                duration: "4 months",
                level: "Intermediate",
                students: "140+ enrolled",
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
                originalPrice: "₹32,999",
                offerPrice: "₹131",
                discount: "80%",
                alternativePrice: "₹98",
                icon: <FiAward className="h-6 w-6" />,
                features: ["Express.js Framework", "RESTful APIs", "Authentication", "Database Integration", "Security Best Practices"],
              },
              {
                title: "Database Management",
                duration: "3 months",
                level: "Beginner to Intermediate",
                students: "130+ enrolled",
                image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
                originalPrice: "₹25,999",
                offerPrice: "₹103",
                discount: "80%",
                alternativePrice: "₹77",
                icon: <FiBook className="h-6 w-6" />,
                features: ["SQL Fundamentals", "NoSQL Databases", "Data Modeling", "Query Optimization", "MongoDB & PostgreSQL"],
              },
              {
                title: "Machine Learning & AI",
                duration: "8 months",
                level: "Intermediate to Advanced",
                students: "95+ enrolled",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                originalPrice: "₹79,999",
                offerPrice: "₹319",
                discount: "80%",
                alternativePrice: "₹239",
                icon: <FiAward className="h-6 w-6" />,
                features: ["Supervised Learning", "Neural Networks", "Deep Learning", "Computer Vision", "NLP Fundamentals"],
              },
              {
                title: "Cybersecurity Fundamentals",
                duration: "4 months",
                level: "Beginner to Intermediate",
                students: "110+ enrolled",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
                originalPrice: "₹34,999",
                offerPrice: "₹139",
                discount: "80%",
                alternativePrice: "₹104",
                icon: <FiCheck className="h-6 w-6" />,
                features: ["Network Security", "Ethical Hacking", "Cryptography", "Security Tools", "Risk Assessment"],
              },
              {
                title: "Cloud Computing (AWS)",
                duration: "5 months",
                level: "Intermediate",
                students: "140+ enrolled",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                originalPrice: "₹44,999",
                offerPrice: "₹179",
                discount: "80%",
                alternativePrice: "₹134",
                icon: <FiClock className="h-6 w-6" />,
                features: ["AWS Services", "EC2 & S3", "Lambda Functions", "Cloud Architecture", "Cost Optimization"],
              },
              {
                title: "DevOps with Docker & Kubernetes",
                duration: "6 months",
                level: "Intermediate to Advanced",
                students: "85+ enrolled",
                image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
                originalPrice: "₹54,999",
                offerPrice: "₹219",
                discount: "80%",
                alternativePrice: "₹164",
                icon: <FiStar className="h-6 w-6" />,
                features: ["Docker Containers", "Kubernetes Orchestration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"],
              },
              {
                title: "Blockchain Technology",
                duration: "5 months",
                level: "Intermediate",
                students: "75+ enrolled",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
                originalPrice: "₹49,999",
                offerPrice: "₹199",
                discount: "80%",
                alternativePrice: "₹149",
                icon: <FiCode className="h-6 w-6" />,
                features: ["Blockchain Basics", "Smart Contracts", "Cryptocurrency", "Web3 Development", "DeFi Concepts"],
              },
              {
                title: "Data Analytics with Python",
                duration: "4 months",
                level: "Beginner to Intermediate",
                students: "125+ enrolled",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                originalPrice: "₹39,999",
                offerPrice: "₹159",
                discount: "80%",
                alternativePrice: "₹119",
                icon: <FiPlay className="h-6 w-6" />,
                features: ["Pandas & NumPy", "Data Visualization", "Statistical Analysis", "Machine Learning Basics", "Real-world Projects"],
              },
              {
                title: "Mobile UI/UX Design",
                duration: "3 months",
                level: "Beginner to Intermediate",
                students: "155+ enrolled",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
                originalPrice: "₹29,999",
                offerPrice: "₹119",
                discount: "80%",
                alternativePrice: "₹89",
                icon: <FiUsers className="h-6 w-6" />,
                features: ["Mobile Design Principles", "iOS & Android Guidelines", "Prototyping Tools", "User Testing", "Design Systems"],
              },
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Course Image */}
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${course.image})` }}
                >
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {course.discount} OFF
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      {course.icon}
                    </div>
                    <span className="text-sm text-slate-500">{course.students}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <FiClock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <FiAward className="h-4 w-4" />
                      {course.level}
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-slate-900">{course.offerPrice}</span>
                      <span className="text-sm text-slate-500">lifetime access</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">Save {course.discount}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <FiCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to="#enroll"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
                    >
                      Enroll Now <FiArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                    >
                      GPay <FiSmartphone className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Modal for GPay */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <FiX className="h-6 w-6" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiSmartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Pay with GPay
                </h3>
                <p className="text-slate-600 mb-2">
                  Course: {selectedCourse.title}
                </p>
                <p className="text-lg font-semibold text-green-600 mb-6">
                  Amount: ₹{selectedCourse.offerPrice}
                </p>

                {/* QR Code Image */}
                <div className="bg-white border-2 border-slate-200 rounded-lg p-4 mb-4 flex items-center justify-center">
                  <img
                    src="/QR CODE .jpeg"
                    alt="GPay QR Code for Payment"
                    className="w-48 h-48 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-center">
                    <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FiSmartphone className="h-12 w-12 text-slate-400" />
                    </div>
                    <p className="text-slate-500 text-sm">QR Code Image Not Found</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="text-sm text-green-800 mb-2 font-medium">Payment Instructions:</div>
                  <ul className="text-sm text-green-700 text-left space-y-1">
                    <li>• Open Google Pay on your phone</li>
                    <li>• Scan the QR code above</li>
                    <li>• Complete the payment of ₹{selectedCourse.offerPrice}</li>
                    <li>• You'll receive a confirmation email</li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#enroll"
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center"
                  >
                    Enroll Form
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Code Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-xl font-bold"
              >
                ✕ Close
              </button>
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  Scan QR Code for Payment
                </h3>
                <img
                  src={zoomedImage}
                  alt="Zoomed QR Code for Payment"
                  className="w-full h-auto max-w-sm mx-auto object-contain border border-slate-200 rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-center p-8">
                  <div className="text-slate-500 font-medium">QR Code Image Not Available</div>
                  <div className="text-sm text-slate-400 mt-2">Please try refreshing the page</div>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800 text-center font-medium">
                    💡 Tip: Open your UPI app and scan this code to complete payment
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Our E-Learning Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose AstraCognix E-Learning?</h2>
            <p className="text-lg text-slate-200">
              Learn from industry experts with our proven educational approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎓",
                title: "Expert Instructors",
                description: "Learn from professionals with years of industry experience and real-world expertise."
              },
              {
                icon: "💻",
                title: "Hands-on Projects",
                description: "Build real-world projects and create a portfolio that showcases your skills."
              },
              {
                icon: "⏰",
                title: "Flexible Learning",
                description: "Study at your own pace with lifetime access to course materials and updates."
              },
              {
                icon: "🎯",
                title: "Career Support",
                description: "Get guidance on job applications, resume building, and interview preparation."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section id="enroll" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enroll in a Course</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Take the first step towards your tech career. Fill out the form below
              and our education advisors will contact you within 24 hours.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={onSubmit} className="bg-slate-50 p-8 rounded-3xl shadow-xl">
              {/* Hidden honeypot field */}
              <label className="sr-only" htmlFor="botcheck">
                Bot check
              </label>
              <input
                type="checkbox"
                id="botcheck"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                onChange={() => {}}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <label htmlFor="elearning-name" className="text-sm font-semibold text-slate-700">
                  Full Name *
                  <input
                    required
                    id="elearning-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Your full name"
                  />
                </label>
                <label htmlFor="elearning-email" className="text-sm font-semibold text-slate-700">
                  Email Address *
                  <input
                    required
                    type="email"
                    id="elearning-email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </label>
                <label htmlFor="elearning-phone" className="text-sm font-semibold text-slate-700">
                  Phone Number *
                  <input
                    required
                    type="tel"
                    id="elearning-phone"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Your phone number"
                  />
                </label>
                <label htmlFor="elearning-course" className="text-sm font-semibold text-slate-700">
                  Course of Interest *
                  <select
                    required
                    id="elearning-course"
                    name="course"
                    autoComplete="off"
                    value={form.course}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    <option value="">Select a course</option>
                    <option value="full-stack-web">Full Stack Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="data-science">Data Science & AI</option>
                    <option value="ui-ux">UI/UX Design Fundamentals</option>
                    <option value="python">Python Programming</option>
                    <option value="javascript-advanced">Advanced JavaScript</option>
                    <option value="react">React.js Development</option>
                    <option value="nodejs">Node.js Backend Development</option>
                    <option value="database">Database Management</option>
                    <option value="machine-learning">Machine Learning & AI</option>
                    <option value="cybersecurity">Cybersecurity Fundamentals</option>
                    <option value="cloud-aws">Cloud Computing (AWS)</option>
                    <option value="devops-docker">DevOps with Docker & Kubernetes</option>
                    <option value="blockchain">Blockchain Technology</option>
                    <option value="data-analytics">Data Analytics with Python</option>
                    <option value="mobile-ui-ux">Mobile UI/UX Design</option>
                  </select>
                </label>
                <label htmlFor="elearning-experience" className="text-sm font-semibold text-slate-700">
                  Experience Level *
                  <select
                    required
                    id="elearning-experience"
                    name="experience"
                    autoComplete="off"
                    value={form.experience}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner - No prior experience</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Professional experience</option>
                  </select>
                </label>
              </div>

              <label htmlFor="elearning-goals" className="mt-6 block text-sm font-semibold text-slate-700">
                Learning Goals
                <textarea
                  id="elearning-goals"
                  name="goals"
                  autoComplete="off"
                  value={form.goals}
                  onChange={onChange}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Tell us about your career goals and what you hope to achieve with this course..."
                />
              </label>

              {/* Payment Method Selection */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Payment Method
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-green-500 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      id="payment-gpay"
                      name="paymentMethod"
                      value="gpay"
                      autoComplete="off"
                      className="text-green-600 focus:ring-green-500"
                      onChange={onChange}
                    />
                    <div className="ml-3 flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <FiSmartphone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Google Pay</div>
                        <div className="text-sm text-slate-600">UPI Payment</div>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      id="payment-phonepe"
                      name="paymentMethod"
                      value="phonepe"
                      autoComplete="off"
                      className="text-blue-600 focus:ring-blue-500"
                      onChange={onChange}
                    />
                    <div className="ml-3 flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <FiSmartphone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">PhonePe</div>
                        <div className="text-sm text-slate-600">UPI Payment</div>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-purple-500 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      id="payment-paytm"
                      name="paymentMethod"
                      value="paytm"
                      autoComplete="off"
                      className="text-purple-600 focus:ring-purple-500"
                      onChange={onChange}
                    />
                    <div className="ml-3 flex items-center">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <FiSmartphone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Paytm</div>
                        <div className="text-sm text-slate-600">UPI/Wallet</div>
                      </div>
                    </div>
                  </label>


                  <label className="flex items-center p-4 border border-slate-200 rounded-lg hover:border-primary cursor-pointer transition-colors">
                    <input
                      type="radio"
                      id="payment-form"
                      name="paymentMethod"
                      value="form"
                      autoComplete="off"
                      defaultChecked
                      className="text-primary focus:ring-primary"
                      onChange={onChange}
                    />
                    <div className="ml-3 flex items-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                        <FiCheck className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Pay Later</div>
                        <div className="text-sm text-slate-600">After Enrollment</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Details Section */}
              {form.paymentMethod !== "form" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 space-y-4"
                >
                  {/* QR Code for UPI payments */}
                  {(form.paymentMethod === "gpay" || form.paymentMethod === "phonepe" || form.paymentMethod === "paytm") && (
                    <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-800 mb-4">
                        Complete Payment with {form.paymentMethod === "gpay" ? "Google Pay" : form.paymentMethod === "phonepe" ? "PhonePe" : "Paytm"}
                      </h4>

                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0">
                          <img
                            src="/QR CODE .jpeg"
                            alt="Payment QR Code"
                            className="w-32 h-32 object-contain border border-green-300 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setZoomedImage("/QR CODE .jpeg")}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div className="hidden w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => setZoomedImage("/QR CODE .jpeg")}>
                            <FiSmartphone className="h-12 w-12 text-slate-400" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h5 className="font-medium text-green-800 mb-2">Payment Instructions:</h5>
                          <ol className="text-sm text-green-700 space-y-1 mb-4">
                            <li>1. Open {form.paymentMethod === "gpay" ? "Google Pay" : form.paymentMethod === "phonepe" ? "PhonePe" : "Paytm"} on your device</li>
                            <li>2. Scan the QR code shown above</li>
                            <li>3. Complete the payment for ₹{form.course ? getCoursePrice(form.course) : '0'}</li>
                            <li>4. Enter the transaction ID below</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Transaction Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <label htmlFor="elearning-transactionId" className="text-sm font-semibold text-slate-700">
                      Transaction ID *
                      <input
                        required={form.paymentMethod !== "form"}
                        id="elearning-transactionId"
                        name="transactionId"
                        autoComplete="off"
                        value={form.transactionId}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                        placeholder="Enter transaction/reference ID"
                      />
                    </label>
                    <label htmlFor="elearning-paymentAmount" className="text-sm font-semibold text-slate-700">
                      Payment Amount *
                      <input
                        required={form.paymentMethod !== "form"}
                        id="elearning-paymentAmount"
                        name="paymentAmount"
                        autoComplete="off"
                        value={form.paymentAmount}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                        placeholder={`₹${form.course ? getCoursePrice(form.course) : '0'}`}
                      />
                    </label>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <FiCheck className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-blue-800 mb-1">Payment Summary</h5>
                        <div className="text-sm text-blue-700 space-y-1">
                          <div><strong>Course:</strong> {form.course ? form.course.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Please select a course'}</div>
                          <div><strong>Payment Method:</strong> {form.paymentMethod === "gpay" ? "Google Pay" : form.paymentMethod === "phonepe" ? "PhonePe" : form.paymentMethod === "paytm" ? "Paytm" : form.paymentMethod === "card" ? "Credit/Debit Card" : form.paymentMethod === "netbanking" ? "Net Banking" : "Pay Later"}</div>
                          <div><strong>Amount:</strong> ₹{form.course ? getCoursePrice(form.course) : '0'}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-4 text-white font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-60 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                {status === "loading" ? "Submitting..." : "Enroll Now"}
                <FiArrowRight className="h-5 w-5" />
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center gap-2 text-green-700">
                    <FiCheck className="h-5 w-5" />
                    <span className="font-medium">Thank you for your interest!</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    We've received your enrollment request and will contact you within 24 hours
                    with course details and next steps.
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="flex items-center gap-2 text-red-700">
                    <span className="font-medium">Something went wrong.</span>
                  </div>
                  <p className="text-red-600 text-sm mt-1">
                    Please try again or contact us directly at hello@astracognix.com
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg text-slate-200">
              Real stories from students who transformed their careers with our courses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Full Stack Developer at TechCorp",
                course: "Full Stack Web Development",
                quote: "The hands-on projects and mentorship helped me land my dream job. The course was comprehensive and practical.",
                rating: 5
              },
              {
                name: "Rahul Kumar",
                role: "Mobile App Developer at StartupXYZ",
                course: "Mobile App Development",
                quote: "Amazing learning experience! The instructors are industry experts who really know their stuff.",
                rating: 5
              },
              {
                name: "Ananya Singh",
                role: "Data Scientist at DataFlow",
                course: "Data Science & AI",
                quote: "This course gave me the confidence to pursue a career in AI. The projects were challenging but rewarding.",
                rating: 5
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800 p-6 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <FiStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{story.quote}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{story.name}</div>
                  <div className="text-sm text-slate-400">{story.role}</div>
                  <div className="text-sm text-primary mt-1">{story.course}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of students who have transformed their careers with AstraCognix E-Learning.
              Your future in tech starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#enroll"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Enroll Now <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ELearning;
