import '@/src/styles/globals.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen p-5">
        <div className="max-w-md mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-gray-800 text-3xl font-bold mb-2">📖 Versículo do Dia 📖</h1>
            <p className="text-gray-500">Inspiração e reflexão para o seu dia</p>
          </header>
          {children}
          <footer className="text-center mt-8 text-gray-500 text-sm">
            <p>Conecta - Igreja Cristã</p>
          </footer>
        </div>
      </body>
    </html>
  );
}