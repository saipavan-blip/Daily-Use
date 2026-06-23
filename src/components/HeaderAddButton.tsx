"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderAddButton() {
  const pathname = usePathname();

  console.log("Current Path:", pathname);

  if (
    pathname.includes("/gym") ||
    pathname.includes("/recipes")
  ) {
    return null;
  }

  return (
    <Link
      href="/reminders/new"
      className="active:scale-95 transition-transform hover:opacity-80"
    >
      <span className="material-symbols-outlined text-primary">
        add
      </span>
    </Link>
  );
}