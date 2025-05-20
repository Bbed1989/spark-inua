// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-w-4xl flex justify-between items-center py-4 px-8 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Spark Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
            Spark.in.ua
          </h1>
        </Link>
      </div>
      <nav className="flex space-x-6">
        <Link
          href="/authors"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Автори
        </Link>
        <Link
          href="/texts"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Тексти
        </Link>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Логін
        </Link>
      </nav>
    </header>
  );
}
