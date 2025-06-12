import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jafar Parayil | Full Stack Developer",
  description:
    "Portfolio of Jafar Parayil – building modern web apps with React and Next.js.",
  keywords: [
    "Jafar Parayil",
    "Next.js",
    "Full Stack",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  creator: "Jafar Parayil",

  twitter: {
    card: "summary_large_image",
    title: "Jafar Parayil | Full Stack Developer",
    description: "Building performant websites using Next.js, React, and more.",
    creator: "@your_twitter",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
  metadataBase: new URL("https://yourwebsite.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* 👇 Add your favicon here */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
