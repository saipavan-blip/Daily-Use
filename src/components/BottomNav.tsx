"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Reminders",
      path: "/reminders",
      icon: "notifications",
      isActive: pathname === "/reminders",
    },
    {
      name: "Gym",
      path: "/gym",
      icon: "exercise",
      isActive: pathname === "/gym" || pathname.startsWith("/gym/"),
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: "restaurant",
      isActive: pathname === "/recipes" || pathname.startsWith("/recipes/"),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] flex justify-around items-center h-20 pb-safe px-4 bg-surface dark:bg-surface/80 backdrop-blur-md border-t border-outline-variant shadow-lg z-50">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.path}
          className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 ${
            tab.isActive
              ? "bg-primary-container text-on-primary-container rounded-full px-5 py-1"
              : "text-on-surface-variant hover:bg-surface-variant/50"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: tab.isActive ? "'FILL' 1" : "'FILL' 0" }}
          >
            {tab.icon}
          </span>
          <span className="font-label-lg text-label-lg">{tab.name}</span>
        </Link>
      ))}
    </nav>
  );
}
