"use client";

import { useMemo, useState } from "react";
import { skillGroups } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Skills() {
  const [expanded, setExpanded] = useState(false);

  const previewHeadings = useMemo(
    () => new Set(["Cloud & Infrastructure", "Containers & Orchestration", "CI/CD & GitOps"]),
    []
  );

  const groupsToRender = expanded
    ? skillGroups
    : skillGroups.filter((g) => previewHeadings.has(g.heading));

  return (
    <section id="skills" className="scroll-mt-32 space-y-8">
      <RevealSection>
        <h2 className="text-3xl font-semibold glow-text">Tech Stack</h2>
      </RevealSection>

      <div className="space-y-10">
        {groupsToRender.map((group) => (
          <div key={group.heading} className="space-y-3">
            <RevealSection>
              <h3 className="text-xl font-semibold glow-text">
                {group.heading}
              </h3>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {group.cards.map((c) => (
                <RevealSection key={c.title}>
                  <div className="glass p-5 space-y-3 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{c.title}</h3>
                      <span className="text-[10px] px-2 py-1 rounded-full border border-cyan-400/30 text-cyan-300">
                        {c.level}
                      </span>
                    </div>
                    <div className="h-1 w-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                      {c.items}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        ))}

        {!expanded && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-expanded={expanded}
              className="btn-outline inline-flex items-center justify-center"
            >
              Show all skills →
            </button>
          </div>
        )}

        {expanded && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-expanded={expanded}
              className="btn-outline inline-flex items-center justify-center"
            >
              Collapse skills
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
