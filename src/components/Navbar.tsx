"use client";

import { links } from "@/constants/navs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent-foreground transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
