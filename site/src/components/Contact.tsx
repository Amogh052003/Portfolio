import { heroContent } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Contact() {
  const c = heroContent.contact;

  return (
    <section id="contact" className="scroll-mt-32 space-y-8">
      <RevealSection>
        <h2 className="text-3xl font-semibold glow-text">Contact</h2>
      </RevealSection>

      <div className="glass p-6 sm:p-10 max-w-4xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-[var(--text-muted)]">
            Available for new projects. Reach out and let’s build something
            production-ready.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Response time: within 24 hours.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${c.email}`}
            className="btn-primary inline-flex items-center justify-center"
          >
            📧 Email Me
          </a>
          <a
            href={c.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center justify-center"
          >
            🔗 LinkedIn
          </a>
          <a
            href={c.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center justify-center"
          >
            🐙 GitHub
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 pt-2">
          <div className="glass p-4 space-y-2">
            <p className="text-xs text-[var(--text-muted)]">Email</p>
            <p className="font-medium">{c.email}</p>
          </div>
          <div className="glass p-4 space-y-2">
            <p className="text-xs text-[var(--text-muted)]">Phone</p>
            <p className="font-medium">{c.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

