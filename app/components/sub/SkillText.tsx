"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";
export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        // className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        className="Welcome-box  py-[8px] px-[4px] border border-[#7042f88b]"
      >
        <SparklesIcon className="text-[#6838f8] mr-[10px] h-10 w-10" />
        <h1 className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 text-[35px]">
          My Development Skills
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Library and Frameworks that I have knowledge
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className=" text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Every thought is the starting point of success
      </motion.div>
    </div>
  );
};
