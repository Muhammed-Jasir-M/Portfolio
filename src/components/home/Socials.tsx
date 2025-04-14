import { socials } from "@/constants/home";
import Link from "next/link";

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
