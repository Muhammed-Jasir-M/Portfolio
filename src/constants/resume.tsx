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
  SiGetx,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const about = {
  title: "about me",
  name: "Muhammed Jasir M",
  image: "/assets/image.png",
  description:
    "I’m a passionate and self-driven developer from Kerala, India, with a deep interest in building impactful digital solutions. I specialize in Flutter, React, and MERN stack development, and I'm constantly exploring new technologies to grow as a full-stack and cross-platform developer. My journey in tech is fueled by curiosity, creativity, and a desire to solve real-world problems through code.",
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
        { name: "Dart", icon: <FaDartLang /> },
        { name: "C", icon: <FaC /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      subTitle: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      subTitle: "Mobile",
      skills: [
        { name: "Flutter", icon: <FaFlutter /> },
        { name: "GetX", icon: <SiGetx /> },
        { name: "BLoC", icon: <FaFlutter /> },
      ],
    },
    {
      subTitle: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
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
        { name: "Render", icon: <SiRender /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Canva", icon: <SiCanva /> },
      ],
    },
  ],
};

export const experience = {
  title: "My experience",
  items: [
    {
      company: "Personal Projects",
      companyLink: "/resume#projects",
      address: "Malappuram, Kerala",
      duration: "2022 - Present",
      position: "Self-Taught Developer",
      description:
        "As a self-taught developer, I’ve built a variety of personal projects that showcase my capabilities in both web and mobile development. These include responsive websites, mobile apps using Flutter, and full-stack solutions with the MERN stack. These hands-on experiences have honed my skills in debugging, problem-solving, and deploying real-world applications.",
    },
  ],
};

export const education = {
  title: "My education",
  items: [
    {
      institution: "Nasra College of Arts & Science",
      institutionLink: "https://www.nasracollege.com/",
      duration: "2022 - 2025",
      degree: "Bachelor of Computer Applications (BCA)",
      address: "Malappuram, Kerala",
      description:
        "Recently completed BCA, where I’ve built a strong foundation in computer science, data structures, and software engineering practices.",
    },
    {
      institution: "Cyra Learnings",
      institutionLink: "https://cyralearnings.com/",
      duration: "2023 - 2024",
      degree: "Flutter Development Program",
      address: "Malappuram, Kerala",
      description:
        "Completed a Flutter Development program, enhancing my skills in building cross-platform mobile applications.",
    },
    // {
    //   institution: "IISD",
    //   institutionLink: "https://iisdammam.edu.sa/",
    //   duration: "2020 - 2022",
    //   degree: "Higher Secondary (Bio-Computer)",
    //   address: "Dammam, KSA",
    //   description:
    //     "Completed higher secondary education with a focus on Biology and Computer Science, fostering analytical and technical skills.",
    // },
  ],
};

export const certificates = {
  title: "Certificates",
  items: [
    {
      image: "/assets/certificates/cyralearnings.jpeg",
      issuer: "Cyra Learnings",
      title: "Flutter Development Program",
      description:
        "Successfully completed a Flutter development program, acquiring in-depth knowledge of building cross-platform mobile applications with Flutter and Dart.",
    },
    {
      image: "/assets/certificates/linux-admin.png",
      issuer: "IWCampus",
      title: "Linux Administrator Training",
      description:
        "Completed a comprehensive Linux training program, gaining practical skills in system administration, server management, and shell scripting.",
    },
    {
      image: "/assets/certificates/generative-ai-model.jpeg",
      issuer: "NxtWave",
      title: "Generative AI Model Workshop",
      description:
        "Participated in a hands-on workshop exploring generative AI models, learning the fundamentals of creating intelligent applications using AI.",
    },
    {
      image: "/assets/certificates/upcode.jpeg",
      issuer: "Upcode",
      title: "Python AI Bootcamp",
      description:
        "Attended an intensive bootcamp focused on Python and AI, gaining expertise in building AI-driven applications and mastering Python programming.",
    },
    {
      image: "/assets/certificates/generative-ai-model.jpeg",
      issuer: "NxtWave",
      title: "Generative AI Model Workshop",
      description:
        "Participated in a hands-on workshop exploring generative AI models, learning the fundamentals of creating intelligent applications using AI.",
    },
  ],
};
