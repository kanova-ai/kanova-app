
// seo optimize page here 

"use client";

import Head from "next/head";
import { useMemo, useState } from "react";
import { Button, Card, Input, Label, Select, SmallHelp } from "@/components/ui";
import { savePrompt } from "@/components/storage";

type ApiResp = { ok: boolean; prompt?: string; error?: string };

export default function PhotoPromptsPage() {
  const [platform, setPlatform] = useState("Instagram");
  const [useCase, setUseCase] = useState("Reel Cover");
  const [style, setStyle] = useState("Luxury Editorial");
  const [lighting, setLighting] = useState("Soft Studio Light");
  const [mood, setMood] = useState("Elegant");
  const [subject, setSubject] = useState("");
  const [aspect, setAspect] = useState("9:16");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const title = useMemo(
    () => `${platform} • ${useCase} • ${subject || "Untitled"}`,
    [platform, useCase, subject]
  );

  async function generate() {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "photo",
          platform,
          useCase,
          style,
          lighting,
          mood,
          subject,
          aspect,
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
      type: "photo",
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
        <title>AI Photo Prompt Generator | Kanova</title>
        <meta
          name="description"
          content="Generate high-quality AI image prompts for Midjourney, DALL·E, Leonardo, Firefly and more. Perfect for reels, thumbnails, product shoots, and branding."
        />
        <link rel="canonical" href="https://kanova.in/photo-prompts" />

        {/* Open Graph */}
        <meta property="og:title" content="AI Photo Prompt Generator | Kanova" />
        <meta
          property="og:description"
          content="Generate high-quality AI image prompts for Midjourney, DALL·E, Leonardo, Firefly and more. Perfect for reels, thumbnails, product shoots, and branding."
        />
        <meta property="og:url" content="https://kanova.in/photo-prompts" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Photo Prompt Generator | Kanova" />
        <meta
          name="twitter:description"
          content="Generate high-quality AI image prompts for Midjourney, DALL·E, Leonardo, Firefly and more. Perfect for reels, thumbnails, product shoots, and branding."
        />
      </Head>

      {/* ✅ PAGE UI */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            AI Photo Prompt Generator
          </h1>
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

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Platform</Label>
                  <Select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                    <option>Instagram</option>
                    <option>YouTube</option>
                    <option>Website</option>
                    <option>Ads</option>
                  </Select>
                </div>
                <div>
                  <Label>Use-case</Label>
                  <Select value={useCase} onChange={(e) => setUseCase(e.target.value)}>
                    <option>Reel Cover</option>
                    <option>Thumbnail</option>
                    <option>Product Shoot</option>
                    <option>Personal Branding</option>
                    <option>Campaign Post</option>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Style</Label>
                  <Select value={style} onChange={(e) => setStyle(e.target.value)}>
                    <option>Luxury Editorial</option>
                    <option>Minimal Studio</option>
                    <option>Cinematic</option>
                    <option>Vibrant Viral</option>
                    <option>Soft Pastel</option>
                    <option>Street Style</option>
                  </Select>
                </div>
                <div>
                  <Label>Lighting</Label>
                  <Select value={lighting} onChange={(e) => setLighting(e.target.value)}>
                    <option>Soft Studio Light</option>
                    <option>Golden Hour</option>
                    <option>Dramatic Rim Light</option>
                    <option>Neon Night</option>
                    <option>Natural Window Light</option>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Mood</Label>
                  <Select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option>Elegant</option>
                    <option>Bold</option>
                    <option>Dreamy</option>
                    <option>Cozy</option>
                    <option>Futuristic</option>
                  </Select>
                </div>
                <div>
                  <Label>Aspect ratio</Label>
                  <Select value={aspect} onChange={(e) => setAspect(e.target.value)}>
                    <option>9:16</option>
                    <option>1:1</option>
                    <option>16:9</option>
                    <option>4:5</option>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Subject (what image is about)</Label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., rose-gold jewellery product photo on silk fabric"
                />
                <SmallHelp>Tip: include product/person + environment + brand vibe.</SmallHelp>
              </div>

              <div className="flex gap-3">
                <Button onClick={generate} disabled={loading}>
                  {loading ? "Generating..." : "Generate Photo Prompt"}
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
            <div className="text-sm font-semibold">Your generated photo prompt</div>
            <div className="mt-3 min-h-[320px] whitespace-pre-wrap rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm leading-relaxed">
              {result || "Your image prompt will appear here..."}
            </div>
            <div className="mt-3 text-xs text-zinc-500">
              Paste this prompt into your image tool. If the tool supports it, also set the aspect ratio to {aspect}.
            </div>
          </Card>
        </div>

        {/* ✅ Open AI tools (same like Home page) */}
        {/* <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="text-sm font-semibold">Open AI tools</div>
          <div className="mt-2 text-sm text-zinc-600">
            Copy your prompt from Kanova and paste it directly into your preferred AI image tool.
          </div>

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
              href="https://labs.openai.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
            >
              Open DALL·E
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
        </section> */}
      </div>
    </>
  );
}

