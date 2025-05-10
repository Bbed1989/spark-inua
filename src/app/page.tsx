import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col items-center text-center mt-16">
        <h1 className="text-4xl font-extrabold text-blue-800">Ласкаво просимо на літературну платформу!</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          Місце для авторів і читачів. Публікуй, читай, підтримуй.
        </p>
        <Link href="/about" className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition">
          Дізнатися більше
        </Link>
      </main>
  );
}
