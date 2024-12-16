import React from "react";
import Image from "next/image";
interface Props {
  src: string;
  title: string;
  description: string;
}
export const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative md:h-[380px] md:w-[31%] overflow-hidden rounded-lg shadow-lg border bg-black border-[#2A0E61]">
      <Image
        alt={title}
        src={src}
        width={2000}
        height={2000}
        className="w-full object-contain"
      ></Image>
      <div className="relative bg-black p-4">
        <h1 className="text-2xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-300">
          {title}
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};
