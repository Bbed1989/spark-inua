// src/app/layout.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 text-gray-900 p-4">
      <Header /> {/* Використовуємо компонент Header */}
      
      <main className="flex-1 w-full max-w-4xl p-4 mt-8">{children}</main>
      
      <Footer /> {/* Використовуємо компонент Footer */}
    </div>
  );
}
