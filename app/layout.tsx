import "./docs.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Keep React - Streamline Your Design Workflow and Create Stunning UIs",
  description:
    "Unlock the power of Keep Design System, a comprehensive UI library with 5000+ component variants and responsive-ready layouts. Streamline your design workflow, save time, and effortlessly create visually stunning user interfaces. Explore our pre-designed templates, comprehensive documentation, and lifetime updates. Upgrade your design game with Keep Design System today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
