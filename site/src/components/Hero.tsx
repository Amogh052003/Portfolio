import Image from "next/image";
import { heroContent, stats } from "@/data/content";
import RevealSection from "@/components/RevealSection";

export default function Hero() {
  return (
    <section
      id="profile"
      className="scroll-mt-32 grid lg:grid-cols-2 gap-8 items-center min-h-[50vh] lg:min-h-[56vh]"
    >
      <div className="space-y-6">
        <RevealSection>
          <p className="font-mono text-sm text-[var(--accent-cyan)]">
            $ whoami
          </p>
        </RevealSection>

        <RevealSection>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            <span className="block text-white">Amogh Lokhande</span>
            <span className="glow-text">{heroContent.role}</span>
          </h1>
        </RevealSection>

        <RevealSection>
          <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-xl">
            {heroContent.subtitle}
          </p>
        </RevealSection>

        <RevealSection>
          <div className="flex flex-wrap gap-3 items-center">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a
              href="/Amogh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3">
            {stats.map((s) => (
              <div key={s.label} className="glass p-4">
                <p className="text-2xl glow-text">{s.value}</p>
                <p className="text-xs text-[var(--text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>

      <div className="hidden sm:block">
      <div className="relative mx-auto w-[280px] h-[380px] md:w-[340px] md:h-[460px]">
        {/* Glow halo */}
        <div
          className="
            absolute -inset-6 rounded-full
            bg-gradient-to-tr from-cyan-400/40 via-blue-500/30 to-violet-500/40
            blur-3xl opacity-70
          "
        />

        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src="/profile.jpg"
            alt="Amogh Lokhande"
            fill
            priority
            className="object-cover rounded-[2rem]"
          />

          {/* Bottom fade for blend */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>

    </section>
  );
}
