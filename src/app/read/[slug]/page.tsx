// src/app/read/[slug]/page.tsx
import { texts } from "../../data/texts";
import ReactMarkdown from "react-markdown";

export default async function ReadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const text = texts.find((t) => t.slug === slug);

  if (!text) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-xl text-red-600">Твір не знайдено.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{text.title}</h1>
      <p className="text-gray-600 mb-4">Автор: {text.author}</p>
      <article className="prose prose-lg max-w-2xl">
        <ReactMarkdown>{text.content}</ReactMarkdown>
      </article>
    </div>
  );
}
