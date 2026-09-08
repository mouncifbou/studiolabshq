import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiolabshq.com"),
  title: "StudioLabs LLC",
  description:
    "StudioLabs LLC is a digital studio in Sheridan, Wyoming that designs, builds, and grows software products and online brands for businesses.",
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      "facebook-domain-verification": "5ocj2pqx06ganujd1h2pi0x2zksv3o",
    },
  },
  openGraph: {
    title: "StudioLabs LLC",
    description:
      "A digital studio that designs, builds, and grows software products and online brands for businesses.",
    url: "/",
    siteName: "StudioLabs LLC",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
