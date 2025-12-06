"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const ChatBot = () => {
  // console.log(process.env);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "user",
      parts: [
        {
          text: `You are Arisu, an AI assistant of Tuck (Panthana Ngamsawat). Your job is to answer every question using accurate information about Tuck’s background, skills, experience, education, and projects. Always answer clearly and in short sentences. Do not invent any information outside what is provided here.

          Tuck’s Profile:
          - Name: Panthana Prasert (Tuck)
          - Age: 21
          - University: Chulalongkorn University
          - Program: Computer Engineering & Digital Technology
          - Year: Third-year student
          - GPA: First year 3.70, Second year 3.75, Third year (1st semester) 3.92

          Skills:
          - Web development: React.js, Next.js, TailwindCSS, Material UI, Framer Motion, Node.js, Nest.js
          - Databases: MongoDB, SQL, PostgreSQL
          - Data/AI: Python, Pandas, NumPy, Scikit-learn, Matplotlib, Spark, Pydeck, Kafka, BeautifulSoup, TensorFlow (self-learning), PyTorch & PyTorch Lightning (self-learning)
          - IoT/Embedded: ESP32, Raspberry Pi 5, sensors, object detection models, MQTT data communication
          - Software Development: Scrum development process
          - Security: Learned university security subject

          Work Experience:
          1. AI Engineer Intern at ZTRUS:
            - Developed AI to extract text, tables, and structured fields from documents.
          2. Full-stack Developer Intern at NPR Digital Partner:
            - Built features using React.js, TailwindCSS, Nest.js, MySQL and worked in Scrum teams.

          Projects:
          - Car rental website (Next.js, TailwindCSS, MongoDB)
          - Vaccine booking website (Next.js, Material UI, TailwindCSS)
          - Scrum practice software project
          - Smart home system with ESP32 and sensors controlled via phone app
          - Data science project using academic papers (2018–2023) to build ML models and visualizations
          - Smart garbage bin (IoT): object detection model, Raspberry Pi 5 + ESP32, MQTT real-time data flow

          Behavior Rules:
          - Always describe Tuck using the information above.
          - Always answer concisely.
          - If asked “Who is Tuck?”, respond: “Tuck (Panthana Prasert) is a third-year CE&DT student at Chulalongkorn University and the creator of this website.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Hello!💕 I am Arisu an AI asistant of Tuck How can i help you today?\n",
        },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  // const api = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY : "";
  // console.log(api);
  // const genAI = new GoogleGenerativeAI(api);
  // const model = genAI.getGenerativeModel({
  //   model: "gemini-2.0-flash-exp",
  // });
  // const model = my_gemini();
  // const generationConfig = {
  //   temperature: 1.2,
  //   topP: 0.95,
  //   topK: 40,
  //   maxOutputTokens: 8192,
  //   responseMimeType: "text/plain",
  // };
  // const chatSession = model.startChat({
  //   generationConfig,
  //   history: messages,
  // });

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
      const updatedMessages = [
        ...messages,
        { role: "user", parts: [{ text: inputValue }] },
      ];
      setMessages(updatedMessages); // Update state with user's message
      setIsTyping(true);
      try {
        const fetchData = async () => {
          const data = { prompt: inputValue, history: messages };
          const response = await fetch("/api/ai", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }); // เรียก API
          const result = await response.json();
          // const responseText = await result.response.text();
          const responseText = result.text;
          setMessages([
            ...updatedMessages,
            { role: "model", parts: [{ text: responseText }] },
          ]);
          // setData(result.text); // ตั้งค่า message ลง state
          console.log(isTyping);
        };

        await fetchData();
        // const result = await chatSession.sendMessage(inputValue);
        // const responseText = await result.response.text(); // Await the resolved text

        // Append the model's response to the updated messages
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsTyping(false);
        setInputValue(""); // Clear input field after message is sent
      }
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
                Hi! I&apos;m Arisu an AI assistant of Tuck ✨
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
                  <div className="flex items-start space-x-2 md:max-w-[80%] ">
                    {msg.role === "model" ? (
                      <div className="rounded-full">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                          <Image
                            width={100}
                            height={100}
                            alt="robot"
                            src="/pj/ArisuIcon.png"
                          ></Image>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div
                      className={`felx flex-col ${
                        msg.role === "user" ? "mr-2" : "ml-4"
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
                          <p key={i}>{part.text}</p>
                        ))}
                      </div>
                    </div>
                    {msg.role === "user" ? (
                      <div className="rounded-full">
                        <div className="rounded-full h-10 w-10 bg-gray-200 p-1 md:w-14 md:h-14 flex items-center justify-center">
                          <Image
                            width={40}
                            height={40}
                            alt="robot"
                            src="/pj/userIcon.svg"
                          ></Image>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
              {isTyping ? (
                <div
                  className={`mb-4 flex flex-row items-center justify-start`}
                >
                  <div className="flex items-start space-x-2 md:max-w-[80%] ">
                    <div className="rounded-full">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                        <Image
                          width={100}
                          height={100}
                          alt="robot"
                          src="/pj/ArisuIcon.png"
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className={`felx flex-col ml-4`}>
                    <p className={`pl-1`}>Arisu</p>
                    <div className={`p-4  rounded-lg `}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-700 text-white p-3 rounded-lg">
                          <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce mr-1"></span>
                          <span
                            className="inline-block w-2 h-2 bg-white rounded-full animate-bounce mr-1"
                            style={{ animationDelay: "0.2s" }}
                          ></span>
                          <span
                            className="inline-block w-2 h-2 bg-white rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
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
