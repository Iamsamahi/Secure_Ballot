import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import TopLoaderContext from "@/context/TopLoaderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ` flex flex-col items-center min-h-screen w-screen dark`
        }
      >
        <Navbar />
        <TopLoaderContext>
          <main className="flex-1 w-full max-w-4xl mx-auto p-10">
            {children}
          </main>
        </TopLoaderContext>
        <Toaster />
      </body>
    </html>
  );
}