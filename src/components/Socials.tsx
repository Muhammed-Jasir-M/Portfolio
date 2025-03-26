import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "" },
  { icon: <FaLinkedinIn />, href: "" },
  { icon: <FaTwitter />, href: "" },
  { icon: <FaInstagram />, href: "" },
];

const Social = () => {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.href}
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
