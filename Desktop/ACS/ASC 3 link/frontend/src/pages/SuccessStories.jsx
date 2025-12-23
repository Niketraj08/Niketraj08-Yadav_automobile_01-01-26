import { motion } from "framer-motion";
import { FiStar, FiTrendingUp, FiMapPin, FiBriefcase, FiMessageSquare, FiAward } from "react-icons/fi";
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaSpotify, FaUber, FaAirbnb, FaLinkedin } from "react-icons/fa";
import { SiTesla, SiNetflix, SiMeta, SiAdobe, SiSalesforce, SiStripe } from "react-icons/si";
import { Link } from "react-router-dom";

function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Development Engineer at Google",
      batch: "Summer 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      story: "My internship at AstraCognix was a game-changer. I went from being a college student to working on production code that serves thousands of users. The mentorship I received was exceptional - my mentor guided me through complex architectural decisions and taught me best practices that I still use today.",
      achievements: [
        "Led development of a real-time analytics dashboard",
        "Reduced API response time by 40%",
        "Received offer from Google within 2 weeks of completion"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      quote: "The experience here gave me the confidence to interview at top tech companies."
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Product Manager at Microsoft",
      batch: "Winter 2022",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      story: "What started as a frontend development internship turned into a comprehensive product management experience. I learned about user research, product strategy, and cross-functional collaboration. The team trusted me with real responsibilities from day one.",
      achievements: [
        "Conducted user interviews and redesigned product features",
        "Increased user engagement by 35%",
        "Transitioned from intern to PM role during internship"
      ],
      technologies: ["React", "Figma", "Google Analytics", "SQL"],
      quote: "AstraCognix taught me that great products are built by understanding users deeply."
    },
    {
      id: 3,
      name: "Arun Kumar",
      role: "Full Stack Developer at Amazon",
      batch: "Summer 2023",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      story: "The full-stack development internship gave me exposure to the entire software development lifecycle. I worked on both frontend and backend, learned about DevOps practices, and even participated in client meetings. This holistic experience prepared me perfectly for my role at Amazon.",
      achievements: [
        "Built a complete e-commerce platform from scratch",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Won 'Intern of the Month' award"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      quote: "I learned more in 8 weeks here than in 4 years of college."
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Mobile App Developer at Meta",
      batch: "Spring 2023",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      story: "As a mobile development intern, I worked on cross-platform apps using React Native. The opportunity to see my code running on thousands of devices was incredibly motivating. I learned about app store optimization, performance monitoring, and user experience design.",
      achievements: [
        "Developed a social networking feature for 10K+ users",
        "Improved app performance by 50%",
        "Published app updates to both App Store and Play Store"
      ],
      technologies: ["React Native", "Firebase", "Redux", "Jest"],
      quote: "The mobile internship taught me that great apps are invisible - they just work perfectly."
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "DevOps Engineer at Netflix",
      batch: "Fall 2022",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      story: "My DevOps internship focused on cloud infrastructure and automation. I learned about scalable architectures, monitoring, and incident response. The experience of managing production systems gave me insights that are invaluable in my current role.",
      achievements: [
        "Automated deployment pipeline reducing manual work by 80%",
        "Implemented monitoring system catching issues before they affected users",
        "Designed disaster recovery strategy for critical services"
      ],
      technologies: ["AWS", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
      quote: "DevOps is about enabling developers to deliver faster and more reliably."
    },
    {
      id: 6,
      name: "Kavya Mehta",
      role: "Data Scientist at LinkedIn",
      batch: "Winter 2023",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      story: "The data analytics internship opened my eyes to the power of data-driven decision making. I worked on real datasets, built predictive models, and created dashboards that influenced business decisions. This experience was crucial for my transition to data science.",
      achievements: [
        "Built ML model predicting user behavior with 85% accuracy",
        "Created executive dashboard used by leadership team",
        "Analyzed A/B test results leading to 25% improvement in conversion"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"],
      quote: "Data tells stories that can transform businesses."
    }
  ];

  const stats = [
    { value: "100+", label: "Successful Alumni" },
    { value: "85%", label: "Got Job Offers" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "25+", label: "Companies Hiring Our Interns" }
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
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Success Stories</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">From Intern to Industry Leader</h1>
            <p className="mt-4 text-lg text-slate-200">
              Discover how our internship program has transformed careers and created success stories
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
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Our Success Stories</h2>
            <p className="mt-4 text-lg text-slate-600">
              Real stories from interns who became industry professionals
            </p>
          </motion.div>

          <div className="space-y-16">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{story.name}</h3>
                      <p className="text-primary font-medium">{story.role}</p>
                      <p className="text-sm text-slate-600">{story.batch}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                    <FiMessageSquare className="h-8 w-8 text-primary mb-4" />
                    <blockquote className="text-lg text-slate-700 italic mb-4">
                      "{story.quote}"
                    </blockquote>
                  </div>

                  <p className="text-slate-600 mb-6">{story.story}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <FiTrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 text-center">
                    <FiStar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary">Success</div>
                    <div className="text-sm text-slate-600">Story #{story.id}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Where Our Alumni Work</h2>
            <p className="mt-4 text-lg text-slate-600">
              Our interns are making an impact at top technology companies worldwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
          >
            {[
              { name: "Google", icon: <FaGoogle className="h-8 w-8" />, color: "text-blue-500" },
              { name: "Microsoft", icon: <FaMicrosoft className="h-8 w-8" />, color: "text-blue-600" },
              { name: "Amazon", icon: <FaAmazon className="h-8 w-8" />, color: "text-orange-500" },
              { name: "Meta", icon: <SiMeta className="h-8 w-8" />, color: "text-blue-700" },
              { name: "Netflix", icon: <SiNetflix className="h-8 w-8" />, color: "text-red-600" },
              { name: "LinkedIn", icon: <FaLinkedin className="h-8 w-8" />, color: "text-blue-700" },
              { name: "Adobe", icon: <SiAdobe className="h-8 w-8" />, color: "text-red-500" },
              { name: "Salesforce", icon: <SiSalesforce className="h-8 w-8" />, color: "text-blue-500" },
              { name: "Uber", icon: <FaUber className="h-8 w-8" />, color: "text-black" },
              { name: "Airbnb", icon: <FaAirbnb className="h-8 w-8" />, color: "text-pink-500" },
              { name: "Spotify", icon: <FaSpotify className="h-8 w-8" />, color: "text-green-500" },
              { name: "Stripe", icon: <SiStripe className="h-8 w-8" />, color: "text-purple-600" }
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className={`flex flex-col items-center justify-center ${company.color} group-hover:scale-110 transition-transform duration-300`}>
                  {company.icon}
                  <div className="text-xs text-slate-600 mt-2 font-medium">{company.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Be the Next Success Story</h2>
            <p className="text-lg text-slate-200 mb-8">
              Join our internship program and take the first step towards a successful career in technology
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
                Learn the Benefits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Verification CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Verify Internship Certificates</h2>
            <p className="text-lg text-slate-200 mb-8">
              Check the authenticity of AstraCognix internship certificates and view detailed completion information.
            </p>
            <Link
              to="/internship/verify-certificate"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <FiAward className="mr-2 h-5 w-5" />
              Verify Certificate
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SuccessStories;
