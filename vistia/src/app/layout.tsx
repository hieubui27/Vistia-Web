import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicHeader from "../components/Header/DynamicHeader";
import BottomNav from "../components/BottomNav/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vistia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Main Container */}
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
        {/* Dynamic Header */}
        <DynamicHeader />
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </body>
  </html>
  );
}
