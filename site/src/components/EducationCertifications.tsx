import { education, certifications } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function EducationCertifications() {
  return (
    <section className="space-y-14">
      <section
        id="education"
        className="scroll-mt-32 space-y-6"
      >
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
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-cyan-300"
                  >
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

