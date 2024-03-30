"use client";
import { userData } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectCard({ project }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await userData();
      setData(result?.user?.projects);
    };
    getData();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        src={project?.image?.url}
        alt="projectImage"
        width={500}
        height={300}
        priority
        className=" object-cover"
      />
      <div className="flex flex-wrap justify-center px-2 py-1 gap-1">
        {project?.techStack.map((tech, index) => (
          <span
            key={index}
            className=" bg-gray-900 rounded-xl px-2 py-1 text-white "
          >
            {tech}
          </span>
        ))}
      </div>

      <Link href="/projectDetail">
        <button className="text-gray-950 bg-blue-500 font-medium px-4 py-1 my-3 rounded-md mx-auto cursor-pointer hover:text-white">
          View Details
        </button>
      </Link>
    </div>
  );
}
