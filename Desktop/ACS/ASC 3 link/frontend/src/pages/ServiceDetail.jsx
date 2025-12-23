import { Link, useParams } from "react-router-dom";
import { services } from "../data/siteContent.js";

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Service not found</h1>
        <p className="mt-3 text-slate-600">The service you’re looking for is unavailable.</p>
        <Link to="/" className="mt-4 rounded-full bg-primary px-5 py-2 text-white">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Services</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">{service.longDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
            {service.highlights?.map((item) => (
              <span key={item} className="rounded-full border border-white/20 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/#contact" className="rounded-full bg-primary px-5 py-3 text-white shadow-lg hover:bg-primary/90">
              Talk to us
            </a>
            <a href="/#portfolio" className="rounded-full border border-white/30 px-5 py-3 text-white hover:bg-white/10">
              View related work
            </a>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900">What you get</h2>
            <p className="mt-3 text-slate-700">
              We tailor engagement models to your roadmap—whether you need discovery, a product squad, or end-to-end
              delivery. Expect transparent milestones, demos each sprint, and a focus on measurable outcomes.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Dedicated delivery pod with engineering lead and QA</li>
              <li>• Architecture, security, and performance reviews baked into sprints</li>
              <li>• Documentation, runbooks, and handover support</li>
              <li>• Optional support SLAs with monitoring and incident response</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-card">
            <h3 className="text-lg font-semibold text-slate-900">Engagement snapshot</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Discovery & estimation</li>
              <li>Design & prototyping</li>
              <li>Iterative delivery (Agile)</li>
              <li>QA automation & UAT</li>
              <li>Launch & hypercare</li>
            </ul>
            <Link
              to="/#services"
              className="mt-4 block rounded-full bg-primary px-4 py-3 text-center text-white hover:bg-primary/90"
            >
              Back to services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;

