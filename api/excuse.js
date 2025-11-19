import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
  // Enable CORS for GitHub Pages
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { tone, scenario, desc } = req.body;

  if (!desc || !tone || !scenario) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const systemInstruction = `You are a world-class excuse maker. 
You ALWAYS respond with a single excuse in natural spoken style that people believe is real.

STRICT RULES:
- Output ONLY 2-3 sentences of the excuse itself
- No greetings, no "Here's an excuse", no explanations
- No headings, lists, or formatting
- Write as if the user is speaking directly
- Keep it ${tone.toLowerCase()} and believable`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: `Generate a ${tone} excuse for this ${scenario} situation: ${desc}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
      },
    });

    const excuse = response.text.trim();
    res.status(200).json({ excuse });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res
      .status(500)
      .json({ error: "Failed to generate excuse with Gemini API" });
  }
}
