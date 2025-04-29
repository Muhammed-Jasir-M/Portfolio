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

const MotionCard = motion(Card);

const Projects = () => {
  return (
    <motion.section
      className="container mx-auto py-12 mb-3 px-3 lg:px-4 min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.8, ease: "easeOut" },
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <MotionCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
            whileHover={{
              y: -8,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
            className="bg-gradient-to-br from-primary-foreground to-primary-foreground/95 backdrop-blur-sm transition-all duration-300"
          >
            <a href={project.image} target="_blank" rel="noopener noreferrer">
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg object-cover w-full h-[200px]"
                  width={300}
                  height={200}
                  quality={100}
                  priority
                />
              </div>
            </a>
            <CardContent className="">
              <CardTitle className="text-xl lg:text-2xl font-bold text-center text-accent mb-1.5">
                {project.title}
              </CardTitle>

              <CardDescription className="mb-1.5 line-clamp-3 text-center leading-relaxed font-medium">
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
                      project.liveUrl == null ? project.apkUrl : project.liveUrl
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

                  <a href={project.githubUrl} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className={`w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group ${
                            project.repoType == "private" ? "opacity-50" : ""
                          }`}
                        >
                          <FaGithub
                            className={`text-2xl ${
                              project.repoType == "private"
                                ? "text-white/50"
                                : "text-white group-hover:text-accent"
                            }`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          {project.repoType == "private"
                            ? "Private repo"
                            : "Github repo"}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
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
          </MotionCard>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
