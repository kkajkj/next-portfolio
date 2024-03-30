"use client";

import { userData } from "../../utils/api";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { StateContext } from "../../../StateContext";
export default function AboutPage() {
  const data = useContext(StateContext);
  const url = data?.about?.avatar?.url;
  const name = data?.about?.name;
  const title = data?.about?.title;
  const description = data?.about?.description;
  const exp_year = data?.about?.exp_year;
  const address = data?.about?.address;
  const quote = data?.about?.quote;

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="px-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 flex flex-col gap-24 ">
        {/* IMAGECONTAINER */}
        <div>
          <h1 className="font-bold text-2xl">About</h1>
          <Image src={url} alt="avatar" width={300} height={400} />
        </div>
        {/* TEXTCONTAINER */}
        <div className="flex flex-col gap-4  ">
          <h2>{`Hey there! I'm ${name}, a passionate ${title} based in ${address}, America. With ${exp_year} years of experience, I specialize in crafting immersive 3D visuals, intuitive user interfaces, and dynamic web applications.`}</h2>
          <h1 className="font-bold text-2xl">My Aim</h1>
          <p className="text-lg">{description}</p>
          <h1 className="font-bold text-2xl">My Philosophy</h1>
          <span className="italic">{quote}</span>
          <p className="text-lg">
            This simple mantra encapsulates my approach to both work and life. I
            believe in seizing opportunities, embracing challenges, and living
            with purpose.
          </p>
        </div>
        <EducationTimeline />
        <ExperienceTimeline />
      </div>
    </motion.div>
  );
}
