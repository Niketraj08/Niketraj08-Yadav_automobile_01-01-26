import { useState, useEffect } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const capabilities = [
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Agile sprints, quick iterations',
      gradient: 'from-primary/20 to-primary/10',
      border: 'border-primary/30',
      hoverBorder: 'hover:border-primary/50',
      hoverText: 'group-hover:text-primary'
    },
    {
      icon: '🔒',
      title: 'Secure & Scalable',
      description: 'Enterprise-grade solutions',
      gradient: 'from-cyan-500/20 to-cyan-500/10',
      border: 'border-cyan-400/30',
      hoverBorder: 'hover:border-cyan-400/50',
      hoverText: 'group-hover:text-cyan-300'
    },
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'Measurable business impact',
      gradient: 'from-purple-500/20 to-purple-500/10',
      border: 'border-purple-400/30',
      hoverBorder: 'hover:border-purple-400/50',
      hoverText: 'group-hover:text-purple-300'
    },
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'Cutting-edge technologies',
      gradient: 'from-emerald-500/20 to-emerald-500/10',
      border: 'border-emerald-400/30',
      hoverBorder: 'hover:border-emerald-400/50',
      hoverText: 'group-hover:text-emerald-300'
    }
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      style={{
        backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
      }}
    >
      {/* Enhanced Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(13,110,253,0.2),transparent_30%),radial-gradient(circle_at_40%_80%,rgba(168,85,247,0.1),transparent_40%)]" />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse delay-1000" />
        </div>

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
        <div className="absolute right-20 top-32 h-1 w-1 rounded-full bg-cyan-400 animate-glow-pulse delay-1000" />
        <div className="absolute left-1/4 bottom-32 h-3 w-3 rounded-full bg-purple-400 animate-glow-pulse delay-500" />
        <div className="absolute right-1/3 top-1/2 h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse delay-700" />
        <div className="absolute left-1/2 top-1/4 h-1 w-1 rounded-full bg-emerald-400 animate-glow-pulse delay-300" />
        <div className="absolute right-1/4 bottom-1/4 h-2 w-2 rounded-full bg-pink-400 animate-glow-pulse delay-800" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 pt-20 pb-12 sm:gap-12 sm:pt-24 sm:pb-20 md:flex-row md:items-center md:gap-16 lg:gap-20">
        {/* Left Content */}
        <div className={`flex-1 space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Enhanced Headline with Typing Effect */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className={`inline-block bg-gradient-to-r from-white via-cyan-100 to-primary bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : ''}`}>
                Build Tomorrow's
              </span>
              <br className="block sm:hidden" />
              <span className={`inline-block text-white transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : ''}`}>
                Digital Solutions
              </span>
              <br />
              <span className={`inline-block bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 delay-600 ${isVisible ? 'animate-slide-in-left' : ''}`}>
                Today
              </span>
            </h1>

            {/* Animated underline */}
            <div className={`h-1 w-16 sm:w-24 bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000 delay-900 ${isVisible ? 'animate-scale-in' : ''}`} />
          </div>

          {/* Enhanced Description */}
          <p className={`text-lg leading-relaxed text-slate-300 sm:text-xl md:text-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            We don't just build software — we craft digital experiences that drive growth,
            enhance user engagement, and transform your business vision into measurable success.
            <span className="text-primary font-semibold"> Powered by cutting-edge technology.</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-cyan-500 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-primary/50 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project
                <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 transition-transform duration-300 group-hover:scale-100" />
            </a>
            <a
              href="#services"
              className="group rounded-full border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-white/10 hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Our Work
                <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

        </div>

        {/* Enhanced Right Side */}
        <div className={`flex-1 mt-8 sm:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="relative">
            {/* Main Visual Card */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-500 group">
              {/* Enhanced Animated Background Elements */}
              <div className="absolute -left-8 -top-8 sm:-left-16 sm:-top-16 h-20 w-20 sm:h-40 sm:w-40 rounded-full bg-primary/20 blur-3xl animate-float-glow" />
              <div className="absolute -bottom-10 -right-8 sm:-bottom-20 sm:-right-16 h-24 w-24 sm:h-48 sm:w-48 rounded-full bg-cyan-400/20 blur-3xl animate-float-glow delay-1000" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 sm:h-32 sm:w-32 rounded-full bg-purple-400/10 blur-2xl animate-float-glow delay-500" />
              <div className="absolute top-1/4 right-1/4 h-12 w-12 sm:h-24 sm:w-24 rounded-full bg-emerald-400/15 blur-xl animate-float-glow delay-700" />

              <div className="relative space-y-4 sm:space-y-6">
                {/* Enhanced Service Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {capabilities.map((capability, index) => (
                    <div
                      key={capability.title}
                      className={`group rounded-xl sm:rounded-2xl bg-gradient-to-br ${capability.gradient} p-3 sm:p-4 md:p-5 border ${capability.border} ${capability.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer animate-slide-up`}
                      style={{ animationDelay: `${index * 200 + 500}ms` }}
                    >
                      <div className="text-xl sm:text-2xl mb-2 animate-bounce group-hover:animate-pulse">{capability.icon}</div>
                      <p className={`text-white font-semibold text-xs sm:text-sm ${capability.hoverText} transition-colors duration-300`}>
                        {capability.title}
                      </p>
                      <p className="text-xs text-slate-300 mt-1 group-hover:text-slate-200 transition-colors duration-300">
                        {capability.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Enhanced Floating Achievement Cards - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:block absolute -right-2 -top-2 sm:-right-4 sm:-top-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-cyan-500 p-2 sm:p-3 md:p-4 shadow-xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110 animate-float-reverse group cursor-pointer">
              <div className="text-lg sm:text-2xl group-hover:animate-spin">🏆</div>
              <div className="text-xs font-bold text-white mt-1 group-hover:text-cyan-100 transition-colors duration-300">Award Winning</div>
              <div className="text-xs text-white/80 group-hover:text-white transition-colors duration-300">Development Team</div>
            </div>

            <div className="hidden sm:block absolute -left-2 -bottom-2 sm:-left-4 sm:-bottom-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 md:p-4 shadow-xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 animate-float-reverse-delayed group cursor-pointer">
              <div className="text-lg sm:text-2xl group-hover:animate-bounce">⚡</div>
              <div className="text-xs font-bold text-white mt-1 group-hover:text-pink-100 transition-colors duration-300">24/7 Support</div>
              <div className="text-xs text-white/80 group-hover:text-white transition-colors duration-300">Always Available</div>
            </div>

            {/* New Achievement Card - Hidden on mobile */}
            <div className="hidden md:block absolute -right-6 top-1/2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-4 shadow-xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 animate-float-delayed group cursor-pointer">
              <div className="text-2xl group-hover:animate-pulse">🚀</div>
              <div className="text-xs font-bold text-white mt-1 group-hover:text-teal-100 transition-colors duration-300">100% Success Rate</div>
              <div className="text-xs text-white/80 group-hover:text-white transition-colors duration-300">Project Delivery</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;

