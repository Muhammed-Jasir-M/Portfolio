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
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const MotionCard = motion(Card);

const Projects = () => {
  return (
    <motion.section
      className="container mx-auto py-12 px-2.5 lg:px-4 min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <MotionCard
  key={project.id}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring" }}
  className="hover:shadow-xl transition duration-300"
>
	<a href={project.image} target="_blank" rel="noopener noreferrer">
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-lg object-cover w-full"
              width={500}
              height={192}
            />
</a>
            <CardContent className="">
              <CardTitle className="text-xl lg:text-2xl font-bold text-center text-accent mb-1.5">
                {project.title}
              </CardTitle>

              <CardDescription className="mb-1.5 line-clamp-3 text-center leading-relaxed font-medium">
                {project.description}
              </CardDescription>

              <div className="flex flex-wrap gap-2 mt-2 mb-1.5 justify-center">
                {project.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="line-clamp-1 text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaLink className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaGithub className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </div>
                <Link
                  href=""
                  className="w-[50px] h-[50px] rounded-full bg-accent group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl" />
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
