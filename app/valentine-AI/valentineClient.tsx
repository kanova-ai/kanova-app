// app/valentine-ai-prompts/ValentineClient.tsx
// Client Component: UI + API integration + Save + Search (SEO-like on-page search)
// Make sure this file is in same folder as page.tsx
 
"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import FloatingHearts from "./FloatingHearts";

type UseCase = {
  title: string;
  desc: string;
  tag: "Couple" | "Solo" | "Product" | "Memory";
  image: string;
};

const useCases: UseCase[] = [
  {
    title: "Couple Portraits",
    desc: "Turn your love story into a cinematic frame.",
    tag: "Couple",
    image: "/couple_image.png",
  },
  {
    title: "Self-Love Valentine",
    desc: "Valentine isn’t only for couples.",
    tag: "Solo",
    image: "/solo_image.png",
  },
  {
    title: "Brand & Product Love Ads",
    desc: "Romantic visuals that sell emotions.",
    tag: "Product",
    image: "/product_image.png",
  },
  {
    title: "Memory Transformation",
    desc: "Childhood → Valentine moment.",
    tag: "Memory",
    image: "/childhood_image.png",
  },
];

const platforms = [
  { label: "ChatGPT", href: "https://chat.openai.com/" },
  { label: "Gemini", href: "https://gemini.google.com/" },
  { label: "Midjourney", href: "https://www.midjourney.com/" },
  { label: "Leonardo", href: "https://leonardo.ai/" },
  { label: "Adobe Firefly", href: "https://firefly.adobe.com/" },
];

// If your route is app/api/generate/route.ts => "/api/generate"
const API_URL = "/api/generate";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur">
      {children}
    </span>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-black/60">{label}</span>
      {children}
    </label>
  );
}

