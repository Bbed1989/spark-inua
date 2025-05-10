export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="flex justify-between p-4 bg-blue-600 text-white">
          <a href="/" className="font-bold text-xl">Spark.in.ua</a>
          <nav className="space-x-4">
            <a href="/about">Про платформу</a>
            <a href="/authors">Автори та твори</a>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Spark.in.ua. Усі права захищено.
        </footer>
      </body>
    </html>
  );
}
