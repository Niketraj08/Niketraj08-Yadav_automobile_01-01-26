import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/siteContent.js";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Our Services
            </span>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Comprehensive capabilities
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            From discovery to scale, we build products that are performant, secure, and lovable.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-primary/20"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <motion.div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-3xl text-white shadow-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="mb-4 text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={service.path || `/services/${service.slug}`}
                      className="group/link flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Learn more
                      <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/#contact"
                      className="text-sm font-semibold text-slate-400 transition-colors hover:text-white"
                    >
                      Quick quote
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary opacity-0 transition-all duration-500 group-hover:opacity-60 group-hover:animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-purple-500 opacity-0 transition-all duration-700 group-hover:opacity-40 group-hover:animate-ping"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

