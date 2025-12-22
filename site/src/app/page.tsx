import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExpNEdu from "@/components/ExpNEdu";

export default function Home() {
  return (
    <main className="space-y-40 py-32">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <ExpNEdu />
    </main>
  );
}
