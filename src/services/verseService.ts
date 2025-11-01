// src/services/verseService.ts
import { Verse } from '@/src/types/types';

// Mock de dados (substituir por chamadas de API reais)
const verses: Verse[] = [
    { id: '1', text: "Tu contas as minhas aflições; põe as minhas lágrimas no teu odre; não estão elas no teu livro?", reference: "João 3:16", lesson: "Quantas lágrimas caem em segredo, absorvidas pelo travesseiro ou pelo chão da solidão? Este versículo nos apresenta uma imagem divina profundamente comovente: Deus não apenas vê, mas coleciona cada lágrima. Cada uma é recolhida e guardada como um tesouro precioso. Sua dor não é um arquivo esquecido; é um odre sagrado. Sua tristeza não é um número estatístico; é uma história registrada. A lição aqui é que nenhuma dor é desperdiçada, nenhum sofrimento é insignificante. O que para o mundo é invisível, para Deus é um registro de amor. Sua história de luta está sendo transformada, gota a gota, em um testemunho futuro de resgate.", isApproved: true },
    { id: '2', text: "Entrega o teu caminho ao Senhor...", reference: "Salmos 37:5", lesson: "Muitas vezes tentamos resolver...", isApproved: true },
    { id: '3', text: "Um novo versículo enviado pelo usuário...", reference: "Gênesis 1:1", lesson: "Aguardando aprovação.", isApproved: false }
];

export const getApprovedVerse = async (): Promise<Verse> => {
    // Lógica para pegar um versículo aprovado aleatório
    const approved = verses.filter(v => v.isApproved);
    const randomVerse = approved[Math.floor(Math.random() * approved.length)];
    return new Promise(resolve => setTimeout(() => resolve(randomVerse), 500));
};

export const submitVerse = async (data: Omit<Verse, 'id' | 'isApproved'>): Promise<Verse> => {
    // Lógica para enviar um novo versículo para aprovação
    console.log("Novo versículo enviado:", data);
    const newVerse: Verse = { ...data, id: '4', isApproved: false };
    verses.push(newVerse);
    return new Promise(resolve => setTimeout(() => resolve(newVerse), 500));
};