
// new here for SEO 
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-6">
          {children}
        </main>
          {/* ✅ Global Footer (shows on EVERY page) */}
        <Footer />
      </body>
    </html>
  );
}

