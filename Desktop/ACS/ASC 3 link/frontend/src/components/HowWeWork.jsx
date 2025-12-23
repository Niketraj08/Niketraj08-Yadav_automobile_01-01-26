import { motion } from "framer-motion";
import { FiCrosshair, FiSearch, FiCode, FiZap, FiTrendingUp, FiUsers, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, challenges, and vision. Our team conducts thorough research and creates a strategic roadmap.",
    icon: <FiSearch className="h-8 w-8" />,
    color: "from-blue-500 to-primary",
    details: ["Requirements gathering", "Market research", "Technical feasibility", "Project scoping"]
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates intuitive user experiences and interactive prototypes that bring your vision to life.",
    icon: <FiCrosshair className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
    details: ["UI/UX design", "Wireframing", "Prototyping", "User testing"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Our engineers build robust, scalable solutions using cutting-edge technologies with rigorous testing at every stage.",
    icon: <FiCode className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500",
    details: ["Agile development", "Code reviews", "Automated testing", "Performance optimization"]
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We ensure smooth deployment and provide ongoing support to keep your solution running optimally.",
    icon: <FiZap className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    details: ["Deployment", "Monitoring", "Maintenance", "Continuous improvement"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function HowWeWork() {
  return (
    <section id="process" className="relative bg-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-6">
            <FiTrendingUp className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium text-primary uppercase tracking-wide">Our Process</p>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl mb-6">
            How We
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"> Transform Ideas</span>
            <br />
            Into Digital Reality
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures every project delivers exceptional results, from concept to launch and beyond.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-primary z-0" />

          <div className="grid gap-12 lg:grid-cols-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-6 shadow-lg relative z-10">
                  <span className="text-2xl font-bold text-slate-700">{step.step}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-xl relative z-10`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-6 z-20">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100">
                      <FiArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
