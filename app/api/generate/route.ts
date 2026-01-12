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

function extractText(resp: any): string {
  if (typeof resp?.output_text === "string" && resp.output_text.trim()) return resp.output_text.trim();

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

  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const max_output_tokens = Number(process.env.OPENAI_MAX_OUTPUT_TOKENS || "500");

  let body: ReqBody;
  try {
    body = (await req.json()) as ReqBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const input = body.type === "text" ? buildTextPrompt(body) : buildPhotoPrompt(body);

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
