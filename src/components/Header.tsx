// src/components/Header.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-4xl flex items-center justify-between py-4 px-8 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Spark Logo" width={40} height={40} />
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
          Spark.in.ua
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link
          href="/"
          className={`text-gray-600 hover:text-blue-600 transition ${
            pathname === "/" ? "text-blue-800 font-semibold" : ""
          }`}
        >
          Головна
        </Link>
        <Link
          href="/authors"
          className={`text-gray-600 hover:text-blue-600 transition ${
            pathname === "/authors" ? "text-blue-800 font-semibold" : ""
          }`}
        >
          Автори та твори
        </Link>
      </nav>
    </header>
  );
}
