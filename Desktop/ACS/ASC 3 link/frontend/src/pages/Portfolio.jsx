import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiFilter, FiExternalLink } from "react-icons/fi";
import { portfolio } from "../data/siteContent.js";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from portfolio data
  const categories = ["All", ...new Set(portfolio.map(item => item.category))];

  // Filter portfolio items based on selected category
  const filteredPortfolio = selectedCategory === "All"
    ? portfolio
    : portfolio.filter(item => item.category === selectedCategory);

  // Separate company projects and website examples
  const companyProjects = filteredPortfolio.filter(item =>
    ["E-commerce", "Mobile", "AI"].includes(item.category)
  );
  const websiteExamples = filteredPortfolio.filter(item =>
    item.category === "Web"
  );

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
            <h1 className="text-4xl font-bold md:text-6xl mb-6">Our Portfolio</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Discover our successful projects and website examples that showcase
              AstraCognix's expertise in software development, AI solutions, and digital innovation.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                Start Your Project <FiArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Explore Our Work</h2>
              <p className="text-slate-600">Filter by category to see specific types of projects</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <FiFilter className="h-5 w-5 text-slate-600 mt-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Projects Section */}
      {companyProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Company Projects</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Innovative solutions we've built for businesses across various industries,
                delivering measurable impact and exceptional user experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <FiExternalLink className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">{project.summary}</p>
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      View Case Study <FiArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Website Examples Section */}
      {websiteExamples.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Website Examples</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Beautiful, responsive websites built with modern technologies,
                optimized for performance and user experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteExamples.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <FiExternalLink className="h-5 w-5 text-slate-400 group-hover:text-green-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">{project.summary}</p>
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      View Details <FiArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss your project and bring your vision to life with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
