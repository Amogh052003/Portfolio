import { skills } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-32 space-y-10">
      <RevealSection>
        <h2 className="text-3xl font-semibold glow-text">Technical Skills</h2>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <RevealSection key={skill.title}>
            <div className="glass p-6 sm:p-8 space-y-4 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition">
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              <h3 className="font-semibold">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.split(",").map((i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 text-xs rounded-full border border-cyan-400/30 text-cyan-300"
                  >
                    {i.trim()}
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
