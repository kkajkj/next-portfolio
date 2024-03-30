"use client";
import Link from "next/link";
import SampleVideo from "@/components/SampleVideo";
import { StateContext } from "../../../StateContext";
import { useContext } from "react";
export default function ProjectDetails() {
  const data = useContext(StateContext);
  const youtubeData = data?.youtube;
  const key = data?.youtube?.[0]._id;
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeData?.[0].embedId}`;
  const enabledFieldData = youtubeData?.[0].enabled;
  return (
    <>
      {enabledFieldData && (
        <div className=" overflow-x-hidden">
          <div className=" ml-24">
            <h1 className=" text-blue-500 font-bold text-6xl">
              <em>Zara</em>
            </h1>
            <h2 className=" text-blue-700 font-medium">Fashion Buisness</h2>
          </div>

          <div className="flex flex-wrap content-stretch justify-around items-baseline gap-3 relative mb-4">
            <div className="flex mr-72 font-semibold">
              <div className=" flex flex-col items-center">
                <h2>Year:</h2>
                <span>2015</span>
              </div>
              <div className=" flex flex-col items-center ml-5 ">
                <h2>Headquarter:</h2>
                <span>India</span>
              </div>

              <div className="flex flex-col items-center ml-5">
                <h2>Categories:</h2>
                <span>Men&Women</span>
              </div>
            </div>

            <div className="flex gap-2 relative top-[-5rem] right-[-11rem] sm:top-0 sm:right-0">
              <Link href="#">
                <button className="text-gray-950 bg-blue-500 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white">
                  Github
                </button>
              </Link>
              <Link href="#">
                <button className="text-gray-950 bg-blue-500 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white">
                  Live Preview
                </button>
              </Link>
            </div>
          </div>
          <div className=" mx-8 sm:mx-6 sm:flex items-center  justify-center">
            <SampleVideo
              youtubeData={youtubeData}
              youtubeUrl={youtubeUrl}
              id={key}
            />
          </div>
        </div>
      )}
    </>
  );
}
