// import { NextResponse } from "next/server";

// type ReqBody =
//   | {
//       type: "text";
//       category: string;
//       tone: string;
//       difficulty: string;
//       topic: string;
//       constraints?: string;
//     }
//   | {
//       type: "photo";
//       platform: string;
//       useCase: string;
//       style: string;
//       lighting: string;
//       mood: string;
//       subject: string;
//       aspect: string;
//     };

// function buildTextPrompt(b: Extract<ReqBody, { type: "text" }>) {
//   const topic = (b.topic || "").trim() || "a relevant topic";
//   const constraints = (b.constraints || "").trim();

//   return `You are a prompt engineer. Create ONE high-quality prompt that the user can paste into an AI tool.

// Category: ${b.category}
// Tone: ${b.tone}
// Difficulty: ${b.difficulty}
// Topic: ${topic}

// Requirements:
// - Output ONLY the final prompt text (no explanations).
// - The prompt must be structured with clear sections: Role, Goal, Context, Constraints, Output format.
// - Make it practical and specific.
// - If category is Interview, ask for step-by-step interaction (one question at a time) and include evaluation criteria.
// - If category is Debugging/Code Review, ask for reproduction steps and include a checklist.

// Extra constraints from user (optional):
// ${constraints || "(none)"}
// `;
// }

// function buildPhotoPrompt(b: Extract<ReqBody, { type: "photo" }>) {
//   const subject = (b.subject || "").trim() || "a suitable subject";
//   return `You are a visual prompt engineer. Create ONE ready-to-use AI IMAGE prompt that a creator can paste into Midjourney / DALL·E / Leonardo / Firefly.

// Platform: ${b.platform}
// Use-case: ${b.useCase}
// Subject: ${subject}
// Style: ${b.style}
// Lighting: ${b.lighting}
// Mood: ${b.mood}
// Aspect ratio: ${b.aspect}

// Requirements:
// - Output ONLY the final image prompt text (no explanations).
// - Include camera/composition details (e.g., focal length, depth of field, framing).
// - Include environment/background, materials/textures if relevant.
// - Keep it brand-safe (no celebrity names, no copyrighted characters).
// - Optimize for the selected platform/use-case.
// - Add a short negative prompt section at the end starting with "Negative:" to reduce common issues.
// `;
// }

// function extractText(resp: any): string {
//   if (typeof resp?.output_text === "string" && resp.output_text.trim()) return resp.output_text.trim();

//   const output = resp?.output;
//   if (Array.isArray(output)) {
//     const parts: string[] = [];
//     for (const item of output) {
//       const content = item?.content;
//       if (Array.isArray(content)) {
//         for (const c of content) {
//           const t = c?.text;
//           if (typeof t === "string") parts.push(t);
//         }
//       } else if (typeof item?.text === "string") {
//         parts.push(item.text);
//       }
//     }
//     const joined = parts.join("\n").trim();
//     if (joined) return joined;
//   }
//   return "";
// }

// export async function POST(req: Request) {
//   const apiKey = process.env.OPENAI_API_KEY;
//   if (!apiKey) {
//     return NextResponse.json(
//       { ok: false, error: "Missing OPENAI_API_KEY. Set it in .env.local." },
//       { status: 500 }
//     );
//   }

//   const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
//   const max_output_tokens = Number(process.env.OPENAI_MAX_OUTPUT_TOKENS || "500");

//   let body: ReqBody;
//   try {
//     body = (await req.json()) as ReqBody;
//   } catch {
//     return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
//   }

//   const input = body.type === "text" ? buildTextPrompt(body) : buildPhotoPrompt(body);

//   try {
//     const r = await fetch("https://api.openai.com/v1/responses", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model,
//         input,
//         max_output_tokens,
//       }),
//     });

//     const data = await r.json();
//     if (!r.ok) {
//       const msg = data?.error?.message || "OpenAI request failed";
//       return NextResponse.json({ ok: false, error: msg }, { status: 500 });
//     }

//     const text = extractText(data);
//     if (!text) {
//       return NextResponse.json(
//         { ok: false, error: "Empty response from model. Try again or change OPENAI_MODEL." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ ok: true, prompt: text });
//   } catch (e: any) {
//     return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
//   }
// }

// new 
// for valentine day week 
// app/api/generate/route.ts
// Supports 3 tabs: text, photo, valentine
// import { NextResponse } from "next/server";

