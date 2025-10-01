import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "FinTrack - Track Stock Prices Effortlessly",
  description: "Effortlessly track stock prices with FinTrack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="apple-mobile-web-app-title" content="FinTrack" />
      </head>
      <body
        className={`${GeistSans.className} ${GeistMono.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
