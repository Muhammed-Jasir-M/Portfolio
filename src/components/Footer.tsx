"use client";

import { footerLinks } from "@/constants/navs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="w-full border-t-2 border-white/20">
      <div className="container mx-auto py-6 mt-2.5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-accent border-b-2 border-accent"
                  : "text-white/60 hover:border-b border-accent"
              } text-sm md:text-base lg:text-lg font-bold hover:text-accent-foreground capitalize cursor-pointer transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/20"></div>
      <div className="container mx-auto pt-6 border-white/20 pb-8 flex flex-col md:flex-row gap-1.5 items-center justify-between">
        <p className="text-sm text-white/60">
          {new Date().getFullYear()} &copy; All rights reserved.
        </p>
        <p className="text-sm text-white/60">
          Built with <span className="text-red-800">&#9825;</span> by
          <span className="text-accent"> Muhammed Jasir M</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
