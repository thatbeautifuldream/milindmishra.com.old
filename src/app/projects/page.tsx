"use client";

import ProjectCard from "./_components/project-card";
import { projects } from "~/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
        >
          <ProjectCard key={index} project={project} />
        </motion.div>
      ))}
    </div>
  );
}
