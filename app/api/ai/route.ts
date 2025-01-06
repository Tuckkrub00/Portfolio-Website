import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const generationConfig = {
  temperature: 1.2,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
export async function POST(req: Request) {
  try {
    const { prompt, history } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Perform the Generative AI operation
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });

    const chatSession = model.startChat({
      generationConfig,
      history: history,
    });

    const result = await chatSession.sendMessage(prompt);
    const responseText = await result.response.text();
    // const chatHistory = parts.concat(
    //   history.slice(1).map((message: any) => ({
    //     text: `${message.role === "user" ? "input" : "output"}: ${
    //       message.parts[0].text
    //     }`,
    //   }))
    // );

    // chatHistory.push({
    //   text: `input: ${prompt}`,
    // });

    // const result = await model.generateContent({
    //   contents: [{ role: "user", parts: chatHistory }],
    //   generationConfig,
    // });

    // const reply = result.response.text();

    // await sendLogs({
    //   user: prompt,
    //   model: reply,
    //   timestamp: new Date().toISOString(),
    //   uuid: uuid,
    // });

    return NextResponse.json({ text: responseText });
  } catch (error) {
    console.error("Error processing AI request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
