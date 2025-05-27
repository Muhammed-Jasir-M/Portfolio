import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export const home = {
  name: "Muhammed Jasir M",
  job: "Software Developer",
  description:
    "I'm a passionate software developer from Kerala, India, specializing in building innovative digital solutions. With expertise in Flutter, React, and MERN Stack, I craft seamless web and mobile experiences that solve real-world problems efficiently.",
  image: "/assets/profile/muhammed-jasir-m.png",
  resume: "/assets/resume/react-developer.pdf",
};

export const socials = [
  { icon: <FaGithub />, href: "https://github.com/Muhammed-Jasir-M" },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/Muhammed-Jasir-M",
  },
  { icon: <FaTwitter />, href: "https://x.com/Muhammed_Jasir1" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_jasir_10" },
];

export const stats = [
  {
    num: 1,
    text: "Years of experience",
  },

  {
    num: 20,
    text: "Projects completed",
  },

  {
    num: 24,
    text: "Technologies mastered",
  },

  {
    num: 600,
    text: "Code commits",
  },
];
