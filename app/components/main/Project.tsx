"use client";
import React from "react";
import { ProjectCard } from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { RxGithubLogo } from "react-icons/rx";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
export const Project = () => {
  return (
    <div className="flex relative flex-col items-center justify-center py-20">
      <motion.div
        variants={slideInFromTop}
        // className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        className="Welcome-box mb-20 py-[8px] px-[4px] border border-[#7042f88b]"
      >
        <SparklesIcon className="text-[#6838f8] mr-[10px] h-10 w-10" />
        {/* <h1 className=" text-white text-[22px]">Think better with Next js</h1> */}
        <h1 className="text-[35px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 ">
          My Projects
        </h1>
      </motion.div>
      {/* <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 py-20">
        My Projects
      </h1> */}
      <div className="h-full w-full flex flex-col basis-1/3 md:flex-wrap md:flex-row  justify-center items-center gap-10 px-10">
        <ProjectCard
          title="Data Science Data Engineering"
          src="/pj/data_science.png"
          description="using academic papers since 2018 to 2023 from sciencedirect webSide to create AI/ML models and make data visualization wtih streamlit"
        ></ProjectCard>
        <ProjectCard
          title="Software Engineering Project"
          src="/pj/data_enginear.png"
          description="using Scam process to work with team members,using Next.js to create website and deploy with vercel"
        ></ProjectCard>
        <ProjectCard
          title="My webPortfolio"
          src="/pj/my_webPortfolio.png"
          description="using Next.js to create my webPortfolio and deploy with vercel"
        ></ProjectCard>
        <ProjectCard
          title="Embedded System Project"
          src="/pj/embed_system.png"
          description="using esp32 and other sensors to create a smart home model that can control every thing throught the internet"
        ></ProjectCard>
        <ProjectCard
          title="frontend & backend project"
          src="/pj/frontend_backend.png"
          description="using non recreational database(mongoDB) and Next.js to create  a website for booking vaccine"
        ></ProjectCard>
        <ProjectCard
          title="frontend project"
          src="/pj/vaccine.png"
          description="using material UI and Next.js to create a website for booking vaccine"
        ></ProjectCard>
      </div>
      <a target="_blank" href="https://github.com/Tuckkrub00">
        <motion.div
          variants={slideInFromTop}
          // className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
          className="rounded-3xl  text-white   bg-black bg-opacity-55 flex flex-row items-center justify-center my-20 py-[8px] px-[4px] border border-[#7042f88b]  hover:bg-opacity-80 hover:scale-110 transition-all duration-500 ease-in-out"
        >
          <RxGithubLogo className="mr-[10px] h-10 w-10"></RxGithubLogo>
          {/* <SparklesIcon className="text-[#6838f8] mr-[10px] h-10 w-10" /> */}
          {/* <h1 className=" text-white text-[22px]">Think better with Next js</h1> */}
          {/* <h1 className="text-[35px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 ">
            Go to my GitHub Profile
          </h1> */}
          <h1 className="text-[35px] font-semibold ">
            Go to my GitHub Profile
          </h1>
        </motion.div>
      </a>
    </div>
  );
};
