"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../../../StateContext";

export default function Skills() {
  const data = useContext(StateContext);
  const skills = data.skills;
  const skillData = skills?.filter((skill) => skill.enabled);
  return (
    <>
      {skillData && (
        <motion.div
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          {/* container */}
          <div className="container mx-auto">
            <h1 className=" text-center text-2xl font-extrabold">
              Profession Skills
            </h1>
            {skills?.map((skill) => (
              <div className="flex flex-col gap-4 mb-3 mx-36" key={skill._id}>
                <div className="flex gap-2">
                  <div id={skill.image._id}>
                    <Image
                      src={skill.image.url}
                      alt={skill.name}
                      width={40}
                      height={40}
                      priority
                      dangerouslyallowsvg="true"
                    />
                  </div>
                  <h2 className=" text-m font-medium">{skill.name}</h2>
                </div>

                <div className=" flex  w-full bg-gray-500 h-1.5 rounded-full">
                  <div
                    className=" w-full bg-orange-700 h-1.5 rounded-full  text-black"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <div className=" font-bold">{skill.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
