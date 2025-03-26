"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

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
