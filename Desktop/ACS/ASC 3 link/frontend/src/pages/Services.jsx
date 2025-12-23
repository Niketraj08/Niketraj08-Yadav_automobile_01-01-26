import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiFilter } from "react-icons/fi";
import { services } from "../data/siteContent.js";

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from services data
  const categories = ["All", ...new Set(services.map(service => {
    // Categorize services based on their icons/themes
    if (service.slug.includes('development') || service.slug.includes('software')) {
      return 'Development';
    } else if (service.slug.includes('mobile') || service.slug.includes('app')) {
      return 'Mobile';
    } else if (service.slug.includes('ai') || service.slug.includes('ml')) {
      return 'AI & ML';
    } else if (service.slug.includes('marketing') || service.slug.includes('digital')) {
      return 'Marketing';
    } else {
      return 'Design';
    }
  }))];

  // Filter services based on selected category
  const filteredServices = selectedCategory === "All"
    ? services
    : services.filter(service => {
        if (selectedCategory === 'Development') {
          return service.slug.includes('development') || service.slug.includes('software') || service.slug.includes('backend');
        } else if (selectedCategory === 'Mobile') {
          return service.slug.includes('mobile') || service.slug.includes('app');
        } else if (selectedCategory === 'AI & ML') {
          return service.slug.includes('ai') || service.slug.includes('ml');
        } else if (selectedCategory === 'Marketing') {
          return service.slug.includes('marketing') || service.slug.includes('digital') || service.slug.includes('seo');
        } else if (selectedCategory === 'Design') {
          return service.slug.includes('ui') || service.slug.includes('ux') || service.slug.includes('design');
        }
        return false;
      });

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
            <h1 className="text-4xl font-bold md:text-6xl mb-6">Our Services</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Comprehensive software solutions and digital services to transform your business.
              From custom development to AI-powered applications, we deliver excellence.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                Get Started <FiArrowRight className="h-5 w-5" />
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
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Explore Our Services</h2>
              <p className="text-slate-600">Filter by category to find the perfect solution for your needs</p>
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <FiCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Learn More <FiArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              We combine technical expertise, innovative solutions, and dedicated support
              to deliver exceptional results for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "Agile development with quick iterations and rapid deployment."
              },
              {
                icon: "🔒",
                title: "Security First",
                description: "Built-in security measures and compliance with industry standards."
              },
              {
                icon: "⚡",
                title: "Performance",
                description: "Optimized for speed, scalability, and exceptional user experience."
              },
              {
                icon: "🤝",
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance services."
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss your project requirements and create a custom solution
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Your Project <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
