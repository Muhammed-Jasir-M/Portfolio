"use client";

import { projects } from "@/constants/projects";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.items.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.items.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <motion.section
      className="container mx-auto mb-5 px-3 lg:px-4"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.8, ease: "easeOut" },
      }}
    >
      <ProjectsSection
        title={projects.title}
        projects={currentProjects}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </motion.section>
  );
};

export default Projects;
