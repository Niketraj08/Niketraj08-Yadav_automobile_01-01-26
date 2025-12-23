import { useState } from "react";

const initial = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  message: "",
  botcheck: "",
};

function Contact() {
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
          message: form.message,
          botcheck: form.botcheck || "",
          from_name: "AstraCognix Website",
          subject: "New Get in Touch message",
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
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Get in Touch</p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Let’s talk about your project</h2>
          <p className="mt-3 text-slate-600">
            Tell us about your goals. We’ll craft a tailored approach with the right mix of discovery, design, and
            engineering.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>📍 Bhubaneswar, Odisha 752054</p>
            <p>📞 +91-62028-08498</p>
            <p>✉️ astracognixsolutions@gmail.com</p>
            <iframe
              title="Map"
              className="mt-4 w-full rounded-2xl border border-slate-200"
              height="200"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7540584989576!2d77.0669!3d28.5448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d68226e9b5%3A0x27426e92748ad6b6!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000"
              allowFullScreen
            />
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-card">
          {/* Web3Forms honeypot field for basic spam protection */}
          <label className="sr-only" htmlFor="botcheck-contact">
            Bot check
          </label>
          <input
            type="checkbox"
            id="botcheck-contact"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            onChange={() => {}}
          />
          <div className="grid gap-4 md:grid-cols-2">
            <label htmlFor="contact-name" className="text-sm font-semibold text-slate-700">
              Name
              <input
                required
                id="contact-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label htmlFor="contact-email" className="text-sm font-semibold text-slate-700">
              Email
              <input
                required
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label htmlFor="contact-country-code" className="text-sm font-semibold text-slate-700">
              Country Code
              <select
                id="contact-country-code"
                name="countryCode"
                autoComplete="tel-country-code"
                value={form.countryCode}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+971">+971 (UAE)</option>
              </select>
            </label>
            <label htmlFor="contact-phone" className="text-sm font-semibold text-slate-700">
              Phone Number
              <input
                required
                type="tel"
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
          </div>
          <label htmlFor="contact-message" className="mt-4 block text-sm font-semibold text-slate-700">
            Message
            <textarea
              required
              id="contact-message"
              name="message"
              autoComplete="off"
              value={form.message}
              onChange={onChange}
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 w-full rounded-full bg-primary px-4 py-3 text-white font-semibold shadow-md hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>
          {status === "success" && <p className="mt-3 text-sm text-green-600">We received your inquiry!</p>}
          {status === "error" && <p className="mt-3 text-sm text-red-600">Something went wrong. Please retry.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

