// src/components/ProjectsGrid.jsx
import React from "react";

// ⚠️ Edit your project list in one place below.
// Add/remove items — the grid updates automatically.
const PROJECTS = [
  {
    title: "Skin Cancer Detection (HAM10000)",
    summary:
      "CNN with TensorFlow/Keras to classify skin lesion images (HAM10000) — healthcare computer vision project.",
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn"],
    links: {
      github: "https://github.com/yourusername/skin-cancer-detection",
      demo: null,
      report: null,
    },
    image: "/thumbnails/skin-cancer.png", // put a small PNG/JPG into /public/thumbnails
  },
  {
    title: "Bread Sales Forecasting (Trader Joe's)",
    summary:
      "Time‑series ARIMA forecasting in R to improve weekly ordering accuracy and reduce waste.",
    tech: ["R", "forecast", "ggplot2", "ARIMA"],
    links: {
      github: "https://github.com/yourusername/bread-forecasting",
      demo: null,
      report: null,
    },
    image: "/thumbnails/bread-forecast.png",
  },
];

function TechChips({ items = [] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((t) => (
        <span
          key={t}
          className="px-2 py-1 text-xs rounded-full bg-gray-100 border border-gray-200"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      {p.image && (
        <img
          src={p.image}
          alt={p.title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
        <TechChips items={p.tech} />
        <div className="mt-4 flex flex-wrap gap-3">
          {p.links.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              GitHub
            </a>
          )}
          {p.links.demo && (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              Live Demo
            </a>
          )}
          {p.links.report && (
            <a
              href={p.links.report}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              Report
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-gray-600 mt-2">
          A few selected works. Each card links to the repository and (when available) demos or reports.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
