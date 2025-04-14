import About from "@/components/resume/About";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Skills from "@/components/resume/Skills";

const Resume = () => {
  return (
    <section>
      <About />
      <Skills />
      <Experience />
      <Education />
    </section>
  );
};

export default Resume;
