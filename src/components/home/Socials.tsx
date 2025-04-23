import { socials } from "@/constants/home";
import Link from "next/link";

interface SocialProps {
  isSquare?: boolean;
}

const Social = ({ isSquare }: SocialProps) => {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className={`${isSquare ? "w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-primary-foreground text-accent rounded-md flex items-center justify-center" : "w-13 h-13 border border-gray-100 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}`}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
