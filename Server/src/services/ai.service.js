// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

// async function main(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "prompt",
//   });
//   console.log(response.text);
// }

// module.exports = generateContent

// const { GoogleGenAI } = require("@google/genai");

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// async function generateContent(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
//   return response.response.text();
// }

// module.exports = generateContent;

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateContent(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.response.text();
    } catch (error) {
        console.error("AI Service Error:", error);
        throw error;
    }
}

module.exports = generateContent;

