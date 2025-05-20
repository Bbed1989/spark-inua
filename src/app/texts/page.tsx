import Link from "next/link";
import { texts } from "../data/texts"; // або "@/app/data/texts" якщо alias налаштовано

export default function TextsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Тексти</h1>
      <ul className="space-y-4">
        {texts.map((text) => (
          <li key={text.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">{text.title}</h2>
            <p className="text-gray-600">Автор: {text.author}</p>
            <p className="text-gray-700">{text.description}</p>
            <Link
              href={`/read/${text.slug}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Читати →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
