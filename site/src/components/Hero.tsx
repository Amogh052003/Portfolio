import Image from "next/image";
import { heroContent, stats } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Hero() {
  return (
    <section
      id="profile"
      className="grid lg:grid-cols-2 gap-16 items-center"
    >
      {/* LEFT: CONTENT */}
      <div className="space-y-10">
        <RevealSection>
          <p className="font-mono text-sm text-[var(--accent-cyan)]">
            &gt; {heroContent.updated}
          </p>
        </RevealSection>

        <RevealSection>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            <span className="block text-white">
              Amogh Lokhande
            </span>
            <span className="glow-text">
              {heroContent.role}
            </span>
          </h1>
        </RevealSection>

        <RevealSection>
          <p className="text-xl text-[var(--text-muted)] max-w-xl">
            {heroContent.subtitle}
          </p>
        </RevealSection>

        <RevealSection>
          <p className="text-sm text-[var(--text-muted)] max-w-xl">
            {heroContent.highlights.join(" · ")}
          </p>
        </RevealSection>

        {/* CONTACT + SOCIAL LINKS */}
        <RevealSection>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${heroContent.contact.email}`}
              className="glass px-4 py-2 hover:border-[var(--accent-cyan)] transition"
            >
              📧 {heroContent.contact.email}
            </a>

            <a
              href={heroContent.contact.linkedin}
              target="_blank"
              className="glass px-4 py-2 hover:border-[var(--accent-blue)] transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href={heroContent.contact.github}
              target="_blank"
              className="glass px-4 py-2 hover:border-[var(--accent-violet)] transition"
            >
              🐙 GitHub
            </a>
          </div>
        </RevealSection>

        {/* STATS */}
        <RevealSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass p-5">
                <p className="text-3xl font-semibold glow-text">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {stat.hint}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>

      {/* RIGHT: PROFILE IMAGE */}
      <RevealSection>
        <div className="relative">
          {/* Glow halo */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500" />

          {/* Image container */}
          <div className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px] mx-auto">
            <Image
              src="/profile.jpg"
              alt="Amogh Lokhande"
              fill
              priority
              className="object-cover rounded-[2rem] grayscale-[10%]"
            />
            {/* Fade mask */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
