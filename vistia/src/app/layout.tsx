
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";

import "./globals.css";
import DynamicHeader from "../components/Header/DynamicHeader";
import BottomNav from "../components/BottomNav/BottomNav";
import { CoinProvider } from "./context/HeatmapCoinContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Vistia",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CoinProvider>
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased`}>
        {/* Main Container */}
        <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
          {/* Dynamic Header */}
          <DynamicHeader />
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto relative pb-[74px]">
            {children}
          </div>

          {/* Bottom Navigation */}
          <BottomNav />
        </div>
      </body>
    </html>
    </CoinProvider>
    
  );
}
