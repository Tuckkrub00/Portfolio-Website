"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import SkillDataProvider from "./SkillDataProvider";
import { NPR_skill } from "@/constants";
export const InternCard = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col  md:flex-row   items-center bg-black bg-opacity-40 rounded-md justify-center "
    >
      <div className="h-full flex flex-col items-center justify-center pr-20  w-full z-[20]">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-7xl text-bold Wel text-white max-w-[600px] w-auto h-auto"
        >
          {/* <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              InternShip
            </span>
          </span> */}

          <p className="w-auto text-5xl flex flex-row items-center justify-start">
            <Image
              alt="NPR"
              src={"/pj/NPR.png"}
              width={100}
              height={100}
            ></Image>
            <span className=" mx-2 flex flex-col">
              NPR digital partner
              <span className="mt-1 text-2xl underline ">
                internship position as a Fullstack Developer
              </span>
            </span>
          </p>
          <div className="flex flex-row justify-start flex-wrap mt-4 gap-5 items-center">
            {NPR_skill.map((image, index) => (
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
              className="text-lg  text-white my-5 max-w-[600px]"
            >
              I was in scam process and working wtih developer team. I was
              responsible for developing and maintaining the front-end and
              back-end of the projects as well as implementing new features
              according to customers requesments.
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
