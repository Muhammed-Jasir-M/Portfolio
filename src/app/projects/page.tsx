"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { projects } from "@/constants/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import { FaAndroid, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const Projects = () => {
  return (
    <motion.section
      className="container mx-auto mb-3 px-3 lg:px-4"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.8, ease: "easeOut" },
      }}
    >
      <h2 className="capitalize text-3xl md:text-5xl font-bold text-center py-5">
        {projects.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.items.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
          >
            <Card className="backdrop-blur-sm transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <a href={project.image} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-[250px]"
                    width={300}
                    height={250}
                    quality={100}
                    priority
                  />
                </div>
              </a>

              <CardContent className="">
                <CardTitle className="text-xl lg:text-2xl font-bold text-center text-accent mb-2">
                  {project.title}
                </CardTitle>

                <CardDescription className="mb-2 line-clamp-5 text-center leading-relaxed font-medium text-sm">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mt-2 mb-1.5 justify-center items-start h-[65px] overflow-hidden">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded line-clamp-1 overflow-hidden"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-6">
                  <div className="flex gap-4">
                    <a
                      href={
                        project.liveUrl == null
                          ? project.apkUrl
                          : project.liveUrl
                      }
                      target="_blank"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                            {project.liveUrl == null ? (
                              <FaAndroid className="text-white text-2xl group-hover:text-accent" />
                            ) : (
                              <FaLink className="text-white text-2xl group-hover:text-accent" />
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>

                    {project.repoType == "public" && (
                      <a href={project.githubUrl} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                              <FaGithub className="text-2xl text-white group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github repo</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    )}
                  </div>

                  <Link href="">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-accent-foreground group-hover:bg-accent transition-all duration-500 hover:-rotate-45 ">
                          <BsArrowDownRight className="text-primary text-2xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View more</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
