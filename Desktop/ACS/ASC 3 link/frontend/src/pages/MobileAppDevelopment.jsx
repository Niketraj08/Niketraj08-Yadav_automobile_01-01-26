import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";

const subServices = [
  { title: "Android App Development", detail: "Native Kotlin/Java builds with material design & Play Store readiness." },
  { title: "iOS App Development", detail: "Swift/SwiftUI apps tuned for performance, accessibility, and App Store success." },
  { title: "Flutter Development", detail: "Single codebase, native-like performance, rapid release cycles." },
  { title: "React Native Development", detail: "Shared code with native modules for critical performance paths." },
];

const process = [
  "Product discovery, user journeys, and technical blueprint",
  "Design system, UI/UX prototypes, and usability validation",
  "Agile delivery with CI/CD, QA automation, and observability",
  "Launch, store submission support, analytics, and growth experiments",
];

const industries = ["FinTech & Payments", "HealthTech", "Retail & E-commerce", "Mobility & Logistics", "EdTech", "Enterprise Productivity"];

const faqs = [
  { q: "Do you handle app store submissions?", a: "Yes—store listings, screenshots, policies, and review responses are included." },
  { q: "Can you work with existing codebases?", a: "We audit, refactor, and extend existing apps, adding tests and CI/CD where needed." },
  { q: "How do you ensure performance and security?", a: "Profiling, caching strategies, secure storage, OWASP checks, and dependency audits." },
];

const partnerPoints = [
  {
    title: "Agile Development",
    detail: "Speed up delivery with agile client-centric sprints, CI/CD, and continuous feedback loops.",
    bg: "bg-rose-50",
  },
  {
    title: "On-Demand Services",
    detail: "Flexible engagement and payment models tailored to on-time delivery for your roadmap.",
    bg: "bg-cyan-50",
  },
  {
    title: "Instant Support",
    detail: "24/7 availability for queries, incidents, and releases to keep your app running smoothly.",
    bg: "bg-indigo-50",
  },
  {
    title: "Fastest Hiring",
    detail: "Rapidly spin up vetted pods with cross-functional experts across mobile, backend, and QA.",
    bg: "bg-fuchsia-50",
  },
];

const techCards = [
  "React Native",
  "Flutter",
  "Swift / SwiftUI",
  "Kotlin",
  "Firebase",
  "Tailwind",
  "Node.js",
  ".NET",
  "AWS",
  "PostgreSQL",
];

function MobileAppDevelopment() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(13,110,253,0.3),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Services</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Mobile App Development</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            Native and cross-platform apps engineered for reliability, great UX, and secure scale—covering Android, iOS, Flutter, and React Native.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-white/20 px-3 py-1">Offline-first experiences</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Secure auth & payments</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Analytics & growth</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/#contact" className="rounded-full bg-primary px-5 py-3 text-white shadow-lg hover:bg-primary/90">
              Talk to us
            </a>
            <a href="/#portfolio" className="rounded-full border border-white/30 px-5 py-3 text-white hover:bg-white/10">
              View mobile work
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Why partner with AstraCognix</p>
            <h2 className="text-3xl font-bold text-slate-900">Built for speed, quality, and scale</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              Fast, flexible, future-ready delivery pods that keep your mobile roadmap on track.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {partnerPoints.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-slate-100 p-5 shadow-card ${item.bg}`}
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900">Industry & Technology</h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                Experienced pods across industries with the stacks you rely on—connect your mobile product to the right technologies without limits.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {industries.map((item) => (
                  <div key={item} className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full border border-slate-100 bg-white p-6 text-center shadow-card">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Stacks we love</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-semibold text-slate-800">
                {techCards.map((tech) => (
                  <div key={tech} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">What we deliver</h2>
              <p className="text-slate-700">
                Strategy, design, development, QA, and launch support across Android, iOS, Flutter, and React Native. We align on KPIs—activation, retention, performance, and stability—then build against them.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {subServices.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-card">
              <h3 className="text-lg font-semibold text-slate-900">Engagement snapshot</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Discovery & tech audit</li>
                <li>Design system & prototypes</li>
                <li>Agile delivery with demos</li>
                <li>QA automation & performance</li>
                <li>Store submission & launch</li>
                <li>Monitoring, A/B tests, growth</li>
              </ul>
              <Link
                to="/#contact"
                className="mt-4 block rounded-full bg-primary px-4 py-3 text-center text-white hover:bg-primary/90"
              >
                Schedule a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Delivery process</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-sm font-semibold text-primary">Step {i + 1}</div>
                <p className="mt-2 text-sm text-slate-100">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">Industries served</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {industries.map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-white">{item.q}</summary>
                <p className="mt-2 text-sm text-slate-200">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <section className="py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 rounded-3xl bg-primary px-6 py-8 text-white shadow-card md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em]">Ready to build?</p>
            <h3 className="text-2xl font-semibold">Let’s craft your next mobile experience</h3>
            <p className="text-sm text-white/90">We align on KPIs and deliver with speed, quality, and transparency.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/#contact" className="rounded-full bg-white px-5 py-3 text-primary font-semibold shadow-md">
              Start a project
            </Link>
            <a
              href="/#services"
              className="rounded-full border border-white/60 px-5 py-3 text-white font-semibold hover:bg-white/10"
            >
              View all services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileAppDevelopment;

