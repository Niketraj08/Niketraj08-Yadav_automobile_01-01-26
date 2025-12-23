import { motion } from "framer-motion";
import { whyUs } from "../data/siteContent.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faRocket, faShieldAlt, faMicrochip, faGaugeHigh, faMobileScreenButton, faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

// Map icon strings to FontAwesome components
const iconMap = {
  faUserGraduate: faUserGraduate,
  faRocket: faRocket,
  faShieldAlt: faShieldAlt,
  faMicrochip: faMicrochip,
  faGaugeHigh: faGaugeHigh,
  faMobileScreenButton: faMobileScreenButton,
};

// Color mapping for each card
const colorMap = {
  faUserGraduate: "from-blue-500 to-primary",
  faRocket: "from-yellow-500 to-orange-500",
  faShieldAlt: "from-green-500 to-emerald-500",
  faMicrochip: "from-purple-500 to-pink-500",
  faGaugeHigh: "from-cyan-500 to-blue-500",
  faMobileScreenButton: "from-indigo-500 to-purple-500",
};

// Text color mapping for icons
const textColorMap = {
  faUserGraduate: "text-primary",
  faRocket: "text-yellow-500",
  faShieldAlt: "text-green-500",
  faMicrochip: "text-purple-500",
  faGaugeHigh: "text-cyan-500",
  faMobileScreenButton: "text-indigo-500",
};

// Features mapping for each card
const featuresMap = {
  faUserGraduate: ["Certified architects", "Domain specialists", "Continuous learning", "Global standards"],
  faRocket: ["2-week sprints", "Daily standups", "Sprint reviews", "Iterative delivery"],
  faShieldAlt: ["24/7 monitoring", "99.9% uptime SLA", "Incident response", "Proactive maintenance"],
  faMicrochip: ["React ecosystem", "Cloud platforms", "AI/ML frameworks", "DevOps tools"],
  faGaugeHigh: ["Lighthouse optimization", "Performance monitoring", "SEO best practices", "Mobile-first design"],
  faMobileScreenButton: ["Responsive design", "Cross-browser testing", "Accessibility compliance", "Device optimization"],
};

function WhyChooseUs() {
  const enhancedWhyUs = whyUs.map((item) => ({
    ...item,
    icon: <FontAwesomeIcon icon={iconMap[item.icon]} className={`h-8 w-8 ${textColorMap[item.icon]}`} />,
    color: colorMap[item.icon],
    features: featuresMap[item.icon],
  }));

  return (
    <section id="why" className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Enhanced Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-6">
            <FontAwesomeIcon icon={faCrosshairs} className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium text-primary uppercase tracking-wide">Why Choose AstraCognix</p>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl mb-6">
            Excellence That
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"> Drives Results</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise, innovative thinking, and proven methodologies to deliver
            solutions that not only meet your requirements but exceed your expectations.
          </p>
        </motion.div>

        {/* Enhanced Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {enhancedWhyUs.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group relative rounded-3xl border border-slate-200/60 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />

              {/* Icon with Gradient Background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-6 shadow-lg`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {item.detail}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {item.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;

