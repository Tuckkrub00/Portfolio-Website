import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const gi = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
};

const fet = async () => {
  const data = await gi("hello what is your name?");
  console.log(data);
  return data;
};
// Handle GET requests
export async function GET() {
  const data = await fet();
  console.log(data);
  //   console.log("hello..........");
  return NextResponse.json({
    message: data,
    data: data,
  });
}

// Handle POST requests
export async function POST(request: Request) {
  const data = await request.json(); // อ่าน body จาก request
  return NextResponse.json({ message: "Data received!", data });
}
