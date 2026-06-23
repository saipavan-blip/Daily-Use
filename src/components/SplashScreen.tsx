"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[9999]">
      <Image
        src="/images/logo.png"
        alt="Daily Use"
        width={180}
        height={180}
        className="animate-pulse"
      />

      <h1 className="text-3xl font-bold text-primary mt-8">
        Daily Use
      </h1>

      <p className="text-on-surface-variant mt-3">
        Fitness • Nutrition • Reminders
      </p>

      <p className="text-primary mt-10 animate-pulse">
        Loading...
      </p>
    </div>
  );
}