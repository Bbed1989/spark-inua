export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4">
      <div className="text-center max-w-md">
        <img
          src="/logo.png"
          alt="Spark Logo"
          className="w-24 h-24 mx-auto mb-6 drop-shadow-md"
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-800 tracking-tight">
          Spark.in.ua
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Літературна платформа для авторів і читачів.  
          Ми готуємо щось справді вартісне.  
          Скоро відкриття.
        </p>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Spark
        </div>
      </div>
    </main>
  );
}
