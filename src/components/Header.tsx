import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-primary z-50 px-4 py-4 lg:py-6 shadow-md h-16 container mx-auto flex justify-between items-center">
      <Link href={"/"}>
        <h1 className="text-4xl font-semibold">
          Jasir<span className="text-accent">.</span>
        </h1>
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        <Navbar />
        <Link href={"mailto:jasirmm307@gmail.com"}>
          <Button variant={"outline"}>Hire me</Button>
        </Link>
      </div>

      <div className="lg:hidden flex gap-3">
        <Link href={"mailto:jasirmm307@gmail.com"}>
          <Button
            size="sm"
            variant={"outline"}
            className="px-4 py-2 rounded-xl"
          >
            Hire me
          </Button>
        </Link>
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
