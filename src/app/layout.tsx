import Image from "next/image";
import HeaderAddButton from "@/components/HeaderAddButton";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Use",
  description: "Your daily fitness, nutrition, and reminder companion.",
  manifest: "/manifest.json",
  themeColor: "#caf300",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark selection:bg-primary-container selection:text-on-primary-container">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-on-surface w-full overflow-x-hidden relative`}>
        {/* Top App Bar */}
        <header className="w-full top-0 sticky bg-background z-40">
          <div className="flex items-center justify-between px-container-margin h-14 w-full">
            <Link
  href="/reminders"
  className="flex items-center gap-3"
>
              <Image
  src="/images/logo.png"
  alt="Logo"
  width={32}
  height={32}
  className="rounded-md"
/>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Daily Use</h1>
            </Link>
            <HeaderAddButton />
          </div>
        </header>

        {/* Content Canvas */}
        <main className="pb-24 flex-1 w-full">
          {children}
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}
