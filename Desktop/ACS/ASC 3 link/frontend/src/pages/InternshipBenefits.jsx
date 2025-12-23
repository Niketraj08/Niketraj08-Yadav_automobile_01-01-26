import { motion } from "framer-motion";
import { FiTrendingUp, FiUsers, FiAward, FiBriefcase, FiCode, FiDollarSign, FiHeart, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

function InternshipBenefits() {
  const benefits = [
    {
      icon: <FiCode className="h-8 w-8" />,
      title: "Technical Skills Development",
      description: "Master modern technologies and frameworks through hands-on projects and mentorship.",
      details: ["React, Node.js, Python", "Database design & APIs", "Version control & deployment", "Best coding practices"]
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Industry Experience",
      description: "Work on real client projects and gain valuable professional experience.",
      details: ["Live project exposure", "Agile development process", "Client interaction", "Team collaboration"]
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "Build your resume, network with professionals, and accelerate your career path.",
      details: ["Portfolio development", "Industry networking", "Mentorship opportunities", "Job placement support"]
    },
    {
      icon: <FiAward className="h-8 w-8" />,
      title: "Recognition & Rewards",
      description: "Get recognized for your contributions with certificates, stipends, and recommendations.",
      details: ["Completion certificate", "Letter of recommendation", "Performance-based stipend", "Achievement awards"]
    }
  ];

  const perks = [
    {
      icon: <FiDollarSign className="h-6 w-6" />,
      title: "Competitive Stipend",
      description: "₹15,000 - ₹25,000 per month based on performance and role"
    },
    {
      icon: <FiBriefcase className="h-6 w-6" />,
      title: "Flexible Work Hours",
      description: "Work-life balance with flexible timing and remote options"
    },
    {
      icon: <FiHeart className="h-6 w-6" />,
      title: "Learning Environment",
      description: "Access to workshops, online courses, and tech conferences"
    },
    {
      icon: <FiStar className="h-6 w-6" />,
      title: "Innovation Culture",
      description: "Work with cutting-edge technologies and creative solutions"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Former Intern, Now SDE at Google",
      quote: "The internship at AstraCognix gave me the confidence and skills to land my dream job. The mentorship was exceptional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Former Intern, Now Product Manager",
      quote: "I learned more in 8 weeks here than in my entire college curriculum. The real-world experience was invaluable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Arun Kumar",
      role: "Current Intern",
      quote: "The supportive environment and challenging projects have helped me grow tremendously as a developer.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
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
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Internship Benefits</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Transform Your Career</h1>
            <p className="mt-4 text-lg text-slate-200">
              Discover the incredible opportunities and benefits that come with interning at AstraCognix Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">What You'll Gain</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive development in technical skills, professional growth, and career advancement
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-2xl bg-slate-50 p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Rewards */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Perks & Rewards</h2>
            <p className="mt-4 text-lg text-slate-600">
              Enjoy competitive compensation and a supportive work environment
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {perk.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-slate-600 text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Success Stories</h2>
            <p className="mt-4 text-lg text-slate-600">
              Hear from our former interns who are now thriving in their careers
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic">"{testimonial.quote}"</blockquote>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              to="/internship/stories"
              className="inline-block rounded-full bg-primary px-6 py-3 text-white shadow-lg hover:bg-primary/90 transition-colors"
            >
              Read More Success Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Career Impact */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Career Impact</h2>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {[
                { metric: "85%", label: "Interns Get Job Offers" },
                { metric: "4.8/5", label: "Average Rating" },
                { metric: "100+", label: "Successful Alumni" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.metric}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="text-slate-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 text-slate-200">
              <p className="text-lg">
                Our internship program has helped hundreds of students launch successful careers in technology.
                Join our community of successful alumni working at top tech companies worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Take the first step towards a successful tech career with AstraCognix
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/internship/apply"
                className="rounded-full bg-primary px-8 py-4 text-white shadow-lg hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/internship/program"
                className="rounded-full border border-slate-300 px-8 py-4 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Learn About Program
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default InternshipBenefits;
