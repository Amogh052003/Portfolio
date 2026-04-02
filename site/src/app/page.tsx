import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EducationCertifications from "@/components/EducationCertifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <EducationCertifications />
      <Contact />
    </>
  );
}
