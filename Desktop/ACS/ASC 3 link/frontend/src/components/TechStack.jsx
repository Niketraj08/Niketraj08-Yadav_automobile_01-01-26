import { useState } from "react";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "#3178C6" },
      { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
      { name: "Tailwind CSS", icon: "fas fa-palette", color: "#06B6D4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Express", icon: "fas fa-server", color: "#000000" },
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    ],
  },
  {
    id: "framework",
    label: "Framework",
    items: [
      { name: "Next.js", icon: "fab fa-react", color: "#000000" },
      { name: "NestJS", icon: "fas fa-cog", color: "#E0234E" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    items: [
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326CE5" },
      { name: "GitHub Actions", icon: "fab fa-github", color: "#2088FF" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: [
      { name: "AWS", icon: "fab fa-aws", color: "#FF9900" },
      { name: "Azure", icon: "fab fa-microsoft", color: "#0078D4" },
      { name: "Google Cloud", icon: "fab fa-google", color: "#4285F4" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: "fas fa-database", color: "#4169E1" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
      { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
    ],
  },
];

function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeCategory = CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="careers" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Technologies
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Range of Technologies, Tools, and Skill Sets
          </h2>
          <p className="mt-3 text-slate-500">
            Proven expertise across modern front-end, back-end, DevOps, cloud,
            and databases.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-6 border-b border-gray-200">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`relative pb-2 text-sm font-medium transition-colors md:text-base ${
                activeTab === cat.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {cat.label}
              {activeTab === cat.id && (
                <span className="absolute inset-x-0 -bottom-[1px] h-[3px] rounded-full bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Content box */}
        <div className="rounded-3xl bg-gray-50 px-6 py-10 shadow-sm md:px-10">
          <div className="grid grid-cols-2 items-center justify-items-center gap-10 sm:grid-cols-3 md:grid-cols-4">
            {activeCategory?.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                  <i
                    className={`${item.icon} text-3xl`}
                    style={{ color: item.color }}
                    aria-hidden="true"
                  ></i>
                </div>
                <p className="text-sm text-gray-700 md:text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;

