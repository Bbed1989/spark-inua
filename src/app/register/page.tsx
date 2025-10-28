"use client";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Реєстрація</h1>
      <p className="mb-4 text-gray-600">
        Поки що працює лише реєстрація через Google
      </p>

      <button
        onClick={() => signIn("google")}
        className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
      >
        Продовжити з Google
      </button>

      <p className="mt-6 text-sm text-gray-500">
        Пізніше зʼявиться можливість зареєструватися з email + пароль
      </p>
    </div>
  );
}
