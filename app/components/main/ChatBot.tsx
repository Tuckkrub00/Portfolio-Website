"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
export const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: "user",
      parts: ["hello\n"],
    },
    {
      role: "model",
      parts: ["Hello there!💕 How can I help you today?\n"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth", // Enables smooth scrolling
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      // Adding user message to the chat
      setMessages([...messages, { role: "user", parts: [inputValue] }]);
      // await fetch("/api/chat", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ messages }),
      // });
      // Clear input field after message is sent
      setInputValue("");
    }
  };
  return (
    <div className="flex min-h-full-screen flex-col items-center pt-[15px] w-full py-20 grap-10 px-10">
      <motion.div
        variants={slideInFromTop}
        // className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        className="Welcome-box mb-20 py-[8px] px-[4px] border border-[#7042f88b]"
      >
        <SparklesIcon className="text-[#6838f8] mr-[10px] h-10 w-10" />
        {/* <h1 className=" text-white text-[22px]">Think better with Next js</h1> */}
        <h1 className="text-[35px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 ">
          AI assistant
        </h1>
      </motion.div>
      <div className="w-full flex flex-col  items-center bg-black bg-opacity-40 rounded-md justify-center ">
        <div className="flex flex-col  lg:flex-row w-full">
          <div className="h-full flex flex-col items-center justify-center pr-auto  w-full z-[20]">
            <div className="flex flex-col gap-3 mt-6  mx-5 text-bold Wel text-white  w-auto h-auto">
              <p className="w-auto text-5xl flex flex-row items-center justify-start">
                Hi! I'm Arisu an AI assistant of Tuck ✨
                {/* <SparklesIcon className=" mr-[10px] h-10 w-10" /> */}
              </p>
              <span className="mt-1 text-2xl ">
                I can help you with anything related to Tuck (Only skills and
                work experience) 💻📖
              </span>
            </div>
            <div className="flex flex-col items-start justify-start  px-5 text-bold Wel text-white  w-full h-auto">
              <ul className="my-10 list-disc list-inside space-y-4 text-2xl">
                <li>ability & skills 📌</li>
                <li>education 🎓</li>
                <li>work experience 🚀</li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start  px-5 text-bold Wel text-white  w-full h-auto">
              <span className="mt-1 text-2xl ">
                You can ask questions about me. I can give you some information
                you need. 📚📁
              </span>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex justify-center">
            <Image
              width={400}
              height={400}
              alt="robot"
              src="/pj/Arisu.png"
            ></Image>
          </div>
        </div>
        <div className="w-[90%] flex flex-col mb-5 bg-white rounded-md h-[560px] items-start  justify-start ">
          <div className="w-full p-5 font-semibold text-lg">
            Chat with Arisu ✉️💕
          </div>
          <div className="p-6 pt-0 w-full">
            <div
              ref={chatContainerRef}
              className="h-[425px] pr-4 w-full overflow-y-scroll scrollbar-hidden"
            >
              {/* <div className="h-[425px] p-6 pt-0 w-full  overflow-y-scroll scrollbar-hidden"> */}
              {messages.slice(1).map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex flex-row items-center ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "model" ? (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        alt="robot"
                        src="/pj/ArisuIcon.png"
                      ></Image>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className={`felx flex-col ${
                      msg.role === "user" ? "mr-4" : "ml-4"
                    }`}
                  >
                    <p
                      className={`${
                        msg.role === "user" ? "text-right pr-1" : "pl-1"
                      }`}
                    >
                      {msg.role === "user" ? "You" : "Arisu"}
                    </p>
                    <div
                      className={`p-4  rounded-lg shadow-md ${
                        msg.role === "user"
                          ? " bg-indigo-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {msg.parts.map((part, i) => (
                        <p key={i}>{part}</p>
                      ))}
                    </div>
                  </div>
                  {msg.role === "user" ? (
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-400 rounded-full overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        alt="robot"
                        src="/pj/userIcon.svg"
                      ></Image>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-auto flex flex-row items-center justify-center p-6 pt-0 ">
            <input
              type="text"
              value={inputValue}
              placeholder="Type your message..."
              className="h-9 w-full border border-[#7042f88b] rounded-md"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue) {
                  handleSendMessage(); // Call the send function
                }
              }}
            ></input>
            <button
              className={`h-9 w-28 text-[#6838f8] ml-2 text-lg font-semibold flex  flex-row items-center rounded-md px-4 justify-between ${
                inputValue
                  ? " bg-indigo-300 hover:bg-indigo-300 active:scale-75 bg-opacity-70"
                  : " bg-sky-200 bg-opacity-50"
              }`}
              onClick={handleSendMessage}
              disabled={!inputValue}
            >
              <SparklesIcon className="text-[#6838f8] h-8" />
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
