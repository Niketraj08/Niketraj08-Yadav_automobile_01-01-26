import { Link, useParams } from "react-router-dom";
import { portfolio } from "../data/siteContent.js";

function PortfolioDetail() {
  const { slug } = useParams();
  const project = portfolio.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Case study not found</h1>
        <p className="mt-3 text-slate-600">The project you’re looking for is unavailable.</p>
        <Link to="/" className="mt-4 rounded-full bg-primary px-5 py-2 text-white">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(13,110,253,0.25),transparent_25%)]" />
        <div className="relative mx-auto max-w-5xl px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Case study</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{project.title}</h1>
          <p className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
            {project.category}
          </p>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            {project.summary || "High-impact delivery with measurable outcomes."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="rounded-full bg-primary px-5 py-3 text-white shadow-lg hover:bg-primary/90"
            >
              Start a similar project
            </Link>
            <Link
              to="/#services"
              className="rounded-full border border-white/30 px-5 py-3 text-white hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div
            className="h-72 rounded-3xl bg-cover bg-center shadow-card"
            style={{ backgroundImage: `url(${project.image}&auto=format&fit=crop&w=1400&q=80)` }}
          />
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-slate-900">Overview</h2>
              <p className="mt-3 text-slate-700">
                This case study highlights how AstraCognix delivered a scalable solution with a focus on performance,
                reliability, and user delight. We aligned on KPIs, shipped iterative releases, and ensured observability
                for continuous improvements.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">What we built</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Core features shipped with high availability and fast response times</li>
                <li>• Secure authentication, audit trails, and role-based access</li>
                <li>• Analytics and dashboards to measure adoption and engagement</li>
                <li>• Automated testing and CI/CD pipelines for reliable releases</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-card">
              <h3 className="text-lg font-semibold text-slate-900">Impact</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Faster go-live with agile delivery</li>
                <li>• Improved conversion/retention through UX polish</li>
                <li>• Reduced incidents via observability and QA automation</li>
              </ul>
              <Link
                to="/#contact"
                className="mt-4 block rounded-full bg-primary px-4 py-3 text-center text-white hover:bg-primary/90"
              >
                Request a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioDetail;

