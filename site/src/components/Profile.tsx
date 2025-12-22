import { profileText } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Profile() {
  return (
    <section id="profile">
      <RevealSection>
        <div className="glass p-10 max-w-4xl space-y-3">
          <h2 className="text-3xl font-semibold glow-text">
            Profile
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            {profileText}
          </p>
        </div>
      </RevealSection>
    </section>
  );
}
