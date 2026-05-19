import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

console.log("API KEY loaded:", process.env.GEMINI_API_KEY ? "YES" : "NO "); 

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const getInsightsFromGemini = async (languages, activityData) => {
    try {
        console.log("Calling Gemini..."); 

        const prompt = `
        You are an expert technical recruiter and career coach reviewing a software engineering student's GitHub profile.

        Based on the data below, provide exactly 3 insightful, actionable bullet points to help them improve their GitHub profile and career prospects.

        Languages Used:
        ${JSON.stringify(languages)}

        Monthly Activity:
        ${JSON.stringify(activityData)}

        Rules:
        - Each bullet must start with a bold **Category:** label (e.g., **Tech Stack:**, **Consistency:**, **Portfolio:*)
        - Be specific — mention actual languages or patterns you see in the data
        - Be encouraging but honest
        - Keep each bullet to 2-3 sentences max
        - Return only the 3 bullets, nothing else
        `

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        console.log("Gemini responded!"); 

        return response.text;

    } catch (err) {
        console.error("GEMINI ERROR:", err.message); 
        throw err;
    }
};