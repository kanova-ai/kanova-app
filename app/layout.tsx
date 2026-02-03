
// new here for SEO 
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://kanova.in"),
  title: {
    default: "Kanova — AI Prompt Generator",
    template: "%s | Kanova",
  },
  description:
    "Turn ideas into powerful AI prompts for text and images. Built for creators, developers, and professionals.",
  icons: { icon: "/icon.svg" },
  //  icons: { icon: "/kanova_logo.png" },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Kanova",
    url: "https://kanova.in",
    title: "Kanova — AI Prompt Generator",
    description:
      "Generate high-quality prompts for ChatGPT and AI image tools like Midjourney, DALL·E, Leonardo, and Firefly.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kanova — AI Prompt Generator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kanova — AI Prompt Generator",
    description:
      "Generate high-quality prompts for ChatGPT and AI image tools like Midjourney, DALL·E, Leonardo, and Firefly.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-92LE7HXMET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-92LE7HXMET');
          `}
        </Script>
      </head>

  <body className="min-h-screen bg-white text-zinc-900">
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur">
  <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/kanova.png"
        alt="Kanova"
        width={120}
        height={32}
        className="h-18 w-auto"
        priority
      />
    </Link>

    {/* <nav className="flex items-center gap-4 text-sm text-zinc-700">
       <Link href="/">Home</Link>
      <Link className="hover:underline" href="/text-prompts">Text</Link>
      <Link className="hover:underline" href="/photo-prompts">AI Photo</Link>
      <Link className="hover:underline" href="/valentine-AI">❤️Valentine AI</Link>
      <Link className="hover:underline" href="/saved">Saved</Link>
    </nav> */}

    {/* new navbar here  */}
     <div className="flex items-center gap-2">
          <Link
              href="/"
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium hover:bg-black/5"
            >
              Home
            </Link>
           <Link
              href="/text-prompts"
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium hover:bg-black/5"
            >
              Text
            </Link>
            <Link
              href="/photo-prompts"
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium hover:bg-black/5"
            >
              AI Photo
            </Link>
            <Link
              href="/valentine-AI"
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium hover:bg-black/5"
            >
              ❤️Valentine AI
            </Link>
            <Link
              href="/saved"
              className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium hover:bg-black/5"
            >
              Saved
            </Link>
          </div>
  </div>
</header>


        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} Kanova. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

