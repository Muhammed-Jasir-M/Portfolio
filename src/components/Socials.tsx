import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Muhammed-Jasir-M" },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/Muhammed-Jasir-M",
  },
  { icon: <FaTwitter />, href: "https://x.com/mjasir_10" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_jasir_10" },
];

const Social = () => {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
