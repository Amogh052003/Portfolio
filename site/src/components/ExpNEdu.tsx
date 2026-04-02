import {
  experience,
  education,
  certifications,
  experienceSkillBars,
  experienceSummaryBullets,
} from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function ExpNEdu() {
  const primaryExperience = experience[0];

  return (
    <section className="space-y-14">
      <section id="experience" className="scroll-mt-32 space-y-6">
        <RevealSection>
          <h2 className="text-3xl font-semibold glow-text">Experience</h2>
        </RevealSection>

        <RevealSection>
          <div className="glass p-6 sm:p-8 space-y-6 max-w-3xl">
            <div className="space-y-2">
              <p className="font-medium">{primaryExperience?.role ?? "Experience"}</p>
              <p className="text-sm text-[var(--text-muted)]">
                {primaryExperience?.period ??
                  "Hands-on experience in production-grade Kubernetes, CI/CD automation, and cloud infrastructure."}
              </p>
            </div>

            <div className="space-y-4">
              {experienceSkillBars.map((s) => (
                <div key={s.label} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">{s.label}</span>
                    <span className="text-[var(--text-muted)]">{s.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <ul className="list-disc list-inside text-sm text-[var(--text-muted)] space-y-1">
              {(primaryExperience?.bullets ?? experienceSummaryBullets).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {experience.slice(1).map((e) => (
          <RevealSection key={e.role}>
            <div className="glass p-6 space-y-2 hover:-translate-y-0.5 transition">
              <p className="font-medium">{e.role}</p>
              <p className="text-sm text-[var(--text-muted)]">{e.period}</p>
              <ul className="list-disc list-inside text-sm text-[var(--text-muted)] space-y-1">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </RevealSection>
        ))}
      </section>

      <section id="education" className="scroll-mt-32 space-y-6">
        <RevealSection>
          <h2 className="text-3xl font-semibold glow-text">Education</h2>
        </RevealSection>

        <RevealSection>
          <div className="glass p-6">
            <p>{education.school}</p>
            <p className="text-sm text-[var(--text-muted)]">{education.degree}</p>
          </div>
        </RevealSection>
      </section>

      <section className="space-y-6">
        <RevealSection>
          <h2 className="text-3xl font-semibold glow-text">Certifications</h2>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <RevealSection key={c.name}>
              <div className="glass p-6 space-y-2">
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{c.issuer}</p>
                {c.link && (
                  <a href={c.link} target="_blank" className="text-xs text-cyan-300">
                    View Credential →
                  </a>
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </section>
    </section>
  );
}
