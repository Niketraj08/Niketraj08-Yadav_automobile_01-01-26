import { motion } from "framer-motion";
import { FiArrowRight, FiPhone, FiMail, FiCalendar, FiZap, FiLock, FiTrendingUp } from "react-icons/fi";

function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-6 backdrop-blur-sm">
                <FiZap className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium text-primary uppercase tracking-wide">Ready to Get Started?</p>
              </div>
              <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                Let's Build Something
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"> Extraordinary</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mt-6">
                Transform your vision into reality with our expert team. From concept to launch,
                we're here to make your digital dreams come true.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <FiLock className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">100% Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <FiTrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-sm">Proven Track Record</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <FiCalendar className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-sm">Quick Response Time</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <FiZap className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-sm">Dedicated Support Team</span>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <p className="text-slate-300 font-medium">Choose how you'd like to connect:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <FiPhone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <p className="text-slate-400 text-sm">+91 98765 43210</p>
                  </div>
                </a>
                <a
                  href="mailto:hello@astracognix.com"
                  className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <FiMail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-slate-400 text-sm">hello@astracognix.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
              {/* Animated Background Elements */}
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-purple-400/10 blur-2xl animate-pulse delay-500" />

              <div className="relative space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Share your project details and let's discuss how we can help you achieve your goals.
                    No obligation, just valuable insights.
                  </p>
                </div>

                {/* Form Preview */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  <button className="w-full py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <FiArrowRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="text-center space-y-2">
                  <p className="text-xs text-slate-400">Trusted by 25+ companies</p>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                ⚡ Quick Response
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-slate-400 text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-slate-400 text-sm">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-slate-400 text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
