// src/components/features/VerseCard.tsx
import { Card } from '@/src/components/ui/card';
import { Verse } from '@/src/types/types'; // Vamos criar este tipo no próximo passo

interface VerseCardProps {
  verse: Verse | null;
}

export const VerseCard = ({ verse }: VerseCardProps) => {
  if (!verse) {
    return (
      <Card className="text-center p-8">
        <p>Carregando versículo...</p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="p-6 bg-gradient-to-r from-blue-500 to-gray-800 text-white">
        <p className="text-xl text-center mb-4">"{verse.text}"</p>
        <p className="text-right italic text-sm opacity-90">{verse.reference}</p>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Lição</h2>
        <p className="text-gray-600">{verse.lesson}</p>
      </div>
    </Card>
  );
};