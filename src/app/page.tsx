import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-100 to-gray-200 p-4 text-gray-900">
      <header className="w-full max-w-4xl flex items-center justify-between py-4 px-8 bg-white shadow-md rounded-md">
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
          Spark.in.ua
        </Link>
        <nav className="flex space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">Про платформу</Link>
          <Link href="/authors" className="text-gray-600 hover:text-blue-600 transition">Автори та твори</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center mt-16">
        <h1 className="text-4xl font-extrabold text-blue-800">Ласкаво просимо на літературну платформу!</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          Місце для авторів і читачів. Публікуй, читай, підтримуй.
        </p>
        <Link href="/about" className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition">
          Дізнатися більше
        </Link>
      </main>

      <footer className="w-full max-w-4xl py-4 text-center text-gray-500 mt-16 border-t">
        <p>© {new Date().getFullYear()} Spark.in.ua. Усі права захищено.</p>
      </footer>
    </div>
  );
}
