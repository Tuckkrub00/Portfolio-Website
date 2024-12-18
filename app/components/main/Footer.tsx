import React from "react";
import Image from "next/image";
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
export const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-80 h-full  text-white shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* <div className="w-full h-full flex flex-row items-center justify-around flex-wrap"> */}
        <div className="w-full h-full flex flex-row  justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="front-bold text-[16px]">Community</div>
            <a
              href="https://github.com/Tuckkrub00"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo></RxGithubLogo>
              <span className="text-[15px] ml-[6px]">
                Go to my GitHub Profile
              </span>
            </a>
            <p className="flex flex-row items-center my-[15px] ">
              <RxDiscordLogo></RxDiscordLogo>
              <span className="text-[15px] ml-[6px]">
                Discord account: tuck7545
              </span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="front-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] ">
              <RxInstagramLogo></RxInstagramLogo>
              <span className="text-[15px] ml-[6px]">
                Follow my Instagram: tuck_krub
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] ">
              <Image
                alt="line"
                src={"/pj/line.png"}
                width={20}
                height={20}
              ></Image>
              <span className="text-[15px] ml-[6px]">Line id: tuckxo789</span>
            </p>
          </div>
          <div className="min-w-[200px] relative h-auto flex flex-col items-center justify-start ">
            <div className="front-bold text-[16px]">Contrack</div>
            <p className="flex flex-row items-center ">
              <Image
                alt="Gmail"
                src={"/pj/gmail.png"}
                width={20}
                height={20}
              ></Image>
              <span className="text-[15px] my-[15px] ml-[6px]">
                Gmail: pantana2004@Gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
