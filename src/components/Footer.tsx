// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-4xl text-center py-6 text-gray-500 text-sm mt-8 border-t flex flex-col items-center space-y-4">
      <p>© {new Date().getFullYear()} Spark.in.ua. Усі права захищено.</p>
      <Link href="/about">
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
          Про платформу
        </button>
      </Link>
    </footer>
  );
}
