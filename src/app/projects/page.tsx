"use client";

import { projects, contributedProjects } from "@/constants/projects";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentContributedPage, setCurrentContributedPage] = useState(1);

  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.items.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.items.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalProjects = projects.items.length;

  const totalContributedPages = Math.ceil(
    contributedProjects.items.length / projectsPerPage
  );
  const indexOfLastContributedProject =
    currentContributedPage * projectsPerPage;
  const indexOfFirstContributedProject =
    indexOfLastContributedProject - projectsPerPage;
  const currentContributedProjects = contributedProjects.items.slice(
    indexOfFirstContributedProject,
    indexOfLastContributedProject
  );

  const totalContributedProjects = contributedProjects.items.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, currentContributedPage]);

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
        totalProjects={totalProjects}
        onPageChange={setCurrentPage}
      />

      <ProjectsSection
        title={contributedProjects.title}
        projects={currentContributedProjects}
        currentPage={currentContributedPage}
        totalPages={totalContributedPages}
        totalProjects={totalContributedProjects}
        onPageChange={setCurrentContributedPage}
      />
    </motion.section>
  );
};

export default Projects;
