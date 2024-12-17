import React from "react";
import Image from "next/image";
interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}
export const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <div className="relative xl:h-[380px] xl:w-[31%] overflow-hidden rounded-lg shadow-lg border bg-opacity-80 bg-black border-[#2A0E61]">
      <a href={href} target="_blank">
        <Image
          alt={title}
          src={src}
          width={2000}
          height={2000}
          className="w-full object-contain"
        ></Image>
        <div className="relative  p-4">
          <h1 className="text-2xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-300">
            {title}
          </h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </div>
  );
};