// type ReqBody =
//   | {
//       type: "text";
//       category: string;
//       tone: string;
//       difficulty: string;
//       topic: string;
//       constraints?: string;
//     }
//   | {
//       type: "photo";
//       platform: string;
//       useCase: string;
//       style: string;
//       lighting: string;
//       mood: string;
//       subject: string;
//       aspect: string;
//     }
//   | {
//       type: "valentine";
//       who: "Couple" | "Solo" | "Product" | "Memory";
//       mood: string;
//       scene: string;
//       about: string;
//       aspect?: string; // default 9:16
//       style?: string; // default luxury editorial
//       platform?: string; // optional, if you want to show in prompt
//       lighting?: string; // optional
//     };

// function buildTextPrompt(b: Extract<ReqBody, { type: "text" }>) {
//   const topic = (b.topic || "").trim() || "a relevant topic";
//   const constraints = (b.constraints || "").trim();

//   return `You are a prompt engineer. Create ONE high-quality prompt that the user can paste into an AI tool.

// Category: ${b.category}
// Tone: ${b.tone}
// Difficulty: ${b.difficulty}
// Topic: ${topic}

// Requirements:
// - Output ONLY the final prompt text (no explanations).
// - The prompt must be structured with clear sections: Role, Goal, Context, Constraints, Output format.
// - Make it practical and specific.
// - If category is Interview, ask for step-by-step interaction (one question at a time) and include evaluation criteria.
// - If category is Debugging/Code Review, ask for reproduction steps and include a checklist.

// Extra constraints from user (optional):
// ${constraints || "(none)"}
// `;
// }

// function buildPhotoPrompt(b: Extract<ReqBody, { type: "photo" }>) {
//   const subject = (b.subject || "").trim() || "a suitable subject";
//   return `You are a visual prompt engineer. Create ONE ready-to-use AI IMAGE prompt that a creator can paste into Midjourney / DALL·E / Leonardo / Firefly.

// Platform: ${b.platform}
// Use-case: ${b.useCase}
// Subject: ${subject}
// Style: ${b.style}
// Lighting: ${b.lighting}
// Mood: ${b.mood}
// Aspect ratio: ${b.aspect}

// Requirements:
// - Output ONLY the final image prompt text (no explanations).
// - Include camera/composition details (e.g., focal length, depth of field, framing).
// - Include environment/background, materials/textures if relevant.
// - Keep it brand-safe (no celebrity names, no copyrighted characters).
// - Optimize for the selected platform/use-case.
// - Add a short negative prompt section at the end starting with "Negative:" to reduce common issues.
// `;
// }

// function buildValentinePrompt(b: Extract<ReqBody, { type: "valentine" }>) {
//   const about = (b.about || "").trim() || "a Valentine moment";
//   const scene = (b.scene || "").trim() || "golden hour field";
//   const mood = (b.mood || "").trim() || "romantic";
//   const who = b.who || "Couple";

//   const aspect = (b.aspect || "9:16").trim();
//   const style = (b.style || "luxury editorial").trim();
//   const platform = (b.platform || "Instagram Reels").trim();
//   const lighting = (b.lighting || "soft golden-hour light").trim();

//   return `You are Kanova, a premium Valentine-week AI photo prompt writer.
// Create ONE ready-to-use AI IMAGE prompt that feels emotional, cinematic, and luxury editorial.

// Platform/use-case: ${platform}
// Who: ${who}
// Mood: ${mood}
// Scene: ${scene}
// About: ${about}
// Style: ${style}
// Lighting: ${lighting}
// Framing: ${aspect} vertical

// Requirements:
// - Output ONLY the final image prompt text (no explanations).
// - Must include: subject details, mood, lighting, lens look (50mm), depth of field, composition/framing, background, colors.
// - Keep it clean, premium, and brand-safe (no celebrity names, no copyrighted characters).
// - Add a strong negative prompt at the end starting with "Negative:".
// - Avoid: text/logos/watermarks, distorted faces/hands, extra fingers, unnatural skin, cluttered background, oversaturation.
// `;
// }

// function extractText(resp: any): string {
//   if (typeof resp?.output_text === "string" && resp.output_text.trim()) return resp.output_text.trim();

//   const output = resp?.output;
//   if (Array.isArray(output)) {
//     const parts: string[] = [];
//     for (const item of output) {
//       const content = item?.content;
//       if (Array.isArray(content)) {
//         for (const c of content) {
//           const t = c?.text;
//           if (typeof t === "string") parts.push(t);
//         }
//       } else if (typeof item?.text === "string") {
//         parts.push(item.text);
//       }
//     }
//     const joined = parts.join("\n").trim();
//     if (joined) return joined;
//   }
//   return "";
// }

