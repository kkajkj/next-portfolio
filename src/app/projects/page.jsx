"use client";
import { userData } from "../../utils/api";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";
import SortDropdown from "@/components/SortDropdown";
import FilterBar from "@/components/FilterBar";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState("");
  const [sortType, setSortType] = useState("sequence");

  useEffect(() => {
    const getData = async () => {
      const result = await userData();
      setProjects(result?.user?.projects);
    };
    getData();
  }, []);

  const enabledFieldData = projects?.filter((project) => project.enabled);
  const handleFilter = (techStack) => {
    setSelectedTechStack(techStack);
  };

  const filteredProjects = projects.filter((project) => {
    if (!selectedTechStack) {
      return true;
    }
    return project.techStack.some((tech) =>
      tech.toLowerCase().includes(selectedTechStack.toLowerCase())
    );
  });

  const sortProjects = (type) => {
    const sorted = [...filteredProjects].sort((a, b) => {
      if (type === "sequence") {
        return a.sequence - b.sequence;
      }
      // Add more sorting options if needed
    });

    setProjects(sorted);

    setSortType(type);
  };

  const techStacks = [
    ...new Set(
      projects
        ?.flatMap((project) => project.techStack)
        .map((stack) => stack.trim())
    ),
  ];

  return (
    <>
      {enabledFieldData && (
        <motion.div
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className=" overflow-x-hidden">
            <FilterBar handleFilter={handleFilter} techStacks={techStacks} />
            <SortDropdown sortProjects={sortProjects} />
            <ProjectList
              filteredProjects={filteredProjects}
              projects={projects}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
