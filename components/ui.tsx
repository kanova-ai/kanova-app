import * as React from "react";

export function Label({ children }: { children: React.ReactNode }) {
  return <div className="mb-1 text-xs font-medium text-zinc-700">{children}</div>;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none",
        "focus:border-zinc-400",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[
        "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none",
        "focus:border-zinc-400",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none",
        "focus:border-zinc-400",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }
) {
  const variant = props.variant ?? "primary";
  return (
    <button
      {...props}
      className={[
        "rounded-xl px-4 py-2 text-sm font-medium transition",
        variant === "primary"
          ? "bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50"
          : "border border-zinc-200 bg-white hover:bg-zinc-50 disabled:opacity-50",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">{children}</div>;
}

export function SmallHelp({ children }: { children: React.ReactNode }) {
  return <div className="mt-1 text-xs text-zinc-500">{children}</div>;
}
