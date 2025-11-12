"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type Work = {
  id: string;
  title: string;
  description?: string;
};

export default function TextsPage() {
  const { data: session } = useSession();
  const [works, setWorks] = useState<Work[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/api/works")
      .then((res) => res.json())
      .then(setWorks);
  }, []);

  const createWork = async () => {
    const res = await fetch("/api/works", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        authorId: session?.user?.id, // тепер автор = залогінений юзер
      }),
    });
    if (res.ok) {
      const newWork = await res.json();
      setWorks((prev) => [...prev, newWork]);
      setTitle("");
    } else {
      const err = await res.json();
      alert("❌ Error: " + JSON.stringify(err));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Перелік творів</h1>

      <ul className="mb-4">
        {works.map((w) => (
          <li key={w.id}>{w.title}</li>
        ))}
      </ul>

      {session ? (
        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Назва твору"
            className="border px-2 py-1 flex-1"
          />
          <button
            onClick={createWork}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Додати
          </button>
        </div>
      ) : (
        <p className="text-gray-500">🔒 Увійдіть, щоб додавати твори</p>
      )}
    </div>
  );
}
