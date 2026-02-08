
// new navbar list 
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/text-prompts", label: "Text" },
  { href: "/photo-prompts", label: "AI Photo" },
  { href: "/valentine-AI", label: "Valentine AI" },
  { href: "/saved", label: "Saved" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // ✅ ONE-TIME redirect on FIRST LOAD ONLY
  useEffect(() => {
    const hasRedirected = sessionStorage.getItem(
      "kanova_valentine_redirect"
    );

    if (!hasRedirected && window.location.pathname === "/") {
      sessionStorage.setItem("kanova_valentine_redirect", "true");
      router.replace("/valentine-AI");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_brand.png"
            alt="Kanova"
            width={220}
            height={60}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 shadow-sm">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-pink-100 text-pink-700"
                    : "text-black/70 hover:bg-black/5 hover:text-black",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-sm"
          aria-label="Open menu"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-2 rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-xl px-4 py-3 text-sm font-medium transition",
                      active
                        ? "bg-pink-100 text-pink-700"
                        : "text-black/80 hover:bg-black/5",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

