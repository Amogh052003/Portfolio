import { projects } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <RevealSection>
        <h2 className="text-3xl font-semibold glow-text">
          Selected Projects
        </h2>
      </RevealSection>

      <div className="space-y-8">
        {projects.map((project) => (
          <RevealSection key={project.name}>
            <div
              className="
                glass p-8 space-y-4
                border border-transparent
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Accent strip */}
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70" />

              <h3 className="text-xl font-semibold">
                {project.name}
              </h3>

              <p className="text-sm bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {project.stack}
              </p>

              <ul className="list-disc list-inside text-sm text-[var(--text-muted)] space-y-1">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-cyan)] hover:text-white transition"
                >
                  GitHub Link
                </a>
              )}
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
