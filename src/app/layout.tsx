import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-4">
      <header className="w-full max-w-3xl flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Spark Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">Spark.in.ua</h1>
        </div>
        <nav className="space-x-4">
          <a href="/" className="text-blue-600 hover:underline">Головна</a>
          <a href="/about" className="text-blue-600 hover:underline">Про платформу</a>
          <a href="/authors" className="text-blue-600 hover:underline">Автори та твори</a>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-3xl p-4">{children}</main>
      <footer className="w-full max-w-3xl text-center py-4 text-gray-500 text-sm">
        © 2025 Spark.in.ua. Усі права захищено.
      </footer>
    </div>
  );
}
