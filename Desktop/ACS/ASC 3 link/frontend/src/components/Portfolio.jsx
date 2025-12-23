import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { portfolio } from "../data/siteContent.js";

const filters = ["All", "Web", "Mobile", "AI", "E-commerce"];

function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return portfolio;
    return portfolio.filter((item) => item.tag === active);
  }, [active]);

  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Portfolio</p>
          <h2 className="text-3xl font-bold md:text-4xl">Case studies & launches</h2>
          <p className="mt-3 text-slate-600">Real-world solutions across industries.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === f ? "border-primary bg-primary text-white" : "border-slate-200 text-slate-700 hover:border-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl border border-slate-100 shadow-card">
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image}&auto=format&fit=crop&w=800&q=80)` }}
              />
              <div className="p-4">
                <p className="text-xs font-semibold text-primary">{item.category}</p>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.summary || "High-availability solution with measurable impact."}</p>
                <div className="mt-3 flex items-center justify-between text-sm font-semibold">
                  <Link to={`/portfolio/${item.slug}`} className="text-primary hover:text-primary/80">
                    Learn more →
                  </Link>
                  <Link to="/#contact" className="text-slate-500 hover:text-slate-800">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

