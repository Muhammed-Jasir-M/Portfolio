import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export const home = {
  name: "Muhammed Jasir M",
  job: "Full Stack Developer",
  description:
    "I'm a passionate full-stack developer from Kerala, India, specializing in building innovative digital solutions. With expertise in Flutter, React, and MERN Stack, I craft seamless web and mobile experiences that solve real-world problems efficiently.",
  image: "/assets/hi.png",
  resume: "",
};

export const socials = [
  { icon: <FaGithub />, href: "https://github.com/Muhammed-Jasir-M" },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/Muhammed-Jasir-M",
  },
  { icon: <FaTwitter />, href: "https://x.com/mjasir_10" },
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
    num: 15,
    text: "Technologies mastered",
  },

  {
    num: 600,
    text: "Code commits",
  },
];
