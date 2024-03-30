"use client";
import ProjectCard from "@/components/ProjectCard";
import { userData } from "../utils/api";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../StateContext";
export default function ProjectList({ filteredProjects, projects }) {
  const data = useContext(StateContext);
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center flex-wrap gap-3">
        {filteredProjects?.length > 0
          ? filteredProjects?.map((project) => (
              <div key={project._id}>
                <ProjectCard project={project} />
              </div>
            ))
          : projects?.map((project) => (
              <div key={project._id}>
                <ProjectCard project={project} />
              </div>
            ))}
      </div>
    </motion.div>
  );
}
