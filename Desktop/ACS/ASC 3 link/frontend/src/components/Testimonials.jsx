import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { testimonials } from "../data/siteContent.js";
import { FiMessageSquare, FiStar, FiTrendingUp } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const enhancedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    rating: 5,
    company: testimonial.role.split(', ')[1] || 'Company',
    avatar: `https://images.unsplash.com/photo-${1500 + index * 100}?w=100&h=100&fit=crop&crop=face`
  }));

  // Card design variants
  const cardDesigns = {
    classic: "classic", // Current design
    minimal: "minimal",
    modern: "modern",
    elegant: "elegant",
    vibrant: "vibrant"
  };

  const currentDesign = cardDesigns.vibrant; // Available designs: classic, minimal, modern, elegant, vibrant

  const renderCard = (testimonial, index) => {
    switch (currentDesign) {
      case cardDesigns.minimal:
        return (
          <motion.div
            className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                <FiMessageSquare className="h-5 w-5 text-slate-500" />
              </div>
              <div className="flex-1">
                <blockquote className="text-slate-700 leading-relaxed mb-4 text-sm">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case cardDesigns.modern:
        return (
          <motion.div
            className="relative h-full rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-transparent hover:border-primary/20 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <FiMessageSquare className="h-4 w-4 text-white" />
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-slate-700 leading-relaxed mb-6 text-base">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case cardDesigns.elegant:
        return (
          <motion.div
            className="relative h-full rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500 group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-900">
              <FiMessageSquare className="h-6 w-6 text-white" />
            </div>

            <div className="pt-6">
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.1, duration: 0.3 }}
                  >
                    <FiStar className="h-5 w-5 text-yellow-400 fill-current mx-0.5" />
                  </motion.div>
                ))}
              </div>

              <blockquote className="text-slate-200 leading-relaxed mb-8 text-lg italic text-center">
                "{testimonial.quote}"
              </blockquote>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center border-2 border-primary/30">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="text-white font-semibold text-lg mb-1">{testimonial.name}</p>
                <p className="text-slate-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        );

      case cardDesigns.vibrant:
        return (
          <motion.div
            className="relative h-full rounded-3xl overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 p-8 text-white">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FiMessageSquare className="h-5 w-5 text-white" />
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-sm font-bold text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
          </motion.div>
        );

      default: // classic design
        return (
          <motion.div
            className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl hover:border-primary/30 transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <FiMessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FiStar key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-slate-200 leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
          </motion.div>
        );
    }
  };

  return (
    <section id="testimonials" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-6 backdrop-blur-sm">
            <FiMessageSquare className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium text-primary uppercase tracking-wide">Client Success Stories</p>
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our clients say about working with AstraCognix
            and how we've helped transform their businesses.
          </p>
        </motion.div>

        {/* Enhanced Swiper */}
        <div className="relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            className="pb-16"
          >
            {enhancedTestimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                {renderCard(testimonial, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <FiTrendingUp className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-slate-400">Client Satisfaction</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <FiStar className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-slate-400">Average Rating</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <FiMessageSquare className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-slate-400">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;

