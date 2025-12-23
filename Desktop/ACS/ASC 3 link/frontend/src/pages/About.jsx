import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiUsers, FiTarget, FiZap, FiTrendingUp, FiAward, FiHeart, FiCheckCircle, FiCode, FiSmartphone, FiGlobe, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import Stats from "../components/Stats.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";

function About() {
  const values = [
    {
      icon: <FiTarget className="h-8 w-8 text-primary" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive edge."
    },
    {
      icon: <FiUsers className="h-8 w-8 text-primary" />,
      title: "Client Partnership",
      description: "We work as an extension of your team, understanding your business goals and challenges deeply."
    },
    {
      icon: <FiCheckCircle className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "Every solution undergoes rigorous testing and quality checks to ensure reliability and performance."
    },
    {
      icon: <FiHeart className="h-8 w-8 text-primary" />,
      title: "Passionate Team",
      description: "Our dedicated professionals bring expertise, creativity, and enthusiasm to every project."
    }
  ];

  const achievements = [
    {
      icon: <FiAward className="h-12 w-12 text-primary mb-4" />,
      title: "1+ Experience",
      description: "Delivering excellence in software development and digital solutions."
    },
    {
      icon: <FiTrendingUp className="h-12 w-12 text-primary mb-4" />,
      title: "2+ Projects",
      description: "Successfully completed projects across various industries and business domains."
    },
    {
      icon: <FiUsers className="h-12 w-12 text-primary mb-4" />,
      title: "2+ Clients",
      description: "Building long-term relationships through trust, quality, and outstanding results."
    },
    {
      icon: <FiCode className="h-12 w-12 text-primary mb-4" />,
      title: "4+ Members",
      description: "Expert developers, designers, and strategists working together for your success."
    }
  ];

  const expertise = [
    {
      icon: <FiCode className="h-6 w-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with modern technologies and best practices."
    },
    {
      icon: <FiSmartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS, Android, and web platforms."
    },
    {
      icon: <FiGlobe className="h-6 w-6" />,
      title: "Web Development",
      description: "Responsive, scalable web applications with exceptional user experiences."
    },
    {
      icon: <FiZap className="h-6 w-6" />,
      title: "AI & ML Solutions",
      description: "Intelligent automation and data-driven insights for business growth."
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
            <h1 className="text-4xl font-bold md:text-6xl mb-6">About AstraCognix</h1>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto mb-8">
              Empowering businesses through innovative software solutions. We are a dedicated team of technology experts
              committed to transforming ideas into digital reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Start Your Project <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                View Our Work <FiArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Founded with a vision to bridge the gap between technology and business success,
                  AstraCognix Solutions Pvt. Ltd. has been at the forefront of digital transformation
                  for over a decade.
                </p>
                <p>
                  We started as a small team of passionate developers and have grown into a full-service
                  technology partner, helping businesses across industries leverage the power of software
                  to achieve their goals.
                </p>
                <p>
                  Our journey is defined by continuous learning, adaptation to emerging technologies,
                  and an unwavering commitment to delivering exceptional results for our clients.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <FiZap className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-slate-700 font-semibold text-lg">Innovation & Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission & Vision</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Driving digital innovation and empowering businesses to thrive in the modern world
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <FiTarget className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600">
                To empower businesses with innovative, reliable, and scalable software solutions that drive
                growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <FiZap className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600">
                To be the leading technology partner for businesses worldwide, recognized for our commitment
                to excellence, innovation, and delivering transformative digital experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-card border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Achievements</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence and client success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                {achievement.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{achievement.title}</h3>
                <p className="text-slate-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Areas of Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive technology solutions to meet all your digital needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-card border border-slate-100 flex items-start gap-4"
              >
                <div className="flex-shrink-0 text-primary mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience and cutting-edge knowledge
              to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Niket Raj",
                role: "CEO & Founder",
                image: "/niket.png",
                linkedin: "https://www.linkedin.com/in/niket-raj-aab9a5265/",
                instagram: "https://www.instagram.com/ig_niket/",
                description: "Visionary leader with 3+ years in technology and business strategy."
              },
              {
                name: "Kumar Adrash",
                role: "CTO & Co-Founder",
                image: "/adrash.png",
                linkedin: "https://www.linkedin.com/in/kumar-adarsh-19802426b/",
                instagram: "https://www.instagram.com/irl.adarsh/",
                description: "Co-founder and Visionary leader with 3+ years in technology and business strategy."
              },
              {
                name: "Suraj Kumar Singh",
                role: "CMO & Co-Founder",
                image: "/suraj.jpg",
                linkedin: "https://www.linkedin.com/in/suraj-kumar-singh01/",
                instagram: "https://www.instagram.com/rajput._.suraj._.singh/",
                description: "Technical leader and marketing strategist driving innovation and brand growth."
              },
              {
                name: "Niket Raj",
                role: "Lead Developer",
                image: "/niket.png",
                linkedin: "https://www.linkedin.com/in/niket-raj-aab9a5265/",
                instagram: "https://www.instagram.com/ig_niket/",
                description: "Full-stack developer with expertise in modern web technologies."
              }
            ].map((member, index) => (
              <motion.div
                key={`${member.name}-${member.role}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNFNUU3RUIiLz4KPHBhdGggZD0iTTEyIDZDMTMuNjYxIDYgMTUgNy4zMzkgMTUgOUMxNSAxMC42NjEgMTMuNjYxIDEyIDEyIDEyQzEwLjM0IDEyIDkgMTAuNjYxIDkgOUM5IDcuMzM5IDEwLjM0IDYgMTIgNlpNMTIgMTRDMTYuNTQyIDE0IDIwIDE3LjQ1OCAyMCAyMEMyMCAyMi41NDIgMTYuNTQyIDI2IDEyIDI2QzcuNDU4IDI2IDQgMjIuNTQyIDQgMjBDNCAxNy40NTggNy40NTggMTQgMTIgMTRaIiBmaWxsPSIjOWNhM2FmIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm mb-4">{member.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <FiLinkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <AiOutlineInstagram className="h-4 w-4" />
                      Instagram
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Key milestones that shaped our growth and commitment to innovation
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            {[
              {
                year: "2025",
                title: "Company Founded",
                description: "AstraCognix Solutions Pvt. Ltd. was established with a vision to bridge technology and business."
              },
              {
                year: "2026",
                title: "First Major Project",
                description: "Successfully delivered our first enterprise-scale software solution."
              },
              {
                year: "2026",
                title: "Team Expansion",
                description: "Grew from a small team to 25+ professionals across multiple domains."
              },
             
             
              {
                year: "2026",
                title: "Current Team",
                description: "Expanded to serve clients worldwide with comprehensive technology solutions."
              }
            ].map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${milestone.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'} text-center`}
              >
                <div className={`inline-block p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-card max-w-md mx-auto md:${index % 2 === 0 ? 'mr-8' : 'ml-8'} md:mx-0`}>
                  <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 text-sm">{milestone.description}</p>
                </div>
                <div className={`absolute top-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications & Awards</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized through industry certifications and prestigious awards
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center max-w-4xl mx-auto">
            {[
              {
                title: "ISO 9001:2015",
                description: "Quality Management Systems Certification",
                icon: "🏆"
              },
              {
                title: "AWS Advanced Consulting Partner",
                description: "Certified AWS cloud solutions expertise",
                icon: "☁️"
              },
              // {
              //   title: "Microsoft Gold Partner",
              //   description: "Premier Microsoft technology partner",
              //   icon: "🔵"
              // },
              {
                title: "Best IT Solutions 2026",
                description: "Industry Excellence Award",
                icon: "⭐"
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-2xl shadow-card border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cert.title}</h3>
                <p className="text-slate-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Stats Section */}
      <Stats />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Let's discuss how we can help you achieve your digital goals with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-quote"
                className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get a Free Quote <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us <FiArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
