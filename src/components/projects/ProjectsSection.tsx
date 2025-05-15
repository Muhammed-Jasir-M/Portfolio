"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { ProjectsSectionProps } from "@/interface/projects";

export const ProjectsSection = ({
  title,
  projects,
  currentPage,
  totalPages,
  onPageChange,
  totalProjects,
}: ProjectsSectionProps) => {
  return (
    <>
      <h2 className="capitalize text-3xl md:text-5xl font-bold text-center pt-10">
        {title} ({totalProjects})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 lg:min-h-[70vh]">
        {projects.map((project, index) => (
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
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <span className="flex items-center px-4 py-2 text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outline"
          onClick={() =>
            onPageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </>
  );
};
