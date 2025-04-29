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
  SiTailwindcss,
  SiBootstrap,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const about = {
  title: "about me",
  name: "Muhammed Jasir M",
  image: "/assets/image.png",
  description:
    "I'm a passionate developer from Kerala, India, with a strong enthusiasm for building software and creating impactful solutions that make a difference. My expertise lies in Flutter, React, and MERN stack development, and I am always eager to learn and explore new technologies to enhance my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammed Jasir M",
    },
    { fieldName: "Age", fieldValue: "21" },
    {
      fieldName: "DOB",
      fieldValue: "10th Feb 2004",
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
      fieldName: "Email",
      fieldValue: "jasirmm307@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 95392 75280",
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

export const skills = {
  title: "my skills",
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
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Flutter", icon: <FaFlutter /> },
      ],
    },
    {
      subTitle: "State Management",
      skills: [
        { name: "GetX (Flutter)", icon: <FaFlutter /> },
        { name: "BLoC (Flutter)", icon: <FaFlutter /> },
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
        { name: "Render", icon: <SiRender /> },
      ],
    },
  ],
};

export const experience = {
  title: "My experience",
  items: [
    {
      company: "Personal Projects",
      companyLink: "/",
      address: "Malappuram, Kerala",
      duration: "2022 - Present",
      position: "Self-Taught Developer",
      description:
        "I have been actively building personal projects to enhance my skills in web and mobile development. These projects include creating responsive websites, mobile applications using Flutter, and full-stack applications using the MERN stack. Through these projects, I have gained hands-on experience in problem-solving, debugging, and implementing modern technologies.",
    },
  ],
};

export const education = {
  title: "My education",
  items: [
    {
      institution: "Nasra College of Arts & Science, Thirurkad",
      institutionLink: "",
      duration: "2022 - 2025",
      degree: "Bachelor of Computer Applications (BCA)",
      address: "Malappuram, Kerala",
      description:
        "I completed my Bachelor of Computer Applications (BCA) degree, gaining a strong foundation in computer science and software development.",
    },
    {
      institution: "Cyra Learnings",
      institutionLink: "",
      duration: "2023 - 2025",
      degree: "Flutter Development",
      address: "Malappuram, Kerala",
      description:
        "I completed a Flutter Development program, enhancing my skills in building cross-platform mobile applications.",
    },
    {
      institution: "IISD",
      institutionLink: "",
      duration: "2020 - 2022",
      degree: "11th & 12th Std (Bio-Computer)",
      address: "Dammam, KSA",
      description:
        "I pursued my higher secondary education with a focus on Biology and Computer Science, building a strong academic foundation in both fields.",
    },
  ],
};

export const certificates = {
  title: "Certificates",
  items: [
    {
      image: "/assets/certificates/generative-ai-model.jpeg",
      issuer: "NxtWave",
      title: "Generative AI Model Workshop",
      description:
        "Attended a workshop on Generative AI, where I gained hands-on experience in creating AI models.",
    },
    {
      image: "/assets/certificates/linux-admin.png",
      issuer: "IWCampus",
      title: "Linux Administrator Training",
      description:
        "Completed training on Linux administration, covering essential system management and networking concepts.",
    },
  ],
};
