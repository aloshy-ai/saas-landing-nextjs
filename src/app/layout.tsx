import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoCloud - B2B SaaS Platform",
  description: "A modern SaaS platform for cloud infrastructure management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-800">
          {children}
        </main>
      </body>
    </html>
  );
}