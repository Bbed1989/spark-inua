export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-900 p-6 space-y-8">
      <h2 className="text-3xl font-bold text-blue-800">Про платформу</h2>
      <p className="max-w-2xl text-center text-lg text-gray-700">
        Ми створюємо простір для живої української літератури.
        <br />
        Це місце, де автори можуть публікувати свої твори, читачі — знаходити
        голоси, які резонують, а спільнота — підтримувати одне одного.
      </p>

      <div className="max-w-2xl space-y-4">
        <h3 className="text-2xl font-semibold text-blue-700">Що ми робимо:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Автори:</strong> публікують лонгріди, оповідання, есе, глави
            романів.
          </li>
          <li>
            <strong>Читачі:</strong> читають безкоштовно та залишають відгуки.
          </li>
          <li>
            <strong>Підтримка:</strong> авторів — через донати або внутрішні
            бонуси.
          </li>
          <li>
            <strong>Платформа:</strong> заохочує взаємодію, видимість і повагу.
          </li>
        </ul>
      </div>

      <div className="text-center text-gray-600 mt-6">
        <p className="italic">Пиши. Читай. Підтримуй.</p>
      </div>
    </div>
  );
}
