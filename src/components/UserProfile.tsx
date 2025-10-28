"use client";

import { useSession, signOut } from "next-auth/react";

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Завантаження...</p>;
  }

  if (!session) {
    return <p>Ви не увійшли в систему.</p>;
  }

  const { user } = session;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Профіль користувача</h2>
      <p className="mb-2">
        <strong>Імʼя:</strong> {user?.name || "Невідомо"}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {user?.email}
      </p>

      {user?.image && (
        <img
          src={user.image}
          alt="User avatar"
          className="w-20 h-20 rounded-full mx-auto my-4"
        />
      )}

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Вийти
      </button>
    </div>
  );
}
