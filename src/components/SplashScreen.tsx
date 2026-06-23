"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-background to-surface flex flex-col items-center justify-center z-[9999]">
      
      <div className="animate-bounce">
        <Image
          src="/images/logo.png"
          alt="Daily Use"
          width={160}
          height={160}
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-primary mt-6 animate-pulse">
        Daily Use
      </h1>

      <p className="text-on-surface-variant mt-3 text-center">
        Fitness • Nutrition • Reminders
      </p>

      <div className="mt-10 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
        <div
          className="w-3 h-3 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      <p className="text-primary mt-4 text-sm">
        Loading...
      </p>
    </div>
  );
}