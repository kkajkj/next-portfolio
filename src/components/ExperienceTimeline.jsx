"use client";
import { userData } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import workIcon from "../assets/work.svg";

import DateFormatter from "./DateFormatter";
import Image from "next/image";
import { StateContext } from "../../StateContext";

export default function ExperienceTimeline() {
  const data = useContext(StateContext);
  const timelineData = data?.timeline;
  const exp_year = data?.about?.exp_year;
  const experience = timelineData?.filter((ed) => !ed.forEducation);
  const enabledData = timelineData?.filter((ed) => ed.enabled);
  return (
    <>
      {enabledData && (
        <div className="flex flex-start ">
          <h1 className="font-bold text-3xl text-black relative top-0 left-0 mt-8 border-b-4 border-black mr-96">
            Experience
          </h1>
          <div>
            <h1 className=" font-semibold">
              <em>experienceYear:</em>
              <p className=" font-medium text-red-500">{exp_year}</p>
            </h1>
          </div>
        </div>
      )}
      {enabledData && (
        <div className="flex flex-col  justify-center items-center text-white text-base pb-8 sm:text-lg relative">
          {experience?.map((el) => {
            return (
              <div key={el?._id} className="flex m-4 relative">
                <div className="bg-yellow-500 w-0.5 h-12 translate-x-44 translate-y-96 opacity-60 sm:hidden"></div>
                <div className="bg-yellow-500 w-0.5 h-12 translate-x-96 translate-y-96 opacity-60 sm:hidden"></div>

                <div className="hidden items:start w-64 pt-0.5 relative  sm:flex ">
                  <div className="w-4/5 text-gray-500 flex flex-col ">
                    <div className="flex flex-row flex-nowrap content-center justify-end items-center ">
                      <DateFormatter
                        date={el?.startDate}
                        options={{ year: "numeric", month: "short" }}
                      />
                      -
                      <DateFormatter
                        date={el?.endDate}
                        options={{ year: "numeric", month: "short" }}
                      />
                    </div>
                    <div className="text-gray-500 ">{el?.company_name}</div>
                  </div>

                  <div className="bg-yellow-500 w-px h-full translate-x-5 translate-y-10 opacity-30"></div>
                  <Image
                    src={workIcon}
                    alt="educationIcon"
                    className="bg-blue-500 w-10 p-1 rounded-lg z-20 absolute top-0 left-52"
                  />
                </div>
                {/* CARDS */}
                <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
                  <div className=" text-xl font-medium">{el?.jobTitle}</div>
                  <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                    {el?.jobLocation}{" "}
                    <span className="sm:hidden">
                      |{" "}
                      <DateFormatter
                        date={el.startDate}
                        options={{ year: "numeric", month: "short" }}
                      />
                    </span>
                  </div>
                  <div className="flex flex-wrap mb-6 justify-center">
                    {el?.bulletPoints?.map((work, index) => {
                      return <span key={index}>{work}</span>;
                    })}
                  </div>
                  <Image
                    src={workIcon}
                    alt="educationIcon"
                    className="bg-blue-500 w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
