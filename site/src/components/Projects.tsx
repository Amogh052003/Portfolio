import { projects } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 space-y-10">
      <RevealSection>
        <h2 className="text-3xl font-semibold glow-text">Selected Projects</h2>
      </RevealSection>

      <div className="space-y-8">
        {projects.map((p) => (
          <RevealSection key={p.name}>
            <div className="glass p-6 sm:p-8 space-y-4 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition">
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-cyan-300">{p.stack}</p>
              <ul className="list-disc list-inside text-sm text-[var(--text-muted)]">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {p.link && (
                <a href={p.link} target="_blank" className="text-sm text-cyan-300">
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
