// src/app/(main)/page.tsx
import { VerseCard } from '@/src/components/features/verseCard';
import { getApprovedVerse } from '@/src/services/verseService';

export default async function HomePage() {
  const dailyVerse = await getApprovedVerse();

  return (
    <main>
      <div className="card">
        <VerseCard verse={dailyVerse} />
      </div>
      <div className="text-center mt-5 p-4 bg-white rounded-xl shadow-md">
        <img src="/Logo Conecta - Preto.png" alt="Logo Conecta" className="max-w-[200px] h-auto inline-block" />
      </div>
    </main>
  );
}