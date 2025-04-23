import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export const home = {
  name: "Muhammed Jasir M",
  job: "Software Developer",
  description:
    "I'm a software developer based in Kerala, India. I have a passion for software development and love to create things that make a difference. I specialize in Flutter, React, and MERN Stack development.",
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
    num: 2,
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
    num: 500,
    text: "Code commits",
  },
];
