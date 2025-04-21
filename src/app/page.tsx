import Photo from "@/components/home/Photo";
import Social from "@/components/home/Socials";
import Stats from "@/components/home/Stats";
import { Button } from "@/components/ui/button";
import { home } from "@/constants/home";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between px-0 lg:px-6 xl:px-0 lg:pt-8 lg:pb-16">
            <div className="text-center lg:text-left order-2 lg:order-none">
              <h1 className="text-xl lg:text-2xl mb-2 lg:mb-0">
                Hello, I&apos;m <br />
                <span className="h2 text-accent">{home.name}</span>
              </h1>

              <span className="text-xl">{home.job}</span>

              <p className="max-w-[500px] mb-4 mt-4 lg:mt-2.5 text-white/80">
                {home.description}
              </p>

              <div className="flex flex-col lg:flex-row items-center gap-8 ">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>

                <div className="mb-8 lg:mb-0">
                  <Social />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-none mb-8 lg:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
}
