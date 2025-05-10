import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 text-gray-900 p-4">
      <header className="w-full max-w-4xl flex justify-between items-center py-4 px-8 bg-white shadow-md rounded-md">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Spark Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
              Spark.in.ua
            </h1>
          </Link>
        </div>
        <nav className="flex space-x-10">
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">Про платформу</Link>
          <Link href="/authors" className="text-gray-600 hover:text-blue-600 transition">Автори та твори</Link>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-4xl p-4 mt-8">{children}</main>

      <footer className="w-full max-w-4xl text-center py-4 text-gray-500 text-sm border-t mt-8">
        © {new Date().getFullYear()} Spark.in.ua. Усі права захищено.
      </footer>
    </div>
  );
}
