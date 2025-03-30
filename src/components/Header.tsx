import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="px-4 py-4 lg:py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Jasir<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <Link href={"/contact"}>
            <Button variant={"outline"}>Hire me</Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
