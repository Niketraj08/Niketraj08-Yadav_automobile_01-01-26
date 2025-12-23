import { useState } from "react";

const initial = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  company: "",
  service: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  botcheck: "",
};

function GetQuote() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d7559736-92a8-47b2-905f-3e8636130c0a",
          name: form.name,
          email: form.email,
          country_code: form.countryCode,
          phone: form.phone,
          company: form.company,
          service: form.service,
          project_type: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
          botcheck: form.botcheck || "",
          from_name: "AstraCognix Website",
          subject: "New Quote Request",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(initial);
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-16 pt-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Get a Quote</p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl mt-2">
            Let's Build Something Amazing Together
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Tell us about your project requirements. We'll provide you with a detailed quote and timeline
            to bring your vision to life.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-card">
          {/* Web3Forms honeypot field for basic spam protection */}
          <label className="sr-only" htmlFor="botcheck-quote">
            Bot check
          </label>
          <input
            type="checkbox"
            id="botcheck-quote"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            onChange={() => {}}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <label htmlFor="quote-name" className="text-sm font-semibold text-slate-700">
              Full Name *
              <input
                required
                id="quote-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
                placeholder="Enter your full name"
              />
            </label>

            <label htmlFor="quote-email" className="text-sm font-semibold text-slate-700">
              Email Address *
              <input
                required
                type="email"
                id="quote-email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
                placeholder="your@email.com"
              />
            </label>

            <label htmlFor="quote-company" className="text-sm font-semibold text-slate-700">
              Company Name
              <input
                id="quote-company"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
                placeholder="Your company name"
              />
            </label>

            <label htmlFor="quote-country-code" className="text-sm font-semibold text-slate-700">
              Country Code *
              <select
                id="quote-country-code"
                name="countryCode"
                autoComplete="tel-country-code"
                value={form.countryCode}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+971">+971 (UAE)</option>
              </select>
            </label>

            <label htmlFor="quote-phone" className="text-sm font-semibold text-slate-700">
              Phone Number *
              <input
                required
                type="tel"
                id="quote-phone"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
                placeholder="Your phone number"
              />
            </label>

            <label htmlFor="quote-service" className="text-sm font-semibold text-slate-700">
              Service Required *
              <select
                required
                id="quote-service"
                name="service"
                value={form.service}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
              >
                <option value="">Select a service</option>
                <option value="custom-software-development">Custom Software Development</option>
                <option value="mobile-app-development">Mobile App Development</option>
                <option value="web-development">Web Development</option>
                <option value="ecommerce-development">E-commerce Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="ai-ml-solutions">AI/ML Solutions</option>
                <option value="support-maintenance">Support & Maintenance</option>
                <option value="consulting">Consulting Services</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label htmlFor="quote-project-type" className="text-sm font-semibold text-slate-700">
              Project Type
              <select
                id="quote-project-type"
                name="projectType"
                value={form.projectType}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
              >
                <option value="">Select project type</option>
                <option value="new-development">New Development</option>
                <option value="redesign">Redesign/Revamp</option>
                <option value="migration">System Migration</option>
                <option value="integration">Third-party Integration</option>
                <option value="maintenance">Maintenance & Support</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label htmlFor="quote-budget" className="text-sm font-semibold text-slate-700">
              Budget Range
              <select
                id="quote-budget"
                name="budget"
                value={form.budget}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </label>

            <label htmlFor="quote-timeline" className="text-sm font-semibold text-slate-700">
              Preferred Timeline
              <select
                id="quote-timeline"
                name="timeline"
                value={form.timeline}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-months-plus">6+ months</option>
                <option value="flexible">Flexible</option>
              </select>
            </label>
          </div>

          <label htmlFor="quote-message" className="mt-6 block text-sm font-semibold text-slate-700">
            Project Details *
            <textarea
              required
              id="quote-message"
              name="message"
              autoComplete="off"
              value={form.message}
              onChange={onChange}
              rows={6}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-primary"
              placeholder="Please describe your project requirements, goals, and any specific features or functionalities you need..."
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-8 w-full rounded-full bg-primary px-6 py-4 text-white font-semibold shadow-md hover:bg-primary/90 disabled:opacity-60 transition-all duration-200"
          >
            {status === "loading" ? "Submitting Quote Request..." : "Get My Free Quote"}
          </button>

          {status === "success" && (
            <div className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-700 border border-green-200">
              <p className="font-semibold">Thank you for your quote request!</p>
              <p className="mt-1">We'll review your requirements and get back to you within 24 hours with a detailed proposal.</p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-700 border border-red-200">
              <p className="font-semibold">Something went wrong.</p>
              <p className="mt-1">Please try again or contact us directly at astracognixsolutions@gmail.com</p>
            </div>
          )}

          <p className="mt-4 text-xs text-slate-500 text-center">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

export default GetQuote;
