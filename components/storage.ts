export type SavedPrompt = {
  id: string;
  type: "text" | "photo";
  title: string;
  content: string;
  createdAt: number;
};

const KEY = "kanova_saved_v1";

export function loadSaved(): SavedPrompt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedPrompt[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePrompt(p: SavedPrompt) {
  const all = loadSaved();
  all.unshift(p);
  localStorage.setItem(KEY, JSON.stringify(all.slice(0, 200)));
}

export function removePrompt(id: string) {
  const all = loadSaved().filter((x) => x.id !== id);
  localStorage.setItem(KEY, JSON.stringify(all));
}
