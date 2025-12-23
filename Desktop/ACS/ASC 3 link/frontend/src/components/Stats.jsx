import { stats } from "../data/siteContent.js";

function Stats() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 rounded-3xl bg-slate-50 p-8 shadow-card md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl">{item.icon}</div>
              <p className="mt-2 text-3xl font-bold text-primary">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

