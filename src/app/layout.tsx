import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Lucy | Your Personal AI Shopping Agent",
  description: "A luxury fashion shopping experience powered by personal intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-lucy-page text-lucy-ivory antialiased selection:bg-lucy-accent selection:text-lucy-page`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}