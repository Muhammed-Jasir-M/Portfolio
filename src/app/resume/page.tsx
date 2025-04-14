import About from "@/components/resume/About";
import Certificates from "@/components/resume/Certificates";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Skills from "@/components/resume/Skills";
import { Certificate } from "crypto";

const Resume = () => {
  return (
    <section>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certificates />
    </section>
  );
};

export default Resume;
