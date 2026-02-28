// new here 
import Link from "next/link";

export default function FestivalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold">Seasonal AI Specials</h1>
      <p className="mt-2 text-black/60">
        Festival-ready prompts and images — updated throughout the year.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Link
          href="/holi-ai"
          className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">🌸 Holi AI</h2>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Trending
            </span>
          </div>
          <p className="mt-2 text-black/60">
            Create vibrant Holi prompts & visuals.
          </p>
        </Link>

        <Link
          href="/valentine-AI"
          className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">💖 Valentine AI</h2>
            <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
              Seasonal
            </span>
          </div>
          <p className="mt-2 text-black/60">
            Luxury romantic couple prompts.
          </p>
        </Link>
      </div>
    </div>
  );
}