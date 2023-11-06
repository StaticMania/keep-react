import "./docs.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Keep React - Supercharge Your Web Development",
  description:
    "Explore our library of 40+ open-source React UI components and interactive elements, empowering you to create stunning web projects effortlessly.",
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
        <main className="pt-20 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
