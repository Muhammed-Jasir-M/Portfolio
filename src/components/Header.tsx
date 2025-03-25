import Link from "next/link"
import Navbar from "./Navbar"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="py-4 xl:py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link href={"/"}>
                <h1 className="text-4xl font-semibold">
                    Jasir<span className="text-accent">.</span>
                </h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Navbar />
                <Link href={"/contact"}>
                    <Button>Hire me</Button>
                </Link>
            </div>

            <div className="xl:hidden">

            </div>
        </div>
    </header>
  )
}

export default Header