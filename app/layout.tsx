
// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Kanova",
//   description: "Create luxury romantic AI couple prompts instantly.",
//   icons: {
//        icon: "/icon.svg",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main className="mx-auto max-w-6xl px-4 py-6">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// new new code 
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kanova",
  description: "Create luxury romantic AI couple prompts instantly.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-92LE7HXMET"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-92LE7HXMET', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

