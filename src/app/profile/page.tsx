"use client";
import { signOut, useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Завантаження...</p>;

  if (!session) {
    return <p>Доступ лише для авторизованих користувачів.</p>;
  }

  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold">Привіт, {session.user?.name || "користувачу"}!</h1>
      <p>Email: {session.user?.email}</p>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="User avatar"
          className="w-20 h-20 rounded-full mx-auto"
        />
      )}

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Вийти
      </button>
    </div>
  );
}
