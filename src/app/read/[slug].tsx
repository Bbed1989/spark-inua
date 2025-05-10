import { useRouter } from "next/router";

export default function Read() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Читання твору</h1>
      <p className="text-lg">Ви читаєте твір: {slug}</p>
      <a href="/authors" className="text-blue-500 underline mt-4">Повернутися до авторів</a>
    </div>
  );
}
