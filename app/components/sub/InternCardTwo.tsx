"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import SkillDataProvider from "./SkillDataProvider";
import { Ztrus_skill } from "@/constants";
export const InternCardTwo = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col  lg:flex-row mt-6 items-center bg-black bg-opacity-40 rounded-md justify-center "
    >
      <div className="h-full flex flex-col items-center justify-center pr-auto  w-full z-[20]">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-7xl mx-5 text-bold Wel text-white max-w-[600px] w-auto h-auto"
        >
          {/* <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              InternShip
            </span>
          </span> */}

          <p className="w-auto text-5xl flex flex-row items-center justify-start">
            <Image
              alt="NPR"
              src={"/ztrus.png"}
              width={100}
              height={100}
            ></Image>
            <span className=" mx-2 flex flex-col">
              ZTRUS
              <span className="mt-1 text-2xl underline ">
                internship position as a AI Engineer
              </span>
            </span>
          </p>
          <div className="flex flex-row justify-start flex-wrap mt-4 gap-5 items-center">
            {Ztrus_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              ></SkillDataProvider>
            ))}
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg  text-white my-5 mx-auto max-w-[600px]"
            >
              I collaborated closely with the AI and backend teams. My main
              responsibilities included developing and improving AI models for
              extracting text, tables, and structured data from documents. I
              also integrated the models into the internal processing pipeline
              using Docker and Jenkins for deployment and automation.
              Additionally, I used LangChain to build and optimize
              document-processing workflows and enhance data extraction accuracy
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="my-5 w-full h-full flex justify-center items-center text-black"
      >
        <Image src="/pj/NPR2.jpg" alt="NPR2" width={650} height={650}></Image>
      </motion.div>
    </motion.div>
  );
};
