import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MatrixBackground from "@/components/MatrixBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radip Shrestha | Software Engineer",
  description: "Personal website and portfolio of Radip Shrestha, Software Engineer specializing in Backend & Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="scanline-overlay" />
        <MatrixBackground />
        <main className="layout-main">
          {children}
        </main>
      </body>
    </html>
  );
}
