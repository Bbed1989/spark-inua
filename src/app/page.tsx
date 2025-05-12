import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-gray-900">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-blue-800">
          Ласкаво просимо на Spark.in.ua!
        </h1>
        <p className="text-lg text-gray-700">
          Місце для авторів і читачів. Публікуй, читай, підтримуй.
        </p>
      </div>
    </div>
  );
}
