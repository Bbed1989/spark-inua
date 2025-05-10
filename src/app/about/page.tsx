// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Про платформу</h1>
      <p className="text-lg mb-4">
        <strong>Ми створюємо простір для живої української літератури.</strong>
      </p>
      <p className="mb-4">
        Це не просто сайт для текстів. Це місце, де автори можуть публікувати свої твори, читачі — знаходити голоси, які резонують, а спільнота — підтримувати одне одного.
      </p>
      <p className="mb-4">
        Ми особливо підтримуємо тих, чий досвід часто лишається поза літературою — <strong>ветеранів, волонтерів, очевидців змін.</strong> Віримо, що їхні історії важливі. Вони можуть бути художніми, документальними, болючими чи смішними — головне, що вони справжні.
      </p>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">Що ми робимо:</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><strong>Автори:</strong> публікують лонгріди, оповідання, есе, глави романів.</li>
        <li><strong>Читачі:</strong> читають безкоштовно та залишають відгуки.</li>
        <li><strong>Підтримка:</strong> авторів — через донати або внутрішні бонуси.</li>
        <li><strong>Платформа:</strong> заохочує взаємодію, видимість і повагу.</li>
      </ul>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">Наш підхід</h2>
      <p className="mb-4">
        Ми говоримо просто. Ми віримо в силу слова. Ми будуємо нову літературну екосистему, де можна бути собою і не боятися писати.
      </p>

      <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 text-xl italic">
        Пиши. Читай. Підтримуй.
      </blockquote>
    </div>
  );
}