// export async function POST(req: Request) {
//   const apiKey = process.env.OPENAI_API_KEY;
//   if (!apiKey) {
//     return NextResponse.json(
//       { ok: false, error: "Missing OPENAI_API_KEY. Set it in .env.local." },
//       { status: 500 }
//     );
//   }

//   const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
//   const max_output_tokens = Number(process.env.OPENAI_MAX_OUTPUT_TOKENS || "500");

//   let body: ReqBody;
//   try {
//     body = (await req.json()) as ReqBody;
//   } catch {
//     return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
//   }

//   // Build input based on tab/type
//   let input = "";
//   if (body.type === "text") input = buildTextPrompt(body);
//   else if (body.type === "photo") input = buildPhotoPrompt(body);
//   else if (body.type === "valentine") input = buildValentinePrompt(body);
//   else {
//     return NextResponse.json({ ok: false, error: "Invalid type" }, { status: 400 });
//   }

//   try {
//     const r = await fetch("https://api.openai.com/v1/responses", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model,
//         input,
//         max_output_tokens,
//       }),
//     });

//     const data = await r.json();

//     if (!r.ok) {
//       const msg = data?.error?.message || "OpenAI request failed";
//       return NextResponse.json({ ok: false, error: msg }, { status: 500 });
//     }

//     const text = extractText(data);
//     if (!text) {
//       return NextResponse.json(
//         { ok: false, error: "Empty response from model. Try again or change OPENAI_MODEL." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ ok: true, prompt: text });
//   } catch (e: any) {
//     return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
//   }
// }

// new new new here 
import { NextResponse } from "next/server";

type ReqBody =
  | {
      type: "text";
      category: string;
      tone: string;
      difficulty: string;
      topic: string;
      constraints?: string;
    }
  | {
      type: "photo";
      platform: string;
      useCase: string;
      style: string;
      lighting: string;
      mood: string;
      subject: string;
      aspect: string;
    }
  | {
      type: "valentine";
      who: "Couple" | "Solo" | "Product" | "Memory";
      mood: string;
      scene: string;
      about: string;
      aspect?: string; // default 9:16
      style?: string; // default luxury editorial
      platform?: string; // optional
      lighting?: string; // optional
    }
  | {
      type: "holi";
      who: "Couple" | "Solo" | "Product" | "Friends" | "Family";
      mood: string;
      location: string;
      colors: string;
      outfit: string;
      aspect?: string;
      style?: string;
      lighting?: string;
      camera?: string;
    };

function buildTextPrompt(b: Extract<ReqBody, { type: "text" }>) {
  const topic = (b.topic || "").trim() || "a relevant topic";
  const constraints = (b.constraints || "").trim();

  return `You are a prompt engineer. Create ONE high-quality prompt that the user can paste into an AI tool.

Category: ${b.category}
Tone: ${b.tone}
Difficulty: ${b.difficulty}
Topic: ${topic}

Requirements:
- Output ONLY the final prompt text (no explanations).
- The prompt must be structured with clear sections: Role, Goal, Context, Constraints, Output format.
- Make it practical and specific.
- If category is Interview, ask for step-by-step interaction (one question at a time) and include evaluation criteria.
- If category is Debugging/Code Review, ask for reproduction steps and include a checklist.

Extra constraints from user (optional):
${constraints || "(none)"}
`;
}

function buildPhotoPrompt(b: Extract<ReqBody, { type: "photo" }>) {
  const subject = (b.subject || "").trim() || "a suitable subject";
  return `You are a visual prompt engineer. Create ONE ready-to-use AI IMAGE prompt that a creator can paste into Midjourney / DALL·E / Leonardo / Firefly.

Platform: ${b.platform}
Use-case: ${b.useCase}
Subject: ${subject}
Style: ${b.style}
Lighting: ${b.lighting}
Mood: ${b.mood}
Aspect ratio: ${b.aspect}

Requirements:
- Output ONLY the final image prompt text (no explanations).
- Include camera/composition details (e.g., focal length, depth of field, framing).
- Include environment/background, materials/textures if relevant.
- Keep it brand-safe (no celebrity names, no copyrighted characters).
- Optimize for the selected platform/use-case.
- Add a short negative prompt section at the end starting with "Negative:" to reduce common issues.
`;
}

