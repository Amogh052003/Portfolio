import { skills } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Skills() {
  return (
    <section id="skills" className="space-y-10">
      {/* HEADER */}
      <RevealSection>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold glow-text">
            Technical Skills
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl">
            Tools, platforms, and technologies I use to design, automate,
            and operate cloud-native systems.
          </p>
        </div>
      </RevealSection>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <RevealSection key={skill.title}>
            <div
              className="
                glass p-8 space-y-5
                border border-transparent
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Accent strip */}
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70" />

              <h3 className="text-lg font-semibold">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.split(",").map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 text-xs rounded-full
                      bg-[rgba(56,189,248,0.08)]
                      border border-[rgba(56,189,248,0.25)]
                      text-cyan-300
                    "
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
