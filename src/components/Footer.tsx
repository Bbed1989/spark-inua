// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-4xl text-center py-4 text-gray-500 text-sm border-t mt-8">
      <p>© {new Date().getFullYear()} Spark.in.ua. Усі права захищено.</p>
      <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
        Про платформу
      </Link>
    </footer>
  );
}