export default function ValentineClient() {
  const [who, setWho] = useState<"Couple" | "Solo" | "Product" | "Memory">(
    "Couple"
  );
  const [mood, setMood] = useState("Romantic");
  const [scene, setScene] = useState("Golden hour field");
  const [about, setAbout] = useState("");

  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string>("");

  // Use-case search
  const [search, setSearch] = useState("");
  const filteredUseCases = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return useCases;
    return useCases.filter(
      (u) =>
        u.title.toLowerCase().includes(q) ||
        u.desc.toLowerCase().includes(q) ||
        u.tag.toLowerCase().includes(q)
    );
  }, [search]);

  // Hearts burst (click use-case)
  const [showHearts, setShowHearts] = useState(false);

  // Generate burst
  const [generateBurstKey, setGenerateBurstKey] = useState<number | null>(null);
  useEffect(() => {
    if (!generateBurstKey) return;
    const t = setTimeout(() => setGenerateBurstKey(null), 1200);
    return () => clearTimeout(t);
  }, [generateBurstKey]);

  // Copy burst
  const [copied, setCopied] = useState(false);
  const [copyBurstKey, setCopyBurstKey] = useState<number | null>(null);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1200);
    return () => clearTimeout(t);
  }, [copied]);

  useEffect(() => {
    if (!copyBurstKey) return;
    const t = setTimeout(() => setCopyBurstKey(null), 900);
    return () => clearTimeout(t);
  }, [copyBurstKey]);

  async function onGenerate() {
    setLoading(true);
    setErr("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "valentine",
          who,
          mood,
          scene,
          about,
          aspect: "9:16",
          style: "luxury editorial",
          platform: "Instagram Reels",
          lighting: "soft golden-hour light",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to generate prompt");
      }

      setPrompt(data.prompt);
    } catch (e: any) {
      setErr(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!prompt) return;

    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setCopyBurstKey(Date.now());
    } catch {
      const ta = document.createElement("textarea");
      ta.value = prompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);

      setCopied(true);
      setCopyBurstKey(Date.now());
    }
  }

  function onSave() {
    if (!prompt) return;

    const key = "kanova_saved_prompts";
    const existing = JSON.parse(localStorage.getItem(key) || "[]") as any[];
    const item = {
      id: crypto.randomUUID(),
      type: "valentine",
      who,
      mood,
      scene,
      about,
      prompt,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(key, JSON.stringify([item, ...existing]));
    alert("Saved ✅");
  }

  function applyUseCase(tag: UseCase["tag"]) {
    setWho(tag);

    // burst hearts
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 1400);

    if (tag === "Product") {
      setMood("Elegant");
      setScene("Minimal studio");
      setAbout(
        "a premium product with romantic Valentine vibes, soft blush tones"
      );
    } else if (tag === "Memory") {
      setMood("Dreamy");
      setScene("Garden florals");
      setAbout(
        "a childhood memory transformed into a Valentine moment, cinematic look"
      );
    } else if (tag === "Solo") {
      setMood("Romantic");
      setScene("City night bokeh");
      setAbout("a self-love Valentine portrait, soft glow, editorial framing");
    } else {
      setMood("Romantic");
      setScene("Golden hour field");
      setAbout("a couple holding hands, soft blush tones, cinematic look");
    }

    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#fff7fb] to-white">
      {/* ✅ HERO (FIXED hearts layering + no behind-page look) */}
      <section className="relative mx-auto max-w-6xl px-4 pt-10 pb-8 md:pt-14 overflow-hidden">
        {/* Hearts only inside HERO, not behind the page */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
          <FloatingHearts count={50} color="#ff4d88"/>
        </div>

        {/* Hero content above hearts */}
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            {/* Tool Links */}
            <div className="mb-5 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-black/70 backdrop-blur hover:bg-black/5"
                >
                  Open {p.label}
                </a>
              ))}
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              <Pill>Valentine Special</Pill>
              <Pill>9:16 Ready</Pill>
              <Pill>Luxury Editorial</Pill>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
              This Valentine,{" "}
              <span className="text-black/70">don’t just generate images.</span>
              <br />
              Create feelings.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/70">
              Kanova turns love stories, memories, and emotions into cinematic AI
              photo prompts — optimized for Instagram reels, covers, and brand
              visuals.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#generator"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                💖 Generate Valentine Photo Prompts
              </a>
              <a
                href="#before-after"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
              >
                ✨ See Before / After
              </a>
            </div>

            <p className="mt-4 text-xs text-black/50">
              Tip: Use Kanova’s prompt in any AI tool (ChatGPT, Midjourney,
              Leonardo, Firefly, etc.).
            </p>

            {/* Search */}
            <div className="mt-6">
              <label className="block text-xs font-semibold text-black/60">
                Search Use-Cases
              </label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search: couple, solo, product, memory..."
                className="mt-2 w-full max-w-sm rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-black/10 shadow-sm">
            <Image
              src="/valentine_Day_image.png"
              alt="Sample Valentine visual generated using Kanova prompt"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-black backdrop-blur">
              ✨ Sample result using Kanova prompt
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section id="before-after" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold text-black md:text-2xl">
            Why typing “romantic photo” is not enough
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-black/70">
            Prompts are instructions. Better instructions = better results.
            Kanova adds details: lens, lighting, mood, composition, background,
            and negative prompts.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-5">
              <p className="text-sm font-semibold text-black/70">
                Without Kanova
              </p>
              <ul className="mt-3 space-y-2 text-sm text-black/60">
                <li>• No consistent style</li>
                <li>• Random lighting & composition</li>
                <li>• “AI look” skin / weird details</li>
                <li>• Busy backgrounds</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-[#fff2f8] to-white p-5">
              <p className="text-sm font-semibold text-black/70">
                With Kanova ✨
              </p>
              <ul className="mt-3 space-y-2 text-sm text-black/60">
                <li>• Cinematic lighting</li>
                <li>• Luxury editorial styling</li>
                <li>• Controlled background + depth</li>
                <li>• Strong negative prompts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases (hearts overlay ONLY here on click) */}
      <section className="relative mx-auto max-w-6xl px-4 pb-10">
        {showHearts && (
          <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
            <FloatingHearts count={50} />
          </div>
        )}

        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-black md:text-2xl">
              Valentine Use-Cases
            </h2>
            <p className="mt-2 text-sm text-black/70">
              Pick a vibe, generate a prompt, paste into your AI tool.
            </p>
          </div>
          <Pill>Made for creators • brands • developers</Pill>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredUseCases.map((c) => {
            const selected = who === c.tag;
            return (
              <button
                key={c.title}
                onClick={() => applyUseCase(c.tag)}
                className={[
                  "text-left rounded-3xl border bg-white p-5 shadow-sm transition-all duration-200",
                  "hover:bg-black/[0.02] hover:-translate-y-0.5",
                  selected
                    ? "border-pink-400 ring-2 ring-pink-300/60 shadow-md scale-[1.02]"
                    : "border-black/10",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-black/60">{c.tag}</p>
                  <span className="text-xs text-black/40">9:16</span>
                </div>

                <p className="mt-3 text-base font-semibold">{c.title}</p>
                <p className="mt-1 text-sm text-black/70">{c.desc}</p>

                <div className="mt-4 relative aspect-[9/10] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className={[
                      "object-cover transition-transform duration-300",
                      selected ? "scale-105" : "scale-100",
                    ].join(" ")}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />

                  {selected && (
                    <span className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow">
                      Selected ✓
                    </span>
                  )}
                </div>

                <p
                  className={[
                    "mt-3 text-xs transition-all duration-300",
                    selected ? "text-pink-600 font-medium" : "text-black/50",
                  ].join(" ")}
                >
                  {selected
                    ? "Applied ✓ Scroll down to Generate"
                    : "Click to apply → then Generate"}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Generator */}
      <section id="generator" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-black md:text-2xl">
                Generate Valentine Prompt
              </h2>
              <p className="mt-2 text-sm text-black/70">
                Fill details → Generate → Copy/Save.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill>Luxury Editorial</Pill>
              <Pill>Soft Studio Light</Pill>
              <Pill>50mm Look</Pill>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Left controls */}
            <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-5">
              <div className="grid gap-4">
                <Field label="Who is this for?">
                  <select
                    value={who}
                    onChange={(e) => setWho(e.target.value as any)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                  >
                    <option>Couple</option>
                    <option>Solo</option>
                    <option>Product</option>
                    <option>Memory</option>
                  </select>
                </Field>

                <Field label="Mood">
                  <select
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                  >
                    <option>Romantic</option>
                    <option>Dreamy</option>
                    <option>Elegant</option>
                    <option>Cinematic</option>
                  </select>
                </Field>

                <Field label="Scene">
                  <select
                    value={scene}
                    onChange={(e) => setScene(e.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                  >
                    <option>Golden hour field</option>
                    <option>Minimal studio</option>
                    <option>City night bokeh</option>
                    <option>Garden florals</option>
                  </select>
                </Field>

                <Field label="What should the image be about?">
                  <input
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="e.g., couple holding hands, soft blush tones, cinematic look"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                  />
                </Field>

                <div className="relative inline-flex overflow-visible">
                  {generateBurstKey && (
                    <div
                      key={generateBurstKey}
                      className="absolute inset-0 z-0 pointer-events-none overflow-visible"
                    >
                      <FloatingHearts count={6} mode="burst" color="#ff2d55" />
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setGenerateBurstKey(Date.now());
                      onGenerate();
                    }}
                    disabled={loading}
                    className="relative z-10 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90 disabled:opacity-60"
                  >
                    {loading ? "Generating..." : "Generate Prompt ✨"}
                  </button>
                </div>

                {err ? <p className="text-xs text-red-600">{err}</p> : null}

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={onSave}
                    disabled={!prompt}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.03] disabled:opacity-50"
                  >
                    Save
                  </button>
                </div>

                <p className="text-xs text-black/50">
                  Tip: your API already adds a strong Negative prompt automatically.
                </p>
              </div>
            </div>

            {/* Right prompt box */}
            <div className="rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-base font-semibold text-black">
                Your generated Valentine prompt
              </p>

              <div className="mt-4">
                <textarea
                  readOnly
                  value={prompt || "Your prompt will appear here..."}
                  className="w-full min-h-[320px] resize-none rounded-3xl border border-black/10 bg-white p-5 text-sm leading-relaxed text-black/70 outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="mt-4 relative inline-flex overflow-visible">
                {copyBurstKey && (
                  <div
                    key={copyBurstKey}
                    className="absolute inset-0 z-0 pointer-events-none overflow-visible"
                  >
                    <FloatingHearts count={5} mode="burst" color="#ff2d55" />
                  </div>
                )}

                <button
                  onClick={handleCopy}
                  disabled={!prompt}
                  className={[
                    "relative z-10 rounded-2xl px-6 py-3 text-sm font-semibold transition-all",
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-white text-black border border-black/10 hover:bg-black/[0.03]",
                    !prompt ? "opacity-50 cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {copied ? "Copied ✅" : "Copy Prompt"}
                </button>
              </div>

              <p className="mt-4 text-xs text-black/50">
                Paste into:{" "}
                <a
                  href="https://chat.openai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  ChatGPT
                </a>{" "}
                /{" "}
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Gemini
                </a>{" "}
                /{" "}
                <a
                  href="https://www.midjourney.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Midjourney
                </a>{" "}
                /{" "}
                <a
                  href="https://leonardo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Leonardo
                </a>{" "}
                /{" "}
                <a
                  href="https://firefly.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Firefly
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-[#ffe6f1] via-[#fff7fb] to-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-black md:text-3xl">
            This Valentine, let your prompts speak love.
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-black/70">
            Generate a premium prompt in seconds — and create visuals that feel
            expensive, emotional, and shareable.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#generator"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
            >
              ❤️ Generate Valentine Prompts
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