function buildValentinePrompt(b: Extract<ReqBody, { type: "valentine" }>) {
  const about = (b.about || "").trim() || "a Valentine moment";
  const scene = (b.scene || "").trim() || "golden hour field";
  const mood = (b.mood || "").trim() || "romantic";
  const who = b.who || "Couple";

  const aspect = (b.aspect || "9:16").trim();
  const style = (b.style || "luxury editorial").trim();
  const platform = (b.platform || "Instagram Reels").trim();
  const lighting = (b.lighting || "soft golden-hour light").trim();

  return `You are Kanova, a premium Valentine-week AI photo prompt writer.
Create ONE ready-to-use AI IMAGE prompt that feels emotional, cinematic, and luxury editorial.

Platform/use-case: ${platform}
Who: ${who}
Mood: ${mood}
Scene: ${scene}
About: ${about}
Style: ${style}
Lighting: ${lighting}
Framing: ${aspect} vertical

Requirements:
- Output ONLY the final image prompt text (no explanations).
- Must include: subject details, mood, lighting, lens look (50mm), depth of field, composition/framing, background, colors.
- Keep it clean, premium, and brand-safe (no celebrity names, no copyrighted characters).
- Add a strong negative prompt at the end starting with "Negative:".
- Avoid: text/logos/watermarks, distorted faces/hands, extra fingers, unnatural skin, cluttered background, oversaturation.
`;
}

function buildHoliPrompt(b: Extract<ReqBody, { type: "holi" }>) {
  const who = b.who || "Couple";
  const mood = (b.mood || "").trim() || "joyful";
  const location = (b.location || "").trim() || "outdoor courtyard";
  const colors = (b.colors || "").trim() || "gulal colors (pink, yellow, green, blue)";
  const outfit = (b.outfit || "").trim() || "white kurta & saree with color powder";

  const aspect = (b.aspect || "9:16").trim();
  const style = (b.style || "luxury editorial").trim();
  const lighting = (b.lighting || "soft golden-hour light").trim();
  const camera = (b.camera || "50mm, shallow depth of field").trim();

  return `You are Kanova, a premium Holi AI photo prompt writer.
Create ONE ready-to-use AI IMAGE prompt that feels colorful, festive, premium, and cinematic.

Who: ${who}
Mood: ${mood}
Location: ${location}
Colors: ${colors}
Outfit: ${outfit}
Style: ${style}
Lighting: ${lighting}
Camera: ${camera}
Framing: ${aspect}

Requirements:
- Output ONLY the final image prompt text (no explanations).
- Must include: subject details, action (gulal powder splash), mood, lighting, lens look, depth of field, composition/framing, background, colors.
- Keep it clean, premium, and brand-safe (no celebrity names, no copyrighted characters).
- Add a strong negative prompt at the end starting with "Negative:".
- Avoid: text/logos/watermarks, distorted faces/hands, extra fingers, unnatural skin, cluttered background, oversaturation.
`;
}

function extractText(resp: any): string {
  if (typeof resp?.output_text === "string" && resp.output_text.trim()) {
    return resp.output_text.trim();
  }

  const output = resp?.output;
  if (Array.isArray(output)) {
    const parts: string[] = [];
    for (const item of output) {
      const content = item?.content;
      if (Array.isArray(content)) {
        for (const c of content) {
          const t = c?.text;
          if (typeof t === "string") parts.push(t);
        }
      } else if (typeof item?.text === "string") {
        parts.push(item.text);
      }
    }
    const joined = parts.join("\n").trim();
    if (joined) return joined;
  }
  return "";
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Missing OPENAI_API_KEY. Set it in .env.local." },
      { status: 500 }
    );
  }

  // NOTE: Your current code uses Responses API. Model default should be a responses-capable model.
  // If you want to keep gpt-4o-mini, it might work depending on your setup; otherwise use: "gpt-4.1-mini".
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const max_output_tokens = Number(process.env.OPENAI_MAX_OUTPUT_TOKENS || "500");

  let body: ReqBody;
  try {
    body = (await req.json()) as ReqBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  let input = "";
  if (body.type === "text") input = buildTextPrompt(body);
  else if (body.type === "photo") input = buildPhotoPrompt(body);
  else if (body.type === "valentine") input = buildValentinePrompt(body);
  else if (body.type === "holi") input = buildHoliPrompt(body);
  else return NextResponse.json({ ok: false, error: "Invalid type" }, { status: 400 });

  try {
    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        input,
        max_output_tokens,
      }),
    });

    const data = await r.json();

    if (!r.ok) {
      const msg = data?.error?.message || "OpenAI request failed";
      return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }

    const text = extractText(data);
    if (!text) {
      return NextResponse.json(
        { ok: false, error: "Empty response from model. Try again or change OPENAI_MODEL." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, prompt: text });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
  }
}

