import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

// write test route
export async function GET(req: Request) {
    const response = await client.chat.completions.create({
        model: "gemini-2.5-pro",
        messages: [
            {
                role: "user",
                content: "aise hi thoda baat krne ka mn ho rha tha, mera name bta",
            },
        ],
        temperature: 0.7,
    });

    console.log("response", response.choices[0].message.content);

    return NextResponse.json({
        message: response.choices[0].message.content,
    });
}
