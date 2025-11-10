"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: true, // або false, якщо хочеш сам обробляти редірект
      email,
      password,
      callbackUrl: "/profile", // куди перенаправити після логіну
    });

    if (res?.error) {
      console.error("Login failed:", res.error);
      // тут можна показати повідомлення користувачу
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-3xl font-bold mb-6">Вхід у Spark</h1>

      <button
        onClick={() => signIn("google", { callbackUrl: "/profile" })}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition mb-8"
      >
        Увійти через Google
      </button>

      <form
        onSubmit={handleCredentialsLogin}
        className="w-full max-w-sm bg-white p-6 rounded-md shadow"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border px-3 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            className="w-full border px-3 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          Увійти
        </button>
      </form>
    </div>
  );
}
