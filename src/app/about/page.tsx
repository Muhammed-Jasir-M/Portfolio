import Image from "next/image";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { FaFlutter, FaDartLang, FaC } from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
  SiVercel,
  SiFigma,
  SiCanva,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const about = {
  title: "About me",
  description:
    "I'm a passionate developer from Kerala, India, with a strong enthusiasm for building software and creating impactful solutions that make a difference. My expertise lies in Flutter, React, and MERN stack development, and I am always eager to learn and explore new technologies to enhance my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammed Jasir M",
    },
    {
      fieldName: "Email",
      fieldValue: "jasirmm307@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 95392 75280",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Place",
      fieldValue: "Malappuram, Kerala",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam, Hindi",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Reading, Writing, Coding, Travelling, Gaming",
    },
    {
      fieldName: "Interests",
      fieldValue: "Web Dev, Mobile Dev, AI/ML, Open Source",
    },
  ],
};

const skills = {
  title: "My Skills",
  skillList: [
    {
      subTitle: "Programming Languages",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "Dart", icon: <FaDartLang /> },
        { name: "C", icon: <FaC /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      subTitle: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Flutter", icon: <FaFlutter /> },
      ],
    },
    {
      subTitle: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      subTitle: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Canva", icon: <SiCanva /> },
      ],
    },
  ],
};

const About = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center pt-5">{about.title}</h2>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 justify-between items-center py-10 px-4">
          <div className="border-2 shadow-lg rounded-2xl bg-accent p-2.5 min-w-[252.5px] lg:max-w-[350px]">
            <Image
              src="/assets/image.png"
              alt="Jasir"
              className="rounded-xl object-cover"
              width={250}
              height={358}
              priority
              quality={100}
            />
          </div>

          <div className="flex-1 flex flex-col gap-2.5">
            <p className="text-white/60 text-center lg:text-left">
              {about.description}
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {about.info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-center lg:justify-start gap-1.5"
                  >
                    <span className="text-white/60">{item.fieldName}:</span>
                    <span className="text-white/80">{item.fieldValue}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center pt-5">{skills.title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 px-4">
          {skills.skillList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 border-2 shadow-lg rounded-2xl p-4"
              >
                <h3 className="text-3xl font-semibold text-center">
                  {item.subTitle}
                </h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  {item.skills.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1"
                      >
                        <span className="text-5xl text-accent">
                          {skill.icon}
                        </span>
                        <span className="text-white/80">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
