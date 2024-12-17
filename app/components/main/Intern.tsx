"use client";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";
import { InternCard } from "../sub/InternCard";

export const Intern = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-full w-full  py-20 grap-10 px-10">
      <motion.div
        variants={slideInFromTop}
        // className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        className="Welcome-box mb-20 py-[8px] px-[4px] border border-[#7042f88b]"
      >
        <SparklesIcon className="text-[#6838f8] mr-[10px] h-10 w-10" />
        {/* <h1 className=" text-white text-[22px]">Think better with Next js</h1> */}
        <h1 className="text-[35px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 ">
          My work experience
        </h1>
      </motion.div>
      <InternCard />
    </div>
  );
};
