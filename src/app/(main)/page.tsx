'use client';
import { VerseCard } from '@/src/components/features/verseCard';
import { getApprovedVerse } from '@/src/services/verseService';
import { Verse } from '@/src/types/types';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const dailyVerse = await getApprovedVerse();
        setVerse(dailyVerse);
      } catch (err) {
        setError('Erro ao carregar versículo');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="card">
          <VerseCard verse={null} />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="text-center p-8 bg-white rounded-xl shadow-md">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Tentar novamente
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="card">
        <VerseCard verse={verse} />
      </div>
      
      <div className="text-center mt-6">
        <a 
          href="/enviar_versiculo" 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          ✍️ Enviar Meu Versículo
        </a>
      </div>
      
      <div className="text-center mt-5 p-4 bg-white rounded-xl shadow-md">
        <img src="/Logo Conecta - Preto.png" alt="Logo Conecta" className="max-w-[200px] h-auto inline-block" />
      </div>
    </main>
  );
}