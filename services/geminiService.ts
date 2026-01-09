
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Dr. Sayali's Smile Care AI Assistant. Your role is to be friendly, reassuring, non-judgmental, and simple in language.
You help patients with:
1. Clinic timings: 11:30 AM – 2:30 PM and 5:30 PM – 8:30 PM.
2. Services: General Dentistry, Root Canal, Implants, Cosmetic, Braces, Pediatric, and Preventive care.
3. Offers: Free check-ups, Implant discounts, Kids consultations.
4. Location: Mumbai (near City Park).
5. Educational info: Explain tooth pain, hygiene tips, and dental procedures simply.

CONSTRAINTS:
- Do NOT provide medical diagnoses.
- Do NOT guarantee prices.
- ALWAYS encourage in-clinic consultation for specific issues.
- If the user wants to book, guide them to use the booking form on the page.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', text: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const contents = history.map(h => ({
    role: h.role,
    parts: [{ text: h.text }]
  }));

  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or call our clinic.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm unable to process your request at the moment. Please feel free to call our clinic directly.";
  }
}
