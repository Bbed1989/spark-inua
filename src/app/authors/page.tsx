// src/app/authors/page.tsx

type Author = {
  id: number;
  name: string;
  bio: string;
};

const authors: Author[] = [
  {
    id: 1,
    name: "Леся Українка",
    bio: "Поетка, драматургиня, перекладачка. Її творчість поєднує боротьбу, інтелект і глибоку емоційність.",
  },
  {
    id: 2,
    name: "Іван Франко",
    bio: "Письменник, вчений, політичний діяч. Один із найвпливовіших мислителів свого часу.",
  },
  {
    id: 3,
    name: "Ольга Кобилянська",
    bio: "Письменниця, феміністка. Її твори досліджують жіночу долю, свободу й самореалізацію.",
  },
  {
    id: 4,
    name: "Микола Хвильовий",
    bio: "Прозаїк, публіцист, ідеолог «українського ренесансу». Відомий своєю експресією та політичним запалом.",
  },
];

export default function AuthorsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-8">Автори</h1>
      <div className="space-y-6 w-full max-w-2xl">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white rounded-lg shadow p-6 text-left hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-700">{author.name}</h2>
            <p className="text-gray-700 mt-2">{author.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
