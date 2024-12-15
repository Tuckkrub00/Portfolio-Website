import { Frontend_skill } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";

const Skills = () => {
  return (
    <section
      //   className="flex flex-col items-center bg-slate-600 justify-center gap-3 h-full relative overflow-hidden py-20"
      className="flex flex-col items-center bg-slate-600 justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9)" }}
    >
      {/* <div className="flex flex-col justify-around flex-wrap mt-4 gap-5 items-center"> */}
      <div className="flex flex-col justify-around flex-wrap  gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          ></SkillDataProvider>
        ))}
      </div>
    </section>
  );
};

export default Skills;
