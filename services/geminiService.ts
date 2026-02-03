import { GoogleGenAI, Type } from "@google/genai";
import { EventIdea, EventType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateEventConcept = async (
  type: string,
  city: string,
  guestCount: number,
  vibe: string,
): Promise<EventIdea> => {
  const prompt = `As a premier Australian event planner at Maven Events, create a unique and luxury event concept for a ${type} in ${city}, Australia. 
  The event is for ${guestCount} guests and should have a ${vibe} vibe. 
  Provide a creative theme, detailed description, venue suggestions specifically for ${city}, a sample 3-step high-level schedule, and decor style notes.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          theme: { type: Type.STRING },
          description: { type: Type.STRING },
          venueSuggestions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          suggestedSchedule: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                time: { type: Type.STRING },
                activity: { type: Type.STRING },
              },
              required: ["time", "activity"],
            },
          },
          decorStyle: { type: Type.STRING },
        },
        required: [
          "theme",
          "description",
          "venueSuggestions",
          "suggestedSchedule",
          "decorStyle",
        ],
      },
    },
  });

  return JSON.parse(response.text) as EventIdea;
};
