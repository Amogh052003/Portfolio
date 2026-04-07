"use client";

import { projects } from "@/data/content";
import RevealSection from "@/components/RevealSection";
import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const displayedProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-32 space-y-8">
      <RevealSection>
        <h2 className="text-3xl font-semibold glow-text">Selected Projects</h2>
      </RevealSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((p) => {
          const tags = p.stack
            .split("·")
            .map((t: string) => t.trim())
            .filter(Boolean);

          const Card = p.link ? "a" : "div";

          return (
            <RevealSection key={p.name}>
              <Card
                {...(p.link
                  ? {
                      href: p.link,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": `Open GitHub repo for ${p.name}`,
                    }
                  : {})}
                className="glass block p-6 space-y-4 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300">
                    {p.category}
                  </span>
                  <div className="h-1 w-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2" />
                </div>

                <h3 className="text-lg font-semibold">{p.name}</h3>

                <ul className="space-y-2 list-disc list-inside text-sm text-[var(--text-muted)]">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 6).map((t: string) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded-full border border-white/10 text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <span className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200 transition">
                    View code →
                  </span>
                )}
              </Card>
            </RevealSection>
          );
        })}
      </div>

      {!expanded && projects.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => setExpanded(true)}
            className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition"
          >
            Show More Projects
          </button>
        </div>
      )}
    </section>
  );
}
