import { profileText } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Profile() {
  return (
    <section className="scroll-mt-32 space-y-6">
      <RevealSection>
        <h2 className="text-3xl font-semibold glow-text">Profile</h2>
      </RevealSection>

      <RevealSection>
        <div className="glass p-6 sm:p-8 max-w-3xl space-y-3">
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {profileText}
          </p>
        </div>
      </RevealSection>
    </section>
  );
}
