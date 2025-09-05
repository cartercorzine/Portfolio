
import { useMemo } from "react";
import { Github, Mail, ExternalLink, BarChart3, Database, LineChart, BrainCircuit } from "lucide-react";

// === EDIT ME: Your info ===
const YOUR_NAME = "Carter Corzine";
const TAGLINE = "Statistics & Data Science graduate — building practical, business-focused data solutions.";
const LOCATION = "San Diego, CA";
const EMAIL = "carter.corzine@gmail.com"; // swap to your real email
const GITHUB = "https://github.com/cartercorzine"; // swap to your GitHub
const RESUME_URL = "#"; // link to Google Drive PDF or similar

// === EDIT ME: Projects ===
// Add or edit projects by modifying the objects below.
const PROJECTS = [
  {
    title: "Grocery Bread Sales Forecasting (ARIMA)",
    blurb:
      "Built ARIMA models to forecast weekly demand across bread SKUs, improving on naive baselines; created KPI dashboard and ordering playbook.",
    tags: ["Python", "ARIMA", "Time Series", "Forecasting"],
    highlights: [
      "Engineered features (seasonality, promotions) and compared ARIMA vs. ETS",
      "Reduced MAPE ~18% vs. store’s manual method (course project)",
      "Delivered ordering thresholds + safety-stock calculator",
    ],
    links: {
      code: "#", // GitHub repo
      demo: "#", // live notebook render or blog
    },
    icon: <LineChart className="w-5 h-5" />,
  },
  {
    title: "Espresso Steam-Wand Quality (Six Sigma DMAIC)",
    blurb:
      "Applied DMAIC to stabilize steaming consistency; control charts and CTQs identified special-cause variation and reduced defects.",
    tags: ["R", "Six Sigma", "SPC", "Control Charts"],
    highlights: [
      "Built X̄–R charts; flagged out-of-control points",
      "Defined CTQs and rolled-throughput yield",
      "Standardized SOPs; variance down ~30%",
    ],
    links: { code: "#", demo: "#" },
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    title: "Skin-Lesion Image Classification (HAM10000)",
    blurb:
      "Trained CNN baseline and classical ML with transfer learning for multi-class skin lesion classification; compared ROC-AUC across classes.",
    tags: ["Python", "TensorFlow", "Computer Vision", "ML"],
    highlights: [
      "Data augmentation pipeline + class imbalance handling",
      "Transfer-learned model improved macro AUC by ~0.12",
      "Logged experiments; confusion-matrix driven error analysis",
    ],
    links: { code: "#", demo: "#" },
    icon: <BrainCircuit className="w-5 h-5" />,
  },
  {
    title: "Bayesian A/B Test Simulator",
    blurb:
      "Interactive notebook to compare frequentist and Bayesian inference for conversion experiments; posterior updates and decision rules.",
    tags: ["Python", "Bayesian", "A/B Testing", "MCMC"],
    highlights: [
      "Implemented Beta-Binomial model with posterior sampling",
      "Expected loss curves to choose ship/hold",
      "Reusable helper functions + plot utilities",
    ],
    links: { code: "#", demo: "#" },
    icon: <Database className="w-5 h-5" />,
  },
];

export default function App() {
  const currentYear = new Date().getFullYear();
  const nav = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#about" className="font-semibold tracking-tight">
            {YOUR_NAME}
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-white/90 text-neutral-300">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={GITHUB}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-neutral-700 hover:bg-neutral-900"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-neutral-700 hover:bg-neutral-900"
            >
              <ExternalLink className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="about" className="max-w-5xl mx-auto px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {YOUR_NAME}
            </h1>
            <p className="mt-3 text-lg text-neutral-300">{TAGLINE}</p>
            <p className="mt-2 text-sm text-neutral-400">{LOCATION}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Chip>Python</Chip>
              <Chip>R</Chip>
              <Chip>SQL</Chip>
              <Chip>Time Series</Chip>
              <Chip>Bayesian</Chip>
              <Chip>ML</Chip>
              <Chip>Data Viz</Chip>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-neutral-200">
                See Projects
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-900 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Contact
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl border border-neutral-800 p-5 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-xl">
              <h3 className="font-semibold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>🎓 B.S. in Statistics & Data Science (UCSB)</li>
                <li>🏪 Strong work ethic: worked while studying</li>
                <li>📈 Love applied, business-impact projects</li>
                <li>🤝 Team-first, clear communicator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          <a href={GITHUB} target="_blank" className="text-sm text-neutral-300 hover:underline">
            View all on GitHub →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={i} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition shadow-lg">
              <div className="p-5">
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-neutral-800 border border-neutral-700">
                    {p.icon}
                  </span>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, j) => (
                    <Chip key={j}>{t}</Chip>
                  ))}
                </div>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-neutral-300">
                  {p.highlights.map((h, k) => (
                    <li key={k}>{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3">
                  {p.links.demo && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-neutral-700 hover:bg-neutral-800"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                  {p.links.code && (
                    <a
                      href={p.links.code}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-neutral-700 hover:bg-neutral-800"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-4 pb-16">
        <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/40">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="mt-2 text-neutral-300 text-sm">
            I’m open to entry-level data roles, internships, and project collaborations. The fastest way to reach me is by email.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
        <p className="text-xs text-neutral-500 mt-6">© {currentYear} {YOUR_NAME}</p>
      </section>
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300">
      {children}
    </span>
  );
}
