import Photo from "@/components/Photo";
import Social from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-6 xl:pt-9 xl:pb-12 h-full">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-xl xl:text-2xl mb-2 xl:mb-0">
              Hello, I'm <br />
              <span className="h2 text-accent">Muhammed Jasir M</span>
            </h1>

            <span className="text-xl">Software Developer</span>

            <p className="max-w-[500px] mb-4 mt-4 xl:mt-2.5 text-white/80">
              I'm a software developer based in Kerala, India. I have a passion
              for software development and love to create things that make a
              difference. I specialize in Flutter, React, and MERN stack
              development.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant={"outline"}
                size={"lg"}
                className="flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
