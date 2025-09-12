
import { useMemo } from "react";
import { Github, Mail, ExternalLink, BarChart3, Database, LineChart, BrainCircuit } from "lucide-react";
import ProjectsGrid from "./components/ProjectsGrid";

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
      "Built SARIMA models to forecast daily sourdough loaf demand from 764 days of sales data, reducing waste and stock-outs. Incorporated weekly seasonality, log/differencing transformations, and residual diagnostics to improve ordering accuracy.",
    tags: ["R", "ARIMA", "Time Series", "Forecasting"],
    highlights: [
      "Collected and cleaned POS data via OCR + manual validation",
      "Engineered transformations to stabilize variance and remove weekly cycles",
      "SARIMA(1,1,1)(0,1,1)[7] achieved RMSE ≈ 5.7 loaves with reliable 28-day forecasts",
    ],
    links: {
      code: "https://github.com/cartercorzine/Time_Series_Bread_Project", // GitHub repo
      demo: "https://github.com/cartercorzine/Time_Series_Bread_Project/blob/main/Carter%20Corzine-174%20final%20project.pdf", // live notebook render or blog
    },
    icon: <LineChart className="w-5 h-5" />,
  },
  
  {
    title: "Espresso Steam-Wand Quality (Six Sigma DMAIC)",
    blurb:
      "Led a Six Sigma DMAIC project to reduce variation in espresso machine steam-wand diameters. Applied control charts, capability analysis, and root-cause analysis to identify tooling issues and implement improvements.",
    tags: ["R", "Six Sigma", "SPC", "Control Charts", "DIMAC"],
    highlights: [
      "Collected baseline data and built X-bar & R charts for process capability",
      "Conducted root-cause analysis and operator feedback sessions",
      "Proposed tooling/material improvements and control plan to maintain gains",
    ],
    links: { code: "https://github.com/cartercorzine/Espresso-Wand-Project", demo: "https://github.com/cartercorzine/Espresso-Wand-Project/blob/main/Final_Project.pdf" },
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    title: "Skin-Lesion Image Classification (HAM10000)",
    blurb:
      "Built deep learning and classical ML models for multi-class skin lesion classification using dermatoscopic images. Applied transfer learning and imbalance handling to improve diagnostic accuracy across 7 classes.",
    tags: ["Python", "TensorFlow", "Computer Vision", "ML"],
    highlights: [
      "Performed EDA on patient metadata + class distributions",
      "Developed CNN baseline and transfer learning model; tuned with data augmentation",
      "Improved macro ROC-AUC by mitigating class imbalance and leveraging pre-trained models",
    ],
    links: { code: "https://github.com/cartercorzine/Skin-Cancer-Detection", demo: "https://github.com/cartercorzine/Skin-Cancer-Detection/blob/main/Skin_Cancer_Detection_Final_Project.ipynb#" },
    icon: <BrainCircuit className="w-5 h-5" />,
  },
  {
    title: "Happiness Predictors",
    blurb:
      "A data science project analyzing global survey data to identify which economic, social, and health factors most strongly predict happiness across countries. Built regression and models to uncover patterns and provide interpretable insights.",
    tags: ["R", "Regression", "EDA", "MCMC"],
    highlights: [
      "Collected and cleaned World Happiness Report data",
      "Explored correlations between GDP, life expectancy, social support, freedom, and corruption perception.",
      "Identified top predictive features of happiness scores, with visualizations for interpretability.",
    ],
    links: { code: "https://github.com/cartercorzine/Happiness-Predictors", demo: "https://github.com/cartercorzine/Happiness-Predictors/blob/main/Final_Project.pdf" },
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "Design of Experiments Project",
    blurb:
      "Designed and executed a $2^3$ factorial experiment to study how paper clip placement (nose, middle, rear) affects flight distance in paper airplanes; applied DOE methods to test factor effects and interactions.",
    tags: ["R", "DOE", "ANOVA", "Data Visualization"],
    highlights: [
      "Conducted pilot study with replications + power analysis",
      "Randomized throw order; measured flight distance across 8 conditions",
      "ANOVA showed significant main effects + interactions, validating aerodynamic impact of mass distribution",
    ],
    links: { code: "https://github.com/cartercorzine/Design-of-Experiments", demo: "https://github.com/cartercorzine/Design-of-Experiments/blob/main/Paper_Airplane_Factorial_Design.pdf" },
    icon: <BrainCircuit className="w-5 h-5" />,
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
