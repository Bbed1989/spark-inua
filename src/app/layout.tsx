// src/app/layout.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body>
        <SessionWrapper>
          <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50 text-gray-900 p-4">
            <Header />
            <main className="flex-1 w-full max-w-4xl p-4 mt-8">{children}</main>
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
