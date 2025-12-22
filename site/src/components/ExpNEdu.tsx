import {
  experience,
  education,
  certifications,
} from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function ExpNEdu() {
  return (
    <section className="space-y-10">
      {/* EXPERIENCE */}
      <section id="experience" className="space-y-6">
        <RevealSection>
          <h2 className="text-3xl font-semibold glow-text">
            Experience
          </h2>
        </RevealSection>

        {experience.map((exp) => (
          <RevealSection key={exp.role}>
            <div className="glass p-6 space-y-2">
              <p className="font-medium">
                {exp.role}
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                {exp.period}
              </p>
              <ul className="list-disc list-inside text-sm text-[var(--text-muted)] space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </RevealSection>
        ))}
      </section>

      {/* EDUCATION */}
      <section id="education" className="space-y-6">
        <RevealSection>
          <h2 className="text-3xl font-semibold glow-text">
            Education
          </h2>
        </RevealSection>

        <RevealSection>
          <div className="glass p-6 max-w-3xl">
            <p className="font-medium">
              {education.school}
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              {education.degree}
            </p>
          </div>
        </RevealSection>
      </section>

      {/* CERTIFICATIONS */}
      <section className="space-y-6">
        <RevealSection>
          <h2 className="text-3xl font-semibold glow-text">
            Certifications
          </h2>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <RevealSection key={cert.name}>
              <div className="glass p-6 space-y-3">
                <img
                  src={cert.badge}
                  alt={cert.name}
                  className="h-12"
                />

                <p className="text-sm font-medium">
                  {cert.name}
                </p>

                <p className="text-xs text-[var(--text-muted)]">
                  {cert.issuer}
                </p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-xs text-[var(--accent-cyan)] hover:underline"
                  >
                    {cert.linkLabel ?? "View credential"} →
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
