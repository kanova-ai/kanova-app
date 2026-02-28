
// new seo home code here 

import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kanova — AI Prompt Generator for Text & Images",
  description:
    "Generate powerful AI prompts for creators, developers, and professionals. Create prompts for ChatGPT, Gemini, Midjourney, DALL·E, Leonardo, and Firefly.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kanova — AI Prompt Generator",
    description:
      "Turn ideas into powerful AI prompts for text and images. Built for creators and professionals.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Turn ideas into powerful AI prompts.
        </h1>
        <p className="max-w-2xl text-zinc-600">
          Kanova helps creators, developers, and professionals convert vague ideas into clear, high-quality prompts
          for text and AI images.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            href="/photo-prompts"
          >
            Generate AI Photo Prompts
          </Link>

          <Link
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50"
            href="/text-prompts"
          >
            Generate Text Prompts
          </Link>
          {/* new tab add for valentine day week  */}
          <Link
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50"
            href="/valentine-AI"
          >
           ❤️ Valentine AI
          </Link>
           <Link
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50"
            href="/holi-ai"
          >
           🌸 Holi AI
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="text-sm font-semibold">Creators</div>
          <div className="mt-2 text-sm text-zinc-600">
            Reels, thumbnails, product shoots, branding visuals—ready-to-use AI image prompts.
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold">Developers</div>
          <div className="mt-2 text-sm text-zinc-600">
            Debugging prompts, code review prompts, system design prompts, interview prompts.
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold">Everyone</div>
          <div className="mt-2 text-sm text-zinc-600">
            Emails, scripts, ideas—structured prompts that give better outputs.
          </div>
        </Card>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
        <div className="text-sm font-semibold">Quick tip</div>
        <div className="mt-2 text-sm text-zinc-600">
          Kanova generates <span className="font-medium">prompts</span> (instructions). Copy the prompt and paste it into.
          {/* ChatGPT / Gemini / Midjourney / DALL·E / Leonardo / Firefly etc. */}
        </div>
         <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://chat.openai.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-200"
          >
           ChatGPT
          </a>

          <a
            href="https://gemini.google.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-200"
          >
           Gemini
          </a>

          <a
            href="https://www.midjourney.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-200"
          >
             Midjourney
          </a>

          <a
            href="https://leonardo.ai/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-200"
          >
             Leonardo
          </a>

          <a
            href="https://firefly.adobe.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-200"
          >
             Adobe Firefly
          </a>
        </div>
      </section>

      {/* ✅ Open tool links (no API needed) */}
      {/* <section className="rounded-2xl border border-zinc-200 bg-white p-5"> */}
        {/* <div className="text-sm font-semibold">Open AI tools</div> */}
        {/* <div className="mt-2 text-sm text-zinc-600">
          Generate a prompt in Kanova, then open your tool and paste the prompt.
        </div> */}

        {/* <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://chat.openai.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
          >
           ChatGPT
          </a>

          <a
            href="https://gemini.google.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
          >
           Gemini
          </a>

          <a
            href="https://www.midjourney.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
          >
             Midjourney
          </a>

          <a
            href="https://leonardo.ai/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
          >
             Leonardo
          </a>

          <a
            href="https://firefly.adobe.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
          >
             Adobe Firefly
          </a>
        </div> */}
      {/* </section> */}
    </div>
  );
}

