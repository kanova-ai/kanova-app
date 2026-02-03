// new feature for valentine day week 


// new here for valentine day 
// app/valentine-ai-prompts/page.tsx
// Next.js (App Router) + Tailwind CSS
// Valentine page with OpenAI API integration + SEO (metadata)
// Works with your 3-tab API route (type: "valentine").

// ✅ IMPORTANT:
// 1) Keep this file path exactly: /app/valentine-ai-prompts/page.tsx
// 2) Update API_URL below to match your route file path.
//    Example: if your route is /app/api/generate/route.ts => API_URL = "/api/generate"

import Link from "next/link";
import type { Metadata } from "next";
import ValentineClient from "./valentineClient";

// ✅ SEO Metadata (Server)
export const metadata: Metadata = {
  title: "Valentine AI Prompts | Kanova",
  description:
    "Generate luxury editorial Valentine AI photo prompts for couples, solo, products, and memory transformations. 9:16 reels-ready prompts with negatives.",
  keywords: [
    "Valentine AI prompts",
    "AI photo prompts",
    "Instagram reels prompts",
    "luxury editorial prompts",
    "Kanova",
    "Midjourney prompts",
    "DALL·E prompts",
    "Leonardo prompts",
    "Firefly prompts",
  ],
  alternates: { canonical: "/valentine-ai-prompts" },
  openGraph: {
    title: "Valentine AI Prompts | Kanova",
    description:
      "Create cinematic Valentine visuals with premium prompts. 9:16 reels-ready. Includes negative prompts.",
    url: "/valentine-ai-prompts",
    siteName: "Kanova",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine AI Prompts | Kanova",
    description:
      "Generate luxury editorial Valentine prompts for AI image tools. 9:16 ready + Negative prompts.",
  },
};

export default function ValentineAiPromptsPage() {
  return <ValentineClient />;
}

