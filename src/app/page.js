"use client";
import { userData } from "../utils/api";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const result = await userData();
      console.log(result.user.about.avatar.url);
      setData(result);
    };
    getData();
  }, []);
  const url = data?.user?.about?.avatar?.url;

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-10 lg:px-15 xl:px-20">
        {/* IMAGE CONTAINER */}
        {url && (
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src={url} alt="avatar" width={300} height={300} />
          </div>
        )}

        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold ">
            {data?.user?.about?.title}
          </h1>
          <p className="md:text-xl">
            {`Hi Iam ${data?.user?.about?.name} `}
            {data?.user?.about?.subTitle}
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/projects">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                view my work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
