
// seo optimize page here 

"use client";

import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { Button, Card, Input } from "@/components/ui";
import { loadSaved, removePrompt, SavedPrompt } from "@/components/storage";

export default function SavedPage() {
  const [items, setItems] = useState<SavedPrompt[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => setItems(loadSaved()), []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((x) =>
      (x.title + " " + x.content).toLowerCase().includes(s)
    );
  }, [items, q]);

  function del(id: string) {
    removePrompt(id);
    setItems(loadSaved());
  }

  return (
    <>
      {/* ✅ SEO META TAGS (NOINDEX PAGE) */}
      <Head>
        <title>Saved Prompts | Kanova</title>
        <meta
          name="description"
          content="View and manage your saved AI prompts in Kanova. Prompts are stored locally in your browser."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <link rel="canonical" href="https://kanova.in/saved" />
      </Head>

      {/* ✅ PAGE UI */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Saved</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Saved prompts are stored in your browser.
          </p>
        </div>

        <div className="max-w-xl">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search saved prompts..."
          />
        </div>

        <div className="grid gap-4">
          {filtered.length === 0 ? (
            <Card>
              <div className="text-sm text-zinc-600">No saved prompts yet.</div>
            </Card>
          ) : (
            filtered.map((it) => (
              <Card key={it.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">{it.title}</div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {new Date(it.createdAt).toLocaleString()} {" • "}
                      {it.type === "photo" ? "AI Photo" : "Text"}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      onClick={() =>
                        navigator.clipboard.writeText(it.content)
                      }
                    >
                      Copy
                    </Button>
                    <Button variant="ghost" onClick={() => del(it.id)}>
                      Delete
                    </Button>
                  </div>
                </div>

                <div className="mt-3 whitespace-pre-wrap rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm leading-relaxed">
                  {it.content}
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
}

