
// new seo optimize here 
"use client";

import Head from "next/head";
import { useMemo, useState } from "react";
import { Button, Card, Input, Label, Select, SmallHelp, Textarea } from "@/components/ui";
import { savePrompt } from "@/components/storage";

type ApiResp = { ok: boolean; prompt?: string; error?: string };

export default function TextPromptsPage() {
  const [category, setCategory] = useState("Interview");
  const [tone, setTone] = useState("Professional");
  const [difficulty, setDifficulty] = useState("Medium");
  const [topic, setTopic] = useState("");
  const [constraints, setConstraints] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const title = useMemo(() => `${category} • ${topic || "Untitled"}`, [category, topic]);

  async function generate() {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "text",
          category,
          tone,
          difficulty,
          topic,
          constraints,
        }),
      });
      const data = (await res.json()) as ApiResp;
      if (!data.ok) throw new Error(data.error || "Failed");
      setResult(data.prompt || "");
    } catch (e: any) {
      setResult(`Error: ${e?.message ?? "Something went wrong"}`);
    } finally {
      setLoading(false);
    }
  }

  function onSave() {
    if (!result.trim()) return;
    savePrompt({
      id: crypto.randomUUID(),
      type: "text",
      title,
      content: result,
      createdAt: Date.now(),
    });
    alert("Saved ✅");
  }

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Head>
        <title>Text Prompt Generator | Kanova</title>
        <meta
          name="description"
          content="Generate structured AI text prompts for interviews, debugging, emails, marketing, learning, and more using Kanova."
        />
        <link rel="canonical" href="https://kanova.in/text-prompts" />

        {/* Open Graph */}
        <meta property="og:title" content="Text Prompt Generator | Kanova" />
        <meta
          property="og:description"
          content="Create high-quality text prompts for ChatGPT and other AI tools with Kanova."
        />
        <meta property="og:url" content="https://kanova.in/text-prompts" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Text Prompt Generator | Kanova" />
        <meta
          name="twitter:description"
          content="Create high-quality text prompts for interviews, debugging, emails, and content."
        />
      </Head>

      {/* ✅ PAGE UI */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Text Prompt Generator</h1>
          {/* <p className="mt-1 text-sm text-zinc-600">
            Create structured prompts for creators, developers, and professionals.
          </p> */}
          {/* new  */}
          <div>
          <p className="mt-1 text-sm text-zinc-600">
            {/* Generate high-quality image prompts for Midjourney / DALL·E / Leonardo / Firefly and more. */}
             Copy your prompt from Kanova and paste it directly into your preferred AI image tool.
          </p>
          {/* new  */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://chat.openai.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
            >
              Open ChatGPT
            </a>

            <a
              href="https://gemini.google.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
            >
              Open Gemini
            </a>

            <a
              href="https://www.midjourney.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
            >
              Open Midjourney
            </a>

            <a
              href="https://leonardo.ai/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
            >
              Open Leonardo
            </a>

            <a
              href="https://firefly.adobe.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
            >
              Open Adobe Firefly
            </a>
          </div>
        </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="grid gap-4">
              <div>
                <Label>Category</Label>
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>Interview</option>
                  <option>Content</option>
                  <option>Business Email</option>
                  <option>Resume</option>
                  <option>Marketing</option>
                  <option>Code Review</option>
                  <option>Debugging</option>
                  <option>Learning</option>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Tone</Label>
                  <Select value={tone} onChange={(e) => setTone(e.target.value)}>
                    <option>Professional</option>
                    <option>Friendly</option>
                    <option>Direct</option>
                    <option>Creative</option>
                    <option>Funny</option>
                  </Select>
                </div>
                <div>
                  <Label>Difficulty</Label>
                  <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Topic (what you want)</Label>
                <Input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., React interview for 3 years experience"
                />
                <SmallHelp>Tip: add audience + goal + context.</SmallHelp>
              </div>

              <div>
                <Label>Extra constraints (optional)</Label>
                <Textarea
                  value={constraints}
                  onChange={(e) => setConstraints(e.target.value)}
                  placeholder="e.g., Ask one question at a time and provide feedback."
                  rows={4}
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={generate} disabled={loading}>
                  {loading ? "Generating..." : "Generate Prompt"}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigator.clipboard.writeText(result)}
                  disabled={!result.trim()}
                >
                  Copy
                </Button>
                <Button variant="ghost" onClick={onSave} disabled={!result.trim()}>
                  Save
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Your generated prompt</div>
            <div className="mt-3 min-h-[320px] whitespace-pre-wrap rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm leading-relaxed">
              {result || "Your prompt will appear here..."}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

